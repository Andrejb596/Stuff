import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

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
  background-color: ${({ theme }) => theme.colors.body};
  color: hsl(192, 100%, 9%);
  font-family: 'Poppins', sans-serif;
  font-size: 1.15rem;
  background-color: grey;
}

a{
  color: black;
}
`;

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;
