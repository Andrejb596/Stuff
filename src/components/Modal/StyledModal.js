import styled, { createGlobalStyle } from "styled-components";
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 32px;
  z-index: 10;
  transition: color 0.15s ease-in;

  &:hover {
    color: red;
  }
`;
export const ScrollDisabler = createGlobalStyle`
  body{
    overflow-y: hidden;
  }
`;
export const StyledModal = styled.div`
  padding: 20px 50px 20px 20px;
  min-width: 200px;
  min-height: 200px;
  background-color: ${({ theme }) => theme.bg};
  position: relative;
  border-radius: 15px;
  margin: 0 10px;
`;
