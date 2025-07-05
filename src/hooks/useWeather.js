import { useState, useEffect } from "react";
import { fetchWeather } from "../api/weatherAPI";

export function useWeather(city) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;
    setLoading(true);
    fetchWeather(city)
      .then((res) => {
        setData(res);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [city]);

  return { data, loading, error };
}
