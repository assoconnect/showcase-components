"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../..");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BlogMainStyled = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n  justify-content: space-between;\n  @media screen and (max-width: ", ") {\n    flex: auto;\n    max-width: none;\n    width: 100%;\n  }\n"])), _.UI.breakpoints.smallMobile);

var BlogMain = function BlogMain(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(BlogMainStyled, null, children);
};

var _default = BlogMain;
exports["default"] = _default;