import React, {useState} from 'react'
import {Card, CardActions, CardContent, Button, Typography, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});

export default function SummaryCard(props) {
    const classes = useStyles();
    return(
        <Card className={classes.root} variant="outlined" >
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="h5">
                    {props.data}
                </Typography>
            </CardContent>
        </Card>
    )

}