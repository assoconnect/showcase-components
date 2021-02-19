"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  flex: 1 1 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n  align-items: center;\n  margin-bottom: 19px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ArticleCoverWrap = _styledComponents["default"].div(_templateObject());

var ArticleCoverStyled = _styledComponents["default"].img(_templateObject2());

var ArticleCover = function ArticleCover(_ref) {
  var children = _ref.children,
      image = _ref.image,
      alt = _ref.alt;
  return /*#__PURE__*/_react["default"].createElement(ArticleCoverWrap, null, /*#__PURE__*/_react["default"].createElement(ArticleCoverStyled, {
    src: image,
    alt: alt
  }, children));
};

var _default = ArticleCover;
exports["default"] = _default;