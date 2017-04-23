const insertNote = (note) => {
    const option = {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ note })
    };

    return fetch('http://localhost:3000/insert', option);// eslint-disable-line
};

export default insertNote;
