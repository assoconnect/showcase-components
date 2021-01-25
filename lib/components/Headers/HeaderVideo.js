"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require("../");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
/**
 * Component
 */

var HeaderVideo = function HeaderVideo(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      image = _ref.image,
      wave = _ref.wave,
      videoId = _ref.videoId,
      _ref$button = _ref.button,
      button = _ref$button === void 0 ? {
    href: '/creation-plateforme/',
    children: 'Je commence un essai'
  } : _ref$button,
      field = _ref.field,
      classNameForm = _ref.classNameForm,
      translations = _ref.translations;

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

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.Header, {
    image: wave,
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
    width: 1 / 2
  }, /*#__PURE__*/_react["default"].createElement(_.VideoImage, {
    image: image,
    onClick: handleVideoButtonWrapperClick,
    videoId: videoId
  }))), wistiaPopoverVisible && /*#__PURE__*/_react["default"].createElement(_.Video, {
    videoId: videoId,
    wistiaParameters: ['popover=true', 'popoverShowOnLoad=true', 'popoverAnimateThumbnail=true']
  }));
};

var _default = HeaderVideo;
exports["default"] = _default;