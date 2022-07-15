import React from 'react'
import { Link as a } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import man from '../../Assets/NavbarIcons/mann.png'
import grown from '../../Assets/NavbarIcons/rocket.png'
import code from '../../Assets/NavbarIcons/codee.png'
import inspire from '../../Assets/NavbarIcons/inspiration.png'
import { useMediaQuery } from 'react-responsive'
import './Navbar.scss'
import BurgerMenu from './BurgerMenu'
const Navbar = () => {
    const isPhone = useMediaQuery({
        query: '(max-width: 1023px)',
    })
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)',
    })
    return (
        <div className="navbar-container">
            {isPhone && (
                <div>
                    <BurgerMenu />
                </div>
            )}
            {isDesktop && (
                <div className="navbar-container-desktop">
                    <div className="navbar-container-desktop-content">
                        <img
                            src={logo}
                            className="navbar-container-desktop-content-image"
                            alt="default"
                        />
                        <h2 className="navbar-container-desktop-content-title">
                            MACIEJ WAWRYSZUK
                        </h2>
                    </div>
                    <ul className="navbar-container-desktop-table">
                        <li className="navbar-container-desktop-table-list-link">
                            <a
                                className="navbar-container-desktop-table-list-link"
                                to="#"
                            >
                                <img
                                    src={man}
                                    className="navbar-container-desktop-table-list-link-img"
                                />
                                <div className="navbar-container-desktop-table-list-link-title">
                                    About Me
                                </div>
                            </a>
                        </li>

                        <li className="navbar-container-desktop-table-list-link">
                            <a
                                className="navbar-container-desktop-table-list-link"
                                to="#"
                            >
                                <img
                                    src={inspire}
                                    className="navbar-container-desktop-table-list-link-img"
                                />
                                <div className="navbar-container-desktop-table-list-link-title">
                                    Education
                                </div>
                            </a>
                        </li>

                        <li className="navbar-container-desktop-table-list-link">
                            <a
                                className="navbar-container-desktop-table-list-link"
                                to="#"
                            >
                                <img
                                    src={grown}
                                    className="navbar-container-desktop-table-list-link-img"
                                    alt="sx"
                                />
                                <div className="navbar-container-desktop-table-list-link-title">
                                    Can Do
                                </div>
                            </a>
                        </li>

                        <li className="navbar-container-desktop-table-list-link">
                            <a
                                className="navbar-container-desktop-table-list-link"
                                to="#"
                            >
                                <img
                                    src={code}
                                    className="navbar-container-desktop-table-list-link-img"
                                />
                                <div className="navbar-container-desktop-table-list-link-title">
                                    Projects
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar
