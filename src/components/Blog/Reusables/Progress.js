import styled from 'styled-components'
import { UI } from '../..'

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
  &.hidden-mobile {
    display: block !important;
  }
  &.hidden-desktop {
    display: none !important;
  }
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    &.hidden-mobile {
      display: none !important;
    }
    &.hidden-desktop {
      display: block !important;
    }
  }
`

export default Progress
