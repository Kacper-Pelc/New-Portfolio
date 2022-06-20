import React from 'react'
import yt from '../../Assets/Youtube.png'
import facebook from '../../Assets/Facebook.png'
import twitter from '../../Assets/Twitter.png'
import linkedin from '../../Assets/LinkedIN.png'
import gmail from '../../Assets/Gmail.png'
const SixPage = () => {
    return (
        <div className="six-page-container">
            <div className="six-page-contact">
                <h1>CONTACT ME!</h1>
                <img src={gmail} alt="default" />
                <h2>maciekwawryszuk@gmail.com</h2>
            </div>
            <div className="six-page-social">
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
        </div>
    )
}

export default SixPage
