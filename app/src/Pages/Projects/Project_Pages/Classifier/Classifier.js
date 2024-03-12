import React from 'react'
import gif from './classifier.gif'
import ProjectPage from '../../ProjectPage'

function Classifier() {



    const description =
        <>
            This project features a complex word
            classifier that classifies a word as complex based on two key
            metrics: word length and average occurrence, as sourced
            from Google's unigram count data. Rather than identifying
            words within a text, this program focuses on analyzing words
            from a given list and generates corresponding scores for each.
            Don't worry, the scores appear at the end.
            The code can be found on my <a href='https://github.com/glulu4/Complex-Word-Classifier/blob/main/README.md' target='_target'>github</a>.
        </>

    return (
        <ProjectPage
            title="Complex Word Classifier"
            description={description}
            gif={gif}
        />

    )



}

export default Classifier;