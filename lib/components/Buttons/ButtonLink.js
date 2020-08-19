"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Component
 */
var ButtonLink = function ButtonLink(_ref) {
  var align = _ref.align,
      id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      target = _ref.target,
      theme = _ref.theme,
      size = _ref.size;
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: id
  }, /*#__PURE__*/_react["default"].createElement(_.Link, {
    href: href,
    target: target,
    className: (0, _bind["default"])('button', 'button--type-link', className)
  }, /*#__PURE__*/_react["default"].createElement(_.Button, {
    align: align,
    size: size,
    theme: theme
  }, children)));
};

ButtonLink.displayName = 'ButtonLink'; // https://github.com/facebook/react/issues/4915#issuecomment-335803765

var _default = ButtonLink;
exports["default"] = _default;