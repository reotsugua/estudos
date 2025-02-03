import Weather from "../types/Weather.js";

export async function getDataWeather(...params: string[]): Promise<Weather>{
    let cityNameOrLatLong: string = `q=${params[0]}`;

    if (params.length > 1) {
        cityNameOrLatLong = `lat=${params[0]}&lon=${params[1]}`
    }

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?${cityNameOrLatLong}&APPID=32e2a648347c3fe47931c079daaac006&units=metric&lang=pt_br`);

    const dataWeather = await response.json();
    if (!response.ok) {
        throw new Error (dataWeather.message || "Erro ao buscar dados do clima!");
    }

    const {name, weather: [weather], main, wind} = dataWeather;
    return {name, weather, main, wind};
}