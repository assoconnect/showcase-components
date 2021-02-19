"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _gatsby = require("gatsby");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 15px 0;\n  padding: 0;\n  color: ", ";\n  &:hover {\n    color: #4a4a4a;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 15px 0;\n  padding: 0 5px 0 10px;\n  @media screen and (max-width: ", ") {\n    margin: 5px 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 15px 0;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  font-family: ", ";\n  flex-direction: row;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BreadCrumbsWrap = _styledComponents["default"].ol(_templateObject(), _.UI.fonts.family.roboto);

var BreadCrumbsItem = _styledComponents["default"].li(_templateObject2(), _.UI.breakpoints.mobile);

var BreadCrumbsLink = (0, _styledComponents["default"])(_gatsby.Link)(_templateObject3(), function (props) {
  return props.color ? props.color : '#4a4a4a';
});

var BreadCrumbs = function BreadCrumbs(props) {
  return /*#__PURE__*/_react["default"].createElement(BreadCrumbsWrap, null, /*#__PURE__*/_react["default"].createElement(BreadCrumbsItem, null, /*#__PURE__*/_react["default"].createElement(BreadCrumbsLink, {
    color: '#939393',
    to: props.homeUrl
  }, "Blog")), /*#__PURE__*/_react["default"].createElement(BreadCrumbsItem, null, '>'), /*#__PURE__*/_react["default"].createElement(BreadCrumbsItem, null, /*#__PURE__*/_react["default"].createElement(BreadCrumbsLink, {
    href: props.articleUrl
  }, props.articleName)));
};

var _default = BreadCrumbs;
exports["default"] = _default;