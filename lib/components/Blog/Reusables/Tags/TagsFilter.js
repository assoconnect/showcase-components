"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../..");

var _grid = require("@rebass/grid");

var _translations = require("../../../../utils/translations");

var _btoa = _interopRequireDefault(require("btoa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  @media screen and (max-width: ", ") {\n    ", "\n    width: 100%;\n    margin-top: 8px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  @media screen and (max-width: ", ") {\n    margin: auto;\n    cursor: pointer;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n  font-size: 16px !important;\n  color: #4a4a4a;\n  font-weight: bold !important;\n  margin-right: 20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  padding: 10px 15px;\n  &:hover {\n    background: #00b094;\n  }\n  @media screen and (max-width: ", ") {\n    display: block;\n    text-align: center;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  @media screen and (max-width: ", ") {\n    display: block;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  background-color: #fff;\n  border-radius: 32.75px;\n  box-shadow: 0 1px 6px 0 rgb(222 222 222);\n  padding: 20px 20px 10px;\n  @media screen and (max-width: ", ") {\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TagWrapper = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Flex, props);
})(_templateObject(), _.UI.breakpoints.mobile);
var TagLink = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Link, props);
})(_templateObject2(), _.UI.breakpoints.mobile);
var TagStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Tag, props);
})(_templateObject3(), _.UI.breakpoints.mobile);
var TextStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Text, props);
})(_templateObject4());
var TextBox = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_grid.Box, props);
})(_templateObject5(), _.UI.breakpoints.mobile);
var TagBox = (0, _styledComponents["default"])(function (_ref) {
  var isVisible = _ref.isVisible,
      rest = _objectWithoutProperties(_ref, ["isVisible"]);

  return /*#__PURE__*/_react["default"].createElement(_grid.Box, rest);
})(_templateObject6(), _.UI.breakpoints.mobile, function (_ref2) {
  var isVisible = _ref2.isVisible;
  return !isVisible && 'display: none;';
});

var TagsFilter = function TagsFilter(_ref3) {
  var topics = _ref3.topics,
      translations = _ref3.translations;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      setIsVisible = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(TagWrapper, {
    custom: false,
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(TextBox, {
    width: "auto",
    onClick: function onClick() {
      setIsVisible(!isVisible);
    }
  }, /*#__PURE__*/_react["default"].createElement(TextStyled, null, (0, _translations.formatMessage)('tagsfilter_text', translations))), /*#__PURE__*/_react["default"].createElement(TagBox, {
    width: "auto",
    isVisible: isVisible
  }, /*#__PURE__*/_react["default"].createElement(TagLink, {
    href: (0, _btoa["default"])('/en-us/blog/')
  }, /*#__PURE__*/_react["default"].createElement(TagStyled, null, (0, _translations.formatMessage)('tagsfilter_all', translations))), Object.entries(topics).map(function (_ref4, i) {
    var _ref5 = _slicedToArray(_ref4, 2),
        slug = _ref5[0],
        name = _ref5[1];

    return /*#__PURE__*/_react["default"].createElement(TagLink, {
      key: i,
      href: (0, _btoa["default"])("/en-us/blog/tag/".concat(slug, "/"))
    }, /*#__PURE__*/_react["default"].createElement(TagStyled, null, name));
  })));
};

var _default = TagsFilter;
exports["default"] = _default;