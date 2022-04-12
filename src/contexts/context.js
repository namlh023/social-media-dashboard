import { createContext } from "react";

export const ThemeContext = createContext({
  darkTheme: false,
  setDarkTheme: (dark) => {},
});
