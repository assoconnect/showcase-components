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
var SubtitleStyled = (0, _styledComponents["default"])(function (_ref) {
  var tag = _ref.tag,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["tag", "children"]);

  return /*#__PURE__*/(0, _react.createElement)(tag, rest, children);
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: 1.375rem;\n  line-height: 2.1875rem;\n  letter-spacing: 0.5px;\n  text-align: ", ";\n  color: ", ";\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    font-size: 0.95rem;\n    text-align: center;\n    line-height: 1.412rem;\n  }\n"])), _.UI.fonts.family.roboto, _.UI.fonts.weight.light, function (_ref2) {
  var align = _ref2.align;
  return align;
}, function (_ref3) {
  var color = _ref3.color;
  return _.UI.colors[color];
}, _.UI.breakpoints.mobile);
/**
 * Component
 */

var Subtitle = function Subtitle(_ref4) {
  var _ref4$align = _ref4.align,
      align = _ref4$align === void 0 ? 'center' : _ref4$align,
      children = _ref4.children,
      className = _ref4.className,
      _ref4$color = _ref4.color,
      color = _ref4$color === void 0 ? 'lightGrey' : _ref4$color,
      _ref4$tag = _ref4.tag,
      tag = _ref4$tag === void 0 ? 'h5' : _ref4$tag;
  return /*#__PURE__*/_react["default"].createElement(SubtitleStyled, {
    tag: tag,
    align: align,
    color: color,
    className: (0, _bind["default"])(className)
  }, children);
};

Subtitle.displayName = 'Subtitle'; // https://github.com/facebook/react/issues/4915#issuecomment-335803765

var _default = Subtitle;
exports["default"] = _default;