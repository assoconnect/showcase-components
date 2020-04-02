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