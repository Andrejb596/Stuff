import { StyledHeader, HeaderText, StyledNavLink } from './Header.styled';
import { Container } from '../../../styled/GlobalStyle';
import { ROUTES } from '../../../routes/Routes';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <HeaderText>
          <h1>KEEP CALM</h1>
          <nav>
            <StyledNavLink to={ROUTES.HOME}>Home</StyledNavLink>
            <StyledNavLink to={ROUTES.ABOUT}>About</StyledNavLink>
          </nav>
        </HeaderText>
      </Container>
    </StyledHeader>
  );
}
