import React from 'react'
import IconButton from '@mui/material/IconButton';
import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import createStyles from '../../styles/styles';

function Links() {



  return (
    <div style={styles.buttonContainerStyle}>
      <IconButton sx={styles.IconButtonStyle} href='https://github.com/glulu4' target="_blank">
        <FaGithub style={{color: 'black', }} />
      </IconButton>

      <IconButton sx={styles.IconButtonStyle} href='https://www.linkedin.com/in/gabriel-lulu/' target="_blank">
        <FaLinkedin style={{color: '#0072b1'}} />
      </IconButton>
    </div>
  )

}

export default Links;

const styles = createStyles({
  IconButtonStyle: {
    borderRadius: '8px', // Adjust the border radius as needed
    backgroundColor: 'inherit',
    minWidth: 60,
    minHeight: 60,
  },
  buttonContainerStyle: {
    bottom: "0",
    left: '0',
    position: 'absolute',
  }
})