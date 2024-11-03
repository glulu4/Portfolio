import BackArrow from './BackArrow'
import createstyles from '../../styles/styles';
import {isMobile} from 'react-device-detect';


interface ProjectPageProps {
  title: string;
  detail: JSX.Element
  gifSrc: string;
  style: React.CSSProperties
}
const ProjectPage = ({title, detail, gifSrc, style, }: ProjectPageProps) => {



  return (
    <div style={styles.pageDiv}>


      <BackArrow></BackArrow>

      <div style={styles.rowStyle}>
        <div style={styles.boxStyle}>
          <h1 style={styles.title}>{title}</h1>

          <p style={styles.ptext}>
            {detail}
          </p>

        </div>
        <div style={{...styles.boxStyle2, }}>
          <img style={{...styles.gifStyle, ...style}} src={gifSrc} alt="" />
        </div>

      </div>
    </div>
  )

}

export default ProjectPage;

const styles = createstyles({
  boxStyle: {
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
  rowStyle: {
    display: "flex",
    width: '100%',
    height: 'auto',
    flexDirection: isMobile ? "column" : "row",
    gap: '4rem',
  },
  title: {
    fontFamily: "Inter",
    fontSize: !isMobile ? '3rem' : 'auto',
    paddingTop: isMobile ? "10%" : "2%",
    textAlign: "center",
    borderBottom: '3px solid black',
    width: 'fit-content'

  },
  boxStyle2: {
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
  ptext: {
    fontSize: !isMobile ? '2rem' : '1.2rem',
    fontFamily: 'IBMPlexMono',
    fontWeight: '450',
  },

  pageDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // minHeight: "100vh",
    margin: "3%",


  },
  gifStyle: {
    width: isMobile ? "80%" : "100%",
    borderStyle: 'double',
    borderColor: 'black',
    borderRadius: '10px',
    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.2)',
    WebkitBorderRadius: '10px', // Note: In React, camelCase is used for vendor-prefixed styles
    MozBorderRadius: '10px',

    MsBorderRadius: '10px',
    OBorderRadius: '10px',
  } as React.CSSProperties,
})