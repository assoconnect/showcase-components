import React from 'react'
import styled from 'styled-components'
import { UI } from '../../..'

const PostBodyStyled = styled.div`
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
  button {
    all: inherit;
    margin: 20px auto;
    background: rgb(53, 117, 255) !important;
    color: rgb(255, 255, 255) !important;
    -webkit-font-smoothing: antialiased !important;
    cursor: pointer !important;
    -moz-user-select: none !important;
    -webkit-user-select: none !important;
    -o-user-select: none !important;
    user-select: none !important;
    display: inline-block !important;
    font-weight: normal !important;
    text-align: center !important;
    text-decoration: none !important;
    -moz-transition: all 0.4s ease !important;
    -webkit-transition: all 0.4s ease !important;
    -o-transition: all 0.4s ease !important;
    background: rgb(49, 107, 242) !important;
    border-radius: 6px !important;
    border-width: 0px !important;
    color: white !important;
    font-family: sans-serif !important;
    height: auto !important;
    transition: all 0.4s ease !important;
    padding: 6px 18px !important;
    text-shadow: none !important;
    width: auto !important;
    font-size: 24px !important;
    line-height: 1.5em !important;
    box-sizing: content-box !important;
    vertical-align: middle;
  }
  button > a {
    color: white;
  }
  blockquote {
    background: #fff2cc !important;
    font-weight: 600 !important;
    border: none !important;
    padding: 20px !important;
  }
  blockquote p {
    margin: 0 !important;
  }
`

const PostBody = ({ children }) => {
  return <PostBodyStyled> {children}</PostBodyStyled>
}

export default PostBody
