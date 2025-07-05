import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, Box } from "@mui/material";

const schema = yup.object({
  title: yup.string().required("Название задачи обязательно"),
});

export default function AddTaskForm({ onAdd }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    onAdd(data.title);
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(submit)}
      sx={{ display: "flex", gap: 1 }}
    >
      <TextField
        label="Новая задача"
        {...register("title")}
        error={!!errors.title}
        helperText={errors.title?.message}
        fullWidth
      />
      <Button type="submit" variant="contained">
        Добавить
      </Button>
    </Box>
  );
}
