"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AnimationImageStyled = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  text-align: center;\n"])));

var AnimationImageInner = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  .image--hover {\n    opacity: 0;\n  }\n  .slick-slide &,\n  & img {\n    height: 100%;\n    width: auto;\n    max-width: none !important;\n    display: block;\n\n    @media screen and (max-width: ", ") {\n      height: calc(100vw - 60px) !important;\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n    }\n  }\n  .slick-slide &,\n  & picture {\n    @media screen and (max-width: ", ") {\n      display: flex !important;\n      justify-content: center !important;\n      align-items: center !important;\n      width: 100% !important;\n    }\n  }\n  &:hover {\n    .image--hover {\n      opacity: 1;\n    }\n    .image--current {\n      opacity: 0;\n    }\n  }\n\n  @media screen and (max-width: ", ") {\n    height: calc(100vw - 60px) !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n  }\n"])), _.UI.breakpoints.mobile, _.UI.breakpoints.mobile, _.UI.breakpoints.mobile);

var ImageStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: calc(100vw / 3 - 30px * 2);\n  max-height: calc(1500px / 3 - 30px * 2);\n  max-width: none !important;\n  transition: 0.5s;\n\n  @media screen and (max-width: ", ") {\n    height: calc(100vw - 60px);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"])), _.UI.breakpoints.mobile);
var ImageFun = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(ImageStyled, props);
})(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: 0.5s;\n  width: 100%;\n"])));
/**
 * Component
 */

var AnimationSwapImage = function AnimationSwapImage(_ref) {
  var image = _ref.image,
      imageHover = _ref.imageHover;
  return /*#__PURE__*/_react["default"].createElement(AnimationImageStyled, null, /*#__PURE__*/_react["default"].createElement(AnimationImageInner, null, /*#__PURE__*/_react["default"].createElement(ImageStyled, {
    src: image,
    className: "image--current"
  }), /*#__PURE__*/_react["default"].createElement(ImageFun, {
    src: imageHover,
    className: "image--hover"
  })));
};

var _default = AnimationSwapImage;
exports["default"] = _default;