import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import ReactLogo from '../../react.png'
import ReduxLogo from '../../redux.png'
import HtmlLogo from '../../html5.png'
import RailsLogo from '../../rails.png'
import CssLogo from '../../css3.png'
import AppImage from '../../image.png'
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';


const styles = makeStyles(theme =>({
        Box : {
        textAlign : 'left',   
        padding : 20,
        marginLeft : 5,
        marginRight : 5,
        height : 'auto',
        }
}))




export default function KarmaCalculator(){
    
    const classes = styles();


    return (
        <Fade in={true} timeout={1000}>
            <Box
                borderRadius={8}
                textAlign="left"
                bgcolor='text.secondary' 
                justify='center'
                className={classes.Box}
            >
            <hr style={{ width : '100%'}}></hr> 
            <Typography
                style={{color : '#E0E0E0'}}
                variant='subtitle1'
            >
                    + Incorporated WRLD.JS, an open source JavaScript 3D map, for a visually striking interactive user experience.<br></br>  
                    + Designed an Interactive frontend with React and Redux, and React-Semantic. <br></br>
                    + Developed Rails Backend to facilitate a seamless relationship between users by incorporating websockets.<br></br>
                    + Authenticated users for security by implementing JSON Web Tokens, local storage, and Bcrypt.<br></br>  

            </Typography>
            <img src={ReactLogo} alt='react log' style={{width : '60px'}} />
            <img src={ReduxLogo} alt='react log' style={{width : '60px'}} />
            <img src={RailsLogo} alt='react log' style={{width : '60px'}} />
            <img src={HtmlLogo} alt='redux log' style={{width : '60px'}} />
            <img src={CssLogo} alt='redux log' style={{width : '53px'}} />
            </Box>
    </Fade>
    )
  
}
