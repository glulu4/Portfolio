import React from 'react'

import BackArrow from '../BackArrow'
import { Styles } from './Project_Pages/Styles'


const ProjectPage = ({title, description, gif, style, }) => {


    return (
        <div style={Styles.pageDiv}>


            <BackArrow></BackArrow>

            <div className='row' style={Styles.rowStyle}>
                <div className='box' style={Styles.boxStyle}>
                    <h1 style={Styles.title}>{title}</h1>

                    <p className style={Styles.ptext}>
                        {description}
                    </p>

                </div>
                <div className='box' style={Styles.boxStyle2}>
                    <img style={{ ...Styles.gifStyle, ...style?.gifStyle}} src={gif} alt="" />
                </div>

            </div>
        </div>
    )

}

export default ProjectPage;