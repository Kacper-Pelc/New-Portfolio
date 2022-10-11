import React from 'react'
import yt from '../../Assets/Youtube.png'
import facebook from '../../Assets/Facebook.png'
import twitter from '../../Assets/Twitter.png'
import github from '../../Assets/Github.png'
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
            <div className="six-container" style={{ zIndex: '2' }}>
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
                        <div className="six-container-social-content">
                            <img
                                src={yt}
                                alt="default"
                                className="six-container-social-content-image"
                            />
                            <h2 className="six-container-social-content-title">
                                /BL4CK
                            </h2>
                        </div>
                        <div className="six-container-social-content">
                            <img
                                src={facebook}
                                alt="default"
                                className="six-container-social-content-image"
                            />
                            <h2 className="six-container-social-content-title">
                                /Maciej Wawryszuk
                            </h2>
                        </div>
                        <div className="six-container-social-content">
                            <img
                                src={github}
                                alt="default"
                                className="six-container-social-content-image"
                            />
                            <h2 className="six-container-social-content-title">
                                /Maciejj1
                            </h2>
                        </div>
                        <div className="six-container-social-content">
                            <img
                                src={linkedin}
                                alt="default"
                                className="six-container-social-content-image"
                            />
                            <h2 className="six-container-social-content-title">
                                /Maciej Wawryszuk
                            </h2>
                        </div>
                    </div>
                )}
                {isPhone && (
                    <div className="six-container-social">
                        <h1 className="six-container-social-title">
                            MY SOCIALMEDIA
                        </h1>
                        <a href="https://www.youtube.com/channel/UC0AGrJ20IN8ldR1FoVMphfA">
                            <img
                                src={yt}
                                alt="default"
                                className="six-container-social-image"
                            />
                        </a>

                        <a href="https://www.facebook.com/profile.php?id=100010047699896">
                            <img
                                src={facebook}
                                alt="default"
                                className="six-container-social-image"
                            />
                        </a>
                        <a href="https://github.com/Maciejj1">
                            <img
                                src={github}
                                alt="default"
                                className="six-container-social-image"
                            />
                        </a>

                        <a href="https://www.linkedin.com/in/maciek-wawryszuk-484737225/">
                            <img
                                src={linkedin}
                                alt="default"
                                className="six-container-social-image"
                            />
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SixPage
