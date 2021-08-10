import React from 'react'
import { NavLink } from 'react-router-dom'

const AboutPage = () => {
    return (
        <ul className="right">
            <li><NavLink to='/aboutpage'>About</NavLink></li>
        </ul>
    )
}

export default AboutPage;