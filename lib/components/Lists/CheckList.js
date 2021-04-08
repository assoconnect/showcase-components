"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _bind = _interopRequireDefault(require("classnames/bind"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var CheckStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-right: 1rem;\n"])));

var ItemStyled = _styledComponents["default"].li(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 20px;\n"])));

var TextStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Text, props);
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex: 1;\n  transition: 0.3s;\n\n  .slick-current & {\n    color: ", ";\n  }\n"])), _.UI.colors.darkGrey);
/**
 * Component
 */

var CheckList = function CheckList(_ref) {
  var content = _ref.content,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: (0, _bind["default"])(className)
  }, content.map(function (field, i) {
    return /*#__PURE__*/_react["default"].createElement(ItemStyled, {
      key: i,
      className: "check-list__item"
    }, /*#__PURE__*/_react["default"].createElement(CheckStyled, {
      src: "components/check-list/check",
      width: "1rem",
      color: "turquoise"
    }), /*#__PURE__*/_react["default"].createElement(TextStyled, {
      align: "left"
    }, field));
  }));
};

var _default = CheckList;
exports["default"] = _default;