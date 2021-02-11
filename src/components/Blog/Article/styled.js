import styled from 'styled-components'
import { UI } from '../..'

export const ArticleCover = styled.div`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 20px;
  background-image: url(${props => props.image});
  height: 377px;
  background-position: center right;
  background-size: cover;
`

export const ArticleBody = styled.div`
  font-family: ${UI.fonts.family.roboto};
  color: #646464;
  font-size: 19px;
  line-height: 1.6;
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
    display: flex;
    flex-direction: column;
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
  }
  dl,
  ol,
  ul {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`
