"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _numbers = require("../../utils/numbers");

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  border-radius: 50%;\n  background-color: ", ";\n  position: absolute;\n\n  ", ";\n\n  .card--size-1 & {\n    width: 90%;\n    padding-bottom: 90%;\n  }\n  .card--size-2 & {\n    width: 65%;\n    padding-bottom: 65%;\n  }\n  .card--size-3 & {\n    width: 50%;\n    padding-bottom: 50%;\n  }\n\n  @media screen and (max-width: ", ") {\n    .card--size-1 & {\n      width: 95%;\n      padding-bottom: 95%;\n    }\n    .card--size-2 & {\n      width: 75%;\n      padding-bottom: 75%;\n    }\n    .card--size-3 & {\n      width: 65%;\n      padding-bottom: 65%;\n    }\n  }\n\n  .card--shadow-0 & {\n    box-shadow: 0 22px 23px 9px rgba(0, 0, 0, 0.15);\n  }\n  .card--shadow-1 & {\n    box-shadow: 0 9px 38px 0 rgba(0, 0, 0, 0.15);\n  }\n  .card--shadow-2 & {\n    box-shadow: 0 13px 21px rgba(0, 0, 0, 0.15);\n  }\n\n  .card--position-0 & {\n    bottom: 0;\n    right: 0;\n  }\n  .card--position-1 & {\n    top: 0;\n    left: 0;\n  }\n  .card--position-2 & {\n    top: 0;\n    right: 0;\n  }\n  .card--position-3 & {\n    bottom: 0;\n    left: 0;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  max-width: 80% !important;\n  max-height: 90%;\n  width: 100%;\n  ", ";\n  img {\n    height: auto;\n    width: auto;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding-bottom: 100%;\n  position: relative;\n  text-align: center;\n  animation: ", " 12s ease-in-out infinite;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% / 4 - 1.176rem);\n  margin: 0.588rem;\n  @media screen and (max-width: 600px) {\n    width: calc(100% / 3 - 1.176rem);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 90%;\n  padding: 10px;\n  ", ";\n\n  ", ";\n\n  @media screen and (max-width: 600px) {\n    font-size: 0.7rem !important;\n    line-height: 1em !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var position = "\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: block;\n";
var SmallTitleStyled = (0, _styledComponents["default"])(function (_ref) {
  var backgroundColor = _ref.backgroundColor,
      props = _objectWithoutProperties(_ref, ["backgroundColor"]);

  return /*#__PURE__*/_react["default"].createElement(_.SmallTitle, props);
})(_templateObject(), position, function (_ref2) {
  var backgroundColor = _ref2.backgroundColor;
  return backgroundColor && backgroundColor !== 'white' && "color: ".concat(_.UI.colors.white, ";");
});

var Container = _styledComponents["default"].div(_templateObject2());

var Cell = _styledComponents["default"].div(_templateObject3());

var Card = _styledComponents["default"].div(_templateObject4(), _.UI.animations.floating);

var ImageStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject5(), position);

var Inner = _styledComponents["default"].div(_templateObject6(), function (_ref3) {
  var backgroundColor = _ref3.backgroundColor;
  return _.UI.colors[backgroundColor];
}, function (_ref4) {
  var backgroundImage = _ref4.backgroundImage;
  return backgroundImage && "\n    background-image: url('".concat(process.env.GATSBY_CDN_HOST, "/").concat(backgroundImage, "');\n    background-position: center center;\n    background-size: cover;\n  ");
}, _.UI.breakpoints.mobile);
/**
 * Component
 */


var AnimationBubbles = function AnimationBubbles(_ref5) {
  var datas = _ref5.datas,
      className = _ref5.className;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    className: (0, _bind["default"])(className)
  }, datas.map(function (data, i) {
    return /*#__PURE__*/_react["default"].createElement(Cell, {
      key: i
    }, /*#__PURE__*/_react["default"].createElement(Card, {
      style: {
        animationDuration: "".concat(_.UI.animations.floatingDurations[(0, _numbers.random)(_.UI.animations.floatingDurations.length)], "s")
      },
      className: (0, _bind["default"])("card--position-".concat((0, _numbers.random)(4)), "card--size-".concat(data.size || 2), "card--shadow-".concat((0, _numbers.random)(3)))
    }, /*#__PURE__*/_react["default"].createElement(Inner, {
      backgroundColor: data.backgroundColor || 'white',
      backgroundImage: data.backgroundImage
    }, data.image && /*#__PURE__*/_react["default"].createElement(ImageStyled, {
      src: data.image,
      alt: data.alt,
      maxDpi: 1
    }), data.text && /*#__PURE__*/_react["default"].createElement(SmallTitleStyled, {
      color: data.backgroundColor !== 'white' && 'white',
      align: "center"
    }, data.text))));
  }));
};

var _default = AnimationBubbles;
exports["default"] = _default;