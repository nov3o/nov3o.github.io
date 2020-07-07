import React from 'react'
import SignInFormComponent from '../components/signInForm/signInForm';


class SignIn extends React.Component {
    render(){
        return(
            <SignInFormComponent updateLogin={this.props.updateLogin} />
        )
    }
}

export default SignIn;