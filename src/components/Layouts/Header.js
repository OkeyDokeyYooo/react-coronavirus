import React from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab, CssBaseline, Typography, Toolbar, AppBar,makeStyles} from '@material-ui/core';
import './Header.css'
import SideNavBar from './SideNavBar'


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
    sideBar: {
      display: 'none'
    },
    '@media (max-width: 768px)': {
      tabs: {
        display: 'none'
      },
      sideBar: {
        display: 'block'
      },
      title: {
        fontSize: 15
      }
    }
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
                <AppBar position="sticky" >
                    <Toolbar variant="dense" className={classes.appBar}>
                        <Typography className={classes.title}>
                          <Link to='/' className='navLogo'>Coronavirus Disease (COVID-19)</Link>
                        </Typography>
                        <Tabs value={value} onChange={handleChange} className={classes.tabs}>
                            <Tab label="Data" component={Link} to="/" className={classes.root}/>
                            <Tab label="News" component={Link} to="/news" className={classes.root}/>
                        </Tabs>
                        <div className={classes.sideBar}><SideNavBar /></div>
                    </Toolbar>
                </AppBar>
        </React.Fragment>
    )
}

export default Header;