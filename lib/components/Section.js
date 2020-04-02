"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("./");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  pointer-events: none;\n  position: absolute;\n  bottom: calc(100% - 1px);\n  left: -5vw;\n  z-index: -1;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  background: ", ";\n  padding: 3rem 0 calc(3rem + 8vw);\n  z-index: 10;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SectionStyled = _styledComponents["default"].section(_templateObject(), function (_ref) {
  var wave = _ref.wave;
  return wave.color === 'blue' ? "linear-gradient(to bottom, ".concat(_.UI.colors.mediumBlue, ", ").concat(_.UI.colors.blue, " 11.765rem)") : wave !== false ? "linear-gradient(to bottom, #F5F5F5, ".concat(_.UI.colors.white, " 11.765rem)") : _.UI.colors.white;
});

var SectionWave = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject2(), function (_ref2) {
  var wave = _ref2.wave;
  return wave.direction === 'up' && "transform: scaleX(-1);";
});
/**
 * Component
 */

var Section = function Section(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      _ref3$wave = _ref3.wave,
      wave = _ref3$wave === void 0 ? {
    color: 'extraLightGrey',
    direction: 'down'
  } : _ref3$wave,
      _ref3$alignItems = _ref3.alignItems,
      alignItems = _ref3$alignItems === void 0 ? 'center' : _ref3$alignItems,
      justifyContent = _ref3.justifyContent;
  return /*#__PURE__*/_react["default"].createElement(SectionStyled, {
    wave: wave,
    className: (0, _bind["default"])('section', className)
  }, wave !== false && /*#__PURE__*/_react["default"].createElement(SectionWave, {
    color: wave.color === 'blue' && 'mediumBlue' || 'extraLightGrey',
    width: "110vw",
    height: "auto",
    src: "components/section/wave",
    wave: wave
  }), /*#__PURE__*/_react["default"].createElement(_.Flex, {
    alignItems: alignItems,
    flexWrap: "wrap",
    py: "2rem",
    justifyContent: justifyContent
  }, _react.Children.map(children, function (child) {
    return _react["default"].cloneElement(child, {
      wave: wave.color
    });
  })));
};

var _default = Section;
exports["default"] = _default;