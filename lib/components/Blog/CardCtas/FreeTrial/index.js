"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../..");

var _styled = require("../styled.js");

var _styled2 = require("../../Reusables/styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 0 0 calc(100% - 70px);\n  height: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: 0 0 calc(100% - 70px);\n  text-align: center;\n  font-size: 28px;\n  line-height: 37px;\n  font-weight: 900;\n  color: #316bf2;\n  font-family: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents["default"].span(_templateObject(), _.UI.fonts.family.baloo);

var StyledImage = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Image, {
    src: "components/blog/images/app-screen.png"
  });
})(_templateObject2());

var FreeTrial = function FreeTrial(props) {
  return /*#__PURE__*/_react["default"].createElement(_styled.WrapperBorderedScroller, null, /*#__PURE__*/_react["default"].createElement(_styled.WrapperBordered, {
    grey: true,
    sticky: true,
    className: "sticky"
  }, /*#__PURE__*/_react["default"].createElement(_styled.TitleBordered, {
    grey: true
  }, props.cardtitle), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement(Title, null, props.maintitle), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement(StyledImage, {
    alt: "tool screen"
  }), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement(_styled2.CardCtaButtonWrap, null, /*#__PURE__*/_react["default"].createElement(_styled2.CardCtaButton, {
    url: props.url,
    className: "yellow"
  }, "TRY NOW")), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "small"
  })));
};

var _default = FreeTrial;
exports["default"] = _default;