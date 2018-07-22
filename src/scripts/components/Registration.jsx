import React, { Component } from 'react';
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            name: "",
            email: "",
            password: "",
            checkbox: "checked"
        };
    }
    handleSubmit() {
        console.log('submited');
    }

    handleNameChange(event) {
        this.setState({name: event.target.value})
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }

    handleCheckboxChange(event) {
        this.setState({checkbox: event.target.value})
    }
        
    
    render() {
        return(
            <div className="forms">
            {/* <form onSubmit={this.handleSubmit.bind(this)}> */}
            <form >
                <label htmlFor="userName" className="labelName">Username</label>
                <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange.bind(this)}
                className="userName forms__item"
                />
                <label htmlFor="userPassword" className="labelPassword">Password</label>
                 <input
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange.bind(this)}
                className="userPassword forms__item"
                />
                <label htmlFor="userEmail" className="labelEmail">E-mail</label>
                <input
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange.bind(this)}
                className="userEmail forms__item"
                />                
                <label
                htmlFor="remember"
                className="labelCheckbox forms__item">
                Remember me
                </label>
                <input 
                type="checkbox"
                id="remember"
                value={this.state.checkbox}
                onChange={this.handleCheckboxChange.bind(this)}
                className="checkbox forms__item"
                />                 
            </form>
            <div className="greyDecor"> Let me in </div>
            <button onClick={this.handleSubmit.bind(this)} className="letMeIn"></button>
            </div>

        );
    }
}
export default Registration;