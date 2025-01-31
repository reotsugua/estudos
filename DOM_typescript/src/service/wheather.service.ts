import Weather from "../types/Weather.js";

export async function getDataWeather(location:string): Promise<Weather>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=32e2a648347c3fe47931c079daaac006&units=metric&lang=pt_br`);

    const dataWeather = await response.json();
    if (!response.ok) {
        throw new Error (dataWeather.message || "Erro ao buscar dados do clima!");
    }

    const {name, weather: [weather], main} = dataWeather;
    return {name, weather, main};
}