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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: 2.059rem;\n  line-height: 3rem;\n  letter-spacing: 0.5px;\n  text-align: ", ";\n  color: ", ";\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    font-size: 1.5rem;\n    line-height: 2.3rem;\n    text-align: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var MiddleTitleStyled = (0, _styledComponents["default"])(function (_ref) {
  var tag = _ref.tag,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["tag", "children"]);

  return (0, _react.createElement)(tag, rest, children);
})(_templateObject(), function (_ref2) {
  var font = _ref2.font;
  return _.UI.fonts.family[font];
}, _.UI.fonts.weight.light, function (_ref3) {
  var align = _ref3.align;
  return align;
}, function (_ref4) {
  var color = _ref4.color;
  return _.UI.colors[color];
}, _.UI.breakpoints.mobile);
/**
 * Component
 */

var MiddleTitle = function MiddleTitle(_ref5) {
  var _ref5$align = _ref5.align,
      align = _ref5$align === void 0 ? 'center' : _ref5$align,
      children = _ref5.children,
      className = _ref5.className,
      _ref5$color = _ref5.color,
      color = _ref5$color === void 0 ? 'blue' : _ref5$color,
      _ref5$font = _ref5.font,
      font = _ref5$font === void 0 ? 'baloo' : _ref5$font,
      _ref5$tag = _ref5.tag,
      tag = _ref5$tag === void 0 ? 'h2' : _ref5$tag,
      id = _ref5.id;
  return /*#__PURE__*/_react["default"].createElement(MiddleTitleStyled, {
    tag: tag,
    align: align,
    color: color,
    font: font,
    id: id,
    className: (0, _bind["default"])('title--middle', className)
  }, children);
};

MiddleTitle.displayName = 'MiddleTitle'; // https://github.com/facebook/react/issues/4915#issuecomment-335803765

var _default = MiddleTitle;
exports["default"] = _default;