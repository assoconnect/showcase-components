"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailInput = exports.SubNews = exports.IconWrap = exports.Title = exports.StyledHeader = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  border: 0;\n  border-radius: 0;\n  border-bottom: solid 1px #fff;\n  background: 0;\n  padding: 10px;\n  color: #fff !important;\n  margin: 40px 0 20px;\n  ::placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #fff !important;\n    opacity: 1; /* Firefox */\n  }\n  :-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    color: #fff !important;\n  }\n  ::-ms-input-placeholder {\n    /* Microsoft Edge */\n    color: #fff !important;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  padding-left: 10px;\n  margin-top: 5px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  border-radius: 50%;\n  flex: 0 0 70px;\n  height: 70px;\n  align-items: center !important;\n  justify-content: center !important;\n  display: inline-flex !important;\n  margin: auto;\n  > svg {\n    width: 40px;\n    overflow: hidden;\n    vertical-align: middle;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex: 0 0 calc(100% - 70px);\n  font-size: 28px;\n  line-height: 37px;\n  font-weight: 900;\n  padding-left: 10px;\n  color: #fff;\n"]);

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
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  width: 96%;\n  background: #316bf2;\n  color: #fff;\n  margin-bottom: 40px;\n  padding: 20px;\n  border: 3px solid #316bf2;\n  border-radius: 10px;\n  position: relative;\n  display: ", ";\n  flex-direction: column;\n  min-width: 0;\n  height: fit-content;\n  @media screen and (max-width: ", ") {\n    display: ", ";\n    width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].article(_templateObject(), _.UI.fonts.family.roboto, function (props) {
  return props.mobile ? 'none' : 'flex';
}, _.UI.breakpoints.smallMobile, function (props) {
  return props.mobile ? 'flex' : 'none';
});

exports.Wrapper = Wrapper;

var StyledHeader = _styledComponents["default"].div(_templateObject2());

exports.StyledHeader = StyledHeader;

var Title = _styledComponents["default"].span(_templateObject3());

exports.Title = Title;

var IconWrap = _styledComponents["default"].div(_templateObject4());

exports.IconWrap = IconWrap;

var SubNews = _styledComponents["default"].div(_templateObject5());

exports.SubNews = SubNews;

var EmailInput = _styledComponents["default"].input(_templateObject6());

exports.EmailInput = EmailInput;