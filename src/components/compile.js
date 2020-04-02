"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _bind = _interopRequireDefault(require("classnames/bind"));

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  &,\n  .slick-slide & {\n    display: inline-block;\n    max-width: 100%;\n    max-height: 100%;\n    width: ", ";\n    height: ", ";\n    ", "\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: ", ";\n  width: ", ";\n  height: ", ";\n  margin: auto;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var ImageWrapper = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var align = _ref.align;
  return align;
}, function (_ref2) {
  var width = _ref2.width;
  return width;
}, function (_ref3) {
  var height = _ref3.height;
  return height;
}, function (_ref4) {
  var inline = _ref4.inline;
  return inline && 'display: inline-block; vertical-align:middle;';
});

var ImageStyled = _styledComponents["default"].img(_templateObject2(), function (_ref5) {
  var width = _ref5.width;
  return width;
}, function (_ref6) {
  var height = _ref6.height;
  return height;
}, function (_ref7) {
  var roundShape = _ref7.roundShape;
  return roundShape && 'border-radius:50%';
});
/**
 * Component
 */


var AdaptiveImage = function AdaptiveImage(_ref8) {
  var src = _ref8.src,
      className = _ref8.className,
      _ref8$alt = _ref8.alt,
      alt = _ref8$alt === void 0 ? '' : _ref8$alt,
      _ref8$align = _ref8.align,
      align = _ref8$align === void 0 ? 'center' : _ref8$align,
      _ref8$width = _ref8.width,
      width = _ref8$width === void 0 ? 'auto' : _ref8$width,
      _ref8$height = _ref8.height,
      height = _ref8$height === void 0 ? 'auto' : _ref8$height,
      _ref8$maxDpi = _ref8.maxDpi,
      maxDpi = _ref8$maxDpi === void 0 ? 2 : _ref8$maxDpi,
      _ref8$visibleByDefaul = _ref8.visibleByDefault,
      visibleByDefault = _ref8$visibleByDefaul === void 0 ? false : _ref8$visibleByDefaul,
      inline = _ref8.inline,
      _ref8$roundShape = _ref8.roundShape,
      roundShape = _ref8$roundShape === void 0 ? false : _ref8$roundShape,
      style = _ref8.style;
  return /*#__PURE__*/_react["default"].createElement(ImageWrapper, {
    width: width,
    align: align,
    height: height,
    className: (0, _bind["default"])('image', className),
    inline: inline,
    style: style
  }, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadComponent, {
    threshold: 400,
    visibleByDefault: visibleByDefault
  }, /*#__PURE__*/_react["default"].createElement("picture", null, /*#__PURE__*/_react["default"].createElement("source", {
    type: "image/webp",
    media: "(max-width: 500px)",
    srcSet: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-mobile.webp, ").concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-mobile-2x.webp 2x") + (maxDpi >= 2 ? ", ".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-mobile-4x.webp 4x") : '')
  }), /*#__PURE__*/_react["default"].createElement("source", {
    type: "image/webp",
    srcSet: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, ".webp") + (maxDpi >= 2 ? ", ".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-2x.webp 2x") : '') + (maxDpi >= 4 ? ", ".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-4x.webp 4x") : '')
  }), /*#__PURE__*/_react["default"].createElement("source", {
    media: "(max-width: 500px)",
    srcSet: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-mobile.png, ").concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-mobile-2x.png 2x") + (maxDpi >= 2 ? ", ".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-mobile-4x.png 4x") : '')
  }), /*#__PURE__*/_react["default"].createElement("source", {
    srcSet: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, ".png") + (maxDpi >= 2 ? ", ".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-2x.png 2x") : '') + (maxDpi >= 4 ? ", ".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, "-4x.png 4x") : '')
  }), /*#__PURE__*/_react["default"].createElement(ImageStyled, {
    src: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, ".png"),
    alt: alt,
    roundShape: roundShape,
    width: width,
    height: height
  }))));
};

AdaptiveImage.displayName = 'AdaptiveImage';
var _default = AdaptiveImage;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _numbers = require("../../utils/numbers");

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  border-radius: 50%;\n  background-color: ", ";\n  position: absolute;\n\n  ", ";\n\n  .card--size-1 & {\n    width: 90%;\n    padding-bottom: 90%;\n  }\n  .card--size-2 & {\n    width: 65%;\n    padding-bottom: 65%;\n  }\n  .card--size-3 & {\n    width: 50%;\n    padding-bottom: 50%;\n  }\n\n  @media screen and (max-width: ", ") {\n    .card--size-1 & {\n      width: 95%;\n      padding-bottom: 95%;\n    }\n    .card--size-2 & {\n      width: 75%;\n      padding-bottom: 75%;\n    }\n    .card--size-3 & {\n      width: 65%;\n      padding-bottom: 65%;\n    }\n  }\n\n  .card--shadow-0 & {\n    box-shadow: 0 22px 23px 9px rgba(0, 0, 0, 0.15);\n  }\n  .card--shadow-1 & {\n    box-shadow: 0 9px 38px 0 rgba(0, 0, 0, 0.15);\n  }\n  .card--shadow-2 & {\n    box-shadow: 0 13px 21px rgba(0, 0, 0, 0.15);\n  }\n\n  .card--position-0 & {\n    bottom: 0;\n    right: 0;\n  }\n  .card--position-1 & {\n    top: 0;\n    left: 0;\n  }\n  .card--position-2 & {\n    top: 0;\n    right: 0;\n  }\n  .card--position-3 & {\n    bottom: 0;\n    left: 0;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  max-width: 80% !important;\n  max-height: 90%;\n  width: 100%;\n  ", ";\n  img {\n    height: auto;\n    width: auto;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding-bottom: 100%;\n  position: relative;\n  text-align: center;\n  animation: ", " 12s ease-in-out infinite;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% / 4 - 1.176rem);\n  margin: 0.588rem;\n  @media screen and (max-width: 600px) {\n    width: calc(100% / 3 - 1.176rem);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 90%;\n  padding: 10px;\n  ", ";\n\n  ", ";\n\n  @media screen and (max-width: 600px) {\n    font-size: 0.7rem !important;\n    line-height: 1em !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var position = "\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: block;\n";
var SmallTitleStyled = (0, _styledComponents["default"])(function (_ref) {
  var backgroundColor = _ref.backgroundColor,
      props = _objectWithoutProperties(_ref, ["backgroundColor"]);

  return /*#__PURE__*/_react["default"].createElement(_.SmallTitle, props);
})(_templateObject(), position, function (_ref2) {
  var backgroundColor = _ref2.backgroundColor;
  return backgroundColor && backgroundColor !== 'white' && "color: ".concat(_.UI.colors.white, ";");
});

var Container = _styledComponents["default"].div(_templateObject2());

var Cell = _styledComponents["default"].div(_templateObject3());

var Card = _styledComponents["default"].div(_templateObject4(), _.UI.animations.floating);

var ImageStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject5(), position);

var Inner = _styledComponents["default"].div(_templateObject6(), function (_ref3) {
  var backgroundColor = _ref3.backgroundColor;
  return _.UI.colors[backgroundColor];
}, function (_ref4) {
  var backgroundImage = _ref4.backgroundImage;
  return backgroundImage && "\n    background-image: url('".concat(process.env.GATSBY_CDN_HOST, "/").concat(backgroundImage, "');\n    background-position: center center;\n    background-size: cover;\n  ");
}, _.UI.breakpoints.mobile);
/**
 * Component
 */


var AnimationBubbles = function AnimationBubbles(_ref5) {
  var datas = _ref5.datas,
      className = _ref5.className;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    className: (0, _bind["default"])(className)
  }, datas.map(function (data, i) {
    return /*#__PURE__*/_react["default"].createElement(Cell, {
      key: i
    }, /*#__PURE__*/_react["default"].createElement(Card, {
      style: {
        animationDuration: "".concat(_.UI.animations.floatingDurations[(0, _numbers.random)(_.UI.animations.floatingDurations.length)], "s")
      },
      className: (0, _bind["default"])("card--position-".concat((0, _numbers.random)(4)), "card--size-".concat(data.size || 2), "card--shadow-".concat((0, _numbers.random)(3)))
    }, /*#__PURE__*/_react["default"].createElement(Inner, {
      backgroundColor: data.backgroundColor || 'white',
      backgroundImage: data.backgroundImage
    }, data.image && /*#__PURE__*/_react["default"].createElement(ImageStyled, {
      src: data.image,
      alt: data.alt,
      maxDpi: 1
    }), data.text && /*#__PURE__*/_react["default"].createElement(SmallTitleStyled, {
      color: data.backgroundColor !== 'white' && 'white',
      align: "center"
    }, data.text))));
  }));
};

var _default = AnimationBubbles;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: 0.5s;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: calc(100vw / 3 - 30px * 2);\n  max-height: calc(1500px / 3 - 30px * 2);\n  max-width: none !important;\n  transition: 0.5s;\n\n  @media screen and (max-width: ", ") {\n    height: calc(100vw - 60px);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  .image--hover {\n    opacity: 0;\n  }\n  .slick-slide &,\n  & img {\n    height: 100%;\n    width: auto;\n    max-width: none !important;\n  }\n  &:hover {\n    .image--hover {\n      opacity: 1;\n    }\n    .image--current {\n      opacity: 0;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AnimationImageStyled = _styledComponents["default"].div(_templateObject());

var AnimationImageInner = _styledComponents["default"].div(_templateObject2());

var ImageStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject3(), _.UI.breakpoints.mobile);
var ImageFun = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(ImageStyled, props);
})(_templateObject4());
/**
 * Component
 */

var AnimationSwapImage = function AnimationSwapImage(_ref) {
  var image = _ref.image,
      imageHover = _ref.imageHover;
  return /*#__PURE__*/_react["default"].createElement(AnimationImageStyled, null, /*#__PURE__*/_react["default"].createElement(AnimationImageInner, null, /*#__PURE__*/_react["default"].createElement(ImageStyled, {
    src: image,
    className: "image--current"
  }), /*#__PURE__*/_react["default"].createElement(ImageFun, {
    src: imageHover,
    className: "image--hover"
  })));
};

var _default = AnimationSwapImage;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _typed = _interopRequireDefault(require("typed.js"));

var _validators = require("../../utils/validators");

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
var AnimationTyping = /*#__PURE__*/function (_React$Component) {
  _inherits(AnimationTyping, _React$Component);

  var _super = _createSuper(AnimationTyping);

  function AnimationTyping() {
    _classCallCheck(this, AnimationTyping);

    return _super.apply(this, arguments);
  }

  _createClass(AnimationTyping, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      var validateData = data.map(function (str) {
        return (0, _validators.checkSize)(str, 50).response;
      });
      var options = {
        strings: validateData,
        typeSpeed: 50,
        backSpeed: 50,
        loopCount: Infinity,
        loop: true
      };
      this.typed = new _typed["default"](this.el, options);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.typed.destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var className = this.props.className;
      return /*#__PURE__*/_react["default"].createElement("span", {
        ref: function ref(el) {
          _this.el = el;
        },
        className: (0, _bind["default"])(className)
      });
    }
  }]);

  return AnimationTyping;
}(_react["default"].Component);

var _default = AnimationTyping;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ = require(".");

var _reactDisplayName = _interopRequireDefault(require("react-display-name"));

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 100%;\n  ", ";\n  ", ";\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  transform: scaleX(-1);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  left: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  right: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  color: ", ";\n  display: inline-block;\n  font-size: 34px;\n  position: relative;\n  text-align: ", ";\n  @media screen and (max-width: ", ") {\n    width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var ArrowStyled = _styledComponents["default"].span(_templateObject(), _.UI.fonts.family.caveat, _.UI.colors.yellow, function (_ref) {
  var align = _ref.align;
  return align;
}, _.UI.breakpoints.mobile);

var positionRight = (0, _styledComponents.css)(_templateObject2());
var positionLeft = (0, _styledComponents.css)(_templateObject3());
var directionLeft = (0, _styledComponents.css)(_templateObject4());
var SvgStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject5(), function (_ref2) {
  var position = _ref2.position;
  return position === 'left' && positionLeft;
}, function (_ref3) {
  var position = _ref3.position;
  return position === 'right' && positionRight;
}, function (_ref4) {
  var direction = _ref4.direction;
  return direction === 'left' && directionLeft;
});
/**
 * Component
 */

var Arrow = function Arrow(_ref5) {
  var _ref5$align = _ref5.align,
      align = _ref5$align === void 0 ? 'left' : _ref5$align,
      children = _ref5.children,
      color = _ref5.color,
      _ref5$direction = _ref5.direction,
      direction = _ref5$direction === void 0 ? 'right' : _ref5$direction,
      _ref5$position = _ref5.position,
      position = _ref5$position === void 0 ? 'left' : _ref5$position,
      className = _ref5.className;
  return /*#__PURE__*/_react["default"].createElement(ArrowStyled, {
    className: (0, _bind["default"])(className),
    align: align
  }, color === 'white' ? _react.Children.map(children, function (child) {
    if (child.type) {
      switch ((0, _reactDisplayName["default"])(child.type)) {
        case 'MiddleTitle':
        case 'SmallTitle':
        case 'Text':
        case 'BulletList':
        case 'Svg':
          return _react["default"].cloneElement(child, {
            color: child.props.color || color,
            align: child.props.align || align
          });

        default:
          return child;
      }
    } else return child;
  }) : _react.Children.map(children, function (child) {
    if (child.type) {
      switch ((0, _reactDisplayName["default"])(child.type)) {
        case 'MiddleTitle':
        case 'SmallTitle':
        case 'Text':
        case 'BulletList':
        case 'Svg':
          return _react["default"].cloneElement(child, {
            align: child.props.align || align
          });

        default:
          return child;
      }
    } else return child;
  }), /*#__PURE__*/_react["default"].createElement(SvgStyled, {
    src: "components/arrow/curve-arrow",
    color: "yellow",
    width: "60px",
    position: position,
    direction: direction,
    className: "hidden-mobile"
  }));
};

Arrow.displayName = 'Arrow'; // https://github.com/facebook/react/issues/4915#issuecomment-335803765

var _default = Arrow;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _grid = require("@rebass/grid");

var _ = require(".");

var _reactDisplayName = _interopRequireDefault(require("react-display-name"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  text-align: ", ";\n  ", ";\n\n  @media screen and (max-width: 1700px) {\n    ", ";\n  }\n  @media screen and (max-width: 1600px) {\n    ", ";\n  }\n  @media screen and (max-width: ", ") {\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var setBoxOverflow = function setBoxOverflow(_ref, overflowValue) {
  var overflowLeft = _ref.overflowLeft,
      overflowRight = _ref.overflowRight;

  if (overflowLeft) {
    return "\n      width: calc(100% + ".concat(overflowValue, "px);\n      margin-left: -").concat(overflowValue, "px;\n    ");
  } else if (overflowRight) {
    return "\n      width: calc(100% + ".concat(overflowValue, "px);\n      margin-right: -").concat(overflowValue, "px;\n    ");
  }
};

var BoxOverflow = _styledComponents["default"].div(_templateObject(), function (_ref2) {
  var align = _ref2.align;
  return align;
}, function (props) {
  return setBoxOverflow(props, 200);
}, function (props) {
  return setBoxOverflow(props, 150);
}, function (props) {
  return setBoxOverflow(props, 75);
}, _.UI.breakpoints.mobile, function (props) {
  return setBoxOverflow(props, 0);
});
/**
 * Component
 */


var BoxCustom = function BoxCustom(_ref3) {
  var _ref3$align = _ref3.align,
      align = _ref3$align === void 0 ? 'left' : _ref3$align,
      children = _ref3.children,
      overflowLeft = _ref3.overflowLeft,
      overflowRight = _ref3.overflowRight,
      wave = _ref3.wave,
      width = _ref3.width,
      rest = _objectWithoutProperties(_ref3, ["align", "children", "overflowLeft", "overflowRight", "wave", "width"]);

  var widthFilter;

  if (Array.isArray(width)) {
    widthFilter = width;
  } else {
    widthFilter = [1, width];
  } // Do not use px because it has a higher priority than pr and pl


  return /*#__PURE__*/_react["default"].createElement(_grid.Box, _extends({
    width: widthFilter,
    pl: overflowLeft || overflowRight ? [0, '2.5rem'] : '2.5rem',
    pr: overflowLeft || overflowRight ? [0, '2.5rem'] : '2.5rem'
  }, rest), /*#__PURE__*/_react["default"].createElement(BoxOverflow, {
    overflowLeft: overflowLeft,
    overflowRight: overflowRight,
    align: align
  }, _react.Children.map(children, function (child) {
    if (child) {
      var props = {};

      if (wave === 'blue') {
        switch ((0, _reactDisplayName["default"])(child.type)) {
          case 'Arrow':
          case 'Text':
          case 'MiddleTitle':
          case 'SmallTitle':
          case 'SliderTestimony':
          case 'SliderTestimonyCompact':
            props.color = child.props.color || 'white';
            break;

          case 'Image':
            props.theme = 'blue';
            break;

          default:
        }
      } else {
        switch ((0, _reactDisplayName["default"])(child.type)) {
          case 'Subtitle':
            props.color = child.props.color || 'middleGrey';
            break;

          case 'MiddleTitle':
            props.color = child.props.color || 'blue';
            break;

          default:
        }
      }

      return _react["default"].cloneElement(child, props);
    }
  })));
};

var _default = BoxCustom;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("./");

var _reactDisplayName = _interopRequireDefault(require("react-display-name"));

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-height: ", ";\n  height: calc(100% - 2.4rem);\n  padding: 1.875rem;\n  transition: all linear 0.3s;\n  border-radius: 1.647rem;\n  text-align: ", ";\n  box-shadow: ", ";\n  background: ", ";\n  margin: 1.2rem 0;\n  display: block;\n  text-decoration: none !important;\n\n  @media screen and (min-width: ", ") {\n    &.card--hover-animation {\n      border: 1px solid ", ";\n      box-shadow: none;\n\n      &:hover {\n        box-shadow: ", ";\n        border-color: transparent;\n        .text {\n          ", ";\n        }\n        .svg--color-primary {\n          ", ";\n        }\n      }\n      .text {\n        transition: color linear 0.3s;\n      }\n      svg * {\n        transition: fill linear 0.3s;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var CardStyled = (0, _styledComponents["default"])(function (_ref) {
  var children = _ref.children,
      itemId = _ref.itemId,
      tag = _ref.tag,
      minHeight = _ref.minHeight,
      align = _ref.align,
      rest = _objectWithoutProperties(_ref, ["children", "itemId", "tag", "minHeight", "align"]);

  return (0, _react.createElement)(tag, rest, children);
})(_templateObject(), function (_ref2) {
  var minHeight = _ref2.minHeight;
  return minHeight;
}, function (_ref3) {
  var align = _ref3.align;
  return align;
}, function (_ref4) {
  var theme = _ref4.theme;
  return _.UI.shadows[theme === 'blue' ? 'slider' : 'sliderLight'];
}, function (_ref5) {
  var theme = _ref5.theme;
  return _.UI.colors[theme];
}, _.UI.breakpoints.mobile, _.UI.colors.lightGrey, function (_ref6) {
  var theme = _ref6.theme;
  return _.UI.shadows[theme === 'blue' ? 'slider' : 'sliderLight'];
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme === 'white' && "color: ".concat(_.UI.colors.darkGrey);
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme === 'white' && "fill: ".concat(_.UI.colors.darkGrey);
});
/**
 * Component
 */

var Card = function Card(_ref9) {
  var _ref9$align = _ref9.align,
      align = _ref9$align === void 0 ? 'center' : _ref9$align,
      children = _ref9.children,
      hoverAnimation = _ref9.hoverAnimation,
      _ref9$minHeight = _ref9.minHeight,
      minHeight = _ref9$minHeight === void 0 ? 'auto' : _ref9$minHeight,
      _ref9$theme = _ref9.theme,
      theme = _ref9$theme === void 0 ? 'white' : _ref9$theme,
      className = _ref9.className,
      _ref9$href = _ref9.href,
      href = _ref9$href === void 0 ? null : _ref9$href;
  return /*#__PURE__*/_react["default"].createElement(CardStyled, {
    align: align,
    theme: theme,
    tag: href ? _.Link : 'div',
    minHeight: minHeight,
    className: (0, _bind["default"])(className, {
      'card--hover-animation': hoverAnimation
    }),
    href: href
  }, theme === 'blue' ? _react.Children.map(children, function (child) {
    if (child) {
      switch ((0, _reactDisplayName["default"])(child.type)) {
        case 'MiddleTitle':
        case 'SmallTitle':
        case 'Text':
        case 'BulletList':
        case 'Svg':
          return _react["default"].cloneElement(child, {
            color: child.props.color || 'white'
          });

        case 'Image':
          return _react["default"].cloneElement(child, {
            theme: 'blue'
          });

        default:
          return child;
      }
    }
  }) : _react.Children.map(children, function (child) {
    if (child) {
      switch ((0, _reactDisplayName["default"])(child.type)) {
        case 'MiddleTitle':
        case 'SmallTitle':
          return _react["default"].cloneElement(child, {
            color: child.props.color || 'turquoise'
          });

        case 'Text':
        case 'Svg':
          return _react["default"].cloneElement(child, {
            color: child.props.color || 'middleGrey'
          });

        default:
          return child;
      }
    }
  }));
};

var _default = Card;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require(".");

var _reactAnimateHeight = _interopRequireDefault(require("react-animate-height"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  font-weight: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  transition: 0.3s;\n\n  &.expansion--open {\n    transform: rotate(90deg);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: ", ";\n  border-radius: 10px;\n  padding: 1rem;\n  cursor: pointer;\n  align-self: end;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var ExpansionPanelStyled = _styledComponents["default"].div(_templateObject(), _.UI.shadows.sliderLight);

var ExpansionPanelArrow = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, _extends({
    src: "common/icon/unicolor/arrow"
  }, props));
})(_templateObject2());
var ExpansionPanelTitle = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Text, props);
})(_templateObject3(), _.UI.fonts.weight.bold);
/**
 * Component
 */

var ExpansionPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(ExpansionPanel, _React$Component);

  var _super = _createSuper(ExpansionPanel);

  function ExpansionPanel() {
    var _this;

    _classCallCheck(this, ExpansionPanel);

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

  _createClass(ExpansionPanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description;
      return /*#__PURE__*/_react["default"].createElement(ExpansionPanelStyled, {
        onClick: this.toggle
      }, /*#__PURE__*/_react["default"].createElement(_.Flex, {
        alignItems: "center",
        custom: false
      }, /*#__PURE__*/_react["default"].createElement(ExpansionPanelTitle, {
        color: "darkGrey"
      }, title), /*#__PURE__*/_react["default"].createElement(ExpansionPanelArrow, {
        width: "10px",
        className: this.state.height === 0 ? 'expansion--close' : 'expansion--open'
      })), /*#__PURE__*/_react["default"].createElement(_reactAnimateHeight["default"], {
        height: this.state.height,
        duration: 300
      }, /*#__PURE__*/_react["default"].createElement(_.Space, {
        size: "small"
      }), /*#__PURE__*/_react["default"].createElement(_.Text, null, description)));
    }
  }]);

  return ExpansionPanel;
}(_react["default"].Component);

