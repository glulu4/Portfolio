import React from 'react'


import ContactForm from './ContactForm';
import BackArrow from '../components/BackArrow';
import createStyles from '../../styles/styles';

function Contact() {





    return (
        <div style={styles.pageDiv} >
            <BackArrow></BackArrow>
            <ContactForm />
        </div>
    )

}

export default Contact;


const styles = createStyles({
    pageDiv: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'flex-start',
        height: '100vh',
        width: 'auto'
    },

})