import React, { Component } from 'react'
import axios from 'axios';
import {Grid} from '@material-ui/core'
import {Pagination} from '@material-ui/lab'
import moment from 'moment'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import {animateScroll as scroll} from 'react-scroll'
import NewsCard from './NewsCard'

import './News.css'


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
        const request = "https://api.covid19.hackhub.cn/news/" + today
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
        return (
            <div className="news-page-container">
                <div className="slider-component"> 
                    <Slider autoplay={6000} >
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
                <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start" style={{marginTop: "1.5rem"}}>
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
                    <div className="pagination">
                        <Pagination count={5} shape="rounded" style={{display: "inline-block"}} onChange={(obj, page) => {
                            this.getNews(page)
                        }}/>
                    </div>
                }
            </div>
        )
    }
}

export default News;