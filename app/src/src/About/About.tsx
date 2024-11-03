import React from 'react'
import './About.css'
import { isMobile } from 'react-device-detect'
import BackArrow from '../components/BackArrow';
import JobHistoryDialog from './JobHistoryDialog'
import createStyles from '../../styles/styles';
// import azure from './azure.png'
// import azureAI from './azure-ai.png'



function About(){



    return(
        <div style={styles.pageDiv}>
            <BackArrow></BackArrow>
            <div style={styles.descriptionStyle}>
                <p>
                    <hr />
                    <br />
                    Hello! I'm <span style={{fontWeight:'bold'}}>Gabby Lulu</span>.
                    I recently graduated from the University of Pittsburgh, where I majored 
                    in Computer Science and minored in Economics. 
                    As an aspiring developer, I have a strong passion for problem-solving, 
                    both in programming and beyond. I enjoy developing full-stack 
                    applications with React. Outside of technology, I'm keenly 
                    interested in investment, tennis, and I'm dedicated to maintaining a healthy lifestyle. 
                    

                     <br/>
                    <br />
                     <hr/>
                </p>
            </div>


            <div  style={styles.rowStyle}>

                <div  style={styles.boxStyle}>
                    <div style={styles.listStyle}>
                        <p>
                            <span style={styles.listTitleStyle}>Cool Classes I've taken 🖥️:</span>
                            <ul className='class-list'>
                                <li>Programming Languages for Web Applications</li>
                                <li>Intro to Operating Systems</li>
                                <li>Human Language Technologies ( NLP )</li>
                                <li>Interface Design Methodology</li>
                                <li>Functional Programming</li>
                                <li>Financial Markets and Institutions</li>
                            </ul>

                        </p>
                    </div>
                </div>
                <div style={styles.boxStyle}>
                    <div style={styles.listStyle} >
                        <p>
                            <span style={styles.listTitleStyle}>Favorite Books 📖:</span>
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
            <div style={styles.descriptionStyle}>
                <hr />
                <div style={styles.otherDivTitleStyle}>
                    <h2 style={styles.otherStyle}>Other</h2>
                </div>

                <div style={styles.linkContainerStyle}>

                    < JobHistoryDialog />
                    <div>
                        <a href="https://www.youtube.com/watch?v=VMAPTo7RVCo&list=WL&index=6&t=7463s" className="link hover" target='#' >
                            <p style={styles.titleStyle}>Study Music</p>
                        </a>
                    </div>

                </div>

            </div>
            


        </div>
    )

}

export default About;

const styles = createStyles({

    pageDiv:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        minHeight:"100vh",
        margin:"5%"

    },
       boxStyle : {
        display: 'flex',
        flexBasis: "50%",

        flexGrow: "1",
        minWidth: "0px",
        flexDirection: "column",
        margin: "2%",
        minHeight: "0px",
        overflow: 'hidden', // maybe change to croll
        justifyContent: "flex-start",
    },
    rowStyle : {
        display: "flex",
        width: '100%',
        height: 'auto',
        flexDirection: isMobile ? "column" : "row",
        gap: '4rem',
    },

        boxStyle2 : {
        display: 'flex',
        flexBasis: "50%",

        justifyContent: "center",
        flexGrow: "1",
        minWidth: "0px",
        flexDirection: "column",
        margin: "2%",
        minHeight: "0px",
        overflow: 'visible', // maybe change to croll
        alignItems: "center",

    },
    ptext : {
        fontSize: !isMobile ? '2rem' : '1.2rem',
        fontFamily: 'IBMPlexMono',
        fontWeight: '450',
    },



 descriptionStyle:{
        width: isMobile ? '80%' : "50%",
        fontFamily: 'Inter', 
        fontSize: '2rem'
    },
  listStyle :{
        fontFamily: 'Inter',
        fontSize: '2rem',
        minHeight: '10rem',
     },

listTitleStyle :{ 
        fontWeight: 'bold', 
        borderBottom: ' 3px solid black', 
        display:'flex',
        justifyContent:'center',
        width:'fit-content'
    },

 linkContainerStyle :{
        margin: isMobile ? "5%" : '2%',
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around"
        
    },

titleStyle :{
        fontFamily: 'IBMPlexMono',
        fontWeight: 'bold',
        fontSize: '2rem',
        color:'darkcyan'
    },
otherStyle :{
        fontWeight: 'bold',
        borderBottom: ' 3px solid black',

        width: 'fit-content',
        textAlign:'center',
    },

otherDivTitleStyle :{
        display:'flex',
        justifyContent:'space-around',
        gap:'2rem',
        marginTop:"2%"
        

    },
})