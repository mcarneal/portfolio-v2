import React, { Component } from 'react'
import AppleImage from '../../apple.png'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade';
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


class AppleInfo extends Component{

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
                Apple Certified Technician Tier 1, December, 2011 - February 2013<br></br>
                Apple Certified Technician Tier 2, February, 2013 - August 2016<br></br>
                Apple Certified Technician Tier 4, August 2016 - January 2019<br></br>
            </Typography>
            <hr style={{width : '100%'}}></hr><br></br>
            <Typography style={{color : '#E0E0E0'}} variant='subtitle1' >
                    + Increased Macintosh and Ios repairs by 10% over two fiscal quarters by following corporate repair best practices.<br></br>
                        + Maintained active network communications by troubling shooting and deploying Cisco routers and switches.<br></br>
                            + Designed training documentation and troubleshooting techniques for active Apple product line.<br></br>
+ Invited to Cupertino California to assist in corporate events such as Worldwide Developers Conference.
            </Typography>
        </Box>        
        )
    }
}

export default AppleInfo

