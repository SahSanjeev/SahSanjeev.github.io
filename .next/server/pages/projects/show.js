module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/projects/show.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/About.js":
/*!*****************************!*\
  !*** ./components/About.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\react_demo\\Portfolio-main\\components\\About.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const About = () => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    style: {
      padding: '8em 0em'
    },
    vertical: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    stackable: true,
    verticalAlign: "middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3",
    style: {
      fontSize: '3em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "About Me"), __jsx("p", {
    style: {
      fontSize: '1.5em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "I am majorly involved in  project initiation, planning, executing, monitoring, control & closing of equipment and services solutions for PET, Can, Glass  packaging beverage, home and personal care products."), __jsx("p", {
    style: {
      fontSize: '1.3em',
      fontWeight: 'bold'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 12
    }
  }, "I have 25 years project/ engineering experience in FMCG across Asia, Africa, and Europe with multicultural background."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "Download CV")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    floated: "right",
    width: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/abcd.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ "emailjs-com");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! email-validator */ "email-validator");
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_phone_number_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-phone-number-input */ "react-phone-number-input");
/* harmony import */ var react_phone_number_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_phone_number_input__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\react_demo\\Portfolio-main\\components\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Footer = () => {
  Object(emailjs_com__WEBPACK_IMPORTED_MODULE_2__["init"])("user_fUMunBF0G59MNn9hTOePp");
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: success,
    1: setSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: phone,
    1: setPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: formSubmitted,
    1: setFormSubmitted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: formSubmitSuccessful,
    1: setFormSubmitSuccessful
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: validEmail,
    1: validateEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: validPhone,
    1: validatePhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: errorMessage,
    1: setErrorMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const handleSubmit = event => {
    event.preventDefault();
    const receiverEmail = "harshbansal32000@gmail.com";
    const templateId = "template_cxrbvag";
    const user = "user_fUMunBF0G59MNn9hTOePp";
    sendFeedback({
      templateId,
      email,
      receiverEmail,
      name,
      message,
      user
    });
    setFormSubmitted(true);
  };

  const sendFeedback = ({
    templateId,
    senderEmail,
    receiverEmail,
    name,
    message,
    user
  }) => {
    setLoading(true);
    setErrorMessage('');
    emailjs_com__WEBPACK_IMPORTED_MODULE_2___default.a.send("default_service", templateId, {
      name,
      receiverEmail,
      message
    }, user).then(res => {
      if (res.status === 200) {
        setFormSubmitSuccessful(true);
      }
    }).catch(err => {
      console.error("Error: ", err);
      setErrorMessage(err);
    });
    setLoading(false);
    setName('');
    setPhone('');
    setMessage('');
    setEmail('');
    setSuccess(true);
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    inverted: true,
    vertical: true,
    style: {
      paddingTop: '5em',
      paddingTop: '2em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    divided: true,
    inverted: true,
    stackable: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 9,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    inverted: true,
    as: "h1",
    content: "Get In Touch",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    inverted: true,
    onSubmit: handleSubmit,
    error: !!errorMessage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Your Name",
    placeholder: "Sanjeev Sah",
    onChange: e => {
      setName(e.target.value);
    },
    required: true,
    value: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Email",
    placeholder: "sanjeev.sah@icloud.com",
    required: true,
    onChange: e => {
      setEmail(e.target.value);
      validateEmail(email_validator__WEBPACK_IMPORTED_MODULE_3___default.a.validate(e.target.value));
    },
    error: validEmail ? false : {
      content: 'Please enter a valid email address.',
      pointing: 'below'
    },
    value: email,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Phone",
    placeholder: "+91 xxx-xxx-xxxx",
    onChange: e => {
      setPhone(e.target.value);
      validatePhone(Object(react_phone_number_input__WEBPACK_IMPORTED_MODULE_4__["isValidPhoneNumber"])(e.target.value) === true);
    },
    error: validPhone ? false : {
      content: 'Please enter a valid Phone Number',
      pointing: 'below'
    },
    required: true,
    value: phone,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 19
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].TextArea, {
    fluid: true,
    label: "Message",
    placeholder: "Write a Message...",
    onChange: e => {
      setMessage(e.target.value);
    },
    required: true,
    value: message,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 19
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    error: true,
    header: "Oops!",
    content: errorMessage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    loading: loading,
    type: "submit",
    disabled: !validEmail || !validPhone,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, "Send Message"), success ? "Message Sent" : "")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 6,
    floated: "right",
    style: {
      paddingLeft: '3em '
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h1",
    inverted: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, "My Contact Details"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    size: "big",
    style: {
      padding: '1em 1em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
    name: "marker",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 19
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 19
    }
  }, "Nyati Iris, Pune, Maharashtra 411028")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
    name: "mail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 19
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "mailto:sanjeev.sah@icloud.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, "sanjeev.sah@icloud.com"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Icon, {
    name: "linkedin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 19
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/sanjeev10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  }, "Sanjeev Sah")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    as: "h4",
    className: "header",
    horizontal: true,
    inverted: true,
    style: {
      marginTop: '3em ',
      textTransform: 'uppercase'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }, "Reach out"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    inverted: true,
    textAlign: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/sanjeev10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "linkedin",
    size: "big",
    style: {
      marginLeft: '0.5em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 65
    }
  })), __jsx("a", {
    href: "mailto:sanjeev.sah@icloud.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "mail",
    size: "big",
    style: {
      marginLeft: '0.5em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 57
    }
  })))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h2",
    content: "Copyright \xA9 2021 All rights reserved",
    inverted: true,
    textAlign: "center",
    style: {
      fontSize: '1em',
      fontWeight: 'normal',
      marginTop: '2.2em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes.js */ "./routes.js");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\react_demo\\Portfolio-main\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Header1 extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      currentPage: ''
    });
  }

  render() {
    const {
      currentPage
    } = this.state;
    console.log(currentPage);
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      inverted: true,
      textAlign: "center",
      style: {
        padding: '1em 0em'
      },
      vertical: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
      inverted: "false",
      pointing: "false",
      secondary: "false",
      size: "large",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, __jsx(_routes_js__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      route: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      name: "Home",
      active: currentPage === 'Home',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, "Home")), __jsx(_routes_js__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      route: "/projects",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      name: "Projects",
      active: currentPage === 'Projects',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, "Projects")), __jsx(_routes_js__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      route: "/contact",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      name: "Contact",
      active: currentPage === 'Contact',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, "Contact")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      position: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    }, __jsx("a", {
      href: "http://www.semantic-ui.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "github",
      size: "big",
      style: {
        paddingTop: '0.2em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 54
      }
    })), __jsx("a", {
      href: "http://www.semantic-ui.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "linkedin",
      size: "big",
      style: {
        paddingTop: '0.2em',
        marginLeft: '0.5em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 54
      }
    })), __jsx("a", {
      href: "mailto:jack@semantic-ui.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "mail",
      size: "big",
      style: {
        paddingTop: '0.2em',
        marginLeft: '0.5em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 55
      }
    })))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header1);

