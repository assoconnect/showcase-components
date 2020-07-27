"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0;\n  right: 2rem;\n  height: 20.5rem;\n  @media screen and (max-width: ", ") {\n    position: absolute;\n    bottom: -1rem;\n    height: 12rem;\n    right: -1rem;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @media screen and (max-width: ", ") {\n    padding-top: 1.25rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var HeaderSpace = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Space, props);
})(_templateObject(), _.UI.breakpoints.mobile);

var SpanStyled = _styledComponents["default"].div(_templateObject2());

var Yado = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject3(), _.UI.breakpoints.mobile);
/**
 * Component
 */

var HeaderBig = function HeaderBig(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
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
  return /*#__PURE__*/_react["default"].createElement(_.Header, {
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
    color: "white"
  }, subTitle), /*#__PURE__*/_react["default"].createElement(HeaderSpace, {
    size: "medium"
  }), field ? /*#__PURE__*/_react["default"].createElement(_.InputButton, {
    className: classNameForm,
    translations: translations
  }) : /*#__PURE__*/_react["default"].createElement(_.ButtonLink, {
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
  })));
};

var _default = HeaderBig;
exports["default"] = _default;