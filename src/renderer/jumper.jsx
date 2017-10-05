import React, { Component } from 'react';

class Jumper extends Component {

    constructor(props) {
        super(props);
        this.switchRouter = this.switchRouter.bind(this);
    }

    render() {
        return (
            <div>
                one
                <br />
                <button onClick={this.switchRouter}>Jump To Two</button>
            </div>
        );
    }

    switchRouter() {
        this.props.history.replace('/t');
    }
}

export default Jumper;
