const promise = fetch('https://api.tvmaze.com/search/shows?q=game%20of%20thrones')

console.log('yo yo yo')

promise
    .then((res) => {
        console.log('tv maze response')
        return res.json()
    })
    .then(body => {
        console.log(body[0].show.name);
    })
    .catch((err) => {
        console.log('yo yo error: ', err)
    })