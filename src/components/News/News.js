import React, { Component } from 'react'
import {url} from '../../config/news_config'
import axios from 'axios';
import { UncontrolledCarousel, Container, Col} from 'reactstrap'
import { withStyles, Grid} from '@material-ui/core'

import NewsCard from './NewsCard'

const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
  });


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
                const topThreeNews = news.slice(0,3)
                const topNewsObj = topThreeNews.map(obj => {
                    return ({
                        src: obj.urlToImage,
                        altText: obj.description,
                        caption: obj.title
                    })
                })
                this.setState({
                    news: news,
                    topThreeNews: topNewsObj
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
                <Grid container spacing={3} direction="row" justify="space-evenly" alignItems="flex-start">
                    <Grid item xs={12}>
                        <UncontrolledCarousel items={this.state.topThreeNews}/>
                    </Grid>
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