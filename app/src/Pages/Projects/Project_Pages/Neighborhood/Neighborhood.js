import React from 'react'
import gif from './neighborhood.gif'

import ProjectPage from '../../ProjectPage'


function Neighborhood() {

    const description =
        <>
            This group project aimed to find the best neighborhood in Pittsburgh,
            based off of the crime rate, number of acres of park-land / trees, and income.
            My role included the data analysis of the 'natural environment conditions'.
            The code can be found on my <a href='https://github.com/glulu4/Pittsburgh_Neighborhood_Analysis' target='_target'>github</a>.
        </>

    return (
        <ProjectPage
            title="Pittsburgh Neighborhood Analysis"
            description={description}
            gif={gif}
        />

    )
}

export default Neighborhood