"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ = require("..");

var _NavigationChild = _interopRequireDefault(require("./NavigationChild"));

var _NavigationButtons = _interopRequireDefault(require("./NavigationButtons"));

var _NavigationItem = _interopRequireDefault(require("./NavigationItem"));

var _NavigationToggle = _interopRequireDefault(require("./NavigationToggle"));

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

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  margin: 18px 0;\n  font-family: ", ";\n  font-weight: ", ";\n  color: ", ";\n  font-size: 14px;\n  width: 270px;\n  margin: 25px auto 0;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  text-align: center;\n  ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  /* Mobile mode */\n  @media screen and (min-width: ", ") {\n    display: inherit;\n  }\n    display: none;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  /* Specific style for all features */\n  .navigation__child--all-features {\n    color: ", ";\n    font-weight: ", ";\n\n    /* Desktop mode */\n    @media screen and (min-width: ", ") {\n      border-top: 1px solid ", ";\n      text-align: center;\n      padding-top: 18px;\n      margin-top: 0;\n    }\n  }\n\n  /* Desktop mode */\n  @media screen and (min-width: ", ") {\n    && {\n      height: 85px;\n      margin-bottom: 15px;\n    }\n    /* Scroll fixed (only desktop mode) */\n  \n    ", ";\n  }\n  height: calc(100% - 60px);\n  margin-top: 60px;\n  overflow-y: scroll;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  @media screen and (min-width: ", ") {\n    transition: background-color ease-out 0.2s;\n    background-color: ", ";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 20;\n    padding-left: 2.5rem;\n  }\n  \n  /* White mode */\n  ", ";\n  /* Scroll Fixed (only desktop mode) */\n  ", ";\n  \n  padding-left: 0;\n  transition: all ease-out 0.2s;\n  ", ";\n  position: fixed;\n  bottom: 0;\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  @media screen and (min-width: ", ") {\n    height: 100px;\n  }\n  height: 59px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  @media screen and (min-width: ", ") {\n    && {\n      height: 60px;\n      margin-bottom: 0;\n      align-items: center;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  @media screen and (min-width: ", ") {\n    position: fixed;\n    box-shadow: 0 1px 14px 0 rgba(0, 0, 0, 0.19);\n    ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n\n  > .navigation__arrow .svg--color-primary,\n  .navigation__logo .svg--color-primary {\n    fill: ", ";\n  }\n  .navigation__buttons .button--theme-line-white {\n    color: ", ";\n    border-color: ", ";\n  }\n  .navigation__inner {\n    opacity: 1;\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n\n      > .navigation__arrow .svg--color-primary {\n        fill: ", ";\n      }\n    }\n    .navigation__arrow {\n      opacity: 1;\n\n      .svg--color-primary {\n        fill: ", ";\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Helpers css
 */
var navigationWhiteCss = (0, _styledComponents.css)(_templateObject(), _.UI.colors.white, _.UI.colors.blue, _.UI.colors.middleGrey, _.UI.colors.middleGrey, _.UI.colors.middleGrey, _.UI.colors.blue, _.UI.colors.blue, _.UI.colors.middleGrey);
var navigationFixedCss = (0, _styledComponents.css)(_templateObject2(), _.UI.breakpoints.mobile, navigationWhiteCss);
var navigationInnerFixedCss = (0, _styledComponents.css)(_templateObject3(), _.UI.breakpoints.mobile);
/**
 * Style
 */

var NavigationMargin = _styledComponents["default"].div(_templateObject4(), _.UI.breakpoints.mobile);

var NavigationStyled = _styledComponents["default"].nav(_templateObject5(), _.UI.breakpoints.mobile, _.UI.colors.blue, function (_ref) {
  var headerBackgroundColor = _ref.headerBackgroundColor;
  return headerBackgroundColor === 'white' && navigationWhiteCss;
}, function (_ref2) {
  var navigationIsFixed = _ref2.navigationIsFixed;
  return navigationIsFixed && navigationFixedCss;
}, function (_ref3) {
  var navigationMobileIsOpened = _ref3.navigationMobileIsOpened;
  return !navigationMobileIsOpened && 'left:-100%';
}, navigationWhiteCss);

var NavigationInner = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Flex, props);
})(_templateObject6(), _.UI.colors.darkGrey, _.UI.fonts.weight.bold, _.UI.breakpoints.mobile, _.UI.colors.extraLightGrey, _.UI.breakpoints.mobile, function (_ref4) {
  var navigationIsFixed = _ref4.navigationIsFixed;
  return navigationIsFixed && navigationInnerFixedCss;
});
var NavigationLogoWrapper = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Box, props);
})(_templateObject7(), _.UI.breakpoints.mobile);
var NavigationLogo = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject8(), function (_ref5) {
  var navigationIsFixed = _ref5.navigationIsFixed;
  return navigationIsFixed && "margin: auto;";
});

var NavigationChildTitle = _styledComponents["default"].div(_templateObject9(), _.UI.fonts.family.roboto, _.UI.fonts.weight.bold, _.UI.colors.darkGrey);
/**
 * Component
 */


