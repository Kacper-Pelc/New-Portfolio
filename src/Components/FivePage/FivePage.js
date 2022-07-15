import React from 'react'
import one from '../../Assets/1.png'
import two from '../../Assets/2.png'
import three from '../../Assets/3.png'
import four from '../../Assets/4.png'
import { Link } from 'react-router-dom'
import './fivepage.scss'
const FivePage = () => {
    return (
        <div className="five" id="projeects">
            <div className="five-container">
                <div className="five-container-title">
                    <h1 className="five-container-title-text">PROJECTS</h1>
                </div>
                <div className="five-container-projects">
                    <Link to="#">
                        <img
                            src={one}
                            alt="default"
                            className="five-container-projects-project"
                        />
                    </Link>
                    <Link to="#">
                        <img
                            src={two}
                            alt="default"
                            className="five-container-projects-project"
                        />
                    </Link>
                </div>
                <div className="five-container-projects">
                    <Link to="#">
                        <img
                            src={three}
                            alt="default"
                            className="five-container-projects-project"
                        />
                    </Link>
                    <Link to="#">
                        <img
                            src={four}
                            alt="default"
                            className="five-container-projects-project"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FivePage
