import BackArrow from '../components/BackArrow'
import {projectData} from '../../types/projectData'
import createStyles from '../../styles/styles'
import ProjectCard from '../components/ProjectCard';
import {isMobile} from 'react-device-detect';

function Projects() {
    return (
        <div  style={styles.projectPageDiv}>

            <BackArrow />


            <div style={styles.projectContainer}>
                            {/* <span style={listTitleStyle}>Cool Classes I've taken 🖥️:</span> */}

                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        name={project.name}
                        description={project.description}
                        path={project.path}
                        languageIcons={project.langaugesIcons}
                    />
                ))}
            </div>

        </div>
    )

}

export default Projects;

const styles = createStyles({
    projectPageDiv:{
        
            display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    minHeight: '100vh',
    marginTop: isMobile ? "15%" : "0%"
    
    }, 
    projectContainer:{
            padding: '5%',
    alignSelf: 'center',
    width: '70%',
    display: 'grid',
    gap: '4em', // `grid-gap` is now simply `gap` in modern CSS
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    }
})

