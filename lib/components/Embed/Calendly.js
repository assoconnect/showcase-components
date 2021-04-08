"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactCalendly = require("react-calendly");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InlineWidgetWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .calendly-spinner {\n    display: none; /* Remove sprinner, otherwise the waves in absolute are broken */\n  }\n"])));

var Calendly = function Calendly(_ref) {
  var _ref$url = _ref.url,
      url = _ref$url === void 0 ? 'https://calendly.com/assoconnect/demo-assoconnect' : _ref$url,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '660px' : _ref$height,
      rest = _objectWithoutProperties(_ref, ["url", "height"]);

  return /*#__PURE__*/_react["default"].createElement(InlineWidgetWrapper, null, /*#__PURE__*/_react["default"].createElement(_reactCalendly.InlineWidget, _extends({
    url: url,
    styles: {
      height: height
    }
  }, rest)));
};

var _default = Calendly;
exports["default"] = _default;