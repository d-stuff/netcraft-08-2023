console.log('yo yo yo')

const resBody = res => res.json();

const [gameOfBody, rickandBody] = await Promise.all([
    fetch('https://api.tvmaze.com/search/shows?q=game%20of%20thrones'),
    fetch('https://api.tvmaze.com/search/shows?q=rick%20and%20motry')
].map(promise => promise.then(resBody)));


console.log(gameOfBody[0].show.name);
console.log(rickandBody[0].show.name);