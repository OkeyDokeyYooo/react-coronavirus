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
            news: null,
            topThreeNews: [],
        }
        this.getNews = this.getNews.bind(this)
    }

    // get all the news from calling the api and take the first three news from the obj and render it to the slider
    // Get the article then filter the ones has duplicated
    getNews(pageNum) {
        axios.get(url + "&page=" + pageNum)
            .then(res => {
                console.log("getNews", pageNum)
                console.log(res.data.articles)
                const seen = new Set()
                const news = res.data.articles.filter(el => {
                    const duplicate = seen.has(el.title);
                    seen.add(el.title);
                    return !duplicate;
                });
                let topThreeNews = news.slice(0,numOfTopNews)
                let topNewsObj = topThreeNews.map((obj, i) => {
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
        window.scrollTo(0,0)
    }

    componentDidMount(){
        this.getNews(1)
    }

    componentWillUnmount(){
        this.setState({
            news: null,
            topThreeNews: []
        })
    }


    render () {
        const classes = this.props;

        return (
            <div className={classes.root}>
                <Container maxWidth="lg">
                    {/* <PictureCarousel topThreeNews={this.state.topThreeNews}/> */}
                    {/* {console.log(this.state.topThreeNews)} */}
                    <UncontrolledCarousel items={this.state.topThreeNews} /> 
                    <Grid container spacing={3} direction="row" justify="flex-start" alignItems="flex-start" style={{padding: '30px'}}>
                    {
                        this.state.news &&
                        this.state.news.map((news) => {
                        return (
                            <Grid item xs={6} sm={4} lg={3} key={news.title}>
                                <NewsCard 
                                    img={news.urlToImage} 
                                    title={news.title} 
                                    description={news.description} 
                                    date={news.publishedAt} 
                                    source={news.source.name}
                                    link={news.url}
                                    key={news.description}
                                />
                            </Grid>
                    )})}
                    </Grid>
                    {
                        this.state.news &&
                        <Grid container justify="center">
                        <Pagination count={10} shape="rounded" onChange={(obj, page) => {
                                this.getNews(page)
                            }}/>
                        </Grid>

                    }

                </Container>
            </div>
        )
    }
}

export default withStyles(useStyles)(News);