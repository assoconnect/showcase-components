"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _reactScroll = require("react-scroll");

var _bind = _interopRequireDefault(require("classnames/bind"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _atob = _interopRequireDefault(require("atob"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: underline;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var commonStyle = (0, _styledComponents.css)(_templateObject());
var GatsbyLinkStyled = (0, _styledComponents["default"])(function (_ref) {
  var isStyled = _ref.isStyled,
      rest = _objectWithoutProperties(_ref, ["isStyled"]);

  return /*#__PURE__*/_react["default"].createElement(_gatsby.Link, rest);
})(_templateObject2(), function (_ref2) {
  var isStyled = _ref2.isStyled;
  return isStyled && commonStyle;
});
var ScrollLinkStyled = (0, _styledComponents["default"])(function (_ref3) {
  var isStyled = _ref3.isStyled,
      rest = _objectWithoutProperties(_ref3, ["isStyled"]);

  return /*#__PURE__*/_react["default"].createElement(_reactScroll.Link, rest);
})(_templateObject3(), function (_ref4) {
  var isStyled = _ref4.isStyled;
  return isStyled && commonStyle;
});
var LinkStyled = (0, _styledComponents["default"])(function (_ref5) {
  var isStyled = _ref5.isStyled,
      children = _ref5.children,
      rest = _objectWithoutProperties(_ref5, ["isStyled", "children"]);

  return /*#__PURE__*/_react["default"].createElement("a", rest, children);
})(_templateObject4(), function (_ref6) {
  var isStyled = _ref6.isStyled;
  return isStyled && commonStyle;
});
var ObfuscatedLinkStyled = (0, _styledComponents["default"])(function (_ref7) {
  var isStyled = _ref7.isStyled,
      rest = _objectWithoutProperties(_ref7, ["isStyled"]);

  return /*#__PURE__*/_react["default"].createElement("span", rest);
})(_templateObject5(), function (_ref8) {
  var isStyled = _ref8.isStyled;
  return isStyled && commonStyle;
});
/**
 * Returns the rel noopener and noreferrer if target === _blank
 */

var getNoopenerNoreferrer = function getNoopenerNoreferrer(target) {
  return target === '_blank' ? 'noopener noreferrer' : '';
};
/**
 * Component
 */


var Link = function Link(_ref9) {
  var children = _ref9.children,
      className = _ref9.className,
      _ref9$href = _ref9.href,
      href = _ref9$href === void 0 ? '' : _ref9$href,
      _ref9$nofollow = _ref9.nofollow,
      nofollow = _ref9$nofollow === void 0 ? null : _ref9$nofollow,
      _ref9$isStyled = _ref9.isStyled,
      isStyled = _ref9$isStyled === void 0 ? true : _ref9$isStyled,
      _ref9$target = _ref9.target,
      target = _ref9$target === void 0 ? null : _ref9$target;

  // Anchor link
  if (href && href.indexOf('#') === 0) {
    return /*#__PURE__*/_react["default"].createElement(ScrollLinkStyled, {
      to: href.substring(1),
      smooth: true,
      offset: -60,
      className: (0, _bind["default"])(className),
      isStyled: isStyled
    }, children);
  } // Internal link
  else if (href && href.indexOf('/') === 0) {
      var rel = [];
      var props = {}; // Follow by default, add nofollow if property nofollow === true

      if (nofollow) {
        rel.push('nofollow');
      } // Noopener noreferrer To avoid the warning "Using target="_blank" without rel="noopener noreferrer" is a security risk: see https://mathiasbynens.github.io/rel-noopener..."


      var noopenerNoreferrer = getNoopenerNoreferrer(target);

      if (noopenerNoreferrer) {
        rel.push(noopenerNoreferrer);
      } // Add the tag only if it contains information to optimize the seo


      if (rel.length) {
        props.rel = rel.join(' ');
      }

      return /*#__PURE__*/_react["default"].createElement(GatsbyLinkStyled, _extends({
        to: href,
        className: (0, _bind["default"])('link', className),
        target: target,
        isStyled: isStyled
      }, props), children);
    } // Obfuscate link
    else if (href.match(/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/) !== null) {
        var hrefDecoded = (0, _atob["default"])(href);
        return /*#__PURE__*/_react["default"].createElement(ObfuscatedLinkStyled, {
          onClick: function onClick() {
            // New tab
            if (target || hrefDecoded.indexOf('http') !== -1) {
              window.open(hrefDecoded, target || '_blank');
            } // Current tab
            else {
                window.location.href = hrefDecoded;
              }
          },
          className: (0, _bind["default"])('link', className),
          isStyled: isStyled
        }, children);
      } // External link
      else {
          var _rel = [];
          var _props = {}; // Nofollow by default and overwrite if property nofollow === false (fix: https://gitlab.com/assoconnect/assoconnect/-/issues/18675)

          if (nofollow !== false) {
            _rel.push('nofollow');
          } // Target default value for the external link


          target = target || '_blank'; // Noopener noreferrer To avoid the warning "Using target="_blank" without rel="noopener noreferrer" is a security risk: see https://mathiasbynens.github.io/rel-noopener..."

          var _noopenerNoreferrer = getNoopenerNoreferrer(target);

          if (_noopenerNoreferrer) {
            _rel.push(_noopenerNoreferrer);
          } // Add the tag only if it contains information to optimize the seo


          if (_rel.length) {
            _props.rel = _rel.join(' ');
          }

          return /*#__PURE__*/_react["default"].createElement(LinkStyled, _extends({
            href: href,
            className: (0, _bind["default"])('link', className),
            isStyled: isStyled,
            target: target
          }, _props), children);
        }
};

var _default = Link;
exports["default"] = _default;