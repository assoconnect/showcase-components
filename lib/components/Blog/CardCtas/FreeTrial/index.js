"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = require("../styled.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FreeTrial = function FreeTrial(_ref) {
  var cardtitle = _ref.cardtitle,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_styled.WrapperBorderedScroller, null, /*#__PURE__*/_react["default"].createElement(_styled.WrapperBordered, {
    grey: true,
    sticky: true,
    className: "sticky"
  }, /*#__PURE__*/_react["default"].createElement(_styled.TitleBordered, {
    grey: true
  }, cardtitle), children));
};

var _default = FreeTrial;
exports["default"] = _default;