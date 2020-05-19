"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../");

var _numbers = require("../../../utils/numbers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: 0.824rem;\n  color: ", ";\n\n  @media screen and (max-width: ", ") {\n    display: none;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 15px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: -3.529rem;\n  right: 0.8rem;\n  height: 20.5rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: 1.375rem 0 0 1.375rem;\n  overflow: hidden;\n  text-align: left;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 1rem 1rem 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: 0 2px 25px 0 rgba(222, 222, 222, 0.6);\n  width: calc(100% / 3 - 2rem - 1px);\n  margin: 1rem;\n  border-radius: 0.588rem;\n  padding: 0.588rem;\n  animation: ", " 12s ease-in-out infinite;\n  position: relative;\n  text-align: center;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n\n  & .title--small {\n    font-size: 1rem;\n  }\n  &.card-last {\n    justify-content: center;\n  }\n  @media screen and (max-width: ", ") {\n    margin: 0.882rem;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: ", ";\n  width: 100%;\n  display: flex;\n  position: relative;\n  padding-left: 4.706rem;\n\n  border-radius: 1.647rem;\n  background-color: ", ";\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var Container = _styledComponents["default"].div(_templateObject(), _.UI.shadows.header, _.UI.colors.white);

var Card = _styledComponents["default"].div(_templateObject2(), _.UI.animations.floating, _.UI.colors.white, _.UI.breakpoints.mobile);

var Inner = _styledComponents["default"].div(_templateObject3());

var MenuStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject4());
var YadoStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject5());
var DashboardContainerStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject6());

var AnimationHeaderText = _styledComponents["default"].p(_templateObject7(), _.UI.fonts.family.baloo, _.UI.fonts.weight.light, _.UI.colors.blue, _.UI.breakpoints.mobile);
/**
 * Component
 */


var HeaderHomeAnimation = function HeaderHomeAnimation(_ref) {
  var cards = _ref.cards,
      srcYado = _ref.srcYado,
      yado = _ref.yado;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Container, {
    className: "hidden-mobile"
  }, /*#__PURE__*/_react["default"].createElement(MenuStyled, {
    src: "components/headers/header-home/navigation",
    visibleByDefault: true
  }), /*#__PURE__*/_react["default"].createElement(Inner, null, cards.map(function (card, i) {
    return /*#__PURE__*/_react["default"].createElement(Card, {
      key: i,
      style: {
        animationDuration: "".concat(_.UI.animations.floatingDurations[(0, _numbers.random)(_.UI.animations.floatingDurations.length)], "s")
      },
      className: "card"
    }, /*#__PURE__*/_react["default"].createElement(AnimationHeaderText, null, card.title), /*#__PURE__*/_react["default"].createElement(_.Svg, {
      width: "5rem",
      src: "common/icon/multicolor/".concat(card.image)
    }));
  }), /*#__PURE__*/_react["default"].createElement(Card, {
    style: {
      animationDuration: "".concat(_.UI.animations.floatingDurations[(0, _numbers.random)(_.UI.animations.floatingDurations.length)], "s")
    },
    className: "card card-last"
  }, /*#__PURE__*/_react["default"].createElement(_.Svg, {
    width: "5rem",
    color: "lightGrey",
    colorSecondary: "lightGrey",
    src: "common/icon/multicolor/more"
  }))), yado && /*#__PURE__*/_react["default"].createElement(YadoStyled, {
    src: yado.image,
    directSrc: true,
    className: "hidden-mobile",
    visibleByDefault: true
  })), /*#__PURE__*/_react["default"].createElement(DashboardContainerStyled, {
    className: "hidden-desktop",
    src: srcYado
  }));
};

var _default = HeaderHomeAnimation;
exports["default"] = _default;