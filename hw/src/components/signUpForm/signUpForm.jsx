import React from 'react'
import { Redirect } from 'react-router-dom'
import firebase from '../FirebaseConfig'

import './signUpForm.css'


class RegForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            login: "",
            pass: "",
            image: "",
            redirect: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value
        });
    }

    handleSubmit(event) {
        firebase.firestore().collection('auth').add({
            name: this.state.firstName,
            surname: this.state.lastName,
            login: this.state.login,
            password: this.state.pass,
            image: this.state.image
        });
        
        event.preventDefault();
        this.setState({ redirect: true})
        this.props.updateLogin(1)
    }

    render() {
        const {firstName, lastName, login, password, image, redirect} = this.state;
        if( redirect === true )
            return <Redirect push to="/" />

        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>
                <input placeholder="First Name" name="firstName" value={firstName} onChange={this.handleChange} type="text" pattern="[А-Яа-яЁёa-zA-Z]+" /><br/>
                <input placeholder="Last Name" name="lastName" value={lastName} onChange={this.handleChange} type="text" pattern="[А-Яа-яЁёa-zA-Z]+" /><br/>
                <input placeholder="Login " name="login" value={login} onChange={this.handleChange} type="text" required /><br/>
                <input placeholder="Password" name="pass" value={password} onChange={this.handleChange} type="text" required /><br/>
                <input placeholder="Image" name="image" type="file" value={image} onChange={this.handleChange} accept="image/jpg" /><br/>
                <button>Sign Up</button>
            </form>
        );
    }
}

export default RegForm;