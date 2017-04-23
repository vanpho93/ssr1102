import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import insertNote from './api/insertNote';

insertNote('Chao cac ban ????   !')
.then(a => a.text())
.then(a => console.log(a))
.catch(err => console.log(err));


ReactDOM.render(
    <List />,
    document.getElementById('root')// eslint-disable-line
);



//react react-dom
// babel-core babel-loader babel-preset-react
