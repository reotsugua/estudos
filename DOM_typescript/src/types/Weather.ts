type Weather = {
    name: string;
    weather: {
        description: string;
        icon: string;
        main: string;
    };
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
    };
}

export default Weather;