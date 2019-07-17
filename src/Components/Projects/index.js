import React, { Component, Fragment, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import KarmaCalculator from './karmaCalculator.js'
import KarmaCalculatorCard from './karmaCalculatorCard.js'
import ReactLogo from '../../react.png'
import ReduxLogo from '../../redux.png'
import HtmlLogo from '../../html5.png'
import RailsLogo from '../../rails.png'
import CssLogo from '../../css3.png'
import AppImage from '../../image.png'
import { makeStyles } from '@material-ui/core/styles';
import IssueHandlr from './issueHandler.js'
import IssueHandlrCard from './issueHandlerCard.js'
import CrimeWatch from './crimeWatch.js'
import CrimeWatchCard from './crimeWatchCard.js'
import ScrollToTopOnMount from '../ScrollToTop.js'

const styles = makeStyles(theme =>({
        Box : {
        textAlign : 'left',   
        padding : 20,
        marginLeft : 5,
        marginRight : 5,
        height : 'auto',
        },
         item2: {
    order: 3,
    [theme.breakpoints.up('sm')]: {
      order: 2,
    },
  },
  item3: {
    order: 2,
    [theme.breakpoints.up('sm')]: {
      order: 3,
    },
  },
}))


export default function Projects(){
    
    const scroll = () => {
       
        window.scrollTo(0,0)
    }
const classes = styles();

    return(
        <Fragment>
            <Typography
                style={{color : '#E0E0E0'}}
                variant='h4'
            >
            Karma Calculator
        </Typography>

        <br></br>

            <Grid container
                justify='space-evenly'
            >
                <Grid
                    item xs={12} sm={6} md={4}
                >
           <KarmaCalculatorCard />
       </Grid>
       <Grid item xs={12} sm={6}>
           <KarmaCalculator/>
        </Grid>

    </Grid>
            V<Typography
                style={{color : '#E0E0E0'}}
                variant='h4'
            >
            IssueHandlr
        </Typography>
        <br></br>

    <Grid container
                justify='space-evenly'
            >
                <Grid
                    item xs={12} sm={6} md={4}
                >
                    <IssueHandlrCard/>
       </Grid>
       <Grid item xs={12} sm={6}>
           <IssueHandlr />
        </Grid>

    </Grid>
            <Typography
                style={{color : '#E0E0E0'}}
                variant='h4'
            >
            Crime Watch
        </Typography>
        <br></br>

            <Grid container
                justify='space-evenly'
            >
                <Grid
                    item xs={12} sm={6} md={4}
                >
           <CrimeWatchCard />
       </Grid>
       <Grid item xs={12} sm={6}>
           <CrimeWatch/>
               
        </Grid>

    </Grid>
    </Fragment>

        )
    }




