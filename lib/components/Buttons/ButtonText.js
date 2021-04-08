"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _bind = _interopRequireDefault(require("classnames/bind"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var ButtonStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Link, props);
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-weight: ", ";\n  font-family: ", ";\n  font-size: 0.824rem;\n  text-transform: uppercase;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  padding: 0.235rem 0.706rem;\n  transition: all 0.2s ease;\n  color: ", ";\n  cursor: pointer;\n  height: 1.529rem;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    border-radius: 1.647rem;\n    background: ", ";\n    opacity: 0.5;\n    width: 1.529rem;\n    height: 1.529rem;\n    transition: all 0.3s ease;\n  }\n  &:hover::before {\n    width: 100%;\n    opacity: 1;\n  }\n  &:active {\n    transform: scale(0.96);\n  }\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    font-size: 1.05rem;\n  }\n"])), _.UI.fonts.weight.bold, _.UI.fonts.family.roboto, _.UI.colors.extraDarkGrey, _.UI.colors.yellow, _.UI.breakpoints.mobile);

var ButtonTextChildren = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  vertical-align: middle;\n  display: inline-block;\n  line-height: 0.7rem;\n  font-size: 0.8rem;\n"])));

var ButtonTextArrow = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-left: 0.5rem;\n  position: relative;\n\n  svg {\n    vertical-align: middle;\n    display: inline-block;\n  }\n"])));
/**
 * Component
 */

var ButtonText = function ButtonText(_ref) {
  var className = _ref.className,
      href = _ref.href,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? 'en savoir plus' : _ref$children;
  return /*#__PURE__*/_react["default"].createElement(ButtonStyled, {
    className: (0, _bind["default"])('button', 'button--type-text', className),
    href: href,
    isStyled: false
  }, /*#__PURE__*/_react["default"].createElement(ButtonTextChildren, null, children), /*#__PURE__*/_react["default"].createElement(ButtonTextArrow, {
    width: "0.765rem",
    color: "extraDarkGrey",
    src: "common/icon/unicolor/small-arrow"
  }));
};

ButtonText.displayName = 'ButtonText'; // https://github.com/facebook/react/issues/4915#issuecomment-335803765

var _default = ButtonText;
exports["default"] = _default;