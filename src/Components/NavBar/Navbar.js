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
import { Link } from 'react-scroll'
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
                            <Link
                                className="navbar-container-desktop-table-list-link"
                                to="about"
                                smooth="true"
                                duration={1800}
                            >
                                <img
                                    src={man}
                                    className="navbar-container-desktop-table-list-link-img"
                                />
                                <div className="navbar-container-desktop-table-list-link-title">
                                    About Me
                                </div>
                            </Link>
                        </li>

                        <li className="navbar-container-desktop-table-list-link">
                            <Link
                                className="navbar-container-desktop-table-list-link"
                                to="education"
                                smooth="true"
                                duration={1800}
                            >
                                <img
                                    src={inspire}
                                    className="navbar-container-desktop-table-list-link-img"
                                />
                                <div className="navbar-container-desktop-table-list-link-title">
                                    Education
                                </div>
                            </Link>
                        </li>

                        <li className="navbar-container-desktop-table-list-link">
                            <Link
                                className="navbar-container-desktop-table-list-link"
                                to="learn"
                                smooth="true"
                                duration={1800}
                            >
                                <img
                                    src={grown}
                                    className="navbar-container-desktop-table-list-link-img"
                                    alt="sx"
                                />
                                <div className="navbar-container-desktop-table-list-link-title">
                                    Can Do
                                </div>
                            </Link>
                        </li>

                        <li className="navbar-container-desktop-table-list-link">
                            <Link
                                className="navbar-container-desktop-table-list-link"
                                to="projeects"
                                smooth="true"
                                duration={1800}
                            >
                                <img
                                    src={code}
                                    className="navbar-container-desktop-table-list-link-img"
                                />
                                <div className="navbar-container-desktop-table-list-link-title">
                                    Projects
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar
