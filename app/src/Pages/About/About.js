import React from 'react'
import './About.css'
import { isMobile } from 'react-device-detect'
import { Styles } from '../Projects/Project_Pages/Styles';
import BackArrow from '../BackArrow';
import JobHistoryDialog from './JobHistoryDialog'

function About(){


    const descriptionStyle = {
        width: isMobile ? '80%' : "50%",
        fontFamily: 'Inter', 
        fontSize: '2rem'
    }

    const listStyle = {
        fontFamily: 'Inter',
        fontSize: '2rem',
        minHeight: '10rem',
     }

    const listTitleStyle = { 
        fontWeight: 'bold', 
        borderBottom: ' 3px solid black', 
        display:'flex',
        justifyContent:'center',
        width:'fit-content'
    }

    const linkContainerStyle = {
        margin: isMobile ? "5%" : '2%',
    }

    const titleStyle = {
        fontFamily: 'IBMPlexMono',
        fontWeight: 'bold',
        fontSize: '2rem',
        color:'darkcyan'
    }

    const otherStyle = {
        fontWeight: 'bold',
        borderBottom: ' 3px solid black',

        width: 'fit-content',
        textAlign:'center',
    }

    const otherDivTitleStyle = {
        display:'flex',
        justifyContent:'center'

    }
    return(
        <div className='about-page-div'>
            <BackArrow></BackArrow>
            <div style={descriptionStyle}>
                <p>
                    <hr />
                    <br />
                    Hello! I'm <span style={{fontWeight:'bold'}}>Gabby Lulu</span>, a Computer Science major and Economics minor at the 
                    University of Pittsburgh. As an aspiring developer, 
                    I have a strong passion for problem-solving, whether
                     it involves programming or not. Outside of technology, 
                     I'm keenly interested in investment and deeply committed to 
                     maintaining a healthy lifestyle. I also play tennis and chess, 
                     and I'm super competative 🤓.
                     <br/>
                    <br />
                     <hr/>
                </p>
            </div>


            <div className='row' style={Styles.rowStyle}>

                <div className='box' style={Styles.boxStyle}>
                    <div style={listStyle}>
                        <p>
                            <span style={listTitleStyle}>Cool Classes I've taken 🖥️:</span>
                            <ul className='class-list'>
                                <li>Programming Languages for Web Applications</li>
                                <li>Intro to Operating Systems</li>
                                <li>Human Language Technologies ( NLP )</li>
                                <li>Interface Design Methodology</li>
                                <li>Deep Learning</li>
                                <li>Functional Programming</li>
                                <li>Financial Markets and Institutions</li>
                            </ul>

                        </p>
                    </div>
                </div>
                <div className='box' style={Styles.boxStyle2}>
                    <div style={listStyle} >
                        <p>
                            <span style={listTitleStyle}>Favorite Books 📖:</span>
                            <ul className='book-list'>
                                <li>The Intelligent Investor - Benjamin Graham</li>
                                <li>Naked Economics - Charles Wheelan</li>
                                <li>The Problem of Pain - C.S Lewis</li>
                                <li>Unshakeable - Tony Robbins</li>
                                <li>Beautiful Code - Andy Oram and Greg Wilson</li>
                                <li>Fahrenheit 451- Ray Bradbury</li>
                                <li>Steve Jobs - Walter Isaacson</li>
                            </ul>

                        </p>
                    </div>
                </div>
                
            </div>
            




            <div style={descriptionStyle}>
                <hr />
                <div style={otherDivTitleStyle}>
                    <h2 style={otherStyle}>Other</h2>
                </div>

                <div className='other-link-container' style={linkContainerStyle}>

                    < JobHistoryDialog />
                    <div>
                        <a href="https://www.youtube.com/watch?v=VMAPTo7RVCo&list=WL&index=6&t=7463s" className="link hover" target='#' >
                            <p style={titleStyle}>Study Music</p>
                        </a>
                    </div>

                </div>

            </div>
            


        </div>
    )

}

export default About;