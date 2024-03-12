import React from 'react'
import gif from './vmsim.gif'

import ProjectPage from '../../ProjectPage'


function Vmsim() {


    const description =
        <>
            The gif to the right / bottom displays a simulation of vvirtual memory and paging,
            using both a single-level page table and a two-level tree. I used Java for this project. The code
            can be found on my <a href='https://github.com/glulu4/Virtual-Memory-Simulation' target='_target'>github</a>.
        </>

    return (
        <ProjectPage
            title="Virtual Memory Simulator"
            description={description}
            gif={gif}
        />

    )
}

export default Vmsim;