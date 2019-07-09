import React, { Component } from 'react'
import NavBar from './navbar.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Test from './test.js'
import Resume from './Resume/index.js'
import About from './About/index.js'
import Contact from './Contact/index.js'
import Projects from './Projects/index.js'
import Blog from './Blog/index.js'

class Home extends Component{

    state = {
        view : 'home'
    }

    viewHandler = (props) => {
        this.setState({view : props})
    }


    render(){
        return(
            <BrowserRouter>
                <div className='home'>
                    <NavBar changeThemeHandler={this.props.changeThemeHandler}>
                        <Switch>
                            <Route exact path='/' render={()=> <Test />}/>
                            <Route exact path='/Resume' render={()=> <Resume />}/>
                            <Route exact path='/About' render={()=> <About />}/>
                            <Route exact path='/Contact' render={()=> <Contact />}/>
                            <Route exact path='/Projects' render={()=> <Projects />}/>
                            <Route exact path='/Blog' render={()=> <Blog />}/>
                            </Switch>
                    </NavBar>
                </div>
        </BrowserRouter>
        )
    }
}

export default Home
