"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PostCoverWrap = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n  align-items: center;\n  margin-bottom: 19px;\n"])));

var PostCoverStyled = _styledComponents["default"].img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: block;\n  flex: 1 1 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 10px;\n"])));

var PostCover = function PostCover(_ref) {
  var children = _ref.children,
      image = _ref.image,
      alt = _ref.alt;
  return /*#__PURE__*/_react["default"].createElement(PostCoverWrap, null, /*#__PURE__*/_react["default"].createElement(PostCoverStyled, {
    src: image,
    alt: alt
  }, children));
};

var _default = PostCover;
exports["default"] = _default;