import React, { useContext, useState } from 'react';
// import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import { Link } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
// import { Nav, Container } from 'react-bootstrap';
import navbar from './Navbar.css'

// const Navbar = () => {
//         const user = useContext(UserContext);
//         return (
//         <>
//             <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
//                 <Container>
//                     <Navbar.Brand>Civic Engage</Navbar.Brand>
//                     <Navbar.Toggle aria-controls='responsive-navbar-nav' />
//                     <Navbar.Collapse id='responsive-navbar-nav'>
//                         <Nav>
//                             <Nav.Link href='/'>Home</Nav.Link>
//                             <Nav.Link href='/EventPage'>Events</Nav.Link>
//                             <Nav.Link href='/signIn'>Sign In</Nav.Link>
//                             { !user && <Nav.Link to='/signIn'>Sign In</Nav.Link> }
//                             {  user && <Nav.Link to='/profilePage'>Profile</Nav.Link> }
//                         </Nav>
//                      </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </>
//         );
//     }
// export default Navbar;

// const Navbar = () => {
//     const user = useContext(UserContext);
//     return (
//     <>
//         <Nav className="naebar">

//             <NavLink to='/'>
//                 <img src={require('./logo.png')} alt='Civic Engage' />
//             </NavLink>
//         {/* <Bars /> */}
//             <NavMenu>
//                 {/* <Nav to='/' activeStyle>Civic Engage App</Nav> */}
//                 <NavLink to='/' activeStyle>About</NavLink>
//                 <NavLink to='/EventPage' activeStyle>Events</NavLink>

//                 {/* <NavBtnLink to='/signUp' activeStyle>Sign Up</NavBtnLink> */}
//                 {/* < NavBtnLink to='/signIn'>Sign In</NavBtnLink> */}
//                 {/* { !user && <NavBtnLink to='/signIn'>Sign In</NavBtnLink> }

//                 { user && <NavBtnLink to='/profilePage'>Profile</NavBtnLink> } */}
//             </NavMenu>
//             <NavBtn>
//                 { !user && <NavBtnLink to='/signIn'>Sign In</NavBtnLink>}
//                 { user && <NavBtnLink to='/profilePage'>Profile</NavBtnLink> }

//             </NavBtn>

//         </Nav>
//     </>
//     );
//     };

// export default Navbar;

const Navbar = () => {
    const user = useContext(UserContext);
    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className="navbar">
            <h3 className="logo">Civic Engage</h3>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}>
                <Link to='/' className="home">
                    <li>Home</li>
                </Link>
                <Link to='/EventPage' className="eventpage">
                    <li>Events</li>
                </Link>
                <Link to='/ContactPage' className="contactpage">
                    <li>Contact</li>
                </Link>
                { !user && <Link to='/signIn' className="signin login">Sign In</Link>}
                { user && <Link to='/profilePage' className="profile login">Profile</Link> }
            </ul>
            {/* <NavBtn> */}
                {/* { !user && <NavBtnLink to='/signIn'>Sign In</NavBtnLink>}
                { user && <NavBtnLink to='/profilePage'>Profile</NavBtnLink> } */}
            {/* </NavBtn> */}

            <button className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (
                <li className="fas fa-times"></li> 
                ) : (
                <li className="fas fa-bars"></li>)}
            </button>
        </nav>
    );
    };

export default Navbar;