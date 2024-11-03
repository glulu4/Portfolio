// src/components/ProjectRoute.js

import React from 'react';
import {useParams} from 'react-router-dom';
import {projectData} from '../../types/projectData';
import ProjectPage from './ProjectPage';
import {isMobile} from 'react-device-detect';
import DVD from './DVD';

function ProjectRoute() {

  const gifStyle: React.CSSProperties = {
    display: 'block',
    maxWidth: isMobile ? "40.25vw" : '16.771vw',
    maxHeight: isMobile ? "72.5vw" : '30.208vw',
    width: 'auto',
    height: 'auto',


  }
  const {projectId} = useParams();
  const project = projectData.find((proj) => proj.path === `${projectId}`);
  if (!project) return <div>Project not found</div>;

  if (project.name === "Bouncing DVD Logo") {
    return (
      <DVD />
    )
  }

  return (
    <ProjectPage
      title={project.name}
      detail={project.detail}
      gifSrc={project.gif || ""}
      style={project.mobileDisplay ? gifStyle : {}}
    />
  );
}

export default ProjectRoute;
