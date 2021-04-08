"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../");

var _grid = require("@rebass/grid");

var _validators = require("../../../utils/validators");

var _Space = _interopRequireDefault(require("../../Space"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SliderFeatureSlideStyled = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  @media screen and (max-width: ", ") {\n    padding: 1rem;\n    padding-bottom: 3rem;\n  }\n"])), _.UI.breakpoints.mobile);

var SliderFeatureSlideCard = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_grid.Flex, props);
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-items: center;\n\n  @media screen and (max-width: ", ") {\n    box-shadow: ", ";\n    border-radius: 1.176rem 1.176rem;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 1.765rem;\n    position: relative;\n\n    & .title--small {\n      text-align: center;\n    }\n  }\n"])), _.UI.breakpoints.mobile, _.UI.shadows.slider);
var SliderFeatureSlideButton = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.ButtonText, props);
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 1.3rem;\n"])));
var SliderFeatureSlideIco = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  svg {\n    max-width: 125px;\n  }\n"])));
/**
 * Component
 */

var SliderFeatureSlide = function SliderFeatureSlide(_ref) {
  var title = _ref.title,
      image = _ref.image,
      buttonText = _ref.buttonText,
      href = _ref.href,
      text = _ref.text;

  var _checkSize = (0, _validators.checkSize)(text, 450),
      error = _checkSize.error,
      response = _checkSize.response;

  return /*#__PURE__*/_react["default"].createElement(SliderFeatureSlideStyled, null, /*#__PURE__*/_react["default"].createElement(SliderFeatureSlideCard, null, /*#__PURE__*/_react["default"].createElement(_grid.Box, {
    width: [1, 1 / 4],
    mx: [0, '4rem'],
    my: [0, '2rem'],
    mt: ['1rem', 0]
  }, /*#__PURE__*/_react["default"].createElement(SliderFeatureSlideIco, {
    src: "common/icon/multicolor/".concat(image.link),
    className: "icon",
    align: "center"
  })), /*#__PURE__*/_react["default"].createElement(_grid.Box, {
    mr: [0, '4rem'],
    my: [0, '2rem'],
    mt: ['1rem', 0]
  }, /*#__PURE__*/_react["default"].createElement(_Space["default"], {
    size: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_.SmallTitle, {
    color: "turquoise",
    align: "left"
  }, title), /*#__PURE__*/_react["default"].createElement(_.Text, {
    align: "left",
    color: "darkGrey"
  }, error ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "error"
  }, response) : response), href && /*#__PURE__*/_react["default"].createElement(SliderFeatureSlideButton, {
    href: href
  }, buttonText))));
};

var _default = SliderFeatureSlide;
exports["default"] = _default;