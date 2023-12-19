import React from 'react'
import IconButton from '@mui/material/IconButton';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Links(){

    const buttonContainerStyle = {
        bottom: "0",
        left:'0',
        position: 'absolute',
    }
    const IconButtonStyle = {
        borderRadius: '8px', // Adjust the border radius as needed
        backgroundColor: 'inherit',
        minWidth: 60,
        minHeight: 60,
    }

    return ( 
        <div style={buttonContainerStyle}>
            <IconButton sx={IconButtonStyle} href='https://github.com/glulu4' target="_blank">
                <FaGithub style={{ color: 'black',  }} />
            </IconButton>

            <IconButton sx={IconButtonStyle} href='https://www.linkedin.com/in/gabriel-lulu/' target="_blank">
                <FaLinkedin style={{ color: '#0072b1' }} />
            </IconButton>
        </div>
    )

}

export default Links;