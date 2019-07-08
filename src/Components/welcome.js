import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import Button from '@material-ui/core/Button';

class Welcome extends Component{

    render(){
        return(
            <div className='welcome'>
                <Motion 
                defaultStyle={{y : -100, opacity : 0}}
                style={{y : spring(10), opacity : spring(1)}}
                >
                        {(style) =>(
                            <div style={{
                                transform : `translateY(${style.y}px)`,
                                opacity : style.opacity
                            }}>
                                <h1>Hello, I'm Michael Carneal</h1>
                                <h1>I'm a Full-Stack Web Developer</h1>
                                <Button
                                    onClick={this.props.clickHandler}
                                    variant="contained" 
                                    color="primary">  
                                 See My Work
                            </Button>
                            </div>
                    )}
                </Motion>
             </div>
        )
    }
}

export default Welcome
