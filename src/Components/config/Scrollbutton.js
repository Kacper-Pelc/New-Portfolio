import React, { useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import { Button } from './Styles'
import arrow from './arror.png'
const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    window.addEventListener('scroll', toggleVisible)

    return (
        <Button>
            <img
                alt="xd"
                src={arrow}
                onClick={scrollToTop}
                style={{ zIndex: '3', display: visible ? 'inline' : 'none' }}
            />
        </Button>
    )
}

export default ScrollButton
