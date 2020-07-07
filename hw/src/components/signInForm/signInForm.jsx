import React from 'react'
import { Redirect } from 'react-router-dom'
import firebase from '../FirebaseConfig'

import './signInForm.css'


class SignInForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login: "",
            pass: "",
            redirect: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value
        });
    }

    handleSubmit(event){
        firebase.firestore().collection('auth').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                if((this.state.login === doc.data().login) && (this.state.pass === doc.data().pass)){
                    this.setState({ redirect: true})
                    this.props.updateLogin(1)
                    return;
                }
            })
        })
        this.setState({ redirect: true})
        this.props.updateLogin(1)
        event.preventDefault();
    }

    render() {
        const {login, pass, redirect} = this.state;
        if (redirect === true)
            return <Redirect push to="/" />

        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Sign In</h1>
                <input name="login" value={login} onChange={this.handleChange} type="text" required /><br/>
                <input name="pass" value={pass} onChange={this.handleChange} type="password" required /><br/>
                <button>Sign Up</button>
            </form>
        );
    }
}

export default SignInForm;