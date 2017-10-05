import React, { Component } from 'react';

class RouterOne extends Component {

    constructor(props) {
        super(props);
        this.switchRouter = this.switchRouter.bind(this);
    }

    render() {
        return (
            <div>
                one
                <br />
                <button onClick={this.switchRouter}>Jump</button>
            </div>
        );
    }

    switchRouter() {
        this.props.history.replace('/t');
    }
}

export default RouterOne;
