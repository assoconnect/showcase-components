"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var SliderTestimonyCompactWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    width: calc(100% + (2.5rem * 2));\n    margin-left: -2.5rem;\n  }\n  .slick-track {\n    display: flex;\n    align-items: center;\n  }\n  .slick-slider {\n    display: flex;\n  }\n"])), _.UI.breakpoints.mobile);

var SliderTestimonyCompactStyled = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n"])));

var SliderTestimonyCompactArrowsStyled = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n\n  .slick-prev,\n  .slick-next {\n    display: flex;\n    align-items: center;\n  }\n\n  .slick-prev {\n    transform: rotate(180deg);\n  }\n\n  /* Mobile mode */\n  @media screen and (max-width: ", ") {\n    display: none;\n  }\n"])), _.UI.breakpoints.mobile);

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
        return /*#__PURE__*/_react["default"].cloneElement(child, {
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