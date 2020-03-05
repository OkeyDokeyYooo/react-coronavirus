import React from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab, CssBaseline, useScrollTrigger, Typography, Toolbar, AppBar, Slide, makeStyles} from '@material-ui/core';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  

const useStyles = makeStyles(theme => ({
    root: {
    flexGrow: 1,
    '&:hover' : {
      backgroundColor: 'transparent',
      color : 'black'
    }
    },
    menuButton: {
    marginRight: theme.spacing(2),
    },
    title: {
    flexGrow: 1,
    },
}));

  
function Header(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar position="sticky" className={classes.AppBar}>
                    <Toolbar variant="dense">
                        <Typography variant="h6" className={classes.title}>
                            COVID-19
                        </Typography>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Data" component={Link} to="/" className={classes.root}/>
                            <Tab label="News" component={Link} to="/news" className={classes.root}/>
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </React.Fragment>
    )
}

export default Header;