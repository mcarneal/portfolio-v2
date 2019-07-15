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
            <Box
                className={classes.Box}
            >
            <hr style={{ width : '100%'}}></hr> 
            <Typography
                style={{color : '#E0E0E0'}}
                variant='subtitle1'
            >
                    + Developed a Rails API Backend, with endpoints for Employees, Assignments, and Customer Issues.<br></br>  
                        + Implemented user interface employing React and Redux with a combination of custom CSS and Semantic-React for styling.<br></br> 
                            + Utilized JSON Web Tokens and local storage to store encrypted user Information client side. <br></br>

            </Typography>
            <img src={ReactLogo} alt='react log' style={{width : '60px'}} />
            <img src={ReduxLogo} alt='react log' style={{width : '60px'}} />
            <img src={RailsLogo} alt='react log' style={{width : '60px'}} />
            <img src={HtmlLogo} alt='redux log' style={{width : '60px'}} />
            <img src={CssLogo} alt='redux log' style={{width : '53px'}} />
            </Box>

    )
  
}

