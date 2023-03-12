import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'} ;
  margin: ${({ margin }) => margin || 'auto'};
  min-width: ${({ width }) => width || 'auto'};
  min-height: ${({ height }) => height || 'auto'};
`;

export default function Flex(props) {
  return (
    <StyledFlex {...props} />
  )
}
