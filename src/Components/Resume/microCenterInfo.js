import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade';


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

class MicroCenterInfo extends Component {


    render(){


        return(
            <Box
            borderRadius={8}
            textAlign="left"
            bgcolor='text.secondary' 
            style={styles.Box}>

        <Typography 
            style={{color : '#E0E0E0'}}
            variant='h6'
        >
        Associate
            </Typography>
            <hr style={{width : '100%'}}></hr><br></br>
            <Typography style={{color : '#E0E0E0'}} variant='subtitle1' >
                    + Drove sales solutions above 20% of target gross profit<br></br> 
                        + Communicate and listen to clients while offering custom to order desktop machines.<br></br> 
                            + Configure, build, and install hardware plus software for custom purchase desktop configurations <br></br>

            </Typography>
        </Box>        


        )
    }
}

export default MicroCenterInfo
