import React, { Component } from 'react';

export default class Note extends Component {
    render() {
        return (
            <div>
                <p>{this.props.content}</p>
            </div>
        );
    }
}
