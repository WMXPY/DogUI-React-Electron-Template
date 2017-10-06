import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './relative.css';

class RouterTwo extends Component {
    location;

    constructor(props) {
        super(props);
        this.location = "/main";
        this.switchRouter = this.switchRouter.bind(this);
        this.switchRoutert = this.switchRoutert.bind(this);
    }

    render() {
        return (
            <div>
                two
                <br />
                <button onClick={this.switchRouter}>ttt</button>
                <button onClick={this.switchRoutert}>rrr</button>
                <Switch>
                    <Route exact path={`${this.location}/t`} render={() => (<h3>TYTTT</h3>)} />
                    <Route exact path={`${this.location}/r`} render={() => (<h3>RRRR</h3>)} />
                </Switch>
            </div>
        );
    }

    switchRouter() {
        console.log(this.props.history);
        this.props.history.replace('/main/t');
    }

    switchRoutert() {
        console.log(this.props.history);
        this.props.history.replace('/main/r');
    }
}

export default RouterTwo;
