import { ThemeProvider } from "styled-components";
import useTheme from "./theme/useTheme";
import "./App.css";
import themes from "./theme/themes";

function App() {
  const [theme, setTheme] = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <div>App</div>
      <button onClick={() => setTheme(themes.light)}>Click Me</button>
    </ThemeProvider>
  );
}

export default App;
