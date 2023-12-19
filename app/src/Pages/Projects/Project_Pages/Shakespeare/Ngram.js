import React from 'react'
import gif from './ngram.gif'


import BackArrow from '../../../BackArrow'
import { Styles } from '../Styles'


function Ngram() {


    return (
        <div style={Styles.pageDiv}>


            <BackArrow></BackArrow>

            <div className='row' style={Styles.rowStyle}>
                <div className='box' style={Styles.boxStyle}>
                    <h1 style={Styles.title}>Shakespeare Language Model</h1>

                    <p className style={Styles.ptext}>
                        N-gram langauge model that is trained on a Shakespeare corpus of text. 
                        No smoothing is used. 
                    </p>

                </div>
                <div className='box' style={Styles.boxStyle2}>
                    <img style={Styles.gifStyle} src={gif} alt="" />
                </div>

            </div>
        </div>
    )

}

export default Ngram