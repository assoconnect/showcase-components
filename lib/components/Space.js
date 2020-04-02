"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  &.space--tiny {\n    padding-top: 0.5882rem;\n  }\n  &.space--small {\n    padding-top: 1.176rem;\n  }\n  &.space--medium {\n    padding-top: 2.353rem;\n  }\n  &.space--big {\n    padding-top: 2.941rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SpaceStyled = _styledComponents["default"].span(_templateObject());
/**
 * Component
 */


var Space = function Space(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement(SpaceStyled, {
    className: (0, _bind["default"])(className, "space--".concat(size))
  });
};

var _default = Space;
exports["default"] = _default;