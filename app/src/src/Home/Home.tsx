// import 'path-data-polyfill';
// import './Home.css'
// import Links from '../components/Links';

// import {isMobile} from 'react-device-detect'
// import createStyles from '../../styles/styles';


// function Home() {

//     return (
//         <div style={styles.homePageDiv}>
//             <div style={styles.nameDiv}>
//                 <h1 style={styles.nameStyle}>Gabby Lulu</h1>

//             </div>

//             <p style={styles.descriptionStyle}>
//                 Portfolio website developed and designed by Gabby Lulu
//             </p>

//             <div className='flex flex-row justify-between gap-8' style={styles.linkContainerStyle}>
//                 <a href='/about' className='link hover' style={styles.homeLinkStyle}>About</a>
//                 <a href="/projects" className='link hover' style={styles.homeLinkStyle}>Projects</a>
//                 <a href="/contact" className='link hover' style={styles.homeLinkStyle}>Contact</a>
//             </div>


//             <Links />
//         </div>
//     )

// }

// export default Home;

// const styles = createStyles({

//     nameDiv: {
//         display: "flex",
//         flexDirection: 'row',
//         justifyContent: "center",
//         marginTop: "10%"

//     },
//     homePageDiv: {
//         display: 'flex',
//         flexDirection: 'column' as 'column',
//         alignItems: 'center' as 'center',
//         justifyContent: 'flex-start' as 'flex-start',
//         minHeight: '100vh',
//         marginTop: isMobile ? '20%' : '0%',

//     },
//     nameStyle: {
//         fontFamily: 'Inter, sans-serif',
//         fontSize: isMobile ? '3.5rem' : '5rem',
//         textAlign: 'center' as 'center',

//     },
//     descriptionStyle: {
//         color: 'dimgray',
//         fontFamily: 'IBMPlexMono, monospace',
//         fontSize: '1.5rem',
//         textAlign: 'center' as 'center',
//         fontWeight: 600,
//         margin: isMobile ? '4%' : '2%',
//     },

//     linkContainerStyle: {
//         margin: isMobile ? "5%" : '2%',
//         // display: "flex",
//         // flexDirection: "row",
//         // justifyContent: "space-between",
//         // gap: "2rem",
//         // marginTop: "2%"
//     },


//     homeLinkStyle: {
//         fontSize: isMobile ? "1.2rem" : '1.5rem',
//         position: "relative",
//         width: 'fit-content',
//         fontFamily: "IBMPlexMono",
//         fontWeight: "bold",
//         textDecoration: 'none',

//     },
// })


import 'path-data-polyfill';
import './Home.css';
import Links from '../components/Links';

function Home() {
    return (
        <div className="flex flex-col items-center space-y-36 min-h-screen mt-0 sm:mt-20">
            {/* Name Section */}
            <div className="flex flex-col text-left justify-start mt-20">
                <h1 className="text-center font-sans text-5xl sm:text-7xl font-bold">
                    Gabby
                </h1>
                <h1 className="text-center font-sans text-5xl sm:text-7xl font-bold">
                    Lulu
                </h1>
            </div>

            <div>
                {/* Description */}
                <p className="text-center text-gray-500 font-mono text-lg sm:text-2xl font-semibold my-4 sm:my-2">
                    Portfolio website developed and designed by Gabby Lulu
                </p>

                {/* Navigation Links */}
                <div className="flex flex-row gap-8 my-5">
                    <a href="/about" className="text-lg sm:text-xl font-mono font-bold hover:underline">
                        About
                    </a>
                    <a href="/projects" className="text-lg sm:text-xl font-mono font-bold hover:underline">
                        Projects
                    </a>
                    <a href="/contact" className="text-lg sm:text-xl font-mono font-bold hover:underline">
                        Contact
                    </a>
                </div>
            </div>


            <Links />
        </div>
    );
}

export default Home;
