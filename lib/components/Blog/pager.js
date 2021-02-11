"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _2 = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 10px;\n  width: 13.04px;\n  height: 13.04px;\n  transform: ", ";\n  ", ":hover & {\n    display: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 10px;\n  width: 13.04px;\n  height: 13.04px;\n  transform: ", ";\n  display: none;\n  ", ":hover & {\n    display: inline;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: auto;\n  line-height: 38px;\n  padding: 15px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  height: 38px;\n  width: ", ";\n  margin: 0 2px;\n  color: #316bf2;\n  &.active,\n  &:hover {\n    border-radius: 22.5px;\n    background-color: #316bf2;\n    color: #fff;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  text-align: center;\n  margin: 30px auto;\n  padding: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PagerWrap = _styledComponents["default"].div(_templateObject());

var PagerButton = (0, _styledComponents["default"])(_gatsby.Link)(_templateObject2(), function (props) {
  return props.circle && '38px';
});

var PagerText = _styledComponents["default"].span(_templateObject3());

var ArrowWhite = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_2.Svg, {
    src: "components/blog/blog-arrow-blue.svg"
  });
})(_templateObject4(), function (props) {
  return props.flip && 'rotate(180deg)';
}, PagerButton);
var ArrowBlue = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_2.Svg, {
    src: "components/blog/icons/blog-arrow-blue.svg"
  });
})(_templateObject5(), function (props) {
  return props.flip && 'rotate(180deg)';
}, PagerButton);

var Pager = function Pager(_ref) {
  var pageContext = _ref.pageContext;
  var previousPagePath = pageContext.previousPagePath,
      nextPagePath = pageContext.nextPagePath,
      pageNumber = pageContext.pageNumber,
      numberOfPages = pageContext.numberOfPages;
  return /*#__PURE__*/_react["default"].createElement(PagerWrap, null, previousPagePath && /*#__PURE__*/_react["default"].createElement(PagerButton, {
    to: "/".concat(previousPagePath)
  }, /*#__PURE__*/_react["default"].createElement(ArrowBlue, {
    flip: true
  }), /*#__PURE__*/_react["default"].createElement(ArrowWhite, {
    flip: true
  }), /*#__PURE__*/_react["default"].createElement(PagerText, null, "Previous")), Array.from({
    length: numberOfPages
  }, function (_, i) {
    return /*#__PURE__*/_react["default"].createElement(PagerButton, {
      circle: true,
      key: "pagination-number".concat(i + 1),
      to: "/en-us/blog/".concat(i === 0 ? '' : i + 1),
      className: pageNumber === i && 'active'
    }, /*#__PURE__*/_react["default"].createElement(PagerText, null, i + 1));
  }), nextPagePath && /*#__PURE__*/_react["default"].createElement(PagerButton, {
    to: "/".concat(nextPagePath)
  }, /*#__PURE__*/_react["default"].createElement(PagerText, null, "Next"), " ", /*#__PURE__*/_react["default"].createElement(ArrowBlue, null), " ", /*#__PURE__*/_react["default"].createElement(ArrowWhite, null)));
};

var _default = Pager;
exports["default"] = _default;