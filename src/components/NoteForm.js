import React, { Component } from 'react';
import insertNote from '../api/insertNote';

export default class NoteForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        const { onAdd } = this.props;
        insertNote(this.refs.txtNote.value)
        .then(resJSON => onAdd(resJSON));
        this.refs.txtNote.value = '';
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="txtNote" placeholder="Enter your note" />
                    <br /><br />
                    <button>Send</button>
                </form>
            </div>
        );
    }
}
