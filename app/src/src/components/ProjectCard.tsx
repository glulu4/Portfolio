import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import createStyles from '../../styles/styles';

interface ProjectCardProps {
  name: string;
  description: string;
  path: string;
  languageIcons: readonly JSX.Element[];
}

const ProjectCard = ({name, description, path, languageIcons}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={path} style={styles.linkStyle}>
      <div style={styles.cardTitleDiv}>
          <h1 style={{...styles.cardTitle, ...styles.underlineOnHover}}>{name}</h1>

      </div>
        <p style={styles.projectDescription}>{description}</p>
        <div style={styles.iconDiv}>
          {languageIcons.map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;

const styles = createStyles({
  card: {
    width: '18rem',
    height: '24rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    borderRadius: '0.5em',
    // transition: 'box-shadow 0.25s ease',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardTitleDiv:{
    width:"90%",

  },
  // cardHover: {
  //   boxShadow: '20px 15px rgba(0, 0, 0, 0.2)',
  // },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
  },
  cardTitle: {
    textAlign: 'center',
    fontSize: '2em',
    fontFamily: 'Inter, sans-serif',
    wordWrap:'break-word'
  },
  projectDescription: {
    fontFamily: '"IBMPlexMono", monospace',
    textAlign: 'center',
    margin: '5%',
    paddingBottom: '2%',
    fontSize: 'large',
    fontWeight: 450,
    color: '#0087ff',
  },
  underlineOnHover: {
    textDecoration: 'none',
  },
  linkStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'black',
  },
  iconDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap:"wrap",
    gap: '2rem',
    paddingTop: '1.5rem',
  },
});
