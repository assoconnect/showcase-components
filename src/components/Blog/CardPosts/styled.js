import styled from 'styled-components'
import { UI } from '../..'
import { Link as GatsbyLink } from 'gatsby'

export const Wrapper = styled.article`
  background-color: ${props => (props.featured ? 'inherit' : '#fff')};
  font-family: ${UI.fonts.family.roboto};
  background-image: url(${props => props.image});
  flex: ${props =>
    props.featured ? '0 0 100%' : props.width ? '0 0 32% ' : 'none'};
  flex-direction: column;
  width: ${props =>
    props.width ? props.width : props.featured ? '100%' : '49%'};
  flex-shrink: ${props => (props.width ? '1' : 'inherit')};
  background-size: cover !important;
  border-radius: 15px;
  box-shadow: 0 1px 6px 0 rgb(222 222 222);
  position: relative;
  background-position: center;
  max-width: ${props => (props.featured ? 'none' : '800px')};
  margin: 0 0 20px 0;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    transform: ${props =>
      props.featured ? 'translateY(0)' : 'translateY(-5px)'};
    box-shadow: 0 5px 15px 0 rgb(222 222 222);
  }
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    flex: ${props =>
      props.featured ? '0 0 49%' : props.width ? '0 0 32% ' : 'none'};
  }
  @media screen and (max-width: ${UI.breakpoints.smallMobile}) {
    flex: 0 0 100%;
  }
`
export const Thumbnail = styled.div`
  background-image: url(${props => props.image});
  background-size: cover !important;
  height: 180px;
  background-position: center;
  border-radius: 15px 15px 0 0;
`

export const FrontMatter = styled.div`
  background: rgba(49, 107, 242, 0.7);
  padding: 100px 50px 30px;
  transition: 0.3s ease;
  border-radius: 15px;
  &:hover {
    background: rgba(49, 107, 242, 0.8);
    padding: 100px 50px 30px;
    transition: 0.3s ease;
  }
`
export const StyledLink = styled(GatsbyLink)`
  text-decoration: none !important;
  display: block;
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none !important;
  }
`

export const FrontMatterBlock = styled.div`
  padding: ${props => (props.featured ? '25px' : '25px 25px 100px')};
  height: 100%;
`

export const Title = styled.h2`
  font-size: 28px;
  line-height: 37px;
  font-weight: 900;
  margin-bottom: 0.5rem;
  margin-top: 0;
  color: ${props => (props.featured ? '#fff' : '#939393')};
  ${Wrapper}:hover & {
    color: ${props => (props.featured ? '#fff' : '#4a4a4a')};
  }
`

export const Meta = styled.div`
  display: flex;
  align-items: center;
  margin: ${props => (props.featured ? '20px 0 30px 0' : 'auto 0')};
  > svg {
    width: 20px;
    margin-right: 5px;
  }
`
export const CardPostFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
  width: calc(100% - 40px);
`
export const ReadingTime = styled.span`
  color: ${props => (props.featured ? '#fff' : '#838383')};
  font-size: ${props => (props.featured ? '16px' : '14px')};
  vertical-align: middle;
  margin-left: 5px;
`
