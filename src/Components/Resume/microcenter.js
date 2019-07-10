import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import MicroCenterImage from '../../microcenter7.png'
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import MicroCenterInfo from './microCenterInfo.js'


    const styles = {
    Box : {
        padding : 20,
        marginTop : 10,
        marginBottom : 10,
        marginLeft : 5,
        marginRight : 5,
        height : 'auto',
    }
}

class MicroCenter extends Component{



    render(){


        return(
            <Fade in={true} timeout={1000}>
    <Grid container>
        <Grid item xs={12} sm={6}>
            <Box>
            <Typography
                style={{color : '#E0E0E0'}}
                    variant='subtitle1'
                >
                    Micro Center. 2009 - 2010
            </Typography>
            <hr style={{ width : '70%'}}></hr> 
            <Typography
                style={{color : '#E0E0E0'}}
                variant='subtitle1'
            >
                    Denver, CO
        </Typography>
        <img src={MicroCenterImage} alt='apple logo' width='100px' />
            </Box>
        </Grid>
        <Grid item  xs={12} sm={6}>
            <MicroCenterInfo/>
        </Grid>
    </Grid>
</Fade>

        )
    }
}


export default MicroCenter
