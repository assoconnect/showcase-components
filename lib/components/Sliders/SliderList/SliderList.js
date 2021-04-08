"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _ = require("../../");

var _SliderListNavigation = _interopRequireDefault(require("./SliderListNavigation"));

require("slick-carousel/slick/slick.css");

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SliderListWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n\n  & .slick-slider {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  @media screen and (max-width: ", ") {\n    width: calc(100% + 60px);\n    margin-left: -30px;\n    max-width: none;\n\n    & .slick-list {\n      background-color: transparent;\n      border-radius: 0;\n      box-shadow: none;\n    }\n  }\n"])), _.UI.breakpoints.mobile);

var SliderListDots = _styledComponents["default"].ul(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"])));

var SliderListYado = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  max-width: 100%;\n  position: absolute;\n  bottom: -3rem;\n  left: -100px;\n  height: 20.5rem;\n\n  @media screen and (max-width: ", ") {\n    display: none;\n  }\n"])), _.UI.breakpoints.mobile);
/**
 * Component
 */

var SliderList = function SliderList(_ref) {
  var children = _ref.children,
      yado = _ref.yado;
  var settings = {
    infinite: true,
    arrows: false,
    dots: true,
    customPaging: function customPaging(i) {
      var navigation = children[i].props.navigation;
      return /*#__PURE__*/_react["default"].createElement(_SliderListNavigation["default"], {
        title: navigation
      });
    },
    appendDots: function appendDots(dots) {
      return /*#__PURE__*/_react["default"].createElement(SliderListDots, null, dots);
    },
    responsive: [{
      breakpoint: _.UI.breakpoints.mobile,
      settings: {
        focusOnSelect: true
      }
    }]
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadComponent, {
    threshold: 400
  }, /*#__PURE__*/_react["default"].createElement(SliderListWrapper, null, /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], settings, children), yado && /*#__PURE__*/_react["default"].createElement(SliderListYado, {
    src: "common/yado/".concat(yado.src),
    alt: yado.alt,
    className: "hidden-mobile",
    visibleByDefault: true
  })), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "big"
  })));
};

var _default = SliderList;
exports["default"] = _default;