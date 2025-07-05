import { useTheme } from "../context/ThemeContext";
import { Container, Typography, Switch, FormControlLabel } from "@mui/material";

export default function SettingsPage() {
  const { dark, setDark } = useTheme();

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Настройки
      </Typography>
      <FormControlLabel
        control={
          <Switch checked={dark} onChange={(e) => setDark(e.target.checked)} />
        }
        label="Тёмная тема"
      />
    </Container>
  );
}
