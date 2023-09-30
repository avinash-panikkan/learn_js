console.log('Hello')

const dogImgDiv = document.getElementById('dogImg')
const dogButton = document.getElementById('dogButton')

const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        console.log(json.message)
        dogImgDiv.innerHTML = `<img src='${json.message}' height=300 width=300/>`
    })
}

dogButton.onclick = () => getNewDog()

console.log('Helloy')