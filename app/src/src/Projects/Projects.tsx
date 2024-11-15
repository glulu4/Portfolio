import BackArrow from '../components/BackArrow';
import {Project, projectData} from '../../types/projectData';
import createStyles from '../../styles/styles';
import ProjectCard from '../components/ProjectCard';
import {isMobile} from 'react-device-detect';
import {useEffect, useState} from 'react';

function Projects() {
    // Group projects by category
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const projectsByCategory = projectData.reduce((acc: {[key: string]: Project[]}, project: Project) => {
        if (!acc[project.category]) {
            acc[project.category] = [];
        }
        acc[project.category].push(project);
        return acc;
    }, {} as {[key: string]: Project[]}); // Explicitly typing the initial accumulator

    return (
        <div style={styles.projectPageDiv}>
            <BackArrow />

            <div style={styles.projectContainer}>
                {Object.entries(projectsByCategory).map(([category, projects]) => (
                    <div key={category}>
                        {/* Section Heading */}
                        <h2 style={{...styles.categoryHeading, textAlign: isSmallScreen ? "center" : undefined}}>{category}</h2>

                        {/* Project Cards */}
                        <div style={styles.projectGrid}>
                            {projects.map((project, index) => (
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
                ))}
            </div>
        </div>
    );
}

export default Projects;

const styles = createStyles({
    projectPageDiv: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: '100vh',
        marginTop: isMobile ? "15%" : "0%",
    },
    projectContainer: {
        padding: '5%',
        alignSelf: 'center',
        width: '75%', // Widen container for better balance
        display: 'flex',
        flexDirection: 'column',
        gap: '3em',
    },
    categoryHeading: {
        fontSize: '3em',
        fontWeight: 'bold',
        marginBottom: '0.5em',
        textAlign: isMobile ? "center" : undefined,
        paddingLeft:15
    },
    projectGrid: {
        display: 'grid',
        gap: '3rem', // Reduce gap for tighter layout
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        justifyItems: 'center', // Center-align items within grid
    },
});
