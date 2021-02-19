"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.EmptyStyled = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var EmptyStyled = _styledComponents["default"].div(_templateObject());

exports.EmptyStyled = EmptyStyled;

var Empty = function Empty(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(EmptyStyled, null, children);
};

var _default = Empty;
exports["default"] = _default;