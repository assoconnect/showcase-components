"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReadingTime = exports.CardArticleFooter = exports.Meta = exports.Title = exports.FrontMatterBlock = exports.StyledLink = exports.FrontMatter = exports.Thumbnail = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../..");

var _gatsby = require("gatsby");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: ", ";\n  vertical-align: middle;\n  margin-left: 5px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: absolute;\n  bottom: 20px;\n  width: calc(100% - 40px);\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: ", ";\n  > svg {\n    width: 20px;\n    margin-right: 5px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 28px;\n  line-height: 37px;\n  font-weight: 900;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: ", ";\n  ", ":hover & {\n    color: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  height: 100%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none !important;\n  display: block;\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none !important;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: rgba(49, 107, 242, 0.7);\n  padding: 100px 50px 30px;\n  transition: 0.3s ease;\n  border-radius: 15px;\n  &:hover {\n    background: rgba(49, 107, 242, 0.8);\n    padding: 100px 50px 30px;\n    transition: 0.3s ease;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  background-size: cover !important;\n  height: 180px;\n  background-position: center;\n  border-radius: 15px 15px 0 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  font-family: ", ";\n  background-image: url(", ");\n  flex: ", ";\n  flex-direction: column;\n  width: ", ";\n  flex-shrink: ", ";\n  background-size: cover !important;\n  border-radius: 15px;\n  box-shadow: 0 1px 6px 0 rgb(222 222 222);\n  position: relative;\n  background-position: center;\n  max-width: ", ";\n  margin: 0 0 20px 0;\n  transition: all 0.5s;\n  cursor: pointer;\n  &:hover {\n    transform: ", ";\n    box-shadow: 0 5px 15px 0 rgb(222 222 222);\n  }\n  @media screen and (max-width: ", ") {\n    flex: ", ";\n  }\n  @media screen and (max-width: ", ") {\n    flex: 0 0 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].article(_templateObject(), function (props) {
  return props.featured ? 'inherit' : '#fff';
}, _.UI.fonts.family.roboto, function (props) {
  return props.image;
}, function (props) {
  return props.featured ? '0 0 100%' : props.width ? '0 0 32% ' : 'none';
}, function (props) {
  return props.width ? props.width : props.featured ? '100%' : '49%';
}, function (props) {
  return props.width ? '1' : 'inherit';
}, function (props) {
  return props.featured ? 'none' : '800px';
}, function (props) {
  return props.featured ? 'translateY(0)' : 'translateY(-5px)';
}, _.UI.breakpoints.mobile, function (props) {
  return props.featured ? '0 0 49%' : props.width ? '0 0 32% ' : 'none';
}, _.UI.breakpoints.smallMobile);

exports.Wrapper = Wrapper;

var Thumbnail = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.image;
});

exports.Thumbnail = Thumbnail;

var FrontMatter = _styledComponents["default"].div(_templateObject3());

exports.FrontMatter = FrontMatter;
var StyledLink = (0, _styledComponents["default"])(_gatsby.Link)(_templateObject4());
exports.StyledLink = StyledLink;

var FrontMatterBlock = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.featured ? '25px' : '25px 25px 100px';
});

exports.FrontMatterBlock = FrontMatterBlock;

var Title = _styledComponents["default"].h2(_templateObject6(), function (props) {
  return props.featured ? '#fff' : '#939393';
}, Wrapper, function (props) {
  return props.featured ? '#fff' : '#4a4a4a';
});

exports.Title = Title;

var Meta = _styledComponents["default"].div(_templateObject7(), function (props) {
  return props.featured ? '20px 0 30px 0' : 'auto 0';
});

exports.Meta = Meta;

var CardArticleFooter = _styledComponents["default"].div(_templateObject8());

exports.CardArticleFooter = CardArticleFooter;

var ReadingTime = _styledComponents["default"].span(_templateObject9(), function (props) {
  return props.featured ? '#fff' : '#838383';
}, function (props) {
  return props.featured ? '16px' : '14px';
});

exports.ReadingTime = ReadingTime;