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
var SmallTitleStyled = (0, _styledComponents["default"])(function (_ref) {
  var tag = _ref.tag,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["tag", "children"]);

  return /*#__PURE__*/(0, _react.createElement)(tag, rest, children);
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: 1.412rem;\n  line-height: 1.875rem;\n  letter-spacing: 0.03px;\n  text-align: ", ";\n  color: ", ";\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    font-size: 1.2rem;\n    line-height: 1.8rem;\n    text-align: center;\n  }\n"])), function (_ref2) {
  var font = _ref2.font;
  return _.UI.fonts.family[font];
}, function (_ref3) {
  var font = _ref3.font;
  return font === 'roboto' ? _.UI.fonts.weight.bold : _.UI.fonts.weight.light;
}, function (_ref4) {
  var align = _ref4.align;
  return align;
}, function (_ref5) {
  var color = _ref5.color;
  return _.UI.colors[color];
}, _.UI.breakpoints.mobile);
/**
 * Component
 */

var SmallTitle = function SmallTitle(_ref6) {
  var _ref6$align = _ref6.align,
      align = _ref6$align === void 0 ? 'center' : _ref6$align,
      children = _ref6.children,
      className = _ref6.className,
      _ref6$color = _ref6.color,
      color = _ref6$color === void 0 ? 'blue' : _ref6$color,
      _ref6$font = _ref6.font,
      font = _ref6$font === void 0 ? 'baloo' : _ref6$font,
      _ref6$tag = _ref6.tag,
      tag = _ref6$tag === void 0 ? 'h3' : _ref6$tag,
      id = _ref6.id;
  return /*#__PURE__*/_react["default"].createElement(SmallTitleStyled, {
    tag: tag,
    align: align,
    color: color,
    font: font,
    id: id,
    className: (0, _bind["default"])('title--small', className)
  }, children);
};

SmallTitle.displayName = 'SmallTitle'; // https://github.com/facebook/react/issues/4915#issuecomment-335803765

var _default = SmallTitle;
exports["default"] = _default;