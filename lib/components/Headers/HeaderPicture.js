"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-height: calc(93vh - 100px);\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 0;\n  background-image: url('", "/", "')\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Component style
 */
var HeaderStyled = _styledComponents["default"].div(_templateObject(), process.env.GATSBY_CDN_HOST, function (_ref) {
  var image = _ref.image;
  return image;
});
/**
 * Component
 */


var HeaderPicture = function HeaderPicture(_ref2) {
  var src = _ref2.src;
  return /*#__PURE__*/_react["default"].createElement(HeaderStyled, {
    image: src
  });
};

var _default = HeaderPicture;
exports["default"] = _default;