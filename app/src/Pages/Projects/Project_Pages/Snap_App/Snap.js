import React from 'react'
import gif from './snap.gif'


import BackArrow from '../../../BackArrow'
import { Styles } from '../Styles'


function Snap() {


    return (
        <div style={Styles.pageDiv}>


            <BackArrow></BackArrow>

            <div className='row' style={Styles.rowStyle}>
                <div className='box' style={Styles.boxStyle}>
                    <h1 style={Styles.title}>Snap App</h1>

                    <p className style={Styles.ptext}>
                       Snap App, the productivity app, was a class project I worked on 
                        with two others, Hannah Harhai @hannahharhai & Maya Iwabuchi @mayajoyiwabuchi.
                        We designed this web app under the MVVM design principle. 
                    </p>

                </div>
                <div className='box' style={Styles.boxStyle2}>
                    <img style={Styles.gifStyle} src={gif} alt="" />
                </div>

            </div>
        </div>
    )

}

export default Snap