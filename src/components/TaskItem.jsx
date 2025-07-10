import { ListItem, ListItemText, IconButton, Switch, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";

export default function TaskItem({ task, onToggle, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <ListItem
        divider
        secondaryAction={
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Switch
              checked={task.done}
              onChange={() => onToggle(task.id)}
              inputProps={{ "aria-label": "mark task done" }}
            />
            <IconButton
              onClick={() => onDelete(task.id)}
              aria-label="delete task"
            >
              <DeleteIcon color="error" />
            </IconButton>
          </Box>
        }
        sx={{ pr: 6 }}
      >
        <Box
          {...attributes}
          {...listeners}
          sx={{ cursor: "grab", mr: 1, display: "flex" }}
          aria-label="drag handle"
        >
          <DragIndicatorIcon />
        </Box>

        <ListItemText
          primary={task.title}
          sx={{
            textDecoration: task.done ? "line-through" : "none",
            color: task.done ? "gray" : "",
          }}
        />
      </ListItem>
    </motion.div>
  );
}
