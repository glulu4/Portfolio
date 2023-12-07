import React from 'react'
// import { useEffect } from 'react';
// import Matter from 'matter-js';

// import Letters from './Letters'
import 'path-data-polyfill';
import './Home.css'
// import glasses from './glasses.webp'
// import name from './name.png'
// import { isMobile } from 'react-device-detect'

function Home(){

    // let file = ""
    // let nameSize = {};
    // isMobile ? file = './phoneName.txt' : file = './ascii-text-art.txt'

    // isMobile ? nameSize = {
    //     fontSize:"1rem"
    // } : nameSize = {
    //         fontSize: "1.5rem"
    // }
    // useEffect( () => {

    //     fetch(file)
    //         .then(response => response.text())
    //         .then((data) => {
    //             console.log(typeof(data));
    //             document.getElementById('asci-name-container').textContent = data;
    //         })
    //         .catch(error => console.error('Error fetching ASCII art:', error));

    // },[])





    return(
        <div className='home-page-div'>
            
            <div className='home-name-div'>
                <h1 className='name'>Gabby Lulu</h1>
                {/* <pre id='asci-name-container' style={nameSize} ></pre> */}
            </div>

            <p className='home-description'>Portfolio website developed and designed by Gabby Lulu</p>

            <div className='home-link-container'>
                <a href='/about' className='link hover'>About</a>
                <a href="/projects" className='link hover'>Projects</a>
                <a href="/projects" className='link hover'>Contact</a>
            </div>
            {/* <img src={glasses} alt=""/> */}
        </div>
    )

}

export default Home;