console.log('this will contain html')

APIcall()
    .then(parsedParks => {
        console.log(parsedParks)
        let HTMLtemplate = ``
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
    </article>
    <p>Weather:</p>
    <ul>
    <li>Currently: ${parsedWeather.currently.summary}</li>
    <li>Today: ${parsedWeather.hourly.summary}</li>
    <li>Week: ${parsedWeather.daily.summary}</li>
    </ul>
    `
                
                })
        })
        const pageContainer = document.querySelector('.page__container')
        pageContainer.innerHTML += HTMLtemplate

    })

