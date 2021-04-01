"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = require("./styled");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CardPostFeatured = function CardPostFeatured(_ref) {
  var mock = _ref.mock;
  var textLength = mock.body.length;
  var result;

  if (textLength > 0) {
    result = Math.ceil(textLength / 3700);
  }

  return /*#__PURE__*/_react["default"].createElement(_styled.Wrapper, {
    image: mock.feature_image.url,
    featured: true
  }, /*#__PURE__*/_react["default"].createElement(_styled.StyledLink, {
    href: "/en-us/blog/".concat(mock.slug, "/")
  }, /*#__PURE__*/_react["default"].createElement(_styled.FrontMatter, null, /*#__PURE__*/_react["default"].createElement(_styled.FrontMatterBlock, {
    featured: true
  }, /*#__PURE__*/_react["default"].createElement(_.TagWrap, {
    minHeight: "33px"
  }, mock.topics.map(function (mock, i) {
    return /*#__PURE__*/_react["default"].createElement(_.Tag, {
      key: i
    }, mock.name);
  })), /*#__PURE__*/_react["default"].createElement(_styled.Title, {
    featured: true
  }, mock.meta.title), /*#__PURE__*/_react["default"].createElement(_styled.Meta, {
    featured: true
  }, /*#__PURE__*/_react["default"].createElement(_.Svg, {
    src: "components/blog/icons/blog-reading-time-white",
    alt: "reading time icon",
    width: "20px"
  }), /*#__PURE__*/_react["default"].createElement(_styled.ReadingTime, {
    featured: true
  }, result, " min read")), /*#__PURE__*/_react["default"].createElement(_.AuthorWrap, null, /*#__PURE__*/_react["default"].createElement(_.AuthorAvatar, {
    big: true,
    src: mock.author.avatar,
    alt: "Springly author ".concat(mock.author.name)
  }), /*#__PURE__*/_react["default"].createElement(_.AuthorName, null, mock.author.full_name))))));
};

var _default = CardPostFeatured;
exports["default"] = _default;