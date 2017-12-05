import React, { Component } from 'react';
import propTypes from 'prop-types';
import Jumper from './jumper';
const storage = window.require('electron-json-storage');

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
                <Jumper history={this.props.history} />
            </div>
        );
    }

    switchRouter() {
        this.props.history.replace('/t');
    }
}

RouterOne.propTypes = {
    history: propTypes.func.isRequired
}

export default RouterOne;
