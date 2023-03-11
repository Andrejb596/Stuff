import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "../styled/GlobalStyle";

import { Footer, Header } from "./components";
import { theme } from "../constants/theme";
import Routes from "../routes/Routes";
import { useState } from "react";

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg};
`;

function App() {
  const [them, setTheme] = useState(JSON.parse(localStorage.getItem('switchTheme')) || 'dark');
  const isLightTheme = them === 'dark';

  const toggleTheme = () => {
    setTheme(isLightTheme ? 'light' : 'dark');
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={isLightTheme ? theme.darkTheme : theme.lightTheme}>
        <GlobalStyle />
        <StyledApp>
          <Header toggleTheme={toggleTheme} isLightTheme={isLightTheme} />
          <Routes />
          <Footer />
        </StyledApp>
      </ThemeProvider >
    </BrowserRouter>
  );
}

export default App;


