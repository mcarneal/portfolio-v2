import React, { Component } from 'react'
import NavBar from './navbar.js'
import Resume from './resume.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Test from './test.js'

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
                            <Route path='/' render={()=> <Test />}/>
                            </Switch>
                    </NavBar>
                </div>
        </BrowserRouter>
        )
    }
}

export default Home
