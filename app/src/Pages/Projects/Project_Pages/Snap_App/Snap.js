import React from 'react'
import gif from './snap.gif'

import ProjectPage from '../../ProjectPage'


function Snap() {

    const description =
        <>
            Snap App, the productivity app, was a class project I worked on
            with two others, Hannah Harhai @hannahharhai & Maya Iwabuchi @mayajoyiwabuchi.
            We designed this web app under the MVVM design principle. All the code is on my <a href='https://github.com/glulu4/Snap_App' target='_target'>github</a>.
        </>

    return (
        <ProjectPage
            title="Snap App"
            description={description}
            gif={gif}
        />

    )


}

export default Snap;