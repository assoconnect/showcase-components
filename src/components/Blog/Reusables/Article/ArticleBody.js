import React from 'react'
import styled from 'styled-components'
import { UI } from '../../..'

const ArticleBodyStyled = styled.div`
  font-family: ${UI.fonts.family.roboto};
  color: #646464;
  font-size: 19px;
  line-height: 1.6;
  padding-right: 15px;
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    padding: auto;
  }
  > div:nth-first-child {
    max-width: 90vw;
  }
  h2 {
    font-size: 31px;
    line-height: 40px;
    font-weight: 900;
    color: #316bf2;
  }
  h3 {
    font-size: 25px;
    line-height: 33px;
    font-weight: 900;
    color: #4a4a4a;
  }
  h4 {
    font-size: 23px;
    line-height: 27px;
    font-weight: 500;
    color: #4a4a4a;
  }
  p {
    margin: 30px 0;
    justify-content: center;
    width: 100%;
  }
  a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
  }
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
    margin: auto;
    display: inherit;
  }
  dl,
  ol,
  ul {
    margin-top: 0;
    margin-bottom: 1rem;
    padding-inline-start: 30px;
  }
  li {
    padding-left: 10px;
    display: list-item;
    list-style-type: circle;
  }
  li::marker {
    content: '•' !important;
  }
  ul > li > p {
    margin: 30px 0;
    display: block;
  }
`

const ArticleBody = ({ children }) => {
  return <ArticleBodyStyled> {children}</ArticleBodyStyled>
}

export default ArticleBody
