"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = require("./styled");

var _ = require("../..");

var _btoa = _interopRequireDefault(require("btoa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CardPost = function CardPost(_ref) {
  var width = _ref.width,
      _ref$post = _ref.post,
      slug = _ref$post.slug,
      imageUrl = _ref$post.feature_image.url,
      body = _ref$post.body,
      title = _ref$post.meta.title,
      topics = _ref$post.topics,
      author = _ref$post.author,
      obfuscated = _ref.obfuscated;
  var link = "/en-us/blog/".concat(slug, "/");
  var result = 0;

  if (body.length > 0) {
    result = Math.ceil(body.length / 3700);
  }

  return /*#__PURE__*/_react["default"].createElement(_styled.Wrapper, {
    width: width
  }, /*#__PURE__*/_react["default"].createElement(_styled.StyledLink, {
    href: obfuscated ? (0, _btoa["default"])(link) : link
  }, /*#__PURE__*/_react["default"].createElement(_styled.Thumbnail, {
    image: imageUrl
  }), /*#__PURE__*/_react["default"].createElement(_styled.FrontMatterBlock, null, /*#__PURE__*/_react["default"].createElement(_.TagWrap, null, topics.map(function (_ref2, i) {
    var name = _ref2.name;
    return /*#__PURE__*/_react["default"].createElement(_.Tag, {
      key: i
    }, name);
  })), /*#__PURE__*/_react["default"].createElement(_styled.Title, null, title), /*#__PURE__*/_react["default"].createElement(_styled.CardPostFooter, null, /*#__PURE__*/_react["default"].createElement(_styled.Meta, null, /*#__PURE__*/_react["default"].createElement(_.Svg, {
    src: "components/blog/icons/blog-reading-time-dark",
    alt: "Reading time icon",
    width: "20px",
    style: {
      marginRight: '7px',
      verticalAlign: 'middle'
    }
  }), /*#__PURE__*/_react["default"].createElement(_styled.ReadingTime, null, result, " min read")), /*#__PURE__*/_react["default"].createElement(_.AuthorWrap, {
    flip: true
  }, /*#__PURE__*/_react["default"].createElement(_.AuthorAvatar, {
    src: author.avatar
  }), /*#__PURE__*/_react["default"].createElement(_.AuthorName, {
    color: "#838383"
  }, author.full_name))))));
};

var _default = CardPost;
exports["default"] = _default;