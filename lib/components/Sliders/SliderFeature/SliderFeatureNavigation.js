"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  .svg--color-primary {\n    transition: 0.3s;\n  }\n  .slick-active & .svg--color-primary {\n    fill: ", ";\n  }\n  @media screen and (max-width: ", ") {\n    svg {\n      width: 100%;\n      height: auto;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: ", ";\n  color: ", ";\n  transition: 0.3s;\n\n  .slick-active & {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  text-align: center;\n  padding: 1rem;\n  position: relative;\n  cursor: pointer;\n\n  &::after {\n    content: '';\n    height: 3px;\n    width: 0;\n    background-color: ", ";\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transition: 0.3s;\n  }\n\n  &:hover::after {\n    width: 25%;\n    left: 37.5%;\n  }\n  .slick-active &::after {\n    width: 100%;\n    left: 0;\n  }\n\n  @media screen and (max-width: ", ") {\n    border-bottom: 1px solid ", ";\n    padding: 0.5rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SliderFeatureNavigationStyled = _styledComponents["default"].span(_templateObject(), _.UI.colors.turquoise, _.UI.breakpoints.mobile, _.UI.colors.lightGrey);

var SliderFeatureNavigationTitle = _styledComponents["default"].p(_templateObject2(), _.UI.fonts.family.baloo, _.UI.fonts.weight.light, _.UI.colors.middleGrey, _.UI.colors.turquoise);

var SvgStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject3(), _.UI.colors.darkGrey, _.UI.breakpoints.mobile);
/**
 * Component
 */

var SliderFeatureNavigation = function SliderFeatureNavigation(_ref) {
  var image = _ref.image,
      title = _ref.title,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement(SliderFeatureNavigationStyled, {
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(SvgStyled, {
    width: "5.882rem",
    color: "middleGrey",
    src: "common/icon/multicolor/".concat(image.link)
  }), /*#__PURE__*/_react["default"].createElement(SliderFeatureNavigationTitle, {
    className: "hidden-mobile"
  }, title));
};

var _default = SliderFeatureNavigation;
exports["default"] = _default;