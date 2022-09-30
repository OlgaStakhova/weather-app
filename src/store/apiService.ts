import { CityResponse, ResponseWeather } from "../types/ResponseType";

const BASE_URL = 'https://foreca-weather.p.rapidapi.com';
const KEY = '4352a2a5b3msh5364652f6606bd2p16ad38jsna0465252c6c6';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': KEY,
        'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
    }
};

export const getCityID = (city: string): Promise<CityResponse | null> => {
    return fetch(`${BASE_URL}/location/search/${city.toLowerCase()}`, options)
        .then((response) => response.json())
        .catch((error) => {
            throw new Error(error.message)
        })
}

export const getWeather = (cityId: string): Promise<ResponseWeather | null> => {
    return fetch(`${BASE_URL}/forecast/daily/${cityId}?alt=0&tempunit=C&windunit=MS&periods=8&dataset=full`, options)
        .then(response => response.json())
        .catch((error) => {
            throw new Error(error.message)
        });
}
