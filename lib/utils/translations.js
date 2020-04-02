"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatMessage = void 0;

var _translations = _interopRequireDefault(require("../translations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns the translation for given id
 * @param id
 */
var formatMessage = function formatMessage(id) {
  return _translations["default"][id] ? _translations["default"][id] : id;
};

exports.formatMessage = formatMessage;