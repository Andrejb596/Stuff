import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  text-align: center;
  min-height: 50px;
`;
