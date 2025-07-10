import WeatherWidget from "../components/WeatherWidget";
import { Container } from "@mui/material";

export default function TasksPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <WeatherWidget />
    </Container>
  );
}
