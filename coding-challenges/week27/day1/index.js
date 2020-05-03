//With Promise
/* const fetchPlanets = (id) => {
    let planet = fetch(`https://swapi.co/api/planets/${id}/`)
    planet
    .then(res => res.json())
    .then(data => {
        data.residents.forEach(resident => {
            fetch(resident)
            .then(res=>res.json())
            .then(resident => {
                resident.films.forEach(film => {
                    fetch(film)
                    .then(res => res.json())
                    .then(filmData => {
                        console.log(filmData)
                        var node = document.createElement("LI");                 // Create a <li> node
                        var textnode = document.createTextNode(filmData.title);         // Create a text node
                        node.appendChild(textnode);
                        document.getElementById('list').appendChild(node)
                    })
                })
            })
        })
    }) 
} */

//With async await
async function fetchPlanets(id) {
    let planet = await fetch(`https://swapi.co/api/planets/${id}/`)
    planet = await planet.json()
    //console.log(planet)
    planet.residents.forEach(async (resident) => {
        let residentData =  await fetch(resident)
        residentData = await residentData.json()
        residentData.films.forEach(async (film) => {
            let filmData = await fetch(film)
            filmData = await filmData.json()
            console.log(filmData)
            var node = document.createElement("LI");                 // Create a <li> node
            var textnode = document.createTextNode(filmData.title);         // Create a text node
            node.appendChild(textnode);
            document.getElementById('list').appendChild(node)
        })
    }) 
}

let planetIds = [2,6,9]
planetIds.forEach(id => {
    fetchPlanets(id)
})