/***/ }),

/***/ "./components/Header3.js":
/*!*******************************!*\
  !*** ./components/Header3.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\react_demo\\Portfolio-main\\components\\Header3.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Header3 = ({
  title
}) => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    inverted: true,
    textAlign: "center",
    style: {
      minHeight: 620,
      padding: '1em 0em'
    },
    vertical: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    text: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h1",
    content: "Overview",
    inverted: true,
    style: {
      fontSize: '5em',
      fontWeight: 'normal',
      marginBottom: 0,
      marginTop: '1.5em',
      textTransform: 'uppercase'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h2",
    content: title,
    inverted: true,
    style: {
      fontSize: '3em',
      fontWeight: 'normal',
      textTransform: 'uppercase',
      marginTop: '0.2em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h5",
    content: "AND DETAILS ARE BELOW",
    inverted: true,
    style: {
      fontSize: '1em',
      fontWeight: 'normal',
      marginTop: '0.5em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    size: "big",
    name: "angle double down",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header3);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emailjs-com */ "emailjs-com");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\react_demo\\Portfolio-main\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Layout = props => {
  Object(emailjs_com__WEBPACK_IMPORTED_MODULE_4__["init"])("user_fUMunBF0G59MNn9hTOePp");
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 6
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/projects/show.js":
/*!********************************!*\
  !*** ./pages/projects/show.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Header3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Header3 */ "./components/Header3.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/About */ "./components/About.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.js");
/* harmony import */ var _projectsdetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../projectsdetails */ "./projectsdetails.js");
var _jsxFileName = "D:\\react_demo\\Portfolio-main\\pages\\projects\\show.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










class Show extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static async getInitialProps(props) {
    const res = _projectsdetails__WEBPACK_IMPORTED_MODULE_7__["proj"][props.query.address - 1];
    return res;
  }

  render() {
    // image: "/Combi_BD.png",
    // header:<Link route={`/projects/${address.id}`}><a>{address.title}</a></Link>,
    // extra: address.project_name,
    // meta:address.year?address.location + ' ~ ' + address.year:address.location,
    // //extra:address.feature1?address.feature1 + address.feature2?address.feature2:"":""
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }
    }, __jsx(_components_Header3__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: this.props.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      style: {
        padding: '8em 0em'
      },
      vertical: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      stackable: true,
      verticalAlign: "middle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      width: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      as: "h3",
      style: {
        fontSize: '4em',
        marginBottom: '0.5em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, "Details"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Group, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 18
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Image, {
      size: "tiny",
      src: "/project.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Content, {
      verticalAlign: "middle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 23
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Header, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 25
      }
    }, __jsx("span", {
      style: {
        fontSize: '2em',
        lineHeight: 1
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 39
      }
    }, this.props.title)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Meta, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 25
      }
    }, __jsx("span", {
      style: {
        fontSize: '1.5em'
      },
      className: "price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 27
      }
    }, this.props.year ? this.props.location + ' ~ ' + this.props.year : this.props.location)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Description, {
      style: {
        fontSize: '1.33em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }, this.props.description), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Item"].Extra, {
      style: {
        marginTop: '1em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 25
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      style: {
        fontSize: '1em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 27
      }
    }, "Project Name", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"].Detail, {
      style: {
        fontSize: '0.9em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 29
      }
    }, this.props.project_name)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      style: {
        fontSize: '1em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 27
      }
    }, "Feature1", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"].Detail, {
      style: {
        fontSize: '0.9em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 29
      }
    }, this.props.feature1 ? this.props.feature1 : "N/A")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      style: {
        fontSize: '1em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 27
      }
    }, "Feature2", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"].Detail, {
      style: {
        fontSize: '0.9em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 29
      }
    }, this.props.feature2 ? this.props.feature2 : "N/A"))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      floated: "right",
      width: 7,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: "/abc.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Show);

/***/ }),

/***/ "./projectsdetails.js":
/*!****************************!*\
  !*** ./projectsdetails.js ***!
  \****************************/
