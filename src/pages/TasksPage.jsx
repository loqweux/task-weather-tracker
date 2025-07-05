import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import WeatherWidget from "../components/WeatherWidget";
import { useTasks } from "../hooks/useTasks";
import { Container, Typography } from "@mui/material";

export default function TasksPage() {
  const { tasks, addTask, toggleTask } = useTasks();

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Трекер Задач
      </Typography>
      <AddTaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} />
      <WeatherWidget />
    </Container>
  );
}
