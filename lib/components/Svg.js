"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _components = require("../components");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSvg = _interopRequireDefault(require("react-svg"));

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  svg {\n    display: inline-block;\n    height: ", ";\n    width: ", ";\n    .svg--color-primary {\n      fill: ", ";\n    }\n    .svg--color-secondary {\n      fill: ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* Hack whitespace */\n  font-size: 0;\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    text-align: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SvgWrapper = _styledComponents["default"].div(_templateObject(), _components.UI.breakpoints.mobile);

var SvgStyled = (0, _styledComponents["default"])(function (_ref) {
  var color = _ref.color,
      colorSecondary = _ref.colorSecondary,
      height = _ref.height,
      width = _ref.width,
      rest = _objectWithoutProperties(_ref, ["color", "colorSecondary", "height", "width"]);

  return /*#__PURE__*/_react["default"].createElement(_reactSvg["default"], rest);
})(_templateObject2(), function (_ref2) {
  var height = _ref2.height;
  return height;
}, function (_ref3) {
  var width = _ref3.width;
  return width;
}, function (_ref4) {
  var color = _ref4.color;
  return _components.UI.colors[color];
}, function (_ref5) {
  var colorSecondary = _ref5.colorSecondary;
  return _components.UI.colors[colorSecondary];
});
/**
 * Component
 */

var Svg = function Svg(_ref6) {
  var className = _ref6.className,
      _ref6$color = _ref6.color,
      color = _ref6$color === void 0 ? 'darkGrey' : _ref6$color,
      _ref6$colorSecondary = _ref6.colorSecondary,
      colorSecondary = _ref6$colorSecondary === void 0 ? 'turquoise' : _ref6$colorSecondary,
      _ref6$height = _ref6.height,
      height = _ref6$height === void 0 ? '' : _ref6$height,
      src = _ref6.src,
      _ref6$visibleByDefaul = _ref6.visibleByDefault,
      visibleByDefault = _ref6$visibleByDefaul === void 0 ? false : _ref6$visibleByDefaul,
      _ref6$width = _ref6.width,
      width = _ref6$width === void 0 ? '' : _ref6$width;
  var widthCalc = width;
  var heightCalc = height;

  if (width !== '' && height === '') {
    heightCalc = width;
  } else if (width === '' && height !== '') {
    widthCalc = height;
  }

  return /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadComponent, {
    threshold: 400,
    visibleByDefault: visibleByDefault
  }, /*#__PURE__*/_react["default"].createElement(SvgWrapper, {
    className: className
  }, /*#__PURE__*/_react["default"].createElement(SvgStyled, {
    src: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, ".svg"),
    color: color,
    colorSecondary: colorSecondary,
    width: widthCalc,
    height: heightCalc,
    fallback: function fallback() {
      console.error("\"".concat(src, "\" failed to load."));
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: "error"
      }, src, " not found.");
    }
  })));
};

Svg.displayName = 'Svg'; // https://github.com/facebook/react/issues/4915#issuecomment-335803765

var _default = Svg;
exports["default"] = _default;