var _default = ExpansionPanel;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _grid = require("@rebass/grid");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 1500px;\n  width: 100%;\n  margin: auto;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var FlexStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_grid.Flex, props);
})(_templateObject(), _.UI.breakpoints.mobile);
/**
 * Component
 */

var FlexCustom = function FlexCustom(_ref) {
  var children = _ref.children,
      _ref$custom = _ref.custom,
      custom = _ref$custom === void 0 ? true : _ref$custom,
      rest = _objectWithoutProperties(_ref, ["children", "custom"]);

  if (custom) return /*#__PURE__*/_react["default"].createElement(FlexStyled, rest, children);else return /*#__PURE__*/_react["default"].createElement(_grid.Flex, rest, children);
};

var _default = FlexCustom;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactAnimateHeight = _interopRequireDefault(require("react-animate-height"));

var _translations = require("../utils/translations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  @media screen and (max-width: ", ") {\n    line-height: 48px;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  footer & {\n    transition: 0.3s;\n\n    &.footer__section--open {\n      transform: rotate(90deg);\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0.5;\n  transition: 0.3s;\n\n  &:hover {\n    opacity: 1;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n  bottom: calc(100% - 1px);\n  left: 0;\n  z-index: -1;\n  pointer-events: none;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  text-transform: uppercase;\n  margin: 1rem 0;\n  text-align: left;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: 0.824rem;\n  color: ", ";\n  padding: 1rem 30px;\n  /* TODO Violaine : background-color inutile si background pr\xE9sent en dessous */\n  background-color: ", ";\n  position: relative;\n  z-index: 10;\n  text-align: center;\n  background: linear-gradient(to bottom, #00174d, #011e62 11.765rem);\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    font-size: 0.9rem;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  margin: 1rem;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    margin: 0;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  max-width: ", "px;\n  display: inline-block;\n  width: 100%;\n  text-align: left;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    max-width: 17.647rem;\n    width: 90%;\n    text-align: center;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 2px;\n  margin-bottom: 0.5rem;\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    svg {\n      width: 8.5rem;\n    }\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 2px 2.7px;\n  display: inline-block;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    svg {\n      width: 2rem;\n      height: 2rem;\n    }\n    margin: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    display: flex;\n    justify-content: space-between;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var FooterSocialWrapper = _styledComponents["default"].div(_templateObject(), _.UI.breakpoints.mobile);

var FooterSocial = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject2(), _.UI.breakpoints.mobile);
var FooterLogoAssoconnect = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject3(), _.UI.breakpoints.mobile);
var FooterInner = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Flex, props);
})(_templateObject4(), _.UI.widthBoxed, _.UI.breakpoints.mobile);

var FooterCopyright = _styledComponents["default"].p(_templateObject5(), _.UI.breakpoints.mobile);

var FooterStyled = _styledComponents["default"].footer(_templateObject6(), _.UI.fonts.family.roboto, _.UI.fonts.weight.light, _.UI.colors.white, _.UI.colors.darkBlue, _.UI.breakpoints.mobile);

var FooterTitle = _styledComponents["default"].li(_templateObject7(), _.UI.breakpoints.mobile);

var FooterWave = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject8());
var FooterLink = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Link, props);
})(_templateObject9());
var FooterArrow = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, _extends({
    src: "common/icon/unicolor/arrow"
  }, props));
})(_templateObject10());

var FooterList = _styledComponents["default"].li(_templateObject11(), _.UI.breakpoints.mobile);
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
      socials = _ref.socials;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, preFooter && /*#__PURE__*/_react["default"].createElement(_.Section, {
    wave: {
      color: 'blue'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: 1
  }, /*#__PURE__*/_react["default"].createElement(_.MiddleTitle, null, (0, _translations.formatMessage)('footer_ready')), /*#__PURE__*/_react["default"].createElement(_.Space, {
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
    src: "common/logo/assoconnect"
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
  })), /*#__PURE__*/_react["default"].createElement(_.Flex, {
    justifyContent: "space-between",
    className: "hidden-mobile"
  }, columns.map(function (footerColumn, i) {
    return /*#__PURE__*/_react["default"].createElement("ul", {
      key: i
    }, /*#__PURE__*/_react["default"].createElement(FooterTitle, null, footerColumn.title), footerColumn.items.map(function (field, i) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: i
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
  })), /*#__PURE__*/_react["default"].createElement(FooterCopyright, null, (0, _translations.formatMessage)('footer_copyright'), copyrights.map(function (copyright, i) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, " \u2022 "), /*#__PURE__*/_react["default"].createElement(FooterLink, {
      href: copyright.href,
      isStyled: false
    }, copyright.text));
  })))));
};

var _default = Footer;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _bind = _interopRequireDefault(require("classnames/bind"));

var _VideoButton = _interopRequireDefault(require("../Video/VideoButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  min-height: calc(100vh - 100px);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-height: calc(100vh - 100px);\n  margin-bottom: 10vw;\n  position: relative;\n  text-align: left;\n  /* -1 px to hide the visible white line when zooming */\n  background-position: top -1px center;\n  background-size: auto calc(100% - 10px);\n  background-repeat: no-repeat;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    background-size: auto 70%;\n    background-position: top left 28%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var HeaderStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Flex, _extends({
    custom: false
  }, props));
})(_templateObject(), _.UI.breakpoints.mobile);
var HeaderContent = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Flex, props);
})(_templateObject2());
/**
 * Component
 */

var Header = function Header(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      image = _ref.image,
      videoId = _ref.videoId,
      _ref$animationVideoBu = _ref.animationVideoButton,
      animationVideoButton = _ref$animationVideoBu === void 0 ? true : _ref$animationVideoBu;
  return /*#__PURE__*/_react["default"].createElement(HeaderStyled, {
    style: _objectSpread({}, style, {
      backgroundImage: "url('".concat(process.env.GATSBY_CDN_HOST, "/").concat(image, "')")
    }),
    className: (0, _bind["default"])(className, 'header')
  }, /*#__PURE__*/_react["default"].createElement(HeaderContent, {
    alignItems: "center"
  }, children), videoId && /*#__PURE__*/_react["default"].createElement(_VideoButton["default"], {
    animationVideoButton: animationVideoButton,
    videoId: videoId
  }));
};

var _default = Header;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0;\n  right: 2rem;\n  height: 20.5rem;\n  @media screen and (max-width: ", ") {\n    position: absolute;\n    bottom: -1rem;\n    height: 12rem;\n    right: -1rem;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @media screen and (max-width: ", ") {\n    padding-top: 1.25rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var HeaderSpace = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Space, props);
})(_templateObject(), _.UI.breakpoints.mobile);

var SpanStyled = _styledComponents["default"].div(_templateObject2());

var Yado = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject3(), _.UI.breakpoints.mobile);
/**
 * Component
 */

var HeaderBig = function HeaderBig(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      image = _ref.image,
      wave = _ref.wave,
      yado = _ref.yado,
      videoId = _ref.videoId,
      _ref$button = _ref.button,
      button = _ref$button === void 0 ? {
    href: '/creation-plateforme/',
    children: 'Je commence un essai'
  } : _ref$button,
      field = _ref.field,
      classNameForm = _ref.classNameForm;
  return /*#__PURE__*/_react["default"].createElement(_.Header, {
    image: wave,
    videoId: videoId
  }, /*#__PURE__*/_react["default"].createElement(_.Box, {
    align: "left",
    width: 1 / 2
  }, /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "big",
    className: "hidden-desktop"
  }), /*#__PURE__*/_react["default"].createElement(_.BigTitle, {
    align: "left",
    tag: "h1"
  }, title), /*#__PURE__*/_react["default"].createElement(HeaderSpace, {
    size: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_.Subtitle, {
    align: "left",
    color: "white"
  }, subTitle), /*#__PURE__*/_react["default"].createElement(HeaderSpace, {
    size: "medium"
  }), field ? /*#__PURE__*/_react["default"].createElement(_.InputButton, {
    className: classNameForm
  }) : /*#__PURE__*/_react["default"].createElement(_.ButtonLink, {
    href: button.href,
    button: {
      size: 'big'
    }
  }, button.children), /*#__PURE__*/_react["default"].createElement(HeaderSpace, {
    size: "medium",
    className: "hidden-desktop"
  })), /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: 1 / 2,
    overflowRight: true
  }, yado ? /*#__PURE__*/_react["default"].createElement(SpanStyled, null, /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, {
    src: image.src,
    alt: image.alt
  }), /*#__PURE__*/_react["default"].createElement(Yado, {
    src: "common/yado/".concat(yado.image),
    alt: yado.alt,
    visibleByDefault: true
  })) : /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, {
    src: image.src,
    alt: image.alt
  })));
};

var _default = HeaderBig;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Component
 */
var HeaderHome = function HeaderHome(_ref) {
  var _ref$cards = _ref.cards,
      cards = _ref$cards === void 0 ? [] : _ref$cards,
      _ref$subTitle = _ref.subTitle,
      subTitle = _ref$subTitle === void 0 ? '' : _ref$subTitle,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      videoId = _ref.videoId;
  return /*#__PURE__*/_react["default"].createElement(_.Header, {
    image: "components/headers/header-home/wave-blue.svg",
    videoId: videoId
  }, /*#__PURE__*/_react["default"].createElement(_.Box, {
    mt: ['-2rem', '-4.375rem'],
    align: "left",
    width: 1 / 2
  }, /*#__PURE__*/_react["default"].createElement(_.Svg, {
    src: "common/logo/assoconnect",
    width: "125px",
    color: "white",
    className: "hidden-desktop",
    visibleByDefault: true
  }), /*#__PURE__*/_react["default"].createElement(_.Subtitle, {
    align: "left",
    color: "white"
  }, subTitle), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement(_.BigTitle, {
    align: "left",
    tag: "h1"
  }, title), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_.InputButton, null)), /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: 1 / 2,
    overflowRight: true
  }, /*#__PURE__*/_react["default"].createElement(_.HeaderHomeAnimation, {
    cards: cards,
    yado: {
      image: 'yado',
      alt: ''
    }
  })));
};

var _default = HeaderHome;
exports["default"] = _default;
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

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: 0.824rem;\n  color: ", ";\n\n  @media screen and (max-width: ", ") {\n    display: none;\n  }\n"]);

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

var AnimationHeaderText = _styledComponents["default"].p(_templateObject6(), _.UI.fonts.family.baloo, _.UI.fonts.weight.light, _.UI.colors.blue, _.UI.breakpoints.mobile);
/**
 * Component
 */


var HeaderHomeAnimation = function HeaderHomeAnimation(_ref) {
  var cards = _ref.cards,
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
  })), /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, {
    src: "pages/index/dashboard-mobile",
    className: "hidden-desktop"
  }));
};

var _default = HeaderHomeAnimation;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-height: calc(93vh - 100px);\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 0;\n  background-image: url('", "/", "')\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Component style
 */
var HeaderStyled = _styledComponents["default"].div(_templateObject(), process.env.GATSBY_CDN_HOST, function (_ref) {
  var image = _ref.image;
  return image;
});
/**
 * Component
 */


var HeaderPicture = function HeaderPicture(_ref2) {
  var src = _ref2.src;
  return /*#__PURE__*/_react["default"].createElement(HeaderStyled, {
    image: src
  });
};

var _default = HeaderPicture;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  img {\n    object-fit: contain;\n  }\n  @media screen and (max-width: ", ") {\n    height: 200px;\n    img {\n      width: auto;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 3rem 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var HeaderStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Section, _extends({
    wave: false
  }, props));
})(_templateObject(), _.UI.colors.blue);
var ImageStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject2(), _.UI.breakpoints.mobile);
/**
 * Component
 */

var HeaderSmall = function HeaderSmall(_ref) {
  var className = _ref.className,
      yado = _ref.yado,
      title = _ref.title,
      subTitle = _ref.subTitle,
      button = _ref.button,
      videoId = _ref.videoId;
  return /*#__PURE__*/_react["default"].createElement(HeaderStyled, {
    className: "".concat(className, " header"),
    videoId: videoId
  }, /*#__PURE__*/_react["default"].createElement(_.Flex, {
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: yado ? 3 / 4 : 1
  }, /*#__PURE__*/_react["default"].createElement(_.BigTitle, {
    align: "left",
    tag: "h1"
  }, title), subTitle && /*#__PURE__*/_react["default"].createElement(_.Subtitle, {
    color: "white",
    align: "left"
  }, subTitle), button && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.Space, null), /*#__PURE__*/_react["default"].createElement(_.ButtonLink, {
    theme: button.theme,
    href: button.href
  }, button.text)), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "big"
  }), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "big"
  })), yado && /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: 1 / 4
  }, /*#__PURE__*/_react["default"].createElement(_.Space, {
    className: "hidden-desktop"
  }), /*#__PURE__*/_react["default"].createElement(ImageStyled, {
    src: yado.src,
    alt: yado.alt,
    maxDpi: 1,
    height: "20.5rem"
  }), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "big",
    className: "hidden-mobile"
  }))));
};

var _default = HeaderSmall;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

var _reactRetinaImage = _interopRequireDefault(require("react-retina-image"));

var _bind = _interopRequireDefault(require("classnames/bind"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  &,\n  .slick-slide & {\n    display: block;\n    max-width: 100%;\n    max-height: 100%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  &,\n  .slick-slide & {\n    display: inline-block;\n    max-width: 100%;\n    max-height: 100%;\n    width: auto;\n    height: auto;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: ", ";\n  width: ", ";\n  height: ", ";\n  margin: auto;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var ImageWrapper = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var align = _ref.align;
  return align;
}, function (_ref2) {
  var width = _ref2.width;
  return width;
}, function (_ref3) {
  var height = _ref3.height;
  return height;
}, function (_ref4) {
  var inline = _ref4.inline;
  return inline && 'display: inline-block; vertical-align:middle;';
});

var ImageStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_reactRetinaImage["default"], _extends({}, props, {
    retinaImageSuffix: ""
  }));
})(_templateObject2());
var ImageStyledRound = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_reactRetinaImage["default"], _extends({}, props, {
    retinaImageSuffix: ""
  }));
})(_templateObject3());

var ImageWrapperRound = _styledComponents["default"].div(_templateObject4(), function (_ref5) {
  var width = _ref5.width,
      height = _ref5.height;
  return width || height;
}, function (_ref6) {
  var width = _ref6.width,
      height = _ref6.height;
  return width || height;
}, function (_ref7) {
  var theme = _ref7.theme;
  return _.UI.shadows[theme === 'blue' ? 'slider' : 'sliderLight'];
});
/**
 * Component
 */


