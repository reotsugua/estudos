import Weather from "../types/Weather.js";
import { capitalize, roundToTwoDecimals } from "../pipes/pipes.js";

const cardResumeWeatherComponent: HTMLElement = document.getElementById('card-resume-weather-component') as HTMLElement;

const htmlComponent = (resumeWeather:Weather): string => {
    const icon: string = `https://openweathermap.org/img/wn/${resumeWeather.weather.icon}.png`;
    const weatherDescriptionCapitalize: string = capitalize(resumeWeather.weather.description); 
    const temperatureRoundToTwoDecimals: number = roundToTwoDecimals(resumeWeather.main.temp);   
    
    return ` <div class="row">
                <div class="col-7 my-auto">
                    <div class="numbers">
                        <p class="text-white text-sm mb-0 font-weight-bold opacity-7">Tempo hoje em</p>
                            <h5 class="text-white font-weight-bolder mb-0 ">
                                ${resumeWeather.name} ${temperatureRoundToTwoDecimals}°C
                            </h5>
                    </div>
                </div>
                <div class="col-5 text-end">
                    <div style="min-height: 10vh !important;">
                        <img class="w-25" src="${icon}" alt="image ${resumeWeather.weather.main}">
                    </div>
                    <h5 class="mb-0 text-white text-end me-1 placeholder-glow">${weatherDescriptionCapitalize}</h5>
                </div>
            </div>
        `
}

function renderCardResumeWeatherComponent(resumeWeather:Weather): void {
    cardResumeWeatherComponent.innerHTML = htmlComponent(resumeWeather);
}

const WeatherSummaryComponent = {
    update(resumeWeather:Weather) :void {
        renderCardResumeWeatherComponent(resumeWeather);
    }
}
export default WeatherSummaryComponent;