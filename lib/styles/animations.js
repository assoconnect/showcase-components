"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    16.65% {\n\t\ttransform: translateY(2.5px);\n\t}\n\n\t33.3% {\n\t\ttransform: translateY(-2px);\n\t}\n\n\t49.95% {\n\t\ttransform: translateY(1.5px);\n\t}\n\n\t66.6% {\n\t\ttransform: translateY(-1px);\n\t}\n\n\t83.25% {\n\t\ttransform: translateY(0.5px);\n\t}\n\n\t100% {\n\t\ttransform: translateY(0);\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    from { transform: translate(0,  0) rotate(0.001deg); }\n    65%  { transform: translate(0, 0.882rem) rotate(0.001deg); }\n    to   { transform: translate(0, 0) rotate(0.001deg); }    \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// add rotate for firefox : https://stackoverrun.com/fr/q/11681778
var floating = (0, _styledComponents.keyframes)(_templateObject());
var floatingDurations = [7, 12, 11, 6, 7, 5, 10, 8];
var wobble = (0, _styledComponents.keyframes)(_templateObject2());
var _default = {
  floating: floating,
  floatingDurations: floatingDurations,
  wobble: wobble
};
exports["default"] = _default;