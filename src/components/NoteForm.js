import React, { Component } from 'react';

export default class NoteForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        console.log(this.refs.txtNote.value);
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
