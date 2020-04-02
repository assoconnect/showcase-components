"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = void 0;

var random = function random(max) {
  return Math.floor(Math.random() * max);
};

exports.random = random;