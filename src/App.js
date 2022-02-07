import React, {Component} from "react";
import './App.css';
import Phone from "./Phone/Phone";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0, phones: [{
                id: 1, name: 'iPhone 11 Pro Max', color: 'Gold', os: 'IOS',
            }, {
                id: 2, name: 'OnePlus 7 Pro', color: 'Miracle Blue', os: 'Android',
            }, {
                id: 3, name: 'Samsung Galaxy 21S', color: 'Black', os: 'Android',
            }, {
                id: 4, name: 'iPhone SE', color: 'Black', os: 'IOS',
            }]
        }
    }

    render() {
        return (<div className="App">
            <p>{this.state.counter}</p>
            <button onClick={() => this.setState({counter: this.state.counter - 1})}>Decrease</button>
            <button onClick={() => this.setState({counter: 0})}>Reset</button>
            <button onClick={() => this.setState({counter: this.state.counter + 1})}>Increase</button>
            <hr/>
            <button onClick={() => this.setState({
                phones: [...this.state.phones, {
                    id: this.state.phones[this.state.phones.length - 1].id + 1,
                    name: 'iPhone SE',
                    color: 'Black',
                    os: 'IOS'
                }]
            })}>Add one
            </button>
            <button
                onClick={() => this.setState({phones: this.state.phones.slice(0, this.state.phones.length - 1)})}>
                Delete one
            </button>
            <table>
                {this.state.phones.map(phone => <Phone phone={phone}/>)}
            </table>
        </div>);
    }
}

export default App;
