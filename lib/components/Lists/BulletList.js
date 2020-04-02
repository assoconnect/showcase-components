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