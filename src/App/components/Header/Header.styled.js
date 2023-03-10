import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
  text-align: center;
  margin-bottom: 20px;
`;

export const HeaderText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  a{
    margin: 0 10px;
  }
  h1{
    margin-bottom: 20px;
  }
  @media(max-width: 660px){
    h1{
      max-width: 500px;
      font-size: 28px;
    }
  }
  @media(max-width: 540px){
    h1{
      text-align: center;
      font-size: 22px;
    }
  }
  @media(max-width: 375px){
    h1{
      font-size: 19px;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  &:hover {
    color: blue;
  }
  &[aria-current] {
    color: blue;
  }
`;


