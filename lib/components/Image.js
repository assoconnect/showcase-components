"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

var _reactRetinaImage = _interopRequireDefault(require("react-retina-image"));

var _bind = _interopRequireDefault(require("classnames/bind"));

var _ = require(".");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var ImageWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  text-align: ", ";\n  width: ", ";\n  height: ", ";\n  margin: auto;\n  ", "\n"])), function (_ref) {
  var align = _ref.align;
  return align;
}, function (_ref2) {
  var width = _ref2.width;
  return width;
}, function (_ref3) {
  var height = _ref3.height;
  return height;
}, function (_ref4) {
  var inline = _ref4.inline;
  return inline && 'display: inline-block; vertical-align:middle;';
});

var ImageStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_reactRetinaImage["default"], _extends({}, props, {
    retinaImageSuffix: ""
  }));
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  &,\n  .slick-slide & {\n    display: inline-block;\n    max-width: 100%;\n    max-height: 100%;\n    width: auto;\n    height: auto;\n  }\n"])));
var ImageStyledRound = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_reactRetinaImage["default"], _extends({}, props, {
    retinaImageSuffix: ""
  }));
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  &,\n  .slick-slide & {\n    display: block;\n    max-width: 100%;\n    max-height: 100%;\n  }\n"])));

var ImageWrapperRound = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: ", ";\n"])), function (_ref5) {
  var width = _ref5.width,
      height = _ref5.height;
  return width || height;
}, function (_ref6) {
  var width = _ref6.width,
      height = _ref6.height;
  return width || height;
}, function (_ref7) {
  var theme = _ref7.theme;
  return _.UI.shadows[theme === 'blue' ? 'slider' : 'sliderLight'];
});
/**
 * Component
 */


var Image = function Image(_ref8) {
  var className = _ref8.className,
      src = _ref8.src,
      _ref8$alt = _ref8.alt,
      alt = _ref8$alt === void 0 ? '' : _ref8$alt,
      _ref8$align = _ref8.align,
      align = _ref8$align === void 0 ? 'center' : _ref8$align,
      _ref8$width = _ref8.width,
      width = _ref8$width === void 0 ? 'auto' : _ref8$width,
      _ref8$height = _ref8.height,
      height = _ref8$height === void 0 ? 'auto' : _ref8$height,
      _ref8$roundShape = _ref8.roundShape,
      roundShape = _ref8$roundShape === void 0 ? false : _ref8$roundShape,
      _ref8$theme = _ref8.theme,
      theme = _ref8$theme === void 0 ? 'white' : _ref8$theme,
      _ref8$visibleByDefaul = _ref8.visibleByDefault,
      visibleByDefault = _ref8$visibleByDefaul === void 0 ? false : _ref8$visibleByDefaul,
      inline = _ref8.inline;

  if (roundShape) {
    return /*#__PURE__*/_react["default"].createElement(ImageWrapper, {
      align: align,
      className: (0, _bind["default"])('image', className),
      inline: inline
    }, /*#__PURE__*/_react["default"].createElement(ImageWrapperRound, {
      width: width,
      height: height,
      theme: theme
    }, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadComponent, {
      threshold: 400
    }, /*#__PURE__*/_react["default"].createElement(ImageStyledRound, {
      src: src,
      alt: alt
    }))));
  } else {
    return /*#__PURE__*/_react["default"].createElement(ImageWrapper, {
      width: width,
      align: align,
      height: height,
      className: (0, _bind["default"])('image', className),
      inline: inline
    }, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadComponent, {
      threshold: 400,
      visibleByDefault: visibleByDefault
    }, /*#__PURE__*/_react["default"].createElement(ImageStyled, {
      src: src,
      alt: alt
    })));
  }
};

Image.displayName = 'Image';
var _default = Image;
exports["default"] = _default;