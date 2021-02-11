"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../..");

var _styled = require("../styled.js");

var _gatsby = require("gatsby");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  padding-left: 10px;\n  margin: auto;\n  font-size: 14px;\n  line-height: 17px;\n  font-weight: bold;\n  color: #939393;\n  @media screen and (max-width: ", ") {\n    margin-top: 10px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex: 0 0 130px;\n  background-image: url(", ");\n  height: 60px;\n  background-size: cover;\n  background-position: center;\n  width: 164px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 20px;\n  margin-right: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 40px;\n  align-items: center !important;\n  @media screen and (max-width: ", ") {\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ListItem = (0, _styledComponents["default"])(_gatsby.Link)(_templateObject(), _.UI.breakpoints.mobile);
var FavIconWrap = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, {
    src: "components/blog/icons/blog-fav.svg"
  });
})(_templateObject2());

var MiniImage = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.image;
});

var Name = _styledComponents["default"].div(_templateObject4(), _.UI.breakpoints.mobile);

var Newsletter = function Newsletter(props) {
  return /*#__PURE__*/_react["default"].createElement(_styled.WrapperBordered, null, /*#__PURE__*/_react["default"].createElement(_styled.TitleBordered, null, "Most ", /*#__PURE__*/_react["default"].createElement(FavIconWrap, null), "articles"), /*#__PURE__*/_react["default"].createElement("div", null, props.favlist.map(function (edge, i) {
    return /*#__PURE__*/_react["default"].createElement(ListItem, {
      key: i,
      href: "/".concat(edge.node.slug)
    }, /*#__PURE__*/_react["default"].createElement(MiniImage, {
      key: i,
      image: edge.node.feature_image.url
    }), /*#__PURE__*/_react["default"].createElement(Name, {
      key: i
    }, edge.node.title));
  })));
};

var _default = Newsletter;
exports["default"] = _default;