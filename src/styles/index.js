import animations from './animations'
import breakpoints from './breakpoints'
import colors from './colors'
import fonts from './fonts'
import shadows from './shadows'
import { createGlobalStyle } from 'styled-components'
import './fonts/stylesheets.css'

const GlobalStyle = createGlobalStyle`
  /* Reset css */
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio,video { margin: 0; padding: 0; border: 0; font-size: 100%; vertical-align: baseline;}
  html, body{height:100%}
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display: block;}
  ol, ul {list-style: none;}
  a{text-decoration: none; color: inherit; cursor:pointer}
  blockquote, q {quotes: none;}
  blockquote:before, blockquote:after, q:before, q:after {content: ''; content: none;}
  table {border-collapse: collapse; border-spacing: 0;}
  *{box-sizing: border-box; outline: none}
  #___gatsby{overflow-x: hidden}

  /* Error */
  .error {
    font-size: .8rem;
    font-weight: ${fonts.weight.normal};
    font-family: ${fonts.family.roboto};
    color: red;
  }

  /* Animations */
  .animation--effect-bouncing,
  .animation--effect-wobble, 
  .animation--effect-max {
    transition: 0.3s;    
  }
  .animation--start-hover {
    &:hover .animation--effect-bouncing, &.animation--effect-bouncing:hover {
      transform: scale(1.1);
      transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    }
    &:hover .animation--effect-wobble, &.animation--effect-wobble:hover {
      animation: ${animations.wobble} 1s ease-in-out 1;
    }
    &:hover .animation--effect-max, &.animation--effect-max:hover {
      padding-right: 1.9rem;
    }
    /* Desktop mode */
    @media screen and (min-width: ${breakpoints.mobile}) {
      &:hover .animation--effect-max, &.animation--effect-max:hover {
        padding-right: 1.9rem;
      }
    }
  }

  /* Desktop / desktop hidden */
  @media screen and (min-width: ${breakpoints.mobile}) {
    .hidden-desktop {
      display:none !important;
    }
  }
  @media screen and (max-width: ${breakpoints.mobile}) {
    .hidden-mobile {
      display: none !important;
    }
  }

  /* Font size */
  html, body {
    font-size: 16px
  }
  @media screen and (min-width: 2000px) {
    html, body {
      font-size: 17px;
    }
  }
`

export default {
  animations,
  breakpoints,
  colors,
  fonts,
  GlobalStyle,
  shadows,
}
