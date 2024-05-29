import React from 'react'
import gif from './sudoku.gif'

import ProjectPage from '../../ProjectPage'


function Sudoku() {

    const description =
        <>
            In my functional programming class, one of our projects was to implement
            the infamous DFS algorithm to solve sudoku. 
        </>

    return (
        <ProjectPage
            title="Sudoku Solver"
            description={description}
            gif={gif}
        />

    )


}

export default Sudoku;