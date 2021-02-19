"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 10px;\n  color: ", ";\n  text-align: left;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AuthorNameStyled = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.color ? props.color : '#fff';
});

var AuthorName = function AuthorName(_ref) {
  var children = _ref.children,
      color = _ref.color;
  return /*#__PURE__*/_react["default"].createElement(AuthorNameStyled, {
    color: color
  }, children);
};

var _default = AuthorName;
exports["default"] = _default;