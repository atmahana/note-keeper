import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  // Initial Provider State
  const initialTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light";

  const [theme, setTheme] = useState(initialTheme);

  function handleToggle(event) {
    if (event.target.checked) setTheme("dark");
    else setTheme("light");
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const contextData = {
    theme: theme,
    handleToggle,
  };

  return (
    <ThemeContext.Provider value={contextData}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
