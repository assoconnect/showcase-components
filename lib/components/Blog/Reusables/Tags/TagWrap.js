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
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  min-height: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TagWrapStyled = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.minHeight && props.minHeight;
});

var TagWrap = function TagWrap(_ref) {
  var children = _ref.children,
      minHeight = _ref.minHeight;
  return /*#__PURE__*/_react["default"].createElement(TagWrapStyled, {
    minHeight: minHeight
  }, children);
};

var _default = TagWrap;
exports["default"] = _default;