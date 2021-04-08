"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReadingTime = exports.CardPostFooter = exports.Meta = exports.Title = exports.FrontMatterBlock = exports.StyledLink = exports.FrontMatter = exports.Thumbnail = exports.Wrapper = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../..");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].article(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  font-family: ", ";\n  background-image: url(", ");\n  flex: ", ";\n  flex-direction: column;\n  width: ", ";\n  flex-shrink: ", ";\n  background-size: cover !important;\n  border-radius: 15px;\n  box-shadow: 0 1px 6px 0 rgb(222 222 222);\n  position: relative;\n  background-position: center;\n  max-width: ", ";\n  margin: 0 0 20px 0;\n  transition: all 0.5s;\n  cursor: pointer;\n  &:hover {\n    transform: ", ";\n    box-shadow: 0 5px 15px 0 rgb(222 222 222);\n  }\n  @media screen and (max-width: ", ") {\n    flex: ", ";\n  }\n  @media screen and (max-width: ", ") {\n    flex: 0 0 100%;\n  }\n"])), function (props) {
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

var Thumbnail = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  background-size: cover !important;\n  height: 180px;\n  background-position: center;\n  border-radius: 15px 15px 0 0;\n"])), function (props) {
  return props.image;
});

exports.Thumbnail = Thumbnail;

var FrontMatter = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background: rgba(49, 107, 242, 0.7);\n  padding: 100px 50px 30px;\n  transition: 0.3s ease;\n  border-radius: 15px;\n  &:hover {\n    background: rgba(49, 107, 242, 0.8);\n    padding: 100px 50px 30px;\n    transition: 0.3s ease;\n  }\n"])));

exports.FrontMatter = FrontMatter;
var StyledLink = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Link, props);
})(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  text-decoration: none !important;\n  display: block;\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none !important;\n  }\n"])));
exports.StyledLink = StyledLink;

var FrontMatterBlock = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: ", ";\n  height: 100%;\n"])), function (props) {
  return props.featured ? '25px' : '25px 25px 100px';
});

exports.FrontMatterBlock = FrontMatterBlock;

var Title = _styledComponents["default"].h2(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: 28px;\n  line-height: 37px;\n  font-weight: 900;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: ", ";\n  ", ":hover & {\n    color: ", ";\n  }\n"])), function (props) {
  return props.featured ? '#fff' : '#939393';
}, Wrapper, function (props) {
  return props.featured ? '#fff' : '#4a4a4a';
});

exports.Title = Title;

var Meta = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: ", ";\n  > svg {\n    width: 20px;\n    margin-right: 5px;\n  }\n"])), function (props) {
  return props.featured ? '20px 0 30px 0' : 'auto 0';
});

exports.Meta = Meta;

var CardPostFooter = _styledComponents["default"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: absolute;\n  bottom: 20px;\n  width: calc(100% - 40px);\n"])));

exports.CardPostFooter = CardPostFooter;

var ReadingTime = _styledComponents["default"].span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: ", ";\n  vertical-align: middle;\n  margin-left: 5px;\n"])), function (props) {
  return props.featured ? '#fff' : '#838383';
}, function (props) {
  return props.featured ? '16px' : '14px';
});

exports.ReadingTime = ReadingTime;