import { useState, useEffect } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, done: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const reorderTasks = (newOrder) => {
    setTasks(newOrder);
  };

  return { tasks, addTask, toggleTask, deleteTask, reorderTasks };
}
