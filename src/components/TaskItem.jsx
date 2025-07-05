import React from "react";
import { ListItem, ListItemText, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function TaskItem({ task, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <ListItem
        secondaryAction={
          <IconButton edge="end" onClick={() => onToggle(task.id)}>
            <CheckCircleIcon color={task.done ? "success" : "disabled"} />
          </IconButton>
        }
      >
        <ListItemText
          primary={task.title}
          sx={{ textDecoration: task.done ? "line-through" : "none" }}
        />
      </ListItem>
    </motion.div>
  );
}

export default React.memo(TaskItem);
