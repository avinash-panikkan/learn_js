// const url = 'https://weather-api99.p.rapidapi.com/weather?city=idukki';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '23e8c6bbd9msh4f92ad1fef14c9cp1420c8jsnf143f042d394',
// 		'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
// 	}
// };

const searchCity = document.getElementById('searchCity')
const searchButton = document.getElementById('searchButton')

const getCity = () => {
    const city = searchCity.value
    console.log(city);
}

// const getWeather = async () => {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getWeather()
//Not completed
searchButton.onclick = () => getCity()
