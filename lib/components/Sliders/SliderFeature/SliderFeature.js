"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _ = require("../../");

var _SliderFeatureNavigation = _interopRequireDefault(require("./SliderFeatureNavigation"));

require("slick-carousel/slick/slick.css");

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SliderFeatureWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-width: 90%;\n  width: 55.882rem;\n  margin: 0 auto;\n  position: relative;\n\n  & .slick-list {\n    background-color: ", ";\n    border-radius: 0 0 1.176rem 1.176rem;\n    box-shadow: ", ";\n  }\n  & .slick-slider {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  @media screen and (max-width: ", ") {\n    width: calc(100% + 5rem);\n    margin-left: -2.5rem;\n    max-width: none;\n\n    & .slick-list {\n      background-color: transparent;\n      border-radius: 0;\n      box-shadow: none;\n    }\n  }\n"])), _.UI.colors.white, _.UI.shadows.slider, _.UI.breakpoints.mobile);

var SliderFeatureDots = _styledComponents["default"].ul(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"])));

var SliderFeatureYado = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  max-width: 100%;\n  position: absolute;\n  bottom: -1.765rem;\n  right: calc(100% - 3rem);\n  height: 20.5rem;\n  img {\n    max-width: none;\n    width: auto;\n    height: auto;\n  }\n"])));
/**
 * Component
 */

var SliderFeature = function SliderFeature(_ref) {
  var children = _ref.children,
      yado = _ref.yado;
  var settings = {
    infinite: true,
    arrows: false,
    dots: true,
    customPaging: function customPaging(i) {
      var _children$i$props = children[i].props,
          title = _children$i$props.title,
          image = _children$i$props.image;
      return /*#__PURE__*/_react["default"].createElement(_SliderFeatureNavigation["default"], {
        title: title,
        image: image
      });
    },
    appendDots: function appendDots(dots) {
      return /*#__PURE__*/_react["default"].createElement(SliderFeatureDots, null, dots);
    },
    responsive: [{
      breakpoint: _.UI.breakpoints.mobile,
      settings: {
        focusOnSelect: true
      }
    }]
  };
  return /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadComponent, {
    threshold: 400
  }, /*#__PURE__*/_react["default"].createElement(SliderFeatureWrapper, null, /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], settings, children), yado && /*#__PURE__*/_react["default"].createElement(SliderFeatureYado, {
    src: "common/yado/".concat(yado.image),
    alt: yado.alt,
    className: "hidden-mobile",
    visibleByDefault: true
  })));
};

var _default = SliderFeature;
exports["default"] = _default;