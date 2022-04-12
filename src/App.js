import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";
import Reset from "./styled/reset";
import Header from "./features/header";
import Wrapper from "./features/wrapper";
import { ThemeContext } from "./contexts/context";
import themes from "./theme/themes";

function App() {
  const [theme, setTheme] = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    isDarkTheme ? setTheme(themes.dark) : setTheme(themes.light);
  }, [isDarkTheme]);

  // useEffect(() => {
  //   setTheme(themes.dark);
  // }, []);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Wrapper>
          <Header />
        </Wrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
