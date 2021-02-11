"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCtaBlock = exports.Empty = exports.BlogMain = exports.BlogGrid = exports.BlogSection = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n  justify-content: flex-start;\n  align-items: flex-end;\n  display: flex;\n  flex-direction: column;\n  @media screen and (max-width: ", ") {\n    display: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n  justify-content: space-between;\n\n  @media screen and (max-width: ", ") {\n    flex: auto;\n    max-width: none;\n    width: 100%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 30px 10%;\n  padding-bottom: ", ";\n  @media screen and (max-width: ", ") {\n    margin: 30px 5%;\n    padding-bottom: 0px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BlogSection = _styledComponents["default"].section(_templateObject(), function (props) {
  return props.marginBottom;
}, _.UI.breakpoints.mobile);

exports.BlogSection = BlogSection;

var BlogGrid = _styledComponents["default"].div(_templateObject2());

exports.BlogGrid = BlogGrid;

var BlogMain = _styledComponents["default"].div(_templateObject3(), _.UI.breakpoints.smallMobile);

exports.BlogMain = BlogMain;

var Empty = _styledComponents["default"].div(_templateObject4());

exports.Empty = Empty;

var ListCtaBlock = _styledComponents["default"].aside(_templateObject5(), _.UI.breakpoints.smallMobile);

exports.ListCtaBlock = ListCtaBlock;