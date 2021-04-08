"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../..");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AuthorWrapStyled = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center !important;\n  display: flex !important;\n  flex-direction: ", ";\n  font-family: ", ";\n"])), function (props) {
  return props.flip ? 'row-reverse' : 'row';
}, _.UI.fonts.family.roboto);

var AuthorWrap = function AuthorWrap(_ref) {
  var children = _ref.children,
      flip = _ref.flip;
  return /*#__PURE__*/_react["default"].createElement(AuthorWrapStyled, {
    flip: flip
  }, children);
};

var _default = AuthorWrap;
exports["default"] = _default;