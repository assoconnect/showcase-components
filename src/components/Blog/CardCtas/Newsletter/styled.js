import styled from 'styled-components'
import { UI } from '../../..'

export const Wrapper = styled.article`
  font-family: ${UI.fonts.family.roboto};
  width: 96%;
  background: #316bf2;
  color: #fff;
  margin-bottom: 40px;
  padding: 20px;
  border: 3px solid #316bf2;
  border-radius: 10px;
  position: relative;
  display: ${props => (props.mobile ? 'none' : 'flex')};
  flex-direction: column;
  min-width: 0;
  height: fit-content;
  @media screen and (max-width: ${UI.breakpoints.smallMobile}) {
    display: ${props => (props.mobile ? 'flex' : 'none')};
    width: 100%;
  }
`
export const StyledHeader = styled.div`
  display: flex;
`
export const Title = styled.span`
  flex: 0 0 calc(100% - 70px);
  font-size: 28px;
  line-height: 37px;
  font-weight: 900;
  padding-left: 10px;
  color: #fff;
`
export const IconWrap = styled.div`
  background: #fff;
  border-radius: 50%;
  flex: 0 0 70px;
  height: 70px;
  align-items: center !important;
  justify-content: center !important;
  display: inline-flex !important;
  margin: auto;
  > svg {
    width: 40px;
    overflow: hidden;
    vertical-align: middle;
  }
`
export const SubNews = styled.div`
  font-size: 12px;
  padding-left: 10px;
  margin-top: 5px;
`
export const EmailInput = styled.input`
  width: 100%;
  border: 0;
  border-radius: 0;
  border-bottom: solid 1px #fff;
  background: 0;
  padding: 10px;
  color: #fff !important;
  margin: 40px 0 20px;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff !important;
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #fff !important;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #fff !important;
  }
`
