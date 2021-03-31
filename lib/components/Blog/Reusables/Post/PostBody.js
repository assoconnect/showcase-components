"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  color: #646464;\n  font-size: 19px;\n  line-height: 1.6;\n  padding-right: 15px;\n  @media screen and (max-width: ", ") {\n    padding: auto;\n  }\n  > div:nth-first-child {\n    max-width: 90vw;\n  }\n  h2 {\n    font-size: 31px;\n    line-height: 40px;\n    font-weight: 900;\n    color: #316bf2;\n  }\n  h3 {\n    font-size: 25px;\n    line-height: 33px;\n    font-weight: 900;\n    color: #4a4a4a;\n  }\n  h4 {\n    font-size: 23px;\n    line-height: 27px;\n    font-weight: 500;\n    color: #4a4a4a;\n  }\n  p {\n    margin: 30px 0;\n    justify-content: center;\n    width: 100%;\n  }\n  a {\n    color: #007bff;\n    text-decoration: none;\n    background-color: transparent;\n  }\n  img {\n    max-width: 100%;\n    height: auto;\n    vertical-align: middle;\n    border-style: none;\n    margin: auto;\n    display: inherit;\n  }\n  dl,\n  ol,\n  ul {\n    margin-top: 0;\n    margin-bottom: 1rem;\n    padding-inline-start: 30px;\n  }\n  li {\n    padding-left: 10px;\n    display: list-item;\n    list-style-type: circle;\n  }\n  li::marker {\n    content: '\u2022' !important;\n  }\n  ul > li > p {\n    margin: 30px 0;\n    display: block;\n  }\n  button {\n    all: inherit;\n    margin: 20px auto;\n    background: rgb(53, 117, 255) !important;\n    color: rgb(255, 255, 255) !important;\n    -webkit-font-smoothing: antialiased !important;\n    cursor: pointer !important;\n    -moz-user-select: none !important;\n    -webkit-user-select: none !important;\n    -o-user-select: none !important;\n    user-select: none !important;\n    display: inline-block !important;\n    font-weight: normal !important;\n    text-align: center !important;\n    text-decoration: none !important;\n    -moz-transition: all 0.4s ease !important;\n    -webkit-transition: all 0.4s ease !important;\n    -o-transition: all 0.4s ease !important;\n    background: rgb(49, 107, 242) !important;\n    border-radius: 6px !important;\n    border-width: 0px !important;\n    color: white !important;\n    font-family: sans-serif !important;\n    height: auto !important;\n    transition: all 0.4s ease !important;\n    padding: 6px 18px !important;\n    text-shadow: none !important;\n    width: auto !important;\n    font-size: 24px !important;\n    line-height: 1.5em !important;\n    box-sizing: content-box !important;\n    vertical-align: middle;\n  }\n  button > a {\n    color: white;\n  }\n  blockquote {\n    background: #fff2cc !important;\n    font-weight: 600 !important;\n    border: none !important;\n    padding: 20px !important;\n  }\n  blockquote p {\n    margin: 0 !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PostBodyStyled = _styledComponents["default"].div(_templateObject(), _.UI.fonts.family.roboto, _.UI.breakpoints.mobile);

var PostBody = function PostBody(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(PostBodyStyled, null, " ", children);
};

var _default = PostBody;
exports["default"] = _default;