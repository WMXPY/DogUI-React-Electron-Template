import React, { Component } from 'react';
import Jumper from './jumper';

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
                <Jumper history={this.props.history} />
            </div>
        );
    }

    switchRouter() {
        this.props.history.replace('/');
    }
}

export default RouterTwo;
