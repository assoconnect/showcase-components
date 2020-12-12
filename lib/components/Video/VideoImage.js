"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require("..");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _AdaptiveImage = _interopRequireDefault(require("../AdaptiveImage"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  background-color: ", ";\n  transition: 500ms ease;\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  animation: ", " 2.3s ease-in-out infinite;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: calc(50% - 48px);\n  left: calc(50% - 48px);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  &:hover .playButton {\n    background-color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var animationVideoButton = (0, _styledComponents.keyframes)(_templateObject());

var VideoImageWrapper = _styledComponents["default"].div(_templateObject2(), _.UI.colors.darkTurquoise);

var PlayButtonWrapper = _styledComponents["default"].div(_templateObject3());

var animationCall = (0, _styledComponents.css)(_templateObject4(), animationVideoButton);

var Button = _styledComponents["default"].div(_templateObject5(), _.UI.colors.turquoise, function (_ref) {
  var animationVideoButton = _ref.animationVideoButton;
  return animationVideoButton && animationCall;
});
/**
 * Component
 */


var VideoImage = function VideoImage(_ref2) {
  var image = _ref2.image,
      onClick = _ref2.onClick;
  return /*#__PURE__*/_react["default"].createElement(VideoImageWrapper, {
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_AdaptiveImage["default"], {
    src: image.src,
    alt: image.alt
  }), /*#__PURE__*/_react["default"].createElement(PlayButtonWrapper, null, /*#__PURE__*/_react["default"].createElement(Button, {
    animationVideoButton: animationVideoButton,
    className: "playButton"
  }, /*#__PURE__*/_react["default"].createElement(_.Svg, {
    src: "components/video-button/simple-play",
    width: "96px",
    color: "white"
  }))));
};

VideoImage.displayName = 'VideoImage';
var _default = VideoImage;
exports["default"] = _default;