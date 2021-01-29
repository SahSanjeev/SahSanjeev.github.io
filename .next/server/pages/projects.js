module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/projects.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes.js */ "./routes.js");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _projectsdetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../projectsdetails */ "./projectsdetails.js");
var _jsxFileName = "D:\\react_demo\\Portfolio-main\\pages\\projects.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Projects() {
  const {
    0: posts,
    1: setPosts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: posts1,
    1: setPosts1
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const render = () => {
    console.log(_projectsdetails__WEBPACK_IMPORTED_MODULE_6__["proj"]);
    const items = _projectsdetails__WEBPACK_IMPORTED_MODULE_6__["proj"].map(address => {
      return {
        image: "/Combi_BD.png",
        header: __jsx(_routes_js__WEBPACK_IMPORTED_MODULE_4__["Link"], {
          route: `/projects/${address.id}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 16
          }
        }, __jsx("a", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 56
          }
        }, address.title)),
        extra: address.project_name,
        meta: address.year ? address.location + ' ~ ' + address.year : address.location //extra:address.feature1?address.feature1 + address.feature2?address.feature2:"":""

      };
    });
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Group, {
      inverted: true,
      style: {
        textTransform: 'uppercase'
      },
      itemsPerRow: 3,
      items: items,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 12
      }
    });
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
    inverted: true,
    textAlign: "center",
    style: {
      minHeight: 620,
      padding: '5em 0em'
    },
    vertical: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h2",
    icon: true,
    textAlign: "center",
    style: {
      paddingBottom: '0em',
      marginTop: '3em'
    },
    inverted: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    name: "industry",
    circular: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Industrial Experience")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    },
    inverted: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 12
    }
  }, "Breaking The Grid, Grabs Your Attention"), __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 12
    }
  }, "Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention."))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
    textAlign: "center",
    style: {
      minHeight: 700,
      padding: '5em 0em'
    },
    vertical: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Step"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Step"], {
    completed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Step"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Step"].Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, "Strategy"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Step"].Description, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, " A vision without a strategy remains an illusion"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Step"], {
    completed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Step"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Step"].Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }, "Design"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Step"].Description, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, "Design is intelligence made visible"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Step"], {
    completed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Step"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Step"].Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  }, "Technology"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Step"].Description, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }, "Everything is designed. Few things are designed well")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    as: "h4",
    className: "header",
    horizontal: true,
    style: {
      margin: '3em 0em',
      textTransform: 'uppercase'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "Projects"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, render()))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Projects);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdHNkZXRhaWxzLmpzIiwid2VicGFjazovLy8uL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtYWlsLXZhbGlkYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtYWlsanMtY29tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXBob25lLW51bWJlci1pbnB1dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiaW5pdCIsIm5hbWUiLCJzZXROYW1lIiwidXNlU3RhdGUiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImVtYWlsIiwic2V0RW1haWwiLCJwaG9uZSIsInNldFBob25lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJmb3JtU3VibWl0dGVkIiwic2V0Rm9ybVN1Ym1pdHRlZCIsImZvcm1TdWJtaXRTdWNjZXNzZnVsIiwic2V0Rm9ybVN1Ym1pdFN1Y2Nlc3NmdWwiLCJ2YWxpZEVtYWlsIiwidmFsaWRhdGVFbWFpbCIsInZhbGlkUGhvbmUiLCJ2YWxpZGF0ZVBob25lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVjZWl2ZXJFbWFpbCIsInRlbXBsYXRlSWQiLCJ1c2VyIiwic2VuZEZlZWRiYWNrIiwic2VuZGVyRW1haWwiLCJlbWFpbGpzIiwic2VuZCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInBhZGRpbmdUb3AiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJFbWFpbFZhbGlkYXRvciIsInZhbGlkYXRlIiwiY29udGVudCIsInBvaW50aW5nIiwiaXNWYWxpZFBob25lTnVtYmVyIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwidGV4dFRyYW5zZm9ybSIsIm1hcmdpbkxlZnQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJIZWFkZXIxIiwiQ29tcG9uZW50IiwiY3VycmVudFBhZ2UiLCJyZW5kZXIiLCJzdGF0ZSIsImxvZyIsIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJQcm9qZWN0cyIsInBvc3RzIiwic2V0UG9zdHMiLCJwb3N0czEiLCJzZXRQb3N0czEiLCJwcm9qIiwiaXRlbXMiLCJtYXAiLCJhZGRyZXNzIiwiaW1hZ2UiLCJoZWFkZXIiLCJpZCIsInRpdGxlIiwiZXh0cmEiLCJwcm9qZWN0X25hbWUiLCJtZXRhIiwieWVhciIsImxvY2F0aW9uIiwibWluSGVpZ2h0IiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbiIsInJvdXRlcyIsInJlcXVpcmUiLCJhZGQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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QVEsbUJBRlo7QUFHSSxrQkFBZSxvQ0FIbkI7QUFJSSxjQUFXO0FBSmYsQ0EvRGUsRUFxRWY7QUFDSSxRQUFLLEVBRFQ7QUFFSSxXQUFRLHlCQUZaO0FBR0ksa0JBQWUsb0NBSG5CO0FBSUksY0FBVztBQUpmLENBckVlLEVBMkVmO0FBQ0ksUUFBSyxFQURUO0FBRUksV0FBUSxpQkFGWjtBQUdJLGtCQUFlLG1DQUhuQjtBQUlJLGNBQVc7QUFKZixDQTNFZSxFQWlGZjtBQUNJLFFBQUssRUFEVDtBQUVJLFdBQVEsdUJBRlo7QUFHSSxrQkFBZSxtQ0FIbkI7QUFJSSxjQUFXO0FBSmYsQ0FqRmUsRUF1RmY7QUFDSSxRQUFLLEVBRFQ7QUFFSSxXQUFRLGdCQUZaO0FBR0ksa0JBQWUsbUNBSG5CO0FBSUksY0FBVztBQUpmLENBdkZlLEVBNkZmO0FBQ0ksUUFBSyxFQURUO0FBRUksV0FBUSwrQkFGWjtBQUdJLGtCQUFlLDZEQUhuQjtBQUlJLGNBQVcsVUFKZjtBQUtJLFVBQU8sd0JBTFg7QUFNSSxpQkFBYztBQU5sQixDQTdGZSxDQUFaLEM7Ozs7Ozs7Ozs7O0FDQVAsTUFBTWdCLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFQLEVBQWY7O0FBRUFELE1BQU0sQ0FDSEUsR0FESCxDQUNPLG9CQURQLEVBQzZCLGdCQUQ3QjtBQUlBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLE1BQWpCLEM7Ozs7Ozs7Ozs7O0FDTkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvcHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Byb2plY3RzLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBEaXZpZGVyLFxuICBHcmlkLFxuICBIZWFkZXIsXG4gIEljb24sXG4gIExpc3QsXG4gIE1lbnUsXG4gIFNlZ21lbnQsXG4gIFNpZGViYXIsXG4gIFZpc2liaWxpdHksXG4gIERyb3Bkb3duLFxuICBGb3JtLFxuICBNZXNzYWdlXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0eyBpbml0IH0gZnJvbSAnZW1haWxqcy1jb20nO1xuaW1wb3J0IGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nO1xuaW1wb3J0IEVtYWlsVmFsaWRhdG9yIGZyb20gJ2VtYWlsLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBpc1ZhbGlkUGhvbmVOdW1iZXIgfSBmcm9tICdyZWFjdC1waG9uZS1udW1iZXItaW5wdXQnXG5cbmNvbnN0IEZvb3RlciA9ICgpID0+e1xuICBpbml0KFwidXNlcl9mVU11bkJGMEc1OU1ObjloVE9lUHBcIik7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZm9ybVN1Ym1pdHRlZCwgc2V0Rm9ybVN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmb3JtU3VibWl0U3VjY2Vzc2Z1bCwgc2V0Rm9ybVN1Ym1pdFN1Y2Nlc3NmdWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdmFsaWRFbWFpbCwgdmFsaWRhdGVFbWFpbF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3ZhbGlkUGhvbmUsIHZhbGlkYXRlUGhvbmVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCByZWNlaXZlckVtYWlsID0gXCJoYXJzaGJhbnNhbDMyMDAwQGdtYWlsLmNvbVwiO1xuICBjb25zdCB0ZW1wbGF0ZUlkID0gXCJ0ZW1wbGF0ZV9jeHJidmFnXCI7XG4gIGNvbnN0IHVzZXIgPSBcInVzZXJfZlVNdW5CRjBHNTlNTm45aFRPZVBwXCI7XG5cbiAgICBzZW5kRmVlZGJhY2soe1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIGVtYWlsLFxuICAgICAgcmVjZWl2ZXJFbWFpbCxcbiAgICAgIG5hbWUsXG4gICAgICBtZXNzYWdlLFxuICAgICAgdXNlcixcbiAgICB9KVxuXG4gICAgc2V0Rm9ybVN1Ym1pdHRlZCh0cnVlKVxuICB9XG5cbiAgY29uc3Qgc2VuZEZlZWRiYWNrID0gKHtcbiAgICB0ZW1wbGF0ZUlkLFxuICAgIHNlbmRlckVtYWlsLFxuICAgIHJlY2VpdmVyRW1haWwsXG4gICAgbmFtZSxcbiAgICBtZXNzYWdlLFxuICAgIHVzZXIsXG4gIH0pID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yTWVzc2FnZSgnJyk7XG4gICAgZW1haWxqc1xuICAgICAgLnNlbmQoXG4gICAgICAgIFwiZGVmYXVsdF9zZXJ2aWNlXCIsXG4gICAgICAgIHRlbXBsYXRlSWQsXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIHJlY2VpdmVyRW1haWwsXG4gICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfSxcbiAgICAgICAgdXNlclxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHNldEZvcm1TdWJtaXRTdWNjZXNzZnVsKHRydWUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtjb25zb2xlLmVycm9yKFwiRXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgfSlcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldE5hbWUoJycpO1xuICAgICAgICBzZXRQaG9uZSgnJyk7XG4gICAgICAgIHNldE1lc3NhZ2UoJycpO1xuICAgICAgICBzZXRFbWFpbCgnJylcbiAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgfVxuXG4gIHJldHVybihcbiAgICA8U2VnbWVudCBpbnZlcnRlZCB2ZXJ0aWNhbCBzdHlsZT17eyBwYWRkaW5nVG9wOiAnNWVtJywgcGFkZGluZ1RvcDogJzJlbSd9fSA+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8R3JpZCBkaXZpZGVkIGludmVydGVkIHN0YWNrYWJsZT5cbiAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezl9ID5cbiAgICAgICAgICAgICAgPEhlYWRlciBpbnZlcnRlZCBhcz0naDEnIGNvbnRlbnQ9J0dldCBJbiBUb3VjaCcgLz5cbiAgICAgICAgICAgICAgPEZvcm0gaW52ZXJ0ZWQgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gZXJyb3I9eyEhZXJyb3JNZXNzYWdlfSA+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGZsdWlkIGxhYmVsPSdZb3VyIE5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NhbmplZXYgU2FoJ1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZSA9PiB7c2V0TmFtZShlLnRhcmdldC52YWx1ZSl9fVxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9IC8+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGZsdWlkIGxhYmVsPSdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nc2FuamVldi5zYWhAaWNsb3VkLmNvbSdcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRW1haWwoRW1haWxWYWxpZGF0b3IudmFsaWRhdGUoZS50YXJnZXQudmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3ZhbGlkRW1haWwgPyBmYWxzZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGluZzogJ2JlbG93J1xuICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH0gLz5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgZmx1aWQgbGFiZWw9J1Bob25lJ1xuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScrOTEgeHh4LXh4eC14eHh4J1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBob25lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlUGhvbmUoaXNWYWxpZFBob25lTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSA9PT0gdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dmFsaWRQaG9uZSA/IGZhbHNlIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgUGhvbmUgTnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRpbmc6ICdiZWxvdydcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bob25lfSAvPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uVGV4dEFyZWFcbiAgICAgICAgICAgICAgICAgICAgICBmbHVpZCBsYWJlbD0nTWVzc2FnZSdcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nV3JpdGUgYSBNZXNzYWdlLi4uJ1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX19XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX0gLz5cbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e2Vycm9yTWVzc2FnZX0gLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2xvYWRpbmd9IHR5cGU9J3N1Ym1pdCcgZGlzYWJsZWQgPSB7IXZhbGlkRW1haWwgfHwgIXZhbGlkUGhvbmV9ID5TZW5kIE1lc3NhZ2U8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICB7c3VjY2Vzcz9cIk1lc3NhZ2UgU2VudFwiOlwiXCJ9XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9IGZsb2F0ZWQ9J3JpZ2h0JyBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzNlbSAnIH19PlxuICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoMScgaW52ZXJ0ZWQ+XG4gICAgICAgICAgICAgICAgTXkgQ29udGFjdCBEZXRhaWxzXG4gICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICA8TGlzdCBzaXplPSdiaWcnIHN0eWxlPXt7IHBhZGRpbmc6ICcxZW0gMWVtJyAsfX0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT0nbWFya2VyJyAvPlxuICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5OeWF0aSBJcmlzLCBQdW5lLCBNYWhhcmFzaHRyYSA0MTEwMjg8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPSdtYWlsJyAvPlxuICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nbWFpbHRvOnNhbmplZXYuc2FoQGljbG91ZC5jb20nPnNhbmplZXYuc2FoQGljbG91ZC5jb208L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPSdsaW5rZWRpbicgLz5cbiAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zYW5qZWV2MTAnPlNhbmplZXYgU2FoPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgPERpdmlkZXJcbiAgICAgICAgICAgICAgICBhcz0naDQnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoZWFkZXInXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgIGludmVydGVkXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnM2VtICcsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVhY2ggb3V0XG4gICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICAgIDxTZWdtZW50IGludmVydGVkIHRleHRBbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2FuamVldjEwJz48SWNvbiBuYW1lPSdsaW5rZWRpbicgc2l6ZT0nYmlnJyBzdHlsZT17e21hcmdpbkxlZnQ6ICcwLjVlbScgfX0gLz48L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nbWFpbHRvOnNhbmplZXYuc2FoQGljbG91ZC5jb20nPjxJY29uIG5hbWU9J21haWwnIHNpemU9J2JpZycgIHN0eWxlPXt7bWFyZ2luTGVmdDogJzAuNWVtJ319IC8+PC9hPlxuICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIGFzPSdoMidcbiAgICAgICAgICBjb250ZW50PSdDb3B5cmlnaHQgwqkgMjAyMSBBbGwgcmlnaHRzIHJlc2VydmVkJ1xuICAgICAgICAgIGludmVydGVkXG4gICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOicxZW0nLFxuICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICAnMi4yZW0nLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L1NlZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCAgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcy5qcydcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBEaXZpZGVyLFxuICBHcmlkLFxuICBIZWFkZXIsXG4gIEljb24sXG4gIEltYWdlLFxuICBMaXN0LFxuICBNZW51LFxuICBTZWdtZW50LFxuICBTaWRlYmFyLFxuICBWaXNpYmlsaXR5LFxuICBEcm9wZG93bixcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cblxuY2xhc3MgSGVhZGVyMSBleHRlbmRzIENvbXBvbmVudHtcblxuICBzdGF0ZSA9IHtcbiAgICBjdXJyZW50UGFnZTonJ1xuICB9XG5cblxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHsgY3VycmVudFBhZ2UgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UGFnZSk7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlZ21lbnRcbiAgICAgICAgICBpbnZlcnRlZFxuICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICcxZW0gMGVtJyB9fVxuICAgICAgICAgIHZlcnRpY2FsXG4gICAgICAgID5cbiAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgaW52ZXJ0ZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIHBvaW50aW5nPSdmYWxzZSdcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5PSdmYWxzZSdcbiAgICAgICAgICAgICAgc2l6ZT0nbGFyZ2UnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPScvJz5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtICBuYW1lPSdIb21lJyBhY3RpdmU9e2N1cnJlbnRQYWdlID09PSAnSG9tZSd9ID5cbiAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayByb3V0ZT0nL3Byb2plY3RzJyA+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSAgbmFtZT0nUHJvamVjdHMnICBhY3RpdmU9e2N1cnJlbnRQYWdlID09PSAnUHJvamVjdHMnfSAgID5cbiAgICAgICAgICAgICAgICAgIFByb2plY3RzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgcm91dGU9Jy9jb250YWN0JyA+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSAgbmFtZT0nQ29udGFjdCcgYWN0aXZlPXtjdXJyZW50UGFnZSA9PT0gJ0NvbnRhY3QnfSA+XG4gICAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBwb3NpdGlvbj0ncmlnaHQnPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHA6Ly93d3cuc2VtYW50aWMtdWkuY29tJz48SWNvbiAgbmFtZT0nZ2l0aHViJyBzaXplPSdiaWcnIHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcwLjJlbScgfX0vPjwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwOi8vd3d3LnNlbWFudGljLXVpLmNvbSc+PEljb24gbmFtZT0nbGlua2VkaW4nIHNpemU9J2JpZycgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzAuMmVtJyxtYXJnaW5MZWZ0OiAnMC41ZW0nIH19IC8+PC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J21haWx0bzpqYWNrQHNlbWFudGljLXVpLmNvbSc+PEljb24gbmFtZT0nbWFpbCcgc2l6ZT0nYmlnJyBzdHlsZT17eyBwYWRkaW5nVG9wOiAnMC4yZW0nICxtYXJnaW5MZWZ0OiAnMC41ZW0nfX0gLz48L2E+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICA8L1NlZ21lbnQ+XG4gICAgICA8L2Rpdj5cbiAgKTtcbn1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyMTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0eyBpbml0IH0gZnJvbSAnZW1haWxqcy1jb20nO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgaW5pdChcInVzZXJfZlVNdW5CRjBHNTlNTm45aFRPZVBwXCIpO1xuICByZXR1cm4gKFxuICA8Q29udGFpbmVyIGZsdWlkPlxuICAgIDxIZWFkPlxuICAgICAgPGxpbmtcbiAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMi4xMi9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgICAvPlxuICAgICA8L0hlYWQ+XG4gICAgIDxIZWFkZXIvPlxuICAgICAgPGRpdj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi9yb3V0ZXMuanMnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIERpdmlkZXIsXG4gIEdyaWQsXG4gIEhlYWRlcixcbiAgSWNvbixcbiAgSW1hZ2UsXG4gIExpc3QsXG4gIE1lbnUsXG4gIFNlZ21lbnQsXG4gIFNpZGViYXIsXG4gIFZpc2liaWxpdHksXG4gIERyb3Bkb3duLFxuICBTdGVwLFxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmltcG9ydHsgcHJvaiB9ZnJvbSAnLi4vcHJvamVjdHNkZXRhaWxzJztcblxuZnVuY3Rpb24gUHJvamVjdHMoKSB7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcG9zdHMxLHNldFBvc3RzMV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvailcbiAgICBjb25zdCBpdGVtcyA9IHByb2oubWFwKGFkZHJlc3MgPT4ge1xuICAgICAgcmV0dXJue1xuICAgICAgICBpbWFnZTogXCIvQ29tYmlfQkQucG5nXCIsXG4gICAgICAgIGhlYWRlcjo8TGluayByb3V0ZT17YC9wcm9qZWN0cy8ke2FkZHJlc3MuaWR9YH0+PGE+e2FkZHJlc3MudGl0bGV9PC9hPjwvTGluaz4sXG4gICAgICAgIGV4dHJhOiBhZGRyZXNzLnByb2plY3RfbmFtZSxcbiAgICAgICAgbWV0YTphZGRyZXNzLnllYXI/YWRkcmVzcy5sb2NhdGlvbiArICcgfiAnICsgYWRkcmVzcy55ZWFyOmFkZHJlc3MubG9jYXRpb24sXG4gICAgICAgIC8vZXh0cmE6YWRkcmVzcy5mZWF0dXJlMT9hZGRyZXNzLmZlYXR1cmUxICsgYWRkcmVzcy5mZWF0dXJlMj9hZGRyZXNzLmZlYXR1cmUyOlwiXCI6XCJcIlxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGludmVydGVkICBzdHlsZT17e3RleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnIH19IGl0ZW1zUGVyUm93PXszfSBpdGVtcz17aXRlbXN9IC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFNlZ21lbnQgaW52ZXJ0ZWRcbiAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXG4gICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogNjIwLCBwYWRkaW5nOiAnNWVtIDBlbScgfX1cbiAgICAgICAgdmVydGljYWxcbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8SGVhZGVyIGFzPSdoMicgaWNvbiB0ZXh0QWxpZ249J2NlbnRlcicgc3R5bGU9e3sgIHBhZGRpbmdCb3R0b206ICcwZW0nLG1hcmdpblRvcDogICczZW0nLCB9fSBpbnZlcnRlZD5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9J2luZHVzdHJ5JyBjaXJjdWxhciAgIC8+XG4gICAgICAgICAgICA8SGVhZGVyLkNvbnRlbnQ+SW5kdXN0cmlhbCBFeHBlcmllbmNlPC9IZWFkZXIuQ29udGVudD5cbiAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgPEhlYWRlciBhcz0naDMnIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fSBpbnZlcnRlZD5cbiAgICAgICAgICAgICBCcmVha2luZyBUaGUgR3JpZCwgR3JhYnMgWW91ciBBdHRlbnRpb25cbiAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cbiAgICAgICAgICAgICBJbnN0ZWFkIG9mIGZvY3VzaW5nIG9uIGNvbnRlbnQgY3JlYXRpb24gYW5kIGhhcmQgd29yaywgd2UgaGF2ZSBsZWFybmVkIGhvdyB0byBtYXN0ZXIgdGhlXG4gICAgICAgICAgICAgYXJ0IG9mIGRvaW5nIG5vdGhpbmcgYnkgcHJvdmlkaW5nIG1hc3NpdmUgYW1vdW50cyBvZiB3aGl0ZXNwYWNlIGFuZCBnZW5lcmljIGNvbnRlbnQgdGhhdFxuICAgICAgICAgICAgIGNhbiBzZWVtIG1hc3NpdmUsIG1vbm9saXRoaWMgYW5kIHdvcnRoIHlvdXIgYXR0ZW50aW9uLlxuICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9TZWdtZW50PlxuICAgICAgPFNlZ21lbnRcbiAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXG4gICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogNzAwLCBwYWRkaW5nOiAnNWVtIDBlbScgfX1cbiAgICAgICAgdmVydGljYWxcbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U3RlcC5Hcm91cCA+XG4gICAgICAgICAgICAgIDxTdGVwIGNvbXBsZXRlZD5cbiAgICAgICAgICAgICAgICA8U3RlcC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgPFN0ZXAuVGl0bGU+U3RyYXRlZ3k8L1N0ZXAuVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8U3RlcC5EZXNjcmlwdGlvbj4gQSB2aXNpb24gd2l0aG91dCBhIHN0cmF0ZWd5IHJlbWFpbnMgYW4gaWxsdXNpb248L1N0ZXAuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgPC9TdGVwLkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvU3RlcD5cblxuICAgICAgICAgICAgICA8U3RlcCBjb21wbGV0ZWQ+XG4gICAgICAgICAgICAgICAgPFN0ZXAuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxTdGVwLlRpdGxlPkRlc2lnbjwvU3RlcC5UaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxTdGVwLkRlc2NyaXB0aW9uPkRlc2lnbiBpcyBpbnRlbGxpZ2VuY2UgbWFkZSB2aXNpYmxlPC9TdGVwLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvU3RlcC5Db250ZW50PlxuICAgICAgICAgICAgICA8L1N0ZXA+XG5cbiAgICAgICAgICAgICAgPFN0ZXAgY29tcGxldGVkPlxuICAgICAgICAgICAgICAgIDxTdGVwLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8U3RlcC5UaXRsZT5UZWNobm9sb2d5PC9TdGVwLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgPFN0ZXAuRGVzY3JpcHRpb24+RXZlcnl0aGluZyBpcyBkZXNpZ25lZC4gRmV3IHRoaW5ncyBhcmUgZGVzaWduZWQgd2VsbDwvU3RlcC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICA8L1N0ZXAuQ29udGVudD5cbiAgICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICAgPC9TdGVwLkdyb3VwPlxuICAgICAgICAgIDxEaXZpZGVyXG4gICAgICAgICAgICAgIGFzPSdoNCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoZWFkZXInXG4gICAgICAgICAgICAgIGhvcml6b250YWxcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnM2VtIDBlbScsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFByb2plY3RzXG4gICAgICAgICAgPC9EaXZpZGVyPlxuICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlbmRlcigpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9TZWdtZW50PlxuICAgICAgPEZvb3Rlci8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIiwiZXhwb3J0IGNvbnN0IHByb2ogPVtcbiAgICB7XG4gICAgICAgIFwiaWRcIjoxLFxuICAgICAgICBcInRpdGxlXCI6XCJPbGFtIFJhbm9uYSBHcmVlbiBmaWVsZCBwcm9qZWN0XCIsXG4gICAgICAgIFwicHJvamVjdF9uYW1lXCI6XCJBc2VwdGljIGNvbXBsZXRlIFBFVCBsaW5lIGZvciBkcmlua2luZyB5b2d1cnQgJiBhcHBsZSBqdWljZVwiLFxuICAgICAgICBcImxvY2F0aW9uXCI6XCJOaWdlcmlhXCIsXG4gICAgICAgIFwieWVhclwiOlwiMjAxN1wiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6XCJTQk8gU2lkZWwgMTAgLzE4MDAwIEJQSCBibG93LWZpbGwtY2FwIHNvbHV0aW9uOiB0aGUgQ29tYmkgUHJlZGlz4oSiL0NhcGRpc+KEoiBGTWEgZGVjb250YW1pbmF0aW9uIHN5c3RlbSBjb21wbGV0ZSBsaW5lIHJlc291cmNlIG1hbmFnZW1lbnQsIGluc3RhbGxhdGlvbiwgcmFtcCB1cFwiLFxuICAgICAgICBcImZlYXR1cmUxXCI6XCJSZWR1Y2VkIGVsZWN0cmljYWwgY29uc3VtcHRpb24gYnkgdXAgdG8gNDUlIHdpdGggdGhlIEVjb3ZlblwiLFxuICAgICAgICBcImZlYXR1cmUyXCI6XCJSZWR1Y2VkIGFubnVhbCBvcGVyYXRpbmcgY29zdHMgYnkgMzAlIGNvbXBhcmVkIHdpdGggdHJhZGl0aW9uYWwgZHJ5IGJvdHRsZSBkZWNvbnRhbWluYXRpb24gUmVkdWNlZCBQRVQgY29zdHMgdGhyb3VnaCBsaWdodCB3ZWlnaHRpbmcuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJpZFwiOjIsXG4gICAgICAgIFwidGl0bGVcIjpcIkhBTkEgR3JlZW4gZmllbGQgcHJvamVjdFwiLFxuICAgICAgICBcInByb2plY3RfbmFtZVwiOlwiaGlnaC1zcGVlZCBhdXRvbWF0ZWQgb3pvbml6ZWQgd2F0ZXIgbGluZSA3ODIwMCBCUEggXCIsXG4gICAgICAgIFwibG9jYXRpb25cIjpcIlNhdWRpIEFyYWJpYVwiLFxuICAgICAgICBcInllYXJcIjpcIjIwMTVcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOlwiRnVsbHkgYXV0b21hdGVkIGxpbmUgY29uc2lzdCBvZiBTaWRlbCBNYXRyaXggU0JPMzQsIGZpbGxlciBTRjEwMCwgTGFiZWxsZXIsIG9jbWUgcGFja2VyLCBHZWJvIENlcm1leCByb2JvdGl6ZWQgcGFsbGV0aXplciwgc3RyZXRjaCB3cmFwcGluZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiaWRcIjozLFxuICAgICAgICBcInRpdGxlXCI6XCJTdHJvbmdwYWNrIGdyZWVuIGZpZWxkIHByb2plY3QgXCIsXG4gICAgICAgIFwicHJvamVjdF9uYW1lXCI6XCJDYXJib25hdGVkIGJldmVyYWdlIGNvbXBsZXRlIGxpbmUgUEVULCBDQU4gJiBVdGlsaXR5XCIsXG4gICAgICAgIFwibG9jYXRpb25cIjpcIk5pZ2VyaWFcIixcbiAgICAgICAgXCJ5ZWFyXCI6XCIyMDE3XCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjpcIlNCTyAxOCAvNDA1MDAgQlBIIHdpdGggdXRpbGl0eSBpbnN0YWxsYXRpb24gJiBjb21taXNzaW9uaW5nIHN1cHBvcnQgd2l0aCByZXNvdXJjZSBtYW5hZ2VtZW50LCBpbnN0YWxsYXRpb24sIHJhbXAgdXAuVXRpbGl0eSBjb25zaXN0cyBvZiB3YXRlciB0cmVhdG1lbnQsIEJvc2NoIGJvaWxlciwgSGFuc2EgY2hpbGxlciwgQ08yIHBsYW50ICYgcHJvY2VzcyBwbGFudC5cIixcbiAgICAgICAgXCJmZWF0dXJlMVwiOlwiQ3VzdG9tZXIgYWNjZXB0YW5jZSB2YWxpZGF0aW9uIHdpdGggY29zdCwgc2NoZWR1bGUsIHF1YWxpdHlcIixcblxuICAgIH0sXG4gICAge1xuICAgICAgICBcImlkXCI6NCxcbiAgICAgICAgXCJ0aXRsZVwiOlwiSVRDIHByb2plY3RcIixcbiAgICAgICAgXCJwcm9qZWN0X25hbWVcIjpcIkFzZXB0aWMgUEVUIENvbWJpIENvbXBsZXRlIHByb2plY3QgXCIsXG4gICAgICAgIFwibG9jYXRpb25cIjpcIkluZGlhXCIsXG4gICAgICAgIFwieWVhclwiOlwiMjAxOFwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6XCIzMCwwMDAgYnBoIGxpbmVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImlkXCI6NSxcbiAgICAgICAgXCJ0aXRsZVwiOlwiTWVkaW5hIGdyZWVuIGZpZWxkIHByb2plY3RcIixcbiAgICAgICAgXCJwcm9qZWN0X25hbWVcIjpcIkNvbXBsZXRlZCBjb21taXNzaW9uaW5nIGFzIHByb2plY3Qgc3VwcG9ydCBmb3IgQ29tYmkgbWF0cml4IGNvbXBsZXRlIHdhdGVyIGxpbmVcIixcbiAgICAgICAgXCJsb2NhdGlvblwiOlwiU2F1ZGkgQXJhYmlhXCIsXG4gICAgICAgIFwieWVhclwiOlwiMjAxNlwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6XCJvem9uaXplZCB3YXRlcmxpbmUgMzk2MDAgYm90dGxlcyAvaG91ciBjb21wbGV0ZSBsaW5lXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJpZFwiOjYsXG4gICAgICAgIFwidGl0bGVcIjpcIldlc3QgYmF5IHByb2plY3RcIixcbiAgICAgICAgXCJwcm9qZWN0X25hbWVcIjpcIlByb2plY3QgZXhlY3V0aW9uICYgY29tbWlzc2lvbmluZyBcIixcbiAgICAgICAgXCJsb2NhdGlvblwiOlwiUWF0YXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImlkXCI6NyxcbiAgICAgICAgXCJ0aXRsZVwiOlwiTWFuYWhlbCBQcm9qZWN0XCIsXG4gICAgICAgIFwicHJvamVjdF9uYW1lXCI6XCJQcm9qZWN0IGV4ZWN1dGlvbiAmIGNvbW1pc3Npb25pbmcgXCIsXG4gICAgICAgIFwibG9jYXRpb25cIjpcIlNhdWRpIEFyYWJpYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiaWRcIjo4LFxuICAgICAgICBcInRpdGxlXCI6XCJBemJhaCBXYXRlciBNZWRpbmEgUHJvamVjdFwiLFxuICAgICAgICBcInByb2plY3RfbmFtZVwiOlwiUHJvamVjdCBleGVjdXRpb24gJiBjb21taXNzaW9uaW5nIFwiLFxuICAgICAgICBcImxvY2F0aW9uXCI6XCJTYXVkaSBBcmFiaWFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImlkXCI6OSxcbiAgICAgICAgXCJ0aXRsZVwiOlwiQWxleCBzZWVkIFByb2plY3RcIixcbiAgICAgICAgXCJwcm9qZWN0X25hbWVcIjpcIlByb2plY3QgZXhlY3V0aW9uICYgY29tbWlzc2lvbmluZyBcIixcbiAgICAgICAgXCJsb2NhdGlvblwiOlwiRWd5cHRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImlkXCI6MTAsXG4gICAgICAgIFwidGl0bGVcIjpcIlNlcmlvcGxhc3QoUCZHKSBQcm9qZWN0XCIsXG4gICAgICAgIFwicHJvamVjdF9uYW1lXCI6XCJQcm9qZWN0IGV4ZWN1dGlvbiAmIGNvbW1pc3Npb25pbmcgXCIsXG4gICAgICAgIFwibG9jYXRpb25cIjpcIkVneXB0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJpZFwiOjExLFxuICAgICAgICBcInRpdGxlXCI6XCJQeXJhbWlkIFByb2plY3RcIixcbiAgICAgICAgXCJwcm9qZWN0X25hbWVcIjpcIlByb2plY3QgZXhlY3V0aW9uICYgY29tbWlzc2lvbmluZ1wiLFxuICAgICAgICBcImxvY2F0aW9uXCI6XCJFZ3lwdFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiaWRcIjoxMixcbiAgICAgICAgXCJ0aXRsZVwiOlwiRiZOIGJldmVyYWdlcyBQcm9qZWN0XCIsXG4gICAgICAgIFwicHJvamVjdF9uYW1lXCI6XCJQcm9qZWN0IGV4ZWN1dGlvbiAmIGNvbW1pc3Npb25pbmdcIixcbiAgICAgICAgXCJsb2NhdGlvblwiOlwiTWFsYXlzaWFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImlkXCI6MTMsXG4gICAgICAgIFwidGl0bGVcIjpcIk11bnp1ciBQcm9qZWN0XCIsXG4gICAgICAgIFwicHJvamVjdF9uYW1lXCI6XCJQcm9qZWN0IGV4ZWN1dGlvbiAmIGNvbW1pc3Npb25pbmdcIixcbiAgICAgICAgXCJsb2NhdGlvblwiOlwiVHVya2V5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJpZFwiOjE0LFxuICAgICAgICBcInRpdGxlXCI6XCJBaG1hZCBUZWEgZ3JlZW4gZmllbGQgcHJvamVjdFwiLFxuICAgICAgICBcInByb2plY3RfbmFtZVwiOlwiVGVhIHByb2Nlc3NpbmcsIGJsZW5kaW5nICYgcGFja2FnaW5nIHVuaXQgMzAgVG9ucyBwZXIgSG91ciBcIixcbiAgICAgICAgXCJsb2NhdGlvblwiOlwiUkFLLCBVQUVcIixcbiAgICAgICAgXCJ5ZWFyXCI6XCJBcHJpbCAyMDExIC0gSnVuZSAyMDEyXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjpcIlByb2plY3QgIGluY2x1ZGVkIGNvbmNlcHQgZHJhd2luZywgIG5lZ290aWF0aW5nIHdpdGggUkFLSUEgZnJlZSB6b25lIGZvciB0aGUgZmFjdG9yeSBzZXR1cCwgIGxheW91dCwgbmVnb3RpYXRpbmcgVVRJQ08gZm9yIHBvd2VyICYgd2F0ZXIgY29ubmVjdGlvbiwgcmVjcnVpdG1lbnQgZm9yIGVuZ2luZWVyaW5nICxwcm9kdWN0aW9uLCBxYyAmIHdhcmVob3VzZSBwZXJzb25uZWwsIHNlbGVjdGlvbiBvZiBlcXVpcG1lbnQgYmFzZWQgb24gbGlmZSB0aW1lIGNvc3RpbmcgZm9yIHRoZSBjb21wbGV0ZSBwbGFudCwgY29uY2VwdCBkZXNpZ25pbmcgJiBpbXBsZW1lbnRpbmcgZW5lcmd5IGVmZmljaWVudCBjb3N0IHJlZHVjdGlvbi5cIlxuICAgIH1cblxuXVxuIiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnbmV4dC1yb3V0ZXMnKSgpO1xuXG5yb3V0ZXNcbiAgLmFkZCgnL3Byb2plY3RzLzphZGRyZXNzJywgJy9wcm9qZWN0cy9zaG93JylcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtYWlsLXZhbGlkYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbWFpbGpzLWNvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcGhvbmUtbnVtYmVyLWlucHV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=