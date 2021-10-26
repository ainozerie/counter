/* eslint-disable default-case */
/* eslint-disable no-fallthrough */
import React, {Component} from 'react';

class Main extends Component {
    state = {
        counter: 2,
        text: 'Hello world!'
    }
    addOne = () => {
        this.setState({counter: this.state.counter + 1});
    };
    addFive = () => {
        this.setState({counter: this.state.counter + 5});
    };
    removeOne = () => {
        this.setState({counter: this.state.counter - 1});
    };
    removeFive = () => {
        this.setState({counter: this.state.counter - 5});
    };
    resetCounter = () => {
        this.setState({counter: 0});
    };
    
    render() {
        let evenOrOdd = '';
        if (this.state.counter % 2 === 0) {
            evenOrOdd = 'even';
        } else {
            evenOrOdd = 'odd';
        }
        if (this.state.counter < 0) {
            this.setState({counter: 0});
        }
        return (
            <main>
                <screen className = {evenOrOdd} >
                    <h2>{this.state.counter}</h2>
                </screen>
                <buttonsBar>
                    <button onClick = {this.addFive} >Add five</button>
                    <button onClick = {this.addOne}>Add one</button>
                    <button onClick = {this.removeOne}>Remove one</button>
                    <button onClick = {this.removeFive} >Remove five</button>
                </buttonsBar>
                <resetButton>
                    <button onClick = {this.resetCounter}>Reset</button>
                </resetButton>
            </main>
        );
    }
}

export default Main;
