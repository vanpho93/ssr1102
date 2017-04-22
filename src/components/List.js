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
        this.state = { mang: defaultArray };
    }

    render() {
        return (
            <div>
                {this.state.mang.map((e, i) => <Note content={e} key={i} />)}
            </div>
        );
    }
}
