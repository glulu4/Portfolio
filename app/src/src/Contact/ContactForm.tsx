import Textarea from '@mui/joy/Textarea';
import FormHelperText from '@mui/joy/FormHelperText';
import Button from '@mui/joy/Button';
import emailjs from 'emailjs-com';
import {SetStateAction, useState} from 'react'
import {isMobile} from 'react-device-detect'
import createStyles from '../../styles/styles';
import {ColorPaletteProp} from '@mui/joy';



function ContactForm() {
    emailjs.init('eaIxS2B0R7VcLlCLf')


    const [name, setName] = useState("")
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    const [nameColor, setNameColor] = useState<ColorPaletteProp>("neutral")
    const [emailColor, setEmailColor] = useState<ColorPaletteProp>("neutral")
    const [msgColor, setMsgColor] = useState<ColorPaletteProp>("neutral")
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [msgError, setMsgError] = useState('')
    const [successMsg, setSuccessMsg] = useState('')


    const handleNameChange = (event: {preventDefault: () => void; target: {value: SetStateAction<string>;};}) => {
        event.preventDefault();
        setName(event.target.value)
    }
    const handleEmailChange = (event: {preventDefault: () => void; target: {value: SetStateAction<string>;};}) => {
        event.preventDefault();
        setEmail(event.target.value)
    }
    const handleMessageChange = (event: {preventDefault: () => void; target: {value: SetStateAction<string>;};}) => {
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

    const handleSubmit = (event: {preventDefault: () => void;}) => {
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



    return (


        <div style={styles.contactDiv}>
            <h1 style={styles.contactFormTitleStyle}>Contact</h1>

            <div style={styles.nameAndEmailContainerStyle}>
                <div style={styles.nameStyle} >
                    <p style={styles.header}>Name</p>
                    <Textarea style={styles.boxStyle} color={nameColor} onChange={handleNameChange} value={name} placeholder="Enter Name"></Textarea>
                    <FormHelperText style={styles.formHelperTextStyle}>{nameError}</FormHelperText>
                </div>

                <div style={styles.emailStyle}>
                    <p style={styles.header}>Email</p>
                    <Textarea style={styles.boxStyle} color={emailColor} value={email} onChange={handleEmailChange} placeholder="Enter Email"></Textarea>
                    <FormHelperText style={styles.formHelperTextStyle}>{emailError}</FormHelperText>

                </div>
            </div>
            styles.


            <div>
                <p style={styles.header}>Message</p>
                <Textarea color={msgColor} value={message} onChange={handleMessageChange} style={styles.msgArea} placeholder="Hi Gabby..."></Textarea>
                <FormHelperText style={styles.formHelperTextStyle}>{msgError}</FormHelperText>
            </div>

            <div style={styles.buttonContainerStyle}>
                <Button
                    style={styles.buttonStyle}
                    color="primary"
                    disabled={false}
                    onClick={handleSubmit}
                    size="md"
                    variant="soft"
                >
                    Submit
                </Button>
            </div>



            <p style={{...styles.successMessageStyle, ...styles.fadeInAnimation}}>{successMsg}</p>
        </div>
    )



}

export default ContactForm;

const styles = createStyles({
    formHelperTextStyle: {
        color: '#d32f2f',
        paddingLeft: '2%'
    },
    msgArea: {
        minHeight: '20rem',
        width: "auto",
        marginTop: "1%"
    },
    buttonStyle: {
        marginTop: '2%',
        alignSelf: 'center'
    },
    successMessageStyle: {
        textAlign: 'center',
        fontFamily: 'Inter',
        color: '#4caf50',
        paddingBottom: "5%",
        fontSize: 'large'
    },


    nameAndEmailContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '5%',
        gap: '2rem',

    },


    contactFormTitleStyle: {
        textAlign: 'center',
        fontFamily: "Inter",
        fontSize: !isMobile ? '3rem' : 'auto',
        borderBottom: ' 3px solid black',
        width: 'fit-content',



    },


    nameStyle: {
        flexBasis: "50%",
        flexGrow: "1",
        flexShrink: "1",
        width: 'auto',
    },

    emailStyle: {
        flexBasis: "50%",
        flexGrow: "1",
        flexShrink: "1",
        width: 'auto',


    },

    // fadeInAnimation: {
    //     animation: 'fadeIn 1s ease-in-out',
    //     '@keyframes fadeIn': {
    //         from: {opacity: 0},
    //         to: {opacity: 1},
    //     },
    // },

    contactDiv: {
        margin: isMobile ? '10%' : '3%',
        width: isMobile ? "80%" : "30%",
        height: '100%',
        flexShrink: "1",
        flexGrow: "1",


    },

    header: {
        margin: 'auto',
        fontFamily: 'IBMPlexMono',
        fontWeight: '450',
        paddingLeft: "1%",
        fontSize: 'larger'
    },

    boxStyle: {
        marginTop: "1%"
    },

    buttonContainerStyle: {
        display: 'flex',
        justifyContent: 'center'
    },
})