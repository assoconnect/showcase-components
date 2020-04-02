"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _reactScroll = require("react-scroll");

var _bind = _interopRequireDefault(require("classnames/bind"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: underline;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Component Styled
 */
var linkStyled = (0, _styledComponents.css)(_templateObject());
var Gatsbytyled = (0, _styledComponents["default"])(function (_ref) {
  var isStyled = _ref.isStyled,
      props = _objectWithoutProperties(_ref, ["isStyled"]);

  return /*#__PURE__*/_react["default"].createElement(_gatsby.Link, props);
})(_templateObject2(), function (_ref2) {
  var isStyled = _ref2.isStyled;
  return isStyled && linkStyled;
});
var ScrollStyled = (0, _styledComponents["default"])(function (_ref3) {
  var isStyled = _ref3.isStyled,
      props = _objectWithoutProperties(_ref3, ["isStyled"]);

  return /*#__PURE__*/_react["default"].createElement(_reactScroll.Link, props);
})(_templateObject3(), function (_ref4) {
  var isStyled = _ref4.isStyled;
  return isStyled && linkStyled;
});

var AStyled = _styledComponents["default"].a(_templateObject4(), function (_ref5) {
  var isStyled = _ref5.isStyled;
  return isStyled && linkStyled;
});
/**
 * Component
 */


var Link = function Link(_ref6) {
  var children = _ref6.children,
      className = _ref6.className,
      _ref6$href = _ref6.href,
      href = _ref6$href === void 0 ? '' : _ref6$href,
      _ref6$nofollow = _ref6.nofollow,
      nofollow = _ref6$nofollow === void 0 ? null : _ref6$nofollow,
      _ref6$isStyled = _ref6.isStyled,
      isStyled = _ref6$isStyled === void 0 ? true : _ref6$isStyled,
      _ref6$target = _ref6.target,
      target = _ref6$target === void 0 ? null : _ref6$target;

  if (href && href.indexOf('#') === 0) {
    return /*#__PURE__*/_react["default"].createElement(ScrollStyled, {
      to: href.substring(1),
      smooth: true,
      offset: -60,
      className: (0, _bind["default"])(className),
      isStyled: isStyled
    }, children);
  } else if (href && href.indexOf('/') === 0) {
    return /*#__PURE__*/_react["default"].createElement(Gatsbytyled, {
      to: href,
      className: (0, _bind["default"])('link', 'link--internal', className),
      rel: nofollow && 'nofollow',
      target: target,
      isStyled: isStyled
    }, children);
  } else if (href && (href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0)) {
    return /*#__PURE__*/_react["default"].createElement(AStyled, {
      href: href,
      rel: "noopener noreferrer nofollow",
      className: (0, _bind["default"])('link', 'link--external', className),
      target: target,
      isStyled: isStyled
    }, children);
  } else {
    // Duplicate code to avoid the "warning  Using target="_blank" without rel="noopener noreferrer" is a security risk: see https://mathiasbynens.github.io/rel-noopener  react/jsx-no-target-blank" error that appears when rel = {``} is used instead of rel = ""
    if (nofollow || nofollow === null) {
      return /*#__PURE__*/_react["default"].createElement(AStyled, {
        href: href,
        target: target || '_blank',
        rel: "noopener noreferrer nofollow",
        className: (0, _bind["default"])('link', 'link--external', className),
        isStyled: isStyled
      }, children);
    } else {
      return /*#__PURE__*/_react["default"].createElement(AStyled, {
        href: href,
        target: target || '_blank',
        rel: "noopener noreferrer",
        className: (0, _bind["default"])('link', 'link--external', className),
        isStyled: isStyled
      }, children);
    }
  }
};

var _default = Link;
exports["default"] = _default;