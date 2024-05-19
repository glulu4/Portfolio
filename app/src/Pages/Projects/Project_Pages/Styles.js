import { isMobile } from 'react-device-detect'


export const Styles = { 

    boxStyle : {
        display: 'flex',
        flexBasis: "50%",

        flexGrow: "1",
        minWidth: "0px",
        flexDirection: "column",
        margin: "2%",
        minHeight: "0px",
        overflow: 'hidden', // maybe change to croll
        justifyContent: "flex-start",
    },


    boxStyle2 : {
        display: 'flex',
        flexBasis: "50%",

        justifyContent: "center",
        flexGrow: "1",
        minWidth: "0px",
        flexDirection: "column",
        margin: "2%",
        minHeight: "0px",
        overflow: 'visible', // maybe change to croll
        alignItems: "center",

    },
    rowStyle : {
        display: "flex",
        width: '100%',
        height: 'auto',
        flexDirection: isMobile ? "column" : "row",
        gap: '4rem',
    },

    ptext : {
        fontSize: !isMobile ? '2rem' : '1.2rem',
        fontFamily: 'IBMPlexMono',
        fontWeight: '450',
    },

    title : {
        fontFamily: "Inter",
        fontSize: !isMobile ? '3rem' : 'auto',
        paddingTop: isMobile ? "10%" : "2%",
        textAlign:"center",
        borderBottom: '3px solid black',
        width:'fit-content'

    },

    pageDiv : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // minHeight: "100vh",
        margin: "3%",
        

    },



    gifStyle : {
        borderStyle: 'double',
        borderColor: 'black',
        borderRadius: '10px',
        boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.2)',
        WebkitBorderRadius: '10px', // Note: In React, camelCase is used for vendor-prefixed styles
        MozBorderRadius: '10px',
        MsBorderRadius: '10px',
        OBorderRadius: '10px',
    },




}