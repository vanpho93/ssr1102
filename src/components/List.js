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

    render() {
        return (
            <div>
                <NoteForm onAdd={this.addItem.bind(this)} />
                {this.state.mang.map((e, i) => <Note content={e.content} key={i} />)}
            </div>
        );
    }
}
