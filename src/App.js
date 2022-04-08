import { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";
import themes from "./theme/themes";
import Fonts from "./styled/font";
import Reset from "./styled/reset";

import Wrapper from "./features/wrapper";

function App() {
  const [theme, setTheme] = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Fonts />
      <Reset />
      <Wrapper></Wrapper>
    </ThemeProvider>
  );
}

export default App;
