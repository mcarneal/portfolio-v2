import React, { Fragment, Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box'
import ReactLogo from '../react.png'
import ReduxLogo from '../redux.png'
import HtmlLogo from '../html5.png'
import RailsLogo from '../rails.png'
import CssLogo from '../css3.png'
import JavaScriptLogo from '../javascript.png'
import MaterialLogo from '../materiallogo.png'
import RubyLogo from '../Ruby_logo.svg'
import GitLogo from  '../git.png'
import HerokuLogo from '../heroku.png'
import PostgressLogo from '../postgress.png'
import AWS from '../aws.png'

const styles = makeStyles(theme =>({
    Box : {
        marginTop: 20,
        textAlign : 'left',   
        padding : 20,
        marginLeft : 5,
        marginRight : 5,
        height : 'auto',
        }
}))




export default function HomePage(){
    
    const classes = styles();



        return(
            <Grid container
                 spacing={0}
            >
                <Grid item xs={12} sm={6} md={6}>
                    <Fade in={true} timeout={3000}>
                        <Box>
      
        </Box>
</Fade>
            </Grid>
            <Grid item xs={12} sm={6} md={5}
            alignItems='center'>
            <Fade in={true} timeout={1000}>
        
                <Box
            borderRadius={8}
            textAlign="left"
            bgcolor='text.secondary' 

                className={classes.Box}
            >
            <Typography
                style={{color : '#E0E0E0'}}
                variant='subtitle1'
            >
                    Full stack web developer with a passion for creativity and problem solving. With experience in Ruby on Rails, JavaScript, and React and a background in customer facing IT, I discovered web development as an outlet to channel my love for technology through creativity. I bring strong skills in communication, interpersonal relationships, and problem solving under pressure. With these skills I can articulate vision and purpose, while thriving in a ever changing work environment.

            <br></br>
            <br></br>
               Technology has always been a passion of mine. From a young age I have been fascinated by how things work and how I can take them apart. Through my journey I have explored 3D animation, building custom desktops, Cisco Internetworking, hardware and software technical support, and software development. 
<br></br>
<br></br>
When Im not involved with technology I turn to my other passion, art. I love to make music, write stories, and photograph the world the way I see it. I believe that art is an expression of the way an individual  feels, sees, or hears the world around themselves. 
<br></br>
<br></br>
I see the future as a marriage between technology and artistry, and I look forward to sharing it with you. 
<br></br>
<br></br>

    Michael G Carneal

            </Typography>
            <br></br>
            <Typography
                style={{textDecoration : 'underline'}}
                align='center'
                style={{color : '#E0E0E0'}}
                variant='h4'
            >
                    Developer Skills
        </Typography>
        <br></br>
    <br></br>

            <img src={ReactLogo} alt='react logo' style={{width : '90px'}} />
            <img src={ReduxLogo} alt='redux logo' style={{width : '90px'}} />
            <img src={JavaScriptLogo} alt='javascript logo' style={{width : '90px'}} />
            <img src={HtmlLogo} alt='html logo' style={{width : '90px'}} />
            <img src={CssLogo} alt='css logo' style={{width : '80px'}} />
            <img src={MaterialLogo} alt='material logo' style={{width : '90px'}} />
            <img src={RailsLogo} alt='rails logo' style={{width : '90px'}} />
            <img src={RubyLogo} alt='ruby logo' style={{width : '90px'}} />
            <img src={GitLogo} alt='git logo' style={{width : '90px'}} />
            <img src={HerokuLogo} alt='heroku logo' style={{width : '90px'}} />
            <img src={PostgressLogo} alt='postgress logo' style={{width : '90px'}} />
      

        </Box>
</Fade>

        </Grid>
    </Grid>

        )
    }





