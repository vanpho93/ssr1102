import React, { Component } from 'react';
import Note from './Note';

const defaultArray = [
    'Lam bai tap ve nha', 
    'Nop bao cao cuoi thang', 
    'Hoc Javascript'
];

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = { mang: [] };
    }

    componentDidMount() {
        fetch('http://localhost:3000/all')// eslint-disable-line
        .then(res => res.json())
        .then(resJSON => this.setState({ mang: resJSON }));
    }

    render() {
        return (
            <div>
                {this.state.mang.map((e, i) => <Note content={e.content} key={i} />)}
            </div>
        );
    }
}
