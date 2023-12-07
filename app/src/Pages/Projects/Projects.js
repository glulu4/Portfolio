import React from 'react'
import projectCards from './Cards.js'
import "./Projects.css"
function Projects() {



    return (
        <div className='project-page-div'>


            <h1 className='project-page-title'>Projects</h1>

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