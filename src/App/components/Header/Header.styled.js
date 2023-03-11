import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.header};
  padding: 40px 0;
  margin-bottom: 20px;
`;

export const HeaderTitle = styled.h1`
  margin-bottom: 20px;
  `;

export const StyledNavLink = styled(NavLink)`
  margin: 0 10px;

  &:hover {
    color: ${({ theme }) => theme.textActive};
  }
  &[aria-current] {
    color: ${({ theme }) => theme.textActive};
  }
`;