var Navigation = /*#__PURE__*/function (_Component) {
  _inherits(Navigation, _Component);

  var _super = _createSuper(Navigation);

  function Navigation() {
    var _this;

    _classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      navigationChildIconLoad: false,
      navigationIsFixed: false,
      navigationMobileIsOpened: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleNavigationItemsMouseOver", function () {
      var navigationChildIconLoad = _this.state.navigationChildIconLoad;

      if (!navigationChildIconLoad) {
        _this.setState({
          navigationChildIconLoad: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleNavigationToggleBurger", function () {
      var navigationMobileIsOpened = _this.state.navigationMobileIsOpened;

      _this.setState({
        navigationMobileIsOpened: !navigationMobileIsOpened
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getNavigationLogoSrc", function (navigationIsFixed) {
      return navigationIsFixed ? 'common/logo/assoconnect-simple' : 'common/logo/assoconnect';
    });

    return _this;
  }

  _createClass(Navigation, [{
    key: "componentDidMount",

    /**
     * Component did mount
     */
    value: function componentDidMount() {
      var _this2 = this;

      // Fixed navigation on scroll
      window.onscroll = function () {
        var _this2$state = _this2.state,
            navigationMobileIsOpened = _this2$state.navigationMobileIsOpened,
            navigationIsFixed = _this2$state.navigationIsFixed; // Breakpoint

        var breakpoint;

        if (window.innerWidth > parseInt(_.UI.breakpoints.mobile.slice(0, -2))) {
          breakpoint = 100;
        } else {
          breakpoint = 0;
        } // Set state


        if (window.pageYOffset > breakpoint) {
          if (!navigationIsFixed) {
            _this2.setState({
              navigationIsFixed: true
            });
          }
        } else if (navigationIsFixed) {
          _this2.setState({
            navigationIsFixed: false
          });
        } // Toggle overflow of body


        if (navigationMobileIsOpened) {
          document.body.style.overflowY = 'hidden';
        } else {
          document.body.style.overflowY = 'scroll';
        }
      };
    }
    /**
     * Functions
     */
    // Update state after hover the navigation

  }, {
    key: "render",

    /**
     * Render
     */
    value: function render() {
      var _this$props = this.props,
          headerBackgroundColor = _this$props.headerBackgroundColor,
          homePath = _this$props.homePath,
          items = _this$props.items,
          navigationButtons = _this$props.navigationButtons;
      var _this$state = this.state,
          navigationChildIconLoad = _this$state.navigationChildIconLoad,
          navigationIsFixed = _this$state.navigationIsFixed,
          navigationMobileIsOpened = _this$state.navigationMobileIsOpened;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(NavigationMargin, null), /*#__PURE__*/_react["default"].createElement(_NavigationToggle["default"], {
        navigationIsFixed: navigationIsFixed,
        navigationToggleBurgerFunction: this.handleNavigationToggleBurger,
        navigationMobileIsOpened: navigationMobileIsOpened
      }), /*#__PURE__*/_react["default"].createElement(NavigationStyled, {
        headerBackgroundColor: headerBackgroundColor,
        navigationIsFixed: navigationIsFixed,
        navigationMobileIsOpened: navigationMobileIsOpened
      }, /*#__PURE__*/_react["default"].createElement(NavigationInner, {
        navigationIsFixed: navigationIsFixed,
        className: "navigation__inner",
        alignItems: "flex-end"
      }, /*#__PURE__*/_react["default"].createElement(NavigationLogoWrapper, {
        px: "0",
        width: "125px"
      }, /*#__PURE__*/_react["default"].createElement(_.Link, {
        href: homePath,
        isStyled: false
      }, /*#__PURE__*/_react["default"].createElement(NavigationLogo, {
        className: "navigation__logo",
        navigationIsFixed: navigationIsFixed,
        color: "white",
        width: "auto",
        height: navigationIsFixed ? '38px' : '65px',
        src: this.getNavigationLogoSrc(navigationIsFixed)
      }))), !!items && /*#__PURE__*/_react["default"].createElement(_.Box, {
        width: "auto",
        px: [0, '30px'],
        mb: ['40px', '-4px'],
        onMouseOver: this.handleNavigationItemsMouseOver
      }, items.map(function (navigationItem, i) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
          key: i
        }, navigationItem.boxes ? /*#__PURE__*/_react["default"].createElement(_NavigationItem["default"], {
          width: navigationItem.width,
          navigationMobileIsOpened: navigationMobileIsOpened,
          text: navigationItem.text,
          href: navigationItem.href
        }, navigationItem.boxes.map(function (box, j) {
          return /*#__PURE__*/_react["default"].createElement(_.Box, {
            key: j,
            width: "auto",
            px: [0, '20px']
          }, /*#__PURE__*/_react["default"].createElement(NavigationChildTitle, null, box.title), box.children.map(function (navigationChild, k) {
            return /*#__PURE__*/_react["default"].createElement(_NavigationChild["default"], {
              arrow: navigationChild.arrow,
              href: navigationChild.href,
              icon: navigationChild.icon && navigationChild.icon,
              key: k,
              loadIcon: navigationChildIconLoad,
              text: navigationChild.text
            });
          }));
        }), navigationItem.footer && /*#__PURE__*/_react["default"].createElement(_.Box, {
          width: 1,
          px: 0
        }, /*#__PURE__*/_react["default"].createElement(_NavigationChild["default"], {
          text: navigationItem.footer.text,
          arrow: true,
          className: "navigation__child--all-features",
          href: navigationItem.footer.href,
          loadIcon: navigationChildIconLoad
        }))) : /*#__PURE__*/_react["default"].createElement(_NavigationItem["default"], {
          width: navigationItem.width,
          navigationMobileIsOpened: navigationMobileIsOpened,
          text: navigationItem.text,
          href: navigationItem.href
        }));
      })), /*#__PURE__*/_react["default"].createElement(_.Box, {
        width: "auto",
        mt: ['auto', 0],
        ml: "auto",
        px: [0, '30px']
      }, /*#__PURE__*/_react["default"].createElement(_NavigationButtons["default"], {
        navigationButtons: navigationButtons
      })))));
    }
  }]);

  return Navigation;
}(_react.Component);

var _default = Navigation;
exports["default"] = _default;