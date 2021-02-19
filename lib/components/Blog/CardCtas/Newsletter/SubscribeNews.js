"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _InputBasic = _interopRequireDefault(require("../../../Inputs/InputBasic"));

var _ = require("../../../");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _formik = require("formik");

var yup = _interopRequireWildcard(require("yup"));

var _colors = _interopRequireDefault(require("../../../../styles/colors"));

var _translations = require("../../../../utils/translations");

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
  var data = _taggedTemplateLiteral(["\n  vertical-align: middle;\n  margin: 1.765rem auto auto auto;\n  transition: background-color 0.3s;\n  outline: none;\n  text-transform: uppercase;\n  border-radius: 21.5px;\n  border: none;\n  color: #316bf2;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 21px;\n  .button {\n    height: 43px;\n    width: 154px;\n    background-color: #ffffff;\n    padding: 0.647rem 1.1rem;\n    transition: 0.3s;\n    color: #316bf2;\n    border: 1px solid ", ";\n\n    .outline & {\n      border: 1px solid ", ";\n    }\n    &:hover {\n      background-color: transparent;\n      border-color: ", ";\n      color: ", ";\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding-right: 0;\n  width: 100%;\n  border: 0;\n  border-radius: 0;\n  border-bottom: solid 1px #fff;\n  background: 0;\n  .input {\n    width: 100%;\n    color: white;\n  }\n  .outline & {\n    border: 1px solid ", ";\n  }\n  .input::placeholder {\n    color: white !important;\n  }\n  padding: 0.588rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  position: relative;\n  width: auto;\n  flex-direction: column;\n\n  > div {\n    text-align: center;\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Style
 */
var FormStyled = (0, _styledComponents["default"])(_formik.Form)(_templateObject());

var InputButtonContainer = _styledComponents["default"].div(_templateObject2());

var InputButtonWrapper = _styledComponents["default"].div(_templateObject3());

var InputButtonStyled = (0, _styledComponents["default"])(_InputBasic["default"])(_templateObject4(), _colors["default"].yellow);
var InputButtonSend = (0, _styledComponents["default"])(_.Button)(_templateObject5(), _colors["default"].white, _colors["default"].white, _colors["default"].white, _colors["default"].white);

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
/**
 * Component
 */


var SubscribeNews = function SubscribeNews(_ref) {
  var className = _ref.className,
      translations = _ref.translations,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? 'https://app.assoconnect.com/sign-up' : _ref$href,
      hubspotId = _ref.hubspotId;

  var goToSignup = function goToSignup(emailValue) {
    setTimeout(function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'email-passed': emailValue
      });

      if (window.location.search.length || href.indexOf('?') !== -1) {
        if (window.location.search.length) {
          window.location.href = "".concat(href).concat(window.location.search, "&email=").concat(emailValue);
        } else {
          window.location.href = "".concat(href, "&email=").concat(emailValue);
        }
      } else {
        window.location.href = "".concat(href, "?email=").concat(emailValue);
      }
    }, 400);
  };

  var fetchHubspot = function fetchHubspot(emailValue) {
    if (hubspotId) {
      fetch("https://api.hsforms.com/submissions/v3/integration/submit/3038993/".concat(hubspotId), {
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
    } else {
      goToSignup(emailValue);
    }
  };
  /** Validation schema */


  var validationSchema = yup.object().shape({
    email: yup.string().required((0, _translations.formatMessage)('inputbutton_validation_required', translations)).matches(/^([a-z0-9!#$%&'*+/=?^_`{|}~.(),:;<>@[\\\]-]+)$/i, (0, _translations.formatMessage)('inputbutton_validation_matches', translations)).email((0, _translations.formatMessage)('inputbutton_validation_email', translations))
  });

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
        placeholder: (0, _translations.formatMessage)('inputbutton_placeholder_blog', translations)
      }), /*#__PURE__*/_react["default"].createElement(InputButtonSend, {
        type: "submit",
        theme: "yellow",
        size: "big",
        animationOff: true
      }, (0, _translations.formatMessage)('inputbuttonNewsletter_text', translations)))));
    });
  } else return null;
};

var _default = SubscribeNews;
exports["default"] = _default;