/*! exports provided: proj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proj", function() { return proj; });
const proj = [{
  "id": 1,
  "title": "Olam Ranona Green field project",
  "project_name": "Aseptic complete PET line for drinking yogurt & apple juice",
  "location": "Nigeria",
  "year": "2017",
  "description": "SBO Sidel 10 /18000 BPH blow-fill-cap solution: the Combi Predis™/Capdis™ FMa decontamination system complete line resource management, installation, ramp up",
  "feature1": "Reduced electrical consumption by up to 45% with the Ecoven",
  "feature2": "Reduced annual operating costs by 30% compared with traditional dry bottle decontamination Reduced PET costs through light weighting."
}, {
  "id": 2,
  "title": "HANA Green field project",
  "project_name": "high-speed automated ozonized water line 78200 BPH ",
  "location": "Saudi Arabia",
  "year": "2015",
  "description": "Fully automated line consist of Sidel Matrix SBO34, filler SF100, Labeller, ocme packer, Gebo Cermex robotized palletizer, stretch wrapping"
}, {
  "id": 3,
  "title": "Strongpack green field project ",
  "project_name": "Carbonated beverage complete line PET, CAN & Utility",
  "location": "Nigeria",
  "year": "2017",
  "description": "SBO 18 /40500 BPH with utility installation & commissioning support with resource management, installation, ramp up.Utility consists of water treatment, Bosch boiler, Hansa chiller, CO2 plant & process plant.",
  "feature1": "Customer acceptance validation with cost, schedule, quality"
}, {
  "id": 4,
  "title": "ITC project",
  "project_name": "Aseptic PET Combi Complete project ",
  "location": "India",
  "year": "2018",
  "description": "30,000 bph line"
}, {
  "id": 5,
  "title": "Medina green field project",
  "project_name": "Completed commissioning as project support for Combi matrix complete water line",
  "location": "Saudi Arabia",
  "year": "2016",
  "description": "ozonized waterline 39600 bottles /hour complete line"
}, {
  "id": 6,
  "title": "West bay project",
  "project_name": "Project execution & commissioning ",
  "location": "Qatar"
}, {
  "id": 7,
  "title": "Manahel Project",
  "project_name": "Project execution & commissioning ",
  "location": "Saudi Arabia"
}, {
  "id": 8,
  "title": "Azbah Water Medina Project",
  "project_name": "Project execution & commissioning ",
  "location": "Saudi Arabia"
}, {
  "id": 9,
  "title": "Alex seed Project",
  "project_name": "Project execution & commissioning ",
  "location": "Egypt"
}, {
  "id": 10,
  "title": "Serioplast(P&G) Project",
  "project_name": "Project execution & commissioning ",
  "location": "Egypt"
}, {
  "id": 11,
  "title": "Pyramid Project",
  "project_name": "Project execution & commissioning",
  "location": "Egypt"
}, {
  "id": 12,
  "title": "F&N beverages Project",
  "project_name": "Project execution & commissioning",
  "location": "Malaysia"
}, {
  "id": 13,
  "title": "Munzur Project",
  "project_name": "Project execution & commissioning",
  "location": "Turkey"
}, {
  "id": 14,
  "title": "Ahmad Tea green field project",
  "project_name": "Tea processing, blending & packaging unit 30 Tons per Hour ",
  "location": "RAK, UAE",
  "year": "April 2011 - June 2012",
  "description": "Project  included concept drawing,  negotiating with RAKIA free zone for the factory setup,  layout, negotiating UTICO for power & water connection, recruitment for engineering ,production, qc & warehouse personnel, selection of equipment based on life time costing for the complete plant, concept designing & implementing energy efficient cost reduction."
}];

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add('/projects/:address', '/projects/show');
module.exports = routes;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "email-validator":
/*!**********************************!*\
  !*** external "email-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("email-validator");

/***/ }),

