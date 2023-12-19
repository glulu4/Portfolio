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
                        in Pittsburgh. I used React and Flask for the frontend and backend. 
                        Moreover, ThreeJs, the Stripe API, and 
                        Yagmail, were used for the 3D bagel, payment processing, email system, respectively.
                        All the code can be found on my <a href='https://github.com/glulu4/Bagels' target='_target'>github</a>. 
                        The site, can be found <a href='https://shmuelsmondaybagels.com/' target='_target'>here</a>.
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