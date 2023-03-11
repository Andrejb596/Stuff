import { StyledHeader, StyledNavLink, HeaderTitle } from './Header.styled';
import { Container } from '../../../styled/GlobalStyle';
import { ROUTES } from '../../../routes/Routes';
import Flex from '../../../components/Flex';
import Switch from '../Switch/Switch';

export default function Header({ toggleTheme, isLightTheme }) {
  return (
    <StyledHeader>
      <Container>
        <Flex direction='column'>
          <HeaderTitle>KEEP CALM</HeaderTitle>
          <Flex justify='space-around' width='100%'>
            <nav>
              <StyledNavLink to={ROUTES.HOME}>Home</StyledNavLink>
              <StyledNavLink to={ROUTES.ABOUT}>About</StyledNavLink>
            </nav>
            <Switch toggleTheme={toggleTheme} isLightTheme={isLightTheme} />
          </Flex>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
