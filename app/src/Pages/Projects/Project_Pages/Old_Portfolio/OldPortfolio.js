import React from 'react'
import gif from './old_portfolio.gif'


import BackArrow from '../../../BackArrow'
import { Styles } from '../Styles'


function OldPortfolio() {


    return (
        <div style={Styles.pageDiv}>


            <BackArrow></BackArrow>

            <div className='row' style={Styles.rowStyle}>
                <div className='box' style={Styles.boxStyle}>
                    <h1 style={Styles.title}>Sam's Monday Bagels </h1>

                    <p className style={Styles.ptext}>
                        My old portfolio website! I made this after I learned how to use Threejs; hence, the 3D model. 
                        I was inspired to add the greek statue model from Jay-Z's 'Magna Carta... Holy Grail' album. 
                        All the code can be found on my <a href='https://github.com/glulu4/Personal_Site' target='_target'>github</a>.

                    </p>

                </div>
                <div className='box' style={Styles.boxStyle2}>
                    <img style={Styles.gifStyle} src={gif} alt="" />
                </div>

            </div>
        </div>
    )

}

export default OldPortfolio;