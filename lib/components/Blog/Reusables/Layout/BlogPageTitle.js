"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BlogPageTitleStyled = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  padding: 10px 0px;\n  font-size: 36px;\n  line-height: 48px;\n  font-weight: 900;\n  color: #9b9b9b;\n  width: 100%;\n  padding-right: 15px;\n  @media screen and (max-width: ", ") {\n    padding-right: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BlogPageTitleStyled = _styledComponents["default"].h1(_templateObject(), _.UI.fonts.family.roboto, _.UI.breakpoints.mobile);

exports.BlogPageTitleStyled = BlogPageTitleStyled;

var BlogPageTitle = function BlogPageTitle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(BlogPageTitleStyled, null, children);
};

var _default = BlogPageTitle;
exports["default"] = _default;