const pg = require('pg');

const config = {
  user: 'postgres',
  database: 'NODE1102',
  password: 'khoapham',
  host: 'localhost',
  port: 5432,
  max: 5,
  idleTimeoutMillis: 10000
};

const pool = new pg.Pool(config);

function queryDB(sql, arrayData) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err) return reject(err);
            client.query(sql, arrayData, (queryErr, result) => {
                done(queryErr);
                if (queryErr) return reject(queryErr);
                resolve(result);
            });
        });
    });
}

function getAllNote() {
   return queryDB('SELECT * FROM "Notes"', [])
    .then(result => result.rows);
}

function insertNote(note) {
    const sql = 'INSERT INTO public."Notes"(content) VALUES ($1) RETURNING *';
    return queryDB(sql, [note]);
}

function removeNote(id) {
    const sql = 'DELETE FROM public."Notes" WHERE id = $1';
    return queryDB(sql, [id]);
}

module.exports = { getAllNote, insertNote, removeNote };
