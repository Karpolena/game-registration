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
        //  console.log('name', event.target.value);
    }

    handleEmailChange(event) {
        // console.log('changed', event.target.value);
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
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input
                type="text"
                placeholder="Username"
                value={this.state.name}
                onChange={this.handleNameChange.bind(this)}
                className="userName forms__item"
                />
                <input
                type="text"
                placeholder="E-mail"
                value={this.state.email}
                onChange={this.handleEmailChange.bind(this)}
                className="userEmail forms__item"
                />
                 <input
                type="text"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange.bind(this)}
                className="userPassword forms__item"
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
            <button onClick={this.handleSubmit.bind(this)} className="letMeIn">Let me in </button>
            <a href="#" />
            </div>

        );
    }
}
export default Registration;