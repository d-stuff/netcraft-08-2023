console.log('yo yo yo')

const res = await fetch('https://api.tvmaze.com/search/shows?q=game%20of%20thrones')

console.log('tv maze response')
const body = await res.json()

console.log(body[0].show.name);