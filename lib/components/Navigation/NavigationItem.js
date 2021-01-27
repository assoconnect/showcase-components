"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("..");

var _reactAnimateHeight = _interopRequireDefault(require("react-animate-height"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  /* Desktop mode */\n  @media screen and (min-width: ", ") {\n    background-color: ", ";\n    border-radius: 10px;\n    white-space: nowrap;\n    position: relative;\n    box-shadow: ", ";\n    flex-wrap: wrap;\n\n    &:before {\n      top: -6px;\n      left: 50%;\n      margin-left: -10px;\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 0 15px 10px;\n      border-color: transparent transparent ", " transparent;\n      content: ' ';\n    }\n  }\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    padding-bottom: 22px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  /* Desktop mode */\n  @media screen and (min-width: ", ") {\n    position: absolute;\n    top: 16px;\n    padding-top: 14px;\n    visibility: hidden;\n    opacity: 0;\n    transition: all 0.3s ease-out, left 0s;\n    display: block !important; /* Ignore the display none of the SlideToggle component */\n    width: ", "px;\n    left: -", "px;\n  }\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    box-shadow: inset 0 1px 16px 0 #dedede;\n    background-color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin-left: 10px;\n  transition: all linear 0.4s, rotate 0s;\n  opacity: 0.7;\n  transform: rotate(90deg);\n\n  .svg--color-primary {\n    transition: fill linear 0.2s;\n  }\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    margin-left: auto;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: 14px;\n  margin: 0 26px;\n  cursor: pointer;\n  letter-spacing: 0.02px;\n  color: ", ";\n  transition: all linear 0.2s;\n  opacity: 0.7;\n  text-align: left;\n\n  &:hover {\n    opacity: 1;\n\n    .navigation__arrow {\n      opacity: 1;\n    }\n  }\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    font-weight: ", ";\n    display: flex;\n    flex-direction: row !important; /* Force row direction in mobile mode */\n    align-items: center;\n    margin: auto;\n    width: 260px;\n    font-size: 17px;\n    padding-bottom: 15px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n\n  /* Show children */\n  &:hover .navigation__children {\n    visibility: visible;\n    opacity: 1;\n  }\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    display: block;\n    text-align: center;\n    margin-top: 40px;\n    margin-bottom: 15px;\n\n    &:first-child {\n      margin-top: 65px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var NavigationItemStyled = _styledComponents["default"].div(_templateObject(), _.UI.breakpoints.mobile);

var NavigationItemInner = _styledComponents["default"].div(_templateObject2(), _.UI.fonts.family.roboto, _.UI.fonts.weight.light, _.UI.colors.white, _.UI.breakpoints.mobile, _.UI.fonts.weight.normal);

var NavigationItemArrow = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject3(), _.UI.breakpoints.mobile);
var NavigationChildren = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_reactAnimateHeight["default"], props);
})(_templateObject4(), _.UI.breakpoints.mobile, function (_ref) {
  var width = _ref.width;
  return width;
}, function (_ref2) {
  var width = _ref2.width;
  return width / 3;
}, _.UI.breakpoints.mobile, _.UI.colors.extraLightGrey);
var NavigationChildrenInner = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Flex, props);
})(_templateObject5(), _.UI.breakpoints.mobile, _.UI.colors.white, _.UI.shadows.slider, _.UI.colors.white, _.UI.breakpoints.mobile);
/**
 * Component
 */

var NavigationItem = /*#__PURE__*/function (_Component) {
  _inherits(NavigationItem, _Component);

  var _super = _createSuper(NavigationItem);

  function NavigationItem() {
    var _this;

    _classCallCheck(this, NavigationItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      height: 0
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      var height = _this.state.height;
      var navigationMobileIsOpened = _this.props.navigationMobileIsOpened; // Never use AnimateHeight if the navigation mobile is closed

      if (navigationMobileIsOpened) {
        _this.setState({
          height: height === 0 ? 'auto' : 0
        });
      }
    });

    return _this;
  }

  _createClass(NavigationItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          href = _this$props.href,
          text = _this$props.text,
          children = _this$props.children,
          color = _this$props.color,
          width = _this$props.width,
          navigationMobileIsOpened = _this$props.navigationMobileIsOpened,
          nofollow = _this$props.nofollow;
      return /*#__PURE__*/_react["default"].createElement(NavigationItemStyled, {
        color: color
      }, /*#__PURE__*/_react["default"].createElement(NavigationItemInner, {
        className: "navigation__inner",
        onClick: this.toggle
      }, href ? /*#__PURE__*/_react["default"].createElement(_.Link, {
        href: href,
        isStyled: false,
        nofollow: nofollow
      }, text) : text, children && /*#__PURE__*/_react["default"].createElement(NavigationItemArrow, {
        height: "10px",
        width: "10px",
        color: "white",
        className: "navigation__arrow",
        src: "common/icon/unicolor/arrow"
      })), children && /*#__PURE__*/_react["default"].createElement(NavigationChildren // Never use AnimateHeight if the navigation mobile is closed
      , {
        height: navigationMobileIsOpened ? this.state.height : 'auto',
        duration: 300,
        width: width,
        className: "navigation__children"
      }, /*#__PURE__*/_react["default"].createElement(NavigationChildrenInner, {
        py: "5px"
      }, children)));
    }
  }]);

  return NavigationItem;
}(_react.Component);

var _default = NavigationItem;
exports["default"] = _default;