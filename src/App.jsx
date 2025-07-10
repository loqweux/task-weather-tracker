import { Routes, Route, Link } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";
import TasksPage from "./pages/TasksPage";
import SettingsPage from "./pages/SettingsPage";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

export default function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button component={Link} to="/" color="inherit">
              Погода
            </Button>
            <Button component={Link} to="/settings" color="inherit">
              Настройки
            </Button>
            <Button component={Link} to="/tasks" color="inherit">
              Задачи
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </>
  );
}
