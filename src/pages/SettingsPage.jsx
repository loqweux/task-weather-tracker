import { Container, Typography, Switch, FormControlLabel } from "@mui/material";
import { useThemeStore } from "../store/themeStore";

export default function SettingsPage() {
  const { dark, setDark } = useThemeStore();

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
