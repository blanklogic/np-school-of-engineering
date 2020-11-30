import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../images/soelogo.svg'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <>
            <nav className="navigationbar">
                <div className="navigationbar-container">
                    <Link to="/" className="navigationbar-logo">
                        <img src={logo} alt="Logo"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'navigation-menu active' : 'navigation-menu'}>
                        <li className='navigation-item'>
                            <Link to='/' className='navigation-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='navigation-item'>
                            <Link to='/about' className='navigation-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='navigation-item'>
                            <Link to='/courses' className='navigation-links' onClick={closeMobileMenu}>
                                Courses
                            </Link>
                        </li>
                        <li className='navigation-item'>
                            <Link to='/studentlife' className='navigation-links' onClick={closeMobileMenu}>
                                Student Life
                            </Link>
                        </li>
                        <li className='navigation-item'>
                            <Link to='/worldskills' className='navigation-links' onClick={closeMobileMenu}>
                                World Skills
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
