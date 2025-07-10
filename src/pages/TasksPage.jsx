import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import { useTasks } from "../hooks/useTasks";
import {
  Container,
  Typography,
  Grid,
  Card,
  Box,
  LinearProgress,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ListIcon from "@mui/icons-material/List";

export default function TasksPage() {
  const { tasks, addTask, toggleTask, deleteTask, reorderTasks } = useTasks();

  const total = tasks.length;
  const done = tasks.filter((t) => t.done).length;
  const active = total - done;
  const progress = total > 0 ? (done / total) * 100 : 0;
  const pct = Math.round(progress);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: 700, textAlign: "center" }}
      >
        Трекер Задач
      </Typography>

      <Card variant="outlined" sx={{ mb: 4, p: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Прогресс выполнения
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          spacing={2}
        >
          <Box sx={{ flexGrow: 1, position: "relative", pt: 1 }}>
            <LinearProgress
              variant="determinate"
              value={pct}
              sx={{
                height: 14,
                borderRadius: 7,
                "& .MuiLinearProgress-bar": {
                  backgroundColor:
                    pct === 100 ? "success.main" : "primary.main",
                },
              }}
            />
            <Typography
              variant="body2"
              component="div"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: pct > 50 ? "common.white" : "text.primary",
                fontWeight: 600,
                bottom: 1,
              }}
            >
              {pct}%
            </Typography>
          </Box>
        </Stack>
      </Card>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Stack spacing={2}>
            {[
              {
                label: "Всего",
                value: total,
                icon: <ListIcon fontSize="large" />,
              },
              {
                label: "Завершено",
                value: done,
                icon: <TaskAltIcon fontSize="large" color="success" />,
              },
              {
                label: "Активно",
                value: active,
                icon: <ListIcon fontSize="large" color="warning" />,
              },
            ].map((stat) => (
              <Card
                key={stat.label}
                elevation={2}
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 2,
                }}
              >
                <Box sx={{ mr: 2 }}>{stat.icon}</Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    {stat.label}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {stat.value}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Card elevation={1} sx={{ mb: 3, p: 2, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Добавить новую задачу
            </Typography>
            <AddTaskForm onAdd={addTask} />
          </Card>

          <Divider sx={{ mb: 2 }} />

          <Typography variant="h6" sx={{ mb: 1 }}>
            Список задач
          </Typography>
          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onReorder={reorderTasks}
          />

          {total === 0 && (
            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Chip
                label="У вас пока нет задач. Добавьте первую!"
                color="info"
              />
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
