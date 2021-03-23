"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PagerNum = exports.PagerNextPrev = exports.PagerLink = exports.ArrowWhite = exports.ArrowBlue = exports.PagerRule = exports.PagerWrap = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _2 = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 38px;\n  height: 38px;\n  text-align: center;\n  display: inline-block;\n  margin: 5px;\n  &.active,\n  &:hover {\n    border-radius: 22.5px;\n    background-color: #316bf2;\n    color: #fff;\n  }\n  &.active,\n  &:hover ", " {\n    color: #fff;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  float: none;\n  display: inline-block;\n  margin: 5px;\n  padding: 0 7px;\n  font-family: ", ";\n\n  &.active,\n  &:hover {\n    border-radius: 22.5px;\n    background-color: #316bf2;\n    color: #fff;\n  }\n  &:hover ", " {\n    display: none !important;\n  }\n  &:hover ", " {\n    display: inline-flex !important;\n  }\n  &:hover ", " {\n    color: #fff;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 5px 8px !important;\n  color: #316bf2;\n  text-decoration: none;\n  line-height: 38px;\n  background-color: transparent;\n  font-family: ", ";\n  &.active {\n    color: white !important;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  display: none;\n  width: 13.04px;\n  vertical-align: middle;\n  > div > div {\n    display: flex;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  display: inline-flex;\n  width: 13.04px;\n  vertical-align: middle;\n  > div > div {\n    display: flex;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  text-align: center;\n  margin: 30px auto;\n  padding: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PagerWrap = _styledComponents["default"].ul(_templateObject());

exports.PagerWrap = PagerWrap;

var PagerRule = _styledComponents["default"].span(_templateObject2());

exports.PagerRule = PagerRule;
var ArrowBlue = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_2.Svg, _extends({
    src: "components/blog/icons/blog-arrow-blue",
    width: "15px"
  }, props));
})(_templateObject3(), function (_ref) {
  var transform = _ref.transform;
  return "transform: ".concat(transform, ";");
}, function (_ref2) {
  var margin = _ref2.margin;
  return "margin: ".concat(margin, ";");
});
exports.ArrowBlue = ArrowBlue;
var ArrowWhite = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_2.Svg, _extends({
    src: "components/blog/icons/blog-arrow-white",
    width: "15px"
  }, props));
})(_templateObject4(), function (_ref3) {
  var transform = _ref3.transform;
  return "transform: ".concat(transform, ";");
}, function (_ref4) {
  var margin = _ref4.margin;
  return "margin: ".concat(margin, ";");
});
exports.ArrowWhite = ArrowWhite;
var PagerLink = (0, _styledComponents["default"])(function (_ref5) {
  var circle = _ref5.circle,
      rest = _objectWithoutProperties(_ref5, ["circle"]);

  return /*#__PURE__*/_react["default"].createElement(_gatsby.Link, rest);
})(_templateObject5(), _2.UI.fonts.family.roboto);
exports.PagerLink = PagerLink;

var PagerNextPrev = _styledComponents["default"].li(_templateObject6(), _2.UI.fonts.family.roboto, ArrowBlue, ArrowWhite, PagerLink);

exports.PagerNextPrev = PagerNextPrev;

var PagerNum = _styledComponents["default"].li(_templateObject7(), PagerLink);

exports.PagerNum = PagerNum;

var Pager = function Pager(_ref6) {
  var pageContext = _ref6.pageContext;
  var previousPagePath = pageContext.previousPagePath,
      nextPagePath = pageContext.nextPagePath,
      pageNumber = pageContext.pageNumber,
      numberOfPages = pageContext.numberOfPages;
  return /*#__PURE__*/_react["default"].createElement(PagerWrap, null, /*#__PURE__*/_react["default"].createElement(PagerNextPrev, null, previousPagePath && /*#__PURE__*/_react["default"].createElement(PagerLink, {
    to: "/".concat(previousPagePath)
  }, /*#__PURE__*/_react["default"].createElement(ArrowBlue, {
    alt: "arrow pager",
    transform: "rotate(180deg)",
    margin: "auto 10px auto auto"
  }), /*#__PURE__*/_react["default"].createElement(ArrowWhite, {
    alt: "arrow pager",
    transform: "rotate(180deg)",
    margin: "auto 10px auto auto"
  }), "Previous")), Array.from({
    length: numberOfPages
  }, function (_, i) {
    return /*#__PURE__*/_react["default"].createElement(PagerNum, {
      key: i,
      className: pageNumber === i && 'active'
    }, /*#__PURE__*/_react["default"].createElement(PagerLink, {
      circle: true,
      key: "pagination-number".concat(i + 1),
      to: "/en-us/blog/".concat(i === 0 ? '' : "page/".concat(i + 1, "/")),
      className: pageNumber === i && 'active'
    }, i + 1));
  }), /*#__PURE__*/_react["default"].createElement(PagerNextPrev, null, nextPagePath && /*#__PURE__*/_react["default"].createElement(PagerLink, {
    to: "/".concat(nextPagePath)
  }, "Next", ' ', /*#__PURE__*/_react["default"].createElement(ArrowBlue, {
    alt: "arrow pager",
    margin: "auto auto auto 10px"
  }), /*#__PURE__*/_react["default"].createElement(ArrowWhite, {
    alt: "arrow pager",
    margin: "auto auto auto 10px"
  }))));
};

var _default = Pager;
exports["default"] = _default;