import React from 'react';
import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import Moment from 'react-moment';


const userStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
});

function NewsCard(props) {
    const classes = userStyles();

    return (
        <Card className={classes.root} key={props.key}>
            <CardActionArea onClick={() => {
                window.open(props.link, '_blank')
            }}>
                <CardMedia
                    component="img"
                    height="auto"
                    image={props.img === null ? "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Global_News.svg/1280px-Global_News.svg.png" : props.img}
                />
                <CardContent >
                    <Typography gutterBottom variant="h6" component="h5" style={{}}>
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
            <CardActions>
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