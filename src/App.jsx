import { Routes, Route, Link } from "react-router-dom";
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
              Задачи
            </Button>
            <Button component={Link} to="/settings" color="inherit">
              Настройки
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </>
  );
}
