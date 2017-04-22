import React, { Component } from 'react';
import Note from './Note';
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

    render() {
        return (
            <div>
                {this.state.mang.map((e, i) => <Note content={e.content} key={i} />)}
            </div>
        );
    }
}