var Image = function Image(_ref8) {
  var className = _ref8.className,
      src = _ref8.src,
      _ref8$alt = _ref8.alt,
      alt = _ref8$alt === void 0 ? '' : _ref8$alt,
      _ref8$align = _ref8.align,
      align = _ref8$align === void 0 ? 'center' : _ref8$align,
      _ref8$width = _ref8.width,
      width = _ref8$width === void 0 ? 'auto' : _ref8$width,
      _ref8$height = _ref8.height,
      height = _ref8$height === void 0 ? 'auto' : _ref8$height,
      _ref8$roundShape = _ref8.roundShape,
      roundShape = _ref8$roundShape === void 0 ? false : _ref8$roundShape,
      _ref8$theme = _ref8.theme,
      theme = _ref8$theme === void 0 ? 'white' : _ref8$theme,
      _ref8$visibleByDefaul = _ref8.visibleByDefault,
      visibleByDefault = _ref8$visibleByDefaul === void 0 ? false : _ref8$visibleByDefaul,
      inline = _ref8.inline;

  if (roundShape) {
    return /*#__PURE__*/_react["default"].createElement(ImageWrapper, {
      align: align,
      className: (0, _bind["default"])('image', className),
      inline: inline
    }, /*#__PURE__*/_react["default"].createElement(ImageWrapperRound, {
      width: width,
      height: height,
      theme: theme
    }, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadComponent, {
      threshold: 400
    }, /*#__PURE__*/_react["default"].createElement(ImageStyledRound, {
      src: src,
      alt: alt
    }))));
  } else {
    return /*#__PURE__*/_react["default"].createElement(ImageWrapper, {
      width: width,
      align: align,
      height: height,
      className: (0, _bind["default"])('image', className),
      inline: inline
    }, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadComponent, {
      threshold: 400,
      visibleByDefault: visibleByDefault
    }, /*#__PURE__*/_react["default"].createElement(ImageStyled, {
      src: src,
      alt: alt
    })));
  }
};

Image.displayName = 'Image';
var _default = Image;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _formik = require("formik");

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 0.8rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border: 0.5px solid transparent;\n  outline-style: none;\n  padding: 0;\n  border-radius: 0;\n  background-color: transparent;\n  font-size: 1rem;\n  font-family: ", ";\n  font-weight: ", ";\n  text-align: ", ";\n  color: ", ";\n\n  &::placeholder {\n    color: ", ";\n    opacity: 1;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: 0.5px solid transparent;\n  outline-style: none;\n  background-color: ", ";\n  border-radius: 2.941rem;\n  display: inline-block;\n  overflow: hidden;\n  vertical-align: middle;\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var InputBasicWrapper = _styledComponents["default"].span(_templateObject(), _.UI.colors.white, function (_ref) {
  var icon = _ref.icon;
  return icon && "\n      padding-left: 1rem;\n      display: inline-flex;\n      align-items: center;\n    ";
});

var InputBasicStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_formik.Field, props);
})(_templateObject2(), _.UI.fonts.family.roboto, _.UI.fonts.weight.normal, function (_ref2) {
  var align = _ref2.align;
  return align || 'left';
}, _.UI.colors.darkGrey, function (_ref3) {
  var color = _ref3.color;
  return _.UI.colors[color || 'middleGrey'];
});
var InputBasicIco = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject3());
/**
 * Component
 */

var InputBasic = function InputBasic(_ref4) {
  var className = _ref4.className,
      placeholder = _ref4.placeholder,
      icon = _ref4.icon,
      name = _ref4.name;
  return /*#__PURE__*/_react["default"].createElement(InputBasicWrapper, {
    className: (0, _bind["default"])(className),
    icon: icon
  }, icon && /*#__PURE__*/_react["default"].createElement(InputBasicIco, {
    width: "2rem",
    src: icon,
    className: "animation--effect-wobble",
    color: "middleGrey"
  }), /*#__PURE__*/_react["default"].createElement(InputBasicStyled, {
    className: "input",
    placeholder: placeholder,
    name: name
  }));
};

var _default = InputBasic;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _InputBasic = _interopRequireDefault(require("./InputBasic"));

var _ = require("../");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _formik = require("formik");

var yup = _interopRequireWildcard(require("yup"));

var _colors = _interopRequireDefault(require("../../styles/colors"));

var _translations = require("../../utils/translations");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: ", ";\n  color: #f4674a;\n  margin-bottom: 5px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  vertical-align: middle;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    margin-top: 1.765rem;\n  }\n  .button {\n    padding: 0.647rem 1.1rem;\n    transition: 0.3s;\n    .outline & {\n      border: 1px solid ", ";\n    }\n    &:hover {\n      background-color: #f9ac29;\n      border-color: #f9ac29;\n    }\n    /* Desktop mode */\n    @media screen and (min-width: ", ") {\n      border-radius: 0 2.941rem 2.941rem 0;\n      margin: 0;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding-right: 0;\n  flex-grow: 3;\n  .input {\n    width: 100%;\n  }\n  .outline & {\n    border: 1px solid ", ";\n  }\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    padding: 0.588rem;\n  }\n  /* Desktop mode */\n  @media screen and (min-width: ", ") {\n    border-radius: 2.941rem 0 0 2.941rem;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-content: stretch;\n  width: 550px;\n  max-width: 100%;\n  position: relative;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    width: auto;\n    flex-direction: column;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    text-align: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Validation schema
 */
var validationSchema = yup.object().shape({
  email: yup.string().required((0, _translations.formatMessage)('inputbutton_validation_required')).matches(/^([a-z0-9!#$%&'*+/=?^_`{|}~.(),:;<>@[\\\]-]+)$/i, (0, _translations.formatMessage)('inputbutton_validation_matches')).email((0, _translations.formatMessage)('inputbutton_validation_email'))
});
/**
 * Style
 */

var FormStyled = (0, _styledComponents["default"])(_formik.Form)(_templateObject(), _.UI.breakpoints.mobile);

var InputButtonContainer = _styledComponents["default"].div(_templateObject2());

var InputButtonWrapper = _styledComponents["default"].div(_templateObject3(), _.UI.breakpoints.mobile);

var InputButtonStyled = (0, _styledComponents["default"])(_InputBasic["default"])(_templateObject4(), _colors["default"].yellow, _.UI.breakpoints.mobile, _.UI.breakpoints.mobile);
var InputButtonButton = (0, _styledComponents["default"])(_.Button)(_templateObject5(), _.UI.breakpoints.mobile, _colors["default"].yellow, _.UI.breakpoints.mobile);

var ErrorMessageStyled = _styledComponents["default"].div(_templateObject6(), _.UI.fonts.family.roboto, _.UI.fonts.weight.bold);

var getHubspotBody = function getHubspotBody(data) {
  var email = data.email,
      referrer = data.referrer,
      page = data.page,
      pageUri = data.pageUri,
      pageName = data.pageName;
  return JSON.stringify({
    fields: [{
      name: 'email',
      value: email
    }, {
      name: 'referrer',
      value: referrer
    }, {
      name: 'page',
      value: page
    }],
    context: {
      pageUri: pageUri,
      pageName: pageName
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: (0, _translations.formatMessage)('inputbutton_consent')
      }
    }
  });
};

var fetchHubspot = function fetchHubspot(emailValue) {
  fetch('https://api.hsforms.com/submissions/v3/integration/submit/3038993/f4570db0-c0f3-4260-9c5d-8cb8cf4ab67d', {
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    method: 'POST',
    body: getHubspotBody({
      email: emailValue,
      referrer: document.referrer,
      page: document.title,
      pageUri: window.location.href,
      pageName: document.title
    })
  })["catch"](function (error) {
    console.error(error);
  })["finally"](function () {
    goToSignup(emailValue);
  });
};

var goToSignup = function goToSignup(emailValue) {
  setTimeout(function () {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'email-passed': emailValue
    });
    window.location.href = "https://app.assoconnect.com/sign-up".concat(window.location.search.length ? "".concat(window.location.search, "&") : '?', "email=").concat(emailValue);
  }, 400);
};
/**
 * Component
 */


var InputButton = function InputButton(_ref) {
  var className = _ref.className;

  if (typeof window !== 'undefined') {
    return /*#__PURE__*/_react["default"].createElement(_formik.Formik, {
      initialValues: {
        email: ''
      },
      validationSchema: validationSchema,
      onSubmit: function onSubmit(values) {
        fetchHubspot(values.email);
      }
    }, function () {
      return /*#__PURE__*/_react["default"].createElement(FormStyled, {
        className: className
      }, /*#__PURE__*/_react["default"].createElement(InputButtonContainer, null, /*#__PURE__*/_react["default"].createElement(_formik.ErrorMessage, {
        name: "email",
        component: ErrorMessageStyled
      }), /*#__PURE__*/_react["default"].createElement(InputButtonWrapper, {
        className: "button animation--start-hover"
      }, /*#__PURE__*/_react["default"].createElement(InputButtonStyled, {
        name: "email",
        type: "email",
        placeholder: (0, _translations.formatMessage)('inputbutton_placeholder'),
        icon: "common/icon/unicolor/paperplane"
      }), /*#__PURE__*/_react["default"].createElement(InputButtonButton, {
        type: "submit",
        theme: "yellow",
        size: "big",
        animationOff: true
      }, (0, _translations.formatMessage)('inputbutton_text')))));
    });
  } else return null;
};

var _default = InputButton;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _ = require(".");

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
      var meta = this.props.meta;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'page-viewed': meta.title
      });

      if (this.context.mixpanel) {
        this.context.mixpanel.track('view.page');
      }
    }
    /**
     * Output
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$meta = _this$props.meta,
          _this$props$meta$titl = _this$props$meta.title,
          title = _this$props$meta$titl === void 0 ? 'AssoConnect' : _this$props$meta$titl,
          description = _this$props$meta.description,
          _this$props$meta$imag = _this$props$meta.image,
          image = _this$props$meta$imag === void 0 ? 'common/component/head/facebook-600x600' : _this$props$meta$imag,
          _this$props$navigatio = _this$props.navigationType,
          navigationType = _this$props$navigatio === void 0 ? 'blue' : _this$props$navigatio,
          noindex = _this$props.noindex,
          preFooter = _this$props.preFooter,
          _this$props$headerIte = _this$props.headerItems,
          headerItems = _this$props$headerIte === void 0 ? [] : _this$props$headerIte,
          _this$props$footerCol = _this$props.footerColumns,
          footerColumns = _this$props$footerCol === void 0 ? [] : _this$props$footerCol,
          _this$props$cta = _this$props.cta,
          cta = _this$props$cta === void 0 ? {
        network: {
          text: 'Placeholder',
          href: '/'
        },
        "default": {
          text: 'Placeholder',
          href: '/'
        }
      } : _this$props$cta,
          _this$props$footerSoc = _this$props.footerSocials,
          footerSocials = _this$props$footerSoc === void 0 ? [] : _this$props$footerSoc,
          _this$props$footerCop = _this$props.footerCopyrights,
          footerCopyrights = _this$props$footerCop === void 0 ? [] : _this$props$footerCop,
          _this$props$footerCta = _this$props.footerCta,
          footerCta = _this$props$footerCta === void 0 ? {
        demo: {
          link: '/',
          text: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Placeholder")
        },
        trial: {
          link: '/',
          text: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Placeholder ")
        }
      } : _this$props$footerCta;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactHelmet["default"], {
        defer: false
      }, /*#__PURE__*/_react["default"].createElement("link", {
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
        items: headerItems
      }), children, /*#__PURE__*/_react["default"].createElement(_.Footer, {
        columns: footerColumns,
        copyrights: footerCopyrights,
        cta: footerCta,
        preFooter: preFooter,
        socials: footerSocials
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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
 * Component Styled
 */
var linkStyled = (0, _styledComponents.css)(_templateObject());
var Gatsbytyled = (0, _styledComponents["default"])(function (_ref) {
  var isStyled = _ref.isStyled,
      props = _objectWithoutProperties(_ref, ["isStyled"]);

  return /*#__PURE__*/_react["default"].createElement(_gatsby.Link, props);
})(_templateObject2(), function (_ref2) {
  var isStyled = _ref2.isStyled;
  return isStyled && linkStyled;
});
var ScrollStyled = (0, _styledComponents["default"])(function (_ref3) {
  var isStyled = _ref3.isStyled,
      props = _objectWithoutProperties(_ref3, ["isStyled"]);

  return /*#__PURE__*/_react["default"].createElement(_reactScroll.Link, props);
})(_templateObject3(), function (_ref4) {
  var isStyled = _ref4.isStyled;
  return isStyled && linkStyled;
});

var AStyled = _styledComponents["default"].a(_templateObject4(), function (_ref5) {
  var isStyled = _ref5.isStyled;
  return isStyled && linkStyled;
});
/**
 * Component
 */


var Link = function Link(_ref6) {
  var children = _ref6.children,
      className = _ref6.className,
      _ref6$href = _ref6.href,
      href = _ref6$href === void 0 ? '' : _ref6$href,
      _ref6$nofollow = _ref6.nofollow,
      nofollow = _ref6$nofollow === void 0 ? null : _ref6$nofollow,
      _ref6$isStyled = _ref6.isStyled,
      isStyled = _ref6$isStyled === void 0 ? true : _ref6$isStyled,
      _ref6$target = _ref6.target,
      target = _ref6$target === void 0 ? null : _ref6$target;

  if (href && href.indexOf('#') === 0) {
    return /*#__PURE__*/_react["default"].createElement(ScrollStyled, {
      to: href.substring(1),
      smooth: true,
      offset: -60,
      className: (0, _bind["default"])(className),
      isStyled: isStyled
    }, children);
  } else if (href && href.indexOf('/') === 0) {
    return /*#__PURE__*/_react["default"].createElement(Gatsbytyled, {
      to: href,
      className: (0, _bind["default"])('link', 'link--internal', className),
      rel: nofollow && 'nofollow',
      target: target,
      isStyled: isStyled
    }, children);
  } else if (href && (href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0)) {
    return /*#__PURE__*/_react["default"].createElement(AStyled, {
      href: href,
      rel: "noopener noreferrer nofollow",
      className: (0, _bind["default"])('link', 'link--external', className),
      target: target,
      isStyled: isStyled
    }, children);
  } else {
    // Duplicate code to avoid the "warning  Using target="_blank" without rel="noopener noreferrer" is a security risk: see https://mathiasbynens.github.io/rel-noopener  react/jsx-no-target-blank" error that appears when rel = {``} is used instead of rel = ""
    if (nofollow || nofollow === null) {
      return /*#__PURE__*/_react["default"].createElement(AStyled, {
        href: href,
        target: target || '_blank',
        rel: "noopener noreferrer nofollow",
        className: (0, _bind["default"])('link', 'link--external', className),
        isStyled: isStyled
      }, children);
    } else {
      return /*#__PURE__*/_react["default"].createElement(AStyled, {
        href: href,
        target: target || '_blank',
        rel: "noopener noreferrer",
        className: (0, _bind["default"])('link', 'link--external', className),
        isStyled: isStyled
      }, children);
    }
  }
};

var _default = Link;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 3rem 0;\n  display: flex;\n  align-items: flex-start;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  margin-left: 1rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 8px;\n  width: 8px;\n  border-radius: 50%;\n  margin-top: 6px;\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var BulletListDot = _styledComponents["default"].span(_templateObject(), _.UI.colors.turquoise);

var BulletListSlideTextStyled = _styledComponents["default"].div(_templateObject2());

var BulletListSlideItemStyled = _styledComponents["default"].li(_templateObject3());
/**
 * Component
 */


var BulletList = function BulletList(_ref) {
  var datas = _ref.datas,
      color = _ref.color;
  return /*#__PURE__*/_react["default"].createElement("ul", null, datas.map(function (data, i) {
    return /*#__PURE__*/_react["default"].createElement(BulletListSlideItemStyled, {
      key: i
    }, /*#__PURE__*/_react["default"].createElement(BulletListDot, null), /*#__PURE__*/_react["default"].createElement(BulletListSlideTextStyled, null, _react.Children.map(data, function (component) {
      return _react["default"].cloneElement(component, {
        color: color,
        align: 'left'
      });
    })));
  }));
};

BulletList.displayName = 'BulletList'; // https://github.com/facebook/react/issues/4915#issuecomment-335803765

var _default = BulletList;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  transition: 0.3s;\n\n  .slick-current & {\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var CheckStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject());

var ItemStyled = _styledComponents["default"].li(_templateObject2());

var TextStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Text, props);
})(_templateObject3(), _.UI.colors.darkGrey);
/**
 * Component
 */

var CheckList = function CheckList(_ref) {
  var content = _ref.content,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: (0, _bind["default"])(className)
  }, content.map(function (field, i) {
    return /*#__PURE__*/_react["default"].createElement(ItemStyled, {
      key: i,
      className: "check-list__item"
    }, /*#__PURE__*/_react["default"].createElement(CheckStyled, {
      src: "components/check-list/check",
      width: "1rem",
      color: "turquoise"
    }), /*#__PURE__*/_react["default"].createElement(TextStyled, {
      align: "left"
    }, field));
  }));
};

