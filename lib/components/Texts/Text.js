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

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var TextStyled = (0, _styledComponents["default"])(function (_ref) {
  var tag = _ref.tag,
      children = _ref.children,
      light = _ref.light,
      rest = _objectWithoutProperties(_ref, ["tag", "children", "light"]);

  return /*#__PURE__*/(0, _react.createElement)(tag, rest, children);
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: ", ";\n  text-align: ", ";\n  color: ", ";\n\n  &.text--size-small {\n    font-size: 0.824rem;\n    font-weight: ", ";\n  }\n  &.text--size-big {\n    font-size: 1rem;\n    font-weight: ", ";\n  }\n"])), _.UI.fonts.family.roboto, function (_ref2) {
  var align = _ref2.align;
  return align;
}, function (_ref3) {
  var color = _ref3.color;
  return _.UI.colors[color];
}, _.UI.fonts.weight.light, function (_ref4) {
  var light = _ref4.light;
  return _.UI.fonts.weight[light ? 'light' : 'normal'];
});
/**
 * Component
 */

var Text = function Text(_ref5) {
  var _ref5$align = _ref5.align,
      align = _ref5$align === void 0 ? 'left' : _ref5$align,
      children = _ref5.children,
      className = _ref5.className,
      _ref5$color = _ref5.color,
      color = _ref5$color === void 0 ? 'middleGrey' : _ref5$color,
      _ref5$size = _ref5.size,
      size = _ref5$size === void 0 ? 'big' : _ref5$size,
      _ref5$tag = _ref5.tag,
      tag = _ref5$tag === void 0 ? 'div' : _ref5$tag,
      _ref5$light = _ref5.light,
      light = _ref5$light === void 0 ? false : _ref5$light;

  /**
   * Output
   */
  return /*#__PURE__*/_react["default"].createElement(TextStyled, {
    tag: tag,
    align: align,
    color: color,
    light: light,
    className: (0, _bind["default"])('text', "text--size-".concat(size), className)
  }, children);
};

Text.displayName = 'Text'; // https://github.com/facebook/react/issues/4915#issuecomment-335803765

var _default = Text;
exports["default"] = _default;