import React from 'react'
import {Card, CardContent, Typography, makeStyles, ThemeProvider, createMuiTheme, Grid} from '@material-ui/core'
import { red, green } from '@material-ui/core/colors';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles({
    root: {
      width: 400,
      borderColor: "black",
      '&:hover': {
        background: "#edf2f7",
        border: 2,
        // color: "white"
      },
    },
    title: {
      fontSize: 24,
    },
    totalCases: {
      fontSize: 36,
      color: '#D63447',
    },
    totalDeaths: {
      fontSize: 36,
      color: '#5D594D',
    },
    totalRecovered: {
      fontSize: 36,
      color: '#148F77',
    },
    pos: {
      marginBottom: 10,
    },
    '@media (max-width: 768px)': {
      root: {
          width: 'auto', 
          height: 'auto', 
          maxWidth: '100%',  
          maxHeight: '100%',
      },
      title: {
        fontSize:10
      },
      totalCases: {
        fontSize: 16,
        color: '#D63447',
      },
      totalDeaths: {
        fontSize: 16,
        color: '#5D594D',
      },
      totalRecovered: {
        fontSize: 16,
        color: '#148F77',
      },
    }
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
           <ArrowUpwardIcon style={{ color: green[500] }}/>
          </Grid>
          <Grid item style={{paddingLeft: 5}}>
            <Typography> {props.diff} </Typography>
          </Grid>
          <Grid item style={{paddingLeft: 7, lineHeight: 2}}>
            <Typography variant="caption" style={{color: '#808080'}}>(Daily Change)</Typography>
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
            <Typography variant="caption" style={{color: '#808080'}}>(Daily Change)</Typography>
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
          <Typography variant="caption" style={{color: '#808080'}}>(Daily Change)</Typography>
        </Grid>
      </Grid>
    )
  } else {
    if (props.title === "Total Recovered"){
      return (
        <Grid container>
          <Grid item>
           <ArrowDownwardIcon style={{ color: red[500] }}/>
          </Grid>
          <Grid item style={{paddingLeft: 5}}>
            <Typography> {props.diff} </Typography>
          </Grid>
          <Grid item style={{paddingLeft: 7, lineHeight: 2}}>
            <Typography variant="caption" style={{color: '#808080'}}>(Daily Change)</Typography>
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
            <Typography variant="caption" style={{color: '#808080'}}>(Daily Change)</Typography>
          </Grid>
        </Grid>
      )
    }

  }
}

export default function SummaryCard(props) {
  console.log(props)
    const classes = useStyles();
    const data = numberWithCommas(props.data)
    let dataTag; // dataTag will have different color on different title
    if (props.title === "Total Cases"){
      dataTag = <Typography className={classes.totalCases}>{data}</Typography>
    } else if (props.title === "Total Deaths"){
      dataTag = <Typography className={classes.totalDeaths} >{data}</Typography>
    } else {
      dataTag = <Typography className={classes.totalRecovered} >{data}</Typography>
    }

    return(
        <Card className={classes.root} variant="outlined" >
            <CardContent>
                <ThemeProvider theme={theme}>
                    <Typography className={classes.title} gutterBottom variant="h5">
                        {props.title}
                    </Typography>   
                </ThemeProvider>
                {dataTag}
                <Grid style={{paddingLeft: 40}}>
                  <Comparsion diff={props.diff} title={props.title}/>
                </Grid>
            </CardContent>
        </Card>
    )

}