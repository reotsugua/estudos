import { getDataWeather } from "../service/wheather.service.js";
import Weather from "../types/Weather.js";
import { buttonLoading } from "../utils/util.js";
import HumidityCardComponent from "./humidity.component.js";
import WeatherSummaryComponent from "./resumeWeather.component.js";

/* CAPTURA DE ELEMENTOS do DOM — Onde são capturados e armazenados elementos do DOM para manipulação. */
const formSearchLocation: HTMLFormElement = document.getElementById(
  "form-search-city"
) as HTMLFormElement;

/* EVENTOS — Manipuladores de eventos DOM, como cliques e submits. */
formSearchLocation?.addEventListener("submit", async (e: SubmitEvent) => {
  e.preventDefault();

  const form: HTMLFormElement = e.target as HTMLFormElement;
  const buttonSubmitter: HTMLButtonElement = e.submitter as HTMLButtonElement;
  const input: HTMLInputElement = form?.elements[0] as HTMLInputElement;

  if (!buttonSubmitter || !input) return;

  buttonLoading(buttonSubmitter);

  try {
    const cityName: string = input.value;
    const dataWeather: Weather = await getDataWeather(cityName);
    console.log(dataWeather);

    WeatherSummaryComponent.update(dataWeather);
    HumidityCardComponent.update(dataWeather);

    form.reset();
  } catch (error: any) {
    alert(error.message);
  } finally {
    buttonLoading(buttonSubmitter, false);
  }
});


