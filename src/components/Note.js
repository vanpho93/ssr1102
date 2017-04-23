import React, { Component } from 'react';
import removeNote from '../api/removeNote';

export default class Note extends Component {
    remove() {
        const { id, onRemove } = this.props;
        removeNote(id)
        .then(() => onRemove(id));
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
