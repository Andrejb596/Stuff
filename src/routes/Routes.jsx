import { Route, Routes as Switch } from 'react-router-dom';
import styled from 'styled-components';
import { About, ErrorPage, Home } from '../pages';
import { Container } from '../styled/GlobalStyle';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  ERROR: '*',
};
const StyledRoutes = styled.section`
  flex: 1 1 auto;
`;

export default function Routes() {
  return (
    <StyledRoutes>
      <Container>
        <Switch>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.ERROR} element={<ErrorPage />} />
        </Switch>
      </Container>
    </StyledRoutes>
  );
}
