"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("./");

var _reactDisplayName = _interopRequireDefault(require("react-display-name"));

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
var CardStyled = (0, _styledComponents["default"])(function (_ref) {
  var children = _ref.children,
      itemId = _ref.itemId,
      tag = _ref.tag,
      minHeight = _ref.minHeight,
      align = _ref.align,
      rest = _objectWithoutProperties(_ref, ["children", "itemId", "tag", "minHeight", "align"]);

  return /*#__PURE__*/(0, _react.createElement)(tag, rest, children);
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-height: ", ";\n  height: calc(100% - 2.4rem);\n  padding: 1.875rem;\n  transition: all linear 0.3s;\n  border-radius: 1.647rem;\n  text-align: ", ";\n  box-shadow: ", ";\n  background: ", ";\n  margin: 1.2rem 0;\n  display: block;\n  text-decoration: none !important;\n\n  @media screen and (min-width: ", ") {\n    &.card--hover-animation {\n      border: 1px solid ", ";\n      box-shadow: none;\n\n      &:hover {\n        box-shadow: ", ";\n        border-color: transparent;\n        .text {\n          ", ";\n        }\n        .svg--color-primary {\n          ", ";\n        }\n      }\n      .text {\n        transition: color linear 0.3s;\n      }\n      svg * {\n        transition: fill linear 0.3s;\n      }\n    }\n  }\n"])), function (_ref2) {
  var minHeight = _ref2.minHeight;
  return minHeight;
}, function (_ref3) {
  var align = _ref3.align;
  return align;
}, function (_ref4) {
  var theme = _ref4.theme;
  return _.UI.shadows[theme === 'blue' ? 'slider' : 'sliderLight'];
}, function (_ref5) {
  var theme = _ref5.theme;
  return _.UI.colors[theme];
}, _.UI.breakpoints.mobile, _.UI.colors.lightGrey, function (_ref6) {
  var theme = _ref6.theme;
  return _.UI.shadows[theme === 'blue' ? 'slider' : 'sliderLight'];
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme === 'white' && "color: ".concat(_.UI.colors.darkGrey);
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme === 'white' && "fill: ".concat(_.UI.colors.darkGrey);
});
/**
 * Component
 */

var Card = function Card(_ref9) {
  var _ref9$align = _ref9.align,
      align = _ref9$align === void 0 ? 'center' : _ref9$align,
      children = _ref9.children,
      hoverAnimation = _ref9.hoverAnimation,
      _ref9$minHeight = _ref9.minHeight,
      minHeight = _ref9$minHeight === void 0 ? 'auto' : _ref9$minHeight,
      _ref9$theme = _ref9.theme,
      theme = _ref9$theme === void 0 ? 'white' : _ref9$theme,
      className = _ref9.className,
      _ref9$href = _ref9.href,
      href = _ref9$href === void 0 ? null : _ref9$href;
  return /*#__PURE__*/_react["default"].createElement(CardStyled, {
    align: align,
    theme: theme,
    tag: href ? _.Link : 'div',
    minHeight: minHeight,
    className: (0, _bind["default"])(className, {
      'card--hover-animation': hoverAnimation
    }),
    href: href
  }, theme === 'blue' ? _react.Children.map(children, function (child) {
    if (child) {
      switch ((0, _reactDisplayName["default"])(child.type)) {
        case 'MiddleTitle':
        case 'SmallTitle':
        case 'Text':
        case 'BulletList':
        case 'Svg':
          return /*#__PURE__*/_react["default"].cloneElement(child, {
            color: child.props.color || 'white'
          });

        case 'Image':
          return /*#__PURE__*/_react["default"].cloneElement(child, {
            theme: 'blue'
          });

        default:
          return child;
      }
    }
  }) : _react.Children.map(children, function (child) {
    if (child) {
      switch ((0, _reactDisplayName["default"])(child.type)) {
        case 'MiddleTitle':
        case 'SmallTitle':
          return /*#__PURE__*/_react["default"].cloneElement(child, {
            color: child.props.color || 'turquoise'
          });

        case 'Text':
        case 'Svg':
          return /*#__PURE__*/_react["default"].cloneElement(child, {
            color: child.props.color || 'middleGrey'
          });

        default:
          return child;
      }
    }
  }));
};

var _default = Card;
exports["default"] = _default;