var _default = CheckList;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ = require("..");

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
  var data = _taggedTemplateLiteral(["\n  margin: 18px 0;\n  font-family: ", ";\n  font-weight: ", ";\n  color: ", ";\n  font-size: 14px;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    width: 270px;\n    margin: 25px auto 0;\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    display: none;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  /* Specific style for all features */\n  .navigation__child--all-features {\n    color: ", ";\n    font-weight: ", ";\n\n    /* Desktop mode */\n    @media screen and (min-width: ", ") {\n      border-top: 1px solid ", ";\n      text-align: center;\n      padding-top: 18px;\n      margin-top: 0;\n    }\n  }\n\n  /* Desktop mode */\n  @media screen and (min-width: ", ") {\n    && {\n      height: 85px;\n      margin-bottom: 15px;\n    }\n  }\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    height: calc(100% - 60px);\n    margin-top: 60px;\n    overflow-y: scroll;\n  }\n  /* Scroll fixed (only desktop mode) */\n  ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  transition: background-color ease-out 0.2s;\n  background-color: ", ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 20;\n  padding-left: 2.5rem;\n\n  /* White mode */\n  ", ";\n  /* Scroll Fixed (only desktop mode) */\n  ", ";\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    padding-left: 0;\n    transition: all ease-out 0.2s;\n    ", ";\n    position: fixed;\n    bottom: 0;\n    ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  @media screen and (max-width: ", ") {\n    height: 59px;\n  }\n  @media screen and (min-width: ", ") {\n    height: 100px;\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n\n  > .navigation__arrow .svg--color-primary,\n  .navigation__logo .svg--color-primary {\n    fill: ", ";\n  }\n  .navigation__cta .button--theme-line-white {\n    color: ", ";\n    border-color: ", ";\n  }\n  .navigation__inner {\n    opacity: 1;\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n\n      > .navigation__arrow .svg--color-primary {\n        fill: ", ";\n      }\n    }\n    .navigation__arrow {\n      opacity: 1;\n\n      .svg--color-primary {\n        fill: ", ";\n      }\n    }\n  }\n"]);

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

var NavigationMargin = _styledComponents["default"].div(_templateObject4(), _.UI.breakpoints.mobile, _.UI.breakpoints.mobile);

var NavigationStyled = _styledComponents["default"].nav(_templateObject5(), _.UI.colors.blue, function (_ref) {
  var navigationType = _ref.navigationType;
  return ['white', 'signUp', 'network'].includes(navigationType) && navigationWhiteCss;
}, function (_ref2) {
  var navigationIsFixed = _ref2.navigationIsFixed;
  return navigationIsFixed && navigationFixedCss;
}, _.UI.breakpoints.mobile, function (_ref3) {
  var navigationMobileIsOpened = _ref3.navigationMobileIsOpened;
  return !navigationMobileIsOpened && 'left:-100%';
}, navigationWhiteCss);

var NavigationInner = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Flex, props);
})(_templateObject6(), _.UI.colors.darkGrey, _.UI.fonts.weight.bold, _.UI.breakpoints.mobile, _.UI.colors.extraLightGrey, _.UI.breakpoints.mobile, _.UI.breakpoints.mobile, function (_ref4) {
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

var NavigationChildTitle = _styledComponents["default"].div(_templateObject9(), _.UI.fonts.family.roboto, _.UI.fonts.weight.bold, _.UI.colors.darkGrey, _.UI.breakpoints.mobile);
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

    _defineProperty(_assertThisInitialized(_this), "getNavigationLogoSrc", function (navigationIsFixed, navigationType) {
      if (navigationIsFixed) {
        return 'common/logo/assoconnect-simple';
      }

      if (navigationType === 'network') {
        return 'common/logo/assoconnect-networks';
      }

      return 'common/logo/assoconnect';
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
          cta = _this$props.cta,
          items = _this$props.items,
          type = _this$props.type;
      var _this$state = this.state,
          navigationChildIconLoad = _this$state.navigationChildIconLoad,
          navigationIsFixed = _this$state.navigationIsFixed,
          navigationMobileIsOpened = _this$state.navigationMobileIsOpened;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(NavigationMargin, null), /*#__PURE__*/_react["default"].createElement(_.NavigationToggle, {
        navigationIsFixed: navigationIsFixed,
        navigationToggleBurgerFunction: this.handleNavigationToggleBurger,
        navigationMobileIsOpened: navigationMobileIsOpened,
        navigationType: type
      }), /*#__PURE__*/_react["default"].createElement(NavigationStyled, {
        navigationIsFixed: navigationIsFixed,
        navigationMobileIsOpened: navigationMobileIsOpened,
        navigationType: type
      }, /*#__PURE__*/_react["default"].createElement(NavigationInner, {
        navigationIsFixed: navigationIsFixed,
        className: "navigation__inner",
        alignItems: "flex-end"
      }, /*#__PURE__*/_react["default"].createElement(NavigationLogoWrapper, {
        px: "0",
        width: "125px"
      }, /*#__PURE__*/_react["default"].createElement(_.Link, {
        href: "/",
        isStyled: false
      }, /*#__PURE__*/_react["default"].createElement(NavigationLogo, {
        className: "navigation__logo",
        navigationIsFixed: navigationIsFixed,
        color: "white",
        width: "auto",
        height: navigationIsFixed ? '38px' : '65px',
        src: this.getNavigationLogoSrc(navigationIsFixed, type)
      }))), type !== 'signUp' && /*#__PURE__*/_react["default"].createElement(_.Box, {
        width: "auto",
        px: [0, '30px'],
        mb: ['40px', '-4px'],
        onMouseOver: this.handleNavigationItemsMouseOver
      }, items.map(function (navigationItem, i) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
          key: i
        }, navigationItem.boxes ? /*#__PURE__*/_react["default"].createElement(_.NavigationItem, {
          width: navigationItem.width,
          navigationMobileIsOpened: navigationMobileIsOpened,
          text: navigationItem.text,
          href: navigationItem.href
        }, navigationItem.boxes.map(function (box, j) {
          return /*#__PURE__*/_react["default"].createElement(_.Box, {
            key: j,
            width: "auto",
            px: [0, '20px']
          }, box.children.map(function (navigationChild, k) {
            return /*#__PURE__*/_react["default"].createElement(_.NavigationChild, {
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
        }, /*#__PURE__*/_react["default"].createElement(_.NavigationChild, {
          text: navigationItem.footer.text,
          arrow: true,
          className: "navigation__child--all-features",
          href: navigationItem.footer.href,
          loadIcon: navigationChildIconLoad
        }))) : /*#__PURE__*/_react["default"].createElement(_.NavigationItem, {
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
      }, /*#__PURE__*/_react["default"].createElement(_.NavigationCta, {
        navigationType: type,
        navigationCta: cta
      })))));
    }
  }]);

  return Navigation;
}(_react.Component);

var _default = Navigation;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("..");

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 15px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  vertical-align: middle;\n  display: inline-block;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  vertical-align: middle;\n  display: inline-block;\n  margin-right: 20px;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    svg {\n      width: 26px;\n      height: 26px;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: Roboto;\n  font-size: 14px;\n  text-transform: uppercase;\n  display: block;\n  padding: 9px 0;\n\n  &:first-child {\n    padding-top: 18px;\n  }\n  &:last-child {\n    padding-bottom: 18px;\n  }\n  &:hover {\n    color: ", ";\n  }\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    margin: 22px auto 0;\n    width: 270px;\n    font-size: 16px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var NavigationChildStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Link, props);
})(_templateObject(), _.UI.colors.middleGrey, _.UI.colors.turquoise, _.UI.breakpoints.mobile);
var NavigationChildIcon = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject2(), _.UI.breakpoints.mobile);

var NavigationChildText = _styledComponents["default"].div(_templateObject3());

var NavigationChildArrow = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject4());
/**
 * Component
 */

var NavigationChild = function NavigationChild(_ref) {
  var arrow = _ref.arrow,
      className = _ref.className,
      href = _ref.href,
      icon = _ref.icon,
      _ref$loadIcon = _ref.loadIcon,
      loadIcon = _ref$loadIcon === void 0 ? false : _ref$loadIcon,
      nofollow = _ref.nofollow,
      text = _ref.text;
  return /*#__PURE__*/_react["default"].createElement(NavigationChildStyled, {
    className: (0, _bind["default"])('animation--start-hover', className),
    href: href,
    nofollow: nofollow
  }, loadIcon && icon && /*#__PURE__*/_react["default"].createElement(NavigationChildIcon, {
    className: (0, _bind["default"])('animation--effect-wobble', 'navigation__child'),
    color: "middleGrey",
    src: icon,
    width: "24px"
  }), /*#__PURE__*/_react["default"].createElement(NavigationChildText, null, text), arrow && /*#__PURE__*/_react["default"].createElement(NavigationChildArrow, {
    className: "animation--effect-wobble",
    src: "common/icon/unicolor/small-arrow",
    color: "turquoise",
    width: "16px"
  }));
};

var _default = NavigationChild;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin: 0 10px;\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    margin: 15px;\n\n    .button {\n      font-size: 1.16rem;\n\n      &.button--theme-line-white {\n        color: ", ";\n        border-color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-end;\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column-reverse;\n    background-color: ", ";\n    margin-top: auto;\n    height 190px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var NavigationCtaWrapper = _styledComponents["default"].div(_templateObject(), _.UI.breakpoints.mobile, _.UI.colors.blue);

var NavigationCtaStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.ButtonLink, props);
})(_templateObject2(), _.UI.breakpoints.mobile, _.UI.colors.white, _.UI.colors.white);
/**
 * Component
 */

var NavigationCta = function NavigationCta(_ref) {
  var navigationCta = _ref.navigationCta,
      navigationType = _ref.navigationType;
  return /*#__PURE__*/_react["default"].createElement(NavigationCtaWrapper, {
    width: "auto",
    alignItems: "flex-end"
  }, /*#__PURE__*/_react["default"].createElement(NavigationCtaStyled, {
    href: "https://app.assoconnect.com/login",
    size: "small",
    theme: "line-white",
    className: "navigation__cta"
  }, "Se\xA0connecter"), navigationType !== 'signUp' && /*#__PURE__*/_react["default"].createElement(NavigationCtaStyled, {
    href: navigationCta[navigationType === 'network' ? 'network' : 'default'].href,
    size: "small",
    className: "navigation__cta",
    target: "_self"
  }, /*#__PURE__*/_react["default"].createElement("span", null, navigationCta[navigationType === 'network' ? 'network' : 'default'].text)));
};

var _default = NavigationCta;
exports["default"] = _default;
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
          navigationMobileIsOpened = _this$props.navigationMobileIsOpened;
      return /*#__PURE__*/_react["default"].createElement(NavigationItemStyled, {
        color: color
      }, /*#__PURE__*/_react["default"].createElement(NavigationItemInner, {
        className: "navigation__inner",
        onClick: this.toggle
      }, href ? /*#__PURE__*/_react["default"].createElement(_.Link, {
        href: href,
        isStyled: false
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
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ = require("..");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 5px;\n  width: 100%;\n  height: 6px;\n\n  &.navigation__line--half {\n    width: 50%;\n  }\n  &.navigation__line--start {\n    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);\n    transform-origin: right;\n\n    /* Mobile navigation open */\n    ", ";\n  }\n  &.navigation__line--end {\n    align-self: flex-end;\n    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);\n    transform-origin: left;\n\n    /* Mobile navigation open */\n    ", ";\n  }\n  /* White mode */\n  background-color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-left: auto;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  cursor: pointer;\n  transition: transform 330ms ease-out;\n\n  /* Mobile navigation open */\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  text-align: left !important;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 60px;\n  flex-direction: row !important; /* Force row direction in mobile mode */\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 25;\n\n  /* White mode */\n  transition: background-color ease-out 0.2s;\n  ", ";\n\n  /* Desktop mode */\n  @media screen and (min-width: ", ") {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  box-shadow: 0 1px 14px 0 rgba(0, 0, 0, 0.19);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var navigationToggleWhiteCss = (0, _styledComponents.css)(_templateObject(), _.UI.colors.white);
var NavigationToggleStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Flex, props);
})(_templateObject2(), function (_ref) {
  var navigationType = _ref.navigationType,
      navigationIsFixed = _ref.navigationIsFixed,
      navigationMobileIsOpened = _ref.navigationMobileIsOpened;
  return ['white', 'signUp', 'network'].includes(navigationType) || navigationIsFixed || navigationMobileIsOpened ? navigationToggleWhiteCss : "background-color: ".concat(_.UI.colors.blue);
}, _.UI.breakpoints.mobile);
var NavigationToggleLogo = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject3());

var NavigationToggleBurger = _styledComponents["default"].div(_templateObject4(), function (_ref2) {
  var navigationMobileIsOpened = _ref2.navigationMobileIsOpened;
  return navigationMobileIsOpened && "transform: rotate(-45deg);";
});

var NavigationToggleBurgerLine = _styledComponents["default"].div(_templateObject5(), function (_ref3) {
  var navigationMobileIsOpened = _ref3.navigationMobileIsOpened;
  return navigationMobileIsOpened && "transform: rotate(-90deg) translateX(3px);";
}, function (_ref4) {
  var navigationMobileIsOpened = _ref4.navigationMobileIsOpened;
  return navigationMobileIsOpened && "transform: rotate(-90deg) translateX(-3px);";
}, function (_ref5) {
  var navigationType = _ref5.navigationType,
      navigationIsFixed = _ref5.navigationIsFixed,
      navigationMobileIsOpened = _ref5.navigationMobileIsOpened;
  return navigationType !== 'white' && navigationType !== 'signUp' && !navigationIsFixed && !navigationMobileIsOpened ? _.UI.colors.white : _.UI.colors.blue;
});
/**
 * Component
 */


var NavigationToggle = function NavigationToggle(_ref6) {
  var navigationToggleBurgerFunction = _ref6.navigationToggleBurgerFunction,
      navigationType = _ref6.navigationType,
      navigationMobileIsOpened = _ref6.navigationMobileIsOpened,
      navigationIsFixed = _ref6.navigationIsFixed;
  return /*#__PURE__*/_react["default"].createElement(NavigationToggleStyled, {
    navigationMobileIsOpened: navigationMobileIsOpened,
    navigationIsFixed: navigationIsFixed,
    alignItems: "center",
    navigationType: navigationType
  }, /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: "auto"
  }, /*#__PURE__*/_react["default"].createElement(_.Link, {
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement(NavigationToggleLogo, {
    height: "40px",
    color: "blue",
    src: "common/logo/assoconnect-simple"
  }))), /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: "auto",
    ml: "auto"
  }, /*#__PURE__*/_react["default"].createElement(NavigationToggleBurger, {
    navigationMobileIsOpened: navigationMobileIsOpened,
    onClick: navigationToggleBurgerFunction
  }, /*#__PURE__*/_react["default"].createElement(NavigationToggleBurgerLine, {
    navigationIsFixed: navigationIsFixed,
    navigationMobileIsOpened: navigationMobileIsOpened,
    className: "navigation__line--half navigation__line--start",
    navigationType: navigationType
  }), /*#__PURE__*/_react["default"].createElement(NavigationToggleBurgerLine, {
    navigationIsFixed: navigationIsFixed,
    navigationMobileIsOpened: navigationMobileIsOpened,
    navigationType: navigationType
  }), /*#__PURE__*/_react["default"].createElement(NavigationToggleBurgerLine, {
    navigationIsFixed: navigationIsFixed,
    navigationMobileIsOpened: navigationMobileIsOpened,
    className: "navigation__line--half navigation__line--end",
    navigationType: navigationType
  }))));
};

var _default = NavigationToggle;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("./");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  pointer-events: none;\n  position: absolute;\n  bottom: calc(100% - 1px);\n  left: -5vw;\n  z-index: -1;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  background: ", ";\n  padding: 3rem 0 calc(3rem + 8vw);\n  z-index: 10;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SectionStyled = _styledComponents["default"].section(_templateObject(), function (_ref) {
  var wave = _ref.wave;
  return wave.color === 'blue' ? "linear-gradient(to bottom, ".concat(_.UI.colors.mediumBlue, ", ").concat(_.UI.colors.blue, " 11.765rem)") : wave !== false ? "linear-gradient(to bottom, #F5F5F5, ".concat(_.UI.colors.white, " 11.765rem)") : _.UI.colors.white;
});

var SectionWave = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject2(), function (_ref2) {
  var wave = _ref2.wave;
  return wave.direction === 'up' && "transform: scaleX(-1);";
});
/**
 * Component
 */

var Section = function Section(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      _ref3$wave = _ref3.wave,
      wave = _ref3$wave === void 0 ? {
    color: 'extraLightGrey',
    direction: 'down'
  } : _ref3$wave,
      _ref3$alignItems = _ref3.alignItems,
      alignItems = _ref3$alignItems === void 0 ? 'center' : _ref3$alignItems,
      justifyContent = _ref3.justifyContent;
  return /*#__PURE__*/_react["default"].createElement(SectionStyled, {
    wave: wave,
    className: (0, _bind["default"])('section', className)
  }, wave !== false && /*#__PURE__*/_react["default"].createElement(SectionWave, {
    color: wave.color === 'blue' && 'mediumBlue' || 'extraLightGrey',
    width: "110vw",
    height: "auto",
    src: "components/section/wave",
    wave: wave
  }), /*#__PURE__*/_react["default"].createElement(_.Flex, {
    alignItems: alignItems,
    flexWrap: "wrap",
    py: "2rem",
    justifyContent: justifyContent
  }, _react.Children.map(children, function (child) {
    return _react["default"].cloneElement(child, {
      wave: wave.color
    });
  })));
};

