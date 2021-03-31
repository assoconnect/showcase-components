"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _gatsby = require("gatsby");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 15px 0;\n  padding: 0;\n  color: ", ";\n  &:hover {\n    color: #4a4a4a;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 15px 0;\n  padding: 0 0 0 15px;\n"]);

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

var BreadCrumbsItem = _styledComponents["default"].li(_templateObject2());

var BreadCrumbsLink = (0, _styledComponents["default"])(_gatsby.Link)(_templateObject3(), function (props) {
  return props.color ? props.color : '#4a4a4a';
});

var BreadCrumbs = function BreadCrumbs(props) {
  return /*#__PURE__*/_react["default"].createElement(BreadCrumbsWrap, null, /*#__PURE__*/_react["default"].createElement(BreadCrumbsItem, null, /*#__PURE__*/_react["default"].createElement(BreadCrumbsLink, {
    color: "#939393",
    to: props.homeUrl
  }, "Blog")), /*#__PURE__*/_react["default"].createElement(BreadCrumbsItem, null, '>'), /*#__PURE__*/_react["default"].createElement(BreadCrumbsItem, null, /*#__PURE__*/_react["default"].createElement(BreadCrumbsLink, {
    to: props.postUrl
  }, props.postName)));
};

var _default = BreadCrumbs;
exports["default"] = _default;