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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
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

/***/ "./components/Header1.js":
/*!*******************************!*\
  !*** ./components/Header1.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\react_demo\\Portfolio-main\\components\\Header1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Header1 = () => {
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
    content: "Hello, Im",
    inverted: true,
    style: {
      fontSize: '2em',
      fontWeight: 'normal',
      marginBottom: 0,
      marginTop: '6em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h2",
    content: "Sanjeev Sah",
    inverted: true,
    style: {
      fontSize: '4em',
      fontWeight: 'normal',
      marginTop: '0.2em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h5",
    content: "AND THIS IS MY RESUME",
    inverted: true,
    style: {
      fontSize: '1em',
      fontWeight: 'normal',
      marginTop: '0.5em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  })));
};

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _components_Header1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header1 */ "./components/Header1.js");
var _jsxFileName = "D:\\react_demo\\Portfolio-main\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function App() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_components_Header1__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }), __jsx(_components_About__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx(_components_Services__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx(_components_Education__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0VkdWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlcjEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbWFpbC12YWxpZGF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbWFpbGpzLWNvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1waG9uZS1udW1iZXItaW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkFib3V0IiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIkVkdWNhdGlvbiIsInRhZ3MiLCJ0YWcxIiwidG9VcHBlckNhc2UiLCJ0YWdzMSIsInRhZzIiLCJ0YWdzMiIsInJlbmRlciIsIml0ZW1zIiwibWFwIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXIxIiwicmVuZGVyMiIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbiIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW5Ub3AiLCJGb290ZXIiLCJpbml0IiwibmFtZSIsInNldE5hbWUiLCJ1c2VTdGF0ZSIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiZW1haWwiLCJzZXRFbWFpbCIsInBob25lIiwic2V0UGhvbmUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImZvcm1TdWJtaXR0ZWQiLCJzZXRGb3JtU3VibWl0dGVkIiwiZm9ybVN1Ym1pdFN1Y2Nlc3NmdWwiLCJzZXRGb3JtU3VibWl0U3VjY2Vzc2Z1bCIsInZhbGlkRW1haWwiLCJ2YWxpZGF0ZUVtYWlsIiwidmFsaWRQaG9uZSIsInZhbGlkYXRlUGhvbmUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZWNlaXZlckVtYWlsIiwidGVtcGxhdGVJZCIsInVzZXIiLCJzZW5kRmVlZGJhY2siLCJzZW5kZXJFbWFpbCIsImVtYWlsanMiLCJzZW5kIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicGFkZGluZ1RvcCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkVtYWlsVmFsaWRhdG9yIiwidmFsaWRhdGUiLCJjb250ZW50IiwicG9pbnRpbmciLCJpc1ZhbGlkUGhvbmVOdW1iZXIiLCJwYWRkaW5nTGVmdCIsIm1hcmdpbkxlZnQiLCJIZWFkZXIxIiwiQ29tcG9uZW50IiwiY3VycmVudFBhZ2UiLCJzdGF0ZSIsImxvZyIsIm1pbkhlaWdodCIsIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJTZXJ2aWNlcyIsIndpZHRoIiwiaGVpZ2h0IiwiQXBwIiwicm91dGVzIiwicmVxdWlyZSIsImFkZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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Ozs7OztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFrQkEsU0FBU0csR0FBVCxHQUFlO0FBR2IsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVJLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBREY7QUFTRDs7QUFFY0Esa0VBQWYsRTs7Ozs7Ozs7Ozs7QUMzQ0EsTUFBTUMsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdDQUFELENBQVAsRUFBZjs7QUFFQUQsTUFBTSxDQUNIRSxHQURILENBQ08sb0JBRFAsRUFDNkIsZ0JBRDdCO0FBSUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkosTUFBakIsQzs7Ozs7Ozs7Ozs7QUNOQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBEaXZpZGVyLFxuICBHcmlkLFxuICBIZWFkZXIsXG4gIEljb24sXG4gIEltYWdlLFxuICBMaXN0LFxuICBNZW51LFxuICBTZWdtZW50LFxuICBTaWRlYmFyLFxuICBWaXNpYmlsaXR5LFxuICBEcm9wZG93bixcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5jb25zdCBBYm91dCA9ICgpID0+e1xuICByZXR1cm4oXG4gICAgPFNlZ21lbnQgc3R5bGU9e3sgcGFkZGluZzogJzhlbSAwZW0nIH19IHZlcnRpY2FsPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHN0YWNrYWJsZSB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxuICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs2fT5cbiAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzNlbScgfX0+XG4gICAgICAgICAgICAgIEFib3V0IE1lXG4gICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS41ZW0nIH19PlxuICAgICAgICAgICAgICBJIGFtIG1ham9ybHkgaW52b2x2ZWQgaW4gIHByb2plY3QgaW5pdGlhdGlvbiwgcGxhbm5pbmcsIGV4ZWN1dGluZywgbW9uaXRvcmluZywgY29udHJvbCAmIGNsb3Npbmcgb2YgZXF1aXBtZW50IGFuZFxuc2VydmljZXMgc29sdXRpb25zIGZvciBQRVQsIENhbiwgR2xhc3MgIHBhY2thZ2luZyBiZXZlcmFnZSwgaG9tZSBhbmQgcGVyc29uYWwgY2FyZSBwcm9kdWN0cy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjNlbScsIGZvbnRXZWlnaHQ6ICdib2xkJ319PlxuICAgICAgICAgICAgIEkgaGF2ZSAyNSB5ZWFycyBwcm9qZWN0LyBlbmdpbmVlcmluZyBleHBlcmllbmNlIGluIEZNQ0cgYWNyb3NzIEFzaWEsIEFmcmljYSwgYW5kIEV1cm9wZSB3aXRoIG11bHRpY3VsdHVyYWwgYmFja2dyb3VuZC5cbiAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj0nYmxhY2snID5Eb3dubG9hZCBDVjwvQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9J3JpZ2h0JyB3aWR0aD17OH0+XG4gICAgICAgICAgICAgIDxJbWFnZSAgIHNyYz0nL2FiYy5wbmcnICAvPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9TZWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIERpdmlkZXIsXG4gIEdyaWQsXG4gIEhlYWRlcixcbiAgSWNvbixcbiAgSW1hZ2UsXG4gIExpc3QsXG4gIE1lbnUsXG4gIFNlZ21lbnQsXG4gIFNpZGViYXIsXG4gIFZpc2liaWxpdHksXG4gIERyb3Bkb3duLFxuICBGZWVkXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5jb25zdCBFZHVjYXRpb24gPSAoKSA9PiB7XG4gIHZhciB0YWdzID0gW1xuICAgICAgICAgICAgICB7dGFnMTpcIlBNUFwifSxcbiAgICAgICAgICAgICAge3RhZzE6XCJQRVQgQVNFUFRJQ1wiIH0sXG5cbiAgICAgICAgICAgICAge3RhZzE6XCJIU0VcIn0sXG4gICAgICAgICAgICAgIHt0YWcxOlwiUEFDS0FHSU5HIFwifSxcbiAgICAgICAgICAgICAge3RhZzE6XCJTT0FQLERFVEVSR0VOVCBQUk9DRVNTIFBBQ0tBR0lOR1wiIH0sXG4gICAgICAgICAgICAgIHt0YWcxOlwiU2l4IFNpZ21hIGFuZCBMZWFuIE1hbmFnZW1lbnRcIi50b1VwcGVyQ2FzZSgpfSxcbiAgICAgICAgICAgICAge3RhZzE6XCJQRVQsQ0FOLEdMQVNTIExJTkUgRk9SIENBUkJPTkFURUQgQkVWRVJBR0VcIn0sXG4gICAgICAgICAgICAgIHt0YWcxOlwiUEVUIENPTVBMRVRFIExJTkUgSU5TVEFMTEFUSU9OIENPTU1JU1NJT05JTkdcIn0sXG4gICAgICAgICAgICAgIHt0YWcxOlwiUFJPSkVDVCBFWEVDVVRJT05cIiB9LFxuICAgICAgICAgICAgICB7dGFnMTpcIlRFQSBQUk9DRVNTIFBBQ0tBR0lOR1wiIH0sXG4gICAgICAgICAgICAgIHt0YWcxOlwiRk1DRyBCRVZFUkFHRVwifSxcbiAgICAgICAgICAgICAge3RhZzE6XCJFRElCTEUgTElORSBQUk9DRVNTXCJ9LFxuICAgICAgICAgICAgICB7dGFnMTpcIlBBQ0tBR0lORyBMSU5FXCIgfSxcbiAgICAgICAgICAgICAge3RhZzE6XCJQTEFOVCBVVElMSVRZXCIgfSxcbiAgICAgICAgICAgICAge3RhZzE6XCJTUEFSRSBQQVJUU1wifSAsXG4gICAgICAgICAgICAgIHt0YWcxOlwiU1VQUExZIENIQUlOXCIgfSxcblxuICAgICAgICAgICAgXTtcbiAgICB2YXIgdGFnczEgPSBbXG4gICAgICAgICAgICAgIHt0YWcyOlwiU0FQIEIxXCJ9LFxuICAgICAgICAgICAgICB7dGFnMjpcIkNNTVNcIn0sXG4gICAgICAgICAgICAgIHt0YWcyOidCTVMnfSxcbiAgICAgICAgICAgICAge3RhZzI6J1BNIFRvb2xzJ30sXG4gICAgICAgICAgICAgIHt0YWcyOidFbmdpbmVlcmluZyBTb2x1dGlvbiBTeXN0ZW0nfSxcbiAgICAgICAgICAgICAge3RhZzI6J01pY3Jvc29mdCBPZmZpY2UgVG9vbHMnfSxcbiAgICAgICAgICAgICAge3RhZzI6J1JlbW90ZSBBY2Nlc3MgVG9vbCd9LFxuICAgICAgICAgICAgICB7dGFnMjonTVMgUHJvamVjdCd9LFxuICAgICAgICAgICAgICB7dGFnMjonRUlUIEVmZmljaWVuY3kgSW1wcm92ZW1lbnQgVG9vbCd9LFxuICAgICAgICAgICAgICB7dGFnMjonV01TIFdhcmVob3VzZSBNYW5hZ2VtZW50IFN5c3RlbS1zcGFuIFN5c3RlbSd9LFxuICAgICAgICAgICAgICB7dGFnMjonRk1TIEZpZWxkIE1hbmFnZW1lbnQgU3lzdGVtIFBsYW5uaW5nIFNvZnR3YXJlJ30sXG4gICAgICAgICAgICAgIHt0YWcyOidTSU5DUk8gRW5naW5lZXJpbmcgU29sdXRpb24gU3lzdGVtJ30sXG5cbiAgICAgICAgICAgIF07XG4gICAgICB2YXIgdGFnczIgPSBbXG4gICAgICAgICAgICAgIHt0YWcyOidFbmdsaXNoJ30sXG4gICAgICAgICAgICAgIHt0YWcyOidIaW5kaSd9LFxuICAgICAgICAgICAgICB7dGFnMjonQXJhYmljJ30sXG4gICAgICAgICAgICAgIHt0YWcyOidNYXJhdGhpJ31cbiAgICAgICAgICAgIF07XG5cbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zID0gdGFncy5tYXAoYWRkcmVzcyA9PiB7XG4gICAgICByZXR1cm57XG4gICAgICAgIGRlc2NyaXB0aW9uOmFkZHJlc3MudGFnMSxcbiAgICAgICAgZmx1aWQ6dHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBzdHlsZT17eyBmb250U2l6ZTogJzAuNzdlbScsZm9udFdlaWdodDonYm9sZCd9fSBmbHVpZCBpdGVtc1BlclJvdz17NH0gaXRlbXM9e2l0ZW1zfSAvPjtcbiAgfVxuICBjb25zdCByZW5kZXIxID0gKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zID0gdGFnczEubWFwKGFkZHJlc3MgPT4ge1xuICAgICAgcmV0dXJue1xuICAgICAgICBkZXNjcmlwdGlvbjphZGRyZXNzLnRhZzIsXG4gICAgICAgIGZsdWlkOnRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgc3R5bGU9e3sgZm9udFNpemU6ICcwLjc3ZW0nLGZvbnRXZWlnaHQ6J2JvbGQnfX0gZmx1aWQgaXRlbXNQZXJSb3c9ezR9IGl0ZW1zPXtpdGVtc30gLz47XG4gIH1cbiAgY29uc3QgcmVuZGVyMiA9ICgpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IHRhZ3MyLm1hcChhZGRyZXNzID0+IHtcbiAgICAgIHJldHVybntcbiAgICAgICAgZGVzY3JpcHRpb246YWRkcmVzcy50YWcyLFxuICAgICAgICBmbHVpZDp0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIHN0eWxlPXt7IGZvbnRTaXplOiAnMC43N2VtJyxmb250V2VpZ2h0Oidib2xkJ319IGZsdWlkIGl0ZW1zUGVyUm93PXs0fSBpdGVtcz17aXRlbXN9IC8+O1xuICB9XG4gIHJldHVybihcbiAgICA8U2VnbWVudCBzdHlsZT17eyBwYWRkaW5nOiAnOGVtIDBlbScgfX0gdmVydGljYWwgIHRleHRBbGlnbj0nY2VudGVyJz5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkZXIgYXM9J2gxJyBzdHlsZT17eyBmb250U2l6ZTogJzNlbScsIG1hcmdpbkJvdHRvbTonMmVtJyxmb250V2VpZ2h0Oidib2xkJyB9fT5cbiAgICAgICAgICBNeSBSZXN1bWVcbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgIDxEaXZpZGVyXG4gICAgICAgICAgYXM9J2g0J1xuICAgICAgICAgIGNsYXNzTmFtZT0naGVhZGVyJ1xuICAgICAgICAgIGhvcml6b250YWxcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICczZW0gMGVtJywgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFdvcmsgRXhwZXJpZW5jZVxuICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdGFja2FibGUgdmVydGljYWxBbGlnbj0nbWlkZGxlJz5cblxuICAgICAgICAgIDxHcmlkLlJvdz5cblxuICAgICAgICAgIDxEaXZpZGVyIHZlcnRpY2FsPjxJY29uICBuYW1lPSdjZXJ0aWZpY2F0ZScgLz48L0RpdmlkZXI+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezd9PlxuICAgICAgICAgICAgICA8RmVlZD5cbiAgICAgICAgICAgICAgIDxGZWVkLkV2ZW50PlxuICAgICAgICAgICAgICAgICA8RmVlZC5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdwZW5jaWwnIC8+XG4gICAgICAgICAgICAgICAgIDwvRmVlZC5MYWJlbD5cbiAgICAgICAgICAgICAgICAgPEZlZWQuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICA8RmVlZC5EYXRlPk9jdG9iZXIgMjAxNCAtIHByZXNlbnQ8L0ZlZWQuRGF0ZT5cbiAgICAgICAgICAgICAgICAgICA8RmVlZC5TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgU0lERUxcbiAgICAgICAgICAgICAgICAgICA8L0ZlZWQuU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICA8RmVlZC5FeHRyYSB0ZXh0PlxuICAgICAgICAgICAgICAgICAgICBQcm9qZWN0IE1hbmFnZXIgU2VydmljZXMgQXNpYSBNaWRkbGUgRWFzdCBBZnJpY2Egem9uZVxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICBEdWJhaSwgVUFFICYgUHVuZSBJbmRpYVxuICAgICAgICAgICAgICAgICAgPC9GZWVkLkV4dHJhPlxuICAgICAgICAgICAgICAgICA8L0ZlZWQuQ29udGVudD5cbiAgICAgICAgICAgICAgIDwvRmVlZC5FdmVudD5cbiAgICAgICAgICAgICA8L0ZlZWQ+XG4gICAgICAgICAgICAgPEZlZWQ+XG4gICAgICAgICAgICAgIDxGZWVkLkV2ZW50PlxuICAgICAgICAgICAgICAgIDxGZWVkLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0ncGVuY2lsJyAvPlxuICAgICAgICAgICAgICAgIDwvRmVlZC5MYWJlbD5cbiAgICAgICAgICAgICAgICA8RmVlZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgPEZlZWQuRGF0ZT5BcHJpbCAyMDExIC0gU2VwIDIwMTQ8L0ZlZWQuRGF0ZT5cbiAgICAgICAgICAgICAgICAgIDxGZWVkLlN1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIEFobWFkIFRlYVxuICAgICAgICAgICAgICAgICAgPC9GZWVkLlN1bW1hcnk+XG4gICAgICAgICAgICAgICAgICA8RmVlZC5FeHRyYSB0ZXh0PlxuICAgICAgICAgICAgICAgICAgIFBsYW50IE1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgIFJBSyBGcmVlIFpvbmUsIFVBRVxuICAgICAgICAgICAgICAgICA8L0ZlZWQuRXh0cmE+XG4gICAgICAgICAgICAgICAgPC9GZWVkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvRmVlZC5FdmVudD5cbiAgICAgICAgICAgIDwvRmVlZD5cbiAgICAgICAgICAgIDxGZWVkPlxuICAgICAgICAgICAgICA8RmVlZC5FdmVudD5cbiAgICAgICAgICAgICAgICA8RmVlZC5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J3BlbmNpbCcgLz5cbiAgICAgICAgICAgICAgICA8L0ZlZWQuTGFiZWw+XG4gICAgICAgICAgICAgICAgPEZlZWQuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxGZWVkLkRhdGU+U2VwIDIwMDggLSBNYXIgMjAxMTwvRmVlZC5EYXRlPlxuICAgICAgICAgICAgICAgICAgPEZlZWQuU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgQXVqYW4gQ29jYS1Db2xhIEJldmVyYWdlcyBDb21wYW55XG4gICAgICAgICAgICAgICAgICA8L0ZlZWQuU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgIDxGZWVkLkV4dHJhIHRleHQ+XG4gICAgICAgICAgICAgICAgICAgUGFja2FnaW5nICYgUHJvY2VzcyBNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICBEdWJhaSBVQUVcbiAgICAgICAgICAgICAgICAgPC9GZWVkLkV4dHJhPlxuICAgICAgICAgICAgICAgIDwvRmVlZC5Db250ZW50PlxuICAgICAgICAgICAgICA8L0ZlZWQuRXZlbnQ+XG4gICAgICAgICAgICA8L0ZlZWQ+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD0ncmlnaHQnIHdpZHRoPXs3fT5cblxuICAgICAgICAgICAgICAgIDxGZWVkPlxuICAgICAgICAgICAgICAgICA8RmVlZC5FdmVudD5cbiAgICAgICAgICAgICAgICAgICA8RmVlZC5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J3BlbmNpbCcgLz5cbiAgICAgICAgICAgICAgICAgICA8L0ZlZWQuTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgPEZlZWQuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgIDxGZWVkLkRhdGU+U2VwIDIwMDEgLSBKdWwgMjAwODwvRmVlZC5EYXRlPlxuICAgICAgICAgICAgICAgICAgICAgPEZlZWQuU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgQXJtYSBGb29kIEluZHVzdHJpZXMgQXJtYSBTb2FwIGFuZCBEZXRlcmdlbnRzIEdyb3VwXG4gICAgICAgICAgICAgICAgICAgICA8L0ZlZWQuU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgIDxGZWVkLkV4dHJhIHRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgQ2hpZWYgRW5naW5lZXJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgIENhaXJvIEVneXB0XG4gICAgICAgICAgICAgICAgICAgIDwvRmVlZC5FeHRyYT5cbiAgICAgICAgICAgICAgICAgICA8L0ZlZWQuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgPC9GZWVkLkV2ZW50PlxuICAgICAgICAgICAgICAgPC9GZWVkPlxuICAgICAgICAgICAgICAgPEZlZWQ+XG4gICAgICAgICAgICAgICAgPEZlZWQuRXZlbnQ+XG4gICAgICAgICAgICAgICAgICA8RmVlZC5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0ncGVuY2lsJyAvPlxuICAgICAgICAgICAgICAgICAgPC9GZWVkLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgPEZlZWQuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPEZlZWQuRGF0ZT5EZWMgMTk5NSAtIEF1ZyAyMDAxPC9GZWVkLkRhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxGZWVkLlN1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgICAgSGluZHVzdGFuIENvY2EtQ29sYSBCZXZlcmFnZXMgUHZ0IEx0ZFxuICAgICAgICAgICAgICAgICAgICA8L0ZlZWQuU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPEZlZWQuRXh0cmEgdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgIE1haW50ZW5hbmNlIE1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICBQaXJ1bmd1dCBQdW5lICYgR09CTEVKIEFobWVkYWJhZCBJbmRpYVxuICAgICAgICAgICAgICAgICAgIDwvRmVlZC5FeHRyYT5cbiAgICAgICAgICAgICAgICAgIDwvRmVlZC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDwvRmVlZC5FdmVudD5cbiAgICAgICAgICAgICAgPC9GZWVkPlxuICAgICAgICAgICAgICA8RmVlZD5cbiAgICAgICAgICAgICAgICA8RmVlZC5FdmVudD5cbiAgICAgICAgICAgICAgICAgIDxGZWVkLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdwZW5jaWwnIC8+XG4gICAgICAgICAgICAgICAgICA8L0ZlZWQuTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8RmVlZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8RmVlZC5EYXRlPkp1bCAxOTkzIC0gTm92IDE5OTU8L0ZlZWQuRGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPEZlZWQuU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgICBIaW5kdXN0YW4gZ2FzICYgSW5kdXN0cmllc1xuICAgICAgICAgICAgICAgICAgICA8L0ZlZWQuU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPEZlZWQuRXh0cmEgdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgIE1haW50ZW5hbmNlIEVuZ2luZWVyXG4gICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgSGFsb2wgR3VqdXJhdCBJbmRpYVxuICAgICAgICAgICAgICAgICAgIDwvRmVlZC5FeHRyYT5cbiAgICAgICAgICAgICAgICAgIDwvRmVlZC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDwvRmVlZC5FdmVudD5cbiAgICAgICAgICAgICAgPC9GZWVkPlxuICAgICAgICAgICAgICA8RmVlZD5cbiAgICAgICAgICAgICAgICA8RmVlZC5FdmVudD5cbiAgICAgICAgICAgICAgICAgIDxGZWVkLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdwZW5jaWwnIC8+XG4gICAgICAgICAgICAgICAgICA8L0ZlZWQuTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8RmVlZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8RmVlZC5EYXRlPkp1biAxOTkxIC0gSnVuIDE5OTM8L0ZlZWQuRGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPEZlZWQuU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgICBFbGVjdHJvdGhlcm0gSW5kaWEgTGltaXRlZFxuICAgICAgICAgICAgICAgICAgICA8L0ZlZWQuU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPEZlZWQuRXh0cmEgdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2luZyAmIGNvbW1pc3Npb25pbmcgZW5naW5lZXJcbiAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICBHSURDIFZBVFZBIEFobWVkYWJhZCBJbmRpYVxuICAgICAgICAgICAgICAgICAgIDwvRmVlZC5FeHRyYT5cbiAgICAgICAgICAgICAgICAgIDwvRmVlZC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDwvRmVlZC5FdmVudD5cbiAgICAgICAgICAgICAgPC9GZWVkPlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxEaXZpZGVyXG4gICAgICAgICAgYXM9J2g0J1xuICAgICAgICAgIGNsYXNzTmFtZT0naGVhZGVyJ1xuICAgICAgICAgIGhvcml6b250YWxcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICc2ZW0nLG1hcmdpbkJvdHRvbTonM2VtJywgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFNLSUxMU1xuICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdGFja2FibGU+XG4gICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgPERpdmlkZXIgdmVydGljYWw+PEljb24gIG5hbWU9J2NlcnRpZmljYXRlJyAvPjwvRGl2aWRlcj5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17N30+XG4gICAgICAgICAgICAgIDxEaXZpZGVyXG4gICAgICAgICAgICAgICAgYXM9J2g0J1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naGVhZGVyJ1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzAuNzdlbScsbWFyZ2luQm90dG9tOiczZW0nLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBQcm9qZWN0IE1hbmFnZW1lbnQvRW5naW5lZXJpbmcgTWFuYWdlbWVudFxuICAgICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICAgIHtyZW5kZXIoKX1cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD0ncmlnaHQnIHdpZHRoPXs3fT5cbiAgICAgICAgICAgICAgPERpdmlkZXJcbiAgICAgICAgICAgICAgICBhcz0naDQnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoZWFkZXInXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMC43N2VtJyxtYXJnaW5Cb3R0b206JzNlbScsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNvZnR3YXJlcyAmIFRvb2xzXG4gICAgICAgICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgICAgICAge3JlbmRlcjEoKX1cbiAgICAgICAgICAgICAgPERpdmlkZXJcbiAgICAgICAgICAgICAgICBhcz0naDQnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoZWFkZXInXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMC43N2VtJyxtYXJnaW5Cb3R0b206JzFlbScsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExhbmd1YWdlc1xuICAgICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICAgIHtyZW5kZXIyKCl9XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDwvR3JpZC5Sb3c+XG5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8RGl2aWRlclxuICAgICAgICAgIGFzPSdoNCdcbiAgICAgICAgICBjbGFzc05hbWU9J2hlYWRlcidcbiAgICAgICAgICBob3Jpem9udGFsXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNmVtJyxtYXJnaW5Cb3R0b206JzNlbScsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnIH19XG4gICAgICAgID5cbiAgICAgICAgIEVkdWNhdGlvblxuICAgICAgICAgPC9EaXZpZGVyPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3RhY2thYmxlIHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XG5cbiAgICAgICAgICA8R3JpZC5Sb3c+XG5cbiAgICAgICAgICA8RGl2aWRlciB2ZXJ0aWNhbD48SWNvbiAgbmFtZT0nY2VydGlmaWNhdGUnIC8+PC9EaXZpZGVyPlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs3fT5cbiAgICAgICAgICAgICAgPEZlZWQ+XG4gICAgICAgICAgICAgICA8RmVlZC5FdmVudD5cbiAgICAgICAgICAgICAgICAgPEZlZWQuTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0ncGVuY2lsJyAvPlxuICAgICAgICAgICAgICAgICA8L0ZlZWQuTGFiZWw+XG4gICAgICAgICAgICAgICAgIDxGZWVkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgPEZlZWQuRGF0ZT4yMDE3IC0gMjAyMzwvRmVlZC5EYXRlPlxuICAgICAgICAgICAgICAgICAgIDxGZWVkLlN1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgICBQTVAgMjA5OTE3MlxuICAgICAgICAgICAgICAgICAgIDwvRmVlZC5TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgIDxGZWVkLkV4dHJhIHRleHQ+XG4gICAgICAgICAgICAgICAgICAgUHJvamVjdCBNYW5hZ2VtZW50IEluc3RpdHV0ZVxuICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgRHViYWkgVUFFXG4gICAgICAgICAgICAgICAgICA8L0ZlZWQuRXh0cmE+XG4gICAgICAgICAgICAgICAgIDwvRmVlZC5Db250ZW50PlxuICAgICAgICAgICAgICAgPC9GZWVkLkV2ZW50PlxuICAgICAgICAgICAgIDwvRmVlZD5cbiAgICAgICAgICAgICA8RmVlZD5cbiAgICAgICAgICAgICAgPEZlZWQuRXZlbnQ+XG4gICAgICAgICAgICAgICAgPEZlZWQuTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdwZW5jaWwnIC8+XG4gICAgICAgICAgICAgICAgPC9GZWVkLkxhYmVsPlxuICAgICAgICAgICAgICAgIDxGZWVkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8RmVlZC5EYXRlPjIwMDkgLSAyMDExPC9GZWVkLkRhdGU+XG4gICAgICAgICAgICAgICAgICA8RmVlZC5TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICBNQkEsIE9wZXJhdGlvbiBNYW5hZ2VtZW50XG4gICAgICAgICAgICAgICAgICA8L0ZlZWQuU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgIDxGZWVkLkV4dHJhIHRleHQ+XG4gICAgICAgICAgICAgICAgICAgU01VXG4gICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICBEdWJhaSBVQUVcbiAgICAgICAgICAgICAgICAgPC9GZWVkLkV4dHJhPlxuICAgICAgICAgICAgICAgIDwvRmVlZC5Db250ZW50PlxuICAgICAgICAgICAgICA8L0ZlZWQuRXZlbnQ+XG4gICAgICAgICAgICA8L0ZlZWQ+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD0ncmlnaHQnIHdpZHRoPXs3fT5cblxuICAgICAgICAgICAgICAgIDxGZWVkPlxuICAgICAgICAgICAgICAgICA8RmVlZC5FdmVudD5cbiAgICAgICAgICAgICAgICAgICA8RmVlZC5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J3BlbmNpbCcgLz5cbiAgICAgICAgICAgICAgICAgICA8L0ZlZWQuTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgPEZlZWQuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgIDxGZWVkLkRhdGU+MTk4NyAtIDE5OTE8L0ZlZWQuRGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgIDxGZWVkLlN1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgICAgIEIuRSBFbGVjdHJvbmljc1xuICAgICAgICAgICAgICAgICAgICAgPC9GZWVkLlN1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgICA8RmVlZC5FeHRyYSB0ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIFNhdml0cmliYWkgUGh1bGUgUHVuZSBVbml2ZXJzaXR5XG4gICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICBQdW5lXG4gICAgICAgICAgICAgICAgICAgIDwvRmVlZC5FeHRyYT5cbiAgICAgICAgICAgICAgICAgICA8L0ZlZWQuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgPC9GZWVkLkV2ZW50PlxuICAgICAgICAgICAgICAgPC9GZWVkPlxuXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvU2VnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWR1Y2F0aW9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBEaXZpZGVyLFxuICBHcmlkLFxuICBIZWFkZXIsXG4gIEljb24sXG4gIExpc3QsXG4gIE1lbnUsXG4gIFNlZ21lbnQsXG4gIFNpZGViYXIsXG4gIFZpc2liaWxpdHksXG4gIERyb3Bkb3duLFxuICBGb3JtLFxuICBNZXNzYWdlXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0eyBpbml0IH0gZnJvbSAnZW1haWxqcy1jb20nO1xuaW1wb3J0IGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nO1xuaW1wb3J0IEVtYWlsVmFsaWRhdG9yIGZyb20gJ2VtYWlsLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBpc1ZhbGlkUGhvbmVOdW1iZXIgfSBmcm9tICdyZWFjdC1waG9uZS1udW1iZXItaW5wdXQnXG5cbmNvbnN0IEZvb3RlciA9ICgpID0+e1xuICBpbml0KFwidXNlcl9mVU11bkJGMEc1OU1ObjloVE9lUHBcIik7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZm9ybVN1Ym1pdHRlZCwgc2V0Rm9ybVN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmb3JtU3VibWl0U3VjY2Vzc2Z1bCwgc2V0Rm9ybVN1Ym1pdFN1Y2Nlc3NmdWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdmFsaWRFbWFpbCwgdmFsaWRhdGVFbWFpbF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3ZhbGlkUGhvbmUsIHZhbGlkYXRlUGhvbmVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCByZWNlaXZlckVtYWlsID0gXCJoYXJzaGJhbnNhbDMyMDAwQGdtYWlsLmNvbVwiO1xuICBjb25zdCB0ZW1wbGF0ZUlkID0gXCJ0ZW1wbGF0ZV9jeHJidmFnXCI7XG4gIGNvbnN0IHVzZXIgPSBcInVzZXJfZlVNdW5CRjBHNTlNTm45aFRPZVBwXCI7XG5cbiAgICBzZW5kRmVlZGJhY2soe1xuICAgICAgdGVtcGxhdGVJZCxcbiAgICAgIGVtYWlsLFxuICAgICAgcmVjZWl2ZXJFbWFpbCxcbiAgICAgIG5hbWUsXG4gICAgICBtZXNzYWdlLFxuICAgICAgdXNlcixcbiAgICB9KVxuXG4gICAgc2V0Rm9ybVN1Ym1pdHRlZCh0cnVlKVxuICB9XG5cbiAgY29uc3Qgc2VuZEZlZWRiYWNrID0gKHtcbiAgICB0ZW1wbGF0ZUlkLFxuICAgIHNlbmRlckVtYWlsLFxuICAgIHJlY2VpdmVyRW1haWwsXG4gICAgbmFtZSxcbiAgICBtZXNzYWdlLFxuICAgIHVzZXIsXG4gIH0pID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yTWVzc2FnZSgnJyk7XG4gICAgZW1haWxqc1xuICAgICAgLnNlbmQoXG4gICAgICAgIFwiZGVmYXVsdF9zZXJ2aWNlXCIsXG4gICAgICAgIHRlbXBsYXRlSWQsXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIHJlY2VpdmVyRW1haWwsXG4gICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfSxcbiAgICAgICAgdXNlclxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHNldEZvcm1TdWJtaXRTdWNjZXNzZnVsKHRydWUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtjb25zb2xlLmVycm9yKFwiRXJyb3I6IFwiLCBlcnIpO1xuICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgfSlcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldE5hbWUoJycpO1xuICAgICAgICBzZXRQaG9uZSgnJyk7XG4gICAgICAgIHNldE1lc3NhZ2UoJycpO1xuICAgICAgICBzZXRFbWFpbCgnJylcbiAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgfVxuXG4gIHJldHVybihcbiAgICA8U2VnbWVudCBpbnZlcnRlZCB2ZXJ0aWNhbCBzdHlsZT17eyBwYWRkaW5nVG9wOiAnNWVtJywgcGFkZGluZ1RvcDogJzJlbSd9fSA+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8R3JpZCBkaXZpZGVkIGludmVydGVkIHN0YWNrYWJsZT5cbiAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezl9ID5cbiAgICAgICAgICAgICAgPEhlYWRlciBpbnZlcnRlZCBhcz0naDEnIGNvbnRlbnQ9J0dldCBJbiBUb3VjaCcgLz5cbiAgICAgICAgICAgICAgPEZvcm0gaW52ZXJ0ZWQgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gZXJyb3I9eyEhZXJyb3JNZXNzYWdlfSA+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGZsdWlkIGxhYmVsPSdZb3VyIE5hbWUnXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NhbmplZXYgU2FoJ1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZSA9PiB7c2V0TmFtZShlLnRhcmdldC52YWx1ZSl9fVxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9IC8+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGZsdWlkIGxhYmVsPSdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nc2FuamVldi5zYWhAaWNsb3VkLmNvbSdcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRW1haWwoRW1haWxWYWxpZGF0b3IudmFsaWRhdGUoZS50YXJnZXQudmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3ZhbGlkRW1haWwgPyBmYWxzZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGluZzogJ2JlbG93J1xuICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH0gLz5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgZmx1aWQgbGFiZWw9J1Bob25lJ1xuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScrOTEgeHh4LXh4eC14eHh4J1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBob25lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlUGhvbmUoaXNWYWxpZFBob25lTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSA9PT0gdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dmFsaWRQaG9uZSA/IGZhbHNlIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgUGhvbmUgTnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRpbmc6ICdiZWxvdydcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bob25lfSAvPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uVGV4dEFyZWFcbiAgICAgICAgICAgICAgICAgICAgICBmbHVpZCBsYWJlbD0nTWVzc2FnZSdcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nV3JpdGUgYSBNZXNzYWdlLi4uJ1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX19XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX0gLz5cbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e2Vycm9yTWVzc2FnZX0gLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2xvYWRpbmd9IHR5cGU9J3N1Ym1pdCcgZGlzYWJsZWQgPSB7IXZhbGlkRW1haWwgfHwgIXZhbGlkUGhvbmV9ID5TZW5kIE1lc3NhZ2U8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICB7c3VjY2Vzcz9cIk1lc3NhZ2UgU2VudFwiOlwiXCJ9XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9IGZsb2F0ZWQ9J3JpZ2h0JyBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzNlbSAnIH19PlxuICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoMScgaW52ZXJ0ZWQ+XG4gICAgICAgICAgICAgICAgTXkgQ29udGFjdCBEZXRhaWxzXG4gICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICA8TGlzdCBzaXplPSdiaWcnIHN0eWxlPXt7IHBhZGRpbmc6ICcxZW0gMWVtJyAsfX0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT0nbWFya2VyJyAvPlxuICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5OeWF0aSBJcmlzLCBQdW5lLCBNYWhhcmFzaHRyYSA0MTEwMjg8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPSdtYWlsJyAvPlxuICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nbWFpbHRvOnNhbmplZXYuc2FoQGljbG91ZC5jb20nPnNhbmplZXYuc2FoQGljbG91ZC5jb208L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPSdsaW5rZWRpbicgLz5cbiAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zYW5qZWV2MTAnPlNhbmplZXYgU2FoPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgPERpdmlkZXJcbiAgICAgICAgICAgICAgICBhcz0naDQnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdoZWFkZXInXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgIGludmVydGVkXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnM2VtICcsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVhY2ggb3V0XG4gICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICAgIDxTZWdtZW50IGludmVydGVkIHRleHRBbGlnbj0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2FuamVldjEwJz48SWNvbiBuYW1lPSdsaW5rZWRpbicgc2l6ZT0nYmlnJyBzdHlsZT17e21hcmdpbkxlZnQ6ICcwLjVlbScgfX0gLz48L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nbWFpbHRvOnNhbmplZXYuc2FoQGljbG91ZC5jb20nPjxJY29uIG5hbWU9J21haWwnIHNpemU9J2JpZycgIHN0eWxlPXt7bWFyZ2luTGVmdDogJzAuNWVtJ319IC8+PC9hPlxuICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIGFzPSdoMidcbiAgICAgICAgICBjb250ZW50PSdDb3B5cmlnaHQgwqkgMjAyMSBBbGwgcmlnaHRzIHJlc2VydmVkJ1xuICAgICAgICAgIGludmVydGVkXG4gICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOicxZW0nLFxuICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICAnMi4yZW0nLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L1NlZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCAgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcy5qcydcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBEaXZpZGVyLFxuICBHcmlkLFxuICBIZWFkZXIsXG4gIEljb24sXG4gIEltYWdlLFxuICBMaXN0LFxuICBNZW51LFxuICBTZWdtZW50LFxuICBTaWRlYmFyLFxuICBWaXNpYmlsaXR5LFxuICBEcm9wZG93bixcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cblxuY2xhc3MgSGVhZGVyMSBleHRlbmRzIENvbXBvbmVudHtcblxuICBzdGF0ZSA9IHtcbiAgICBjdXJyZW50UGFnZTonJ1xuICB9XG5cblxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHsgY3VycmVudFBhZ2UgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UGFnZSk7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlZ21lbnRcbiAgICAgICAgICBpbnZlcnRlZFxuICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICcxZW0gMGVtJyB9fVxuICAgICAgICAgIHZlcnRpY2FsXG4gICAgICAgID5cbiAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgaW52ZXJ0ZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIHBvaW50aW5nPSdmYWxzZSdcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5PSdmYWxzZSdcbiAgICAgICAgICAgICAgc2l6ZT0nbGFyZ2UnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPScvJz5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtICBuYW1lPSdIb21lJyBhY3RpdmU9e2N1cnJlbnRQYWdlID09PSAnSG9tZSd9ID5cbiAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayByb3V0ZT0nL3Byb2plY3RzJyA+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSAgbmFtZT0nUHJvamVjdHMnICBhY3RpdmU9e2N1cnJlbnRQYWdlID09PSAnUHJvamVjdHMnfSAgID5cbiAgICAgICAgICAgICAgICAgIFByb2plY3RzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgcm91dGU9Jy9jb250YWN0JyA+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSAgbmFtZT0nQ29udGFjdCcgYWN0aXZlPXtjdXJyZW50UGFnZSA9PT0gJ0NvbnRhY3QnfSA+XG4gICAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBwb3NpdGlvbj0ncmlnaHQnPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHA6Ly93d3cuc2VtYW50aWMtdWkuY29tJz48SWNvbiAgbmFtZT0nZ2l0aHViJyBzaXplPSdiaWcnIHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcwLjJlbScgfX0vPjwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwOi8vd3d3LnNlbWFudGljLXVpLmNvbSc+PEljb24gbmFtZT0nbGlua2VkaW4nIHNpemU9J2JpZycgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzAuMmVtJyxtYXJnaW5MZWZ0OiAnMC41ZW0nIH19IC8+PC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J21haWx0bzpqYWNrQHNlbWFudGljLXVpLmNvbSc+PEljb24gbmFtZT0nbWFpbCcgc2l6ZT0nYmlnJyBzdHlsZT17eyBwYWRkaW5nVG9wOiAnMC4yZW0nICxtYXJnaW5MZWZ0OiAnMC41ZW0nfX0gLz48L2E+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICA8L1NlZ21lbnQ+XG4gICAgICA8L2Rpdj5cbiAgKTtcbn1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyMTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIERpdmlkZXIsXG4gIEdyaWQsXG4gIEhlYWRlcixcbiAgSWNvbixcbiAgSW1hZ2UsXG4gIExpc3QsXG4gIE1lbnUsXG4gIFNlZ21lbnQsXG4gIFNpZGViYXIsXG4gIFZpc2liaWxpdHksXG4gIERyb3Bkb3duLFxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuY29uc3QgSGVhZGVyMSA9ICgpID0+e1xuICByZXR1cm4oXG4gICAgPFNlZ21lbnRcbiAgICAgIGludmVydGVkXG4gICAgICB0ZXh0QWxpZ249J2NlbnRlcidcbiAgICAgIHN0eWxlPXt7bWluSGVpZ2h0OiA2MjAsIHBhZGRpbmc6ICcxZW0gMGVtJyB9fVxuICAgICAgdmVydGljYWxcbiAgICA+XG4gICAgPENvbnRhaW5lciB0ZXh0PlxuICAgICAgPEhlYWRlclxuICAgICAgICBhcz0naDEnXG4gICAgICAgIGNvbnRlbnQ9J0hlbGxvLCBJbSdcbiAgICAgICAgaW52ZXJ0ZWRcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBmb250U2l6ZTogICcyZW0nLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICAgICAgICBtYXJnaW5Ub3A6ICAnNmVtJyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8SGVhZGVyXG4gICAgICAgIGFzPSdoMidcbiAgICAgICAgY29udGVudD0nU2FuamVldiBTYWgnXG4gICAgICAgIGludmVydGVkXG5cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBmb250U2l6ZTonNGVtJyxcbiAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgICBtYXJnaW5Ub3A6ICAnMC4yZW0nLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxIZWFkZXJcbiAgICAgICAgYXM9J2g1J1xuICAgICAgICBjb250ZW50PSdBTkQgVEhJUyBJUyBNWSBSRVNVTUUnXG4gICAgICAgIGludmVydGVkXG5cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBmb250U2l6ZTonMWVtJyxcbiAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgICBtYXJnaW5Ub3A6ICAnMC41ZW0nLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1NlZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjE7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydHsgaW5pdCB9IGZyb20gJ2VtYWlsanMtY29tJztcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIGluaXQoXCJ1c2VyX2ZVTXVuQkYwRzU5TU5uOWhUT2VQcFwiKTtcbiAgcmV0dXJuIChcbiAgPENvbnRhaW5lciBmbHVpZD5cbiAgICA8SGVhZD5cbiAgICAgIDxsaW5rXG4gICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgIGhyZWY9XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMTIvc2VtYW50aWMubWluLmNzc1wiXG4gICAgICAgLz5cbiAgICAgPC9IZWFkPlxuICAgICA8SGVhZGVyLz5cbiAgICAgIDxkaXY+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIERpdmlkZXIsXG4gIEdyaWQsXG4gIEhlYWRlcixcbiAgSWNvbixcbiAgSW1hZ2UsXG4gIExpc3QsXG4gIE1lbnUsXG4gIFNlZ21lbnQsXG4gIFNpZGViYXIsXG4gIFZpc2liaWxpdHksXG4gIERyb3Bkb3duLFxuICBSYXRpbmdcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmNvbnN0IFNlcnZpY2VzID0gKCkgPT57XG4gIHJldHVybihcbiAgICA8U2VnbWVudCBzdHlsZT17eyBwYWRkaW5nOiAnOGVtIDBlbScgfX0gdmVydGljYWwgdGV4dEFsaWduPSdjZW50ZXInIGludmVydGVkPlxuICAgICAgPEhlYWRlciBhcz0naDEnIHN0eWxlPXt7IGZvbnRTaXplOiAnM2VtJywgbWFyZ2luQm90dG9tOicyZW0nLGZvbnRXZWlnaHQ6J2JvbGQnIH19PlxuICAgICAgICBNeSA8c3BhbiBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGQnfX0+U2VydmljZXM8L3NwYW4+XG4gICAgICA8L0hlYWRlcj5cblxuICAgICAgPEdyaWQgY29udGFpbmVyIHN0YWNrYWJsZSB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnIGNvbHVtbnM9ezN9IGRpdmlkZWQ+XG4gICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8Q2FyZCAgY2VudGVyZWQ+XG4gICAgICAgICAgICAgIDxJbWFnZSAgc3R5bGU9e3t3aWR0aDogJ2F1dG8nLCBoZWlnaHQ6ICdhdXRvJ319ICBzcmM9J2h0dHBzOi8vZDU3NDM5d2xxeDN2by5jbG91ZGZyb250Lm5ldC9pYmxvY2svNTc3LzU3NzE4ZTNmOTM3NDI1NjkyM2FhNDM4MmM1YmNjNjczL2I3M2VlOThhNzBlMWVjZWZiNzdiNDk5NmYwNjdhMmZhLnBuZycgd3JhcHBlZCB1aT17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPlByb2plY3QgTWFuYWdlbWVudDwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YT5cbiAgICAgICAgICAgICAgICAgICA8UmF0aW5nIGljb249J3N0YXInIGRlZmF1bHRSYXRpbmc9ezV9IG1heFJhdGluZz17NX0gLz5cbiAgICAgICAgICAgICAgICA8L0NhcmQuTWV0YT5cbiAgICAgICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICBBIHByb2plY3QgbWFuYWdlciBpcyBvbmUgd2hvIGFjdHMgYXMgYSBnbHVlIGFuZCBrZWVwcyB0aGluZ3MgdG9nZXRoZXIuXG4gICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J3VzZXInIC8+XG4gICAgICAgICAgICAgICAgICAyMlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8Q2FyZCBjZW50ZXJlZD5cbiAgICAgICAgICAgICAgPEltYWdlIHNpemU9J21lZGl1bScgc3JjPSdodHRwczovL3d3dy5pbmR1c3RyaWFsdGhpbmtpbmcuY29tL21lZGlhLzEwODYvZnVsbGNvbnN1bHRhbmN5LmpwZycgd3JhcHBlZCB1aT17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPkNvbnN1bHRhbmN5PC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgICAgIDxSYXRpbmcgaWNvbj0nc3RhcicgZGVmYXVsdFJhdGluZz17NH0gbWF4UmF0aW5nPXs1fSAvPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIEFpbSB0byBwcm92aWRlIENvbnN1bHRhbmN5IHNlcnZpY2VzIGluIGEgZmxleGlibGUgd2F5IHdpdGggb3B0aW9ucyB0aGF0IG1lZXQgdGhlIGluZGl2aWR1YWwgY3VzdG9tZXIgcmVxdWlyZW1lbnRzLlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSd1c2VyJyAvPlxuICAgICAgICAgICAgICAgICAgMjJcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPENhcmQgY2VudGVyZWQ+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9J2h0dHBzOi8vYWttLWltZy1hLWluLnRvc3NodWIuY29tL2luZGlhdG9kYXkvaW1hZ2VzL3N0b3J5LzIwMjAwOC9zdG9ja3ZhdWx0LWZpeGluZy10aGUtbGlnaHQtLS0uanBlZycgd3JhcHBlZCB1aT17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPkVuZ2luZWVyaW5nIFNvbHV0aW9uczwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YT5cbiAgICAgICAgICAgICAgICAgIDxSYXRpbmcgaWNvbj0nc3RhcicgZGVmYXVsdFJhdGluZz17NH0gbWF4UmF0aW5nPXs1fSAvPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgQWltIHRvIHRha2UgeW91ciB2aXNpb24gYW5kIG5lY2Vzc2FyeSByZXF1aXJlbWVudHMsIHRoZW4gdHJhbnNmb3JtIHRoZW0gaW50byBoZXJlIGFuZCBub3cgcHJvZHVjdHMuXG4gICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J3VzZXInIC8+XG4gICAgICAgICAgICAgICAgICAyMlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1NlZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgRWR1Y2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvRWR1Y2F0aW9uJ1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQWJvdXQnXG5pbXBvcnQgU2VydmljZXMgZnJvbSAnLi4vY29tcG9uZW50cy9TZXJ2aWNlcydcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgSGVhZGVyMSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcjEnXG5cbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBEaXZpZGVyLFxuICBHcmlkLFxuICBIZWFkZXIsXG4gIEljb24sXG4gIEltYWdlLFxuICBMaXN0LFxuICBNZW51LFxuICBTZWdtZW50LFxuICBTaWRlYmFyLFxuICBWaXNpYmlsaXR5LFxuICBEcm9wZG93bixcbiAgRmVlZFxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuXG5mdW5jdGlvbiBBcHAoKSB7XG5cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgPEhlYWRlcjEvPlxuICAgICAgICA8QWJvdXQvPlxuICAgICAgICA8U2VydmljZXMvPlxuICAgICAgICA8RWR1Y2F0aW9uLz5cbiAgICAgICAgPEZvb3Rlci8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJ25leHQtcm91dGVzJykoKTtcblxucm91dGVzXG4gIC5hZGQoJy9wcm9qZWN0cy86YWRkcmVzcycsICcvcHJvamVjdHMvc2hvdycpXG5cblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbWFpbC12YWxpZGF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1haWxqcy1jb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBob25lLW51bWJlci1pbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9