import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            name: "",
            password: ""
        };
    }
    handleSubmit() {
        console.log('submited');
    }

    handleNameChange(event) {
        this.setState({name: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }
        
    
    render() {
        return(
            <div className="forms">
            <form>
                <label htmlFor="userName" className="labelName">Username</label>
                <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange.bind(this)}
                className="userName forms__item"
                id="userName"
                /> 
                <label htmlFor="userPassword" className="labelPassword">Password</label>               
                 <input
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange.bind(this)}
                className="userPassword forms__item"
                />
                
            </form>
            <div className="greyDecor"> Let me in </div>
            <button onClick={this.handleSubmit.bind(this)} className="letMeIn"></button>            
            </div>
        );
    }
}

export default Login;


