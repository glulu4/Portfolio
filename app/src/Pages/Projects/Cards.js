import React from 'react';
import './Cards.css'
import { Link } from 'react-router-dom';
import { JavaOriginal } from 'devicons-react';
import { FlaskOriginalWordmark } from 'devicons-react';
import { PythonOriginalWordmark } from 'devicons-react';
import { ReactOriginal } from 'devicons-react';
import { FlutterOriginal } from 'devicons-react';
import { HaskellOriginal } from 'devicons-react';
import { FirebaseOriginalWordmark } from 'devicons-react';
import { TailwindcssOriginal } from 'devicons-react';

// https://devicons-react.vercel.app/latest




// import { isMobile } from 'react-device-detect';



const baseUrl = window.location.origin;


const iconDiv = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    gap:'2rem',
    paddingTop:'1.5rem'
}

               
                
                

const FLASK = <FlaskOriginalWordmark size='70' />;
const JAVA = < JavaOriginal size='50' />;
const PYTHON = <PythonOriginalWordmark size='60' />;
const REACT = < ReactOriginal size='60' />;
const FLUTTER = <FlutterOriginal size="55" />;
const HASKELL = <HaskellOriginal size='60' />
const FIREBASE = <FirebaseOriginalWordmark size="82"/>
const TailWind = <TailwindcssOriginal  size="60"/>


const projects = [
    {
        name: "Quantified",
        description: "Health tracking app",
        path: `${baseUrl}/projects/quantified`,
        langaugesIcons: [REACT, FIREBASE],
    },

    {
        name: "Seo Crew",
        description: "Styled a company webiste",
        path: `${baseUrl}/projects/seocrew`,
        langaugesIcons: [REACT, TailWind],
    },
    {
        name: "Sam's Monday Bagels",
        description: "Professional Bagel Website, designed for weekly orders",
        path: `${baseUrl}/projects/bagel`,
        langaugesIcons: [FLASK, REACT], 
        
        
    },

    {
        name:"Receipt Budget Tracker",
        description:"A mobile app that scans receipts and tracks expenses",
        path:`${baseUrl}/projects/budget`,
        langaugesIcons: [FLASK, REACT], 
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
        langaugesIcons: [JAVA]

    },
    {
        name: "Neighborhood Analysis",
        description: "Python Program that determines the best Pittsburgh neighborhood",
        path: `${baseUrl}/projects/neighborhood`,
        langaugesIcons: [PYTHON]

    },
    {
        name: "Old Portfolio",
        description: "Simple yet elegant portfolio for Gabby Lulu",
        path: `${baseUrl}/projects/old-portfolio`,
        langaugesIcons: [REACT]
    },
    {
        name: "Sudoku Solver in Haskell",
        description: "Implemented DFS in Haskell to solve sudoku",
        path: `${baseUrl}/projects/sudoku`,
        langaugesIcons: [HASKELL]
    },
    {
        name: "Database Manager",
        description: "Database manager for Sam's Bagels",
        path: `${baseUrl}/projects/database`,
        langaugesIcons: [JAVA]
    },
    {
        name: "Bouncing DVD Logo",
        description: "Recreated the classic bouncing dvd logo",
        path: `${baseUrl}/projects/dvd`,
        langaugesIcons: [REACT]
    },
    {
        name: "Hoodies For Israel",
        description: "Simple website, designed to raise money for Israel by selling hoodies",
        path: `${baseUrl}/projects/hoodie`,
        langaugesIcons: [REACT]
    },
    {
        name: "Shakespeare Language Model",
        description: "Trained an n-gram model on a Shakespeare corpus",
        path: `${baseUrl}/projects/ngram`,
        langaugesIcons: [PYTHON]
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
        langaugesIcons: [FLUTTER]
    },
    {
        name: "Complex Word Classifier",
        description: "Naive Bayes / Logistic Regression model that can predict complex words in a given text",
        path: `${baseUrl}/projects/classifier`,
        langaugesIcons: [PYTHON]
    },


];
// eslint-disable-next-line
const projectCards = projects.map((project, index) => (
    <div className='card' key={index}>
        <Link to={project.path} className='linkStyle'>
            <h1 className='underlineOnHoverStyle card-title'>{project.name}</h1>
            <p className='project-description'>{project.description}</p>

            
            <div style={iconDiv}>
                {project.langaugesIcons.map((lang, index) => {
                    return lang
                })}

            </div>
        </Link>
    </div>
));










export default projectCards;
