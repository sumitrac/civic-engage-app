import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import { NavLink as Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <>
        <Nav>
        {/* <Bars /> */}
            <NavMenu>
                {/* <NavLink to='/' activeStyle>Civic Engage App</NavLink> */}
                <Link to='/' activeStyle>About</Link>
                <NavLink to='/EventPage' activeStyle>Events</NavLink>
                <NavLink to='/createEvent' activeStyle>Create Event</NavLink>
                <NavBtnLink to='/signUp' activeStyle>Sign Up</NavBtnLink>
                <NavBtnLink to='/signInPage'>Sign In</NavBtnLink>
                
                <NavBtnLink to='/Application' activeStyle>Sign Up</NavBtnLink>

                
            </NavMenu>
        </Nav>
    </>
    );
    };

export default Navbar;