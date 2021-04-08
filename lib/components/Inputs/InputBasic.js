"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _formik = require("formik");

var _bind = _interopRequireDefault(require("classnames/bind"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var InputBasicWrapper = _styledComponents["default"].span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 0.5px solid transparent;\n  outline-style: none;\n  background-color: ", ";\n  border-radius: 2.941rem;\n  display: inline-block;\n  overflow: hidden;\n  vertical-align: middle;\n\n  ", ";\n"])), _.UI.colors.white, function (_ref) {
  var icon = _ref.icon;
  return icon && "\n      padding-left: 1rem;\n      display: inline-flex;\n      align-items: center;\n    ";
});

var InputBasicStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_formik.Field, props);
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border: 0.5px solid transparent;\n  outline-style: none;\n  padding: 0;\n  border-radius: 0;\n  background-color: transparent;\n  font-size: 1rem;\n  font-family: ", ";\n  font-weight: ", ";\n  text-align: ", ";\n  color: ", ";\n\n  &::placeholder {\n    color: ", ";\n    opacity: 1;\n  }\n"])), _.UI.fonts.family.roboto, _.UI.fonts.weight.normal, function (_ref2) {
  var align = _ref2.align;
  return align || 'left';
}, _.UI.colors.darkGrey, function (_ref3) {
  var color = _ref3.color;
  return _.UI.colors[color || 'middleGrey'];
});
var InputBasicIco = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-right: 0.8rem;\n"])));
/**
 * Component
 */

var InputBasic = function InputBasic(_ref4) {
  var className = _ref4.className,
      placeholder = _ref4.placeholder,
      icon = _ref4.icon,
      name = _ref4.name;
  return /*#__PURE__*/_react["default"].createElement(InputBasicWrapper, {
    className: (0, _bind["default"])(className),
    icon: icon
  }, icon && /*#__PURE__*/_react["default"].createElement(InputBasicIco, {
    width: "2rem",
    src: icon,
    className: "animation--effect-wobble",
    color: "middleGrey"
  }), /*#__PURE__*/_react["default"].createElement(InputBasicStyled, {
    className: "input",
    placeholder: placeholder,
    name: name
  }));
};

var _default = InputBasic;
exports["default"] = _default;