var _default = Section;
exports["default"] = _default;
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  position: absolute;\n  bottom: -1.765rem;\n  right: calc(100% - 3rem);\n  height: 20.5rem;\n\n  @media screen and (max-width: ", ") {\n    display: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n\n  .slick-slider {\n    display: flex;\n    align-items: center;\n    @media screen and (max-width: ", ") {\n      flex-direction: column-reverse;\n\n      .slick-list {\n        width: 100vw;\n      }\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 12px;\n  width: 12px;\n  border-radius: 50%;\n  background-color: ", ";\n  display: block;\n  margin: 10px;\n  transition: 0.3s;\n\n  .slick-active & {\n    background-color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  cursor: pointer;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    ", ";\n    .svg--color-primary {\n      transition: 0.3s;\n    }\n    &:hover {\n      .svg--color-primary {\n        fill: ", ";\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SliderCardArrow = function SliderCardArrow(_ref) {
  var onClick = _ref.onClick,
      navigation = _ref.navigation;

  var SliderCardArrowStyled = _styledComponents["default"].div(_templateObject(), navigation === 'previous' && "transform: rotate( -180deg)", _.UI.colors.middleGrey);

  return /*#__PURE__*/_react["default"].createElement(SliderCardArrowStyled, {
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_.Svg, {
    src: "common/icon/unicolor/arrow",
    width: "2.5rem",
    color: "lightGrey"
  }));
};

var SliderCardDots = _styledComponents["default"].ul(_templateObject2());

var SliderCardDot = _styledComponents["default"].span(_templateObject3(), _.UI.colors.lightGrey, _.UI.colors.turquoise);

var SliderCardWrapper = _styledComponents["default"].div(_templateObject4(), _.UI.breakpoints.mobile);

var SliderCardYado = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject5(), _.UI.breakpoints.mobile);
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
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../");

var _reactDisplayName = _interopRequireDefault(require("react-display-name"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  .slick-current & .svg--color-primary {\n    fill: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 1.176rem;\n  background-color: ", ";\n  border: 1px solid ", ";\n  box-shadow: none;\n  text-align: center;\n  transition: 0.3s;\n  padding: calc(2rem + 15px) 1rem;\n\n  .slick-current & {\n    box-shadow: ", ";\n    border-color: transparent;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 2rem 3rem 3rem;\n  cursor: pointer;\n\n  @media screen and (max-width: 1300px) {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  @media screen and (max-width: ", ") {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SliderCardStyled = _styledComponents["default"].div(_templateObject(), _.UI.breakpoints.mobile);

var SliderCardSlideInner = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement("div", props);
})(_templateObject2(), _.UI.colors.white, _.UI.colors.lightGrey, _.UI.shadows.slider);
var SliderCardSlideSvgStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject3(), _.UI.colors.darkGrey);
/**
 * Component
 */

var SliderCard = function SliderCard(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(SliderCardStyled, null, /*#__PURE__*/_react["default"].createElement(SliderCardSlideInner, null, _react.Children.map(children, function (child) {
    if (child) {
      switch ((0, _reactDisplayName["default"])(child.type)) {
        case 'ButtonLink':
          return _react["default"].cloneElement(child, {
            button: {
              theme: child.props.button && child.props.button.theme || 'yellow',
              size: child.props.button && child.props.button.size || 'big'
            }
          });

        case 'MiddleTitle':
        case 'SmallTitle':
          return _react["default"].cloneElement(child, {
            color: child.props.color || 'turquoise'
          });

        case 'Image':
          return _react["default"].cloneElement(child, {
            visibleByDefault: true
          });

        case 'Svg':
          return /*#__PURE__*/_react["default"].createElement(SliderCardSlideSvgStyled, _extends({
            color: "middleGrey",
            width: "125px"
          }, child.props));

        default:
          return child;
      }
    }
  })));
};

var _default = SliderCard;
exports["default"] = _default;
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  position: absolute;\n  bottom: -1.765rem;\n  right: calc(100% - 3rem);\n  height: 20.5rem;\n  img {\n    max-width: none;\n    width: auto;\n    height: auto;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 90%;\n  width: 55.882rem;\n  margin: 0 auto;\n  position: relative;\n\n  & .slick-list {\n    background-color: ", ";\n    border-radius: 0 0 1.176rem 1.176rem;\n    box-shadow: ", ";\n  }\n  & .slick-slider {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  @media screen and (max-width: ", ") {\n    width: calc(100% + 5rem);\n    margin-left: -2.5rem;\n    max-width: none;\n\n    & .slick-list {\n      background-color: transparent;\n      border-radius: 0;\n      box-shadow: none;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SliderFeatureWrapper = _styledComponents["default"].div(_templateObject(), _.UI.colors.white, _.UI.shadows.slider, _.UI.breakpoints.mobile);

var SliderFeatureDots = _styledComponents["default"].ul(_templateObject2());

var SliderFeatureYado = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject3());
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  .svg--color-primary {\n    transition: 0.3s;\n  }\n  .slick-active & .svg--color-primary {\n    fill: ", ";\n  }\n  @media screen and (max-width: ", ") {\n    svg {\n      width: 100%;\n      height: auto;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: ", ";\n  color: ", ";\n  transition: 0.3s;\n\n  .slick-active & {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  text-align: center;\n  padding: 1rem;\n  position: relative;\n  cursor: pointer;\n\n  &::after {\n    content: '';\n    height: 3px;\n    width: 0;\n    background-color: ", ";\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transition: 0.3s;\n  }\n\n  &:hover::after {\n    width: 25%;\n    left: 37.5%;\n  }\n  .slick-active &::after {\n    width: 100%;\n    left: 0;\n  }\n\n  @media screen and (max-width: ", ") {\n    border-bottom: 1px solid ", ";\n    padding: 0.5rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SliderFeatureNavigationStyled = _styledComponents["default"].span(_templateObject(), _.UI.colors.turquoise, _.UI.breakpoints.mobile, _.UI.colors.lightGrey);

var SliderFeatureNavigationTitle = _styledComponents["default"].p(_templateObject2(), _.UI.fonts.family.baloo, _.UI.fonts.weight.light, _.UI.colors.middleGrey, _.UI.colors.turquoise);

var SvgStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject3(), _.UI.colors.darkGrey, _.UI.breakpoints.mobile);
/**
 * Component
 */

var SliderFeatureNavigation = function SliderFeatureNavigation(_ref) {
  var image = _ref.image,
      title = _ref.title,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement(SliderFeatureNavigationStyled, {
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(SvgStyled, {
    width: "5.882rem",
    color: "middleGrey",
    src: "common/icon/multicolor/".concat(image.link)
  }), /*#__PURE__*/_react["default"].createElement(SliderFeatureNavigationTitle, {
    className: "hidden-mobile"
  }, title));
};

var _default = SliderFeatureNavigation;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../");

var _grid = require("@rebass/grid");

var _validators = require("../../../utils/validators");

var _Space = _interopRequireDefault(require("../../Space"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  svg {\n    max-width: 125px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 1.3rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n\n  @media screen and (max-width: ", ") {\n    box-shadow: ", ";\n    border-radius: 1.176rem 1.176rem;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 1.765rem;\n    position: relative;\n\n    & .title--small {\n      text-align: center;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @media screen and (max-width: ", ") {\n    padding: 1rem;\n    padding-bottom: 3rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SliderFeatureSlideStyled = _styledComponents["default"].div(_templateObject(), _.UI.breakpoints.mobile);

var SliderFeatureSlideCard = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_grid.Flex, props);
})(_templateObject2(), _.UI.breakpoints.mobile, _.UI.shadows.slider);
var SliderFeatureSlideButton = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.ButtonText, props);
})(_templateObject3());
var SliderFeatureSlideIco = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject4());
/**
 * Component
 */

var SliderFeatureSlide = function SliderFeatureSlide(_ref) {
  var title = _ref.title,
      image = _ref.image,
      buttonText = _ref.buttonText,
      href = _ref.href,
      text = _ref.text;

  var _checkSize = (0, _validators.checkSize)(text, 450),
      error = _checkSize.error,
      response = _checkSize.response;

  return /*#__PURE__*/_react["default"].createElement(SliderFeatureSlideStyled, null, /*#__PURE__*/_react["default"].createElement(SliderFeatureSlideCard, null, /*#__PURE__*/_react["default"].createElement(_grid.Box, {
    width: [1, 1 / 4],
    mx: [0, "4rem"],
    my: [0, "2rem"],
    mt: ["1rem", 0]
  }, /*#__PURE__*/_react["default"].createElement(SliderFeatureSlideIco, {
    src: "common/icon/multicolor/".concat(image.link),
    className: "icon",
    align: "center"
  })), /*#__PURE__*/_react["default"].createElement(_grid.Box, {
    mr: [0, "4rem"],
    my: [0, "2rem"],
    mt: ["1rem", 0]
  }, /*#__PURE__*/_react["default"].createElement(_Space["default"], {
    size: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_.SmallTitle, {
    color: "turquoise",
    align: "left"
  }, title), /*#__PURE__*/_react["default"].createElement(_.Text, {
    align: "left",
    color: "darkGrey"
  }, error ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "error"
  }, response) : response), href && /*#__PURE__*/_react["default"].createElement(SliderFeatureSlideButton, {
    href: href
  }, buttonText))));
};

var _default = SliderFeatureSlide;
exports["default"] = _default;
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  position: absolute;\n  bottom: -3rem;\n  left: -100px;\n  height: 20.5rem;\n\n  @media screen and (max-width: ", ") {\n    display: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n\n  & .slick-slider {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  @media screen and (max-width: ", ") {\n    width: calc(100% + 60px);\n    margin-left: -30px;\n    max-width: none;\n\n    & .slick-list {\n      background-color: transparent;\n      border-radius: 0;\n      box-shadow: none;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SliderListWrapper = _styledComponents["default"].div(_templateObject(), _.UI.breakpoints.mobile);

var SliderListDots = _styledComponents["default"].ul(_templateObject2());

var SliderListYado = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject3(), _.UI.breakpoints.mobile);
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  transition: 0.3s;\n\n  .slick-active & {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  text-align: center;\n  padding: 1rem;\n  position: relative;\n  cursor: pointer;\n  border-bottom: 1px solid ", ";\n\n  &:hover::after {\n    width: 90%;\n    left: 5%;\n  }\n  &::after {\n    content: '';\n    height: 3px;\n    width: 0;\n    background-color: ", ";\n    position: absolute;\n    bottom: -1px;\n    left: 50%;\n    transition: 0.3s;\n\n    .slick-active & {\n      width: 100%;\n      left: 0;\n      background-color: ", ";\n    }\n  }\n\n  @media screen and (max-width: ", ") {\n    border: none;\n    &::after {\n      content: none;\n    }\n    &::before {\n      height: 12px;\n      width: 12px;\n      border-radius: 50%;\n      background-color: ", ";\n      content: '';\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      transition: 0.3s;\n\n      .slick-active & {\n        background-color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SliderListNavigationStyled = _styledComponents["default"].span(_templateObject(), _.UI.colors.lightGrey, _.UI.colors.lightGrey, _.UI.colors.turquoise, _.UI.breakpoints.mobile, _.UI.colors.lightGrey, _.UI.colors.darkGrey);

var SliderListNavigationSmallTitleStyled = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.SmallTitle, props);
})(_templateObject2(), _.UI.colors.turquoise);
/**
 * Component
 */

var SliderListNavigation = function SliderListNavigation(_ref) {
  var title = _ref.title,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement(SliderListNavigationStyled, {
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(SliderListNavigationSmallTitleStyled, {
    font: "roboto",
    color: "lightGrey",
    className: "hidden-mobile"
  }, title));
};

var _default = SliderListNavigation;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../../");

var _grid = require("@rebass/grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Component
 */
var SliderListSlide = function SliderListSlide(_ref) {
  var title = _ref.title,
      image = _ref.image,
      list = _ref.list;
  return /*#__PURE__*/_react["default"].createElement(_grid.Flex, {
    flexWrap: "wrap"
  }, /*#__PURE__*/_react["default"].createElement(_.Box, null, /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "big",
    className: "hidden-mobile"
  }), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "medium",
    className: "hidden-mobile"
  })), /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: 1 / 2
  }, image.maxDpi ? /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, {
    src: image.src,
    alt: image.alt,
    maxDpi: image.maxDpi,
    visibleByDefault: true
  }) : /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, {
    src: image.src,
    alt: image.alt,
    visibleByDefault: true
  })), /*#__PURE__*/_react["default"].createElement(_.Box, {
    width: 1 / 2
  }, /*#__PURE__*/_react["default"].createElement(_.MiddleTitle, {
    color: "turquoise",
    align: "left"
  }, title), /*#__PURE__*/_react["default"].createElement(_.BulletList, {
    datas: list.map(function (item, i) {
      return /*#__PURE__*/_react["default"].createElement(_.Text, {
        key: i
      }, item);
    })
  })));
};

var _default = SliderListSlide;
exports["default"] = _default;
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _ = require("../../");

require("slick-carousel/slick/slick.css");

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n\n  .slick-prev,\n  .slick-next {\n    display: flex;\n    align-items: center;\n  }\n\n  .slick-prev {\n    transform: rotate(180deg);\n  }\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    display: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    width: calc(100% + (2.5rem * 2));\n    margin-left: -2.5rem;\n  }\n  .slick-track {\n    display: flex;\n    align-items: center;\n  }\n  .slick-slider {\n    display: flex;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SliderTestimonyCompactWrapper = _styledComponents["default"].div(_templateObject(), _.UI.breakpoints.mobile);

var SliderTestimonyCompactStyled = _styledComponents["default"].div(_templateObject2());

var SliderTestimonyCompactArrowsStyled = _styledComponents["default"].div(_templateObject3(), _.UI.breakpoints.mobile);

var SliderTestimonyCompactArrows = function SliderTestimonyCompactArrows(_ref) {
  var onClick = _ref.onClick,
      color = _ref.color,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement(SliderTestimonyCompactArrowsStyled, {
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


var SliderTestimonyCompact = /*#__PURE__*/function (_Component) {
  _inherits(SliderTestimonyCompact, _Component);

  var _super = _createSuper(SliderTestimonyCompact);

  function SliderTestimonyCompact() {
    var _this;

    _classCallCheck(this, SliderTestimonyCompact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "settingsSlider", {
      infinite: true,
      dots: false,
      nextArrow: /*#__PURE__*/_react["default"].createElement(SliderTestimonyCompactArrows, {
        color: _this.props.color
      }),
      prevArrow: /*#__PURE__*/_react["default"].createElement(SliderTestimonyCompactArrows, {
        color: _this.props.color
      }),
      autoplay: true,
      autoplaySpeed: 15000,
      responsive: [{
        breakpoint: _.UI.breakpoints.mobile,
        settings: {
          focusOnSelect: true
        }
      }]
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return /*#__PURE__*/_react["default"].createElement(SliderTestimonyCompactWrapper, {
        className: (0, _bind["default"])(_this.props.className)
      }, /*#__PURE__*/_react["default"].createElement(SliderTestimonyCompactStyled, null, /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], _this.settingsSlider, _react["default"].Children.map(_this.props.children, function (child) {
        return _react["default"].cloneElement(child, {
          maxLenghtTestimony: _this.props.maxLenghtTestimony,
          color: _this.props.color
        });
      }))));
    });

    return _this;
  }

  return SliderTestimonyCompact;
}(_react.Component);

SliderTestimonyCompact.displayName = 'SliderTestimonyCompact'; // https://github.com/facebook/react/issues/4915#issuecomment-335803765

var _default = SliderTestimonyCompact;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    width: 3.125rem;\n    height: 3.125rem;\n    margin: 15px 0;\n    transition: 0.3s;\n\n    .slick-current & {\n      width: 80px;\n      height: 80px;\n      margin: 0;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  text-align: center;\n  padding: 1rem;\n  position: relative;\n  outline: none;\n  border: 1px solid transparent;\n  opacity: 0.3;\n  transition: 0.3s;\n  cursor: pointer;\n\n  .slick-current & {\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SliderTestimonyNavigationStyled = _styledComponents["default"].span(_templateObject());

var SliderTestimonyNavigationProfilePicture = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject2(), _.UI.breakpoints.mobile);
/**
 * Component
 */

var SliderTestimonyNavigation = function SliderTestimonyNavigation(_ref) {
  var _ref$picture = _ref.picture,
      picture = _ref$picture === void 0 ? '' : _ref$picture,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? '' : _ref$position,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'extraDarkGrey' : _ref$color;
  return /*#__PURE__*/_react["default"].createElement(SliderTestimonyNavigationStyled, null, /*#__PURE__*/_react["default"].createElement(SliderTestimonyNavigationProfilePicture, {
    src: picture,
    width: "2.941rem",
    height: "2.941rem",
    maxDpi: 1,
    roundShape: true
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    align: "center",
    className: "hidden-mobile",
    color: color,
    size: "small"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, name.split(' ')[0], " ", /*#__PURE__*/_react["default"].createElement("br", null), name.replace(name.split(' ')[0], '')), /*#__PURE__*/_react["default"].createElement("br", null), position));
};

var _default = SliderTestimonyNavigation;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _validators = require("../../../utils/validators");

var _ = require("../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  @media screen and (max-width: ", ") {\n    align-items: flex-start;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    margin-left: 3.5rem;\n\n    .text--size-small {\n      text-align: left;\n      margin-left: 0.588rem;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  padding: 1.647rem 2.588rem;\n  @media screen and (max-width: ", ") {\n    border-radius: 1.176rem;\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  height: 3rem;\n  margin-right: 1rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  justify-content: space-between;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 2.941rem;\n  height: 2.941rem;\n  margin-right: 1rem;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    width: 3.125rem;\n    height: 3.125rem;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    padding: 2rem 1rem 3rem;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 0.765rem;\n  display: inline-block;\n\n  @media screen and (max-width: ", ") {\n    width: 1rem;\n    margin-left: 0.588rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Generation of stars
 */
var getStars = function getStars(n) {
  var Stars = [];

  for (var i = 0; i < 5; i++) {
    Stars.push( /*#__PURE__*/_react["default"].createElement(SliderTestimonySlideStar, {
      src: "common/icon/unicolor/star",
      color: i < n ? 'yellow' : 'lightGrey',
      width: "1.294rem",
      key: i
    }));
  }

  return Stars;
};
/**
 * Style
 */


var SliderTestimonySlideStar = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject(), _.UI.breakpoints.mobile);

var SliderTestimonySlideStyled = _styledComponents["default"].div(_templateObject2(), _.UI.breakpoints.mobile);

var SliderTestimonySlideProfilPicture = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject3(), _.UI.breakpoints.mobile);
var SliderTestimonySlideHeader = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Flex, props);
})(_templateObject4(), _.UI.breakpoints.mobile);
var SliderTestimonySlideLogo = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject5());

var SliderTestimonySlideCard = _styledComponents["default"].div(_templateObject6(), _.UI.breakpoints.mobile, _.UI.colors.white, _.UI.shadows.slider);

var SliderTestimonySlideStars = _styledComponents["default"].div(_templateObject7(), _.UI.breakpoints.mobile);

var SliderTestimonySlideTextOrganisation = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Text, props);
})(_templateObject8());
var SliderTestimonySlideFlexOrganisation = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Flex, props);
})(_templateObject9(), _.UI.breakpoints.mobile);
/**
 * Component
 */

var SliderTestimonySlide = function SliderTestimonySlide(_ref) {
  var user = _ref.user,
      testimony = _ref.testimony,
      organisation = _ref.organisation,
      _ref$maxLenghtTestimo = _ref.maxLenghtTestimony,
      maxLenghtTestimony = _ref$maxLenghtTestimo === void 0 ? 450 : _ref$maxLenghtTestimo,
      color = _ref.color;

  var _checkSize = (0, _validators.checkSize)(testimony.text, maxLenghtTestimony),
      error = _checkSize.error,
      response = _checkSize.response;

  return /*#__PURE__*/_react["default"].createElement(SliderTestimonySlideStyled, null, /*#__PURE__*/_react["default"].createElement(SliderTestimonySlideCard, null, /*#__PURE__*/_react["default"].createElement(SliderTestimonySlideHeader, null, /*#__PURE__*/_react["default"].createElement(_.Flex, {
    justifyContent: "left",
    custom: false
  }, /*#__PURE__*/_react["default"].createElement(SliderTestimonySlideProfilPicture, {
    src: user.picture,
    maxDpi: 1,
    roundShape: true
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    color: color || 'extraDarkGrey',
    align: "left"
  }, /*#__PURE__*/_react["default"].createElement("b", null, user.name), /*#__PURE__*/_react["default"].createElement("br", null), user.position)), /*#__PURE__*/_react["default"].createElement(SliderTestimonySlideStars, null, getStars(testimony.note), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_.Text, {
    size: "small",
    align: "right",
    color: color
  }, testimony.origin))), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "big"
  }), /*#__PURE__*/_react["default"].createElement(_.Text, {
    align: "left",
    color: color
  }, error ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "error"
  }, response) : response), /*#__PURE__*/_react["default"].createElement(_.Space, {
    size: "big"
  }), /*#__PURE__*/_react["default"].createElement(SliderTestimonySlideFlexOrganisation, {
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(SliderTestimonySlideLogo, {
    src: organisation.logo,
    alt: organisation.name,
    maxDpi: 1
  }), /*#__PURE__*/_react["default"].createElement(SliderTestimonySlideTextOrganisation, {
    color: color || 'extraDarkGrey',
    align: "left",
    size: "small"
  }, /*#__PURE__*/_react["default"].createElement("b", null, organisation.name), /*#__PURE__*/_react["default"].createElement("span", {
    className: "hidden-mobile"
  }, /*#__PURE__*/_react["default"].createElement("br", null), organisation.resume))), /*#__PURE__*/_react["default"].createElement(_.Text, {
    color: "extraDarkGrey",
    align: "left",
    size: "small",
    className: "hidden-desktop"
  }, organisation.resume)));
};

var _default = SliderTestimonySlide;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  &.space--tiny {\n    padding-top: 0.5882rem;\n  }\n  &.space--small {\n    padding-top: 1.176rem;\n  }\n  &.space--medium {\n    padding-top: 2.353rem;\n  }\n  &.space--big {\n    padding-top: 2.941rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SpaceStyled = _styledComponents["default"].span(_templateObject());
/**
 * Component
 */


var Space = function Space(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement(SpaceStyled, {
    className: (0, _bind["default"])(className, "space--".concat(size))
  });
};

var _default = Space;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _components = require("../components");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSvg = _interopRequireDefault(require("react-svg"));

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  svg {\n    display: inline-block;\n    height: ", ";\n    width: ", ";\n    .svg--color-primary {\n      fill: ", ";\n    }\n    .svg--color-secondary {\n      fill: ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* Hack whitespace */\n  font-size: 0;\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    text-align: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SvgWrapper = _styledComponents["default"].div(_templateObject(), _components.UI.breakpoints.mobile);

var SvgStyled = (0, _styledComponents["default"])(function (_ref) {
  var color = _ref.color,
      colorSecondary = _ref.colorSecondary,
      height = _ref.height,
      width = _ref.width,
      rest = _objectWithoutProperties(_ref, ["color", "colorSecondary", "height", "width"]);

  return /*#__PURE__*/_react["default"].createElement(_reactSvg["default"], rest);
})(_templateObject2(), function (_ref2) {
  var height = _ref2.height;
  return height;
}, function (_ref3) {
  var width = _ref3.width;
  return width;
}, function (_ref4) {
  var color = _ref4.color;
  return _components.UI.colors[color];
}, function (_ref5) {
  var colorSecondary = _ref5.colorSecondary;
  return _components.UI.colors[colorSecondary];
});
/**
 * Component
 */

var Svg = function Svg(_ref6) {
  var className = _ref6.className,
      _ref6$color = _ref6.color,
      color = _ref6$color === void 0 ? 'darkGrey' : _ref6$color,
      _ref6$colorSecondary = _ref6.colorSecondary,
      colorSecondary = _ref6$colorSecondary === void 0 ? 'turquoise' : _ref6$colorSecondary,
      _ref6$height = _ref6.height,
      height = _ref6$height === void 0 ? '' : _ref6$height,
      src = _ref6.src,
      _ref6$visibleByDefaul = _ref6.visibleByDefault,
      visibleByDefault = _ref6$visibleByDefaul === void 0 ? false : _ref6$visibleByDefaul,
      _ref6$width = _ref6.width,
      width = _ref6$width === void 0 ? '' : _ref6$width;
  var widthCalc = width;
  var heightCalc = height;

  if (width !== '' && height === '') {
    heightCalc = width;
  } else if (width === '' && height !== '') {
    widthCalc = height;
  }

  return /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadComponent, {
    threshold: 400,
    visibleByDefault: visibleByDefault
  }, /*#__PURE__*/_react["default"].createElement(SvgWrapper, {
    className: className
  }, /*#__PURE__*/_react["default"].createElement(SvgStyled, {
    src: "".concat(process.env.GATSBY_CDN_HOST, "/").concat(src, ".svg"),
    color: color,
    colorSecondary: colorSecondary,
    width: widthCalc,
    height: heightCalc,
    fallback: function fallback() {
      console.error("\"".concat(src, "\" failed to load."));
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: "error"
      }, src, " not found.");
    }
  })));
};

