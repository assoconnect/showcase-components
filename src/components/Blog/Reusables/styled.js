import styled from 'styled-components'
import { UI, Flex, Box, PricingCard } from '../..'

export const BlogPageTitle = styled.h1`
  font-family: ${UI.fonts.family.roboto};
  padding: 10px 0px;
  font-size: 36px;
  line-height: 48px;
  font-weight: 900;
  color: #9b9b9b;
`

export const AuthorWrap = styled.div`
  align-items: center !important;
  display: flex !important;
  flex-direction: ${props => (props.flip ? 'row-reverse' : 'row')};
  font-family: ${UI.fonts.family.roboto};
`
export const AuthorAvatar = styled.img`
  width: ${props => (props.big ? '50px' : '30px')};
  height: auto;
  vertical-align: middle;
  border-style: none;
`
export const AuthorName = styled.div`
  padding: 0 10px;
  color: ${props => (props.color ? props.color : '#fff')};
  text-align: left;
`

export const TagWrap = styled.div`
  margin-bottom: 20px;
`
export const Tag = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 5px;
  padding: 6px 20px;
  border-radius: 3px;
  background-color: #00c1a2;
  color: #fff;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`

export const CardCtaButtonWrap = styled.div`
  display: flex;
`
export const CardCtaButton = styled.a`
  transition: background-color 0.3s;
  outline: 0;
  text-transform: uppercase;
  height: 43px;
  width: 154px;
  margin: 10px auto;
  border-radius: 21.5px;
  border: 0;
  background-color: #fff;
  font-size: 16px;
  font-weight: ${UI.fonts.weight.bold};
  line-height: 21px;
  white-space: pre-wrap;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.white {
    color: #316bf2;
    background-color: #fff;
    &:hover {
      color: #fff;
      background-color: transparent;
      border: 1px solid #fff !important;
    }
  }
  &.yellow {
    color: white;
    background-color: #f6c131;
    &:hover {
      color: #f6c131;
      background-color: transparent;
      border: 1px solid #f6c131 !important;
    }
  }
`
