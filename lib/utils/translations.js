"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.formatMessage=void 0;/**
 * Returns the translation for given id
 * @param id
 * @param translations
 */var formatMessage=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return b[a]?b[a]:a};exports.formatMessage=formatMessage;