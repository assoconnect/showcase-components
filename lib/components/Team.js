"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Team = function Team(_ref) {
  var team = _ref.team;
  return team.map(function (_ref2, i) {
    var image = _ref2.image,
        name = _ref2.name,
        job = _ref2.job,
        _ref2$maxDpi = _ref2.maxDpi,
        maxDpi = _ref2$maxDpi === void 0 ? 2 : _ref2$maxDpi;
    return /*#__PURE__*/_react["default"].createElement(_.Box, {
      width: 1 / 3,
      key: i
    }, /*#__PURE__*/_react["default"].createElement(_.AnimationSwapImage, {
      image: "pages/equipe/".concat(image),
      imageHover: "pages/equipe/".concat(image, "-hover"),
      maxDpi: maxDpi
    }), /*#__PURE__*/_react["default"].createElement(_.SmallTitle, {
      align: "center"
    }, name), /*#__PURE__*/_react["default"].createElement(_.Text, {
      align: "center"
    }, job));
  });
};

var _default = Team;
exports["default"] = _default;