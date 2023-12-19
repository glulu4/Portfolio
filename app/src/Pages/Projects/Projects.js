import React from 'react'
import projectCards from './Cards.js'
import "./Projects.css"

import BackArrow from '../BackArrow.js'
import { isMobile } from 'react-device-detect'

function Projects() {



    const titleDivStyle = {
        paddingTop: isMobile ? "10%" : "2%",
        display: "flex",
        flexDirection: "row",
        justifyContent:"center"
    }





    return (
        <div className='project-page-div'>

            <BackArrow/ >

            <div className='project-title-div' style={titleDivStyle}>
               
            </div>

            <div className='project-container'>
                {projectCards.map((card, index) => {
                    return(
                        card
                    )


                })}
            </div>

        </div>
    )
    
}

export default Projects;