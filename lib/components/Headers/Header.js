"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _bind = _interopRequireDefault(require("classnames/bind"));

var _VideoButton = _interopRequireDefault(require("../Video/VideoButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  min-height: calc(100vh - 100px);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-height: calc(100vh - 100px);\n  margin-bottom: 10vw;\n  position: relative;\n  text-align: left;\n  /* -1 px to hide the visible white line when zooming */\n  background-position: top -1px center;\n  background-size: auto calc(100% - 10px);\n  background-repeat: no-repeat;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    background-size: auto 70%;\n    background-position: top left 28%;\n  }\n"]);

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
  return /*#__PURE__*/_react["default"].createElement(_.Flex, _extends({
    custom: false
  }, props));
})(_templateObject(), _.UI.breakpoints.mobile);
var HeaderContent = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Flex, props);
})(_templateObject2());
/**
 * Component
 */

var Header = function Header(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      image = _ref.image,
      videoId = _ref.videoId,
      _ref$animationVideoBu = _ref.animationVideoButton,
      animationVideoButton = _ref$animationVideoBu === void 0 ? true : _ref$animationVideoBu;
  return /*#__PURE__*/_react["default"].createElement(HeaderStyled, {
    style: _objectSpread({}, style, {
      backgroundImage: "url('".concat(process.env.GATSBY_CDN_HOST, "/").concat(image, "')")
    }),
    className: (0, _bind["default"])(className, 'header')
  }, /*#__PURE__*/_react["default"].createElement(HeaderContent, {
    alignItems: "center"
  }, children), videoId && /*#__PURE__*/_react["default"].createElement(_VideoButton["default"], {
    animationVideoButton: animationVideoButton,
    videoId: videoId
  }));
};

var _default = Header;
exports["default"] = _default;