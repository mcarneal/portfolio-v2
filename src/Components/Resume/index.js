import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Apple from '../../apple.png'
import BestBuy from '../../bestbuy.png'
import MicroCenter from  '../../microcenter7.png'

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



class Resume extends Component{
    


    render(){


        return(
            <Fragment>
    <Grid container>
        <Grid item xs={12} sm={6}>
            <Box>
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
        <img src={Apple} alt='apple logo' width='100px' />
            </Box>
                   
        </Grid>
        <Grid item  xs={12} sm={6}>

            <Box
                border={1}
                borderColor='#E0E0E0'
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
        </Grid>
    </Grid>
    <Grid container>
        <Grid item xs={12} sm={6}>
            <Box>
            <Typography
                style={{color : '#E0E0E0'}}
                    variant='h5'
                >
                    Best Buy Geek Squad. 2010 - 2011
            </Typography>
            <hr style={{ width : '70%'}}></hr> 
            <Typography
                style={{color : '#E0E0E0'}}
                variant='h5'
            >
                    Denver, CO
        </Typography>
        <img src={BestBuy} alt='apple logo' width='100px' />
            </Box>
                   
        </Grid>
        <Grid item  xs={12} sm={6}>

            <Box
                border={1}
                borderColor='#E0E0E0'
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
        </Grid>
    </Grid>
    <Grid container>
        <Grid item xs={12} sm={6}>
            <Box>
            <Typography
                style={{color : '#E0E0E0'}}
                    variant='h5'
                >
                    Micro Center. 2009 - 2010
            </Typography>
            <hr style={{ width : '70%'}}></hr> 
            <Typography
                style={{color : '#E0E0E0'}}
                variant='h5'
            >
                    Denver, CO
        </Typography>
        <img src={MicroCenter} alt='apple logo' width='100px' />
            </Box>
                   
        </Grid>
        <Grid item  xs={12} sm={6}>

            <Box
                border={1}
                borderColor='#E0E0E0'
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
        </Grid>
    </Grid>

</Fragment>
        )
    }
}

export default Resume


