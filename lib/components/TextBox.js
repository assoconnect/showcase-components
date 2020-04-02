"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  transition: opacity linear 0.3s;\n  ", ";\n\n  &:hover {\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var TextBoxStyled = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var hoverAnimation = _ref.hoverAnimation;
  return hoverAnimation && "opacity: .5";
});
/**
 * Component
 */


var TextBox = function TextBox(_ref2) {
  var datas = _ref2.datas,
      _ref2$hoverAnimation = _ref2.hoverAnimation,
      hoverAnimation = _ref2$hoverAnimation === void 0 ? false : _ref2$hoverAnimation;
  return datas.map(function (data, i) {
    return /*#__PURE__*/_react["default"].createElement(TextBoxStyled, {
      hoverAnimation: hoverAnimation,
      key: i
    }, /*#__PURE__*/_react["default"].createElement(_.SmallTitle, {
      font: "roboto",
      align: "left",
      color: "turquoise"
    }, data.title), /*#__PURE__*/_react["default"].createElement(_.Space, {
      size: "tiny"
    }), /*#__PURE__*/_react["default"].createElement(_.Text, {
      align: "left"
    }, data.text), /*#__PURE__*/_react["default"].createElement(_.Space, {
      size: "medium"
    }));
  });
};

var _default = TextBox;
exports["default"] = _default;