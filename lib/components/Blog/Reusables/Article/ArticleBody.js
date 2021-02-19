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
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  color: #646464;\n  font-size: 19px;\n  line-height: 1.6;\n  padding-right: 15px;\n  @media screen and (max-width: ", ") {\n    padding: auto;\n  }\n  > div:nth-first-child {\n    max-width: 90vw;\n  }\n  h2 {\n    font-size: 31px;\n    line-height: 40px;\n    font-weight: 900;\n    color: #316bf2;\n  }\n  h3 {\n    font-size: 25px;\n    line-height: 33px;\n    font-weight: 900;\n    color: #4a4a4a;\n  }\n  h4 {\n    font-size: 23px;\n    line-height: 27px;\n    font-weight: 500;\n    color: #4a4a4a;\n  }\n  p {\n    margin: 30px 0;\n    justify-content: center;\n    width: 100%;\n  }\n  a {\n    color: #007bff;\n    text-decoration: none;\n    background-color: transparent;\n  }\n  img {\n    max-width: 100%;\n    height: auto;\n    vertical-align: middle;\n    border-style: none;\n    margin: auto;\n    display: inherit;\n  }\n  dl,\n  ol,\n  ul {\n    margin-top: 0;\n    margin-bottom: 1rem;\n    padding-inline-start: 30px;\n  }\n  li {\n    padding-left: 10px;\n    display: list-item;\n    list-style-type: circle;\n  }\n  li::marker {\n    content: '\u2022' !important;\n  }\n  ul > li > p {\n    margin: 30px 0;\n    display: block;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ArticleBodyStyled = _styledComponents["default"].div(_templateObject(), _.UI.fonts.family.roboto, _.UI.breakpoints.mobile);

var ArticleBody = function ArticleBody(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(ArticleBodyStyled, null, " ", children);
};

var _default = ArticleBody;
exports["default"] = _default;