const key = '5f386d0eea792de8e4b3a55cbe7680e4';
const url = `https://api.openweathermap.org/data/2.5/weather?q=Mafra,br&units=metric&cnt=10&appid=${key}`;

function dataAtualFormatada(){
    const data = new Date().toString();

    return data.substring(0, 25);
}

$.get("https://ipinfo.io", (response) => {
    $('#city').html(`Mafra-SC`);
    //$('#city').html(`${response.city}-${response.region}`);
}, "json");

$.get(url, (response) => {
    console.log(response);

    $('#status').html(`${response.weather[0].main} - ${response.weather[0].description} `);
}, "json");