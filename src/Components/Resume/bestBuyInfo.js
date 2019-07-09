import React, { Component } from 'react'
import BestBuyImage from '../../bestbuy.png'
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

class BestBuyInfo extends Component{


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
        Associate, October 2010 - November, 2011
            </Typography>
            <hr style={{width : '100%'}}></hr><br></br>
            <Typography style={{color : '#E0E0E0'}} variant='subtitle1' >
                    + Provided sales and support solutions for retail clients.<br></br> 
                        + Installed and configured Windows environments and security solutions.<br></br> 
                            + Troubleshoot Windows applications. <br></br>

            </Typography>
        </Box>        

        )
    }
}


export default BestBuyInfo
