import React, { Fragment, Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withRouter } from 'react-router-dom'

const styles = {
    Paper : {
        padding : 20,
        marginTop : 10,
        marginBottom : 10,
        marginLeft : 5,
        marginRight : 5
    }
}

class Test extends Component {

    render(){
        return(
    <Grid container>
        <Grid item xs={12} sm={6}>
            <Paper style={styles.Paper}>
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

        )
    }


}

export default Test




