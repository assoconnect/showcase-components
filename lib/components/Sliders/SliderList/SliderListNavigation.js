"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SliderListNavigationStyled = _styledComponents["default"].span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-block;\n  text-align: center;\n  padding: 1rem;\n  position: relative;\n  cursor: pointer;\n  border-bottom: 1px solid ", ";\n\n  &:hover::after {\n    width: 90%;\n    left: 5%;\n  }\n  &::after {\n    content: '';\n    height: 3px;\n    width: 0;\n    background-color: ", ";\n    position: absolute;\n    bottom: -1px;\n    left: 50%;\n    transition: 0.3s;\n\n    .slick-active & {\n      width: 100%;\n      left: 0;\n      background-color: ", ";\n    }\n  }\n\n  @media screen and (max-width: ", ") {\n    border: none;\n    &::after {\n      content: none;\n    }\n    &::before {\n      height: 12px;\n      width: 12px;\n      border-radius: 50%;\n      background-color: ", ";\n      content: '';\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      transition: 0.3s;\n\n      .slick-active & {\n        background-color: ", ";\n      }\n    }\n  }\n"])), _.UI.colors.lightGrey, _.UI.colors.lightGrey, _.UI.colors.turquoise, _.UI.breakpoints.mobile, _.UI.colors.lightGrey, _.UI.colors.darkGrey);

var SliderListNavigationSmallTitleStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.SmallTitle, props);
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  transition: 0.3s;\n\n  .slick-active & {\n    color: ", ";\n  }\n"])), _.UI.colors.turquoise);
/**
 * Component
 */

var SliderListNavigation = function SliderListNavigation(_ref) {
  var title = _ref.title,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement(SliderListNavigationStyled, {
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(SliderListNavigationSmallTitleStyled, {
    font: "roboto",
    color: "lightGrey",
    className: "hidden-mobile"
  }, title));
};

var _default = SliderListNavigation;
exports["default"] = _default;