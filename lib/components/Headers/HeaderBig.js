"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var HeaderSpace = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Space, props);
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  @media screen and (max-width: ", ") {\n    padding-top: 1.25rem;\n  }\n"])), _.UI.breakpoints.mobile);

var SpanStyled = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n  width: 100%;\n"])));

var Yado = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0;\n  right: 2rem;\n  height: 20.5rem;\n  @media screen and (max-width: ", ") {\n    position: absolute;\n    bottom: -1rem;\n    height: 12rem;\n    right: -1rem;\n  }\n"])), _.UI.breakpoints.mobile);
/**
 * Component
 */

var HeaderBig = function HeaderBig(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      _ref$killerArgument = _ref.killerArgument,
      killerArgument = _ref$killerArgument === void 0 ? null : _ref$killerArgument,
      image = _ref.image,
      wave = _ref.wave,
      yado = _ref.yado,
      videoId = _ref.videoId,
      _ref$button = _ref.button,
      button = _ref$button === void 0 ? {
    href: '/creation-plateforme/',
    children: 'Je commence un essai'
  } : _ref$button,
      field = _ref.field,
      classNameForm = _ref.classNameForm,
      translations = _ref.translations;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react["default"].createElement("link", {
    rel: "preload",
    as: "image",
    href: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(image.src, "-mobile.webp"),
    imagesrcset: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(image.src, "-mobile-2x.webp x2, ").concat(process.env.GATSBY_CDN_HOST, "/").concat(image.src, "-mobile-4x.webp 4x"),
    media: "(max-width: 500px)"
  }), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "preload",
    as: "image",
    href: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(image.src, "-mobile.png"),
    imagesrcset: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(image.src, "-mobile-2x.png x2, ").concat(process.env.GATSBY_CDN_HOST, "/").concat(image.src, "-mobile-4x.png 4x"),
    media: "(max-width: 500px)"
  }), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "preload",
    as: "image",
    href: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(image.src, ".webp"),
    imagesrcset: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(image.src, "-2x.webp x2, ").concat(process.env.GATSBY_CDN_HOST, "/").concat(image.src, "-4x.webp 4x")
  }), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "preload",
    as: "image",
    href: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(image.src, ".png"),
    imagesrcset: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(image.src, "-2x.png x2, ").concat(process.env.GATSBY_CDN_HOST, "/").concat(image.src, "-4x.png 4x")
  })), /*#__PURE__*/_react["default"].createElement(_.Header, {
    image: wave,
    videoId: videoId,
    translations: translations
  }, /*#__PURE__*/_react["default"].createElement(_.Box, {
    align: "left",
    width: 1 / 2
  }, /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "big",
    className: "hidden-desktop"
  }), /*#__PURE__*/_react["default"].createElement(_.BigTitle, {
    align: "left",
    tag: "h1"
  }, title), /*#__PURE__*/_react["default"].createElement(HeaderSpace, {
    size: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_.Subtitle, {
    align: "left",
    color: "white",
    tag: "div"
  }, subTitle), /*#__PURE__*/_react["default"].createElement(HeaderSpace, {
    size: "medium"
  }), field ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.InputButton, {
    className: classNameForm,
    translations: translations
  }), killerArgument && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    color: "white"
  }, killerArgument))) : /*#__PURE__*/_react["default"].createElement(_.ButtonLink, {
    href: button.href,
    button: {
      size: 'big'
    }
  }, button.children), /*#__PURE__*/_react["default"].createElement(HeaderSpace, {
    size: "medium",
    className: "hidden-desktop"
  })), /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: 1 / 2,
    overflowRight: true
  }, yado ? /*#__PURE__*/_react["default"].createElement(SpanStyled, null, /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, {
    src: image.src,
    alt: image.alt
  }), /*#__PURE__*/_react["default"].createElement(Yado, {
    src: "common/yado/".concat(yado.image),
    alt: yado.alt,
    visibleByDefault: true
  })) : /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, {
    src: image.src,
    alt: image.alt
  }))));
};

var _default = HeaderBig;
exports["default"] = _default;