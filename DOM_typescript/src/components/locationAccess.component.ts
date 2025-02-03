import { getDataWeather } from "../service/wheather.service.js";
import Weather from "../types/Weather.js";
import renderCardHumidityComponent from "./humidity.component.js";
import renderCardResumeWeatherComponent from "./resumeWeather.component.js";

async function success(position: GeolocationPosition): Promise<void> {
    const latitude = position.coords.latitude.toString();
    const longitude = position.coords.longitude.toString();

    try {
        const dataWeather: Weather = await getDataWeather(latitude, longitude);
        console.warn(dataWeather);
        
        renderCardResumeWeatherComponent(dataWeather);
        renderCardHumidityComponent(dataWeather);
        
    } catch (error) {
        
    }
}

function error(error: GeolocationPositionError): void {
    if (error.code === error.PERMISSION_DENIED) {
        console.warn("Acesso à geolocalização negado.");
    } else {
        console.error("Erro ao obter a geolocalização:", error.message);
    }
}

// FUNCAO IIFE
(function verifySupportGeolocation(): void {
    if (!("geolocation" in navigator)) {
        console.warn("Geolocation não é suportada pelo seu navegador.");
        return;
    }
    
    navigator.geolocation.getCurrentPosition(success, error);
})()