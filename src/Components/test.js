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
        marginTop: 100,
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

            </Typography>
        </Box>
</Fade>

        </Grid>
    </Grid>

        )
    }





