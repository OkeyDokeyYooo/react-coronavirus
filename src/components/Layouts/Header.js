import React from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab, CssBaseline, Typography, Toolbar, AppBar, Slide, makeStyles} from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      '&:hover' : {
        backgroundColor: 'transparent',
        color : 'black'
      },
      fontSize: 18
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize: 24
    },
}));

  
function Header() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <React.Fragment>
            <CssBaseline />
                <AppBar position="sticky" className={classes.AppBar}>
                    <Toolbar variant="dense">
                        <Typography variant="h6" className={classes.title}>
                          Coronavirus Disease (COVID-19)
                        </Typography>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Data" component={Link} to="/" className={classes.root}/>
                            <Tab label="News" component={Link} to="/news" className={classes.root}/>
                        </Tabs>
                    </Toolbar>
                </AppBar>
        </React.Fragment>
    )
}

export default Header;