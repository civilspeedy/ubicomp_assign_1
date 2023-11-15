import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
const axios = require('axios').default;

export default function WeatherToast() {
    const [weatherData, setWeather] = useState(0);
    const key = '63ab2e7614be6a2162e2d2f440a21bbe';

    useEffect(() => {
        const getWeather = async () => {
            try {
                const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=50.7209&lon=-1.8904&appid=${key}`);
                setWeather(weather.data);
            } catch (e) {
                console.error("err in getWeather() ->", e)
            }
        };
        getWeather();

    }, []);

    const weatherDesc = "no data";
    const weatherNow = weatherData;
    if (weatherData != 0) {
        weatherDesc = weatherNow.weather[0].description;
    }

    const showToast = () => {// fragaments from https://github.com/calintamas/react-native-toast-message/blob/8a023ccb45085b77152030c8620b2e47fb19d086/docs/quick-start.md
        Toast.show({
            type: 'info',
            text1: 'Weather Today',
            text2: weatherDesc
        });
    };

    showToast()
};