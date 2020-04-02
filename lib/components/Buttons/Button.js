"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("../");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 2.941rem;\n  outline-style: none;\n  text-transform: uppercase;\n  cursor: pointer;\n  font-weight: ", ";\n  font-family: ", ";\n\n  /* Sizes */\n  &.button--size-big {\n    font-size: 1rem;\n    padding: 0.647rem 1.765rem;\n  }\n  &.button--size-small {\n    font-size: 0.824rem;\n    padding: 0.471rem 1.176rem;\n  }\n  /* Themes */\n  &.button--theme-yellow {\n    background-color: ", ";\n    color: ", ";\n    border: 0.5px solid ", ";\n  }\n  &.button--theme-white {\n    background-color: ", ";\n    color: ", ";\n    border: 0.5px solid ", ";\n  }\n  &.button--theme-blue {\n    background-color: ", ";\n    color: ", ";\n    border: 0.5px solid ", ";\n  }\n  &.button--theme-line-white {\n    font-weight: ", ";\n    background-color: transparent;\n    color: ", ";\n    border: 1px solid ", ";\n  }\n  &.button--theme-line-middleGrey {\n    font-weight: ", ";\n    background-color: transparent;\n    color: ", ";\n    border: 1px solid ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: ", ";\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    text-align: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var ButtonWrapper = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var align = _ref.align;
  return align;
}, _.UI.breakpoints.mobile);

var ButtonStyled = _styledComponents["default"].button(_templateObject2(), _.UI.fonts.weight.bold, _.UI.fonts.family.roboto, _.UI.colors.yellow, _.UI.colors.white, _.UI.colors.yellow, _.UI.colors.white, _.UI.colors.yellow, _.UI.colors.white, _.UI.colors.blue, _.UI.colors.white, _.UI.colors.blue, _.UI.fonts.weight.normal, _.UI.colors.white, _.UI.colors.white, _.UI.fonts.weight.normal, _.UI.colors.middleGrey, _.UI.colors.middleGrey);
/**
 * Component
 */


var Button = function Button(_ref2) {
  var children = _ref2.children,
      animationOff = _ref2.animationOff,
      className = _ref2.className,
      size = _ref2.size,
      theme = _ref2.theme,
      type = _ref2.type,
      _ref2$align = _ref2.align,
      align = _ref2$align === void 0 ? 'left' : _ref2$align;
  return /*#__PURE__*/_react["default"].createElement(ButtonWrapper, {
    align: align,
    className: (0, _bind["default"])(className)
  }, /*#__PURE__*/_react["default"].createElement(ButtonStyled, {
    type: type,
    className: (0, _bind["default"])('button', 'button--type-color', "button--size-".concat(size || 'big'), "button--theme-".concat(theme || 'yellow'), {
      'animation--start-hover animation--effect-bouncing': !animationOff
    })
  }, children));
};

Button.displayName = 'Button'; // https://github.com/facebook/react/issues/4915#issuecomment-335803765

var _default = Button;
exports["default"] = _default;