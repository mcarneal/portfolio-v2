import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'


class AppleInfo extends Component{

    render(){
        return(
            <div className='jobdetails'>

                <Motion 
                defaultStyle={{y : -100, opacity : 0}}
                style={{y : spring(10), opacity : spring(1)}}
                >
                        {(style) =>(
                            <div style={{
                                transform : `translateY(${style.y}px)`,
                                opacity : style.opacity
                            }}>
                            <p>Apple Info this is a test of some stuff</p>
                            <p>Apple Info this is a test of some stuff</p>
                            <p>Apple Info this is a test of some stuff</p>
                            <p>Apple Info this is a test of some stuff</p>
                            <p>Apple Info this is a test of some stuff</p>

                            </div>
                    )}
                </Motion>
                </div>
        )
    }
}

export default AppleInfo

