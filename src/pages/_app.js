import PageLayout from 'components/PageLayout';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from 'utils/ThemeConfig';
import '../../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');
  
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  
  return(
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        {/* <button onClick={toggleTheme}>Switch Theme</button> */}
        <PageLayout toggleTheme={toggleTheme} theme={theme}>
            <Component {...pageProps} />
        </PageLayout>
    </ThemeProvider>
  )
}

export default MyApp
