"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _grid = require("@rebass/grid");

var _ = require(".");

var _reactDisplayName = _interopRequireDefault(require("react-display-name"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  text-align: ", ";\n  ", ";\n\n  @media screen and (max-width: 1700px) {\n    ", ";\n  }\n  @media screen and (max-width: 1600px) {\n    ", ";\n  }\n  @media screen and (max-width: ", ") {\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var setBoxOverflow = function setBoxOverflow(_ref, overflowValue) {
  var overflowLeft = _ref.overflowLeft,
      overflowRight = _ref.overflowRight;

  if (overflowLeft) {
    return "\n      width: calc(100% + ".concat(overflowValue, "px);\n      margin-left: -").concat(overflowValue, "px;\n    ");
  } else if (overflowRight) {
    return "\n      width: calc(100% + ".concat(overflowValue, "px);\n      margin-right: -").concat(overflowValue, "px;\n    ");
  }
};

var BoxOverflow = _styledComponents["default"].div(_templateObject(), function (_ref2) {
  var align = _ref2.align;
  return align;
}, function (props) {
  return setBoxOverflow(props, 200);
}, function (props) {
  return setBoxOverflow(props, 150);
}, function (props) {
  return setBoxOverflow(props, 75);
}, _.UI.breakpoints.mobile, function (props) {
  return setBoxOverflow(props, 0);
});
/**
 * Component
 */


var BoxCustom = function BoxCustom(_ref3) {
  var _ref3$align = _ref3.align,
      align = _ref3$align === void 0 ? 'left' : _ref3$align,
      children = _ref3.children,
      overflowLeft = _ref3.overflowLeft,
      overflowRight = _ref3.overflowRight,
      wave = _ref3.wave,
      width = _ref3.width,
      rest = _objectWithoutProperties(_ref3, ["align", "children", "overflowLeft", "overflowRight", "wave", "width"]);

  var widthFilter;

  if (Array.isArray(width)) {
    widthFilter = width;
  } else {
    widthFilter = [1, width];
  } // Do not use px because it has a higher priority than pr and pl


  return /*#__PURE__*/_react["default"].createElement(_grid.Box, _extends({
    width: widthFilter,
    pl: overflowLeft || overflowRight ? [0, '2.5rem'] : '2.5rem',
    pr: overflowLeft || overflowRight ? [0, '2.5rem'] : '2.5rem'
  }, rest), /*#__PURE__*/_react["default"].createElement(BoxOverflow, {
    overflowLeft: overflowLeft,
    overflowRight: overflowRight,
    align: align
  }, _react.Children.map(children, function (child) {
    if (child) {
      var props = {};

      if (wave === 'blue') {
        switch ((0, _reactDisplayName["default"])(child.type)) {
          case 'Arrow':
          case 'Text':
          case 'MiddleTitle':
          case 'SmallTitle':
          case 'SliderTestimony':
          case 'SliderTestimonyCompact':
            props.color = child.props.color || 'white';
            break;

          case 'Image':
            props.theme = 'blue';
            break;

          default:
        }
      } else {
        switch ((0, _reactDisplayName["default"])(child.type)) {
          case 'Subtitle':
            props.color = child.props.color || 'middleGrey';
            break;

          case 'MiddleTitle':
            props.color = child.props.color || 'blue';
            break;

          default:
        }
      }

      return _react["default"].cloneElement(child, props);
    }
  })));
};

var _default = BoxCustom;
exports["default"] = _default;