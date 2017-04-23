import React, { Component } from 'react';

export default class Note extends Component {
    remove() {
        
    }
    render() {
        return (
            <div>
                <p>{this.props.content}</p>
                <button onClick={this.remove.bind(this)}>Xoa</button>
            </div>
        );
    }
}
