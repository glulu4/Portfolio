import React from 'react';
import './Cards.css'
import { Link } from 'react-router-dom';

// import { isMobile } from 'react-device-detect';



const baseUrl = window.location.origin;


const projects = [
    {
        name: "Sam's Monday Bagels",
        description: "Professional Bagel Website, designed for weekly orders",
        path: `${baseUrl}/projects/bagel`,
    },
    // {
    //     name: "Airline System",
    //     description: "An airline system that uses graphs and related algorithms",
    //     path: `${baseUrl}/airline`,
    // },
    {
        name: "Virtual Memory Simulator",
        description: "A virtual memory simulation",
        path: `${baseUrl}/projects/vmsim`,
    },
    {
        name: "Neighborhood Analysis",
        description: "Python Program that determines the best Pittsburgh neighborhood",
        path: `${baseUrl}/projects/neighborhood`,
    },
    {
        name: "Old Portfolio",
        description: "Simple yet elegant portfolio for Gabby Lulu",
        path: `${baseUrl}/`,
    },
    {
        name: "Database Manager",
        description: "Database manager for Sam's Bagels",
        path: `${baseUrl}/projects/database`,
    },
    {
        name: "Bouncing DVD Logo",
        description: "Recreated the classic bouncing dvd logo",
        path: `${baseUrl}/projects/dvd`,
    },
    {
        name: "Hoodies For Israel",
        description: "Simple website, designed to raise money for Israel by selling hoodies",
        path: `${baseUrl}/projects/hoodie`,
    },
    {
        name: "Shakespeare Language Model",
        description: "Trained an n-gram model on a Shakespeare corpus",
        path: `${baseUrl}/projects/ngram`,
    },
    // {
    //     name: "MCtest Q&A Model",
    //     description: "Created a model that can answer simple multiple choice questions",
    //     path: `${baseUrl}/tbd`,
    // },
    {
        name: "Snap App",
        description: "Flutter productivity web app",
        path: `${baseUrl}/projects/snap-app`,
    },
    {
        name: "Complex Word Classifier",
        description: "Naive Bayes / Logistic Regression model that can predict complex words in a given text",
        path: `${baseUrl}/projects/classifier`,
    },

];
// eslint-disable-next-line
const projectCards = projects.map((project, index) => (
    <div className='card' key={index}>
        <Link to={project.path} className='linkStyle'>
            <h1 className='underlineOnHoverStyle card-title'>{project.name}</h1>
            <p className='project-description'>{project.description}</p>
        </Link>
    </div>
));










export default projectCards;
