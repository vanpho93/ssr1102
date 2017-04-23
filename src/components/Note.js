import React, { Component } from 'react';
import removeNote from '../api/removeNote';
import updateNote from '../api/updateNote';

export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state = { isUpdating: false };
    }
    remove() {
        const { id, onRemove } = this.props;
        removeNote(id)
        .then(() => onRemove(id));
    }

    update() {
        this.setState({ isUpdating: true });
    }

    save() {
        const { id, onUpdate } = this.props;
        const text = this.refs.txtInput.value;
        updateNote(text, id)
        .then(() => onUpdate(id, text));
        this.setState({ isUpdating: false });
    }

    render() {
        const { isUpdating } = this.state;
        const input = <input ref="txtInput" defaultValue={this.props.content} />
        const showHTML = isUpdating ? input : <p>{this.props.content}</p>;
        return (
            <div>
                { showHTML }
                <hr />
                <button onClick={this.remove.bind(this)}>Xoa</button>
                <button onClick={this.update.bind(this)}>Sua</button>
                <br /><br />
                <button onClick={this.save.bind(this)}>Luu</button>
            </div>
        );
    }
}
