import React from 'react'
import { useMediaQuery } from 'react-responsive'
import './third.scss'
const ThirdPage = () => {
    const isPhone = useMediaQuery({
        query: '(max-width: 1023px)',
    })
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)',
    })
    return (
        <div className="third">
            <div className="third-container">
                <div className="third-container-title">
                    <h1 className="third-container-title-text">EDUCATION</h1>
                </div>
                <div className="third-container-info">
                    <h2 className="third-container-info-work">
                        I work in 9bits company on Junior
                        Javascript(React)Developer.
                    </h2>
                    <h2 className="third-container-info-univer">
                        I Study in Catholic University of Lublin in the field of
                        computer science.I studied at an IT technical college in
                        Małaszewicze
                    </h2>
                </div>
                {isDesktop && (
                    <div className="certificates-container">
                        <div className="certificates-container-title">
                            <h1 className="certificates-container-title-text">
                                Certyficates and Diploma’s
                            </h1>
                        </div>
                        <div className="certificates-container-info">
                            <ul className="certificates-container-info-table">
                                <li className="certificates-container-info-table-list">
                                    TECHNICAL IT CERTIFICATE
                                </li>
                                <li className="certificates-container-info-table-list">
                                    FOREIGN INTERNSHIP CERTIFICATE
                                </li>
                                <li className="certificates-container-info-table-list">
                                    REACT COURSE
                                </li>
                                <li className="certificates-container-info-table-list">
                                    HTML AND CSS COURSE
                                </li>
                                <li className="certificates-container-info-table-list">
                                    JAVASCRIPT COURSE
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
                {isPhone && <div></div>}
            </div>
        </div>
    )
}

export default ThirdPage
