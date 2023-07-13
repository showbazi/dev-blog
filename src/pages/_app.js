import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import PageLayout from "components/PageLayout";
import { darkTheme, GlobalStyles, lightTheme } from "utils/ThemeConfig";
import { THEMES } from "utils/constants";
import "../../styles/globals.css";

export const useThemeStore = create(
  persist(
    (set) => ({
      activeTheme: THEMES.DARK,
      setActiveTheme: (theme) =>
        set(() => ({
          activeTheme: theme,
        })),
    }),
    {
      name: "active-theme",
      get: (key) => localStorage.getItem(key),
    }
  )
);

function MyApp({ Component, pageProps }) {
  const activeTheme = useThemeStore((state) => state.activeTheme);
  const setActiveTheme = useThemeStore((state) => state.setActiveTheme);

  const [theme, setTheme] = useState(THEMES.DARK);

  useEffect(() => {
    setTheme(activeTheme);
  }, [activeTheme]);

  const toggleTheme = () => {
    theme === "light" ? setActiveTheme("dark") : setActiveTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      {/* <button onClick={toggleTheme}>Switch Theme</button> */}
      <PageLayout toggleTheme={toggleTheme} theme={theme}>
        <Component {...pageProps} theme={theme} />
      </PageLayout>
    </ThemeProvider>
  );
}

export default MyApp;
