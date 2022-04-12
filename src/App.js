import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";
import Fonts from "./styled/font";
import Reset from "./styled/reset";
import Header from "./features/header";
import Wrapper from "./features/wrapper";
import { ThemeContext } from "./contexts/context";
import themes from "./theme/themes";

function App() {
  const [theme, setTheme] = useTheme();
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    darkTheme ? setTheme(themes.dark) : setTheme(themes.light);
  }, [darkTheme, setTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <ThemeProvider theme={theme}>
        <Fonts />
        <Reset />
        <Wrapper>
          <Header />
        </Wrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
