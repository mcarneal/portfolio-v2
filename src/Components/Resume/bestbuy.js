import React, { Component } from 'react'
import BestBuyImage from '../../bestbuy.png'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import BestBuyInfo from './bestBuyInfo.js'

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

class BestBuy extends Component{
   

    state = {
        bestbuy : false
    }

    clickHandler = () => {
        this.setState({bestbuy : !this.state.bestbuy})
    }



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
                    Best Buy Geek Squad. 2010 - 2011
            </Typography>
            <hr style={{ width : '70%'}}></hr> 
            <Typography
                style={{color : '#E0E0E0'}}
                variant='subtitle1'
            >
                    Denver, CO
        </Typography>
        <img src={BestBuyImage} alt='bestbuy logo' width='100px' />
            </Box>
        </Grid>
        <Grid item  xs={12} sm={6}>
         <BestBuyInfo/>
        </Grid>
    </Grid>
</Fade>

        )
    }
}

export default BestBuy
