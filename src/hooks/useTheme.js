import { useState, useEffect } from "react";
import themes from "../theme/themes";
import { setToLS, getFromLS } from "../utils/localstorage";

function useTheme() {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    const lsTheme = getFromLS("theme");
    if (lsTheme) {
      setTheme(JSON.parse(lsTheme));
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (prefersDark) {
        setTheme(themes.dark);
        setToLS("theme", JSON.stringify(themes.dark));
      }
    }
  }, []);

  const setUserPreferTheme = (theme) => {
    setToLS("theme", JSON.stringify(theme));
    setTheme(theme);
  };

  return [theme, setUserPreferTheme];
}

export default useTheme;
