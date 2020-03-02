import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import {NavbarBrand, Navbar, NavbarToggler,Collapse, NavItem,Nav } from 'reactstrap';
import {Link} from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
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
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

const useStyles = makeStyles(theme => ({
    root: {
    flexGrow: 1,
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
                <AppBar position="sticky">
                    <Toolbar variant="dense">
                        <Typography variant="h6" className={classes.title}>
                            COVID-19
                        </Typography>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Data" component={Link} to="/"/>
                            <Tab label="News" component={Link} to="/news" />
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </React.Fragment>

        // <div>
        //     <Navbar className="border-bottom" expand="md" light>
        //         <NavbarBrand > COVID-19 </NavbarBrand>
        //         <NavbarToggler onClick={toggle} className="border-0"  navbar/>
        //         <Collapse isOpen={isOpen} color="black" navbar>
        //         <Nav className="ml-auto" navbar>
        //         <NavItem>
        //             <Link className="nav-link" to="/"> Data </Link>
        //         </NavItem>
        //         <NavItem>
        //             <Link className="nav-link" to="/news"> News </Link>
        //         </NavItem>
        //         </Nav>
        //         </Collapse>
        //     </Navbar>
        // </div>
    )
}

export default Header;