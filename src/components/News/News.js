import React, { Component } from 'react'
import {url} from '../../config/news_config'
import axios from 'axios';
import { UncontrolledCarousel} from 'reactstrap'
import { withStyles, Grid, Container} from '@material-ui/core'
import {Pagination} from '@material-ui/lab'
import moment from 'moment'

import NewsCard from './NewsCard'

const useStyles = theme => ({
    root: {
      flexGrow: 1,
      '& > *':{
          marginTop: theme.spacing(5),
      },
    },
  });

const numOfTopNews = 4;


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
                <Container maxWidth="lg">
                    <UncontrolledCarousel items={this.state.topThreeNews}/> 
                    <Grid container spacing={3} direction="row" justify="flex-start" alignItems="flex-start" style={{padding: '30px'}}>
                    {this.state.news.map((news) => {
                    return (
                        <Grid item xs={6} sm={4} lg={3} justify="center" >
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
                    <Grid container justify="center">
                        <Pagination count={10} shape="rounded" onChange={(obj, page) => {
                            console.log(page)
                        }}/>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default withStyles(useStyles)(News);