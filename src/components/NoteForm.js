import React, { Component } from 'react';
import insertNote from '../api/insertNote';

export default class NoteForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        insertNote(this.refs.txtNote.value)
        .then(() => console.log('THEM_THANH_CONG'));
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
