"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = require("./styled");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CardPost = function CardPost(_ref) {
  var width = _ref.width,
      mock = _ref.mock;
  var thumb = mock.feature_image.url;
  var textLength = mock.body.length;
  var result;

  if (textLength > 0) {
    result = Math.ceil(textLength / 3700);
  }

  return /*#__PURE__*/_react["default"].createElement(_styled.Wrapper, {
    width: width
  }, /*#__PURE__*/_react["default"].createElement(_styled.StyledLink, {
    to: "/en-us/blog/".concat(mock.slug, "/")
  }, /*#__PURE__*/_react["default"].createElement(_styled.Thumbnail, {
    image: thumb
  }), /*#__PURE__*/_react["default"].createElement(_styled.FrontMatterBlock, null, /*#__PURE__*/_react["default"].createElement(_.TagWrap, null, mock.topics.map(function (mock, i) {
    return /*#__PURE__*/_react["default"].createElement(_.Tag, {
      key: i
    }, mock.name);
  })), /*#__PURE__*/_react["default"].createElement(_styled.Title, null, mock.meta.title), /*#__PURE__*/_react["default"].createElement(_styled.CardPostFooter, null, /*#__PURE__*/_react["default"].createElement(_styled.Meta, null, /*#__PURE__*/_react["default"].createElement(_.Svg, {
    src: "components/blog/icons/blog-reading-time-dark",
    alt: "reading time icon",
    width: "20px",
    style: {
      marginRight: '7px',
      verticalAlign: 'middle'
    }
  }), /*#__PURE__*/_react["default"].createElement(_styled.ReadingTime, null, result, " min read")), /*#__PURE__*/_react["default"].createElement(_.AuthorWrap, {
    flip: true
  }, /*#__PURE__*/_react["default"].createElement(_.AuthorAvatar, {
    src: mock.author.avatar,
    alt: "Springly author ".concat(mock.author.name)
  }), /*#__PURE__*/_react["default"].createElement(_.AuthorName, {
    color: "#838383"
  }, mock.author.full_name))))));
};

var _default = CardPost;
exports["default"] = _default;