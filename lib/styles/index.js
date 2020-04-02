"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _animations = _interopRequireDefault(require("./animations"));

var _breakpoints = _interopRequireDefault(require("./breakpoints"));

var _colors = _interopRequireDefault(require("./colors"));

var _fonts = _interopRequireDefault(require("./fonts"));

var _shadows = _interopRequireDefault(require("./shadows"));

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* Reset css */\n  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio,video { margin: 0; padding: 0; border: 0; font-size: 100%; vertical-align: baseline;}\n  html, body{height:100%}\n  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display: block;}\n  ol, ul {list-style: none;}\n  a{text-decoration: none; color: inherit; cursor:pointer}\n  blockquote, q {quotes: none;}\n  blockquote:before, blockquote:after, q:before, q:after {content: ''; content: none;}\n  table {border-collapse: collapse; border-spacing: 0;}\n  *{box-sizing: border-box; outline: none}\n  #___gatsby{overflow-x: hidden}\n\n  /* Error */\n  .error {\n    font-size: .8rem;\n    font-weight: ", ";\n    font-family: ", ";\n    color: red;\n  }\n\n  /* Animations */\n  .animation--effect-bouncing,\n  .animation--effect-wobble, \n  .animation--effect-max {\n    transition: 0.3s;    \n  }\n  .animation--start-hover {\n    &:hover .animation--effect-bouncing, &.animation--effect-bouncing:hover {\n      transform: scale(1.1);\n      transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n    }\n    &:hover .animation--effect-wobble, &.animation--effect-wobble:hover {\n      animation: ", " 1s ease-in-out 1;\n    }\n    &:hover .animation--effect-max, &.animation--effect-max:hover {\n      padding-right: 1.9rem;\n    }\n    /* Desktop mode */\n    @media screen and (min-width: ", ") {\n      &:hover .animation--effect-max, &.animation--effect-max:hover {\n        padding-right: 1.9rem;\n      }\n    }\n  }\n\n  /* Desktop / desktop hidden */\n  @media screen and (min-width: ", ") {\n    .hidden-desktop {\n      display:none !important;\n    }\n  }\n  @media screen and (max-width: ", ") {\n    .hidden-mobile {\n      display: none !important;\n    }\n  }\n\n  /* Font size */\n  html, body {\n    font-size: 16px\n  }\n  @media screen and (min-width: 2000px) {\n    html, body {\n      font-size: 17px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), _fonts["default"].weight.normal, _fonts["default"].family.roboto, _animations["default"].wobble, _breakpoints["default"].mobile, _breakpoints["default"].mobile, _breakpoints["default"].mobile);
var _default = {
  animations: _animations["default"],
  breakpoints: _breakpoints["default"],
  colors: _colors["default"],
  fonts: _fonts["default"],
  GlobalStyle: GlobalStyle,
  shadows: _shadows["default"]
};
exports["default"] = _default;