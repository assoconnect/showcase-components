"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickyStyled = exports.StickyContainerStyled = exports.TitleBordered = exports.WrapperBordered = exports.WrapperBorderedScroller = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: -30px;\n  background: #fff;\n  padding: 5px;\n  color: ", ";\n  font-weight: 900;\n  line-height: 37px;\n  font-size: 18px;\n  span {\n    display: inline-block;\n    vertical-align: middle;\n  }\n  svg {\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 5px;\n    width: 20px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  width: 96%;\n  background-color: #fff;\n  color: #fff;\n  padding: 20px;\n  border: ", ";\n  border-radius: 10px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  position: relative;\n  margin-bottom: 40px;\n  &.sticky {\n    width: 100%;\n  }\n  img {\n    max-width: 100% !important;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: block;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapperBorderedScroller = _styledComponents["default"].div(_templateObject());

exports.WrapperBorderedScroller = WrapperBorderedScroller;

var WrapperBordered = _styledComponents["default"].div(_templateObject2(), _.UI.fonts.family.roboto, function (props) {
  return props.grey ? '3px solid #939393' : '3px solid #316bf2';
});

exports.WrapperBordered = WrapperBordered;

var TitleBordered = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.grey ? '#939393' : '#316bf2';
});

exports.TitleBordered = TitleBordered;

var StickyContainerStyled = _styledComponents["default"].div(_templateObject4());

exports.StickyContainerStyled = StickyContainerStyled;

var StickyStyled = _styledComponents["default"].div(_templateObject5());

exports.StickyStyled = StickyStyled;