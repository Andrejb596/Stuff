import { StyledHeader, StyledNavLink, HeaderTitle } from './Header.styled';
import { Container } from '../../../styled/GlobalStyle';
import { ROUTES } from '../../../routes/Routes';
import Switch from '../Switch/Switch';
import { Flex } from '../../../components';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Flex direction='column'>
          <HeaderTitle>KEEP CALM</HeaderTitle>
          <Flex direction='row' justify='space-around' width='100%'>
            <nav>
              <StyledNavLink to={ROUTES.HOME}>Home</StyledNavLink>
              <StyledNavLink to={ROUTES.ABOUT}>About</StyledNavLink>
            </nav>
            <Switch />
          </Flex>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
