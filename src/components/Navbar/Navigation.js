import React, { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';
// import { Navbar, Nav, Container, Brand, Link, Button} from 'react-bootstrap';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

const Navigation = () => {
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

export default Navigation;


// function LoginButton() {
//     const user = useContext(UserContext);
//     if (user) { return (
//         <Nav.Link to='/profilePage'>Profile</Nav.Link>  
//     );
//     }}


// const Navigation = () => {
//     const user = useContext(UserContext);
//     return (
//     <>
//         <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
//             <Container>
//                 <Navbar.Brand>Civic Engage</Navbar.Brand>
//                 <Navbar.Toggle aria-controls='responsive-navbar-nav' />

//                 <Navbar.Collapse id='responsive-navbar-nav'>
//                     <Nav>
//                         <Nav.Link href='/'>Home</Nav.Link>
//                         <Nav.Link href='/eventpage'>Events</Nav.Link>
//                         <Nav.Link href='/signIn'>Sign In</Nav.Link>
//                         {  LoginButton() }
//                         {/* {  user && <Nav.Link to='/profilePage'>Profile</Nav.Link> } */}
//                     </Nav>
//                 </Navbar.Collapse>

//             </Container>
//         </Navbar>
//     </>
//     );
// }

// export default Navigation;