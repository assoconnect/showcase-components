"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../..");

var _styled = require("./styled.js");

var _translations = require("../../../../utils/translations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SvgStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject());

var Newsletter = function Newsletter(_ref) {
  var hubspotId = _ref.hubspotId,
      mobile = _ref.mobile,
      title = _ref.title,
      subtitle = _ref.subtitle,
      translations = _ref.translations;
  return /*#__PURE__*/_react["default"].createElement(_styled.Wrapper, {
    mobile: mobile
  }, /*#__PURE__*/_react["default"].createElement(_styled.StyledHeader, null, /*#__PURE__*/_react["default"].createElement(_styled.IconWrap, null, /*#__PURE__*/_react["default"].createElement(SvgStyled, {
    src: "components/blog/icons/blog-mail",
    width: "40px",
    alt: "mail icon"
  })), /*#__PURE__*/_react["default"].createElement(_styled.Title, null, title)), /*#__PURE__*/_react["default"].createElement(_styled.SubNews, null, subtitle), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement(_.SubscribeNews, {
    translations: translations,
    hubspotId: hubspotId
  }));
};

var _default = Newsletter;
exports["default"] = _default;