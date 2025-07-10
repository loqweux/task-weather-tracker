import { List, Paper } from "@mui/material";
import TaskItem from "./TaskItem";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export default function TaskList({ tasks, onToggle, onDelete, onReorder }) {
  const sensors = useSensors(useSensor(PointerSensor));

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={({ active, over }) => {
        if (active.id !== over.id) {
          const oldIndex = tasks.findIndex((t) => t.id === active.id);
          const newIndex = tasks.findIndex((t) => t.id === over.id);
          onReorder(arrayMove(tasks, oldIndex, newIndex));
        }
      }}
    >
      <Paper sx={{ mt: 3, overflow: "hidden" }}>
        <SortableContext
          items={tasks.map((t) => t.id)}
          strategy={verticalListSortingStrategy}
        >
          <List>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </List>
        </SortableContext>
      </Paper>
    </DndContext>
  );
}
