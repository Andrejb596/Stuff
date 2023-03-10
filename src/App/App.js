import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "../styled/GlobalStyle";

import { Footer, Header } from "./components";
import { theme } from "../constants/theme";
import Routes from "../routes/Routes";

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledApp>
          <Header />
          <Routes />
          <Footer />
        </StyledApp>
      </ThemeProvider >
    </BrowserRouter>
  );
}

export default App;


