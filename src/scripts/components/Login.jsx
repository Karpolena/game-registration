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
        //  console.log('name', event.target.value);
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }
        
    
    render() {
        return(
            <div className="forms">
            <form >
                <input
                type="text"
                placeholder="Username"
                value={this.state.name}
                onChange={this.handleNameChange.bind(this)}
                className="userName forms__item"
                />                
                 <input
                type="text"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange.bind(this)}
                className="userPassword forms__item"
                />
                
            </form>
            <button onClick={this.handleSubmit.bind(this)} className="letMeIn"> Let me in </button>
            <a href="#" />
            </div>
        );
    }
}

export default Login;


