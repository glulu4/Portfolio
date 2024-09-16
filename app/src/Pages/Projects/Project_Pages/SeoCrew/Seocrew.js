import React from 'react'

import ProjectPage from '../../ProjectPage'

import gif from './seocrew.gif'

function Seocrew() {


  const description =
    <>
      SEO Crew – I styled and developed a modern SEO services website using Tailwind CSS for 
      responsive design, Vercel for seamless deployment, and Wisp for managing blogs. 
      The project is focused on providing a fast, user-friendly experience to showcase 
      SEO services and resources.    </>

  return (
    <ProjectPage
      title="SEO Crew"
      description={description}
      gif={gif}
    />

  )


}

export default Seocrew;