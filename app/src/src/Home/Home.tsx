import 'path-data-polyfill';
import './Home.css'
import Links from '../components/Links';

import {isMobile} from 'react-device-detect'
import createStyles from '../../styles/styles';


function Home() {

    return (
        <div style={styles.homePageDiv}>
            <div style={styles.nameDiv}>
                <h1 style={styles.nameStyle}>Gabby Lulu</h1>
            </div>

            <p style={styles.descriptionStyle}>
                Portfolio website developed and designed by Gabby Lulu
            </p>

            <div style={styles.linkContainerStyle}>
                <a href='/about' className='link hover' style={styles.homeLinkStyle}>About</a>
                <a href="/projects" className='link hover' style={styles.homeLinkStyle}>Projects</a>
                <a href="/contact" className='link hover' style={styles.homeLinkStyle}>Contact</a>
            </div>


            <Links />
        </div>
    )

}

export default Home;

const styles = createStyles({

    nameDiv: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: "10%"

    },
    homePageDiv: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center' as 'center',
        justifyContent: 'flex-start' as 'flex-start',
        minHeight: '100vh',
        marginTop: isMobile ? '20%' : '0%',

    },
    nameStyle: {
        fontFamily: 'Inter, sans-serif',
        fontSize: isMobile ? '3.5rem' : '5rem',
        textAlign: 'center' as 'center',

    },
    descriptionStyle: {
        color: 'dimgray',
        fontFamily: 'IBMPlexMono, monospace',
        fontSize: '1.5rem',
        textAlign: 'center' as 'center',
        fontWeight: 600,
        margin: isMobile ? '4%' : '2%',
    },

    linkContainerStyle: {
        margin: isMobile ? "5%" : '2%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "2rem",
        marginTop: "2%"
    },


    homeLinkStyle: {
        fontSize: isMobile ? "1.2rem" : '1.5rem',
        position: "relative",
        width: 'fit-content',
        fontFamily: "IBMPlexMono",
        fontWeight: "bold",
        textDecoration: 'none',

    },
})