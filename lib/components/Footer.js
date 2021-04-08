"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactAnimateHeight = _interopRequireDefault(require("react-animate-height"));

var _translations = require("../utils/translations");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var FooterSocialWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    display: flex;\n    justify-content: space-between;\n  }\n"])), _.UI.breakpoints.mobile);

var FooterSocial = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 2px 2.7px;\n  display: inline-block;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    svg {\n      width: 2rem;\n      height: 2rem;\n    }\n    margin: 0;\n  }\n"])), _.UI.breakpoints.mobile);
var FooterLogoAssoconnect = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 2px;\n  margin-bottom: 0.5rem;\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    svg {\n      width: 8.5rem;\n    }\n    margin-left: auto;\n    margin-right: auto;\n  }\n"])), _.UI.breakpoints.mobile);
var FooterInner = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Flex, props);
})(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  max-width: ", "px;\n  display: inline-block;\n  width: 100%;\n  text-align: left;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    max-width: 17.647rem;\n    width: 90%;\n    text-align: center;\n  }\n"])), _.UI.widthBoxed, _.UI.breakpoints.mobile);

var FooterCopyright = _styledComponents["default"].p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  text-align: center;\n  margin: 1rem;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    margin: 0;\n  }\n"])), _.UI.breakpoints.mobile);

var FooterStyled = _styledComponents["default"].footer(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: 0.824rem;\n  color: ", ";\n  padding: 1rem 30px;\n  background-color: ", ";\n  position: relative;\n  z-index: 10;\n  text-align: center;\n  background: linear-gradient(to bottom, #00174d, #011e62 11.765rem);\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    font-size: 0.9rem;\n  }\n"])), _.UI.fonts.family.roboto, _.UI.fonts.weight.light, _.UI.colors.white, _.UI.colors.darkBlue, _.UI.breakpoints.mobile);

var FooterTitle = _styledComponents["default"].li(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  text-transform: uppercase;\n  margin: 1rem 0;\n  text-align: left;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer;\n  }\n"])), _.UI.breakpoints.mobile);

var FooterWave = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  bottom: calc(100% - 1px);\n  left: 0;\n  z-index: -1;\n  pointer-events: none;\n"])));
var FooterLink = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Link, props);
})(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  opacity: 0.5;\n  transition: 0.3s;\n\n  &:hover {\n    opacity: 1;\n  }\n"])));
var FooterArrow = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, _extends({
    src: "common/icon/unicolor/arrow"
  }, props));
})(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  footer & {\n    transition: 0.3s;\n\n    &.footer__section--open {\n      transform: rotate(90deg);\n    }\n  }\n"])));

var FooterList = _styledComponents["default"].li(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  text-align: left;\n  @media screen and (max-width: ", ") {\n    line-height: 48px;\n  }\n"])), _.UI.breakpoints.mobile);

var FooterLanguageSwitch = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement("select", props);
})(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  border-radius: 4px;\n  padding: 5px 20px 5px 5px;\n  font-size: 14px;\n  border: 1px solid #fff;\n  background: transparent;\n  color: #fff;\n  margin: 14px 0 2px;\n"])));
var FooterLanguageSwitchOption = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement("option", props);
})(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  color: #626262;\n  background: #fff;\n  transition: 0.3s ease;\n  min-height: 29px;\n"])));
/**
 * Component used
 */

var AnimationFooter = /*#__PURE__*/function (_React$Component) {
  _inherits(AnimationFooter, _React$Component);

  var _super = _createSuper(AnimationFooter);

  function AnimationFooter() {
    var _this;

    _classCallCheck(this, AnimationFooter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      height: 0
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      var height = _this.state.height;

      _this.setState({
        height: height === 0 ? 'auto' : 0
      });
    });

    return _this;
  }

  _createClass(AnimationFooter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement(FooterTitle, {
        onClick: this.toggle
      }, this.props.title, /*#__PURE__*/_react["default"].createElement(FooterArrow, {
        width: "10px",
        color: "white",
        className: this.state.height === 0 ? 'footer__section--close' : 'footer__section--open'
      })), /*#__PURE__*/_react["default"].createElement(_reactAnimateHeight["default"], {
        height: this.state.height
      }, this.props.items.map(function (field, i) {
        return /*#__PURE__*/_react["default"].createElement(FooterList, {
          key: i
        }, /*#__PURE__*/_react["default"].createElement(FooterLink, {
          href: field.href,
          externalLink: field.externalLink ? true : false,
          isStyled: false
        }, field.text));
      })));
    }
  }]);

  return AnimationFooter;
}(_react["default"].Component);
/**
 * Component
 */


var Footer = function Footer(_ref) {
  var columns = _ref.columns,
      copyrights = _ref.copyrights,
      cta = _ref.cta,
      preFooter = _ref.preFooter,
      socials = _ref.socials,
      translations = _ref.translations;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, preFooter && /*#__PURE__*/_react["default"].createElement(_.Section, {
    wave: {
      color: 'blue'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: 1
  }, /*#__PURE__*/_react["default"].createElement(_.MiddleTitle, null, (0, _translations.formatMessage)('footer_ready', translations)), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "big"
  })), /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: 1 / 2,
    align: "right"
  }, /*#__PURE__*/_react["default"].createElement(_.ButtonLink, {
    align: "center",
    href: cta.trial.link
  }, cta.trial.text), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "small",
    className: "hidden-desktop"
  })), /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: 1 / 2
  }, /*#__PURE__*/_react["default"].createElement(_.ButtonLink, {
    align: "center",
    href: cta.demo.link,
    theme: "white"
  }, cta.demo.text)), /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: 1
  }, /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "medium"
  }))), /*#__PURE__*/_react["default"].createElement(FooterStyled, null, /*#__PURE__*/_react["default"].createElement(FooterWave, {
    width: "110vw",
    height: "auto",
    color: "extraDarkBlue",
    src: "components/footer/footer-wave"
  }), /*#__PURE__*/_react["default"].createElement(FooterInner, null, /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "medium",
    className: "hidden-desktop"
  }), /*#__PURE__*/_react["default"].createElement(FooterLogoAssoconnect, {
    color: "white",
    width: "7.059rem",
    height: "auto",
    src: "common/logo/".concat((0, _translations.formatMessage)('site_name', translations))
  }), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "medium",
    className: "hidden-desktop"
  }), /*#__PURE__*/_react["default"].createElement(FooterSocialWrapper, null, socials.map(function (social, i) {
    return /*#__PURE__*/_react["default"].createElement(FooterLink, {
      href: social.href,
      key: i,
      isStyled: false
    }, /*#__PURE__*/_react["default"].createElement(FooterSocial, {
      width: "1.176rem",
      color: "white",
      src: social.icon
    }));
  })), /*#__PURE__*/_react["default"].createElement(FooterLanguageSwitch, {
    value: (0, _translations.formatMessage)('site_url', translations),
    onChange: function onChange(event) {
      window.location.href = event.target.value;
    }
  }, /*#__PURE__*/_react["default"].createElement(FooterLanguageSwitchOption, {
    value: "https://www.springly.org/en-us/"
  }, "English (USA)"), /*#__PURE__*/_react["default"].createElement(FooterLanguageSwitchOption, {
    value: "https://www.assoconnect.com/"
  }, "France")), /*#__PURE__*/_react["default"].createElement(_.Flex, {
    justifyContent: "space-between",
    className: "hidden-mobile"
  }, columns.map(function (footerColumn, i) {
    return /*#__PURE__*/_react["default"].createElement("ul", {
      key: i
    }, /*#__PURE__*/_react["default"].createElement(FooterTitle, null, footerColumn.title), footerColumn.items.map(function (field, j) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: "".concat(i, "-").concat(j)
      }, /*#__PURE__*/_react["default"].createElement(FooterLink, {
        href: field.href,
        nofollow: field.nofollow,
        isStyled: false
      }, field.text));
    }));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "hidden-desktop"
  }, /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "medium"
  }), columns.map(function (footerColumn, i) {
    return /*#__PURE__*/_react["default"].createElement(AnimationFooter, _extends({}, footerColumn, {
      key: i
    }));
  }), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "medium"
  })), /*#__PURE__*/_react["default"].createElement(FooterCopyright, null, (0, _translations.formatMessage)('footer_copyright', translations), copyrights.map(function (copyright, i) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: i
    }, /*#__PURE__*/_react["default"].createElement("span", null, " \u2022 "), /*#__PURE__*/_react["default"].createElement(FooterLink, {
      href: copyright.href,
      isStyled: false
    }, copyright.text));
  })))));
};

var _default = Footer;
exports["default"] = _default;