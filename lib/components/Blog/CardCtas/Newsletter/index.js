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

var _styled2 = require("../../Reusables/styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Newsletter = function Newsletter(props) {
  return /*#__PURE__*/_react["default"].createElement(_styled.Wrapper, {
    mobile: props.mobile
  }, /*#__PURE__*/_react["default"].createElement(_styled.StyledHeader, null, /*#__PURE__*/_react["default"].createElement(_styled.IconWrap, null, /*#__PURE__*/_react["default"].createElement(_.Svg, {
    src: "components/blog/icons/blog-mail.svg",
    custom: false
  })), /*#__PURE__*/_react["default"].createElement(_styled.Title, null, props.title)), /*#__PURE__*/_react["default"].createElement(_styled.SubNews, null, props.subtitle), /*#__PURE__*/_react["default"].createElement(_styled.EmailInput, {
    id: "email-52694bb1-e344-4b79-9664-27ba056e2aae_6432",
    "class": "hs-input",
    type: "email",
    name: "email",
    required: "",
    placeholder: "Enter your email address ",
    value: "",
    autocomplete: "email",
    "data-reactid": ".hbspt-forms-0.1:$0.$email.0"
  }), /*#__PURE__*/_react["default"].createElement(_styled2.CardCtaButtonWrap, null, /*#__PURE__*/_react["default"].createElement(_styled2.CardCtaButton, {
    className: "white",
    type: "submit",
    "class": "hs-button primary large",
    "data-reactid": ".hbspt-forms-0.5.1.0"
  }, "Sign up!")));
};

var _default = Newsletter;
exports["default"] = _default;