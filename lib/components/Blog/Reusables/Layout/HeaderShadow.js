"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HeaderShadowStyled = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderShadowStyled = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: linear-gradient(to bottom, rgb(0 0 0 / 3%), #ffffff 10px);\n  position: absolute;\n  width: 100%;\n  height: 10px;\n  @media screen and (max-width: 1200px) {\n    display: none;\n  }\n"])));

exports.HeaderShadowStyled = HeaderShadowStyled;

var HeaderShadow = function HeaderShadow(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(HeaderShadowStyled, null, children);
};

var _default = HeaderShadow;
exports["default"] = _default;