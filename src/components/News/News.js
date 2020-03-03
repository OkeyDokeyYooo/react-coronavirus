import React, { Component } from 'react'
import {url} from '../../config/news_config'
import axios from 'axios';
import { UncontrolledCarousel} from 'reactstrap'
import { withStyles, Grid, Container} from '@material-ui/core'
import moment from 'moment'

import NewsCard from './NewsCard'

const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
  });

const numOfTopNews = 3;


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            topThreeNews:[],
        }
    }

    // get all the news from calling the api and take the first three news from the obj and render it to the slider
    getNews() {
        axios.get(url)
            .then(res => {
                const news = res.data.articles
                const topThreeNews = news.slice(0,numOfTopNews)
                const topNewsObj = topThreeNews.map((obj, i) => {
                    return ({
                        src: obj.urlToImage,
                        key: i,
                        header: obj.title,
                        caption: moment(obj.publishedAt).format("YYYY MMMM DD"),
                        url: news.url,
                    })
                })
                this.setState({
                    news: news.slice(numOfTopNews),
                    topThreeNews: topNewsObj,
                })
            })
    }

    componentWillMount () {
        this.getNews();
    }

    render () {
        const classes = this.props;

        return (
            <div className={classes.root}>
                <Container maxWidth="xl">
                    <UncontrolledCarousel items={this.state.topThreeNews}/>
                </Container>
                <Grid container spacing={3} direction="row" justify="space-flex-start" alignItems="flex-start" style={{padding: '25px'}}>
                    {this.state.news.map((news) => {
                    return (
                        <Grid item xs={3} >
                            <NewsCard 
                                img={news.urlToImage} 
                                title={news.title} 
                                description={news.description} 
                                date={news.publishedAt} 
                                source={news.source.name}
                                link={news.url}
                            />
                        </Grid>
                    )})}
                </Grid>
            </div>
        )
    }
}

export default withStyles(useStyles)(News);