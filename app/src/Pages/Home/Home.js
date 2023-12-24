import React from 'react'

import 'path-data-polyfill';
import './Home.css'
import Links from '../Links';

import { isMobile } from 'react-device-detect'

const nameStyle = {
    fontSize: isMobile ? "3.5rem": '5rem',
    // margin: isMobile ? "0%" : '0%',
}

const pageStyle = {
    marginTop: isMobile ? "20%" : '0%',
}

const linkContainerStyle = {
    margin: isMobile ? "5%" : '2%',
}

const descriptionStyle = {
    margin: isMobile ? "4%" : '2%',

}
const homeLinkStyle = {
    fontSize: isMobile ? "1.2rem" : '1.5rem',
}
function Home(){

    return(
        <div className='home-page-div' style={pageStyle}>

            {/* <div className='left-box'> */}
                <div className='home-name-div'>
                    <h1 className='name' style={nameStyle}>Gabby Lulu</h1>
                </div>

                <p  style={descriptionStyle} className='home-description'>Portfolio website developed and designed by Gabby Lulu</p>

                <div className='home-link-container' style={linkContainerStyle}>
                    <a href='/about' className='link hover' style={homeLinkStyle}>About</a>
                    <a href="/projects" className='link hover' style={homeLinkStyle}>Projects</a>
                    <a href="/contact" className='link hover' style={homeLinkStyle}>Contact</a>
                </div>
            {/* </div> */}

            {/* <div className='right-box'>
                
            </div> */}

            <Links/>
        </div>
    )

}

export default Home;