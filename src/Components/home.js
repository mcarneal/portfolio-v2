import React, { Component } from 'react'
import NavBar from './navbar.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Test from './test.js'
import Resume from './Resume/index.js'
import About from './About/index.js'
import Contact from './Contact/index.js'
import Projects from './Projects/index.js'
import Blog from './Blog/index.js'
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';


class Home extends Component{

    state = {
        view : 'home'
    }

    viewHandler = (props) => {
        this.setState({view : props})
    }


    componentDidUpdate(prevPorps){
        let main = document.getElementById('main-cont')
        main.scrollIntoView()
    }


    render(){
        return(
            <BrowserRouter>
                    <Fade in={true}
                        timeout={1000}
                    >

                    <div className='home'>
                    <Box bgcolor='text.hint' style={{height : '100vh', overflow : 'scroll'}}>                
                    <NavBar aboutClickHandler={this.props.aboutClickHandler} changeThemeHandler={this.props.changeThemeHandler}>
                        <Switch>
                            <Route exact path='/' render={()=> <Projects />}/>
                            <Route exact path='/Resume' render={()=> <Resume />}/>
                            <Route exact path='/About' render={()=> <About aboutClickHandler={this.props.aboutClickHandler} />}/>
                            <Route exact path='/Contact' render={()=> <Contact />}/>
                            <Route exact path='/Projects' render={()=> <Projects />}/>
                            <Route exact path='/Blog' render={()=> <Blog />}/>
                            </Switch>
                        </NavBar>
                </Box>
                    </div>
            
                </Fade>

        </BrowserRouter>
        )
    }
}

export default Home
