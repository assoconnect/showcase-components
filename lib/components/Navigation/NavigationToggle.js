"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ = require("..");

var _translations = require("../../utils/translations");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 5px;\n  width: 100%;\n  height: 6px;\n\n  &.navigation__line--half {\n    width: 50%;\n  }\n  &.navigation__line--start {\n    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);\n    transform-origin: right;\n\n    /* Mobile navigation open */\n    ", ";\n  }\n  &.navigation__line--end {\n    align-self: flex-end;\n    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);\n    transform-origin: left;\n\n    /* Mobile navigation open */\n    ", ";\n  }\n  /* White mode */\n  background-color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-left: auto;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  cursor: pointer;\n  transition: transform 330ms ease-out;\n\n  /* Mobile navigation open */\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  text-align: left !important;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 60px;\n  flex-direction: row !important; /* Force row direction in mobile mode */\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 25;\n\n  /* White mode */\n  transition: background-color ease-out 0.2s;\n  ", ";\n\n  /* Desktop mode */\n  @media screen and (min-width: ", ") {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  box-shadow: 0 1px 14px 0 rgba(0, 0, 0, 0.19);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var navigationToggleWhiteCss = (0, _styledComponents.css)(_templateObject(), _.UI.colors.white);
var NavigationToggleStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Flex, props);
})(_templateObject2(), function (_ref) {
  var navigationType = _ref.navigationType,
      navigationIsFixed = _ref.navigationIsFixed,
      navigationMobileIsOpened = _ref.navigationMobileIsOpened;
  return ['white', 'signUp', 'network'].includes(navigationType) || navigationIsFixed || navigationMobileIsOpened ? navigationToggleWhiteCss : "background-color: ".concat(_.UI.colors.blue);
}, _.UI.breakpoints.mobile);
var NavigationToggleLogo = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject3());

var NavigationToggleBurger = _styledComponents["default"].div(_templateObject4(), function (_ref2) {
  var navigationMobileIsOpened = _ref2.navigationMobileIsOpened;
  return navigationMobileIsOpened && "transform: rotate(-45deg);";
});

var NavigationToggleBurgerLine = _styledComponents["default"].div(_templateObject5(), function (_ref3) {
  var navigationMobileIsOpened = _ref3.navigationMobileIsOpened;
  return navigationMobileIsOpened && "transform: rotate(-90deg) translateX(3px);";
}, function (_ref4) {
  var navigationMobileIsOpened = _ref4.navigationMobileIsOpened;
  return navigationMobileIsOpened && "transform: rotate(-90deg) translateX(-3px);";
}, function (_ref5) {
  var navigationType = _ref5.navigationType,
      navigationIsFixed = _ref5.navigationIsFixed,
      navigationMobileIsOpened = _ref5.navigationMobileIsOpened;
  return navigationType !== 'white' && navigationType !== 'signUp' && !navigationIsFixed && !navigationMobileIsOpened ? _.UI.colors.white : _.UI.colors.blue;
});
/**
 * Component
 */


var NavigationToggle = function NavigationToggle(_ref6) {
  var navigationToggleBurgerFunction = _ref6.navigationToggleBurgerFunction,
      navigationType = _ref6.navigationType,
      navigationMobileIsOpened = _ref6.navigationMobileIsOpened,
      navigationIsFixed = _ref6.navigationIsFixed,
      translations = _ref6.translations;
  return /*#__PURE__*/_react["default"].createElement(NavigationToggleStyled, {
    navigationMobileIsOpened: navigationMobileIsOpened,
    navigationIsFixed: navigationIsFixed,
    alignItems: "center",
    navigationType: navigationType
  }, /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: "auto"
  }, /*#__PURE__*/_react["default"].createElement(_.Link, {
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement(NavigationToggleLogo, {
    height: "40px",
    color: "blue",
    src: "common/logo/".concat((0, _translations.formatMessage)('site_name', translations), "-simple")
  }))), /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: "auto",
    ml: "auto"
  }, /*#__PURE__*/_react["default"].createElement(NavigationToggleBurger, {
    navigationMobileIsOpened: navigationMobileIsOpened,
    onClick: navigationToggleBurgerFunction
  }, /*#__PURE__*/_react["default"].createElement(NavigationToggleBurgerLine, {
    navigationIsFixed: navigationIsFixed,
    navigationMobileIsOpened: navigationMobileIsOpened,
    className: "navigation__line--half navigation__line--start",
    navigationType: navigationType
  }), /*#__PURE__*/_react["default"].createElement(NavigationToggleBurgerLine, {
    navigationIsFixed: navigationIsFixed,
    navigationMobileIsOpened: navigationMobileIsOpened,
    navigationType: navigationType
  }), /*#__PURE__*/_react["default"].createElement(NavigationToggleBurgerLine, {
    navigationIsFixed: navigationIsFixed,
    navigationMobileIsOpened: navigationMobileIsOpened,
    className: "navigation__line--half navigation__line--end",
    navigationType: navigationType
  }))));
};

var _default = NavigationToggle;
exports["default"] = _default;