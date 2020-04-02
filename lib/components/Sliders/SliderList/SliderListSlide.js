"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../../");

var _grid = require("@rebass/grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Component
 */
var SliderListSlide = function SliderListSlide(_ref) {
  var title = _ref.title,
      image = _ref.image,
      list = _ref.list;
  return /*#__PURE__*/_react["default"].createElement(_grid.Flex, {
    flexWrap: "wrap"
  }, /*#__PURE__*/_react["default"].createElement(_.Box, null, /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "big",
    className: "hidden-mobile"
  }), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "medium",
    className: "hidden-mobile"
  })), /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: 1 / 2
  }, image.maxDpi ? /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, {
    src: image.src,
    alt: image.alt,
    maxDpi: image.maxDpi,
    visibleByDefault: true
  }) : /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, {
    src: image.src,
    alt: image.alt,
    visibleByDefault: true
  })), /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: 1 / 2
  }, /*#__PURE__*/_react["default"].createElement(_.MiddleTitle, {
    color: "turquoise",
    align: "left"
  }, title), /*#__PURE__*/_react["default"].createElement(_.BulletList, {
    datas: list.map(function (item, i) {
      return /*#__PURE__*/_react["default"].createElement(_.Text, {
        key: i
      }, item);
    })
  })));
};

var _default = SliderListSlide;
exports["default"] = _default;