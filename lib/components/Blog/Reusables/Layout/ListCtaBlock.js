"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListCtaBlockStyled = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../..");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ListCtaBlockStyled = _styledComponents["default"].aside(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n  justify-content: flex-start;\n  align-items: flex-end;\n  display: flex;\n  flex-direction: column;\n  @media screen and (max-width: ", ") {\n    display: none;\n  }\n"])), _.UI.breakpoints.smallMobile);

exports.ListCtaBlockStyled = ListCtaBlockStyled;

var ListCtaBlock = function ListCtaBlock(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(ListCtaBlockStyled, null, children);
};

var _default = ListCtaBlock;
exports["default"] = _default;