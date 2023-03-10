import styled from 'styled-components';

const StyledHome = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <StyledHome>
      <h1>Home</h1>
    </StyledHome>
  );
}
