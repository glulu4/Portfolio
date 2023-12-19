import React from 'react'
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function BackArrow(){
    return ( 
        <IconButton style={{ position: 'absolute', top: '0', left: '0', margin: '1%', color: "black" }}
            onClick={() => { window.history.back(); }}
        >
            <ArrowBackIcon></ArrowBackIcon>
        </IconButton>
    );
};
