console.log('I linked it!')

const APIcall = () => {
    return fetch('http://localhost:8088/parks')
    .then(parks => parks.json())
}
