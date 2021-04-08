"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _ = require("../../");

require("slick-carousel/slick/slick.css");

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SliderCardArrow = function SliderCardArrow(_ref) {
  var onClick = _ref.onClick,
      navigation = _ref.navigation;

  var SliderCardArrowStyled = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    cursor: pointer;\n    ", ";\n    .svg--color-primary {\n      transition: 0.3s;\n    }\n    &:hover {\n      .svg--color-primary {\n        fill: ", ";\n      }\n    }\n  "])), navigation === 'previous' && "transform: rotate( -180deg)", _.UI.colors.middleGrey);

  return /*#__PURE__*/_react["default"].createElement(SliderCardArrowStyled, {
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_.Svg, {
    src: "common/icon/unicolor/arrow",
    width: "2.5rem",
    color: "lightGrey"
  }));
};

var SliderCardDots = _styledComponents["default"].ul(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  cursor: pointer;\n"])));

var SliderCardDot = _styledComponents["default"].span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 12px;\n  width: 12px;\n  border-radius: 50%;\n  background-color: ", ";\n  display: block;\n  margin: 10px;\n  transition: 0.3s;\n\n  .slick-active & {\n    background-color: ", ";\n  }\n"])), _.UI.colors.lightGrey, _.UI.colors.turquoise);

var SliderCardWrapper = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  .slick-slider {\n    display: flex;\n    align-items: center;\n    @media screen and (max-width: ", ") {\n      flex-direction: column-reverse;\n\n      .slick-list {\n        width: 100vw;\n      }\n    }\n  }\n"])), _.UI.breakpoints.mobile);

var SliderCardYado = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  max-width: 100%;\n  position: absolute;\n  bottom: -1.765rem;\n  right: calc(100% - 3rem);\n  height: 20.5rem;\n\n  @media screen and (max-width: ", ") {\n    display: none;\n  }\n"])), _.UI.breakpoints.mobile);
/**
 * Component
 */

var SliderCard = function SliderCard(_ref2) {
  var children = _ref2.children,
      yado = _ref2.yado,
      _ref2$slidesToShow = _ref2.slidesToShow,
      slidesToShow = _ref2$slidesToShow === void 0 ? 3 : _ref2$slidesToShow;
  var settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    focusOnSelect: true,
    centerPadding: '0',
    centerMode: true,
    nextArrow: /*#__PURE__*/_react["default"].createElement(SliderCardArrow, null),
    prevArrow: /*#__PURE__*/_react["default"].createElement(SliderCardArrow, {
      navigation: "previous"
    }),
    responsive: [{
      breakpoint: _.UI.breakpoints.mobile,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        appendDots: function appendDots(dots) {
          return /*#__PURE__*/_react["default"].createElement(SliderCardDots, null, dots);
        },
        customPaging: function customPaging(i) {
          return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(SliderCardDot, null));
        }
      }
    }]
  };
  return /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadComponent, {
    threshold: 400
  }, /*#__PURE__*/_react["default"].createElement(SliderCardWrapper, null, /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], settings, children), yado && /*#__PURE__*/_react["default"].createElement(SliderCardYado, {
    src: "common/yado/".concat(yado.image),
    alt: yado.alt
  })));
};

var _default = SliderCard;
exports["default"] = _default;