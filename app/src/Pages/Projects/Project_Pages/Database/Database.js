import React from 'react'
import gif from './db.gif'
import ProjectPage from '../../ProjectPage'



function Database() {


    const description =
        <>
            Java program that executes a variety of cURL commands,
            using the HttpURLConnection class. The cURL commands include
            GET, POST, and DELETE. This was made for Sam's Bagel's.
            The code can be found <a href='https://github.com/glulu4/Database-Manager'>here</a>.
        </>

    return (
        <ProjectPage
            title="Database Manager"
            description={description}
            gif={gif}
        />

    )



}

export default Database;