Svg.displayName = 'Svg'; // https://github.com/facebook/react/issues/4915#issuecomment-335803765

var _default = Svg;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rcTable = _interopRequireDefault(require("rc-table"));

var _ = require("../");

var _TableExpansionPanel = _interopRequireDefault(require("./TableExpansionPanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  text-transform: uppercase;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  vertical-align: middle;\n  padding: 20px 1rem;\n  border-left: 1px dashed ", ";\n\n  &.rc-table-title {\n    display: flex;\n    border-left: none;\n  }\n  .rc-table-row-level-0 &.rc-table-title {\n    justify-content: space-between;\n    flex-direction: row-reverse;\n\n    .indent-level-0 {\n      display: none;\n    }\n  }\n  .rc-table-row-level-1 & {\n    background-color: rgba(245, 245, 245, 0.75);\n  }\n  &.rc-table-row-expand-icon-cell {\n    vertical-align: middle;\n  }\n  & .rc-table-row-collapsed,\n  & .rc-table-row-expanded {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    background-image: url('", "/components/table/arrow.svg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 8px;\n    cursor: pointer;\n    opacity: 0.8;\n    transition: 0.3s;\n  }\n  & .rc-table-row-collapsed {\n    transform: rotate(90deg);\n  }\n  & .rc-table-row-expanded {\n    transform: rotate(-90deg);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border-top: 1px dashed ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-align: base-line;\n  text-align: center;\n  padding: 20px 1rem;\n  border-left: 1px dashed ", ";\n  &.rc-table-title {\n    border-left: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  border-radius: 1.647rem;\n  box-shadow: ", ";\n  background-color: ", ";\n  padding: 1rem 0;\n  overflow: hidden;\n\n  /* Fix responsive bug in FF and Safari (bug #22) */\n  colgroup col {\n    min-width: 0 !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var TableStyled = _styledComponents["default"].table(_templateObject(), _.UI.shadows.sliderLight, _.UI.colors.white);

var TableHeaderCell = _styledComponents["default"].th(_templateObject2(), _.UI.colors.lightGrey);

var TableBodyRow = _styledComponents["default"].tr(_templateObject3(), _.UI.colors.lightGrey);

var TableBodyCell = _styledComponents["default"].td(_templateObject4(), _.UI.colors.lightGrey, process.env.GATSBY_CDN_HOST);

var TableSmallTitle = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.SmallTitle, props);
})(_templateObject5());
/**
 * Formatting Data
 */

var transformColumns = function transformColumns(columns) {
  return columns.map(function (column, i) {
    var dataIndex = column.dataIndex,
        title = column.title,
        image = column.image,
        className = column.className,
        width = column.width;
    return {
      key: i,
      dataIndex: dataIndex,
      className: className,
      title: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, image && /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, {
        src: image,
        height: "65px"
      }), title && /*#__PURE__*/_react["default"].createElement(TableSmallTitle, {
        color: "turquoise"
      }, title)),
      width: width
    };
  });
};

var transformValue = function transformValue(data, crossColor) {
  if (!data) return /*#__PURE__*/_react["default"].createElement(CellCheck, null);else if (data === 'no') return /*#__PURE__*/_react["default"].createElement(TextCell, null, /*#__PURE__*/_react["default"].createElement(Cross, {
    opacity: ".6",
    color: crossColor
  }));else return /*#__PURE__*/_react["default"].createElement(TextCell, null, data);
};

var transformData = function transformData(datas, crossColor) {
  return datas.map(function (_ref, i) {
    var title = _ref.title,
        jeunePousse = _ref.jeunePousse,
        bonzai = _ref.bonzai,
        baobab = _ref.baobab,
        cocotier = _ref.cocotier,
        sequoia = _ref.sequoia,
        max = _ref.max,
        children = _ref.children,
        key = _ref.key;
    return {
      key: key || i,
      title: /*#__PURE__*/_react["default"].createElement(_.Text, {
        color: "darkGrey"
      }, /*#__PURE__*/_react["default"].createElement("strong", null, title)),
      jeunePousse: transformValue(jeunePousse, crossColor),
      bonzai: transformValue(bonzai, crossColor),
      baobab: transformValue(baobab, crossColor),
      cocotier: transformValue(cocotier, crossColor),
      sequoia: transformValue(sequoia, crossColor),
      max: transformValue(max, crossColor),
      children: children && children.map(function (child, j) {
        if (typeof child === 'string') {
          return {
            key: key || 'TextCellString' + i + j,
            title: /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_.Text, {
              color: "darkGrey"
            }, child)),
            jeunePousse: /*#__PURE__*/_react["default"].createElement(CellCheck, null),
            bonzai: /*#__PURE__*/_react["default"].createElement(CellCheck, null),
            baobab: /*#__PURE__*/_react["default"].createElement(CellCheck, null),
            cocotier: /*#__PURE__*/_react["default"].createElement(CellCheck, null),
            sequoia: /*#__PURE__*/_react["default"].createElement(CellCheck, null),
            max: /*#__PURE__*/_react["default"].createElement(CellCheck, null)
          };
        } else {
          var _title = child.title,
              subTitle = child.subTitle,
              _jeunePousse = child.jeunePousse,
              _bonzai = child.bonzai,
              _baobab = child.baobab,
              _cocotier = child.cocotier,
              _sequoia = child.sequoia,
              _max = child.max,
              _key = child.key;
          return {
            key: _key || 'TextCellOther' + i + j,
            title: /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_.Text, {
              color: "darkGrey"
            }, _title), /*#__PURE__*/_react["default"].createElement(_.Text, {
              size: "small",
              color: "darkGrey"
            }, subTitle)),
            jeunePousse: transformValue(_jeunePousse, crossColor),
            bonzai: transformValue(_bonzai, crossColor),
            baobab: transformValue(_baobab, crossColor),
            cocotier: transformValue(_cocotier, crossColor),
            sequoia: transformValue(_sequoia, crossColor),
            max: transformValue(_max, crossColor)
          };
        }
      })
    };
  });
};
/**
 * Internal Component
 */


var Check = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, _extends({
    src: "components/check-list/check",
    color: "turquoise",
    width: "15px"
  }, props));
})(_templateObject6(), function (_ref2) {
  var opacity = _ref2.opacity;
  return "opacity: ".concat(opacity, ";");
});
var Cross = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, _extends({
    src: "common/icon/unicolor/cross",
    width: "15px"
  }, props));
})(_templateObject7(), function (_ref3) {
  var opacity = _ref3.opacity;
  return "opacity: ".concat(opacity, ";");
});

var TextCell = function TextCell(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/_react["default"].createElement(_.Text, {
    color: "extraDarkGrey",
    align: "center"
  }, children);
};

var CellCheck = function CellCheck() {
  return /*#__PURE__*/_react["default"].createElement(TextCell, null, /*#__PURE__*/_react["default"].createElement(Check, null));
};
/**
 * Component
 */


var TablePrice = function TablePrice(_ref5) {
  var columns = _ref5.columns,
      datas = _ref5.datas,
      _ref5$crossColor = _ref5.crossColor,
      crossColor = _ref5$crossColor === void 0 ? 'middleGrey' : _ref5$crossColor;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_rcTable["default"], {
    className: "hidden-mobile",
    indentSize: 20,
    components: {
      table: TableStyled,
      header: {
        cell: TableHeaderCell
      },
      body: {
        row: TableBodyRow,
        cell: TableBodyCell
      }
    },
    defaultExpandedRowKeys: ['others'],
    columns: transformColumns(columns),
    data: transformData(datas, crossColor)
  }), columns.map(function (column, i) {
    if (column.dataIndex !== 'title') return /*#__PURE__*/_react["default"].createElement("div", {
      key: i
    }, /*#__PURE__*/_react["default"].createElement(_.Space, {
      size: "small"
    }), /*#__PURE__*/_react["default"].createElement(_TableExpansionPanel["default"], {
      column: column,
      datas: datas,
      key: i,
      crossColor: crossColor
    }));else return false;
  }));
};

var _default = TablePrice;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactAnimateHeight = _interopRequireDefault(require("react-animate-height"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  margin-left: 10px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  border-top: 1px dashed ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  padding: 1rem;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  li {\n    margin: 10px 0;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  text-transform: uppercase;\n  flex: 1;\n  font-weight: ", ";\n  margin-left: 10px;\n\n  @media screen and (max-width: ", ") {\n    text-align: left !important;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  transition: 0.3s;\n\n  &.expansion--open {\n    transform: rotate(90deg);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  box-shadow: ", ";\n  border-radius: 10px;\n  cursor: pointer;\n  align-self: end;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ExpansionPanelStyled = _styledComponents["default"].div(_templateObject(), _.UI.colors.extraLightGrey, _.UI.shadows.sliderLight);

var ExpansionPanelArrow = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, _extends({
    src: "common/icon/unicolor/arrow"
  }, props));
})(_templateObject2());
var ExpansionPanelTitle = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.SmallTitle, props);
})(_templateObject3(), _.UI.fonts.weight.bold, _.UI.breakpoints.mobile);
var ExpansionPanelTitleWrapper = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Flex, props);
})(_templateObject4());

var ExpansionPanelUl = _styledComponents["default"].ul(_templateObject5());

var ExpansionPanelInner = _styledComponents["default"].div(_templateObject6());

var ExpansionPanelInnerBorder = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(ExpansionPanelInner, props);
})(_templateObject7(), _.UI.colors.lightGrey);
var ExpansionPanelTextCheck = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Text, props);
})(_templateObject8());
/**
 * Component
 */

var TableExpansionPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(TableExpansionPanel, _React$Component);

  var _super = _createSuper(TableExpansionPanel);

  function TableExpansionPanel() {
    var _this;

    _classCallCheck(this, TableExpansionPanel);

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

  _createClass(TableExpansionPanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          crossColor = _this$props.crossColor,
          _this$props$column = _this$props.column,
          title = _this$props$column.title,
          image = _this$props$column.image,
          dataIndex = _this$props$column.dataIndex,
          datas = _this$props.datas;
      return /*#__PURE__*/_react["default"].createElement(ExpansionPanelStyled, {
        onClick: this.toggle,
        className: "hidden-desktop"
      }, /*#__PURE__*/_react["default"].createElement(ExpansionPanelInner, null, /*#__PURE__*/_react["default"].createElement(_.Flex, {
        alignItems: "center",
        custom: false
      }, /*#__PURE__*/_react["default"].createElement(ExpansionPanelTitleWrapper, {
        alignItems: "center",
        custom: false
      }, /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, {
        src: image,
        height: "50px"
      }), /*#__PURE__*/_react["default"].createElement(ExpansionPanelTitle, {
        color: "turquoise",
        align: "left"
      }, title)), /*#__PURE__*/_react["default"].createElement(ExpansionPanelArrow, {
        width: "10px",
        className: this.state.height === 0 ? 'expansion--close' : 'expansion--open'
      }))), /*#__PURE__*/_react["default"].createElement(_reactAnimateHeight["default"], {
        height: this.state.height,
        duration: 300
      }, datas.map(function (_ref, i) {
        var title = _ref.title,
            children = _ref.children;
        return /*#__PURE__*/_react["default"].createElement(ExpansionPanelInnerBorder, {
          key: i
        }, /*#__PURE__*/_react["default"].createElement(_.Text, {
          color: "darkGrey"
        }, /*#__PURE__*/_react["default"].createElement("strong", null, title)), /*#__PURE__*/_react["default"].createElement(ExpansionPanelUl, null, children.map(function (child, j) {
          var title = child.title,
              subTitle = child.subTitle; // with specific value

          if (child[dataIndex] === 'no') return /*#__PURE__*/_react["default"].createElement("li", {
            key: j
          }, /*#__PURE__*/_react["default"].createElement(_.Flex, {
            custom: false,
            alignItems: "center"
          }, /*#__PURE__*/_react["default"].createElement(_.Svg, {
            src: "common/icon/unicolor/cross",
            color: crossColor,
            width: "15px"
          }), /*#__PURE__*/_react["default"].createElement(ExpansionPanelTextCheck, {
            color: "darkGrey"
          }, title || child)));else if (child[dataIndex]) return /*#__PURE__*/_react["default"].createElement(_.Text, {
            key: j,
            tag: "li",
            color: "darkGrey"
          }, title, " :", ' ', /*#__PURE__*/_react["default"].createElement(_.Text, {
            tag: "span",
            color: "turquoise"
          }, child[dataIndex]), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_.Text, {
            size: "small",
            tag: "span",
            color: "darkGrey"
          }, subTitle)); // without specific value
          else return /*#__PURE__*/_react["default"].createElement("li", {
              key: j
            }, /*#__PURE__*/_react["default"].createElement(_.Flex, {
              custom: false,
              alignItems: "center"
            }, /*#__PURE__*/_react["default"].createElement(_.Svg, {
              src: "components/check-list/check",
              color: "turquoise",
              width: "15px"
            }), /*#__PURE__*/_react["default"].createElement(ExpansionPanelTextCheck, {
              color: "darkGrey"
            }, title || child)));
        })));
      })));
    }
  }]);

  return TableExpansionPanel;
}(_react["default"].Component);

var _default = TableExpansionPanel;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Team = function Team(_ref) {
  var team = _ref.team;
  return team.map(function (_ref2, i) {
    var image = _ref2.image,
        name = _ref2.name,
        job = _ref2.job,
        _ref2$maxDpi = _ref2.maxDpi,
        maxDpi = _ref2$maxDpi === void 0 ? 2 : _ref2$maxDpi;
    return /*#__PURE__*/_react["default"].createElement(_.Box, {
      width: 1 / 3,
      key: i
    }, /*#__PURE__*/_react["default"].createElement(_.AnimationSwapImage, {
      image: "pages/equipe/".concat(image),
      imageHover: "pages/equipe/".concat(image, "-hover"),
      maxDpi: maxDpi
    }), /*#__PURE__*/_react["default"].createElement(_.SmallTitle, {
      align: "center"
    }, name), /*#__PURE__*/_react["default"].createElement(_.Text, {
      align: "center"
    }, job));
  });
};

var _default = Team;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  transition: opacity linear 0.3s;\n  ", ";\n\n  &:hover {\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var TextBoxStyled = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var hoverAnimation = _ref.hoverAnimation;
  return hoverAnimation && "opacity: .5";
});
/**
 * Component
 */


var TextBox = function TextBox(_ref2) {
  var datas = _ref2.datas,
      _ref2$hoverAnimation = _ref2.hoverAnimation,
      hoverAnimation = _ref2$hoverAnimation === void 0 ? false : _ref2$hoverAnimation;
  return datas.map(function (data, i) {
    return /*#__PURE__*/_react["default"].createElement(TextBoxStyled, {
      hoverAnimation: hoverAnimation,
      key: i
    }, /*#__PURE__*/_react["default"].createElement(_.SmallTitle, {
      font: "roboto",
      align: "left",
      color: "turquoise"
    }, data.title), /*#__PURE__*/_react["default"].createElement(_.Space, {
      size: "tiny"
    }), /*#__PURE__*/_react["default"].createElement(_.Text, {
      align: "left"
    }, data.text), /*#__PURE__*/_react["default"].createElement(_.Space, {
      size: "medium"
    }));
  });
};

var _default = TextBox;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ = require("..");

var _translations = require("../../utils/translations");

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
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 0.3rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: 0.85rem;\n  color: ", ";\n  text-align: center;\n  height: 8.235rem;\n  width: 8.235rem;\n  padding: 0.95rem 1.176rem;\n  border-radius: 50%;\n  background-color: ", ";\n  cursor: pointer;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  animation: ", " 2.3s ease-in-out infinite;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 100vh;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  10% {\n    transform: scale(1.2,0.8);\n  }\n  24%, 26% {\n    transform: translateY(-10vh) scale(1, 1.2);\n  }\n  40% {\n    transform: translateY(0) scale(1, 1);\n  }\n  44% {\n    transform: translateY(0) scale(1.05,0.95);\n  }\n  56% {\n    transform: translateY(-3vh) scale(1,1);\n  }\n  70% {\n    transform: translateY(0) scale(1,1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var animationVideoButton = (0, _styledComponents.keyframes)(_templateObject());

var VideoButtonWrapper = _styledComponents["default"].div(_templateObject2());

var animationCall = (0, _styledComponents.css)(_templateObject3(), animationVideoButton);

var Button = _styledComponents["default"].div(_templateObject4(), _.UI.fonts.family.roboto, _.UI.fonts.weight.normal, _.UI.colors.white, _.UI.colors.turquoise, function (_ref) {
  var animationVideoButton = _ref.animationVideoButton;
  return animationVideoButton && animationCall;
});

var ButtonIcon = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, props);
})(_templateObject5());
/**
 * Component
 */

var VideoButton = /*#__PURE__*/function (_Component) {
  _inherits(VideoButton, _Component);

  var _super = _createSuper(VideoButton);

  function VideoButton() {
    var _this;

    _classCallCheck(this, VideoButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      wistiaPopoverVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleVideoButtonWrapperClick", function () {
      // necessary to force rerendering of the <Video> component, Wistia "popoverhide" event being unreliable in the context of React
      _this.setState({
        wistiaPopoverVisible: false
      });

      setTimeout(function () {
        _this.setState({
          wistiaPopoverVisible: true
        });
      }, 100);
    });

    return _this;
  }

  _createClass(VideoButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          videoId = _this$props.videoId,
          _this$props$animation = _this$props.animationVideoButton,
          animationVideoButton = _this$props$animation === void 0 ? true : _this$props$animation;
      return /*#__PURE__*/_react["default"].createElement(VideoButtonWrapper, {
        onClick: this.handleVideoButtonWrapperClick
      }, /*#__PURE__*/_react["default"].createElement(Button, {
        animationVideoButton: animationVideoButton
      }, /*#__PURE__*/_react["default"].createElement(ButtonIcon, {
        src: "components/video-button/player",
        width: "20px",
        color: "white"
      }), (0, _translations.formatMessage)('videobutton_text')), this.state.wistiaPopoverVisible && /*#__PURE__*/_react["default"].createElement(_.Video, {
        videoId: videoId,
        wistiaParameters: ['popover=true', 'popoverShowOnLoad=true', 'popoverAnimateThumbnail=true']
      }));
    }
  }]);

  return VideoButton;
}(_react.Component);

