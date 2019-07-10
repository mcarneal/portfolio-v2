import React,{ Component } from 'react';
import './App.css';
import Particles from 'react-particles-js'
import SpaceBackground from './background.jpg'
import SnowBackground from './snow.jpg'
import Welcome from './Components/welcome.js'
import Home from './Components/home.js'
import Button from '@material-ui/core/Button';
import NewYork from './newyork.jpg'
import { withRouter } from 'react-router-dom'

const particlesOpt = {
    particles : {
        number : {
            value : 100,
        },
        shape : {
            type : 'circle',
            stroke : {
                width : 1,
                color : '#ccc'
            }
        },
        size : {
            value : 3
        },
        line_linked : {
            enable : true,
            distance : 110
        },
        move : {
            enable : true,
            out_mode : 'out'
        }
    }
}

const noOpt = {
    particles : {
        number : {
            value : 0
        }
    }
}

const snowParticlesOpt = {
    particles : {
        number : {
            value : 500,
        },
        shape : {
            type : 'circle',
            stroke : {
                width : 1,
                color : '#ccc'
            }
        },
        size : {
            value : 2
        },
        line_linked : {
            enable : false,
            distance : 110
        },
        move : {
            enable : true,
            direction : 'bottom',
            random : false,
            straight : false,
            out_mode : 'out'
        }
    }
}


class App extends Component{


    state = {
        view : 'landing',
        particles :noOpt,
        background : NewYork
    }

    changeThemeHandler = () => {
        if(this.state.background === SpaceBackground){
            this.setState({
                particles : snowParticlesOpt,
                background : SnowBackground
            })
        }
        else if(this.state.background === NewYork) {
                this.setState({
                    particles : particlesOpt,
                    background : SpaceBackground
                })
        } else {
            this.setState({
                particles : noOpt,
                background : NewYork
            })
        }
    }

    clickHandler = () => {
        this.setState({view : 'home'})
    }

    componentDidMount(){
        this.props.history.push('/')
    }

    render(){
        return (
            <div className='App' style={{backgroundImage :`url(${this.state.background})`}}>
            <div className='bg' style={{backgroundImage :`url(${this.state.background})`}}>
        </div>
            <div className='particles'>
                <Particles
                    params={this.state.particles}
                />
            </div>
                {this.state.view === 'landing' ? <Welcome 
                    clickHandler={this.clickHandler} /> : null}
                {this.state.view === 'home' ? <Home changeThemeHandler={this.changeThemeHandler} /> : null}
            </div>
        );
    }
}

export default withRouter(App);
