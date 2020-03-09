import React from 'react'
import {Card, CardContent, Typography, makeStyles, ThemeProvider, createMuiTheme, Grid} from '@material-ui/core'
import { red, green } from '@material-ui/core/colors';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

const useStyles = makeStyles({
    root: {
      minWidth: 300,
      '&:hover': {
        background: "#edf2f7",
        border: 2
        // color: "white"
      },
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

const Comparsion = (props) => {
  // console.log(props.diff)
  if ( props.diff > 0){
    if (props.title === "Total Recovered"){
      return (
        <Grid container>
          <Grid item>
           <TrendingUpIcon style={{ color: green[500] }}/>
          </Grid>
          <Grid item style={{paddingLeft: 5}}>
            <Typography> {props.diff} </Typography>
          </Grid>
          <Grid item style={{paddingLeft: 7, lineHeight: 2}}>
            <Typography variant="caption" style={{color: '#808080'}}>(Compare to Yday)</Typography>
          </Grid>
        </Grid>
      )
    } else {
      return (
        <Grid container>
          <Grid item>
           <TrendingUpIcon style={{ color: red[500] }}/>
          </Grid>
          <Grid item style={{paddingLeft: 5}}>
            <Typography> {props.diff} </Typography>
          </Grid>
          <Grid item style={{paddingLeft: 7, lineHeight: 2}}>
            <Typography variant="caption" style={{color: '#808080'}}>(Compare to Yday)</Typography>
          </Grid>
        </Grid>
      )
    }

  } else if (props.diff === 0) {
    return (
      <Grid container>
        <Grid item>
         <TrendingFlatIcon style={{ color: red[500] }}/>
        </Grid>
        <Grid item style={{paddingLeft: 5}}>
          <Typography> {props.diff} </Typography>
        </Grid>
        <Grid item style={{paddingLeft: 7, lineHeight: 2}}>
          <Typography variant="caption" style={{color: '#808080'}}>(Compare to Yday)</Typography>
        </Grid>
      </Grid>
    )
  } else {
    if (props.title === "Total Recovered"){
      return (
        <Grid container>
          <Grid item>
           <TrendingDownIcon style={{ color: red[500] }}/>
          </Grid>
          <Grid item style={{paddingLeft: 5}}>
            <Typography> {props.diff} </Typography>
          </Grid>
          <Grid item style={{paddingLeft: 7, lineHeight: 2}}>
            <Typography variant="caption" style={{color: '#808080'}}>(Compare to Yday)</Typography>
          </Grid>
        </Grid>
      )
    } else {
      return (
        <Grid container>
          <Grid item>
           <TrendingDownIcon style={{ color: green[500] }}/>
          </Grid>
          <Grid item style={{paddingLeft: 5}}>
            <Typography> {props.diff} </Typography>
          </Grid>
          <Grid item style={{paddingLeft: 7, lineHeight: 2}}>
            <Typography variant="caption" style={{color: '#808080'}}>(Compare to Yday)</Typography>
          </Grid>
        </Grid>
      )
    }

  }
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
                <Grid style={{paddingLeft: 40}}>
                  <Comparsion diff={props.diff}/>
                </Grid>
            </CardContent>
        </Card>
    )

}