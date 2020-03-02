import React, { Component } from 'react'
import {url} from '../config/news_config'
import axios from 'axios';
import { UncontrolledCarousel, Container, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

    

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            items: [
                {
                  src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
                  altText: 'Slide 1',
                  caption: 'Slide 1'
                },
                {
                  src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
                  altText: 'Slide 2',
                  caption: 'Slide 2'
                },
                {
                  src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
                  altText: 'Slide 3',
                  caption: 'Slide 3'
                }
              ],
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
        return (
            <div>
                <Container >
                    <Col xs="12">
                        <UncontrolledCarousel items={this.state.topThreeNews}/>
                    </Col>
                </Container>
                {this.state.news.map((news) => {
                    return (
                        <Container xs="6">
                            <Col xs="6">
                                <Card>
                                    <CardImg top width="100%" src={news.urlToImage}/>
                                    <CardBody>
                                    <CardTitle>{news.title}</CardTitle>
                                    <CardText>{news.description}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Container>

                    )
                })}
            </div>
        )
    }
}

export default News;