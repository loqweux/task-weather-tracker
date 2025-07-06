import React, { useState } from "react";
import { useDebounce } from "use-debounce";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
  Grid,
} from "@mui/material";
import { useWeather } from "../hooks/useWeather";

export default function WeatherWidget() {
  const [city, setCity] = useState("Moscow");
  const [debouncedCity] = useDebounce(city, 600);
  const { data, loading, error } = useWeather(debouncedCity);

  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <TextField
              label="Город"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item>
            <Button variant="outlined">Обновить</Button>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, textAlign: "center", minHeight: 80 }}>
          {loading && <CircularProgress />}
          {error && <Typography color="error">{error}</Typography>}
          {data && (
            <>
              <Typography variant="h5">
                {data.name}, {Math.round(data.main.temp)}°C
              </Typography>
              <Typography sx={{ textTransform: "capitalize" }}>
                {data.weather[0].description}
              </Typography>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
