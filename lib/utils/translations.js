"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatMessage = void 0;

/**
 * Returns the translation for given id
 * @param id
 * @param translations
 */
var formatMessage = function formatMessage(id) {
  var translations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return translations[id] ? translations[id] : id;
};

exports.formatMessage = formatMessage;