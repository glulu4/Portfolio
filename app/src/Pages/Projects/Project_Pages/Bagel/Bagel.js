import React from 'react'
import gif from './bagel.gif'
import './Bagel.css'

import BackArrow from '../../../BackArrow'
import { Styles } from '../Styles'


function Bagel(){


    return (
        <div style={Styles.pageDiv}>


            <BackArrow></BackArrow>

            <div className='row' style={Styles.rowStyle}>
                <div className='box' style={Styles.boxStyle}>
                    <h1 style={Styles.title}>Sam's Monday Bagels </h1>

                    <p className style={Styles.ptext}>
                        Shmuel's Monday Bagels is a professional website for a local bakery 
                        based in Pittsburgh. This website uses React for the frontend and 
                        Flask for the backend. Moreover, ThreeJs, the Stripe API, and 
                        Yagmail, are used to add the 3D bagel, the payment page, and 
                        emailing the weekly orders to the owner, respectively.
                        All the code can be found on my github, glulu4 
                        ( linked on homepage).
                    </p>

                </div>
                <div className='box' style={Styles.boxStyle2}>
                    <img style={Styles.gifStyle} src={gif} alt="" />
                </div>

            </div>
        </div>
    )

}

export default Bagel