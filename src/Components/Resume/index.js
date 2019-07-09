import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';


    const styles = {
    Paper : {
        padding : 20,
        marginTop : 10,
        marginBottom : 10,
        marginLeft : 5,
        marginRight : 5,
        height : '100vh'
    }
}



class Resume extends Component{
    


    render(){


        return(
            <Box bgcolor='text.hint' style={{height : '100vh'}}>        
    <Grid container>
        <Grid item xs={12} sm={6}>
            <Paper style={styles.Paper}   
            >
                    left pane
            </Paper>
        </Grid>
        <Grid item  xs={12} sm={6}>
            <Paper style={styles.Paper}>
                <Typography
                    variant='h5'
                >
                        Welcome!
            </Typography>
            <Typography
                variant='subheading'
            >
                    Please Select an exercise
        </Typography>
            </Paper>
        </Grid>
    </Grid>
    </Box>
        )
    }
}

export default Resume


