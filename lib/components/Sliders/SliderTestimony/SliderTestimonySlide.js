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