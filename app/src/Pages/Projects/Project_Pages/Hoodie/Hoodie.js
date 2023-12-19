import React from 'react'
import gif from './hoodie.gif'

// import { isMobile } from 'react-device-detect'

import {Styles} from '../Styles'

import BackArrow from '../../../BackArrow'


function Hoodie() {

    return (
        <div style={Styles.pageDiv}>
            <BackArrow></BackArrow>
            <div className='row' style={Styles.rowStyle}>

                <div className='box' style={Styles.boxStyle}>
                    <h1 style={Styles.title}> Hoodie's for Israel</h1>

                    <p style={Styles.ptext}>
                        Hoodies for Israel is a React web app that integrates the 
                        Stripe Checkout API. A hallmark of ths project is the dynamic resizing of the page
                        and the rows. I used vanilla CSS flexbox to achieve this. 
                    </p>

                </div>
                <div className='box' style={Styles.boxStyle2}>
                    <img style={Styles.gifStyle} id='gif' src={gif} alt="" />
                </div>

            </div>
        </div>
    )

}

export default Hoodie;