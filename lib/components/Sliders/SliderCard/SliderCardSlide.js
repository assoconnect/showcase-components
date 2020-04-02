"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../");

var _reactDisplayName = _interopRequireDefault(require("react-display-name"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  .slick-current & .svg--color-primary {\n    fill: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 1.176rem;\n  background-color: ", ";\n  border: 1px solid ", ";\n  box-shadow: none;\n  text-align: center;\n  transition: 0.3s;\n  padding: calc(2rem + 15px) 1rem;\n\n  .slick-current & {\n    box-shadow: ", ";\n    border-color: transparent;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 2rem 3rem 3rem;\n  cursor: pointer;\n\n  @media screen and (max-width: 1300px) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  @media screen and (max-width: ", ") {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SliderCardStyled = _styledComponents["default"].div(_templateObject(), _.UI.breakpoints.mobile);

var SliderCardSlideInner = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement("div", props);
})(_templateObject2(), _.UI.colors.white, _.UI.colors.lightGrey, _.UI.shadows.slider);
var SliderCardSlideSvgStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject3(), _.UI.colors.darkGrey);
/**
 * Component
 */

var SliderCard = function SliderCard(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(SliderCardStyled, null, /*#__PURE__*/_react["default"].createElement(SliderCardSlideInner, null, _react.Children.map(children, function (child) {
    if (child) {
      switch ((0, _reactDisplayName["default"])(child.type)) {
        case 'ButtonLink':
          return _react["default"].cloneElement(child, {
            button: {
              theme: child.props.button && child.props.button.theme || 'yellow',
              size: child.props.button && child.props.button.size || 'big'
            }
          });

        case 'MiddleTitle':
        case 'SmallTitle':
          return _react["default"].cloneElement(child, {
            color: child.props.color || 'turquoise'
          });

        case 'Image':
          return _react["default"].cloneElement(child, {
            visibleByDefault: true
          });

        case 'Svg':
          return /*#__PURE__*/_react["default"].createElement(SliderCardSlideSvgStyled, _extends({
            color: "middleGrey",
            width: "125px"
          }, child.props));

        default:
          return child;
      }
    }
  })));
};

var _default = SliderCard;
exports["default"] = _default;