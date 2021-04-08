"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require("../");

var _react = _interopRequireWildcard(require("react"));

var _VideoImage = _interopRequireDefault(require("../Video/VideoImage"));

var _translations = require("../../utils/translations");

var _reactHelmet = require("react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component
 */
var HeaderHome = function HeaderHome(_ref) {
  var image = _ref.image,
      buttonHref = _ref.buttonHref,
      _ref$killerArgument = _ref.killerArgument,
      killerArgument = _ref$killerArgument === void 0 ? null : _ref$killerArgument,
      _ref$subTitle = _ref.subTitle,
      subTitle = _ref$subTitle === void 0 ? '' : _ref$subTitle,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      videoId = _ref.videoId,
      translations = _ref.translations,
      hubspotId = _ref.hubspotId;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      wistiaPopoverVisible = _useState2[0],
      setWistiaPopoverVisible = _useState2[1];
  /**
   * Handle click events on VideoButtonWrapper component.
   */


  var handleVideoButtonWrapperClick = function handleVideoButtonWrapperClick() {
    // necessary to force rerendering of the <Video> component, Wistia "popoverhide" event being unreliable in the context of React
    setWistiaPopoverVisible(false);
    setTimeout(function () {
      setWistiaPopoverVisible(true);
    }, 100);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react["default"].createElement("link", {
    rel: "preload",
    as: "image",
    href: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-mobile.webp")
  }), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "preload",
    as: "image",
    href: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-mobile-2x.webp")
  }), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "preload",
    as: "image",
    href: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-mobile-4x.webp")
  }), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "preload",
    as: "image",
    href: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, ".webp")
  }), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "preload",
    as: "image",
    href: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-2x.webp")
  }), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "preload",
    as: "image",
    href: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-4x.webp")
  }), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "preload",
    as: "image",
    href: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-mobile.png")
  }), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "preload",
    as: "image",
    href: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-mobile-2x.png")
  }), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "preload",
    as: "image",
    href: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-mobile-4x.png")
  }), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "preload",
    as: "image",
    href: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, ".png")
  }), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "preload",
    as: "image",
    href: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-2x.png")
  }), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "preload",
    as: "image",
    href: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-4x.png")
  })), /*#__PURE__*/_react["default"].createElement(_.Header, {
    image: "components/headers/header-home/wave-blue.svg",
    translations: translations
  }, /*#__PURE__*/_react["default"].createElement(_.Box, {
    mt: ['-1.6rem', '-4.375rem'],
    align: "left",
    width: 0.46
  }, /*#__PURE__*/_react["default"].createElement(_.Svg, {
    src: "common/logo/".concat((0, _translations.formatMessage)('site_name', translations)),
    width: "125px",
    color: "white",
    className: "hidden-desktop",
    visibleByDefault: true
  }), /*#__PURE__*/_react["default"].createElement(_.Subtitle, {
    align: "left",
    color: "white",
    tag: "div"
  }, subTitle), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement(_.BigTitle, {
    align: "left",
    tag: "h1"
  }, title), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_.InputButton, {
    translations: translations,
    href: buttonHref,
    hubspotId: hubspotId
  }), killerArgument && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    color: "white"
  }, killerArgument))), /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: 0.54
  }, /*#__PURE__*/_react["default"].createElement(_VideoImage["default"], {
    image: image,
    onClick: handleVideoButtonWrapperClick,
    videoId: videoId
  }))), videoId && wistiaPopoverVisible && /*#__PURE__*/_react["default"].createElement(_.Video, {
    videoId: videoId,
    wistiaParameters: ['popover=true', 'popoverShowOnLoad=true', 'popoverAnimateThumbnail=true']
  }));
};

var _default = HeaderHome;
exports["default"] = _default;