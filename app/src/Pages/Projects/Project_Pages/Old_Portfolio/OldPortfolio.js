import React from 'react'
import gif from './old_portfolio.gif'

import ProjectPage from '../../ProjectPage'

function OldPortfolio() {


    const description =
        <>
            My old portfolio website! I made this after I learned how to use Threejs; hence, the 3D model.
            I was inspired to add the greek statue model from Jay-Z's 'Magna Carta... Holy Grail' album.
            All the code can be found on my <a href='https://github.com/glulu4/Personal_Site' target='_target'>github</a>.
        </>

    return (
        <ProjectPage
            title="Old Portfolio"
            description={description}
            gif={gif}
        />

    )

}

export default OldPortfolio;