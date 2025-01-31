import Weather from "../types/Weather.js";

const cardHumidityComponent: HTMLElement = document.getElementById('card-humidity-component') as HTMLElement;


const htmlComponent = (resumeWeather:Weather): string => {  
    return ` <div class="col-3">
                            <i class="bi bi-droplet-half text-gradient text-primary" style="font-size: 4em;"></i>
                        </div>          
                        <div class="col-9 py-2">
                            <h1 class="text-gradient text-primary">
                                ${resumeWeather.main.humidity} <span class="text-lg ms-n1">%</span>
                            </h1>
                            <h6 class="mb-0 font-weight-bolder">Umidade</h6>
                        </div>
        `
}

export default function renderCardHumidityComponent(resumeWeather:Weather) {
    cardHumidityComponent.innerHTML = htmlComponent(resumeWeather);
}