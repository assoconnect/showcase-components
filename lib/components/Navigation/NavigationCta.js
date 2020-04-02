"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin: 0 10px;\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    margin: 15px;\n\n    .button {\n      font-size: 1.16rem;\n\n      &.button--theme-line-white {\n        color: ", ";\n        border-color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-end;\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column-reverse;\n    background-color: ", ";\n    margin-top: auto;\n    height 190px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var NavigationCtaWrapper = _styledComponents["default"].div(_templateObject(), _.UI.breakpoints.mobile, _.UI.colors.blue);

var NavigationCtaStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.ButtonLink, props);
})(_templateObject2(), _.UI.breakpoints.mobile, _.UI.colors.white, _.UI.colors.white);
/**
 * Component
 */

var NavigationCta = function NavigationCta(_ref) {
  var navigationCta = _ref.navigationCta,
      navigationType = _ref.navigationType;
  return /*#__PURE__*/_react["default"].createElement(NavigationCtaWrapper, {
    width: "auto",
    alignItems: "flex-end"
  }, /*#__PURE__*/_react["default"].createElement(NavigationCtaStyled, {
    href: "https://app.assoconnect.com/login",
    size: "small",
    theme: "line-white",
    className: "navigation__cta"
  }, "Se\xA0connecter"), navigationType !== 'signUp' && /*#__PURE__*/_react["default"].createElement(NavigationCtaStyled, {
    href: navigationCta[navigationType === 'network' ? 'network' : 'default'].href,
    size: "small",
    className: "navigation__cta",
    target: "_self"
  }, /*#__PURE__*/_react["default"].createElement("span", null, navigationCta[navigationType === 'network' ? 'network' : 'default'].text)));
};

var _default = NavigationCta;
exports["default"] = _default;