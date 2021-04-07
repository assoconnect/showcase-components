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
  var _ref$post = _ref.post,
      slug = _ref$post.slug,
      imageUrl = _ref$post.feature_image.url,
      body = _ref$post.body,
      title = _ref$post.meta.title,
      topics = _ref$post.topics,
      author = _ref$post.author;
  var result = 0;

  if (body.length > 0) {
    result = Math.ceil(body.length / 3700);
  }

  return /*#__PURE__*/_react["default"].createElement(_styled.Wrapper, {
    image: imageUrl,
    featured: true
  }, /*#__PURE__*/_react["default"].createElement(_styled.StyledLink, {
    href: "/en-us/blog/".concat(slug, "/")
  }, /*#__PURE__*/_react["default"].createElement(_styled.FrontMatter, null, /*#__PURE__*/_react["default"].createElement(_styled.FrontMatterBlock, {
    featured: true
  }, /*#__PURE__*/_react["default"].createElement(_.TagWrap, {
    minHeight: "33px"
  }, topics.map(function (_ref2, i) {
    var name = _ref2.name;
    return /*#__PURE__*/_react["default"].createElement(_.Tag, {
      key: i
    }, name);
  })), /*#__PURE__*/_react["default"].createElement(_styled.Title, {
    featured: true
  }, title), /*#__PURE__*/_react["default"].createElement(_styled.Meta, {
    featured: true
  }, /*#__PURE__*/_react["default"].createElement(_.Svg, {
    src: "components/blog/icons/blog-reading-time-white",
    alt: "Reading time icon",
    width: "20px"
  }), /*#__PURE__*/_react["default"].createElement(_styled.ReadingTime, {
    featured: true
  }, result, " min read")), /*#__PURE__*/_react["default"].createElement(_.AuthorWrap, null, /*#__PURE__*/_react["default"].createElement(_.AuthorAvatar, {
    big: true,
    src: author.avatar
  }), /*#__PURE__*/_react["default"].createElement(_.AuthorName, null, author.full_name))))));
};

var _default = CardPostFeatured;
exports["default"] = _default;