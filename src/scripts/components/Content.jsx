import React, {Component} from 'react';

class Content extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            count: 1,
            name: "",
            email: "",
            result: ""
        }
    }*/

    renderTitle() {
        return this.props.title;
    }

    /*clickHandler() {
        let count = this.state.count;
        count++;
        let result = this.state.name + " - " + this.state.email;
        this.setState({count, result});
    }

    changeName(event) {
        //let name = event.target.value.replace(/[^0-9]/g, "");
        this.setState({name: event.target.value});
    }

    changeEmail(event) {
        this.setState({email: event.target.value});
    }*/

    render() { 
        return (
            <content className="content" style={{border: '1px solid yellow'}}>
                {this.renderTitle()}
                <div>
                    <button onClick={this.props.clickHandler.bind(this)}>
                        Click
                    </button>
                </div>
                <div>
                    <input onChange={this.props.changeName.bind(this)} value={this.props.name}/>
                    <input onChange={this.props.changeEmail.bind(this)} value={this.props.email}/>
                </div>
                <div>
                    {this.props.count}
                    <br />
                    {this.props.result}
                </div>
            </content>
        )
    }
}

export default Content;

/*const Content = ({title}) => {
    return (
        <content className="content" style={{border: '1px solid yellow'}}>
        {title}
        </content>
    );
}
export default Content;*/