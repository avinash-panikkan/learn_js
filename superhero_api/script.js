

const SUPERHERO_TOKEN = '1735275263587985'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const newRandomHeroButton = document.getElementById('getRandomHeroButton')
const newSearchHeroButton = document.getElementById('searchHeroButton')
const searchInput = document.getElementById('searchInput')

const heroImgDiv = document.getElementById('heroImg')

const getRandomSuperHero = (id) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => showHeroInfo(json))
}

const showHeroInfo = (character) => {
    const name = `<h2>${character.name}</h2>`
    const img = `<img src="${character.image.url}" height=200 width=200/>`
    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join('')

    heroImgDiv.innerHTML = `${name}${img}${stats}`
}

const getSearchSuperHero = (name) => {
    fetch(`${BASE_URL}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            const hero = json.results[0]
            showHeroInfo(hero)
        })
}
    
const getRandomNumber = () =>{
    const numberOfHeroes = 731
    return Math.floor(Math.random() * numberOfHeroes) + 1
}

newSearchHeroButton.onclick = () => getSearchSuperHero(searchInput.value)
newRandomHeroButton.onclick = () => getRandomSuperHero(getRandomNumber())



