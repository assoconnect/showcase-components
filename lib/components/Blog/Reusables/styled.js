"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardCtaButton = exports.CardCtaButtonWrap = exports.Tag = exports.TagWrap = exports.AuthorName = exports.AuthorAvatar = exports.AuthorWrap = exports.BlogPageTitle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  transition: background-color 0.3s;\n  outline: 0;\n  text-transform: uppercase;\n  height: 43px;\n  width: 154px;\n  margin: 10px auto;\n  border-radius: 21.5px;\n  border: 0;\n  background-color: #fff;\n  font-size: 16px;\n  font-weight: ", ";\n  line-height: 21px;\n  white-space: pre-wrap;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  &.white {\n    color: #316bf2;\n    background-color: #fff;\n    &:hover {\n      color: #fff;\n      background-color: transparent;\n      border: 1px solid #fff !important;\n    }\n  }\n  &.yellow {\n    color: white;\n    background-color: #f6c131;\n    &:hover {\n      color: #f6c131;\n      background-color: transparent;\n      border: 1px solid #f6c131 !important;\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin-bottom: 10px;\n  margin-right: 5px;\n  padding: 6px 20px;\n  border-radius: 3px;\n  background-color: #00c1a2;\n  color: #fff;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 10px;\n  color: ", ";\n  text-align: left;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: auto;\n  vertical-align: middle;\n  border-style: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  align-items: center !important;\n  display: flex !important;\n  flex-direction: ", ";\n  font-family: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  padding: 10px 0px;\n  font-size: 36px;\n  line-height: 48px;\n  font-weight: 900;\n  color: #9b9b9b;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BlogPageTitle = _styledComponents["default"].h1(_templateObject(), _.UI.fonts.family.roboto);

exports.BlogPageTitle = BlogPageTitle;

var AuthorWrap = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.flip ? 'row-reverse' : 'row';
}, _.UI.fonts.family.roboto);

exports.AuthorWrap = AuthorWrap;

var AuthorAvatar = _styledComponents["default"].img(_templateObject3(), function (props) {
  return props.big ? '50px' : '30px';
});

exports.AuthorAvatar = AuthorAvatar;

var AuthorName = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.color ? props.color : '#fff';
});

exports.AuthorName = AuthorName;

var TagWrap = _styledComponents["default"].div(_templateObject5());

exports.TagWrap = TagWrap;

var Tag = _styledComponents["default"].span(_templateObject6());

exports.Tag = Tag;

var CardCtaButtonWrap = _styledComponents["default"].div(_templateObject7());

exports.CardCtaButtonWrap = CardCtaButtonWrap;

var CardCtaButton = _styledComponents["default"].a(_templateObject8(), _.UI.fonts.weight.bold);

exports.CardCtaButton = CardCtaButton;