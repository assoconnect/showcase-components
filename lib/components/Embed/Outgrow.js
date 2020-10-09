"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Component
 */
var Outgrow = function Outgrow(_ref) {
  var id = _ref.id,
      title = _ref.title;
  (0, _react.useEffect)(function () {
    var script = document.createElement('script');
    script.src = '//dyv6f9ner1ir9.cloudfront.net/assets/js/nloader.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = function () {
      window.initIframe(id);
    };
  }, [id]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "op-interactive",
    id: id,
    "data-title": title,
    "data-url": "https://asso.outgrow.us/".concat(id, "?vHeight=1"),
    "data-width": "100%"
  });
};

var _default = Outgrow;
exports["default"] = _default;