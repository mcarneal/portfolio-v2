import React, { Component } from 'react'
import AppleImage from '../../apple.png'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade';
import AppleInfo from './appleInfo.js'
import Button from '@material-ui/core/Button';

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


class Apple extends Component {

    state = {
        apple : false
    }

    clickHandler = () => {
        this.setState({apple : !this.state.apple})
    }


    render(){
        return(
            <Fade in={true} timeout={1000}>
    <Grid container>
        <Grid item xs={12} sm={6}>
            <Box

            >
            <Typography
                style={{color : '#E0E0E0'}}
                    variant='h5'
                >
                    Apple Inc. 2011 - 2019
            </Typography>
            <hr style={{ width : '70%'}}></hr> 
            <Typography
                style={{color : '#E0E0E0'}}
                variant='h5'
            >
                    New York, New York
        </Typography>
        <img src={AppleImage} alt='apple logo' width='100px' />
            </Box>
        </Grid>
        <Grid item  xs={12} sm={6}>
            <AppleInfo/> 
        </Grid>
    </Grid>
    </Fade>
        )
    }
}

export default Apple
