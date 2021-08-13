import React, { useContext } from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import { NavLink as Link } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';


const Navbar = () => {
    const user = useContext(UserContext);
    return (
    <>
        <Nav>
        {/* <Bars /> */}
            <NavMenu>
                {/* <NavLink to='/' activeStyle>Civic Engage App</NavLink> */}
                <NavLink to='/' activeStyle>About</NavLink>
                <NavLink to='/EventPage' activeStyle>Events</NavLink>
                {/* <NavLink to='/createEvent' activeStyle>Create Event</NavLink> */}
                {/* <NavBtnLink to='/signUp' activeStyle>Sign Up</NavBtnLink> */}
                <NavBtnLink to='/signIn'>Sign In</NavBtnLink>
                { user && <NavBtnLink to='/profilePage'>Profile</NavBtnLink> }
                
                {/* <NavBtnLink to='/Application' activeStyle>Sign Up</NavBtnLink> */}

                
            </NavMenu>
        </Nav>
    </>
    );
    };

export default Navbar;