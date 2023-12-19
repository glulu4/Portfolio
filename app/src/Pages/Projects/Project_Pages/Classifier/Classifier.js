import React from 'react'
import gif from './classifier.gif'


import BackArrow from '../../../BackArrow'
import { Styles } from '../Styles'


function Classifier() {


    return (
        <div style={Styles.pageDiv}>


            <BackArrow></BackArrow>

            <div className='row' style={Styles.rowStyle}>
                <div className='box' style={Styles.boxStyle}>
                    <h1 style={Styles.title}>Complex Word Classifier</h1>

                    <p className style={Styles.ptext}>
                        This is a python complex word classifier. I use word length and average occurence, from the 
                        Google unigram count, as the two features. Moreover, this program does not identify words in text, rather 
                        identifies words in a list and reports scores.
                    </p>

                </div>
                <div className='box' style={Styles.boxStyle2}>
                    <img style={Styles.gifStyle} src={gif} alt="" />
                </div>

            </div>
        </div>
    )

}

export default Classifier