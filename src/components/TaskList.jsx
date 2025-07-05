import { useCallback } from "react";
import { List, Paper } from "@mui/material";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle }) {
  const handleToggle = useCallback((id) => onToggle(id), [onToggle]);

  return (
    <Paper sx={{ mt: 3, overflow: "hidden" }}>
      <List>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={handleToggle} />
        ))}
      </List>
    </Paper>
  );
}
