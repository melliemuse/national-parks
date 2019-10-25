console.log('this will contain html')
let HTMLtemplate = ``
const pageContainer = document.querySelector('.page__container')

APIcall()
    .then(parsedParks => {
        console.log(parsedParks)
        
        parsedParks.forEach((park) => {
            DarkSkyAPICall(park)
                .then(parsedWeather => {
                    console.log(parsedWeather)

                    if (park.visited === true) {
                        HTMLtemplate += `<article class='visited'>`
                    } else {
                        HTMLtemplate += `<article class='not_visited'>`
                    }

                    HTMLtemplate += `
                    <h3>${park.name}</h3>
                    <p>${park.state}</p>
                    <p>Weather:</p>
                    <ul>
                    <li>Currently: ${parsedWeather.currently.summary}</li>
                    <li>Today: ${parsedWeather.hourly.summary}</li>
                    <li>Week: ${parsedWeather.daily.summary}</li>
                    </ul>
                    </article>
                    `
                    console.log(HTMLtemplate)
                    
                    
                    pageContainer.innerHTML = HTMLtemplate
                })
        })

        
    })

