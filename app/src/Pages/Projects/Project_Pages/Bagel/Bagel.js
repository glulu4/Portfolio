import React from 'react'
import gif from './bagel.gif'
import ProjectPage from '../../ProjectPage'

function Bagel(){


    const description = 
    <>
            Shmuel's Monday Bagels is a professional website for a local bakery
            in Pittsburgh. I used React and Flask for the frontend and backend.
            Moreover, ThreeJs, the Stripe API, and
            Yagmail, were used for the 3D bagel, payment processing, email system, respectively.
            All the code can be found on my <a href='https://github.com/glulu4/Bagels' target='_target'>github</a>.
            The site, can be found <a href='https://shmuelsmondaybagels.com/' target='_target'>here</a>.
    </>

    return (
        <ProjectPage
            title="Sam's Monday Bagels"
            description={description}
            gif={gif}
        />

    )

}

export default Bagel;