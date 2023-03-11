import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.footer};
  color: ${({ theme }) => theme.text};
  text-align: center;
  min-height: 50px;
`;
