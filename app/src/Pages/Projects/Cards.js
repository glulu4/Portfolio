import React from 'react';
// import { Card } from '@mui/material';
import './Cards.css'
// import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

// import { isMobile } from 'react-device-detect';



const baseUrl = window.location.origin;




const projectCards = []

let projectNames = [
    "Sam's Monday Bagels", 
    "Sorting Algorithms", 
    "Airline System", 
    "Virtual Memory Simulator", 
    "Neighborhood Analysis", 
    "This Site!", 
    "Database Manager", 
    "Bouncing DVD Logo", 
    "Hoodies For Israel", 
    "Shakespeare Lagauge Model", 
    "MCtest Q&A Model", 
    "Snap App", 
    "Complex Word Classifier", 

]

let projectDescriptions = [
    "Professional Bagel Webiste, designed for weekly orders",
    "Various sorting algorithms, written in Java",
    "An airline system that uses graphs and related algorithms",
    "A virtual memory simulation",
    "Python Program that determines the best Pittsburgh neighborhood",
    "Simple yet elegant portfolio for Gabby Lulu",
    "Database manager for Sam's Bagels",
    "...",
    "...",
    "...",
    "...",
    "...",
    "..."
]



// url paths, from App.js

const paths = [
    `${baseUrl}/bagel`,
    `${baseUrl}/sorting-algorithms`,
    `${baseUrl}/airline`,
    `${baseUrl}/vmsim`,
    `${baseUrl}/neighborhood`,
    `${baseUrl}/portfolio`,
    `${baseUrl}/DatabaseManager`,
    `${baseUrl}/tbd`,
    `${baseUrl}/tbd`,
    `${baseUrl}/tbd`,
    `${baseUrl}/tbd`,
    `${baseUrl}/tbd`,
];


// eslint-disable-next-line
projectNames.map((projectName, index) => {
    projectCards.push(
        <div className='card'>
        <Link to={paths[index]} className='linkStyle' >

           
                <h1 className='underlineOnHoverStyle card-title'>{projectName}</h1>
                <p className='project-description'> {projectDescriptions[index]} </p>

                {/* <div className='dot-grid'>
                    <span className='dot'></span>
                    <span>Css</span>    
                </div> */}
            

        </Link >
        </div>
    );

})



export default projectCards;
