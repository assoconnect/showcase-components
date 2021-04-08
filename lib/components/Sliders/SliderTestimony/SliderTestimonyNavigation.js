"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SliderTestimonyNavigationStyled = _styledComponents["default"].span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-block;\n  text-align: center;\n  padding: 1rem;\n  position: relative;\n  outline: none;\n  border: 1px solid transparent;\n  opacity: 0.3;\n  transition: 0.3s;\n  cursor: pointer;\n\n  .slick-current & {\n    opacity: 1;\n  }\n"])));

var SliderTestimonyNavigationProfilePicture = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    width: 3.125rem;\n    height: 3.125rem;\n    margin: 15px 0 !important;\n    transition: 0.3s;\n\n    .slick-current & {\n      width: 80px;\n      height: 80px;\n      margin: 0;\n    }\n  }\n"])), _.UI.breakpoints.mobile);
/**
 * Component
 */

var SliderTestimonyNavigation = function SliderTestimonyNavigation(_ref) {
  var _ref$picture = _ref.picture,
      picture = _ref$picture === void 0 ? '' : _ref$picture,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? '' : _ref$position,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'extraDarkGrey' : _ref$color;
  return /*#__PURE__*/_react["default"].createElement(SliderTestimonyNavigationStyled, null, /*#__PURE__*/_react["default"].createElement(SliderTestimonyNavigationProfilePicture, {
    src: picture,
    width: "2.941rem",
    height: "2.941rem",
    maxDpi: 1,
    roundShape: true
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    align: "center",
    className: "hidden-mobile",
    color: color,
    size: "small"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, name.split(' ')[0], " ", /*#__PURE__*/_react["default"].createElement("br", null), name.replace(name.split(' ')[0], '')), /*#__PURE__*/_react["default"].createElement("br", null), position));
};

var _default = SliderTestimonyNavigation;
exports["default"] = _default;