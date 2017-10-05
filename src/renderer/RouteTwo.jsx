import React, { Component } from 'react';

class RouterTwo extends Component {

    constructor(props) {
        super(props);
        this.switchRouter = this.switchRouter.bind(this);
    }

    render() {
        return (
            <div>
                two
                <br />
                <button onClick={this.switchRouter}>Jump</button>
            </div>
        );
    }

    switchRouter() {
        this.props.history.replace('/');
    }
}

export default RouterTwo;
