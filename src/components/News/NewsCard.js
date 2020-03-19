import React from 'react';
import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import Moment from 'react-moment';


const userStyles = makeStyles({
    root: {
        maxWidth: 600,
        height: 390,
        position: 'relative'
    },
    action: {
        position: 'absolute',
        bottom: 0
    },
    imageContainer: {
        height: 170,
        width: '100%'
    },
    img: {
        height: "100%",
        width: "100%",
        padding: 1
    }
});

function NewsCard(props) {
    const classes = userStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => {
                window.open(props.link, '_blank')
            }}>
                <div className={classes.imageContainer}>
                    <CardMedia
                        component="img"
                        image={ (props.img === null || props.img === "") ? "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Global_News.svg/1280px-Global_News.svg.png" : props.img}
                        className={classes.img}
                    />
                </div>
                <CardContent >
                    <Typography gutterBottom  component="h5" style={{fontSize: '30', fontWeight: '500'}}>
                        {props.title}
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                        {props.description}
                    </Typography> */}
                    <Typography variant="caption" color="textSecondary" component="p" gutterBottom>
                        <Moment format="YYYY MMMM DD">
                            {props.date}
                        </Moment>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.action}>
                <a href={props.link} target="_blank" rel="noreferrer noopener">
                    <Button size="small" color="secondary">
                        Learn More
                    </Button>
                </a>
                <Typography variant="caption" color="textPrimary" component="b">
                        {props.source}
                </Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard;