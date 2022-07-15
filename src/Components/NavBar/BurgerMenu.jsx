import React, { useState } from 'react'
import {} from 'react-bootstrap'
import close from '../../Assets/hamburger/close.svg'
import openn from '../../Assets/hamburger/open.svg'
import logo from '../../Assets/logo.png'
import man from '../../Assets/NavbarIcons/mann.png'
import grown from '../../Assets/NavbarIcons/rocket.png'
import code from '../../Assets/NavbarIcons/codee.png'
import inspire from '../../Assets/NavbarIcons/inspiration.png'
import { Link } from 'react-scroll'
import './Burger.scss'
const BurgerMenu = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className="navbar">
            <div className="burger">
                <div className="burger-logo">
                    <img
                        src={logo}
                        className="burger-logo-image"
                        alt="default"
                    />
                    <h2 className="burger-logo-title">MACIEJ WAWRYSZUK</h2>
                </div>

                {open ? (
                    <img
                        src={close}
                        alt="xdd"
                        onClick={() => setOpen(!open)}
                        className="burger-close"
                    />
                ) : (
                    <img
                        src={openn}
                        alt="xdD"
                        onClick={() => setOpen(true)}
                        className="burger-open"
                    />
                )}
            </div>
            {open && (
                <div className="burger-items">
                    <ul className="burger-items-table">
                        <li className="burger-items-table-list">
                            <Link
                                className="burger-items-table-list-link"
                                to="about"
                                smooth="true"
                                duration={1800}
                            >
                                About Me
                            </Link>
                        </li>
                        <li className="burger-items-table-list">
                            <Link
                                className="burger-items-table-list-link"
                                to="education"
                                smooth="true"
                                duration={1800}
                            >
                                Education
                            </Link>
                        </li>
                        <li className="burger-items-table-list">
                            <Link
                                className="burger-items-table-list-link"
                                to="learn"
                                smooth="true"
                                duration={1800}
                            >
                                Can Do
                            </Link>
                        </li>
                        <li className="burger-items-table-list">
                            <Link
                                className="burger-items-table-list-link"
                                to="projeects"
                                smooth="true"
                                duration={1800}
                            >
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
            {!open && <div></div>}
        </nav>
    )
}

export default BurgerMenu
