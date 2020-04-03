"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Component
 */
var HeaderHome = function HeaderHome(_ref) {
  var _ref$cards = _ref.cards,
      cards = _ref$cards === void 0 ? [] : _ref$cards,
      _ref$subTitle = _ref.subTitle,
      subTitle = _ref$subTitle === void 0 ? '' : _ref$subTitle,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      videoId = _ref.videoId,
      translations = _ref.translations;
  return /*#__PURE__*/_react["default"].createElement(_.Header, {
    image: "components/headers/header-home/wave-blue.svg",
    videoId: videoId,
    translations: translations
  }, /*#__PURE__*/_react["default"].createElement(_.Box, {
    mt: ['-2rem', '-4.375rem'],
    align: "left",
    width: 1 / 2
  }, /*#__PURE__*/_react["default"].createElement(_.Svg, {
    src: "common/logo/assoconnect",
    width: "125px",
    color: "white",
    className: "hidden-desktop",
    visibleByDefault: true
  }), /*#__PURE__*/_react["default"].createElement(_.Subtitle, {
    align: "left",
    color: "white"
  }, subTitle), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement(_.BigTitle, {
    align: "left",
    tag: "h1"
  }, title), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_.InputButton, {
    translations: translations
  })), /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: 1 / 2,
    overflowRight: true
  }, /*#__PURE__*/_react["default"].createElement(_.HeaderHomeAnimation, {
    cards: cards,
    yado: {
      image: 'yado',
      alt: ''
    }
  })));
};

var _default = HeaderHome;
exports["default"] = _default;