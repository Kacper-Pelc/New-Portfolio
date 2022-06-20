import React from 'react'
import './FirstPage.scss'
import profile from '../../Assets/1636104201691 1.png'
import shape from '../../Assets/image 5.png'
import Navbar from '../NavBar/Navbar'
const FirstPage = () => {
    return (
        <div className="first-page-body">
            <div className={'FirstPageContainer'}>
                <div className={'FirstPageBase'}>
                    <div className="FirstpageAll">
                        <div className={'FirstPageInfo'}>
                            <div className="title">
                                <h1 className="first-page-title">
                                    HI EVERYONE I’M MACIEJ AND <br />I FRONTEND
                                    DEVELOPER!!
                                </h1>
                            </div>
                            <div className={'FirstPagePhoto'}>
                                <div className="profile">
                                    <img
                                        className="progile"
                                        src={profile}
                                        alt="default"
                                    />
                                </div>
                            </div>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstPage
