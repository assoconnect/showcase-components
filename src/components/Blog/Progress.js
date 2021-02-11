import styled from 'styled-components'

const Progress = styled.div`
  position: fixed;
  background: linear-gradient(
    to right,
    #316bf2 ${props => props.scroll},
    transparent 0
  );
  width: 100%;
  height: 4px;
  z-index: 3;
  top: 0px;
  z-index: 9999;
`

export default Progress
