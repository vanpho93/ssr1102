import React, { Component } from 'react';
import removeNote from '../api/removeNote';

export default class Note extends Component {
    remove() {
        const { id } = this.props;
        removeNote(id)
        .then(() => console.log('XOA THANH CONG'));
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
