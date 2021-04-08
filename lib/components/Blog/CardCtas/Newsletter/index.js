"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../..");

var _styled = require("./styled.js");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SvgStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

var Newsletter = function Newsletter(_ref) {
  var hubspotId = _ref.hubspotId,
      mobile = _ref.mobile,
      title = _ref.title,
      subtitle = _ref.subtitle,
      buttonHref = _ref.buttonHref,
      translations = _ref.translations;
  return /*#__PURE__*/_react["default"].createElement(_styled.Wrapper, {
    mobile: mobile
  }, /*#__PURE__*/_react["default"].createElement(_styled.StyledHeader, null, /*#__PURE__*/_react["default"].createElement(_styled.IconWrap, null, /*#__PURE__*/_react["default"].createElement(SvgStyled, {
    src: "components/blog/icons/blog-mail",
    width: "40px",
    alt: "mail icon"
  })), /*#__PURE__*/_react["default"].createElement(_styled.Title, null, title)), /*#__PURE__*/_react["default"].createElement(_styled.SubNews, null, subtitle), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement(_.InputButton, {
    newsletter: true,
    translations: translations,
    href: buttonHref,
    hubspotId: hubspotId
  }));
};

var _default = Newsletter;
exports["default"] = _default;