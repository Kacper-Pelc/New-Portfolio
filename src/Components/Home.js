import React from 'react'
import FirstPage from './FirstPage/FirstPage'
import FivePage from './FivePage/FivePage'
import FourPage from './FourPage/FourPage'
import SecondPage from './SecondPage/SecondPage'
import SixPage from './SixPage/SixPage'
import ThirdPage from './ThirdPage/ThirdPage'
import Navbar from './NavBar/Navbar'
import Certificates from './certyficates/Certificates'
import { useMediaQuery } from 'react-responsive'
const Home = () => {
    const isPhone = useMediaQuery({
        query: '(max-width: 1023px)',
    })
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)',
    })
    return (
        <div className="home">
            {isPhone && (
                <div>
                    <Navbar />
                    <FirstPage />
                    <SecondPage />
                    <ThirdPage />
                    <Certificates />
                    <FourPage />
                    <FivePage />
                    <SixPage />
                </div>
            )}
            {isDesktop && (
                <div>
                    <Navbar />
                    <FirstPage />
                    <SecondPage />
                    <ThirdPage />
                    <FourPage />
                    <FivePage />
                    <SixPage />
                </div>
            )}
        </div>
    )
}

export default Home
