"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: 0.5s;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: calc(100vw / 3 - 30px * 2);\n  max-height: calc(1500px / 3 - 30px * 2);\n  max-width: none !important;\n  transition: 0.5s;\n\n  @media screen and (max-width: ", ") {\n    height: calc(100vw - 60px);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  .image--hover {\n    opacity: 0;\n  }\n  .slick-slide &,\n  & img {\n    height: 100%;\n    width: auto;\n    max-width: none !important;\n    display: block;\n  }\n  &:hover {\n    .image--hover {\n      opacity: 1;\n    }\n    .image--current {\n      opacity: 0;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AnimationImageStyled = _styledComponents["default"].div(_templateObject());

var AnimationImageInner = _styledComponents["default"].div(_templateObject2());

var ImageStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject3(), _.UI.breakpoints.mobile);
var ImageFun = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(ImageStyled, props);
})(_templateObject4());
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