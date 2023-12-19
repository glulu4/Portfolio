import React from 'react'
import gif from './vmsim.gif'


import BackArrow from '../../../BackArrow'
import { Styles } from '../Styles'


function Vmsim() {


    return (
        <div style={Styles.pageDiv}>


            <BackArrow></BackArrow>

            <div className='row' style={Styles.rowStyle}>
                <div className='box' style={Styles.boxStyle}>
                    <h1 style={Styles.title}>Virtual Memory Simulator</h1>

                    <p className style={Styles.ptext}>
                        The gif to the right / bottom displays a simulation of vvirtual memory and paging, 
                        using both a single-level page table and a two-level tree. I used Java for this project. The code
                        can be found on my <a href='https://github.com/glulu4/Virtual-Memory-Simulation' target='_target'>github</a>.
                    </p>

                </div>
                <div className='box' style={Styles.boxStyle2}>
                    <img style={Styles.gifStyle} src={gif} alt="" />
                </div>

            </div>
        </div>
    )

}

export default Vmsim