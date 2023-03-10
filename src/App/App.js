import styled, { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";

import { GlobalStyle } from "../styled/GlobalStyle";

import { Footer, Header } from "./components";
import { theme } from "../constants/theme";
import Routes from "../routes/Routes";
import { createContext, useState } from "react";

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg};
`;

export const AppContext = createContext();

function App() {
  const [them, setTheme] = useState(JSON.parse(localStorage.getItem('switchTheme')) || 'dark');
  const isLightTheme = them === 'dark';

  const toggleTheme = () => {
    setTheme(isLightTheme ? 'light' : 'dark');
  }
  const something = {
    isLightTheme,
    toggleTheme
  }


  return (
    <AppContext.Provider value={something}>
      <HashRouter>
        <ThemeProvider theme={isLightTheme ? theme.darkTheme : theme.lightTheme}>
          <GlobalStyle />
          <StyledApp>
            <Header />
            <Routes />
            <Footer />
          </StyledApp>
        </ThemeProvider >
      </HashRouter>
    </AppContext.Provider>
  );
}

export default App;


