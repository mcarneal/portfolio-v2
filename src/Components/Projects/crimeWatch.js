import React from 'react'
import ReactDOM from 'react-dom'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import JavaScriptLogo from '../../javascript.png'
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




export default function IssueHandlr(){
    
    const classes = styles();


    return (
            <Fade in={true} timeout={1000}>
        
                <Box
            borderRadius={8}
            textAlign="left"
            bgcolor='text.secondary' 

                className={classes.Box}
            >
            <hr style={{ width : '100%'}}></hr> 
            <Typography
                style={{color : '#E0E0E0'}}
                variant='subtitle1'
            >
                    + Imported a 3D JavaScript Library 3JS to build a virtual globe for visual effects.<br></br>
                        + Designed a single page web app using Vanilla JavaScript to conditionally render the user experience.<br></br>
                            + Engineered connections to a leaflet api to allow users to interact and post to a map. <br></br>
                                + Devised a Rails Backend API to allow a request response cycle from client to server.<br></br>

            </Typography>
            <img src={JavaScriptLogo} alt='javascript logo' style={{width : '60px'}} />
            <img src={RailsLogo} alt='react log' style={{width : '60px'}} />
            <img src={HtmlLogo} alt='redux log' style={{width : '60px'}} />
            <img src={CssLogo} alt='redux log' style={{width : '53px'}} />
            </Box>
    </Fade>
    )
  
}