/***/ "emailjs-com":
/*!******************************!*\
  !*** external "emailjs-com" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emailjs-com");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-phone-number-input":
/*!*******************************************!*\
  !*** external "react-phone-number-input" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-phone-number-input");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlcjMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvamVjdHMvc2hvdy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0c2RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZW1haWwtdmFsaWRhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZW1haWxqcy1jb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJvdXRlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcGhvbmUtbnVtYmVyLWlucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJBYm91dCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJGb290ZXIiLCJpbml0IiwibmFtZSIsInNldE5hbWUiLCJ1c2VTdGF0ZSIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiZW1haWwiLCJzZXRFbWFpbCIsInBob25lIiwic2V0UGhvbmUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImZvcm1TdWJtaXR0ZWQiLCJzZXRGb3JtU3VibWl0dGVkIiwiZm9ybVN1Ym1pdFN1Y2Nlc3NmdWwiLCJzZXRGb3JtU3VibWl0U3VjY2Vzc2Z1bCIsInZhbGlkRW1haWwiLCJ2YWxpZGF0ZUVtYWlsIiwidmFsaWRQaG9uZSIsInZhbGlkYXRlUGhvbmUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZWNlaXZlckVtYWlsIiwidGVtcGxhdGVJZCIsInVzZXIiLCJzZW5kRmVlZGJhY2siLCJzZW5kZXJFbWFpbCIsImVtYWlsanMiLCJzZW5kIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicGFkZGluZ1RvcCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkVtYWlsVmFsaWRhdG9yIiwidmFsaWRhdGUiLCJjb250ZW50IiwicG9pbnRpbmciLCJpc1ZhbGlkUGhvbmVOdW1iZXIiLCJwYWRkaW5nTGVmdCIsIm1hcmdpblRvcCIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW5MZWZ0IiwiSGVhZGVyMSIsIkNvbXBvbmVudCIsImN1cnJlbnRQYWdlIiwicmVuZGVyIiwic3RhdGUiLCJsb2ciLCJIZWFkZXIzIiwidGl0bGUiLCJtaW5IZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwiU2hvdyIsImdldEluaXRpYWxQcm9wcyIsInByb2oiLCJxdWVyeSIsImFkZHJlc3MiLCJsaW5lSGVpZ2h0IiwieWVhciIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJwcm9qZWN0X25hbWUiLCJmZWF0dXJlMSIsImZlYXR1cmUyIiwicm91dGVzIiwicmVxdWlyZSIsImFkZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7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ZWN0cy9zaG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wcm9qZWN0cy9zaG93LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgRGl2aWRlcixcbiAgR3JpZCxcbiAgSGVhZGVyLFxuICBJY29uLFxuICBJbWFnZSxcbiAgTGlzdCxcbiAgTWVudSxcbiAgU2VnbWVudCxcbiAgU2lkZWJhcixcbiAgVmlzaWJpbGl0eSxcbiAgRHJvcGRvd24sXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuY29uc3QgQWJvdXQgPSAoKSA9PntcbiAgcmV0dXJuKFxuICAgIDxTZWdtZW50IHN0eWxlPXt7IHBhZGRpbmc6ICc4ZW0gMGVtJyB9fSB2ZXJ0aWNhbD5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzdGFja2FibGUgdmVydGljYWxBbGlnbj0nbWlkZGxlJz5cbiAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XG4gICAgICAgICAgICA8SGVhZGVyIGFzPSdoMycgc3R5bGU9e3sgZm9udFNpemU6ICczZW0nIH19PlxuICAgICAgICAgICAgICBBYm91dCBNZVxuICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuNWVtJyB9fT5cbiAgICAgICAgICAgICAgSSBhbSBtYWpvcmx5IGludm9sdmVkIGluICBwcm9qZWN0IGluaXRpYXRpb24sIHBsYW5uaW5nLCBleGVjdXRpbmcsIG1vbml0b3JpbmcsIGNvbnRyb2wgJiBjbG9zaW5nIG9mIGVxdWlwbWVudCBhbmRcbnNlcnZpY2VzIHNvbHV0aW9ucyBmb3IgUEVULCBDYW4sIEdsYXNzICBwYWNrYWdpbmcgYmV2ZXJhZ2UsIGhvbWUgYW5kIHBlcnNvbmFsIGNhcmUgcHJvZHVjdHMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zZW0nLCBmb250V2VpZ2h0OiAnYm9sZCd9fT5cbiAgICAgICAgICAgICBJIGhhdmUgMjUgeWVhcnMgcHJvamVjdC8gZW5naW5lZXJpbmcgZXhwZXJpZW5jZSBpbiBGTUNHIGFjcm9zcyBBc2lhLCBBZnJpY2EsIGFuZCBFdXJvcGUgd2l0aCBtdWx0aWN1bHR1cmFsIGJhY2tncm91bmQuXG4gICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J2JsYWNrJyA+RG93bmxvYWQgQ1Y8L0J1dHRvbj5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPSdyaWdodCcgd2lkdGg9ezh9PlxuICAgICAgICAgICAgICA8SW1hZ2UgICBzcmM9Jy9hYmNkLnBuZycgIC8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1NlZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBEaXZpZGVyLFxuICBHcmlkLFxuICBIZWFkZXIsXG4gIEljb24sXG4gIExpc3QsXG4gIE1lbnUsXG4gIFNlZ21lbnQsXG4gIFNpZGViYXIsXG4gIFZpc2liaWxpdHksXG4gIERyb3Bkb3duLFxuICBGb3JtLFxuICBNZXNzYWdlXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0eyBpbml0IH0gZnJvbSAnZW1haWxqcy1jb20nO1xuaW1wb3J0IGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nO1xuaW1wb3J0IEVtYWlsVmFsaWRhdG9yIGZyb20gJ2VtYWlsLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBpc1ZhbGlkUGhvbmVOdW1iZXIgfSBmcm9tICdyZWFjdC1waG9uZS1udW1iZXItaW5wdXQnXG5cbmNvbnN0IEZvb3RlciA9ICgpID0+e1xuICBpbml0KFwidXNlcl9mVU11bkJGMEc1OU1ObjloVE9lUHBcIik7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZm9ybVN1Ym1pdHRlZCwgc2V0Rm9ybVN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmb3JtU3VibWl0U3VjY2Vzc2Z1bCwgc2V0Rm9ybVN1Ym1pdFN1Y2Nlc3NmdWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdmFsaWRFbWFpbCwgdmFsaWRhdGVFbWFpbF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3ZhbGlkUGhvbmUsIHZhbGlkYXRlUGhvbmVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCByZWNlaXZlckVtYWlsID0gXCJoYXJzaGJhbnNhbDMyMDAwQGdtYWlsLmNvbVwiO1xuICBjb25zdCB0ZW1wbGF0ZUlkID0gXCJ0ZW1wbGF0ZV9jeHJidmFnXCI7XG4gIGNvbnN0IHVzZXIgPSBcInVzZXJfZlVNdW5CRjBHNTlNTm45aFRPZVBwXCI7XG5cbiAgICBzZW5kRmVlZGJhY2soe1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIGVtYWlsLFxuICAgICAgcmVjZWl2ZXJFbWFpbCxcbiAgICAgIG5hbWUsXG4gICAgICBtZXNzYWdlLFxuICAgICAgdXNlcixcbiAgICB9KVxuXG4gICAgc2V0Rm9ybVN1Ym1pdHRlZCh0cnVlKVxuICB9XG5cbiAgY29uc3Qgc2VuZEZlZWRiYWNrID0gKHtcbiAgICB0ZW1wbGF0ZUlkLFxuICAgIHNlbmRlckVtYWlsLFxuICAgIHJlY2VpdmVyRW1haWwsXG4gICAgbmFtZSxcbiAgICBtZXNzYWdlLFxuICAgIHVzZXIsXG4gIH0pID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yTWVzc2FnZSgnJyk7XG4gICAgZW1haWxqc1xuICAgICAgLnNlbmQoXG4gICAgICAgIFwiZGVmYXVsdF9zZXJ2aWNlXCIsXG4gICAgICAgIHRlbXBsYXRlSWQsXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIHJlY2VpdmVyRW1haWwsXG4gICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfSxcbiAgICAgICAgdXNlclxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHNldEZvcm1TdWJtaXRTdWNjZXNzZnVsKHRydWUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtjb25zb2xlLmVycm9yKFwiRXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgfSlcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldE5hbWUoJycpO1xuICAgICAgICBzZXRQaG9uZSgnJyk7XG4gICAgICAgIHNldE1lc3NhZ2UoJycpO1xuICAgICAgICBzZXRFbWFpbCgnJylcbiAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgfVxuXG4gIHJldHVybihcbiAgICA8U2VnbWVudCBpbnZlcnRlZCB2ZXJ0aWNhbCBzdHlsZT17eyBwYWRkaW5nVG9wOiAnNWVtJywgcGFkZGluZ1RvcDogJzJlbSd9fSA+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8R3JpZCBkaXZpZGVkIGludmVydGVkIHN0YWNrYWJsZT5cbiAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezl9ID5cbiAgICAgICAgICAgICAgPEhlYWRlciBpbnZlcnRlZCBhcz0naDEnIGNvbnRlbnQ9J0dldCBJbiBUb3VjaCcgLz5cbiAgICAgICAgICAgICAgPEZvcm0gaW52ZXJ0ZWQgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gZXJyb3I9eyEhZXJyb3JNZXNzYWdlfSA+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGZsdWlkIGxhYmVsPSdZb3VyIE5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NhbmplZXYgU2FoJ1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZSA9PiB7c2V0TmFtZShlLnRhcmdldC52YWx1ZSl9fVxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9IC8+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGZsdWlkIGxhYmVsPSdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nc2FuamVldi5zYWhAaWNsb3VkLmNvbSdcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRW1haWwoRW1haWxWYWxpZGF0b3IudmFsaWRhdGUoZS50YXJnZXQudmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3ZhbGlkRW1haWwgPyBmYWxzZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGluZzogJ2JlbG93J1xuICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH0gLz5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgZmx1aWQgbGFiZWw9J1Bob25lJ1xuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScrOTEgeHh4LXh4eC14eHh4J1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBob25lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlUGhvbmUoaXNWYWxpZFBob25lTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSA9PT0gdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dmFsaWRQaG9uZSA/IGZhbHNlIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgUGhvbmUgTnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRpbmc6ICdiZWxvdydcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bob25lfSAvPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uVGV4dEFyZWFcbiAgICAgICAgICAgICAgICAgICAgICBmbHVpZCBsYWJlbD0nTWVzc2FnZSdcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nV3JpdGUgYSBNZXNzYWdlLi4uJ1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX19XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX0gLz5cbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e2Vycm9yTWVzc2FnZX0gLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2xvYWRpbmd9IHR5cGU9J3N1Ym1pdCcgZGlzYWJsZWQgPSB7IXZhbGlkRW1haWwgfHwgIXZhbGlkUGhvbmV9ID5TZW5kIE1lc3NhZ2U8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICB7c3VjY2Vzcz9cIk1lc3NhZ2UgU2VudFwiOlwiXCJ9XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9IGZsb2F0ZWQ9J3JpZ2h0JyBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzNlbSAnIH19PlxuICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoMScgaW52ZXJ0ZWQ+XG4gICAgICAgICAgICAgICAgTXkgQ29udGFjdCBEZXRhaWxzXG4gICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICA8TGlzdCBzaXplPSdiaWcnIHN0eWxlPXt7IHBhZGRpbmc6ICcxZW0gMWVtJyAsfX0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT0nbWFya2VyJyAvPlxuICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5OeWF0aSBJcmlzLCBQdW5lLCBNYWhhcmFzaHRyYSA0MTEwMjg8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPSdtYWlsJyAvPlxuICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nbWFpbHRvOnNhbmplZXYuc2FoQGljbG91ZC5jb20nPnNhbmplZXYuc2FoQGljbG91ZC5jb208L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPSdsaW5rZWRpbicgLz5cbiAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zYW5qZWV2MTAnPlNhbmplZXYgU2FoPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgPERpdmlkZXJcbiAgICAgICAgICAgICAgICBhcz0naDQnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoZWFkZXInXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgIGludmVydGVkXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnM2VtICcsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVhY2ggb3V0XG4gICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICAgIDxTZWdtZW50IGludmVydGVkIHRleHRBbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2FuamVldjEwJz48SWNvbiBuYW1lPSdsaW5rZWRpbicgc2l6ZT0nYmlnJyBzdHlsZT17e21hcmdpbkxlZnQ6ICcwLjVlbScgfX0gLz48L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nbWFpbHRvOnNhbmplZXYuc2FoQGljbG91ZC5jb20nPjxJY29uIG5hbWU9J21haWwnIHNpemU9J2JpZycgIHN0eWxlPXt7bWFyZ2luTGVmdDogJzAuNWVtJ319IC8+PC9hPlxuICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIGFzPSdoMidcbiAgICAgICAgICBjb250ZW50PSdDb3B5cmlnaHQgwqkgMjAyMSBBbGwgcmlnaHRzIHJlc2VydmVkJ1xuICAgICAgICAgIGludmVydGVkXG4gICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOicxZW0nLFxuICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICAnMi4yZW0nLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L1NlZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCAgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcy5qcydcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBEaXZpZGVyLFxuICBHcmlkLFxuICBIZWFkZXIsXG4gIEljb24sXG4gIEltYWdlLFxuICBMaXN0LFxuICBNZW51LFxuICBTZWdtZW50LFxuICBTaWRlYmFyLFxuICBWaXNpYmlsaXR5LFxuICBEcm9wZG93bixcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cblxuY2xhc3MgSGVhZGVyMSBleHRlbmRzIENvbXBvbmVudHtcblxuICBzdGF0ZSA9IHtcbiAgICBjdXJyZW50UGFnZTonJ1xuICB9XG5cblxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHsgY3VycmVudFBhZ2UgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UGFnZSk7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlZ21lbnRcbiAgICAgICAgICBpbnZlcnRlZFxuICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICcxZW0gMGVtJyB9fVxuICAgICAgICAgIHZlcnRpY2FsXG4gICAgICAgID5cbiAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgaW52ZXJ0ZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIHBvaW50aW5nPSdmYWxzZSdcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5PSdmYWxzZSdcbiAgICAgICAgICAgICAgc2l6ZT0nbGFyZ2UnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPScvJz5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtICBuYW1lPSdIb21lJyBhY3RpdmU9e2N1cnJlbnRQYWdlID09PSAnSG9tZSd9ID5cbiAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayByb3V0ZT0nL3Byb2plY3RzJyA+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSAgbmFtZT0nUHJvamVjdHMnICBhY3RpdmU9e2N1cnJlbnRQYWdlID09PSAnUHJvamVjdHMnfSAgID5cbiAgICAgICAgICAgICAgICAgIFByb2plY3RzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgcm91dGU9Jy9jb250YWN0JyA+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSAgbmFtZT0nQ29udGFjdCcgYWN0aXZlPXtjdXJyZW50UGFnZSA9PT0gJ0NvbnRhY3QnfSA+XG4gICAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBwb3NpdGlvbj0ncmlnaHQnPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHA6Ly93d3cuc2VtYW50aWMtdWkuY29tJz48SWNvbiAgbmFtZT0nZ2l0aHViJyBzaXplPSdiaWcnIHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcwLjJlbScgfX0vPjwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwOi8vd3d3LnNlbWFudGljLXVpLmNvbSc+PEljb24gbmFtZT0nbGlua2VkaW4nIHNpemU9J2JpZycgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzAuMmVtJyxtYXJnaW5MZWZ0OiAnMC41ZW0nIH19IC8+PC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J21haWx0bzpqYWNrQHNlbWFudGljLXVpLmNvbSc+PEljb24gbmFtZT0nbWFpbCcgc2l6ZT0nYmlnJyBzdHlsZT17eyBwYWRkaW5nVG9wOiAnMC4yZW0nICxtYXJnaW5MZWZ0OiAnMC41ZW0nfX0gLz48L2E+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICA8L1NlZ21lbnQ+XG4gICAgICA8L2Rpdj5cbiAgKTtcbn1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyMTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIERpdmlkZXIsXG4gIEdyaWQsXG4gIEhlYWRlcixcbiAgSWNvbixcbiAgSW1hZ2UsXG4gIExpc3QsXG4gIE1lbnUsXG4gIFNlZ21lbnQsXG4gIFNpZGViYXIsXG4gIFZpc2liaWxpdHksXG4gIERyb3Bkb3duLFxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuY29uc3QgSGVhZGVyMyA9ICh7dGl0bGV9KSA9PntcbiAgcmV0dXJuKFxuICAgIDxTZWdtZW50XG4gICAgICBpbnZlcnRlZFxuICAgICAgdGV4dEFsaWduPSdjZW50ZXInXG4gICAgICBzdHlsZT17e21pbkhlaWdodDogNjIwLCBwYWRkaW5nOiAnMWVtIDBlbScgfX1cbiAgICAgIHZlcnRpY2FsXG4gICAgPlxuICAgIDxDb250YWluZXIgdGV4dD5cbiAgICAgIDxIZWFkZXJcbiAgICAgICAgYXM9J2gxJ1xuICAgICAgICBjb250ZW50PSdPdmVydmlldydcbiAgICAgICAgaW52ZXJ0ZWRcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBmb250U2l6ZTogICc1ZW0nLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICAgICAgICBtYXJnaW5Ub3A6ICAnMS41ZW0nLFxuICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxIZWFkZXJcbiAgICAgICAgYXM9J2gyJ1xuICAgICAgICBjb250ZW50PXt0aXRsZX1cbiAgICAgICAgaW52ZXJ0ZWRcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBmb250U2l6ZTonM2VtJyxcbiAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICBtYXJnaW5Ub3A6ICAnMC4yZW0nLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxIZWFkZXJcbiAgICAgICAgYXM9J2g1J1xuICAgICAgICBjb250ZW50PSdBTkQgREVUQUlMUyBBUkUgQkVMT1cnXG4gICAgICAgIGludmVydGVkXG5cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBmb250U2l6ZTonMWVtJyxcbiAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgICBtYXJnaW5Ub3A6ICAnMC41ZW0nLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxJY29uIHNpemU9J2JpZycgbmFtZT1cImFuZ2xlIGRvdWJsZSBkb3duXCIvPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDwvU2VnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyMztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0eyBpbml0IH0gZnJvbSAnZW1haWxqcy1jb20nO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgaW5pdChcInVzZXJfZlVNdW5CRjBHNTlNTm45aFRPZVBwXCIpO1xuICByZXR1cm4gKFxuICA8Q29udGFpbmVyIGZsdWlkPlxuICAgIDxIZWFkPlxuICAgICAgPGxpbmtcbiAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMi4xMi9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgICAvPlxuICAgICA8L0hlYWQ+XG4gICAgIDxIZWFkZXIvPlxuICAgICAgPGRpdj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBIZWFkZXIzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyMydcbmltcG9ydCBBYm91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Fib3V0J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydHsgcHJvaiB9ZnJvbSAnLi4vLi4vcHJvamVjdHNkZXRhaWxzJztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBEaXZpZGVyLFxuICBHcmlkLFxuICBIZWFkZXIsXG4gIEljb24sXG4gIEltYWdlLFxuICBMaXN0LFxuICBNZW51LFxuICBTZWdtZW50LFxuICBTaWRlYmFyLFxuICBWaXNpYmlsaXR5LFxuICBEcm9wZG93bixcbiAgSXRlbSxcbiAgTGFiZWxcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmNsYXNzIFNob3cgZXh0ZW5kcyBDb21wb25lbnR7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XG4gICAgY29uc3QgcmVzID1wcm9qW3Byb3BzLnF1ZXJ5LmFkZHJlc3MtMV07XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIC8vIGltYWdlOiBcIi9Db21iaV9CRC5wbmdcIixcbiAgICAvLyBoZWFkZXI6PExpbmsgcm91dGU9e2AvcHJvamVjdHMvJHthZGRyZXNzLmlkfWB9PjxhPnthZGRyZXNzLnRpdGxlfTwvYT48L0xpbms+LFxuICAgIC8vIGV4dHJhOiBhZGRyZXNzLnByb2plY3RfbmFtZSxcbiAgICAvLyBtZXRhOmFkZHJlc3MueWVhcj9hZGRyZXNzLmxvY2F0aW9uICsgJyB+ICcgKyBhZGRyZXNzLnllYXI6YWRkcmVzcy5sb2NhdGlvbixcbiAgICAvLyAvL2V4dHJhOmFkZHJlc3MuZmVhdHVyZTE/YWRkcmVzcy5mZWF0dXJlMSArIGFkZHJlc3MuZmVhdHVyZTI/YWRkcmVzcy5mZWF0dXJlMjpcIlwiOlwiXCJcbiAgICByZXR1cm4oXG5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkZXIzICB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0vPlxuICAgICAgICA8U2VnbWVudCBzdHlsZT17eyBwYWRkaW5nOiAnOGVtIDBlbScgfX0gdmVydGljYWw+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0YWNrYWJsZSB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxuICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzRlbScgLG1hcmdpbkJvdHRvbTonMC41ZW0nfX0+XG4gICAgICAgICAgICAgICAgICBEZXRhaWxzXG4gICAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgIDxJdGVtLkdyb3VwID5cbiAgICAgICAgICAgICAgICAgIDxJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8SXRlbS5JbWFnZSBzaXplPSd0aW55JyBzcmM9Jy9wcm9qZWN0LnBuZycgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5Db250ZW50IHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5IZWFkZXIgPjxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyxsaW5lSGVpZ2h0OiAxIH19Pnt0aGlzLnByb3BzLnRpdGxlfTwvc3Bhbj48L0l0ZW0uSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uTWV0YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxLjVlbScgfX0gY2xhc3NOYW1lPSdwcmljZSc+e3RoaXMucHJvcHMueWVhcj90aGlzLnByb3BzLmxvY2F0aW9uICsgJyB+ICcgKyB0aGlzLnByb3BzLnllYXI6dGhpcy5wcm9wcy5sb2NhdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uTWV0YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkRlc2NyaXB0aW9uICBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+e3RoaXMucHJvcHMuZGVzY3JpcHRpb259PC9JdGVtLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uRXh0cmEgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMWVtJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMWVtJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0IE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwuRGV0YWlsIHN0eWxlPXt7IGZvbnRTaXplOiAnMC45ZW0nIH19Pnt0aGlzLnByb3BzLnByb2plY3RfbmFtZX08L0xhYmVsLkRldGFpbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMWVtJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWF0dXJlMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbC5EZXRhaWwgc3R5bGU9e3sgZm9udFNpemU6ICcwLjllbScgfX0+e3RoaXMucHJvcHMuZmVhdHVyZTE/dGhpcy5wcm9wcy5mZWF0dXJlMTpcIk4vQVwifTwvTGFiZWwuRGV0YWlsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgc3R5bGU9e3sgZm9udFNpemU6ICcxZW0nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZlYXR1cmUyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsLkRldGFpbCBzdHlsZT17eyBmb250U2l6ZTogJzAuOWVtJyB9fT57dGhpcy5wcm9wcy5mZWF0dXJlMj90aGlzLnByb3BzLmZlYXR1cmUyOlwiTi9BXCJ9PC9MYWJlbC5EZXRhaWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uRXh0cmE+XG4gICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgICAgICAgPC9JdGVtLkdyb3VwPlxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD0ncmlnaHQnIHdpZHRoPXs3fT5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSAgIHNyYz0nL2FiYy5wbmcnICAvPlxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgPEZvb3Rlci8+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3c7XG4iLCJleHBvcnQgY29uc3QgcHJvaiA9W1xuICAgIHtcbiAgICAgICAgXCJpZFwiOjEsXG4gICAgICAgIFwidGl0bGVcIjpcIk9sYW0gUmFub25hIEdyZWVuIGZpZWxkIHByb2plY3RcIixcbiAgICAgICAgXCJwcm9qZWN0X25hbWVcIjpcIkFzZXB0aWMgY29tcGxldGUgUEVUIGxpbmUgZm9yIGRyaW5raW5nIHlvZ3VydCAmIGFwcGxlIGp1aWNlXCIsXG4gICAgICAgIFwibG9jYXRpb25cIjpcIk5pZ2VyaWFcIixcbiAgICAgICAgXCJ5ZWFyXCI6XCIyMDE3XCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjpcIlNCTyBTaWRlbCAxMCAvMTgwMDAgQlBIIGJsb3ctZmlsbC1jYXAgc29sdXRpb246IHRoZSBDb21iaSBQcmVkaXPihKIvQ2FwZGlz4oSiIEZNYSBkZWNvbnRhbWluYXRpb24gc3lzdGVtIGNvbXBsZXRlIGxpbmUgcmVzb3VyY2UgbWFuYWdlbWVudCwgaW5zdGFsbGF0aW9uLCByYW1wIHVwXCIsXG4gICAgICAgIFwiZmVhdHVyZTFcIjpcIlJlZHVjZWQgZWxlY3RyaWNhbCBjb25zdW1wdGlvbiBieSB1cCB0byA0NSUgd2l0aCB0aGUgRWNvdmVuXCIsXG4gICAgICAgIFwiZmVhdHVyZTJcIjpcIlJlZHVjZWQgYW5udWFsIG9wZXJhdGluZyBjb3N0cyBieSAzMCUgY29tcGFyZWQgd2l0aCB0cmFkaXRpb25hbCBkcnkgYm90dGxlIGRlY29udGFtaW5hdGlvbiBSZWR1Y2VkIFBFVCBjb3N0cyB0aHJvdWdoIGxpZ2h0IHdlaWdodGluZy5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImlkXCI6MixcbiAgICAgICAgXCJ0aXRsZVwiOlwiSEFOQSBHcmVlbiBmaWVsZCBwcm9qZWN0XCIsXG4gICAgICAgIFwicHJvamVjdF9uYW1lXCI6XCJoaWdoLXNwZWVkIGF1dG9tYXRlZCBvem9uaXplZCB3YXRlciBsaW5lIDc4MjAwIEJQSCBcIixcbiAgICAgICAgXCJsb2NhdGlvblwiOlwiU2F1ZGkgQXJhYmlhXCIsXG4gICAgICAgIFwieWVhclwiOlwiMjAxNVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6XCJGdWxseSBhdXRvbWF0ZWQgbGluZSBjb25zaXN0IG9mIFNpZGVsIE1hdHJpeCBTQk8zNCwgZmlsbGVyIFNGMTAwLCBMYWJlbGxlciwgb2NtZSBwYWNrZXIsIEdlYm8gQ2VybWV4IHJvYm90aXplZCBwYWxsZXRpemVyLCBzdHJldGNoIHdyYXBwaW5nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJpZFwiOjMsXG4gICAgICAgIFwidGl0bGVcIjpcIlN0cm9uZ3BhY2sgZ3JlZW4gZmllbGQgcHJvamVjdCBcIixcbiAgICAgICAgXCJwcm9qZWN0X25hbWVcIjpcIkNhcmJvbmF0ZWQgYmV2ZXJhZ2UgY29tcGxldGUgbGluZSBQRVQsIENBTiAmIFV0aWxpdHlcIixcbiAgICAgICAgXCJsb2NhdGlvblwiOlwiTmlnZXJpYVwiLFxuICAgICAgICBcInllYXJcIjpcIjIwMTdcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOlwiU0JPIDE4IC80MDUwMCBCUEggd2l0aCB1dGlsaXR5IGluc3RhbGxhdGlvbiAmIGNvbW1pc3Npb25pbmcgc3VwcG9ydCB3aXRoIHJlc291cmNlIG1hbmFnZW1lbnQsIGluc3RhbGxhdGlvbiwgcmFtcCB1cC5VdGlsaXR5IGNvbnNpc3RzIG9mIHdhdGVyIHRyZWF0bWVudCwgQm9zY2ggYm9pbGVyLCBIYW5zYSBjaGlsbGVyLCBDTzIgcGxhbnQgJiBwcm9jZXNzIHBsYW50LlwiLFxuICAgICAgICBcImZlYXR1cmUxXCI6XCJDdXN0b21lciBhY2NlcHRhbmNlIHZhbGlkYXRpb24gd2l0aCBjb3N0LCBzY2hlZHVsZSwgcXVhbGl0eVwiLFxuXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiaWRcIjo0LFxuICAgICAgICBcInRpdGxlXCI6XCJJVEMgcHJvamVjdFwiLFxuICAgICAgICBcInByb2plY3RfbmFtZVwiOlwiQXNlcHRpYyBQRVQgQ29tYmkgQ29tcGxldGUgcHJvamVjdCBcIixcbiAgICAgICAgXCJsb2NhdGlvblwiOlwiSW5kaWFcIixcbiAgICAgICAgXCJ5ZWFyXCI6XCIyMDE4XCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjpcIjMwLDAwMCBicGggbGluZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiaWRcIjo1LFxuICAgICAgICBcInRpdGxlXCI6XCJNZWRpbmEgZ3JlZW4gZmllbGQgcHJvamVjdFwiLFxuICAgICAgICBcInByb2plY3RfbmFtZVwiOlwiQ29tcGxldGVkIGNvbW1pc3Npb25pbmcgYXMgcHJvamVjdCBzdXBwb3J0IGZvciBDb21iaSBtYXRyaXggY29tcGxldGUgd2F0ZXIgbGluZVwiLFxuICAgICAgICBcImxvY2F0aW9uXCI6XCJTYXVkaSBBcmFiaWFcIixcbiAgICAgICAgXCJ5ZWFyXCI6XCIyMDE2XCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjpcIm96b25pemVkIHdhdGVybGluZSAzOTYwMCBib3R0bGVzIC9ob3VyIGNvbXBsZXRlIGxpbmVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImlkXCI6NixcbiAgICAgICAgXCJ0aXRsZVwiOlwiV2VzdCBiYXkgcHJvamVjdFwiLFxuICAgICAgICBcInByb2plY3RfbmFtZVwiOlwiUHJvamVjdCBleGVjdXRpb24gJiBjb21taXNzaW9uaW5nIFwiLFxuICAgICAgICBcImxvY2F0aW9uXCI6XCJRYXRhclwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiaWRcIjo3LFxuICAgICAgICBcInRpdGxlXCI6XCJNYW5haGVsIFByb2plY3RcIixcbiAgICAgICAgXCJwcm9qZWN0X25hbWVcIjpcIlByb2plY3QgZXhlY3V0aW9uICYgY29tbWlzc2lvbmluZyBcIixcbiAgICAgICAgXCJsb2NhdGlvblwiOlwiU2F1ZGkgQXJhYmlhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJpZFwiOjgsXG4gICAgICAgIFwidGl0bGVcIjpcIkF6YmFoIFdhdGVyIE1lZGluYSBQcm9qZWN0XCIsXG4gICAgICAgIFwicHJvamVjdF9uYW1lXCI6XCJQcm9qZWN0IGV4ZWN1dGlvbiAmIGNvbW1pc3Npb25pbmcgXCIsXG4gICAgICAgIFwibG9jYXRpb25cIjpcIlNhdWRpIEFyYWJpYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiaWRcIjo5LFxuICAgICAgICBcInRpdGxlXCI6XCJBbGV4IHNlZWQgUHJvamVjdFwiLFxuICAgICAgICBcInByb2plY3RfbmFtZVwiOlwiUHJvamVjdCBleGVjdXRpb24gJiBjb21taXNzaW9uaW5nIFwiLFxuICAgICAgICBcImxvY2F0aW9uXCI6XCJFZ3lwdFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiaWRcIjoxMCxcbiAgICAgICAgXCJ0aXRsZVwiOlwiU2VyaW9wbGFzdChQJkcpIFByb2plY3RcIixcbiAgICAgICAgXCJwcm9qZWN0X25hbWVcIjpcIlByb2plY3QgZXhlY3V0aW9uICYgY29tbWlzc2lvbmluZyBcIixcbiAgICAgICAgXCJsb2NhdGlvblwiOlwiRWd5cHRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImlkXCI6MTEsXG4gICAgICAgIFwidGl0bGVcIjpcIlB5cmFtaWQgUHJvamVjdFwiLFxuICAgICAgICBcInByb2plY3RfbmFtZVwiOlwiUHJvamVjdCBleGVjdXRpb24gJiBjb21taXNzaW9uaW5nXCIsXG4gICAgICAgIFwibG9jYXRpb25cIjpcIkVneXB0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJpZFwiOjEyLFxuICAgICAgICBcInRpdGxlXCI6XCJGJk4gYmV2ZXJhZ2VzIFByb2plY3RcIixcbiAgICAgICAgXCJwcm9qZWN0X25hbWVcIjpcIlByb2plY3QgZXhlY3V0aW9uICYgY29tbWlzc2lvbmluZ1wiLFxuICAgICAgICBcImxvY2F0aW9uXCI6XCJNYWxheXNpYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiaWRcIjoxMyxcbiAgICAgICAgXCJ0aXRsZVwiOlwiTXVuenVyIFByb2plY3RcIixcbiAgICAgICAgXCJwcm9qZWN0X25hbWVcIjpcIlByb2plY3QgZXhlY3V0aW9uICYgY29tbWlzc2lvbmluZ1wiLFxuICAgICAgICBcImxvY2F0aW9uXCI6XCJUdXJrZXlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImlkXCI6MTQsXG4gICAgICAgIFwidGl0bGVcIjpcIkFobWFkIFRlYSBncmVlbiBmaWVsZCBwcm9qZWN0XCIsXG4gICAgICAgIFwicHJvamVjdF9uYW1lXCI6XCJUZWEgcHJvY2Vzc2luZywgYmxlbmRpbmcgJiBwYWNrYWdpbmcgdW5pdCAzMCBUb25zIHBlciBIb3VyIFwiLFxuICAgICAgICBcImxvY2F0aW9uXCI6XCJSQUssIFVBRVwiLFxuICAgICAgICBcInllYXJcIjpcIkFwcmlsIDIwMTEgLSBKdW5lIDIwMTJcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOlwiUHJvamVjdCAgaW5jbHVkZWQgY29uY2VwdCBkcmF3aW5nLCAgbmVnb3RpYXRpbmcgd2l0aCBSQUtJQSBmcmVlIHpvbmUgZm9yIHRoZSBmYWN0b3J5IHNldHVwLCAgbGF5b3V0LCBuZWdvdGlhdGluZyBVVElDTyBmb3IgcG93ZXIgJiB3YXRlciBjb25uZWN0aW9uLCByZWNydWl0bWVudCBmb3IgZW5naW5lZXJpbmcgLHByb2R1Y3Rpb24sIHFjICYgd2FyZWhvdXNlIHBlcnNvbm5lbCwgc2VsZWN0aW9uIG9mIGVxdWlwbWVudCBiYXNlZCBvbiBsaWZlIHRpbWUgY29zdGluZyBmb3IgdGhlIGNvbXBsZXRlIHBsYW50LCBjb25jZXB0IGRlc2lnbmluZyAmIGltcGxlbWVudGluZyBlbmVyZ3kgZWZmaWNpZW50IGNvc3QgcmVkdWN0aW9uLlwiXG4gICAgfVxuXG5dXG4iLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCduZXh0LXJvdXRlcycpKCk7XG5cbnJvdXRlc1xuICAuYWRkKCcvcHJvamVjdHMvOmFkZHJlc3MnLCAnL3Byb2plY3RzL3Nob3cnKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1haWwtdmFsaWRhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtYWlsanMtY29tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1waG9uZS1udW1iZXItaW5wdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==