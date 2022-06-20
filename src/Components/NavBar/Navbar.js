import React from 'react'
import { Link as a } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import man from '../../Assets/NavbarIcons/mann.png'
import grown from '../../Assets/NavbarIcons/rocket.png'
import code from '../../Assets/NavbarIcons/codee.png'
import inspire from '../../Assets/NavbarIcons/inspiration.png'
import './Navbar.scss'
const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className={'NavBar'}>
                <div className="n-title">
                    <img src={logo} className="n-img" alt="default" />
                    <h2 className="n-title-text">Maciej Wawryszuk</h2>
                </div>
                <ul className="nav">
                    <li>
                        <a className="link" to="#">
                            <img src={man} className="nav-img-class1" />
                            <div className="circle"></div>
                            <div className="title">About Me</div>
                        </a>
                    </li>

                    <li>
                        <a className="link" to="#">
                            <img src={inspire} className="nav-img-class2" />
                            <div className="circle"></div>
                            <div className="title">Education</div>
                        </a>
                    </li>

                    <li>
                        {' '}
                        <a className="link" to="#">
                            <img
                                src={grown}
                                className="nav-img-class3"
                                alt="sx"
                            />
                            <div className="circle"></div>
                            <div className="title">Can Do</div>
                        </a>
                    </li>

                    <li>
                        <a className="link" to="#">
                            <img src={code} className="nav-img-class4" />
                            <div className="circle"></div>
                            <div className="title">Projects</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
