import React from 'react'
import gif from './ngram.gif'

import ProjectPage from '../../ProjectPage'

function Ngram() {

    const description =
        <>
            N-gram langauge model that is trained on a Shakespeare corpus of text.
            No smoothing is used. A dynamic context size is used. All the code can be found <a href='https://github.com/glulu4/N-gram-Langauge-Model' target='_target'>here</a>.
        </>

    return (
        <ProjectPage
            title="Shakespeare Language Model"
            description={description}
            gif={gif}
        />

    )


}

export default Ngram