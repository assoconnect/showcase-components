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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var TableStyled = _styledComponents["default"].table(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  border-radius: 1.647rem;\n  box-shadow: ", ";\n  background-color: ", ";\n  padding: 1rem 0;\n  overflow: hidden;\n\n  /* Fix responsive bug in FF and Safari (bug #22) */\n  colgroup col {\n    min-width: 0 !important;\n  }\n"])), _.UI.shadows.sliderLight, _.UI.colors.white);

var TableHeaderCell = _styledComponents["default"].th(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  text-align: base-line;\n  text-align: center;\n  padding: 20px 1rem;\n  border-left: 1px dashed ", ";\n  &.rc-table-title {\n    border-left: none;\n  }\n"])), _.UI.colors.lightGrey);

var TableBodyRow = _styledComponents["default"].tr(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border-top: 1px dashed ", ";\n"])), _.UI.colors.lightGrey);

var TableBodyCell = _styledComponents["default"].td(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  text-align: center;\n  vertical-align: middle;\n  padding: 20px 1rem;\n  border-left: 1px dashed ", ";\n\n  &.rc-table-title {\n    display: flex;\n    border-left: none;\n  }\n  .rc-table-row-level-0 &.rc-table-title {\n    justify-content: space-between;\n    flex-direction: row-reverse;\n\n    .indent-level-0 {\n      display: none;\n    }\n  }\n  .rc-table-row-level-1 & {\n    background-color: rgba(245, 245, 245, 0.75);\n  }\n  &.rc-table-row-expand-icon-cell {\n    vertical-align: middle;\n  }\n  & .rc-table-row-collapsed,\n  & .rc-table-row-expanded {\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    background-image: url('", "/components/table/arrow.svg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 8px;\n    cursor: pointer;\n    opacity: 0.8;\n    transition: 0.3s;\n  }\n  & .rc-table-row-collapsed {\n    transform: rotate(90deg);\n  }\n  & .rc-table-row-expanded {\n    transform: rotate(-90deg);\n  }\n"])), _.UI.colors.lightGrey, process.env.GATSBY_CDN_HOST);

var TableSmallTitle = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.SmallTitle, props);
})(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  text-transform: uppercase;\n"])));
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
})(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref2) {
  var opacity = _ref2.opacity;
  return "opacity: ".concat(opacity, ";");
});
var Cross = (0, _styledComponents["default"])(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_.Svg, _extends({
    src: "common/icon/unicolor/cross",
    width: "15px"
  }, props));
})(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref3) {
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