var _default = VideoButton;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ = require("..");

var _chunk2 = _interopRequireDefault(require("lodash/chunk"));

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

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  top: 75%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  top: 65%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  width: 100%;\n  margin: 0;\n  color: #fff;\n  font-family: ", ";\n  font-size: 1.5em;\n  font-weight: 600;\n  justify-content: center;\n  text-align: center;\n  @media screen and (max-width: 768px) {\n    font-size: 0.8em;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  svg {\n    position: absolute;\n    top: 35%;\n    left: 50%;\n    transform: translateX(-50%);\n    padding-bottom: 25px;\n    width: 20%;\n    height: auto;\n  }\n  svg:hover path {\n    opacity: 0.95;\n  }\n  path:first-child {\n    transition: 0.3s;\n    opacity: 0.75;\n  }\n  path:nth-child(2) {\n    fill: #fff;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: auto;\n  padding-top: 56.25%;\n  background: #4174eb;\n  background-size: cover;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var VideoPlaceholderWrapper = _styledComponents["default"].div(_templateObject());

var BackgroundImage = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.AdaptiveImage, props);
})(_templateObject2());
var PlayButton = (0, _styledComponents["default"])(_.Svg)(_templateObject3());
var TitleStyled = (0, _styledComponents.css)(_templateObject4(), _.UI.fonts.family.roboto);

var TitleStart = _styledComponents["default"].p(_templateObject5(), TitleStyled);

var TitleEnd = _styledComponents["default"].p(_templateObject6(), TitleStyled);
/**
 * Component
 */


var VideoPlaceholder = /*#__PURE__*/function (_Component) {
  _inherits(VideoPlaceholder, _Component);

  var _super = _createSuper(VideoPlaceholder);

  function VideoPlaceholder() {
    var _this;

    _classCallCheck(this, VideoPlaceholder);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      videoVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "getTitleParts", function (title) {
      if (!title) {
        return null;
      }

      var titleWords = title.split(' ');
      return (0, _chunk2["default"])(titleWords, Math.ceil(titleWords.length / 2));
    });

    _defineProperty(_assertThisInitialized(_this), "handleVideoPlaceholderWrapperClick", function () {
      _this.setState({
        videoVisible: true
      });
    });

    return _this;
  }

  _createClass(VideoPlaceholder, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          videoId = _this$props.videoId,
          _this$props$videoTitl = _this$props.videoTitle,
          videoTitle = _this$props$videoTitl === void 0 ? '' : _this$props$videoTitl,
          _this$props$autoplay = _this$props.autoplay,
          autoplay = _this$props$autoplay === void 0 ? true : _this$props$autoplay;
      var videoVisible = this.state.videoVisible;
      var titleParts = this.getTitleParts(videoTitle);
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !videoVisible ? /*#__PURE__*/_react["default"].createElement(VideoPlaceholderWrapper, {
        onClick: this.handleVideoPlaceholderWrapperClick
      }, /*#__PURE__*/_react["default"].createElement(BackgroundImage, {
        src: "components/video/video-placeholder"
      }), /*#__PURE__*/_react["default"].createElement(PlayButton, {
        src: "components/video-placeholder/play-button"
      }), titleParts && /*#__PURE__*/_react["default"].createElement(TitleStart, null, titleParts[0].join(' ')), titleParts && titleParts.length >= 2 && /*#__PURE__*/_react["default"].createElement(TitleEnd, null, titleParts[1].join(' '))) : /*#__PURE__*/_react["default"].createElement(_.Video, {
        videoId: videoId,
        autoplay: autoplay
      }));
    }
  }]);

  return VideoPlaceholder;
}(_react.Component);

var _default = VideoPlaceholder;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _bind = _interopRequireDefault(require("classnames/bind"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  .wistia-click-to-play {\n    display: inline-block;\n    height: 100%;\n    position: relative;\n    width: 100%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  margin-top: 20px;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var VideoPadding = _styledComponents["default"].div(_templateObject());

var VideoWrapper = _styledComponents["default"].div(_templateObject2());

var VideoStyled = _styledComponents["default"].div(_templateObject3());
/**
 * Component
 */


var Video = /*#__PURE__*/function (_Component) {
  _inherits(Video, _Component);

  var _super = _createSuper(Video);

  function Video() {
    _classCallCheck(this, Video);

    return _super.apply(this, arguments);
  }

  _createClass(Video, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!window.Wistia) {
        var wistiaScript = document.createElement('script');
        wistiaScript.src = 'https://fast.wistia.com/assets/external/E-v1.js';
        wistiaScript.async = true;
        document.body.appendChild(wistiaScript);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$videoId = _this$props.videoId,
          videoId = _this$props$videoId === void 0 ? '' : _this$props$videoId,
          autoplay = _this$props.autoplay,
          _this$props$wistiaPar = _this$props.wistiaParameters,
          wistiaParameters = _this$props$wistiaPar === void 0 ? [] : _this$props$wistiaPar;
      return /*#__PURE__*/_react["default"].createElement(VideoPadding, {
        className: "wistia_responsive_padding"
      }, /*#__PURE__*/_react["default"].createElement(VideoWrapper, {
        className: "wistia_responsive_wrapper"
      }, /*#__PURE__*/_react["default"].createElement(VideoStyled, {
        className: _bind["default"].apply(void 0, ['wistia_embed', "wistia_async_".concat(videoId), 'videoFoam=true', "autoPlay=".concat(autoplay)].concat(_toConsumableArray(wistiaParameters)))
      }, "\xA0")));
    }
  }]);

  return Video;
}(_react.Component);

