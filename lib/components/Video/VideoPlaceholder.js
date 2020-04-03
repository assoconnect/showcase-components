"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ = require("..");

var _array = require("../../utils/array");

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
      return (0, _array.chunk)(titleWords, Math.ceil(titleWords.length / 2));
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