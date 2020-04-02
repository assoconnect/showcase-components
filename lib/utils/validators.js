"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkSize = void 0;

var checkSize = function checkSize(text, max) {
  if (text.length < max) return {
    error: false,
    response: text
  };else {
    return {
      error: true,
      response: "Error: ".concat(text.length, " characters, max length: ").concat(max)
    };
  }
};

exports.checkSize = checkSize;