//http://api.openweathermap.org/data/2.5/find?q=tokyo&units=metric&appid=e3d233298c34c3892ac7fb3ca267d621

var url = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=e3d233298c34c3892ac7fb3ca267d621&q=';
//var url = 'https://facebook.github.io/react-native/movies.json';

export default function getTemp(cityName) {
    return fetch(url + cityName)
        .then(response => response.json())
        .then(responseJson =>responseJson.list[0].main.temp);
}

