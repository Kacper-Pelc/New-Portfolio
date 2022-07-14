import React from 'react'
import './certificates.scss'
const Certificates = () => {
    return (
        <div className="certificates">
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
        </div>
    )
}

export default Certificates
