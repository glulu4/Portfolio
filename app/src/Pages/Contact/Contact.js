import React from 'react'


import ContactForm from './ContactForm';
import './Contact.css'
import BackArrow from '../BackArrow';

function Contact(){





    return (
        <div className='contact-page-div' >
            <BackArrow></BackArrow>
                <ContactForm />            
        </div>
    )

}

export default Contact;