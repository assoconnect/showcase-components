"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleBody = exports.ArticleCover = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  color: #646464;\n  font-size: 19px;\n  line-height: 1.6;\n  h2 {\n    font-size: 31px;\n    line-height: 40px;\n    font-weight: 900;\n    color: #316bf2;\n  }\n  h3 {\n    font-size: 25px;\n    line-height: 33px;\n    font-weight: 900;\n    color: #4a4a4a;\n  }\n  h4 {\n    font-size: 23px;\n    line-height: 27px;\n    font-weight: 500;\n    color: #4a4a4a;\n  }\n  p {\n    margin: 30px 0;\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n  }\n  a {\n    color: #007bff;\n    text-decoration: none;\n    background-color: transparent;\n  }\n  img {\n    max-width: 100%;\n    height: auto;\n    vertical-align: middle;\n    border-style: none;\n    margin: auto;\n  }\n  dl,\n  ol,\n  ul {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  border-radius: 15px;\n  margin-bottom: 20px;\n  background-image: url(", ");\n  height: 377px;\n  background-position: center right;\n  background-size: cover;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ArticleCover = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.image;
});

exports.ArticleCover = ArticleCover;

var ArticleBody = _styledComponents["default"].div(_templateObject2(), _.UI.fonts.family.roboto);

exports.ArticleBody = ArticleBody;