var _default = Video;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "UI", {
  enumerable: true,
  get: function get() {
    return _styles["default"];
  }
});
Object.defineProperty(exports, "AdaptiveImage", {
  enumerable: true,
  get: function get() {
    return _AdaptiveImage["default"];
  }
});
Object.defineProperty(exports, "Arrow", {
  enumerable: true,
  get: function get() {
    return _Arrow["default"];
  }
});
Object.defineProperty(exports, "Box", {
  enumerable: true,
  get: function get() {
    return _Box["default"];
  }
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: function get() {
    return _Card["default"];
  }
});
Object.defineProperty(exports, "ExpansionPanel", {
  enumerable: true,
  get: function get() {
    return _ExpansionPanel["default"];
  }
});
Object.defineProperty(exports, "Flex", {
  enumerable: true,
  get: function get() {
    return _Flex["default"];
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _Footer["default"];
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function get() {
    return _Image["default"];
  }
});
Object.defineProperty(exports, "Layout", {
  enumerable: true,
  get: function get() {
    return _Layout["default"];
  }
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function get() {
    return _Link["default"];
  }
});
Object.defineProperty(exports, "Section", {
  enumerable: true,
  get: function get() {
    return _Section["default"];
  }
});
Object.defineProperty(exports, "Space", {
  enumerable: true,
  get: function get() {
    return _Space["default"];
  }
});
Object.defineProperty(exports, "Svg", {
  enumerable: true,
  get: function get() {
    return _Svg["default"];
  }
});
Object.defineProperty(exports, "Team", {
  enumerable: true,
  get: function get() {
    return _Team["default"];
  }
});
Object.defineProperty(exports, "TextBox", {
  enumerable: true,
  get: function get() {
    return _TextBox["default"];
  }
});
Object.defineProperty(exports, "Video", {
  enumerable: true,
  get: function get() {
    return _Video["default"];
  }
});
Object.defineProperty(exports, "VideoPlaceholder", {
  enumerable: true,
  get: function get() {
    return _VideoPlaceholder["default"];
  }
});
Object.defineProperty(exports, "AnimationTyping", {
  enumerable: true,
  get: function get() {
    return _AnimationTyping["default"];
  }
});
Object.defineProperty(exports, "AnimationSwapImage", {
  enumerable: true,
  get: function get() {
    return _AnimationSwapImage["default"];
  }
});
Object.defineProperty(exports, "AnimationBubbles", {
  enumerable: true,
  get: function get() {
    return _AnimationBubbles["default"];
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button["default"];
  }
});
Object.defineProperty(exports, "ButtonLink", {
  enumerable: true,
  get: function get() {
    return _ButtonLink["default"];
  }
});
Object.defineProperty(exports, "ButtonText", {
  enumerable: true,
  get: function get() {
    return _ButtonText["default"];
  }
});
Object.defineProperty(exports, "HeaderHome", {
  enumerable: true,
  get: function get() {
    return _HeaderHome["default"];
  }
});
Object.defineProperty(exports, "HeaderHomeAnimation", {
  enumerable: true,
  get: function get() {
    return _HeaderHomeAnimation["default"];
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function get() {
    return _Header["default"];
  }
});
Object.defineProperty(exports, "HeaderBig", {
  enumerable: true,
  get: function get() {
    return _HeaderBig["default"];
  }
});
Object.defineProperty(exports, "HeaderPicture", {
  enumerable: true,
  get: function get() {
    return _HeaderPicture["default"];
  }
});
Object.defineProperty(exports, "HeaderSmall", {
  enumerable: true,
  get: function get() {
    return _HeaderSmall["default"];
  }
});
Object.defineProperty(exports, "InputBasic", {
  enumerable: true,
  get: function get() {
    return _InputBasic["default"];
  }
});
Object.defineProperty(exports, "InputButton", {
  enumerable: true,
  get: function get() {
    return _InputButton["default"];
  }
});
Object.defineProperty(exports, "BulletList", {
  enumerable: true,
  get: function get() {
    return _BulletList["default"];
  }
});
Object.defineProperty(exports, "CheckList", {
  enumerable: true,
  get: function get() {
    return _CheckList["default"];
  }
});
Object.defineProperty(exports, "Navigation", {
  enumerable: true,
  get: function get() {
    return _Navigation["default"];
  }
});
Object.defineProperty(exports, "NavigationChild", {
  enumerable: true,
  get: function get() {
    return _NavigationChild["default"];
  }
});
Object.defineProperty(exports, "NavigationCta", {
  enumerable: true,
  get: function get() {
    return _NavigationCta["default"];
  }
});
Object.defineProperty(exports, "NavigationItem", {
  enumerable: true,
  get: function get() {
    return _NavigationItem["default"];
  }
});
Object.defineProperty(exports, "NavigationToggle", {
  enumerable: true,
  get: function get() {
    return _NavigationToggle["default"];
  }
});
Object.defineProperty(exports, "SliderCard", {
  enumerable: true,
  get: function get() {
    return _SliderCard["default"];
  }
});
Object.defineProperty(exports, "SliderCardSlide", {
  enumerable: true,
  get: function get() {
    return _SliderCardSlide["default"];
  }
});
Object.defineProperty(exports, "SliderFeature", {
  enumerable: true,
  get: function get() {
    return _SliderFeature["default"];
  }
});
Object.defineProperty(exports, "SliderFeatureSlide", {
  enumerable: true,
  get: function get() {
    return _SliderFeatureSlide["default"];
  }
});
Object.defineProperty(exports, "SliderList", {
  enumerable: true,
  get: function get() {
    return _SliderList["default"];
  }
});
Object.defineProperty(exports, "SliderListSlide", {
  enumerable: true,
  get: function get() {
    return _SliderListSlide["default"];
  }
});
Object.defineProperty(exports, "SliderTestimony", {
  enumerable: true,
  get: function get() {
    return _SliderTestimony["default"];
  }
});
Object.defineProperty(exports, "SliderTestimonyCompact", {
  enumerable: true,
  get: function get() {
    return _SliderTestimonyCompact["default"];
  }
});
Object.defineProperty(exports, "SliderTestimonySlide", {
  enumerable: true,
  get: function get() {
    return _SliderTestimonySlide["default"];
  }
});
Object.defineProperty(exports, "Table", {
  enumerable: true,
  get: function get() {
    return _Table["default"];
  }
});
Object.defineProperty(exports, "BigTitle", {
  enumerable: true,
  get: function get() {
    return _BigTitle["default"];
  }
});
Object.defineProperty(exports, "MiddleTitle", {
  enumerable: true,
  get: function get() {
    return _MiddleTitle["default"];
  }
});
Object.defineProperty(exports, "SmallTitle", {
  enumerable: true,
  get: function get() {
    return _SmallTitle["default"];
  }
});
Object.defineProperty(exports, "Subtitle", {
  enumerable: true,
  get: function get() {
    return _Subtitle["default"];
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function get() {
    return _Text["default"];
  }
});

var _styles = _interopRequireDefault(require("../styles/"));

var _AdaptiveImage = _interopRequireDefault(require("./AdaptiveImage"));

var _Arrow = _interopRequireDefault(require("./Arrow"));

var _Box = _interopRequireDefault(require("./Box"));

var _Card = _interopRequireDefault(require("./Card"));

var _ExpansionPanel = _interopRequireDefault(require("./ExpansionPanel"));

var _Flex = _interopRequireDefault(require("./Flex"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _Image = _interopRequireDefault(require("./Image"));

var _Layout = _interopRequireDefault(require("./Layout"));

var _Link = _interopRequireDefault(require("./Link"));

var _Section = _interopRequireDefault(require("./Section"));

var _Space = _interopRequireDefault(require("./Space"));

var _Svg = _interopRequireDefault(require("./Svg"));

var _Team = _interopRequireDefault(require("./Team"));

var _TextBox = _interopRequireDefault(require("./TextBox"));

var _Video = _interopRequireDefault(require("./Video"));

var _VideoPlaceholder = _interopRequireDefault(require("./Video/VideoPlaceholder"));

var _AnimationTyping = _interopRequireDefault(require("./Animations/AnimationTyping"));

var _AnimationSwapImage = _interopRequireDefault(require("./Animations/AnimationSwapImage"));

var _AnimationBubbles = _interopRequireDefault(require("./Animations/AnimationBubbles"));

var _Button = _interopRequireDefault(require("./Buttons/Button.tsx"));

var _ButtonLink = _interopRequireDefault(require("./Buttons/ButtonLink.tsx"));

var _ButtonText = _interopRequireDefault(require("./Buttons/ButtonText.tsx"));

var _HeaderHome = _interopRequireDefault(require("./Headers/HeaderHome/HeaderHome"));

var _HeaderHomeAnimation = _interopRequireDefault(require("./Headers/HeaderHome/HeaderHomeAnimation"));

var _Header = _interopRequireDefault(require("./Headers/Header"));

var _HeaderBig = _interopRequireDefault(require("./Headers/HeaderBig"));

var _HeaderPicture = _interopRequireDefault(require("./Headers/HeaderPicture"));

var _HeaderSmall = _interopRequireDefault(require("./Headers/HeaderSmall"));

var _InputBasic = _interopRequireDefault(require("./Inputs/InputBasic"));

var _InputButton = _interopRequireDefault(require("./Inputs/InputButton"));

var _BulletList = _interopRequireDefault(require("./Lists/BulletList"));

var _CheckList = _interopRequireDefault(require("./Lists/CheckList"));

var _Navigation = _interopRequireDefault(require("./Navigation/Navigation"));

var _NavigationChild = _interopRequireDefault(require("./Navigation/NavigationChild"));

var _NavigationCta = _interopRequireDefault(require("./Navigation/NavigationCta"));

var _NavigationItem = _interopRequireDefault(require("./Navigation/NavigationItem"));

var _NavigationToggle = _interopRequireDefault(require("./Navigation/NavigationToggle"));

var _SliderCard = _interopRequireDefault(require("./Sliders/SliderCard/SliderCard"));

var _SliderCardSlide = _interopRequireDefault(require("./Sliders/SliderCard/SliderCardSlide"));

var _SliderFeature = _interopRequireDefault(require("./Sliders/SliderFeature/SliderFeature"));

var _SliderFeatureSlide = _interopRequireDefault(require("./Sliders/SliderFeature/SliderFeatureSlide"));

var _SliderList = _interopRequireDefault(require("./Sliders/SliderList/SliderList"));

var _SliderListSlide = _interopRequireDefault(require("./Sliders/SliderList/SliderListSlide"));

var _SliderTestimony = _interopRequireDefault(require("./Sliders/SliderTestimony/SliderTestimony"));

var _SliderTestimonyCompact = _interopRequireDefault(require("./Sliders/SliderTestimony/SliderTestimonyCompact"));

var _SliderTestimonySlide = _interopRequireDefault(require("./Sliders/SliderTestimony/SliderTestimonySlide"));

var _Table = _interopRequireDefault(require("./Table/Table"));

var _BigTitle = _interopRequireDefault(require("./Texts/BigTitle"));

var _MiddleTitle = _interopRequireDefault(require("./Texts/MiddleTitle"));

var _SmallTitle = _interopRequireDefault(require("./Texts/SmallTitle"));

var _Subtitle = _interopRequireDefault(require("./Texts/Subtitle"));

var _Text = _interopRequireDefault(require("./Texts/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactCountTo = _interopRequireDefault(require("react-count-to"));

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var headerHomeCards = [{
  title: 'Membres',
  image: 'members'
}, {
  title: 'Comptabilité',
  image: 'accounting'
}, {
  title: 'Adhésions',
  image: 'membership'
}, {
  title: 'Dons',
  image: 'donations'
}, {
  title: 'Site internet',
  image: 'website'
}, {
  title: 'Emailing',
  image: 'emailing'
}, {
  title: 'Billetterie',
  image: 'ticketing'
}, {
  title: 'Boutique',
  image: 'deal'
}];

var IndexPage = function IndexPage() {
  return /*#__PURE__*/_react["default"].createElement(_components.Layout, {
    preFooter: true,
    meta: {
      title: 'AssoConnect Logiciel Association - Le Logiciel des Associations Tout-en-Un',
      description: 'Le Logiciel Tout-en-Un des Associations ! Tous les Outils de Gestion de votre Association dans un Logiciel : Adhésions, Compta, Dons en Ligne, Site Web, Emails'
    }
  }, /*#__PURE__*/_react["default"].createElement(_components.HeaderHome, {
    cards: headerHomeCards,
    subTitle: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Changez le monde,", /*#__PURE__*/_react["default"].createElement("br", null), "AssoConnect s'occupe du reste !"),
    title: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Le logiciel tout-en-un", /*#__PURE__*/_react["default"].createElement("br", null), "pour g\xE9rer simplement", /*#__PURE__*/_react["default"].createElement("br", null), "votre association"),
    videoId: "6yurbg1g3b"
  }), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "big"
  }), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "big"
  }), /*#__PURE__*/_react["default"].createElement(_components.Section, {
    wave: {
      direction: 'down'
    }
  }, /*#__PURE__*/_react["default"].createElement(_components.Box, {
    width: 1
  }, /*#__PURE__*/_react["default"].createElement(_components.MiddleTitle, null, "Gagnez du temps au quotidien"), /*#__PURE__*/_react["default"].createElement(_components.Subtitle, null, "50 outils pour g\xE9rer facilement votre association"), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "big"
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderFeature, {
    yado: {
      image: 'yado-look-up',
      position: '',
      alt: 'yado assoconnect'
    }
  }, /*#__PURE__*/_react["default"].createElement(_components.SliderFeatureSlide, {
    image: {
      link: 'accounting',
      alt: "comptabilité d'association"
    },
    title: "Comptabilit\xE9",
    text: "Tenez votre comptabilit\xE9 sereinement gr\xE2ce \xE0 notre module complet et simple \xE0 utiliser. Pas besoin d'\xEAtre un expert pour \xE7a !",
    href: "/fonctionnalites/logiciel-comptabilite-association/",
    buttonText: "En savoir plus"
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderFeatureSlide, {
    image: {
      link: 'members',
      alt: 'Gestion des membres pour association'
    },
    title: "Membres",
    text: "Remplacez votre traditionnel Excel par une base de membres claire, en ligne et \xE0 jour en permanence !",
    href: "/fonctionnalites/gestion-membres-association/"
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderFeatureSlide, {
    image: {
      link: 'membership',
      alt: 'Adhésions pour association'
    },
    title: "Adh\xE9sions",
    text: "Passez enfin des rentr\xE9es associatives sereines en g\xE9rant les adh\xE9sions en ligne. Finies les centaines de ch\xE8ques \xE0 encaisser !",
    href: "/fonctionnalites/adhesions/"
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderFeatureSlide, {
    image: {
      link: 'donations',
      alt: 'Dons pour association'
    },
    title: "Dons",
    text: "D\xE9veloppez les sources de financement de votre association loi 1901 en lan\xE7ant des collectes de dons en ligne.",
    href: "/fonctionnalites/logiciel-dons/"
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderFeatureSlide, {
    image: {
      link: 'website',
      alt: 'Site web pour association'
    },
    title: "Site internet",
    text: "Cr\xE9ez facilement un joli site internet \xE0 l'image de votre association, sans avoir besoin de comp\xE9tence technique !",
    href: "/fonctionnalites/site-association/"
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderFeatureSlide, {
    image: {
      link: 'communication',
      alt: 'Communication pour association'
    },
    title: "Communication",
    text: "Tous vos outils de communication centralis\xE9s \xE0 un endroit unique : emailing, blog, publipostage\u2026 C'est vous qui choisissez !",
    href: "/fonctionnalites/communication-association/"
  })), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "big",
    className: "hidden-mobile"
  }), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "big",
    className: "hidden-mobile"
  }))), /*#__PURE__*/_react["default"].createElement(_components.Section, {
    wave: {
      color: 'blue',
      direction: 'up'
    }
  }, /*#__PURE__*/_react["default"].createElement(_components.Box, {
    width: 1 / 2,
    overflowLeft: true
  }, /*#__PURE__*/_react["default"].createElement(_components.AdaptiveImage, {
    src: "pages/index/dashboard",
    alt: "logiciel association"
  })), /*#__PURE__*/_react["default"].createElement(_components.Box, {
    width: 1 / 2
  }, /*#__PURE__*/_react["default"].createElement(_components.BigTitle, {
    color: "yellow",
    align: "left"
  }, "Un logiciel tout-en-un pour"), /*#__PURE__*/_react["default"].createElement(_components.BigTitle, {
    align: "left",
    minHeight: "3em",
    display: "block"
  }, /*#__PURE__*/_react["default"].createElement(_components.AnimationTyping, {
    data: ["tous les types d'associations", 'les associations sportives', 'les associations en réseau', 'les associations étudiantes', 'les fondations', 'les associations médico-sociales', 'les associations de loisirs', 'les associations professionnelles', 'les clubs de sport', 'les fonds de dotation', 'les têtes de réseaux associatifs', 'les associations caritatives', "les associations de protection de l'environnement", 'les associations culturelles', 'les fondations', 'les associations politiques', "les associations d'éducation", 'les associations religieuses']
  })), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_components.ButtonLink, {
    href: "/associations/logiciel-type-association/",
    theme: "white",
    button: {
      size: 'big'
    }
  }, "et pour mon asso ?"), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "medium"
  }))), /*#__PURE__*/_react["default"].createElement(_components.Section, null, /*#__PURE__*/_react["default"].createElement(_components.Box, {
    width: 2 / 5
  }, /*#__PURE__*/_react["default"].createElement(_components.BigTitle, {
    align: "left",
    color: "yellow"
  }, /*#__PURE__*/_react["default"].createElement(_reactLazyLoadImageComponent.LazyLoadComponent, null, /*#__PURE__*/_react["default"].createElement(_reactCountTo["default"], {
    to: 10000,
    speed: 2000
  })), ' ', "associations ", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_components.BigTitle, {
    align: "left",
    color: "blue",
    tag: "span"
  }, "de 8 \xE0 800 000 membres")), /*#__PURE__*/_react["default"].createElement(_components.Subtitle, {
    align: "left"
  }, "nous font confiance"), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "medium"
  }), /*#__PURE__*/_react["default"].createElement(_components.Box, null, /*#__PURE__*/_react["default"].createElement(_components.Link, {
    href: "https://www.appvizer.fr/organisations/association/assoconnect#reviews"
  }, /*#__PURE__*/_react["default"].createElement(_components.AdaptiveImage, {
    src: "pages/index/appvizer_google",
    alt: "Avis Clients AssoConnect",
    align: "left"
  }))), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "big"
  })), /*#__PURE__*/_react["default"].createElement(_components.Box, {
    width: 3 / 5
  }, /*#__PURE__*/_react["default"].createElement(_components.AnimationBubbles, {
    datas: [{
      text: "Bient\xF4t votre asso !",
      backgroundColor: 'turquoise',
      size: 1
    }, {
      image: 'common/clients/organizations/rotary-international',
      alt: 'Rotary International',
      size: 1
    }, {
      image: 'common/clients/organizations/petit-coeur-de-beurre',
      alt: 'Petit Coeur de Beurre',
      size: 2
    }, {
      image: 'common/clients/organizations/utopia56-150',
      alt: 'Utopia 56',
      size: 1
    }, {
      image: 'common/clients/organizations/phenix',
      alt: 'Phenix',
      size: 2
    }, {
      image: 'common/clients/organizations/ebullescence',
      alt: 'Ebullescence',
      size: 3
    }, {
      image: 'common/clients/organizations/amf',
      alt: 'Association Montessori de France',
      size: 2
    }, {
      image: 'common/clients/organizations/federation_protestante_de_france',
      alt: 'Fédération Protestante de France',
      size: 3
    }, {
      image: 'common/clients/organizations/chambre-pro-du-conseil',
      alt: 'Chambre professionnelles du Conseil',
      size: 2
    }, {
      image: 'common/clients/organizations/federation-francaise-de-danse',
      alt: 'Fédération Française de Danse',
      size: 1
    }, {
      image: 'common/clients/organizations/amis-nature150',
      alt: 'Amis de la Nature',
      size: 3
    }, {
      image: 'common/clients/organizations/ff-triathlon',
      alt: 'Fédération Française de Triathlon',
      size: 1
    }, {
      image: 'common/clients/organizations/generation-mouvement',
      alt: 'Génération mouvement',
      size: 2
    }, {
      image: 'common/clients/organizations/sos-racisme',
      alt: 'SOS Racisme',
      size: 1
    }, {
      image: 'common/clients/organizations/timbao',
      alt: 'Timbo',
      size: 3
    }, {
      image: 'common/clients/organizations/ffepgv150',
      alt: "Fédération française d'éducation physique et de gymnastique volontaire",
      size: 2
    }]
  }))), /*#__PURE__*/_react["default"].createElement(_components.Section, {
    wave: {
      direction: 'up'
    }
  }, /*#__PURE__*/_react["default"].createElement(_components.Box, {
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_components.MiddleTitle, null, "Les associations nous adorent"), /*#__PURE__*/_react["default"].createElement(_components.Subtitle, null, "D\xE9couvrez les t\xE9moignages de nos clients"), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "big"
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimony, null, /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/ffmas-sophie',
      name: 'Sophie Nouvel',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Note Google',
      text: "La rencontre avec AssoConnect a été le déclencheur de notre transformation digitale, incontournable aujourd’hui pour rester connecté aux environnements actuels. \n Un grand merci à AssoConnect d’être là ! L'essayer, c’est l’adopter !"
    },
    organisation: {
      logo: 'common/clients/organizations/ffmas',
      name: 'FFMAS',
      resume: 'Association en réseau / Membres : 550 / Lieu : Paris(75)'
    }
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/amis-nature-nicolas',
      name: 'Nicolas Quero-Rio',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Note Google',
      text: "Assoconnect nous permet de connaître en temps réel notre nombre d'adhérents et de faire gagner du temps à nos associations locales en automatisant certaines tâches : comptabilité, gestion des adhérents, envoi de lettres d'information... \n Il assure aussi la sécurité de nos données et leur accessibilité en tout temps, grâce à un simple navigateur internet."
    },
    organisation: {
      logo: 'common/clients/organizations/amis-nature150',
      name: 'Les Amis de la Nature',
      resume: 'Association Environnementale / Membres : 9000 / Lieu : Montreuil (93)'
    }
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/afs-jmm',
      name: 'Jean-Marc Maurice',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Note Google',
      text: "Enfin un logiciel complet !! \n Assoconnect permet à tous nos membres d'intervenir quelque soit le lieu ou l'heure dans son domaine de compétence : de la comptabilité, à la gestion des adhésions, et à la communication sous toutes ses formes (mailing, site internet, etc.) tout en étant certain de travailler sur des renseignements provenant de la toute dernière mise à jour."
    },
    organisation: {
      logo: 'common/clients/organizations/afs',
      name: 'AFS - Agroécologie France Sénégal',
      resume: 'Association caritative / Membres : 180 / Lieu : Saint-Martin du Vivier (76)'
    }
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/forme-loisirs-francoise',
      name: 'Françoise Noël',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Note Google',
      text: "G\xE9r\xE9e avec AssoConnect, notre association Forme et Loisirs a retrouv\xE9 dynamisme et modernit\xE9. \n L'\xE9quipe AssoConnect est g\xE9niale : interrog\xE9e en cas de soucis, elle apporte une r\xE9ponse rapide, efficace, sympathique. Choisir AssoConnect, c'est travailler en confiance et s\xE9r\xE9nit\xE9."
    },
    organisation: {
      logo: 'common/clients/organizations/forme-loisirs',
      name: 'Forme et Loisirs',
      resume: 'Association de Loisirs / Membres : 420 / Lieu : Chaumont (52)'
    }
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/mouette-benoit',
      name: 'Benoit Marcesche',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Net Promoter Score',
      text: "Le paiement et les adh\xE9sions en ligne nous permettent de s\xE9curiser nos inscriptions, de supprimer les erreurs de recopie de formulaires, et de limiter le travail administratif de saisie et d'enregistrement des paiements. AssoConnect est simple d'utilisation et offre un vrai support, via le blog et l'assistance en ligne. Bravo et merci !!"
    },
    organisation: {
      logo: 'common/clients/organizations/mouette',
      name: 'La Mouette Sinagote',
      resume: 'Association Sportive / Membres : 250 / Lieu : Séné (56)'
    }
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/acs-franck',
      name: 'Franck Gérald',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Net Promoter Score',
      text: "Nous sommes tr\xE8s heureux d'avoir fait confiance \xE0 AssoConnect : la plateforme \xE9volue au mieux des besoins de notre association, que ce soit pour la gestion de nos fichiers, pour notre comptabilit\xE9 ou notre communication."
    },
    organisation: {
      logo: 'common/clients/organizations/acs',
      name: 'ACS France',
      resume: 'Association Médico-Sociale / Membres : 3200 / Lieu : Nice (06)'
    }
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/bas-masques-vincent',
      name: 'Vincent Van Laethem',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Note Google',
      text: "Super projet ! Merci infiniment pour ce que vous faites pour la communauté associative. Elle avait bien besoin qu'on s'occupe un peu d'elle :)"
    },
    organisation: {
      logo: 'common/clients/organizations/bas-masques',
      name: 'Bas les Masques',
      resume: 'Association culturelle / Membres : 350 / Lieu : Belgique'
    }
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/amis-voiliers-michel',
      name: 'Michel Balique',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Note Google',
      text: "Cette plateforme traite tous les probl\xE8mes de gestion des associations. L'interface est tr\xE8s agr\xE9able \xE0 utiliser. "
    },
    organisation: {
      logo: 'common/clients/organizations/amis-voiliers',
      name: 'Amis des Grands Voiliers',
      resume: 'Association de Loisirs / Membres : 400 / Lieu : Paris (75)'
    }
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/amam-stephane',
      name: 'Stéphane Dorigo',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Net Promoter Score',
      text: "Gr\xE2ce \xE0 son ensemble de fonctionnalit\xE9s tr\xE8s complet, AssoConnect nous permet de g\xE9rer notre club d\u2019arts martiaux multi-sections. Quel bonheur de n\u2019avoir qu\u2019un seul outil en ligne pour tout faire : Gestion des adh\xE9rents, \xE9v\xE8nements, site internet, communication avec nos adh\xE9rents, les statistiques, etc. Le tout est bien pens\xE9 pour une utilisation agr\xE9able et parfaitement adapt\xE9e aux clubs de sport et autres associations. Un must du genre !"
    },
    organisation: {
      logo: 'common/clients/organizations/amam',
      name: 'AMAM',
      resume: 'Club Omnisports / Membres : 330 / Lieu : Mennecy (91)'
    }
  }), /*#__PURE__*/_react["default"].createElement(_components.SliderTestimonySlide, {
    user: {
      picture: 'common/clients/people/espci-corinne',
      name: 'Corinne Degoutte',
      position: ''
    },
    testimony: {
      note: 5,
      origin: 'Note Google',
      text: "Nous sommes tr\xE8s satisfaits de l'application dans son ensemble et les am\xE9liorations apport\xE9es r\xE9guli\xE8rement. En tant que fonds de dotation, nous utilisons principalement les dons, l'emailing et le site internet. Nous avons bien progress\xE9 dans l'utilisation de ces modules et nous faisons mieux chaque jour, \xE0 mesure que nous d\xE9couvrons les fonctionnalit\xE9s."
    },
    organisation: {
      logo: 'common/clients/organizations/espci',
      name: 'Fonds ESPCI Paris',
      resume: 'Fonds de dotation / Membres : 460 / Lieu : Paris (75)'
    }
  })), /*#__PURE__*/_react["default"].createElement(_components.Space, {
    size: "medium"
  }))));
};

var _default = IndexPage;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    16.65% {\n\t\ttransform: translateY(2.5px);\n\t}\n\n\t33.3% {\n\t\ttransform: translateY(-2px);\n\t}\n\n\t49.95% {\n\t\ttransform: translateY(1.5px);\n\t}\n\n\t66.6% {\n\t\ttransform: translateY(-1px);\n\t}\n\n\t83.25% {\n\t\ttransform: translateY(0.5px);\n\t}\n\n\t100% {\n\t\ttransform: translateY(0);\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    from { transform: translate(0,  0) rotate(0.001deg); }\n    65%  { transform: translate(0, 0.882rem) rotate(0.001deg); }\n    to   { transform: translate(0, 0) rotate(0.001deg); }    \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// add rotate for firefox : https://stackoverrun.com/fr/q/11681778
var floating = (0, _styledComponents.keyframes)(_templateObject());
var floatingDurations = [7, 12, 11, 6, 7, 5, 10, 8];
var wobble = (0, _styledComponents.keyframes)(_templateObject2());
var _default = {
  floating: floating,
  floatingDurations: floatingDurations,
  wobble: wobble
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  mobile: '1200px'
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  primary: '#316BF2',
  blue: '#316BF2',
  mediumBlue: '#1257F6',
  darkBlue: '#011E62',
  extraDarkBlue: '#00174d',
  turquoise: '#00C1A2',
  yellow: '#F6C131',
  red: '#F36052',
  extraDarkGrey: '#333333',
  darkGrey: '#626262',
  middleGrey: '#999999',
  lightGrey: '#DEDEDE',
  extraLightGrey: '#F5F5F5',
  white: '#FFFFFF'
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  family: {
    baloo: 'Baloo, Roboto, Arial, sans-serif',
    roboto: 'Roboto, Arial, sans-serif',
    caveat: 'Caveat, Arial, sans-serif'
  },
  weight: {
    light: 200,
    normal: 400,
    bold: 700
  }
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _animations = _interopRequireDefault(require("./animations"));

var _breakpoints = _interopRequireDefault(require("./breakpoints"));

var _colors = _interopRequireDefault(require("./colors"));

var _fonts = _interopRequireDefault(require("./fonts"));

var _shadows = _interopRequireDefault(require("./shadows"));

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* Reset css */\n  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio,video { margin: 0; padding: 0; border: 0; font-size: 100%; vertical-align: baseline;}\n  html, body{height:100%}\n  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display: block;}\n  ol, ul {list-style: none;}\n  a{text-decoration: none; color: inherit; cursor:pointer}\n  blockquote, q {quotes: none;}\n  blockquote:before, blockquote:after, q:before, q:after {content: ''; content: none;}\n  table {border-collapse: collapse; border-spacing: 0;}\n  *{box-sizing: border-box; outline: none}\n  #___gatsby{overflow-x: hidden}\n\n  /* Error */\n  .error {\n    font-size: .8rem;\n    font-weight: ", ";\n    font-family: ", ";\n    color: red;\n  }\n\n  /* Animations */\n  .animation--effect-bouncing,\n  .animation--effect-wobble, \n  .animation--effect-max {\n    transition: 0.3s;    \n  }\n  .animation--start-hover {\n    &:hover .animation--effect-bouncing, &.animation--effect-bouncing:hover {\n      transform: scale(1.1);\n      transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n    }\n    &:hover .animation--effect-wobble, &.animation--effect-wobble:hover {\n      animation: ", " 1s ease-in-out 1;\n    }\n    &:hover .animation--effect-max, &.animation--effect-max:hover {\n      padding-right: 1.9rem;\n    }\n    /* Desktop mode */\n    @media screen and (min-width: ", ") {\n      &:hover .animation--effect-max, &.animation--effect-max:hover {\n        padding-right: 1.9rem;\n      }\n    }\n  }\n\n  /* Desktop / desktop hidden */\n  @media screen and (min-width: ", ") {\n    .hidden-desktop {\n      display:none !important;\n    }\n  }\n  @media screen and (max-width: ", ") {\n    .hidden-mobile {\n      display: none !important;\n    }\n  }\n\n  /* Font size */\n  html, body {\n    font-size: 16px\n  }\n  @media screen and (min-width: 2000px) {\n    html, body {\n      font-size: 17px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), _fonts["default"].weight.normal, _fonts["default"].family.roboto, _animations["default"].wobble, _breakpoints["default"].mobile, _breakpoints["default"].mobile, _breakpoints["default"].mobile);
var _default = {
  animations: _animations["default"],
  breakpoints: _breakpoints["default"],
  colors: _colors["default"],
  fonts: _fonts["default"],
  GlobalStyle: GlobalStyle,
  shadows: _shadows["default"]
};
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var shadowsSize = {
  big: '0 10px 50px 0'
};
var shadows = {
  header: "".concat(shadowsSize.big, " rgba(0,9,44,.15)"),
  slider: "".concat(shadowsSize.big, " rgba(0,9,44,.20)"),
  sliderLight: "".concat(shadowsSize.big, " rgba(0,9,44,.1)")
};
var _default = shadows;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = void 0;

var random = function random(max) {
  return Math.floor(Math.random() * max);
};

exports.random = random;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkSize = void 0;

var checkSize = function checkSize(text, max) {
  if (text.length < max) return {
    error: false,
    response: text
  };else {
    return {
      error: true,
      response: "Error: ".concat(text.length, " characters, max length: ").concat(max)
    };
  }
};

exports.checkSize = checkSize;
