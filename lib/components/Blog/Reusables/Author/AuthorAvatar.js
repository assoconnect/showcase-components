"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AuthorAvatarStyled = _styledComponents["default"].img(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: ", ";\n  height: auto;\n  vertical-align: middle;\n  border-style: none;\n"])), function (props) {
  return props.big ? '50px' : '30px';
});

var AuthorAvatar = function AuthorAvatar(_ref) {
  var children = _ref.children,
      big = _ref.big,
      src = _ref.src;
  return /*#__PURE__*/_react["default"].createElement(AuthorAvatarStyled, {
    big: big,
    src: src
  }, children);
};

var _default = AuthorAvatar;
exports["default"] = _default;