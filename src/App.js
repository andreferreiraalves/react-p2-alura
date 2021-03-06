import React, { Component } from 'react';
import Header from './componentes/Header';
import Timeline from './componentes/Timeline';
import './css/reset.css';
import './css/timeline.css';

export default class App extends Component {
    render() {
        return (
            <div id="root">
                <div className="main">
                    <Header />
                    <Timeline login={this.props.params.login} />
                </div>
            </div>
        );
    }
}