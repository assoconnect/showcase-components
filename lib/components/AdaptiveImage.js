"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _bind = _interopRequireDefault(require("classnames/bind"));

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  &,\n  .slick-slide & {\n    display: inline-block;\n    max-width: 100%;\n    max-height: 100%;\n    width: ", ";\n    height: ", ";\n    ", "\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: ", ";\n  width: ", ";\n  height: ", ";\n  margin: auto;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var ImageWrapper = _styledComponents["default"].div(_templateObject(), function (_ref) {
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

var ImageStyled = _styledComponents["default"].img(_templateObject2(), function (_ref5) {
  var width = _ref5.width;
  return width;
}, function (_ref6) {
  var height = _ref6.height;
  return height;
}, function (_ref7) {
  var roundShape = _ref7.roundShape;
  return roundShape && 'border-radius:50%';
});
/**
 * Component
 */


var AdaptiveImage = function AdaptiveImage(_ref8) {
  var src = _ref8.src,
      className = _ref8.className,
      _ref8$alt = _ref8.alt,
      alt = _ref8$alt === void 0 ? '' : _ref8$alt,
      _ref8$align = _ref8.align,
      align = _ref8$align === void 0 ? 'center' : _ref8$align,
      _ref8$width = _ref8.width,
      width = _ref8$width === void 0 ? 'auto' : _ref8$width,
      _ref8$height = _ref8.height,
      height = _ref8$height === void 0 ? 'auto' : _ref8$height,
      _ref8$maxDpi = _ref8.maxDpi,
      maxDpi = _ref8$maxDpi === void 0 ? 2 : _ref8$maxDpi,
      _ref8$visibleByDefaul = _ref8.visibleByDefault,
      visibleByDefault = _ref8$visibleByDefaul === void 0 ? false : _ref8$visibleByDefaul,
      inline = _ref8.inline,
      _ref8$roundShape = _ref8.roundShape,
      roundShape = _ref8$roundShape === void 0 ? false : _ref8$roundShape,
      style = _ref8.style;
  return /*#__PURE__*/_react["default"].createElement(ImageWrapper, {
    width: width,
    align: align,
    height: height,
    className: (0, _bind["default"])('image', className),
    inline: inline,
    style: style
  }, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadComponent, {
    threshold: 400,
    visibleByDefault: visibleByDefault
  }, /*#__PURE__*/_react["default"].createElement("picture", null, /*#__PURE__*/_react["default"].createElement("source", {
    type: "image/webp",
    media: "(max-width: 500px)",
    srcSet: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-mobile.webp, ").concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-mobile-2x.webp 2x") + (maxDpi >= 2 ? ", ".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-mobile-4x.webp 4x") : '')
  }), /*#__PURE__*/_react["default"].createElement("source", {
    type: "image/webp",
    srcSet: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, ".webp") + (maxDpi >= 2 ? ", ".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-2x.webp 2x") : '') + (maxDpi >= 4 ? ", ".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-4x.webp 4x") : '')
  }), /*#__PURE__*/_react["default"].createElement("source", {
    media: "(max-width: 500px)",
    srcSet: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-mobile.png, ").concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-mobile-2x.png 2x") + (maxDpi >= 2 ? ", ".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-mobile-4x.png 4x") : '')
  }), /*#__PURE__*/_react["default"].createElement("source", {
    srcSet: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, ".png") + (maxDpi >= 2 ? ", ".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-2x.png 2x") : '') + (maxDpi >= 4 ? ", ".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-4x.png 4x") : '')
  }), /*#__PURE__*/_react["default"].createElement(ImageStyled, {
    src: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, ".png"),
    alt: alt,
    roundShape: roundShape,
    width: width,
    height: height
  }))));
};

AdaptiveImage.displayName = 'AdaptiveImage';
var _default = AdaptiveImage;
exports["default"] = _default;