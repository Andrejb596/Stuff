import { lazy, Suspense } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../styled/GlobalStyle';

const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const ErrorPage = lazy(() => import('../pages/ErrorPage/ErrorPage'));

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
        <Suspense fallback={<h2>Loading ...</h2>}>
          <Switch>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.ERROR} element={<ErrorPage />} />
          </Switch>
        </Suspense>
      </Container>
    </StyledRoutes>
  );
}
