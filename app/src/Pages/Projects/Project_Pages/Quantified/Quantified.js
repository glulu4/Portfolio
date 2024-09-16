import React from 'react'
import ProjectPage from '../../ProjectPage'
import gif from './quantfied.gif'
import { isMobile } from 'react-device-detect'


function Quantified() {
  const style = {
    gifStyle: {
      display: 'block',
      maxWidth: isMobile ? "40.25vw" : '16.771vw',
      maxHeight: isMobile ? "72.5vw" : '30.208vw',
      width: 'auto',
      height: 'auto',


    }
  }
  const description =
    <>
      Quantified – Leading the development of a 
      React Native app with Firebase as the backend, 
      designed to allow users to track, analyze, and 
      visualize their health metrics. Collaborating with 
      senior developers to implement secure user 
      authentication, real-time data updates, and 
      dynamic graphing features. Spearheading the 
      integration of Firebase for efficient data 
      storage and app scalability.

    </>
  return (
    <ProjectPage
      title="Quantified - in progress 9/16/24"
      description={description}
      gif={gif}
      style={style}

    />
  )
}

export default Quantified