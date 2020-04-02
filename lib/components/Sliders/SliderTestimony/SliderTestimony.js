"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _ = require("../../");

var _SliderTestimonyNavigation = _interopRequireDefault(require("./SliderTestimonyNavigation"));

require("slick-carousel/slick/slick.css");

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n\n  .slick-prev {\n    transform: rotate(-90deg);\n  }\n  .slick-next {\n    transform: rotate(90deg);\n  }\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    display: none;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  .slick-list {\n    width: ", "px;\n  }\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    width: 100vw;\n    max-width: 350px;\n    .slick-list {\n      width: 100%;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 1;\n  top: -2.714rem;\n  left: -3.353rem;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    left: auto;\n    top: -1rem;\n    right: 40px;\n    svg {\n      width: 5.5rem;\n      height: 5.5rem;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - ", "px);\n  margin-left: ", "px;\n  position: relative;\n\n  /* Desktop mode */\n  @media screen and (min-width: ", ") {\n    & .slick-list {\n      background-color: ", ";\n      border-radius: 1.176rem;\n      box-shadow: ", ";\n    }\n  }\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    width: 100%;\n    margin-left: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  @media screen and (max-width: ", ") {\n    flex-direction: column-reverse;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 90%;\n  width: 63.529rem;\n  margin: 0 auto;\n  text-align: center;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    max-width: none;\n    width: 100vw;\n    margin-left: -2.5rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var widthNav = 150;

var SliderTestimonyWrapper = _styledComponents["default"].div(_templateObject(), _.UI.breakpoints.mobile);

var SliderTestimonyFlex = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Flex, props);
})(_templateObject2(), _.UI.breakpoints.mobile);

var SliderTestimonyStyled = _styledComponents["default"].div(_templateObject3(), widthNav * 2, widthNav, _.UI.breakpoints.mobile, _.UI.colors.white, _.UI.shadows.slider, _.UI.breakpoints.mobile);

var SliderTestimonyQuote = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject4(), _.UI.breakpoints.mobile);

var SliderTestimonyNavigationStyled = _styledComponents["default"].div(_templateObject5(), widthNav, _.UI.breakpoints.mobile);

var SliderTestimonyArrowsStyled = _styledComponents["default"].div(_templateObject6(), _.UI.breakpoints.mobile);

var SliderTestimonyArrows = function SliderTestimonyArrows(_ref) {
  var onClick = _ref.onClick,
      color = _ref.color,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement(SliderTestimonyArrowsStyled, {
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_.Svg, {
    width: "1.941rem",
    height: "1.941rem",
    src: "common/icon/unicolor/arrow",
    color: color,
    className: (0, _bind["default"])(className)
  }));
};
/**
 * Component
 */


var SliderTestimony = /*#__PURE__*/function (_Component) {
  _inherits(SliderTestimony, _Component);

  var _super = _createSuper(SliderTestimony);

  function SliderTestimony() {
    var _this;

    _classCallCheck(this, SliderTestimony);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "settingsSlider", {
      infinite: true,
      arrows: false,
      dots: false,
      fade: true,
      responsive: [{
        breakpoint: _.UI.breakpoints.mobile,
        settings: {
          focusOnSelect: true
        }
      }]
    });

    _defineProperty(_assertThisInitialized(_this), "settingsNavigation", {
      infinite: true,
      slidesToShow: 3,
      vertical: true,
      focusOnSelect: true,
      centerPadding: '0',
      centerMode: true,
      nextArrow: /*#__PURE__*/_react["default"].createElement(SliderTestimonyArrows, {
        color: _this.props.color
      }),
      prevArrow: /*#__PURE__*/_react["default"].createElement(SliderTestimonyArrows, {
        color: _this.props.color
      }),
      responsive: [{
        breakpoint: _.UI.breakpoints.mobile,
        settings: {
          vertical: false
        }
      }]
    });

    _defineProperty(_assertThisInitialized(_this), "state", {
      nav: null,
      slider: null
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return /*#__PURE__*/_react["default"].createElement(SliderTestimonyWrapper, {
        className: (0, _bind["default"])(_this.props.className)
      }, /*#__PURE__*/_react["default"].createElement(SliderTestimonyFlex, {
        custom: false,
        alignItems: "center"
      }, /*#__PURE__*/_react["default"].createElement(SliderTestimonyStyled, null, /*#__PURE__*/_react["default"].createElement(SliderTestimonyQuote, {
        width: "6rem",
        color: "turquoise",
        src: "components/slider-testimonies/quote"
      }), /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], _extends({
        ref: function ref(slider) {
          return _this.slider = slider;
        },
        asNavFor: _this.nav
      }, _this.settingsSlider), _react["default"].Children.map(_this.props.children, function (child) {
        return _react["default"].cloneElement(child, {
          maxLenghtTestimony: _this.props.maxLenghtTestimony
        });
      }))), /*#__PURE__*/_react["default"].createElement(SliderTestimonyNavigationStyled, null, /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], _extends({
        ref: function ref(slider) {
          return _this.nav = slider;
        },
        asNavFor: _this.slider
      }, _this.settingsNavigation), _react["default"].Children.map(_this.props.children, function (_ref2, i) {
        var user = _ref2.props.user;
        return /*#__PURE__*/_react["default"].createElement(_SliderTestimonyNavigation["default"], _extends({
          color: _this.props.color,
          key: i,
          maxLenghtTestimony: _this.props.maxLenghtTestimony
        }, user));
      })))));
    });

    return _this;
  }

  _createClass(SliderTestimony, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        nav: this.nav,
        slider: this.slider
      });
    }
  }]);

  return SliderTestimony;
}(_react.Component);

SliderTestimony.displayName = 'SliderTestimony'; // https://github.com/facebook/react/issues/4915#issuecomment-335803765

var _default = SliderTestimony;
exports["default"] = _default;