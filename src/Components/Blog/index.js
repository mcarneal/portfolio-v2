import React, { Component, Fragment } from 'react'
import NavBarBlog from './navBarBlog.js'
import LinuxAndMe from './linuxAndMe.js'
import Grid from '@material-ui/core/Grid'
import PersonalTerminal from './personalTerminal.js'

class Blog extends Component{


    render(){
        return(
            <Fragment>
            <Grid container
                  spacing={10}
                  alignItems="center"
                  justify="center"
            >
                <Grid
                    item xs={12} sm={6} md={4}
                >
                    <LinuxAndMe />
                </Grid>
                <Grid
                    item xs={12} sm={6} md={4}
                >

                    <NavBarBlog />
       </Grid>
   </Grid>
            <Grid container
                  spacing={10}
                  alignItems="center"
                  justify="center"
            >
                <Grid
                    item xs={12} sm={6} md={4}
                >
                    <PersonalTerminal />
                </Grid>
                <Grid
                    item xs={12} sm={6} md={4}
                >

       </Grid>
    </Grid>
    </Fragment>
           
        )
    }
}

export default Blog


