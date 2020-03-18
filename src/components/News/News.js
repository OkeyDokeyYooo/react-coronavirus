import React, { Component } from 'react'
import axios from 'axios';
import { withStyles, Grid, Container} from '@material-ui/core'
import {Pagination} from '@material-ui/lab'
import moment from 'moment'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import {animateScroll as scroll} from 'react-scroll'
import NewsCard from './NewsCard'


const useStyles = theme => ({
    root: {
      flexGrow: 1,
      '& > *':{
          marginTop: theme.spacing(5),
      },
    },
    container: {
        alignItems: 'stretch'
    }
  });

const numOfTopNews = 4;


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: null,
            topNews: [],
        }
        this.getNews = this.getNews.bind(this)
    }

    // get all the news from calling the api and take the first three news from the obj and render it to the slider
    // Get the article then filter the ones has duplicated
    getNews(pageNum) {
        const today = moment.utc().format('YYYY-MM-DD')
        const request = "http://18.218.58.203:8000/news/" + today
        axios.get(request)
            .then(res => {
                let currNewsList = res.data.news[pageNum - 1]
                const seen = new Set()
                // remove duplicated news from the list 
                const news = currNewsList.filter(el => {
                    const duplicate = seen.has(el.title);
                    seen.add(el.title);
                    return !duplicate;
                });
                // remove the news which does not have image
                let topNews = news.slice(0,numOfTopNews).filter(el => {
                    return el.urlToImage !== null
                })
                let topNewsObj = topNews.map((obj, i) => {
                    return ({
                        src: obj.urlToImage,
                        key: i,
                        header: obj.title,
                        caption: moment(obj.publishedAt).format("YYYY MMMM DD"),
                        url: obj.url,
                    })
                })
                this.setState({
                    news: news.slice(numOfTopNews),
                    topNews: topNewsObj,
                })
            })
        scroll.scrollToTop();
        // window.scrollTo(0,0)
    }

    componentDidMount(){
        this.getNews(1)
    }

    componentWillUnmount(){
        this.setState({
            news: null,
            topNews: []
        })
    }


    render () {
        const classes = this.props;

        return (
            <div className={classes.root}>
                <Container style={{width: "85%"}} className={classes.container}>
                    <div className="thisisdiv"> 
                    <Slider autoplay={5000} >
                        {this.state.topNews.map((item, index) => {
                            return (
                            <div key={index} style={{ background: `url('${item.src}') no-repeat center center`, cursor: 'pointer'}} 
                                className="slider-content"
                                onClick={() => {
                                    window.open(item.url, '_blank')
                                }}
                            >
                                <div className="inner">
                                    <h5> {item.header}</h5>
                                    <p>  {item.caption}</p>
                                </div>
                            </div>)
                        })}
                    </Slider>
                    </div>
                    <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start" style={{padding: '30px'}}>
                    {
                        this.state.news &&
                        this.state.news.map((news) => {
                        return (
                            <Grid item xs={12} sm={6} lg={3} key={news.title}>
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
                        <Grid container justify="center" style={{padding: 50}}>
                        <Pagination count={5} shape="rounded" onChange={(obj, page) => {
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