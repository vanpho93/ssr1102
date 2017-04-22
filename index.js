const express = require('express');

const { getAllNote } = require('./db');

const app = express();
app.listen(3000, () => console.log('Server started'));

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => res.render('home'));

app.get('/all', (req, res) => {
    getAllNote()
    .then(notes => res.send(notes))
    .catch(err => res.send(err));
});
