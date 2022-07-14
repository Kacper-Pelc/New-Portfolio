import React from 'react'
import yt from '../../Assets/Youtube.png'
import facebook from '../../Assets/Facebook.png'
import twitter from '../../Assets/Twitter.png'
import linkedin from '../../Assets/LinkedIN.png'
import gmail from '../../Assets/Gmail.png'
import { useMediaQuery } from 'react-responsive'
import './sixpage.scss'
const SixPage = () => {
    const isPhone = useMediaQuery({
        query: '(max-width: 1023px)',
    })
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)',
    })
    return (
        <div className="six">
            <div className="six-container">
                <div className="six-container-contact">
                    <h1 className="six-container-contact-title">CONTACT ME!</h1>
                    <img
                        src={gmail}
                        alt="default"
                        className="six-container-contact-img"
                    />
                    <h2 className="six-container-contact-text">
                        maciekwawryszuk@gmail.com
                    </h2>
                </div>
                {isDesktop && (
                    <div className="six-container-social">
                        <div className="youtube">
                            <img src={yt} alt="default" />
                            <h2>/BL4CK</h2>
                        </div>
                        <div className="facebook">
                            <img src={facebook} alt="default" />
                            <h2>/Maciej Wawryszuk</h2>
                        </div>
                        <div className="twitter">
                            <img src={twitter} alt="default" />
                            <h2>/MaciejWaWr</h2>
                        </div>
                        <div className="linkedin">
                            <img src={linkedin} alt="default" />
                            <h2>/Maciej Wawryszuk</h2>
                        </div>
                    </div>
                )}
                {isPhone && (
                    <div className="six-container-social">
                        <h1 className="six-container-contact-title">
                            MY SOCIALMEDIA
                        </h1>
                        <img
                            src={yt}
                            alt="default"
                            className="six-container-social-image"
                        />

                        <img
                            src={facebook}
                            alt="default"
                            className="six-container-social-image"
                        />

                        <img
                            src={twitter}
                            alt="default"
                            className="six-container-social-image"
                        />

                        <img
                            src={linkedin}
                            alt="default"
                            className="six-container-social-image"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default SixPage
