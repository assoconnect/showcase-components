"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TagsFilter = function TagsFilter(_ref) {
  var topics = _ref.topics;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, topics.map(function (topic, i) {
    return /*#__PURE__*/_react["default"].createElement(_.Tag, {
      key: i
    }, topic);
  }));
};

var _default = TagsFilter;
exports["default"] = _default;