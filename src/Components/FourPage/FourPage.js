import React from 'react'
import react from '../../Assets/FrameWorkIcons/reactjs.png'
import bootstrap from '../../Assets/FrameWorkIcons/bootstrap5.png'
import base from '../../Assets/FrameWorkIcons/base-1.png'
import css from '../../Assets/FrameWorkIcons/css.png'
import figma from '../../Assets/FrameWorkIcons/figma.png'
import firebase from '../../Assets/FrameWorkIcons/firebase.png'
import git from '../../Assets/FrameWorkIcons/git.png'
import gitlab from '../../Assets/FrameWorkIcons/gitlab.png'
import gitlabb from '../../Assets/FrameWorkIcons/gitlab-1.png'
import html from '../../Assets/FrameWorkIcons/html5.png'
import php from '../../Assets/FrameWorkIcons/Group95.png'
import nest from '../../Assets/FrameWorkIcons/Group96.png'
import java from '../../Assets/FrameWorkIcons/java.png'
import js from '../../Assets/FrameWorkIcons/js.png'
import next from '../../Assets/FrameWorkIcons/nextjs.png'
import npm from '../../Assets/FrameWorkIcons/npm.png'
import prettier from '../../Assets/FrameWorkIcons/prettier.png'
import sass from '../../Assets/FrameWorkIcons/sass.png'
import tailwind from '../../Assets/FrameWorkIcons/tailwind.png'
import typescript from '../../Assets/FrameWorkIcons/typescript.png'
import vitejs from '../../Assets/FrameWorkIcons/vitejs.png'
import vs from '../../Assets/FrameWorkIcons/vs.png'
import vue from '../../Assets/FrameWorkIcons/vuejs.png'
const FourPage = () => {
    return (
        <div className="four-page-container">
            <div className="four-page-i-can">
                <h1>WHAT I CAN</h1>
                <img src={js} alt="default" />
                <img src={sass} alt="default" />
                <img src={html} alt="default" />
                <img src={css} alt="default" />
                <img src={npm} alt="default" />
                <img src={react} alt="default" />
                <img src={prettier} alt="default" />
                <img src={gitlab} alt="default" />
                <img src={gitlabb} alt="default" />
                <img src={git} alt="default" />
                <img src={figma} alt="default" />
                <img src={firebase} alt="default" />
                <img src={vitejs} alt="default" />
                <img src={vs} alt="default" />
                <img src={php} alt="default" />
                <img src={base} alt="default" />
            </div>
            <div className="four-page-i-learn">
                <h1>WHAT I LEARNING</h1>
                <img src={typescript} alt="default" />
                <img src={next} alt="default" />
                <img src={tailwind} alt="default" />
                <img src={bootstrap} alt="default" />
                <img src={java} alt="default" />
                <img src={vue} alt="default" />
                <img src={nest} alt="default" />
            </div>
        </div>
    )
}

export default FourPage
