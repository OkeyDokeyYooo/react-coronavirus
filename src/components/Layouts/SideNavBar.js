import React from 'react';
import {makeStyles, Drawer, List, ListItem,ListItemText} from '@material-ui/core'
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

import './Header.css'


const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

const SideNavBar = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        toggle: false
    })

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({toggle: open});
    };

    const sideList = side => (
        <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        >
            <List className="sideNavList">
                <ListItem key={1} >
                    <Link to='/' style={{color:'black'}}>
                        <ListItemText primary={'Data'} />
                    </Link>
                </ListItem>
                <ListItem key={2} className="sideNavListItem">
                    <Link to='/News' style={{color:'black'}}>
                        <ListItemText primary={'News'} />
                    </Link>
                </ListItem>
            </List>
        </div>
    )

    return (
        <div>
            <MenuIcon onClick={toggleDrawer(true)}> </MenuIcon>
            <Drawer anchor="right" open={state.toggle} onClose={toggleDrawer(false)}>
                {sideList('right')}
            </Drawer>
        </div>

    )

}

export default SideNavBar;