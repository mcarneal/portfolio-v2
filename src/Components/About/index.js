import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import Image from '../../profile2.jpg'
import Paper from '@material-ui/core/Paper';
import Test from '../test.js'
const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height : 2000
    }
};
class About extends Component{

    componentDidMount(){
        console.log()
        this.props.aboutClickHandler('About')
    }

    render(){
        return(
            <Test />
        )
    }
}

export default About

