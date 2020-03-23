import React from 'react';
import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Box} from '@material-ui/core';
import moment from 'moment-timezone';



const userStyles = makeStyles({
    root: {
        width: '100%',
        height: 390,
        position: 'relative'
    },
    action: {
        position: 'absolute',
        bottom: 0
    },
    imageContainer: {
        height: '25%',
        width: '100%'
    },
    img: {
        height: "100%",
        width: "100%",
    },
    '@media (max-width: 768px)': {
        root: {
            width: '100%',
            height: 300,
            position: 'relative'
        },
        imageContainer: {
            height: 150,
            width: '100%'
        },
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
                    <Typography gutterBottom  component="h5" style={{fontSize: '30', fontWeight: '500'}} >
                        <Box fontFamily="Ubuntu">
                            {props.title}
                        </Box>
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                        {props.description}
                    </Typography> */}
                    <Typography variant="caption" color="textSecondary" component="p" gutterBottom>
                        <Box fontFamily="Ubuntu">
                            {moment(props.date).format("YYYY MMMM DD")}
                        </Box>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.action}>
                <a href={props.link} target="_blank" rel="noreferrer noopener">
                    <Button size="small" color="secondary">
                        <Box fontFamily="Ubuntu">
                            Learn More
                        </Box>
                    </Button>
                </a>
                <Typography variant="caption" color="textPrimary" component="b">
                    <Box fontFamily="Ubuntu">
                        {props.source}
                    </Box>
                </Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard;