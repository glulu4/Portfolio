import React from 'react'
import gif from './neighborhood.gif'


import BackArrow from '../../../BackArrow'
import { Styles } from '../Styles'


function Neighborhood() {


    return (
        <div style={Styles.pageDiv}>


            <BackArrow></BackArrow>

            <div className='row' style={Styles.rowStyle}>
                <div className='box' style={Styles.boxStyle}>
                    <h1 style={Styles.title}>Pittsburgh Neighborhood Analysis</h1>

                    <p className style={Styles.ptext}>
                        This group project aimed to find the best neighborhood in Pittsburgh, 
                        based off of the crime rate, number of park-land, trees, and income. 
                        My part includes the data analysis of the 'natural environment conditions'. 
                    </p>

                </div>
                <div className='box' style={Styles.boxStyle2}>
                    <img style={Styles.gifStyle} src={gif} alt="" />
                </div>

            </div>
        </div>
    )

}

export default Neighborhood