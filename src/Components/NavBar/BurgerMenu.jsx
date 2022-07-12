import React, { useState } from 'react'
import {} from 'react-bootstrap'
import close from '../../Assets/hamburger/close.svg'
import openn from '../../Assets/hamburger/open.svg'
import logo from '../../Assets/logo.png'
import man from '../../Assets/NavbarIcons/mann.png'
import grown from '../../Assets/NavbarIcons/rocket.png'
import code from '../../Assets/NavbarIcons/codee.png'
import inspire from '../../Assets/NavbarIcons/inspiration.png'
import './Burger.scss'
const BurgerMenu = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className="navbar">
            <div className="burger">
                <div className="burger-logo">
                    <img
                        src={logo}
                        className="navbar-container-desktop-content-image"
                        alt="default"
                    />{' '}
                    <h2 className="navbar-container-desktop-content-title">
                        Maciej Wawryszuk
                    </h2>
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
                            <a
                                href="#"
                                className="burger-items-table-list-link"
                            >
                                About Me
                            </a>
                        </li>
                        <li className="burger-items-table-list">
                            <a
                                href="#"
                                className="burger-items-table-list-link"
                            >
                                Education
                            </a>
                        </li>
                        <li className="burger-items-table-list">
                            <a
                                href="#"
                                className="burger-items-table-list-link"
                            >
                                Can Do
                            </a>
                        </li>
                        <li className="burger-items-table-list">
                            <a
                                href="#"
                                className="burger-items-table-list-link"
                            >
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>
            )}
            {!open && <div></div>}
        </nav>
    )
}

export default BurgerMenu
