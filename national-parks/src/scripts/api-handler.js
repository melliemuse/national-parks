console.log('I linked it!')

const APIcall = () => {
    return fetch('http://localhost:8088/parks')
    .then(parks => parks.json())
}

const DarkSkyAPICall = (park) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyKey}/${park.latitude},${park.longitude}`)
    .then(allWeather => allWeather.json())
    }


