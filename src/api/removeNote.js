const removeNote = (id) => (
    fetch(`http://localhost:3000/remove/${id}`)// eslint-disable-line
    .then(res => res.text())
);

export default removeNote;
