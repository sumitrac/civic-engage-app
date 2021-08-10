import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
// import AboutPage from './AboutPage'

const Navbar = () => {
    return (
        <nav className="nav-wrappers.grey. darken-3">
            <div className="container">
                <Link to='/' ClassName="brand-logo">Civic Engage App</Link>
                <SignedInLinks />
                <SignedOutLinks />
                {/* <AboutPage /> */}
            </div>
        </nav>
    )
}

export default Navbar;