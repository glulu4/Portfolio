import React from 'react'
import gif from './db.gif'


import BackArrow from '../../../BackArrow'
import { Styles } from '../Styles'


function Database() {


    return (
        <div style={Styles.pageDiv}>


            <BackArrow></BackArrow>

            <div className='row' style={Styles.rowStyle}>
                <div className='box' style={Styles.boxStyle}>
                    <h1 style={Styles.title}>Database Manager</h1>

                    <p className style={Styles.ptext}>
                        Java program that executes a variety of cURL commands, 
                        using the HttpURLConnection class. The cURL commands include 
                        GET, POST, and DELETE.


                    </p>

                </div>
                <div className='box' style={Styles.boxStyle2}>
                    <img style={Styles.gifStyle} src={gif} alt="" />
                </div>

            </div>
        </div>
    )

}

export default Database