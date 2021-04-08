"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Section = _styledComponents["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: rgba(232, 232, 232, 0.4);\n  padding: 50px 20px 85px 20px;\n"])));

var Wrapper = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  padding-bottom: 100px;\n  justify-content: space-between !important;\n  flex-wrap: nowrap;\n  margin: 30px auto;\n  max-width: 1140px;\n  @media screen and (max-width: ", ") {\n    margin: 30px 5%;\n  }\n  @media screen and (max-width: ", ") {\n    flex-direction: column;\n    margin: auto;\n  }\n"])), _.UI.breakpoints.mobile, _.UI.breakpoints.smallMobile);

var BlogPageTitleLast = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  margin-bottom: 30px;\n  color: #4a4a4a;\n  font-size: 36px;\n  font-weight: 900;\n  line-height: 48px;\n  text-align: center;\n"])), _.UI.fonts.family.roboto);

var CardPostRecommended = function CardPostRecommended(_ref) {
  var recommendedPosts = _ref.recommendedPosts,
      recommendedSlugs = _ref.recommendedSlugs,
      recommendedSlugsObfuscation = _ref.recommendedSlugsObfuscation;
  // Sort recommendedPosts
  recommendedPosts.sort(function (a, b) {
    return recommendedSlugs.indexOf(a.node.slug) - recommendedSlugs.indexOf(b.node.slug);
  });
  return /*#__PURE__*/_react["default"].createElement(Section, null, /*#__PURE__*/_react["default"].createElement(BlogPageTitleLast, null, "Recommended articles"), /*#__PURE__*/_react["default"].createElement(Wrapper, null, recommendedPosts.map(function (_ref2, i) {
    var post = _ref2.node;
    return /*#__PURE__*/_react["default"].createElement(_.CardPost, {
      key: i,
      width: 1 / 3,
      post: post,
      obfuscated: recommendedSlugsObfuscation.includes(post.slug)
    });
  })));
};

var _default = CardPostRecommended;
exports["default"] = _default;