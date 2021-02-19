"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  transition: background-color 0.3s;\n  outline: 0;\n  text-transform: uppercase;\n  height: 43px;\n  width: 154px;\n  margin: 10px auto;\n  border-radius: 21.5px;\n  border: 0;\n  font-size: 16px;\n  font-weight: ", ";\n  line-height: 21px;\n  white-space: pre-wrap;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  color: ", "!important;\n  background-color: ", "!important;\n  &:hover {\n    color: ", " !important;\n    background-color: transparent !important;\n    border: 1px solid ", " !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardCtaButtonStyled = _styledComponents["default"].a(_templateObject(), _.UI.fonts.weight.bold, function (props) {
  return props.color;
}, function (props) {
  return props.bgcolor;
}, function (props) {
  return props.bgcolor;
}, function (props) {
  return props.bgcolor;
});

var CardCtaButton = function CardCtaButton(_ref) {
  var children = _ref.children,
      color = _ref.color,
      bgcolor = _ref.bgcolor,
      href = _ref.href;
  return /*#__PURE__*/_react["default"].createElement(CardCtaButtonStyled, {
    href: href,
    color: color,
    bgcolor: bgcolor
  }, children);
};

var _default = CardCtaButton;
exports["default"] = _default;