console.log('this will contain html')

APIcall()
.then(parsedParks => {
    console.log(parsedParks)
    let HTMLtemplate = ``
parsedParks.forEach((park) => {
    if (park.visited === true) {
        HTMLtemplate += `<article class='visited'>`
    } else {
        HTMLtemplate += `<article class='not_visited'>`
    }

   HTMLtemplate += `
    <h3>${park.name}</h3>
    <p>${park.state}</p>
    </article>
    `

})
const pageContainer = document.querySelector('.page__container')
pageContainer.innerHTML += HTMLtemplate


    

})

