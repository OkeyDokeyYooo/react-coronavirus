import React from 'react';
import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

const userStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

function NewsCard(props) {
    const classes = userStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="auto"
                    image={props.img === null ? "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Global_News.svg/1280px-Global_News.svg.png" : props.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h5">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                        {props.description}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" component="p" gutterBottom>
                        {props.date}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" component="b">
                        {props.source}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <a href={props.link} target="_blank" rel="noreferrer noopener">
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </a>
            </CardActions>
        </Card>
    )
}

export default NewsCard;