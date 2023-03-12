import styled from "styled-components";

export const StyledHome = styled.header``;

export const Title = styled.header`
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.textActive};
  }
`;
