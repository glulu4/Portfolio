import React from 'react'
import gif from './app.gif'
import ProjectPage from '../../ProjectPage'
import { isMobile } from 'react-device-detect'

function Budget() {

    // 444 x 960 
    // 222 x 480
    // 111 X 240
    /**
     *   display: block;
  max-width:230px;
  max-height:95px;
  width: auto;
  height: auto;
     */
    const style = {
        gifStyle:{
            display: 'block',
            maxWidth: isMobile ? "40.25vw" :'16.771vw',
            maxHeight: isMobile ? "72.5vw" : '30.208vw',
            width: 'auto',
            height: 'auto',


        }
    }



    const description =
        <>
            For this project, I used React Native (JavaScript) and Flask (Python) to 
            implement a full-stack application to scan receipts to track expenses and 
            taxable soda ounces for restaurants. In certain cities, there is a soda tax, 
            so this app was intended to help small restaurants. I implemented the Azure 
            Document Intelligence model for receipt scanning.
        </>

    return (
        <ProjectPage
            title="Receipt Budget Tracker"
            description={description}
            gif={gif}
            style={style}
        />

    )



}

export default Budget;