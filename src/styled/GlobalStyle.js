import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  list-style: none;
  text-decoration: none;
  user-select: none;
}

body{
  background-color: ${({ theme }) => theme.bg};
  color: hsl(192, 100%, 9%);
  font-family: 'Poppins', sans-serif;
  font-size: 1.15rem;
  background-color: grey;
  color: ${({ theme }) => theme.text};
}

a{
  color: ${({ theme }) => theme.text};
}
`;

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;
