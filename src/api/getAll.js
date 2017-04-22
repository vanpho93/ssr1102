const getAll = () => (
    fetch('http://localhost:3000/all')// eslint-disable-line
    .then(res => res.json())
);

export default getAll;
