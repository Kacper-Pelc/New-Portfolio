import React, { useState } from 'react'
import one from '../../Assets/1.png'
import two from '../../Assets/2.png'
import three from '../../Assets/3.png'
import four from '../../Assets/4.png'
import brightmoon from '../../Assets/brightmoon.png'
import brightmoonhover from '../../Assets/brightmoonhover.png'
import threehover from '../../Assets/7.png'
import fourhover from '../../Assets/8.png'
import { Link } from 'react-router-dom'
import react from '../../Assets/FrameWorkIcons/reactjs.png'
import sass from '../../Assets/FrameWorkIcons/sass.png'
import './fivepage.scss'

const FivePage = () => {
    const [hover, setHover] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [hover4, setHover4] = useState(false)

    return (
        <div className="five" id="projeects">
            <div className="five-container">
                <div className="five-container-title">
                    <h1 className="five-container-title-text">PROJECTS</h1>
                </div>
                <div className="five-container-projects">
                    {/* <a
                        style={{ zIndex: '2' }}
                        href="#"
                        onMouseOver={() => setHover2(true)}
                        onMouseOut={() => setHover2(false)}
                    >
                        <img
                            src={!hover2 ? two : twohover}
                            alt="default"
                            className="five-container-projects-project"
                        />
                    </a> */}
                </div>
                <div className="five-container-projects">
                    {' '}
                    <a
                        href=""
                        onMouseOver={() => setHover(true)}
                        onMouseOut={() => setHover(false)}
                        style={{ zIndex: '2' }}
                        className="five-container-projects-link"
                    >
                        <img
                            src={!hover ? brightmoon : brightmoonhover}
                            alt="default"
                            className="five-container-projects-link-project"
                        />
                    </a>
                    <a
                        style={{ zIndex: '2' }}
                        href="https://maciejj1.github.io/CloudShop/"
                        onMouseOver={() => setHover3(true)}
                        onMouseOut={() => setHover3(false)}
                        className="five-container-projects-link"
                    >
                        <img
                            src={!hover3 ? three : fourhover}
                            alt="default"
                            className="five-container-projects-link-project"
                        />
                    </a>
                    <a
                        style={{ zIndex: '2' }}
                        href="https://maciejj1.github.io/WeatherApp/"
                        onMouseOver={() => setHover4(true)}
                        onMouseOut={() => setHover4(false)}
                        className="five-container-projects-link"
                    >
                        <img
                            src={!hover4 ? four : threehover}
                            alt="default"
                            className="five-container-projects-link-project"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FivePage
