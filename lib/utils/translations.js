"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatMessage = void 0;

/**
 * Returns the translation for given id
 * @param id
 * @param
 */
var formatMessage = function formatMessage(id, translations) {
  return translations[id] ? translations[id] : id;
};

exports.formatMessage = formatMessage;