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
import Profile from './profile2.jpg'


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
        background : NewYork,
        previousHistory : NewYork,
        previousparticles : noOpt
    }

    changeThemeHandler = () => {

        if (this.state.background === Profile){
            this.setState({
                particles : noOpt,
                background : Profile
            })
        }
        else if(this.state.background === SpaceBackground){
            this.setState({
                particles : snowParticlesOpt,
                background : SnowBackground,
                previousHistory : SnowBackground,
                previousparticles : snowParticlesOpt
            })
        }
        else if(this.state.background === NewYork) {
                this.setState({
                    particles : particlesOpt,
                    background : SpaceBackground,
                    previousHistory : SpaceBackground,
                    previousparticles : particlesOpt
                })
        } else {
            this.setState({
                particles : noOpt,
                background : NewYork,
                previousHistory : NewYork,
                previousparticles : noOpt
            })
        }
    }

    clickHandler = () => {
        this.setState({view : 'home'})
    }
    
    aboutClickHandler = (props) => {
        console.log(props)
        if (props === 'About'){
            this.setState({
                background : Profile,
                particles : noOpt
            })
        }
        else {
            this.setState({
                background : this.state.previousHistory,
                particles : this.state.previousparticles
            })
        }
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
                {this.state.view === 'home' ? <Home aboutClickHandler={this.aboutClickHandler} changeThemeHandler={this.changeThemeHandler} /> : null}
            </div>
        );
    }
}

export default withRouter(App);
