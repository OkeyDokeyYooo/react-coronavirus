import React from 'react'
import {Card, CardActions, CardContent, Button, Typography, makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      minWidth: 300,
    },
    title: {
      fontSize: 24,
    },
    data: {
        fontSize: 20,
    },
    pos: {
      marginBottom: 10,
    },
});

const theme = createMuiTheme({
    typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontSize: 32,
    },
  });

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function SummaryCard(props) {
    const classes = useStyles();
    const data = numberWithCommas(props.data)
    return(
        <Card className={classes.root} variant="outlined" >
            <CardContent>
                <ThemeProvider theme={theme}>
                    <Typography className={classes.title} gutterBottom variant="h4">
                        {props.title}
                    </Typography>   
                </ThemeProvider>
                <Typography className={classes.data} variant="h5">
                    {data}
                </Typography>
            </CardContent>
        </Card>
    )

}