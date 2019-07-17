import React, { Fragment, Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box'


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
                    <Box>
                </Box>
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
        </Box>
</Fade>

        </Grid>
    </Grid>

        )
    }




