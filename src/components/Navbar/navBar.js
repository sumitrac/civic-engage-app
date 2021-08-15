import React, { useContext } from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
// import { NavLink as Link } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
// import { Nav, Container } from 'react-bootstrap';

// const Navbar = () => {
//         // const user = useContext(UserContext);
//         return (
//         <>
//             <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
//                 <Container>
//                     {/* <Navbar.Brand>Civic Engage</Navbar.Brand>
//                     <Navbar.Toggle aria-controls='responsive-navbar-nav' />
//                     <Navbar.Collapse id='responsive-navbar-nav'>
//                         <Nav>
//                             <Nav.Link href='/'>Home</Nav.Link>
//                             <Nav.Link href='/EventPage'>Events</Nav.Link>
//                             <Nav.Link href='/signIn'>Sign In</Nav.Link>
//                             { !user && <Nav.Link to='/signIn'>Sign In</Nav.Link> }
//                              {  user && <Nav.Link to='/profilePage'>Profile</Nav.Link> }
//                          </Nav>
//                      </Navbar.Collapse> */}
    
//                  </Container>
//              </Navbar>
//          </>
//          );
//      }
// export default Navbar;



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

                {/* <NavBtnLink to='/signUp' activeStyle>Sign Up</NavBtnLink> */}
                {/* < NavBtnLink to='/signIn'>Sign In</NavBtnLink> */}
                { !user && <NavBtnLink to='/signIn'>Sign In</NavBtnLink> }

                { user && <NavBtnLink to='/profilePage'>Profile</NavBtnLink> }
 
            </NavMenu>
        </Nav>
    </>
    );
    };

export default Navbar;