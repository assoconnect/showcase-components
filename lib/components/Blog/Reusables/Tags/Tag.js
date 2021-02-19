"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TagStyled = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin-bottom: 10px;\n  margin-right: 5px;\n  padding: 6px 20px;\n  border-radius: 3px;\n  background-color: #00c1a2;\n  color: #fff;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  font-family: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TagStyled = _styledComponents["default"].span(_templateObject(), _.UI.fonts.family.roboto);

exports.TagStyled = TagStyled;

var Tag = function Tag(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(TagStyled, null, children);
};

var _default = Tag;
exports["default"] = _default;