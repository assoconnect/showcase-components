"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("..");

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 15px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  vertical-align: middle;\n  display: inline-block;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  vertical-align: middle;\n  display: inline-block;\n  margin-right: 20px;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    svg {\n      width: 26px;\n      height: 26px;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: Roboto;\n  font-size: 14px;\n  text-transform: uppercase;\n  display: block;\n  padding: 9px 0;\n\n  &:first-child {\n    padding-top: 18px;\n  }\n  &:last-child {\n    padding-bottom: 18px;\n  }\n  &:hover {\n    color: ", ";\n  }\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    margin: 22px auto 0;\n    width: 270px;\n    font-size: 16px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var NavigationChildStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Link, props);
})(_templateObject(), _.UI.colors.middleGrey, _.UI.colors.turquoise, _.UI.breakpoints.mobile);
var NavigationChildIcon = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject2(), _.UI.breakpoints.mobile);

var NavigationChildText = _styledComponents["default"].div(_templateObject3());

var NavigationChildArrow = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject4());
/**
 * Component
 */

var NavigationChild = function NavigationChild(_ref) {
  var arrow = _ref.arrow,
      className = _ref.className,
      href = _ref.href,
      icon = _ref.icon,
      _ref$loadIcon = _ref.loadIcon,
      loadIcon = _ref$loadIcon === void 0 ? false : _ref$loadIcon,
      nofollow = _ref.nofollow,
      text = _ref.text;
  return /*#__PURE__*/_react["default"].createElement(NavigationChildStyled, {
    className: (0, _bind["default"])('animation--start-hover', className),
    href: href,
    nofollow: nofollow
  }, loadIcon && icon && /*#__PURE__*/_react["default"].createElement(NavigationChildIcon, {
    className: (0, _bind["default"])('animation--effect-wobble', 'navigation__child'),
    color: "middleGrey",
    src: icon,
    width: "24px"
  }), /*#__PURE__*/_react["default"].createElement(NavigationChildText, null, text), arrow && /*#__PURE__*/_react["default"].createElement(NavigationChildArrow, {
    className: "animation--effect-wobble",
    src: "common/icon/unicolor/small-arrow",
    color: "turquoise",
    width: "16px"
  }));
};

var _default = NavigationChild;
exports["default"] = _default;