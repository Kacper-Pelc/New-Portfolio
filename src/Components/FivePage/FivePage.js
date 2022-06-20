import React from 'react'
import one from '../../Assets/1.png'
import two from '../../Assets/2.png'
import three from '../../Assets/3.png'
import four from '../../Assets/4.png'
import { Link } from 'react-router-dom'
const FivePage = () => {
    return (
        <div className="five-page-container">
            <div className="five-page-title">
                <h1>PROJECTS</h1>
            </div>
            <div className="shape" />
            <div className="circle-shape" />
            <div className="five-page-links-one">
                <Link to="#">
                    <img src={one} alt="default" />
                </Link>
                <Link to="#">
                    <img src={two} alt="default" />
                </Link>
            </div>
            <div className="five-page-links-two">
                <Link to="#">
                    <img src={three} alt="default" />
                </Link>
                <Link to="#">
                    <img src={four} alt="default" />
                </Link>
            </div>
        </div>
    )
}

export default FivePage
