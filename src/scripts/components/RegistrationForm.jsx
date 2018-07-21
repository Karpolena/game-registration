// import React, { Component } from 'react';
// import Header from './components/Header'; 
// import Aside from './components/Aside';
// import Content from './components/Content';
// import Footer from './components/Footer';



// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 1,
//             name: "",
//             email: "",
//             result: "",
//             login: true
//         }
//     }

//     clickHandler() {
//         let count = this.state.count;
//         count++;
//         let result = this.state.name + " - " + this.state.email;
//         this.setState({count, result});
//     }

//     changeName(event) {
//         this.setState({name: event.target.value});
//     }

//     changeEmail(event) {
//         this.setState({email: event.target.value});
//     }

//     renderForm() {
//         if(this.state.login) {
//             return <Login />
//         }
//         return <Registration />
//     }

//     render() {
//         return(
//             <div className="app">
//                 <Header title="Header" name={this.state.name}>
//                     <Menu />
//                 </Header>
//                 <Aside title="Aside"/>
//                 {this.renderForm()}
//                 <Content 
//                     title="Content"
//                     count={this.state.count}
//                     name={this.state.name}
//                     email={this.state.email}
//                     result={this.state.result}
//                     clickHandler={this.clickHandler.bind(this)} 
//                     changeName={this.changeName.bind(this)}
//                     changeEmail={this.changeEmail.bind(this)}
//                 />
//                 <Footer title="Footer" />
//             </div>
//         );      
//     } 
// }

// export default App; 
// import React, {Component} from 'react';

// class RegistrationForm extends Component {
//     constructor(props) {
//         super(props); 
//         this.state = {
//                         name: "",
//                         email: "",
//                         login: true
//                     }       
        
//     } 
    // clickHandler() {
    //             let name = this.state.name;
    //             let email = this.state.email;
    //         }  
    // changeName(event) {
    //     this.setState({name: event.target.value});
    // }

    // changeEmail(event) {
    //     this.setState({email: event.target.value});
    // }

    // renderForm() {
    //     if(this.state.login) {
    //         return <Login />
    //     }
    //     return <Registration />
    // }
//     render(){
//         return (
//             <div className="registration">
//             <div className="buttons registration__item">
//                 <button className="signIn buttons__item"> sign in </button>
//                 <button className="signUp buttons__item"> sign up </button>
//             </div>
//             <div className="forms registration__item">
//                 <form onSubmit={this.handleSubmit.bind(this)} className="form-signIn forms__item">
//                     <input className="userName" type="text" placeholder="Username"/>
//                     <input className="password" type="password" placeholder="Password"/>
//                 </form>
//                 <form className="form-signUp forms__item">
//                     <input className="userName" type="text" placeholder="Username"/>
//                     <input className="userEmail" type="email" placeholder="E-mail"/>
//                     <input className="password" type="password" placeholder="Password"/>
//                     <input className="rememberMe" type="checkbox" checked/>
//                 </form>
//                 <button className="letMeIn registration__item"><a href="#" className="letMeIn__item"> let me in </a> </button>
//             </div>
           
//         </div>
//         )
       

//     }
// } 

// export default RegistrationForm;




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

        if (this.state.registered) {
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
        }      
        
    }
}



export default RegistrationForm;