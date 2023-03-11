import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'} ;
  margin: ${({ margin }) => margin || 'auto'};
  width: ${({ width }) => width || 'auto'};
`;

export default function Flex(props) {
  return (
    <StyledFlex {...props} />
  )
}
