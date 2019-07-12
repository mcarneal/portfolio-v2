import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import KarmaCalculatorCard from './karmaCalculatorCard.js'
import ReactLogo from '../../react.png'
import ReduxLogo from '../../redux.png'
import HtmlLogo from '../../html5.png'
import RailsLogo from '../../rails.png'
import CssLogo from '../../css3.png'
import AppImage from '../../image.png'

    const styles = {
        Box : {
        textAlign : 'left',   
        padding : 20,
        marginLeft : 5,
        marginRight : 5,
        height : 'auto',
    }
}



class Projects extends Component{


    render(){
        return(
            <Grid container
            direction-sm='colum-reverse'
            >
        <Grid item  xs={12} sm={6}>
           <KarmaCalculatorCard />
       </Grid>
        <Grid item xs={12} sm={6}>
            <Box
                justify='center'
                style={styles.Box}
            >
            <hr style={{ width : '100%'}}></hr> 
            <Typography
                style={{color : '#E0E0E0'}}
                variant='subtitle1'
            >
                    + Incorporated WRLD.JS, a open source JavaScript 3D map, for a visually striking interactive user experience.<br></br>  
                    + Designed a Interactive frontend with React and Redux, and React-Semantic. <br></br>
                    + Developed Rails Backend to facilitate a seamless relationship between users by incorporating websockets.<br></br>
                    + Authenticated users for security by implementing JSON Web Tokens, local storage, and Bcrypt.<br></br>  

            </Typography>
            <img src={ReactLogo} alt='react log' style={{width : '60px'}} />
            <img src={ReduxLogo} alt='react log' style={{width : '60px'}} />
            <img src={RailsLogo} alt='react log' style={{width : '60px'}} />
            <img src={HtmlLogo} alt='redux log' style={{width : '60px'}} />
            <img src={CssLogo} alt='redux log' style={{width : '53px'}} />
            </Box>
        </Grid>

    </Grid>

        )
    }
}

export default Projects



