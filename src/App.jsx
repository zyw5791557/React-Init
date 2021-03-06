import React, { Component } from 'react';
import Hello from './components/Hello';

// App can't be stateless component
export default class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            count: 0,
        };
    }
    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (
            <div>
                <Hello color={this.state.count % 2 === 0} />
                <div>{this.state.count}</div>
                <button onClick={this.handleClick}>click</button>
            </div>
        );
    }
}
