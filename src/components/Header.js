import React, {useState} from 'react';
import {NavbarBrand, Navbar, NavbarToggler,Collapse, NavItem,Nav } from 'reactstrap';
import {Link} from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
            <Navbar className="border-bottom" expand="md" light>
                <NavbarBrand > COVID-19 </NavbarBrand>
                <NavbarToggler onClick={toggle} className="border-0"  navbar/>
                <Collapse isOpen={isOpen} color="black" navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link className="nav-link" to="/"> Data </Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/news"> News </Link>
                </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header;