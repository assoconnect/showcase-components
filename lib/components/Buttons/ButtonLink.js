"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Component
 */
var ButtonLink = function ButtonLink(_ref) {
  var align = _ref.align,
      children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      target = _ref.target,
      theme = _ref.theme,
      size = _ref.size;
  return /*#__PURE__*/_react["default"].createElement(_.Link, {
    href: href,
    target: target,
    className: (0, _bind["default"])('button', 'button--type-link', className)
  }, /*#__PURE__*/_react["default"].createElement(_.Button, {
    align: align,
    size: size,
    theme: theme
  }, children));
};

ButtonLink.displayName = 'ButtonLink'; // https://github.com/facebook/react/issues/4915#issuecomment-335803765

var _default = ButtonLink;
exports["default"] = _default;