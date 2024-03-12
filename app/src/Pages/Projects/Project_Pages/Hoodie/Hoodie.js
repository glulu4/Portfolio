import React from 'react'
import gif from './hoodie.gif'

import ProjectPage from '../../ProjectPage'



function Hoodie() {


    const description =
        <>
            Hoodies for Israel is a React web app that integrates the
            Stripe Checkout API. A hallmark of ths project is the dynamic resizing of the page
            and the rows. I used vanilla CSS flexbox to achieve this.
            The code can be found <a href='https://github.com/glulu4/Hoodie_Site' target='_target'>here</a>.
            The site, can be found <a href='https://hoodiesforisrael.com/' target='_target'>here</a>.
        </>

    return (
        <ProjectPage
            title="Hoodie's for Israel"
            description={description}
            gif={gif}
        />

    )


}

export default Hoodie;