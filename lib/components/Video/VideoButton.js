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
          animationVideoButton = _this$props$animation === void 0 ? true : _this$props$animation,
          translations = _this$props.translations;
      return /*#__PURE__*/_react["default"].createElement(VideoButtonWrapper, {
        onClick: this.handleVideoButtonWrapperClick
      }, /*#__PURE__*/_react["default"].createElement(Button, {
        animationVideoButton: animationVideoButton
      }, /*#__PURE__*/_react["default"].createElement(ButtonIcon, {
        src: "components/video-button/player",
        width: "20px",
        color: "white"
      }), (0, _translations.formatMessage)('videobutton_text', translations)), this.state.wistiaPopoverVisible && /*#__PURE__*/_react["default"].createElement(_.Video, {
        videoId: videoId,
        wistiaParameters: ['popover=true', 'popoverShowOnLoad=true', 'popoverAnimateThumbnail=true']
      }));
    }
  }]);

  return VideoButton;
}(_react.Component);

var _default = VideoButton;
exports["default"] = _default;