"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../..");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Progress = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  background: linear-gradient(\n    to right,\n    #316bf2 ", ",\n    transparent 0\n  );\n  width: 100%;\n  height: 4px;\n  z-index: 3;\n  top: 0px;\n  z-index: 9999;\n  &.hidden-mobile {\n    display: block !important;\n  }\n  &.hidden-desktop {\n    display: none !important;\n  }\n  @media screen and (max-width: ", ") {\n    &.hidden-mobile {\n      display: none !important;\n    }\n    &.hidden-desktop {\n      display: block !important;\n    }\n  }\n"])), function (props) {
  return props.scroll;
}, _.UI.breakpoints.mobile);

var _default = Progress;
exports["default"] = _default;