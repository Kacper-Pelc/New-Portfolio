import React from 'react'
import FirstPage from './FirstPage/FirstPage'
import FivePage from './FivePage/FivePage'
import FourPage from './FourPage/FourPage'
import SecondPage from './SecondPage/SecondPage'
import SixPage from './SixPage/SixPage'
import ThirdPage from './ThirdPage/ThirdPage'
import Navbar from './NavBar/Navbar'
const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <FirstPage />
            <SecondPage />
            <ThirdPage />
            <FourPage />
            <FivePage />
            <SixPage />
        </div>
    )
}

export default Home
