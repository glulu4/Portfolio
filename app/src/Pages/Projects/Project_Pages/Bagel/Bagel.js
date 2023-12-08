import React from 'react'
import gif from './bagel.gif'
import './Bagel.css'

import {isMobile} from 'react-device-detect'


function Bagel(){

    const boxStyle = {
        display: 'flex',
        flexBasis: "50%",
        // backgroundColor: 'aliceblue',
        // borderRadius:"50px", 
        // flexShrink: "4",
        flexGrow: "1",
        minWidth: "0px",
        // outlineStyle: 'auto', 
        flexDirection: "column",
        margin: "2%",
        minHeight: "0px",
        overflow: 'hidden', // maybe change to croll
        justifyContent: "flex-start",
    }


    const boxStyle2 = {
        // border: '1px solid black',
        display: 'flex',
        flexBasis: "50%",
        // backgroundColor: 'aliceblue',
        // borderRadius: "50px",
        // flexShrink: "4",
        justifyContent: "center",
        flexGrow: "1",
        minWidth: "0px",
        flexDirection: "column",
        margin: "2%",
        minHeight: "0px",
        overflow: 'auto', // maybe change to croll
        // boxShadow: "-20px 20px 0px 0px white", 


    }
    const rowStyle = {
        display: "flex",
        width: '100%',
        height: 'auto',
        flexDirection: isMobile ? "column" : "row",
        gap: '4rem',
    }

    const ptext = {
        fontSize: !isMobile ? '2rem' : 'auto',
        fontFamily:'Nunito',
        fontWeight:'550',

  


    }

    const title = {
        fontFamily:"RobotoSlab",
        fontSize: !isMobile ? '3rem' : 'auto',

    }


    return (
        <div className='bagel-page-div'>



            <div className='row' style={rowStyle}>

                <div className='box' style={boxStyle}>
                    <h1 style={title}>Sam's Monday Bagels </h1>

                    <p className style={ptext}>
                        Shmuel's Monday Bagels is a professional website for a local bakery 
                        based in Pittsburgh. This website uses React for the frontend and 
                        Flask for the backend. Moreover, ThreeJs, the Stripe API, and 
                        Yagmail, are used to add the 3D bagel, the payment page, and 
                        emailing the weekly orders to the owner, respectively.
                        All the code can be found on my github, glulu4 
                        ( linked on homepage).
                    </p>

                </div>
                <div className='box' style={boxStyle2}>
                    <img id='bagel-gif' src={gif} alt="" />
                    {/* className={fade} */}
                </div>

            </div>
        </div>
    )

}

export default Bagel