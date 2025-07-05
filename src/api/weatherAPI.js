import axios from "axios";

export async function fetchWeather(city) {
  const key = import.meta.env.VITE_WEATHER_KEY;
  try {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      { params: { q: city, appid: key, units: "metric", lang: "ru" } }
    );
    return data;
  } catch (e) {
    throw new Error("Нет данных о погоде");
  }
}
