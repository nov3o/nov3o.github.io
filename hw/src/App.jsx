import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './components/navigation/navigation';
import CurrencyList from './pages/currencyList'
import SignUp from './pages/signUpPage';
import SignIn from './pages/signInPage';
import CurrencyConverter from './pages/currencyConverter';


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            logged: 0
        }
    }

    updateLogin = (newStatus) => {
        this.setState({
            logged: newStatus
        })
        console.log(newStatus)
    }

    render(){
        return (
            <Router>
                <Navigation logged={this.state.logged} />
                <Switch>
                    <Route path="/signup">
                        <SignUp updateLogin={this.updateLogin} />
                    </Route>
                    <Route path="/signin">
                        <SignIn updateLogin={this.updateLogin} />
                    </Route>
                    <Route path="/convert">
                        <CurrencyConverter />
                    </Route>
                    <Route path="/">
                        <CurrencyList />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;