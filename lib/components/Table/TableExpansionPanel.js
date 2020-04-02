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