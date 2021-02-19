"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../..");

var _styled = require("../styled.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var StyledImage = _styledComponents["default"].img(_templateObject2());

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
    src: "https://web-assoconnect-frc-prod-cdn-endpoint-showcase.azureedge.net/components/blog/images/app-screen.png",
    alt: "tool screen"
  }), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement(_.CardCtaButtonWrap, null, /*#__PURE__*/_react["default"].createElement(_.CardCtaButton, {
    href: props.url,
    color: "#fff",
    bgcolor: "#f6c131"
  }, "TRY NOW")), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "small"
  })));
};

var _default = FreeTrial;
exports["default"] = _default;