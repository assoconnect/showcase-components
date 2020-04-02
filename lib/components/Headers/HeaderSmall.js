"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  img {\n    object-fit: contain;\n  }\n  @media screen and (max-width: ", ") {\n    height: 200px;\n    img {\n      width: auto;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 3rem 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var HeaderStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Section, _extends({
    wave: false
  }, props));
})(_templateObject(), _.UI.colors.blue);
var ImageStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject2(), _.UI.breakpoints.mobile);
/**
 * Component
 */

var HeaderSmall = function HeaderSmall(_ref) {
  var className = _ref.className,
      yado = _ref.yado,
      title = _ref.title,
      subTitle = _ref.subTitle,
      button = _ref.button,
      videoId = _ref.videoId;
  return /*#__PURE__*/_react["default"].createElement(HeaderStyled, {
    className: "".concat(className, " header"),
    videoId: videoId
  }, /*#__PURE__*/_react["default"].createElement(_.Flex, {
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: yado ? 3 / 4 : 1
  }, /*#__PURE__*/_react["default"].createElement(_.BigTitle, {
    align: "left",
    tag: "h1"
  }, title), subTitle && /*#__PURE__*/_react["default"].createElement(_.Subtitle, {
    color: "white",
    align: "left"
  }, subTitle), button && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.Space, null), /*#__PURE__*/_react["default"].createElement(_.ButtonLink, {
    theme: button.theme,
    href: button.href
  }, button.text)), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "big"
  }), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "big"
  })), yado && /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: 1 / 4
  }, /*#__PURE__*/_react["default"].createElement(_.Space, {
    className: "hidden-desktop"
  }), /*#__PURE__*/_react["default"].createElement(ImageStyled, {
    src: yado.src,
    alt: yado.alt,
    maxDpi: 1,
    height: "20.5rem"
  }), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "big",
    className: "hidden-mobile"
  }))));
};

var _default = HeaderSmall;
exports["default"] = _default;