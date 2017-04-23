import React, { Component } from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
import getAll from '../api/getAll';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = { mang: [] };
    }
    
    componentDidMount() {
        getAll()
        .then(arrNote => this.setState({ mang: arrNote }));
    }

    addItem(item) {
        this.setState({ mang: this.state.mang.concat(item) });
    }

    remove(id) {
        this.setState({ mang: this.state.mang.filter(e => e.id !== id) });
    }

    update(id, content) {
        // this.state.mang[id].content = content;
        this.state.mang.find(e => e.id === id).content = content;
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <NoteForm onAdd={this.addItem.bind(this)} />
                {this.state.mang.map(e => <Note content={e.content} key={e.id} id={e.id} onRemove={this.remove.bind(this)} onUpdate={this.update.bind(this)} />)}
            </div>
        );
    }
}
