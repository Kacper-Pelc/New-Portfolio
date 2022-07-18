import React from 'react'
import './FirstPage.scss'
import profile from '../../Assets/profile.jpg'
const FirstPage = () => {
    return (
        <div className="first-page" id="about">
            <div className="first-page-container">
                <div className="first-page-container-base">
                    <div className="first-page-container-base-info">
                        <div className="first-page-container-base-info-img">
                            <div className="first-page-container-base-info-img-profile">
                                <img
                                    className="first-page-container-base-info-img-profile-image"
                                    src={profile}
                                    alt="default"
                                />
                            </div>
                        </div>
                        <div className="first-page-container-base-info-title">
                            <h1 className="first-page-container-base-info-title-text">
                                HI EVERYONE, I’M MACIEJ
                                <br /> AND I'M A FRONTEND DEVELOPER!!
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstPage
