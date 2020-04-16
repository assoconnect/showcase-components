"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _ = require(".");

var _Footer = _interopRequireDefault(require("./Footer"));

var _styledComponents = require("styled-components");

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

/**
 * Component
 */
var Layout = /*#__PURE__*/function (_Component) {
  _inherits(Layout, _Component);

  var _super = _createSuper(Layout);

  function Layout() {
    _classCallCheck(this, Layout);

    return _super.apply(this, arguments);
  }

  _createClass(Layout, [{
    key: "componentDidMount",

    /**
     * Component did mount
     */
    value: function componentDidMount() {
      var _this$props = this.props,
          meta = _this$props.meta,
          _this$props$mixpanelE = _this$props.mixpanelEvent,
          mixpanelEvent = _this$props$mixpanelE === void 0 ? 'view.page' : _this$props$mixpanelE;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'page-viewed': meta.title
      });

      if (this.context.mixpanel) {
        this.context.mixpanel.track(mixpanelEvent);
      }
    }
    /**
     * Output
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          hreflangs = _this$props2.hreflangs,
          children = _this$props2.children,
          _this$props2$meta = _this$props2.meta,
          _this$props2$meta$tit = _this$props2$meta.title,
          title = _this$props2$meta$tit === void 0 ? 'AssoConnect' : _this$props2$meta$tit,
          description = _this$props2$meta.description,
          _this$props2$meta$ima = _this$props2$meta.image,
          image = _this$props2$meta$ima === void 0 ? 'common/component/head/facebook-600x600' : _this$props2$meta$ima,
          _this$props2$navigati = _this$props2.navigationType,
          navigationType = _this$props2$navigati === void 0 ? 'blue' : _this$props2$navigati,
          noindex = _this$props2.noindex,
          preFooter = _this$props2.preFooter,
          _this$props2$headerIt = _this$props2.headerItems,
          headerItems = _this$props2$headerIt === void 0 ? [] : _this$props2$headerIt,
          _this$props2$footerCo = _this$props2.footerColumns,
          footerColumns = _this$props2$footerCo === void 0 ? [] : _this$props2$footerCo,
          _this$props2$cta = _this$props2.cta,
          cta = _this$props2$cta === void 0 ? {
        network: {
          text: 'Placeholder',
          href: '/'
        },
        "default": {
          text: 'Placeholder',
          href: '/'
        }
      } : _this$props2$cta,
          _this$props2$footerSo = _this$props2.footerSocials,
          footerSocials = _this$props2$footerSo === void 0 ? [] : _this$props2$footerSo,
          _this$props2$footerCo2 = _this$props2.footerCopyrights,
          footerCopyrights = _this$props2$footerCo2 === void 0 ? [] : _this$props2$footerCo2,
          _this$props2$footerCt = _this$props2.footerCta,
          footerCta = _this$props2$footerCt === void 0 ? {
        demo: {
          link: '/',
          text: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Placeholder")
        },
        trial: {
          link: '/',
          text: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Placeholder ")
        }
      } : _this$props2$footerCt,
          translations = _this$props2.translations;
      var url = typeof window !== 'undefined' ? window.location.href : '';
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactHelmet["default"], {
        defer: false
      }, hreflangs.map(function (hreflang) {
        return /*#__PURE__*/_react["default"].createElement("link", {
          rel: "alternate",
          href: hreflang.href,
          hreflang: hreflang.lang
        });
      }), /*#__PURE__*/_react["default"].createElement("link", {
        rel: "canonical",
        href: url
      }), /*#__PURE__*/_react["default"].createElement("link", {
        rel: "dns-prefetch",
        href: "https://fonts.gstatic.com/"
      }), /*#__PURE__*/_react["default"].createElement("link", {
        rel: "dns-prefetch",
        href: "https://fonts.googleapis.com"
      }), /*#__PURE__*/_react["default"].createElement("link", {
        rel: "dns-prefetch",
        href: "https://showcase.azureedge.net"
      }), /*#__PURE__*/_react["default"].createElement("link", {
        rel: "dns-prefetch",
        href: "https://cdn.polyfill.io"
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        charSet: "utf-8"
      }), noindex && /*#__PURE__*/_react["default"].createElement("meta", {
        name: "robots",
        content: "noindex,nofollow"
      }), noindex && /*#__PURE__*/_react["default"].createElement("meta", {
        name: "googlebot",
        content: "noindex,nofollow"
      }), /*#__PURE__*/_react["default"].createElement("html", {
        lang: "fr"
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        property: "og:locale",
        content: "fr_FR"
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/_react["default"].createElement("title", null, title), /*#__PURE__*/_react["default"].createElement("meta", {
        property: "og:title",
        content: title
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        property: "og:site_name",
        content: "AssoConnect"
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        name: "description",
        content: description
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        property: "og:description",
        content: description
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        property: "og:image",
        content: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(image, ".png")
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        property: "og:image:width",
        content: "500"
      }), /*#__PURE__*/_react["default"].createElement("meta", {
        property: "og:image:height",
        content: "261"
      }), /*#__PURE__*/_react["default"].createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Baloo|Caveat:400,700|Roboto:300,400,700&display=swap",
        rel: "stylesheet"
      })), /*#__PURE__*/_react["default"].createElement(_.UI.GlobalStyle, null), /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: {
          breakpoints: [_.UI.breakpoints.mobile]
        }
      }, /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_.Navigation, {
        type: navigationType,
        cta: cta,
        items: headerItems,
        translations: translations
      }), children, /*#__PURE__*/_react["default"].createElement(_Footer["default"], {
        columns: footerColumns,
        copyrights: footerCopyrights,
        cta: footerCta,
        preFooter: preFooter,
        socials: footerSocials,
        translations: translations
      }))));
    }
  }]);

  return Layout;
}(_react.Component);

Layout.propTypes = {
  children: _propTypes["default"].node.isRequired
};
Layout.contextTypes = {
  mixpanel: _propTypes["default"].object.isRequired
};
var _default = Layout;
exports["default"] = _default;