import React, { Component } from 'react';
import Login from './Login';
import Registration from './Registration';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = { registered: true };
    }
    SignInState() {
        this.setState({ registered: true })
    }
    SignUpState() {
        this.setState({ registered: !this.state.registered });
    }
    render() {

        /*if (this.state.registered) {
            return(
                <div className="main">
                <div>
                    <button onClick={this.SignInState.bind(this)} className="signIn buttons__item active"> Sign In </button>
                    <button onClick={this.SignUpState.bind(this)} className="signUp buttons__item"> Sign Up </button>
                </div>
                    <Login />
                </div>
            )
        } else {
            return(
                <div className="main">
                <div>
                    <button onClick={this.SignInState.bind(this)} className="signIn buttons__item"> Sign In </button>
                    <button onClick={this.SignUpState.bind(this)} className="signUp buttons__item active"> Sign Up </button>
                </div>
                    <Registration />                
                </div>
            )
        }  */
        
        return (
            <div className="main">
                <div>
                    <button onClick={this.SignInState.bind(this)} className="signIn buttons__item"> Sign In </button>
                    <button onClick={this.SignUpState.bind(this)} className="signUp buttons__item"> Sign Up </button>
                </div>
                   {this.state.registered ? <Login className="active"/> : <Registration className="active"/>}
                </div>
        )
        
    }
}



export default RegistrationForm;