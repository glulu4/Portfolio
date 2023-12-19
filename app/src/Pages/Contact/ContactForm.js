import React from 'react'

import Textarea from '@mui/joy/Textarea';

import FormHelperText from '@mui/joy/FormHelperText';
import Button from '@mui/joy/Button';
import emailjs from 'emailjs-com';

import { useState } from 'react'
import { isMobile } from 'react-device-detect'


import './Contact.css'


function ContactForm() {
    emailjs.init('eaIxS2B0R7VcLlCLf')


    const [name, setName] = useState("")
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    const [nameColor, setNameColor] = useState("neutral")
    const [emailColor, setEmailColor] = useState("neutral")
    const [msgColor, setMsgColor] = useState("neutral")
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [msgError, setMsgError] = useState('')
    const [successMsg, setSuccessMsg] = useState('')


    const handleNameChange = (event) => {
        event.preventDefault();
        setName(event.target.value)
    }
    const handleEmailChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value)
    }
    const handleMessageChange = (event) => {
        event.preventDefault();
        setMessage(event.target.value)
    }


    function sendEmail() {

        var templateParams = {
            name: name,
            email: email,
            message: message,
            reply_to: email,
        };

        emailjs.send('email_portfolio', 'template_l5y3xbi', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault()



        if (!email || !(email.includes("@") && email.includes("."))) {
            setEmailColor("danger")
            setEmailError("Enter your email")

            // render a message to input email
            // change email box to red

        }
        else {
            setEmailColor("success")
            setEmailError("")
        }

        // if name is empty
        if (!name) {
            // render a message to input name
            // change name box to red
            setNameError("Enter your name")
            setNameColor("danger")
        }
        else {
            setNameColor("success")
            setNameError("")
        }

        if (!message) {
            setMsgColor("danger")
            setMsgError("You can't leave this blank!")

            // render a message to put message in
            // change message box to red

        }
        else {
            setMsgColor("success")
            setMsgError("")


        }

        // if one returns false, we enter the conditon, and return
        if (!(message && name && (email && email.includes("@") && email.includes(".")))) {
            return;
        }


        // reset everything and
        setSuccessMsg("Your message was sent!")
        setEmailColor("neutral")
        setMsgColor("neutral")
        setNameColor("neutral")

        setName('')
        setEmail('')
        setMessage('')




        sendEmail()



    }

    const formHelperTextStyle = { 
        color: '#d32f2f', 
        paddingLeft: '2%' 
    };
    const msgArea = { 
        minHeight: '20rem', 
        width: "auto",
        marginTop: "1%"
    };
    const buttonStyle = { 
        marginTop: '2%',
        alignSelf:'center'
    };
    const successMessageStyle = { 
        textAlign:'center',
        fontFamily: 'Inter', 
        color: '#4caf50',
        paddingBottom:"5%",
        fontSize:'large'
    };


    const nameAndEmailContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom:'5%',
        gap:'2rem',
        
    }


    const contactFormTitleStyle = {
        textAlign: 'center',
        fontFamily: "Inter",
        fontSize: !isMobile ? '3rem' : 'auto',
        borderBottom:' 3px solid black',
        width: 'fit-content',



    }


    const nameStyle = {
        flexBasis: "50%",
        flexGrow: "1",
        flexShrink: "1",
        width:'auto',
    }

    const emailStyle = {
        flexBasis: "50%",
        flexGrow: "1",
        flexShrink: "1",
        width: 'auto',


    }



    const contactDiv = {
        margin: isMobile ? '10%' : '3%',
        width: isMobile ? "80%" : "30%",
        height: '100%',
        flexShrink: "1",
        flexGrow: "1",
        

    }

    const header = {
        margin:'auto',
        fontFamily: 'IBMPlexMono',
        fontWeight: '450',
        paddingLeft:"1%",
        fontSize:'larger'
    }

    const boxStyle = {
        marginTop:"1%"
    }

    const buttonContainerStyle = {
        display:'flex',
        justifyContent:'center'
    }

    return (


        <div style={contactDiv}>
            <h1 style={contactFormTitleStyle}>Contact</h1>

                <div style={nameAndEmailContainerStyle}>
                    <div style={nameStyle} >
                        <p style={header}>Name</p>
                        <Textarea style={boxStyle} color={nameColor} onChange={handleNameChange} value={name} placeholder="Enter Name"></Textarea>
                        <FormHelperText style={formHelperTextStyle}>{nameError}</FormHelperText>
                    </div>

                    <div style={emailStyle}>
                        <p style={header}>Email</p>
                        <Textarea style={boxStyle}  color={emailColor} value={email} onChange={handleEmailChange} placeholder="Enter Email"></Textarea>
                        <FormHelperText style={formHelperTextStyle}>{emailError}</FormHelperText>

                    </div>
                </div>



            <div>
                <p style={header}>Message</p>
                <Textarea color={msgColor} value={message} onChange={handleMessageChange} style={msgArea} placeholder="Hi Gabby..."></Textarea>
                <FormHelperText style={formHelperTextStyle}>{msgError}</FormHelperText>
            </div>

            <div style={buttonContainerStyle}>
                <Button
                    style={buttonStyle}
                    color="primary"
                    disabled={false}
                    onClick={handleSubmit}
                    size="md"
                    variant="soft"
                >
                    Submit
                </Button>
            </div>



            <p className='email-success' style={successMessageStyle}>{successMsg}</p>
        </div>
    )



}

export default ContactForm;