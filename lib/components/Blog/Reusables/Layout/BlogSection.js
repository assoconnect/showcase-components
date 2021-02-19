"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 30px auto;\n  padding-bottom: ", ";\n  max-width: 1140px;\n  @media screen and (max-width: ", ") {\n    margin: 30px 5%;\n    padding-bottom: 0px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BlogSectionStyled = _styledComponents["default"].section(_templateObject(), function (props) {
  return props.paddingBottom;
}, _.UI.breakpoints.mobile);

var BlogSection = function BlogSection(_ref) {
  var children = _ref.children,
      paddingBottom = _ref.paddingBottom;
  return /*#__PURE__*/_react["default"].createElement(BlogSectionStyled, {
    paddingBottom: paddingBottom
  }, children);
};

var _default = BlogSection;
exports["default"] = _default;