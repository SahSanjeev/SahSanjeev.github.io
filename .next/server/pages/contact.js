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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contact.js");
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
    src: "/abc.png",
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

/***/ "./components/Education.js":
/*!*********************************!*\
  !*** ./components/Education.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\react_demo\\Portfolio-main\\components\\Education.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Education = () => {
  var tags = [{
    tag1: "PMP"
  }, {
    tag1: "PET ASEPTIC"
  }, {
    tag1: "HSE"
  }, {
    tag1: "PACKAGING "
  }, {
    tag1: "SOAP,DETERGENT PROCESS PACKAGING"
  }, {
    tag1: "Six Sigma and Lean Management".toUpperCase()
  }, {
    tag1: "PET,CAN,GLASS LINE FOR CARBONATED BEVERAGE"
  }, {
    tag1: "PET COMPLETE LINE INSTALLATION COMMISSIONING"
  }, {
    tag1: "PROJECT EXECUTION"
  }, {
    tag1: "TEA PROCESS PACKAGING"
  }, {
    tag1: "FMCG BEVERAGE"
  }, {
    tag1: "EDIBLE LINE PROCESS"
  }, {
    tag1: "PACKAGING LINE"
  }, {
    tag1: "PLANT UTILITY"
  }, {
    tag1: "SPARE PARTS"
  }, {
    tag1: "SUPPLY CHAIN"
  }];
  var tags1 = [{
    tag2: "SAP B1"
  }, {
    tag2: "CMMS"
  }, {
    tag2: 'BMS'
  }, {
    tag2: 'PM Tools'
  }, {
    tag2: 'Engineering Solution System'
  }, {
    tag2: 'Microsoft Office Tools'
  }, {
    tag2: 'Remote Access Tool'
  }, {
    tag2: 'MS Project'
  }, {
    tag2: 'EIT Efficiency Improvement Tool'
  }, {
    tag2: 'WMS Warehouse Management System-span System'
  }, {
    tag2: 'FMS Field Management System Planning Software'
  }, {
    tag2: 'SINCRO Engineering Solution System'
  }];
  var tags2 = [{
    tag2: 'English'
  }, {
    tag2: 'Hindi'
  }, {
    tag2: 'Arabic'
  }, {
    tag2: 'Marathi'
  }];

  const render = () => {
    const items = tags.map(address => {
      return {
        description: address.tag1,
        fluid: true
      };
    });
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Group, {
      style: {
        fontSize: '0.77em',
        fontWeight: 'bold'
      },
      fluid: true,
      itemsPerRow: 4,
      items: items,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 12
      }
    });
  };

  const render1 = () => {
    const items = tags1.map(address => {
      return {
        description: address.tag2,
        fluid: true
      };
    });
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Group, {
      style: {
        fontSize: '0.77em',
        fontWeight: 'bold'
      },
      fluid: true,
      itemsPerRow: 4,
      items: items,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 12
      }
    });
  };

  const render2 = () => {
    const items = tags2.map(address => {
      return {
        description: address.tag2,
        fluid: true
      };
    });
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Group, {
      style: {
        fontSize: '0.77em',
        fontWeight: 'bold'
      },
      fluid: true,
      itemsPerRow: 4,
      items: items,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 12
      }
    });
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    style: {
      padding: '8em 0em'
    },
    vertical: true,
    textAlign: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h1",
    style: {
      fontSize: '3em',
      marginBottom: '2em',
      fontWeight: 'bold'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, "My Resume"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    as: "h4",
    className: "header",
    horizontal: true,
    style: {
      margin: '3em 0em',
      textTransform: 'uppercase'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Work Experience"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    stackable: true,
    verticalAlign: "middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    vertical: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "certificate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 29
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Event, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 16
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 18
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "pencil",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 20
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 18
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Date, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 20
    }
  }, "October 2014 - present"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Summary, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 20
    }
  }, "SIDEL"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Extra, {
    text: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 20
    }
  }, "Project Manager Services Asia Middle East Africa zone", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }), "Dubai, UAE & Pune India")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 14
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Event, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "pencil",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 19
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Date, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 19
    }
  }, "April 2011 - Sep 2014"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Summary, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 19
    }
  }, "Ahmad Tea"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Extra, {
    text: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }, "Plant Manager", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 20
    }
  }), "RAK Free Zone, UAE")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Event, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "pencil",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 19
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Date, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 19
    }
  }, "Sep 2008 - Mar 2011"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Summary, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 19
    }
  }, "Aujan Coca-Cola Beverages Company"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Extra, {
    text: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 19
    }
  }, "Packaging & Process Manager", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 20
    }
  }), "Dubai UAE"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    floated: "right",
    width: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Event, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 18
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 20
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "pencil",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 22
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 20
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Date, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 22
    }
  }, "Sep 2001 - Jul 2008"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Summary, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 22
    }
  }, "Arma Food Industries Arma Soap and Detergents Group"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Extra, {
    text: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 22
    }
  }, "Chief Engineer", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 23
    }
  }), "Cairo Egypt")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 16
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Event, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "pencil",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Date, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 21
    }
  }, "Dec 1995 - Aug 2001"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Summary, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 21
    }
  }, "Hindustan Coca-Cola Beverages Pvt Ltd"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Extra, {
    text: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 21
    }
  }, "Maintenance Manager", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 22
    }
  }), "Pirungut Pune & GOBLEJ Ahmedabad India")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Event, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "pencil",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 21
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Date, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 21
    }
  }, "Jul 1993 - Nov 1995"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Summary, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 21
    }
  }, "Hindustan gas & Industries"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Extra, {
    text: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 21
    }
  }, "Maintenance Engineer", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 22
    }
  }), "Halol Gujurat India")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Event, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "pencil",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 21
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Date, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 21
    }
  }, "Jun 1991 - Jun 1993"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Summary, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 21
    }
  }, "Electrotherm India Limited"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Extra, {
    text: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 21
    }
  }, "Servicing & commissioning engineer", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 22
    }
  }), "GIDC VATVA Ahmedabad India"))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    as: "h4",
    className: "header",
    horizontal: true,
    style: {
      marginTop: '6em',
      marginBottom: '3em',
      textTransform: 'uppercase'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 9
    }
  }, "SKILLS"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    stackable: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    vertical: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "certificate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 31
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    as: "h4",
    className: "header",
    horizontal: true,
    style: {
      fontSize: '0.77em',
      marginBottom: '3em',
      textTransform: 'uppercase'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 15
    }
  }, "Project Management/Engineering Management"), render()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    floated: "right",
    width: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    as: "h4",
    className: "header",
    horizontal: true,
    style: {
      fontSize: '0.77em',
      marginBottom: '3em',
      textTransform: 'uppercase'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 15
    }
  }, "Softwares & Tools"), render1(), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    as: "h4",
    className: "header",
    horizontal: true,
    style: {
      fontSize: '0.77em',
      marginBottom: '1em',
      textTransform: 'uppercase'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 15
    }
  }, "Languages"), render2()))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    as: "h4",
    className: "header",
    horizontal: true,
    style: {
      marginTop: '6em',
      marginBottom: '3em',
      textTransform: 'uppercase'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 9
    }
  }, "Education"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    stackable: true,
    verticalAlign: "middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    vertical: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "certificate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 29
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Event, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 16
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 18
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "pencil",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 20
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 18
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Date, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 20
    }
  }, "2017 - 2023"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Summary, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 20
    }
  }, "PMP 2099172"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Extra, {
    text: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 20
    }
  }, "Project Management Institute", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 20
    }
  }), "Dubai UAE")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 14
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Event, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "pencil",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 19
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Date, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 19
    }
  }, "2009 - 2011"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Summary, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 19
    }
  }, "MBA, Operation Management"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Extra, {
    text: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 19
    }
  }, "SMU", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 20
    }
  }), "Dubai UAE"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    floated: "right",
    width: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Event, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 18
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 20
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "pencil",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 22
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 20
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Date, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 22
    }
  }, "1987 - 1991"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Summary, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 22
    }
  }, "B.E Electronics"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Feed"].Extra, {
    text: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 22
    }
  }, "Savitribai Phule Pune University", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 23
    }
  }), "Pune")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Education);

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

/***/ "./components/Header2.js":
/*!*******************************!*\
  !*** ./components/Header2.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\react_demo\\Portfolio-main\\components\\Header2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Header2 = () => {
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
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    text: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h1",
    content: "got a project?",
    inverted: true,
    style: {
      fontSize: '7em',
      fontWeight: 'normal',
      marginBottom: 0,
      marginTop: '1em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h2",
    content: "email at sanjeev.sah@icloud.com",
    inverted: true,
    style: {
      fontSize: '2em',
      fontWeight: 'normal',
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
    content: "or call at +91 80079 47267",
    inverted: true,
    style: {
      fontSize: '1.5em',
      fontWeight: 'normal',
      marginTop: '0.5em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header2);

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

/***/ "./components/Services.js":
/*!********************************!*\
  !*** ./components/Services.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\react_demo\\Portfolio-main\\components\\Services.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Services = () => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    style: {
      padding: '8em 0em'
    },
    vertical: true,
    textAlign: "center",
    inverted: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h1",
    style: {
      fontSize: '3em',
      marginBottom: '2em',
      fontWeight: 'bold'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "My ", __jsx("span", {
    style: {
      fontWeight: 'bold'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }
  }, "Services")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    stackable: true,
    verticalAlign: "middle",
    columns: 3,
    divided: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    centered: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    style: {
      width: 'auto',
      height: 'auto'
    },
    src: "https://d57439wlqx3vo.cloudfront.net/iblock/577/57718e3f9374256923aa4382c5bcc673/b73ee98a70e1ecefb77b4996f067a2fa.png",
    wrapped: true,
    ui: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Project Management"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Rating"], {
    icon: "star",
    defaultRating: 5,
    maxRating: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 20
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "A project manager is one who acts as a glue and keeps things together.")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    extra: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  }), "22")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    centered: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    size: "medium",
    src: "https://www.industrialthinking.com/media/1086/fullconsultancy.jpg",
    wrapped: true,
    ui: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "Consultancy"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Rating"], {
    icon: "star",
    defaultRating: 4,
    maxRating: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 20
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "Aim to provide Consultancy services in a flexible way with options that meet the individual customer requirements.")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    extra: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }), "22")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    centered: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/stockvault-fixing-the-light---.jpeg",
    wrapped: true,
    ui: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, "Engineering Solutions"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Rating"], {
    icon: "star",
    defaultRating: 4,
    maxRating: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, "Aim to take your vision and necessary requirements, then transform them into here and now products.")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    extra: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }), "22")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
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
/* harmony import */ var _components_Education__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Education */ "./components/Education.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/About */ "./components/About.js");
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Services */ "./components/Services.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Header2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header2 */ "./components/Header2.js");
var _jsxFileName = "D:\\react_demo\\Portfolio-main\\pages\\contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function Contact() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_components_Header2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx(_components_About__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0VkdWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlcjIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovLy8uL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtYWlsLXZhbGlkYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVtYWlsanMtY29tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXBob25lLW51bWJlci1pbnB1dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiQWJvdXQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiRWR1Y2F0aW9uIiwidGFncyIsInRhZzEiLCJ0b1VwcGVyQ2FzZSIsInRhZ3MxIiwidGFnMiIsInRhZ3MyIiwicmVuZGVyIiwiaXRlbXMiLCJtYXAiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlcjEiLCJyZW5kZXIyIiwibWFyZ2luQm90dG9tIiwibWFyZ2luIiwidGV4dFRyYW5zZm9ybSIsIm1hcmdpblRvcCIsIkZvb3RlciIsImluaXQiLCJuYW1lIiwic2V0TmFtZSIsInVzZVN0YXRlIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJlbWFpbCIsInNldEVtYWlsIiwicGhvbmUiLCJzZXRQaG9uZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiZm9ybVN1Ym1pdHRlZCIsInNldEZvcm1TdWJtaXR0ZWQiLCJmb3JtU3VibWl0U3VjY2Vzc2Z1bCIsInNldEZvcm1TdWJtaXRTdWNjZXNzZnVsIiwidmFsaWRFbWFpbCIsInZhbGlkYXRlRW1haWwiLCJ2YWxpZFBob25lIiwidmFsaWRhdGVQaG9uZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlY2VpdmVyRW1haWwiLCJ0ZW1wbGF0ZUlkIiwidXNlciIsInNlbmRGZWVkYmFjayIsInNlbmRlckVtYWlsIiwiZW1haWxqcyIsInNlbmQiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJwYWRkaW5nVG9wIiwiZSIsInRhcmdldCIsInZhbHVlIiwiRW1haWxWYWxpZGF0b3IiLCJ2YWxpZGF0ZSIsImNvbnRlbnQiLCJwb2ludGluZyIsImlzVmFsaWRQaG9uZU51bWJlciIsInBhZGRpbmdMZWZ0IiwibWFyZ2luTGVmdCIsIkhlYWRlcjEiLCJDb21wb25lbnQiLCJjdXJyZW50UGFnZSIsInN0YXRlIiwibG9nIiwiSGVhZGVyMiIsIm1pbkhlaWdodCIsIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJTZXJ2aWNlcyIsIndpZHRoIiwiaGVpZ2h0IiwiQ29udGFjdCIsInJvdXRlcyIsInJlcXVpcmUiLCJhZGQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFpQkEsU0FBU0csT0FBVCxHQUFtQjtBQUdqQixTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGO0FBT0Q7O0FBRWNBLHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDekNBLE1BQU1DLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFQLEVBQWY7O0FBRUFELE1BQU0sQ0FDSEUsR0FESCxDQUNPLG9CQURQLEVBQzZCLGdCQUQ3QjtBQUlBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLE1BQWpCLEM7Ozs7Ozs7Ozs7O0FDTkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY29udGFjdC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIERpdmlkZXIsXG4gIEdyaWQsXG4gIEhlYWRlcixcbiAgSWNvbixcbiAgSW1hZ2UsXG4gIExpc3QsXG4gIE1lbnUsXG4gIFNlZ21lbnQsXG4gIFNpZGViYXIsXG4gIFZpc2liaWxpdHksXG4gIERyb3Bkb3duLFxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT57XG4gIHJldHVybihcbiAgICA8U2VnbWVudCBzdHlsZT17eyBwYWRkaW5nOiAnOGVtIDBlbScgfX0gdmVydGljYWw+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3RhY2thYmxlIHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XG4gICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9PlxuICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnIHN0eWxlPXt7IGZvbnRTaXplOiAnM2VtJyB9fT5cbiAgICAgICAgICAgICAgQWJvdXQgTWVcbiAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjVlbScgfX0+XG4gICAgICAgICAgICAgIEkgYW0gbWFqb3JseSBpbnZvbHZlZCBpbiAgcHJvamVjdCBpbml0aWF0aW9uLCBwbGFubmluZywgZXhlY3V0aW5nLCBtb25pdG9yaW5nLCBjb250cm9sICYgY2xvc2luZyBvZiBlcXVpcG1lbnQgYW5kXG5zZXJ2aWNlcyBzb2x1dGlvbnMgZm9yIFBFVCwgQ2FuLCBHbGFzcyAgcGFja2FnaW5nIGJldmVyYWdlLCBob21lIGFuZCBwZXJzb25hbCBjYXJlIHByb2R1Y3RzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuM2VtJywgZm9udFdlaWdodDogJ2JvbGQnfX0+XG4gICAgICAgICAgICAgSSBoYXZlIDI1IHllYXJzIHByb2plY3QvIGVuZ2luZWVyaW5nIGV4cGVyaWVuY2UgaW4gRk1DRyBhY3Jvc3MgQXNpYSwgQWZyaWNhLCBhbmQgRXVyb3BlIHdpdGggbXVsdGljdWx0dXJhbCBiYWNrZ3JvdW5kLlxuICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdibGFjaycgPkRvd25sb2FkIENWPC9CdXR0b24+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD0ncmlnaHQnIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgPEltYWdlICAgc3JjPScvYWJjLnBuZycgIC8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1NlZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgRGl2aWRlcixcbiAgR3JpZCxcbiAgSGVhZGVyLFxuICBJY29uLFxuICBJbWFnZSxcbiAgTGlzdCxcbiAgTWVudSxcbiAgU2VnbWVudCxcbiAgU2lkZWJhcixcbiAgVmlzaWJpbGl0eSxcbiAgRHJvcGRvd24sXG4gIEZlZWRcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmNvbnN0IEVkdWNhdGlvbiA9ICgpID0+IHtcbiAgdmFyIHRhZ3MgPSBbXG4gICAgICAgICAgICAgIHt0YWcxOlwiUE1QXCJ9LFxuICAgICAgICAgICAgICB7dGFnMTpcIlBFVCBBU0VQVElDXCIgfSxcblxuICAgICAgICAgICAgICB7dGFnMTpcIkhTRVwifSxcbiAgICAgICAgICAgICAge3RhZzE6XCJQQUNLQUdJTkcgXCJ9LFxuICAgICAgICAgICAgICB7dGFnMTpcIlNPQVAsREVURVJHRU5UIFBST0NFU1MgUEFDS0FHSU5HXCIgfSxcbiAgICAgICAgICAgICAge3RhZzE6XCJTaXggU2lnbWEgYW5kIExlYW4gTWFuYWdlbWVudFwiLnRvVXBwZXJDYXNlKCl9LFxuICAgICAgICAgICAgICB7dGFnMTpcIlBFVCxDQU4sR0xBU1MgTElORSBGT1IgQ0FSQk9OQVRFRCBCRVZFUkFHRVwifSxcbiAgICAgICAgICAgICAge3RhZzE6XCJQRVQgQ09NUExFVEUgTElORSBJTlNUQUxMQVRJT04gQ09NTUlTU0lPTklOR1wifSxcbiAgICAgICAgICAgICAge3RhZzE6XCJQUk9KRUNUIEVYRUNVVElPTlwiIH0sXG4gICAgICAgICAgICAgIHt0YWcxOlwiVEVBIFBST0NFU1MgUEFDS0FHSU5HXCIgfSxcbiAgICAgICAgICAgICAge3RhZzE6XCJGTUNHIEJFVkVSQUdFXCJ9LFxuICAgICAgICAgICAgICB7dGFnMTpcIkVESUJMRSBMSU5FIFBST0NFU1NcIn0sXG4gICAgICAgICAgICAgIHt0YWcxOlwiUEFDS0FHSU5HIExJTkVcIiB9LFxuICAgICAgICAgICAgICB7dGFnMTpcIlBMQU5UIFVUSUxJVFlcIiB9LFxuICAgICAgICAgICAgICB7dGFnMTpcIlNQQVJFIFBBUlRTXCJ9ICxcbiAgICAgICAgICAgICAge3RhZzE6XCJTVVBQTFkgQ0hBSU5cIiB9LFxuXG4gICAgICAgICAgICBdO1xuICAgIHZhciB0YWdzMSA9IFtcbiAgICAgICAgICAgICAge3RhZzI6XCJTQVAgQjFcIn0sXG4gICAgICAgICAgICAgIHt0YWcyOlwiQ01NU1wifSxcbiAgICAgICAgICAgICAge3RhZzI6J0JNUyd9LFxuICAgICAgICAgICAgICB7dGFnMjonUE0gVG9vbHMnfSxcbiAgICAgICAgICAgICAge3RhZzI6J0VuZ2luZWVyaW5nIFNvbHV0aW9uIFN5c3RlbSd9LFxuICAgICAgICAgICAgICB7dGFnMjonTWljcm9zb2Z0IE9mZmljZSBUb29scyd9LFxuICAgICAgICAgICAgICB7dGFnMjonUmVtb3RlIEFjY2VzcyBUb29sJ30sXG4gICAgICAgICAgICAgIHt0YWcyOidNUyBQcm9qZWN0J30sXG4gICAgICAgICAgICAgIHt0YWcyOidFSVQgRWZmaWNpZW5jeSBJbXByb3ZlbWVudCBUb29sJ30sXG4gICAgICAgICAgICAgIHt0YWcyOidXTVMgV2FyZWhvdXNlIE1hbmFnZW1lbnQgU3lzdGVtLXNwYW4gU3lzdGVtJ30sXG4gICAgICAgICAgICAgIHt0YWcyOidGTVMgRmllbGQgTWFuYWdlbWVudCBTeXN0ZW0gUGxhbm5pbmcgU29mdHdhcmUnfSxcbiAgICAgICAgICAgICAge3RhZzI6J1NJTkNSTyBFbmdpbmVlcmluZyBTb2x1dGlvbiBTeXN0ZW0nfSxcblxuICAgICAgICAgICAgXTtcbiAgICAgIHZhciB0YWdzMiA9IFtcbiAgICAgICAgICAgICAge3RhZzI6J0VuZ2xpc2gnfSxcbiAgICAgICAgICAgICAge3RhZzI6J0hpbmRpJ30sXG4gICAgICAgICAgICAgIHt0YWcyOidBcmFiaWMnfSxcbiAgICAgICAgICAgICAge3RhZzI6J01hcmF0aGknfVxuICAgICAgICAgICAgXTtcblxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSB0YWdzLm1hcChhZGRyZXNzID0+IHtcbiAgICAgIHJldHVybntcbiAgICAgICAgZGVzY3JpcHRpb246YWRkcmVzcy50YWcxLFxuICAgICAgICBmbHVpZDp0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIHN0eWxlPXt7IGZvbnRTaXplOiAnMC43N2VtJyxmb250V2VpZ2h0Oidib2xkJ319IGZsdWlkIGl0ZW1zUGVyUm93PXs0fSBpdGVtcz17aXRlbXN9IC8+O1xuICB9XG4gIGNvbnN0IHJlbmRlcjEgPSAoKSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSB0YWdzMS5tYXAoYWRkcmVzcyA9PiB7XG4gICAgICByZXR1cm57XG4gICAgICAgIGRlc2NyaXB0aW9uOmFkZHJlc3MudGFnMixcbiAgICAgICAgZmx1aWQ6dHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBzdHlsZT17eyBmb250U2l6ZTogJzAuNzdlbScsZm9udFdlaWdodDonYm9sZCd9fSBmbHVpZCBpdGVtc1BlclJvdz17NH0gaXRlbXM9e2l0ZW1zfSAvPjtcbiAgfVxuICBjb25zdCByZW5kZXIyID0gKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zID0gdGFnczIubWFwKGFkZHJlc3MgPT4ge1xuICAgICAgcmV0dXJue1xuICAgICAgICBkZXNjcmlwdGlvbjphZGRyZXNzLnRhZzIsXG4gICAgICAgIGZsdWlkOnRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgc3R5bGU9e3sgZm9udFNpemU6ICcwLjc3ZW0nLGZvbnRXZWlnaHQ6J2JvbGQnfX0gZmx1aWQgaXRlbXNQZXJSb3c9ezR9IGl0ZW1zPXtpdGVtc30gLz47XG4gIH1cbiAgcmV0dXJuKFxuICAgIDxTZWdtZW50IHN0eWxlPXt7IHBhZGRpbmc6ICc4ZW0gMGVtJyB9fSB2ZXJ0aWNhbCAgdGV4dEFsaWduPSdjZW50ZXInPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRlciBhcz0naDEnIHN0eWxlPXt7IGZvbnRTaXplOiAnM2VtJywgbWFyZ2luQm90dG9tOicyZW0nLGZvbnRXZWlnaHQ6J2JvbGQnIH19PlxuICAgICAgICAgIE15IFJlc3VtZVxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgPERpdmlkZXJcbiAgICAgICAgICBhcz0naDQnXG4gICAgICAgICAgY2xhc3NOYW1lPSdoZWFkZXInXG4gICAgICAgICAgaG9yaXpvbnRhbFxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJzNlbSAwZW0nLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgV29yayBFeHBlcmllbmNlXG4gICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0YWNrYWJsZSB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxuXG4gICAgICAgICAgPEdyaWQuUm93PlxuXG4gICAgICAgICAgPERpdmlkZXIgdmVydGljYWw+PEljb24gIG5hbWU9J2NlcnRpZmljYXRlJyAvPjwvRGl2aWRlcj5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17N30+XG4gICAgICAgICAgICAgIDxGZWVkPlxuICAgICAgICAgICAgICAgPEZlZWQuRXZlbnQ+XG4gICAgICAgICAgICAgICAgIDxGZWVkLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J3BlbmNpbCcgLz5cbiAgICAgICAgICAgICAgICAgPC9GZWVkLkxhYmVsPlxuICAgICAgICAgICAgICAgICA8RmVlZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgIDxGZWVkLkRhdGU+T2N0b2JlciAyMDE0IC0gcHJlc2VudDwvRmVlZC5EYXRlPlxuICAgICAgICAgICAgICAgICAgIDxGZWVkLlN1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgICBTSURFTFxuICAgICAgICAgICAgICAgICAgIDwvRmVlZC5TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgIDxGZWVkLkV4dHJhIHRleHQ+XG4gICAgICAgICAgICAgICAgICAgIFByb2plY3QgTWFuYWdlciBTZXJ2aWNlcyBBc2lhIE1pZGRsZSBFYXN0IEFmcmljYSB6b25lXG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIER1YmFpLCBVQUUgJiBQdW5lIEluZGlhXG4gICAgICAgICAgICAgICAgICA8L0ZlZWQuRXh0cmE+XG4gICAgICAgICAgICAgICAgIDwvRmVlZC5Db250ZW50PlxuICAgICAgICAgICAgICAgPC9GZWVkLkV2ZW50PlxuICAgICAgICAgICAgIDwvRmVlZD5cbiAgICAgICAgICAgICA8RmVlZD5cbiAgICAgICAgICAgICAgPEZlZWQuRXZlbnQ+XG4gICAgICAgICAgICAgICAgPEZlZWQuTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdwZW5jaWwnIC8+XG4gICAgICAgICAgICAgICAgPC9GZWVkLkxhYmVsPlxuICAgICAgICAgICAgICAgIDxGZWVkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8RmVlZC5EYXRlPkFwcmlsIDIwMTEgLSBTZXAgMjAxNDwvRmVlZC5EYXRlPlxuICAgICAgICAgICAgICAgICAgPEZlZWQuU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgQWhtYWQgVGVhXG4gICAgICAgICAgICAgICAgICA8L0ZlZWQuU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgIDxGZWVkLkV4dHJhIHRleHQ+XG4gICAgICAgICAgICAgICAgICAgUGxhbnQgTWFuYWdlclxuICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgUkFLIEZyZWUgWm9uZSwgVUFFXG4gICAgICAgICAgICAgICAgIDwvRmVlZC5FeHRyYT5cbiAgICAgICAgICAgICAgICA8L0ZlZWQuQ29udGVudD5cbiAgICAgICAgICAgICAgPC9GZWVkLkV2ZW50PlxuICAgICAgICAgICAgPC9GZWVkPlxuICAgICAgICAgICAgPEZlZWQ+XG4gICAgICAgICAgICAgIDxGZWVkLkV2ZW50PlxuICAgICAgICAgICAgICAgIDxGZWVkLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0ncGVuY2lsJyAvPlxuICAgICAgICAgICAgICAgIDwvRmVlZC5MYWJlbD5cbiAgICAgICAgICAgICAgICA8RmVlZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgPEZlZWQuRGF0ZT5TZXAgMjAwOCAtIE1hciAyMDExPC9GZWVkLkRhdGU+XG4gICAgICAgICAgICAgICAgICA8RmVlZC5TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICBBdWphbiBDb2NhLUNvbGEgQmV2ZXJhZ2VzIENvbXBhbnlcbiAgICAgICAgICAgICAgICAgIDwvRmVlZC5TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgPEZlZWQuRXh0cmEgdGV4dD5cbiAgICAgICAgICAgICAgICAgICBQYWNrYWdpbmcgJiBQcm9jZXNzIE1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgIER1YmFpIFVBRVxuICAgICAgICAgICAgICAgICA8L0ZlZWQuRXh0cmE+XG4gICAgICAgICAgICAgICAgPC9GZWVkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvRmVlZC5FdmVudD5cbiAgICAgICAgICAgIDwvRmVlZD5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPSdyaWdodCcgd2lkdGg9ezd9PlxuXG4gICAgICAgICAgICAgICAgPEZlZWQ+XG4gICAgICAgICAgICAgICAgIDxGZWVkLkV2ZW50PlxuICAgICAgICAgICAgICAgICAgIDxGZWVkLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0ncGVuY2lsJyAvPlxuICAgICAgICAgICAgICAgICAgIDwvRmVlZC5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICA8RmVlZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgPEZlZWQuRGF0ZT5TZXAgMjAwMSAtIEp1bCAyMDA4PC9GZWVkLkRhdGU+XG4gICAgICAgICAgICAgICAgICAgICA8RmVlZC5TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgICBBcm1hIEZvb2QgSW5kdXN0cmllcyBBcm1hIFNvYXAgYW5kIERldGVyZ2VudHMgR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgIDwvRmVlZC5TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgPEZlZWQuRXh0cmEgdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICBDaGllZiBFbmdpbmVlclxuICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgQ2Fpcm8gRWd5cHRcbiAgICAgICAgICAgICAgICAgICAgPC9GZWVkLkV4dHJhPlxuICAgICAgICAgICAgICAgICAgIDwvRmVlZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICA8L0ZlZWQuRXZlbnQ+XG4gICAgICAgICAgICAgICA8L0ZlZWQ+XG4gICAgICAgICAgICAgICA8RmVlZD5cbiAgICAgICAgICAgICAgICA8RmVlZC5FdmVudD5cbiAgICAgICAgICAgICAgICAgIDxGZWVkLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdwZW5jaWwnIC8+XG4gICAgICAgICAgICAgICAgICA8L0ZlZWQuTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8RmVlZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8RmVlZC5EYXRlPkRlYyAxOTk1IC0gQXVnIDIwMDE8L0ZlZWQuRGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPEZlZWQuU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgICBIaW5kdXN0YW4gQ29jYS1Db2xhIEJldmVyYWdlcyBQdnQgTHRkXG4gICAgICAgICAgICAgICAgICAgIDwvRmVlZC5TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8RmVlZC5FeHRyYSB0ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgTWFpbnRlbmFuY2UgTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgIFBpcnVuZ3V0IFB1bmUgJiBHT0JMRUogQWhtZWRhYmFkIEluZGlhXG4gICAgICAgICAgICAgICAgICAgPC9GZWVkLkV4dHJhPlxuICAgICAgICAgICAgICAgICAgPC9GZWVkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9GZWVkLkV2ZW50PlxuICAgICAgICAgICAgICA8L0ZlZWQ+XG4gICAgICAgICAgICAgIDxGZWVkPlxuICAgICAgICAgICAgICAgIDxGZWVkLkV2ZW50PlxuICAgICAgICAgICAgICAgICAgPEZlZWQuTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J3BlbmNpbCcgLz5cbiAgICAgICAgICAgICAgICAgIDwvRmVlZC5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxGZWVkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxGZWVkLkRhdGU+SnVsIDE5OTMgLSBOb3YgMTk5NTwvRmVlZC5EYXRlPlxuICAgICAgICAgICAgICAgICAgICA8RmVlZC5TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgIEhpbmR1c3RhbiBnYXMgJiBJbmR1c3RyaWVzXG4gICAgICAgICAgICAgICAgICAgIDwvRmVlZC5TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8RmVlZC5FeHRyYSB0ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgTWFpbnRlbmFuY2UgRW5naW5lZXJcbiAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICBIYWxvbCBHdWp1cmF0IEluZGlhXG4gICAgICAgICAgICAgICAgICAgPC9GZWVkLkV4dHJhPlxuICAgICAgICAgICAgICAgICAgPC9GZWVkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9GZWVkLkV2ZW50PlxuICAgICAgICAgICAgICA8L0ZlZWQ+XG4gICAgICAgICAgICAgIDxGZWVkPlxuICAgICAgICAgICAgICAgIDxGZWVkLkV2ZW50PlxuICAgICAgICAgICAgICAgICAgPEZlZWQuTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J3BlbmNpbCcgLz5cbiAgICAgICAgICAgICAgICAgIDwvRmVlZC5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxGZWVkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxGZWVkLkRhdGU+SnVuIDE5OTEgLSBKdW4gMTk5MzwvRmVlZC5EYXRlPlxuICAgICAgICAgICAgICAgICAgICA8RmVlZC5TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgIEVsZWN0cm90aGVybSBJbmRpYSBMaW1pdGVkXG4gICAgICAgICAgICAgICAgICAgIDwvRmVlZC5TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8RmVlZC5FeHRyYSB0ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgU2VydmljaW5nICYgY29tbWlzc2lvbmluZyBlbmdpbmVlclxuICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgIEdJREMgVkFUVkEgQWhtZWRhYmFkIEluZGlhXG4gICAgICAgICAgICAgICAgICAgPC9GZWVkLkV4dHJhPlxuICAgICAgICAgICAgICAgICAgPC9GZWVkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9GZWVkLkV2ZW50PlxuICAgICAgICAgICAgICA8L0ZlZWQ+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPERpdmlkZXJcbiAgICAgICAgICBhcz0naDQnXG4gICAgICAgICAgY2xhc3NOYW1lPSdoZWFkZXInXG4gICAgICAgICAgaG9yaXpvbnRhbFxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJzZlbScsbWFyZ2luQm90dG9tOiczZW0nLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgU0tJTExTXG4gICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0YWNrYWJsZT5cbiAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICA8RGl2aWRlciB2ZXJ0aWNhbD48SWNvbiAgbmFtZT0nY2VydGlmaWNhdGUnIC8+PC9EaXZpZGVyPlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs3fT5cbiAgICAgICAgICAgICAgPERpdmlkZXJcbiAgICAgICAgICAgICAgICBhcz0naDQnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoZWFkZXInXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMC43N2VtJyxtYXJnaW5Cb3R0b206JzNlbScsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFByb2plY3QgTWFuYWdlbWVudC9FbmdpbmVlcmluZyBNYW5hZ2VtZW50XG4gICAgICAgICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgICAgICAge3JlbmRlcigpfVxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPSdyaWdodCcgd2lkdGg9ezd9PlxuICAgICAgICAgICAgICA8RGl2aWRlclxuICAgICAgICAgICAgICAgIGFzPSdoNCdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2hlYWRlcidcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcwLjc3ZW0nLG1hcmdpbkJvdHRvbTonM2VtJywgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU29mdHdhcmVzICYgVG9vbHNcbiAgICAgICAgICAgICAgPC9EaXZpZGVyPlxuICAgICAgICAgICAgICB7cmVuZGVyMSgpfVxuICAgICAgICAgICAgICA8RGl2aWRlclxuICAgICAgICAgICAgICAgIGFzPSdoNCdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2hlYWRlcidcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcwLjc3ZW0nLG1hcmdpbkJvdHRvbTonMWVtJywgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTGFuZ3VhZ2VzXG4gICAgICAgICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgICAgICAge3JlbmRlcjIoKX1cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPC9HcmlkLlJvdz5cblxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxEaXZpZGVyXG4gICAgICAgICAgYXM9J2g0J1xuICAgICAgICAgIGNsYXNzTmFtZT0naGVhZGVyJ1xuICAgICAgICAgIGhvcml6b250YWxcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICc2ZW0nLG1hcmdpbkJvdHRvbTonM2VtJywgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScgfX1cbiAgICAgICAgPlxuICAgICAgICAgRWR1Y2F0aW9uXG4gICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdGFja2FibGUgdmVydGljYWxBbGlnbj0nbWlkZGxlJz5cblxuICAgICAgICAgIDxHcmlkLlJvdz5cblxuICAgICAgICAgIDxEaXZpZGVyIHZlcnRpY2FsPjxJY29uICBuYW1lPSdjZXJ0aWZpY2F0ZScgLz48L0RpdmlkZXI+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezd9PlxuICAgICAgICAgICAgICA8RmVlZD5cbiAgICAgICAgICAgICAgIDxGZWVkLkV2ZW50PlxuICAgICAgICAgICAgICAgICA8RmVlZC5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdwZW5jaWwnIC8+XG4gICAgICAgICAgICAgICAgIDwvRmVlZC5MYWJlbD5cbiAgICAgICAgICAgICAgICAgPEZlZWQuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICA8RmVlZC5EYXRlPjIwMTcgLSAyMDIzPC9GZWVkLkRhdGU+XG4gICAgICAgICAgICAgICAgICAgPEZlZWQuU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgIFBNUCAyMDk5MTcyXG4gICAgICAgICAgICAgICAgICAgPC9GZWVkLlN1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgPEZlZWQuRXh0cmEgdGV4dD5cbiAgICAgICAgICAgICAgICAgICBQcm9qZWN0IE1hbmFnZW1lbnQgSW5zdGl0dXRlXG4gICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICBEdWJhaSBVQUVcbiAgICAgICAgICAgICAgICAgIDwvRmVlZC5FeHRyYT5cbiAgICAgICAgICAgICAgICAgPC9GZWVkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICA8L0ZlZWQuRXZlbnQ+XG4gICAgICAgICAgICAgPC9GZWVkPlxuICAgICAgICAgICAgIDxGZWVkPlxuICAgICAgICAgICAgICA8RmVlZC5FdmVudD5cbiAgICAgICAgICAgICAgICA8RmVlZC5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J3BlbmNpbCcgLz5cbiAgICAgICAgICAgICAgICA8L0ZlZWQuTGFiZWw+XG4gICAgICAgICAgICAgICAgPEZlZWQuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxGZWVkLkRhdGU+MjAwOSAtIDIwMTE8L0ZlZWQuRGF0ZT5cbiAgICAgICAgICAgICAgICAgIDxGZWVkLlN1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIE1CQSwgT3BlcmF0aW9uIE1hbmFnZW1lbnRcbiAgICAgICAgICAgICAgICAgIDwvRmVlZC5TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgPEZlZWQuRXh0cmEgdGV4dD5cbiAgICAgICAgICAgICAgICAgICBTTVVcbiAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgIER1YmFpIFVBRVxuICAgICAgICAgICAgICAgICA8L0ZlZWQuRXh0cmE+XG4gICAgICAgICAgICAgICAgPC9GZWVkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvRmVlZC5FdmVudD5cbiAgICAgICAgICAgIDwvRmVlZD5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPSdyaWdodCcgd2lkdGg9ezd9PlxuXG4gICAgICAgICAgICAgICAgPEZlZWQ+XG4gICAgICAgICAgICAgICAgIDxGZWVkLkV2ZW50PlxuICAgICAgICAgICAgICAgICAgIDxGZWVkLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0ncGVuY2lsJyAvPlxuICAgICAgICAgICAgICAgICAgIDwvRmVlZC5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICA8RmVlZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgPEZlZWQuRGF0ZT4xOTg3IC0gMTk5MTwvRmVlZC5EYXRlPlxuICAgICAgICAgICAgICAgICAgICAgPEZlZWQuU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgQi5FIEVsZWN0cm9uaWNzXG4gICAgICAgICAgICAgICAgICAgICA8L0ZlZWQuU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgIDxGZWVkLkV4dHJhIHRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgU2F2aXRyaWJhaSBQaHVsZSBQdW5lIFVuaXZlcnNpdHlcbiAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgIFB1bmVcbiAgICAgICAgICAgICAgICAgICAgPC9GZWVkLkV4dHJhPlxuICAgICAgICAgICAgICAgICAgIDwvRmVlZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICA8L0ZlZWQuRXZlbnQ+XG4gICAgICAgICAgICAgICA8L0ZlZWQ+XG5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9TZWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZHVjYXRpb247XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIERpdmlkZXIsXG4gIEdyaWQsXG4gIEhlYWRlcixcbiAgSWNvbixcbiAgTGlzdCxcbiAgTWVudSxcbiAgU2VnbWVudCxcbiAgU2lkZWJhcixcbiAgVmlzaWJpbGl0eSxcbiAgRHJvcGRvd24sXG4gIEZvcm0sXG4gIE1lc3NhZ2Vcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnR7IGluaXQgfSBmcm9tICdlbWFpbGpzLWNvbSc7XG5pbXBvcnQgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSc7XG5pbXBvcnQgRW1haWxWYWxpZGF0b3IgZnJvbSAnZW1haWwtdmFsaWRhdG9yJztcbmltcG9ydCB7IGlzVmFsaWRQaG9uZU51bWJlciB9IGZyb20gJ3JlYWN0LXBob25lLW51bWJlci1pbnB1dCdcblxuY29uc3QgRm9vdGVyID0gKCkgPT57XG4gIGluaXQoXCJ1c2VyX2ZVTXVuQkYwRzU5TU5uOWhUT2VQcFwiKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmb3JtU3VibWl0dGVkLCBzZXRGb3JtU3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Zvcm1TdWJtaXRTdWNjZXNzZnVsLCBzZXRGb3JtU3VibWl0U3VjY2Vzc2Z1bF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt2YWxpZEVtYWlsLCB2YWxpZGF0ZUVtYWlsXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdmFsaWRQaG9uZSwgdmFsaWRhdGVQaG9uZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHJlY2VpdmVyRW1haWwgPSBcImhhcnNoYmFuc2FsMzIwMDBAZ21haWwuY29tXCI7XG4gIGNvbnN0IHRlbXBsYXRlSWQgPSBcInRlbXBsYXRlX2N4cmJ2YWdcIjtcbiAgY29uc3QgdXNlciA9IFwidXNlcl9mVU11bkJGMEc1OU1ObjloVE9lUHBcIjtcblxuICAgIHNlbmRGZWVkYmFjayh7XG4gICAgICB0ZW1wbGF0ZUlkLFxuICAgICAgZW1haWwsXG4gICAgICByZWNlaXZlckVtYWlsLFxuICAgICAgbmFtZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICB1c2VyLFxuICAgIH0pXG5cbiAgICBzZXRGb3JtU3VibWl0dGVkKHRydWUpXG4gIH1cblxuICBjb25zdCBzZW5kRmVlZGJhY2sgPSAoe1xuICAgIHRlbXBsYXRlSWQsXG4gICAgc2VuZGVyRW1haWwsXG4gICAgcmVjZWl2ZXJFbWFpbCxcbiAgICBuYW1lLFxuICAgIG1lc3NhZ2UsXG4gICAgdXNlcixcbiAgfSkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3JNZXNzYWdlKCcnKTtcbiAgICBlbWFpbGpzXG4gICAgICAuc2VuZChcbiAgICAgICAgXCJkZWZhdWx0X3NlcnZpY2VcIixcbiAgICAgICAgdGVtcGxhdGVJZCxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgcmVjZWl2ZXJFbWFpbCxcbiAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9LFxuICAgICAgICB1c2VyXG4gICAgICApXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgc2V0Rm9ybVN1Ym1pdFN1Y2Nlc3NmdWwodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge2NvbnNvbGUuZXJyb3IoXCJFcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICB9KVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0TmFtZSgnJyk7XG4gICAgICAgIHNldFBob25lKCcnKTtcbiAgICAgICAgc2V0TWVzc2FnZSgnJyk7XG4gICAgICAgIHNldEVtYWlsKCcnKVxuICAgICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxTZWdtZW50IGludmVydGVkIHZlcnRpY2FsIHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc1ZW0nLCBwYWRkaW5nVG9wOiAnMmVtJ319ID5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxHcmlkIGRpdmlkZWQgaW52ZXJ0ZWQgc3RhY2thYmxlPlxuICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OX0gPlxuICAgICAgICAgICAgICA8SGVhZGVyIGludmVydGVkIGFzPSdoMScgY29udGVudD0nR2V0IEluIFRvdWNoJyAvPlxuICAgICAgICAgICAgICA8Rm9ybSBpbnZlcnRlZCBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBlcnJvcj17ISFlcnJvck1lc3NhZ2V9ID5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgZmx1aWQgbGFiZWw9J1lvdXIgTmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2FuamVldiBTYWgnXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBlID0+IHtzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX19XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgZmx1aWQgbGFiZWw9J0VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdzYW5qZWV2LnNhaEBpY2xvdWQuY29tJ1xuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVFbWFpbChFbWFpbFZhbGlkYXRvci52YWxpZGF0ZShlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dmFsaWRFbWFpbCA/IGZhbHNlIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50aW5nOiAnYmVsb3cnXG4gICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfSAvPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBmbHVpZCBsYWJlbD0nUGhvbmUnXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9Jys5MSB4eHgteHh4LXh4eHgnXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVQaG9uZShpc1ZhbGlkUGhvbmVOdW1iZXIoZS50YXJnZXQudmFsdWUpID09PSB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt2YWxpZFBob25lID8gZmFsc2UgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBQaG9uZSBOdW1iZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGluZzogJ2JlbG93J1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGhvbmV9IC8+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5UZXh0QXJlYVxuICAgICAgICAgICAgICAgICAgICAgIGZsdWlkIGxhYmVsPSdNZXNzYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdXcml0ZSBhIE1lc3NhZ2UuLi4nXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge3NldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfX1cbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfSAvPlxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17ZXJyb3JNZXNzYWdlfSAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17bG9hZGluZ30gdHlwZT0nc3VibWl0JyBkaXNhYmxlZCA9IHshdmFsaWRFbWFpbCB8fCAhdmFsaWRQaG9uZX0gPlNlbmQgTWVzc2FnZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIHtzdWNjZXNzP1wiTWVzc2FnZSBTZW50XCI6XCJcIn1cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0gZmxvYXRlZD0ncmlnaHQnIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnM2VtICcgfX0+XG4gICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gxJyBpbnZlcnRlZD5cbiAgICAgICAgICAgICAgICBNeSBDb250YWN0IERldGFpbHNcbiAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgIDxMaXN0IHNpemU9J2JpZycgc3R5bGU9e3sgcGFkZGluZzogJzFlbSAxZW0nICx9fT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPSdtYXJrZXInIC8+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50Pk55YXRpIElyaXMsIFB1bmUsIE1haGFyYXNodHJhIDQxMTAyODwvTGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9J21haWwnIC8+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPSdtYWlsdG86c2FuamVldi5zYWhAaWNsb3VkLmNvbSc+c2FuamVldi5zYWhAaWNsb3VkLmNvbTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9J2xpbmtlZGluJyAvPlxuICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NhbmplZXYxMCc+U2FuamVldiBTYWg8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICA8RGl2aWRlclxuICAgICAgICAgICAgICAgIGFzPSdoNCdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2hlYWRlcidcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsXG4gICAgICAgICAgICAgICAgaW52ZXJ0ZWRcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICczZW0gJywgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZWFjaCBvdXRcbiAgICAgICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgICAgICAgPFNlZ21lbnQgaW52ZXJ0ZWQgdGV4dEFsaWduPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zYW5qZWV2MTAnPjxJY29uIG5hbWU9J2xpbmtlZGluJyBzaXplPSdiaWcnIHN0eWxlPXt7bWFyZ2luTGVmdDogJzAuNWVtJyB9fSAvPjwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdtYWlsdG86c2FuamVldi5zYWhAaWNsb3VkLmNvbSc+PEljb24gbmFtZT0nbWFpbCcgc2l6ZT0nYmlnJyAgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMC41ZW0nfX0gLz48L2E+XG4gICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgYXM9J2gyJ1xuICAgICAgICAgIGNvbnRlbnQ9J0NvcHlyaWdodCDCqSAyMDIxIEFsbCByaWdodHMgcmVzZXJ2ZWQnXG4gICAgICAgICAgaW52ZXJ0ZWRcbiAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6JzFlbScsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgICAgIG1hcmdpblRvcDogICcyLjJlbScsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cblxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvU2VnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TGlua30gZnJvbSAnLi4vcm91dGVzLmpzJ1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIERpdmlkZXIsXG4gIEdyaWQsXG4gIEhlYWRlcixcbiAgSWNvbixcbiAgSW1hZ2UsXG4gIExpc3QsXG4gIE1lbnUsXG4gIFNlZ21lbnQsXG4gIFNpZGViYXIsXG4gIFZpc2liaWxpdHksXG4gIERyb3Bkb3duLFxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuXG5jbGFzcyBIZWFkZXIxIGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gIHN0YXRlID0ge1xuICAgIGN1cnJlbnRQYWdlOicnXG4gIH1cblxuXG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBjdXJyZW50UGFnZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQYWdlKTtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VnbWVudFxuICAgICAgICAgIGludmVydGVkXG4gICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJzFlbSAwZW0nIH19XG4gICAgICAgICAgdmVydGljYWxcbiAgICAgICAgPlxuICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICBpbnZlcnRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgcG9pbnRpbmc9J2ZhbHNlJ1xuICAgICAgICAgICAgICBzZWNvbmRhcnk9J2ZhbHNlJ1xuICAgICAgICAgICAgICBzaXplPSdsYXJnZSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmsgcm91dGU9Jy8nPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gIG5hbWU9J0hvbWUnIGFjdGl2ZT17Y3VycmVudFBhZ2UgPT09ICdIb21lJ30gPlxuICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPScvcHJvamVjdHMnID5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtICBuYW1lPSdQcm9qZWN0cycgIGFjdGl2ZT17Y3VycmVudFBhZ2UgPT09ICdQcm9qZWN0cyd9ICAgPlxuICAgICAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayByb3V0ZT0nL2NvbnRhY3QnID5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtICBuYW1lPSdDb250YWN0JyBhY3RpdmU9e2N1cnJlbnRQYWdlID09PSAnQ29udGFjdCd9ID5cbiAgICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIHBvc2l0aW9uPSdyaWdodCc+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cDovL3d3dy5zZW1hbnRpYy11aS5jb20nPjxJY29uICBuYW1lPSdnaXRodWInIHNpemU9J2JpZycgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzAuMmVtJyB9fS8+PC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHA6Ly93d3cuc2VtYW50aWMtdWkuY29tJz48SWNvbiBuYW1lPSdsaW5rZWRpbicgc2l6ZT0nYmlnJyBzdHlsZT17eyBwYWRkaW5nVG9wOiAnMC4yZW0nLG1hcmdpbkxlZnQ6ICcwLjVlbScgfX0gLz48L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nbWFpbHRvOmphY2tAc2VtYW50aWMtdWkuY29tJz48SWNvbiBuYW1lPSdtYWlsJyBzaXplPSdiaWcnIHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcwLjJlbScgLG1hcmdpbkxlZnQ6ICcwLjVlbSd9fSAvPjwvYT5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgIDwvU2VnbWVudD5cbiAgICAgIDwvZGl2PlxuICApO1xufVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIxO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgRGl2aWRlcixcbiAgR3JpZCxcbiAgSGVhZGVyLFxuICBJY29uLFxuICBJbWFnZSxcbiAgTGlzdCxcbiAgTWVudSxcbiAgU2VnbWVudCxcbiAgU2lkZWJhcixcbiAgVmlzaWJpbGl0eSxcbiAgRHJvcGRvd24sXG4gIFRyYW5zaXRpb25cbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmNvbnN0IEhlYWRlcjIgPSAoKSA9PntcbiAgcmV0dXJuKFxuICAgIDxTZWdtZW50XG4gICAgICBpbnZlcnRlZFxuICAgICAgdGV4dEFsaWduPSdjZW50ZXInXG4gICAgICBzdHlsZT17e21pbkhlaWdodDogNjIwLCBwYWRkaW5nOiAnMWVtIDBlbScgfX1cbiAgICAgIHZlcnRpY2FsXG4gICAgPlxuICAgIDxDb250YWluZXIgdGV4dD5cbiAgICAgIDxIZWFkZXJcbiAgICAgICAgICBhcz0naDEnXG4gICAgICAgICAgY29udGVudD0nZ290IGEgcHJvamVjdD8nXG4gICAgICAgICAgaW52ZXJ0ZWRcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6ICAnN2VtJyxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiAgJzFlbScsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDxIZWFkZXJcbiAgICAgICAgYXM9J2gyJ1xuICAgICAgICBjb250ZW50PSdlbWFpbCBhdCBzYW5qZWV2LnNhaEBpY2xvdWQuY29tJ1xuICAgICAgICBpbnZlcnRlZFxuXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZm9udFNpemU6JzJlbScsXG4gICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgICAgbWFyZ2luVG9wOiAgJzAuMmVtJyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8SGVhZGVyXG4gICAgICAgIGFzPSdoNSdcbiAgICAgICAgY29udGVudD0nb3IgY2FsbCBhdCArOTEgODAwNzkgNDcyNjcnXG4gICAgICAgIGludmVydGVkXG5cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBmb250U2l6ZTonMS41ZW0nLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgICAgIG1hcmdpblRvcDogICcwLjVlbScsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDwvU2VnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyMjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0eyBpbml0IH0gZnJvbSAnZW1haWxqcy1jb20nO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgaW5pdChcInVzZXJfZlVNdW5CRjBHNTlNTm45aFRPZVBwXCIpO1xuICByZXR1cm4gKFxuICA8Q29udGFpbmVyIGZsdWlkPlxuICAgIDxIZWFkPlxuICAgICAgPGxpbmtcbiAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMi4xMi9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgICAvPlxuICAgICA8L0hlYWQ+XG4gICAgIDxIZWFkZXIvPlxuICAgICAgPGRpdj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgRGl2aWRlcixcbiAgR3JpZCxcbiAgSGVhZGVyLFxuICBJY29uLFxuICBJbWFnZSxcbiAgTGlzdCxcbiAgTWVudSxcbiAgU2VnbWVudCxcbiAgU2lkZWJhcixcbiAgVmlzaWJpbGl0eSxcbiAgRHJvcGRvd24sXG4gIFJhdGluZ1xufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuY29uc3QgU2VydmljZXMgPSAoKSA9PntcbiAgcmV0dXJuKFxuICAgIDxTZWdtZW50IHN0eWxlPXt7IHBhZGRpbmc6ICc4ZW0gMGVtJyB9fSB2ZXJ0aWNhbCB0ZXh0QWxpZ249J2NlbnRlcicgaW52ZXJ0ZWQ+XG4gICAgICA8SGVhZGVyIGFzPSdoMScgc3R5bGU9e3sgZm9udFNpemU6ICczZW0nLCBtYXJnaW5Cb3R0b206JzJlbScsZm9udFdlaWdodDonYm9sZCcgfX0+XG4gICAgICAgIE15IDxzcGFuIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT5TZXJ2aWNlczwvc3Bhbj5cbiAgICAgIDwvSGVhZGVyPlxuXG4gICAgICA8R3JpZCBjb250YWluZXIgc3RhY2thYmxlIHZlcnRpY2FsQWxpZ249J21pZGRsZScgY29sdW1ucz17M30gZGl2aWRlZD5cbiAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDxDYXJkICBjZW50ZXJlZD5cbiAgICAgICAgICAgICAgPEltYWdlICBzdHlsZT17e3dpZHRoOiAnYXV0bycsIGhlaWdodDogJ2F1dG8nfX0gIHNyYz0naHR0cHM6Ly9kNTc0Mzl3bHF4M3ZvLmNsb3VkZnJvbnQubmV0L2libG9jay81NzcvNTc3MThlM2Y5Mzc0MjU2OTIzYWE0MzgyYzViY2M2NzMvYjczZWU5OGE3MGUxZWNlZmI3N2I0OTk2ZjA2N2EyZmEucG5nJyB3cmFwcGVkIHVpPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+UHJvamVjdCBNYW5hZ2VtZW50PC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgICAgIDxSYXRpbmcgaWNvbj0nc3RhcicgZGVmYXVsdFJhdGluZz17NX0gbWF4UmF0aW5nPXs1fSAvPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIEEgcHJvamVjdCBtYW5hZ2VyIGlzIG9uZSB3aG8gYWN0cyBhcyBhIGdsdWUgYW5kIGtlZXBzIHRoaW5ncyB0b2dldGhlci5cbiAgICAgICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0ndXNlcicgLz5cbiAgICAgICAgICAgICAgICAgIDIyXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDxDYXJkIGNlbnRlcmVkPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc2l6ZT0nbWVkaXVtJyBzcmM9J2h0dHBzOi8vd3d3LmluZHVzdHJpYWx0aGlua2luZy5jb20vbWVkaWEvMTA4Ni9mdWxsY29uc3VsdGFuY3kuanBnJyB3cmFwcGVkIHVpPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+Q29uc3VsdGFuY3k8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDYXJkLk1ldGE+XG4gICAgICAgICAgICAgICAgICAgPFJhdGluZyBpY29uPSdzdGFyJyBkZWZhdWx0UmF0aW5nPXs0fSBtYXhSYXRpbmc9ezV9IC8+XG4gICAgICAgICAgICAgICAgPC9DYXJkLk1ldGE+XG4gICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgQWltIHRvIHByb3ZpZGUgQ29uc3VsdGFuY3kgc2VydmljZXMgaW4gYSBmbGV4aWJsZSB3YXkgd2l0aCBvcHRpb25zIHRoYXQgbWVldCB0aGUgaW5kaXZpZHVhbCBjdXN0b21lciByZXF1aXJlbWVudHMuXG4gICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J3VzZXInIC8+XG4gICAgICAgICAgICAgICAgICAyMlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8Q2FyZCBjZW50ZXJlZD5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz0naHR0cHM6Ly9ha20taW1nLWEtaW4udG9zc2h1Yi5jb20vaW5kaWF0b2RheS9pbWFnZXMvc3RvcnkvMjAyMDA4L3N0b2NrdmF1bHQtZml4aW5nLXRoZS1saWdodC0tLS5qcGVnJyB3cmFwcGVkIHVpPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+RW5naW5lZXJpbmcgU29sdXRpb25zPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgICAgPFJhdGluZyBpY29uPSdzdGFyJyBkZWZhdWx0UmF0aW5nPXs0fSBtYXhSYXRpbmc9ezV9IC8+XG4gICAgICAgICAgICAgICAgPC9DYXJkLk1ldGE+XG4gICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICBBaW0gdG8gdGFrZSB5b3VyIHZpc2lvbiBhbmQgbmVjZXNzYXJ5IHJlcXVpcmVtZW50cywgdGhlbiB0cmFuc2Zvcm0gdGhlbSBpbnRvIGhlcmUgYW5kIG5vdyBwcm9kdWN0cy5cbiAgICAgICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0ndXNlcicgLz5cbiAgICAgICAgICAgICAgICAgIDIyXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgPC9HcmlkPlxuICAgIDwvU2VnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBFZHVjYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9FZHVjYXRpb24nXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BYm91dCdcbmltcG9ydCBTZXJ2aWNlcyBmcm9tICcuLi9jb21wb25lbnRzL1NlcnZpY2VzJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCBIZWFkZXIyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyMidcblxuXG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgRGl2aWRlcixcbiAgR3JpZCxcbiAgSGVhZGVyLFxuICBJY29uLFxuICBJbWFnZSxcbiAgTGlzdCxcbiAgTWVudSxcbiAgU2VnbWVudCxcbiAgU2lkZWJhcixcbiAgVmlzaWJpbGl0eSxcbiAgRHJvcGRvd24sXG4gIEZlZWRcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmZ1bmN0aW9uIENvbnRhY3QoKSB7XG5cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZGVyMi8+XG4gICAgICA8QWJvdXQvPlxuICAgICAgPEZvb3Rlci8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCduZXh0LXJvdXRlcycpKCk7XG5cbnJvdXRlc1xuICAuYWRkKCcvcHJvamVjdHMvOmFkZHJlc3MnLCAnL3Byb2plY3RzL3Nob3cnKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1haWwtdmFsaWRhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtYWlsanMtY29tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1waG9uZS1udW1iZXItaW5wdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==