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
                        This project features a Python-based complex word 
                        classifier that classifies words based on two key 
                        metrics: word length and average occurrence, as sourced 
                        from Google's unigram count data. Rather than identifying 
                        words within a text, this program focuses on analyzing words 
                        from a given list and generates corresponding scores for each.
                        Don't worry, the scores appear at the end.
                        The code can be found on my <a href='https://github.com/glulu4/Complex-Word-Classifier/blob/main/README.md' target='_target'>github</a>.
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