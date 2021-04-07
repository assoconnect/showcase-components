"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HeartIcon = exports.Name = exports.MiniImage = exports.ListItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../..");

var _styled = require("../styled.js");

var _gatsby = require("gatsby");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 20px;\n  vertical-align: middle;\n  display: inline-block;\n  margin-right: 8px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  margin: auto;\n  font-size: 14px;\n  line-height: 17px;\n  font-weight: bold;\n  color: #939393;\n  font-family: ", ";\n  font-weight: bolder;\n  padding-left: 10px;\n  @media screen and (max-width: 1200px) {\n    margin-top: 10px;\n    max-width: 180px;\n    padding-left: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 0 0 130px;\n  @media screen and (max-width: 1200px) {\n    flex: 0 0 65px;\n    margin: auto;\n    width: 100%;\n    max-width: 180px;\n  }\n\n  background-image: url(", ");\n  height: 60px;\n  background-size: cover;\n  background-position: center;\n  width: 164px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 40px;\n  align-items: center !important;\n  @media screen and (max-width: 1200px) {\n    flex-direction: column;\n    align-items: start !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ListItem = (0, _styledComponents["default"])(_gatsby.Link)(_templateObject());
exports.ListItem = ListItem;

var MiniImage = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.image;
});

exports.MiniImage = MiniImage;

var Name = _styledComponents["default"].div(_templateObject3(), _.UI.fonts.family.roboto);

exports.Name = Name;
var HeartIcon = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, _extends({
    src: "components/blog/icons/blog-fav",
    width: "20px",
    alt: "fav icon"
  }, props));
})(_templateObject4());
exports.HeartIcon = HeartIcon;

var FavPostsAside = function FavPostsAside(_ref) {
  var posts = _ref.posts;
  return /*#__PURE__*/_react["default"].createElement(_styled.WrapperBordered, null, /*#__PURE__*/_react["default"].createElement(_styled.TitleBordered, null, "Most", /*#__PURE__*/_react["default"].createElement(HeartIcon, null), "articles"), /*#__PURE__*/_react["default"].createElement("div", null, posts.map(function (_ref2, i) {
    var _ref2$node = _ref2.node,
        slug = _ref2$node.slug,
        feature_image = _ref2$node.feature_image,
        title = _ref2$node.title;
    return /*#__PURE__*/_react["default"].createElement(ListItem, {
      key: i,
      to: "/en-us/blog/".concat(slug, "/")
    }, /*#__PURE__*/_react["default"].createElement(MiniImage, {
      image: feature_image.url
    }), /*#__PURE__*/_react["default"].createElement(Name, null, title));
  })));
};

var _default = FavPostsAside;
exports["default"] = _default;