import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Apple from './apple.js'
import BestBuy from './bestbuy.js'
import MicroCenter from  './microcenter.js'




class Resume extends Component{
    


    render(){


        return(
            <Fragment>
                    <Apple/>
                    <BestBuy/>
                    <MicroCenter/>
                </Fragment>
        )
    }
}

export default Resume


