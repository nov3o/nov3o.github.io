import React from 'react'
import SignUpFormComponent from '../components/signUpForm/signUpForm';


class SignUp extends React.Component {
    render(){
        return(
            <SignUpFormComponent updateLogin={this.props.updateLogin} />
        )
    }
}

export default SignUp;