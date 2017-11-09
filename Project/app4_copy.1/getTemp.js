//http://api.openweathermap.org/data/2.5/find?q=tokyo&units=metric&appid=e3d233298c34c3892ac7fb3ca267d621

var url = 'http://api.openweathermap.org/data/2.5/find?q=tokyo&units=metric&appid=e3d233298c34c3892ac7fb3ca267d621';
//var url = 'https://facebook.github.io/react-native/movies.json';
fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
    })
    .catch((error) => {
        console.error(error);
    });



