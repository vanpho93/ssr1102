const express = require('express');

const parser = require('body-parser').urlencoded({ extended: false });
const jsonParser = require('body-parser').json();

const { getAllNote, insertNote, removeNote, updateNote } = require('./db');

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

app.post('/insert', jsonParser, (req, res) => {
    const { note } = req.body;
    insertNote(note)
    .then(result => res.send(result.rows[0]))
    .catch(err => res.send({ err: err.toString() }));
});

app.get('/remove/:id', (req, res) => {
    const { id } = req.params;
    removeNote(id)
    .then(() => res.send('THANH_CONG'))
    .catch(() => res.send('THAT_BAT'));
});

app.post('/update', jsonParser, (req, res) => {
    const { id, note } = req.body;
    updateNote(id, note)
    .then(() => res.send('THANH_CONG'))
    .catch(() => res.send('THAT_BAI'));
});

