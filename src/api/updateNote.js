const updateNote = (note, id) => {
    const option = {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ id, note })
    };

    return fetch('http://localhost:3000/update', option)// eslint-disable-line
    .then(res => res.text());
};

export default updateNote;
