import React from 'react'
import './FirstPage.scss'
import profile from '../../Assets/profile.jpg'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'
const FirstPage = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine)

        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container)
    }, [])
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
                                    style={{ zIndex: '2' }}
                                />
                            </div>{' '}
                            <Particles
                                id="tsparticles"
                                init={particlesInit}
                                loaded={particlesLoaded}
                                style={{
                                    width: '100%',
                                    minHeight: '100vh',
                                    maxHeight: '100vh',
                                    zIndex: '1',
                                }}
                                params={{
                                    particles: {
                                        number: {
                                            value: 80,
                                            density: {
                                                enable: true,
                                                value_area: 1000,
                                            },
                                        },
                                        color: {
                                            value: '#2596be',
                                        },
                                        opacity: {
                                            value: 0.1,
                                            anim: {
                                                enable: true,
                                            },
                                        },
                                        size: {
                                            value: 1,
                                            random: true,
                                            anim: {
                                                enable: true,
                                                speed: 3,
                                            },
                                        },
                                        line_linked: {
                                            enable: true,
                                        },
                                        move: {
                                            directions: 'none',
                                            enable: true,
                                            outModes: {
                                                default: 'bounce',
                                            },
                                            random: false,
                                            speed: 0.5,
                                            straight: false,
                                        },
                                    },
                                    fpsLimit: 120,
                                    interactivity: {
                                        events: {
                                            onClick: {
                                                enable: true,
                                                mode: 'push',
                                            },
                                            onHover: {
                                                enable: true,
                                                mode: 'repulse',
                                            },
                                            resize: true,
                                        },
                                        modes: {
                                            push: {
                                                quantity: 4,
                                            },
                                            repulse: {
                                                distance: 20,
                                                duration: 0.4,
                                            },
                                        },
                                        shape: {
                                            type: 'tringle',
                                        },
                                    },
                                }}
                            />
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
