/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(0);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = components_lib;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(29);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_menu_component__ = __webpack_require__(11);

class Screens {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Screens;

Screens.declarations = [
    __WEBPACK_IMPORTED_MODULE_0__menu_menu_component__["a" /* MenuComponent */]
];
Screens.mapping = {};
//# sourceMappingURL=app.screens.js.map

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hooks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let Hooks = class Hooks {
    constructor() {
    }
    getServerInitParams() {
        return Promise.resolve({});
    }
    initializeUI(params) {
    }
    overrideStateHandler(oldScreen, newScreen, data) {
        return newScreen;
    }
};
Hooks = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Hooks);

//# sourceMappingURL=app.hooks.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module__ = __webpack_require__(8);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(7))(312);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = vendors_lib;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_smartux_client__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_screens__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_hooks__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicApp"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* ClientApp */]].concat(__WEBPACK_IMPORTED_MODULE_4__app_screens__["a" /* Screens */].declarations),
        entryComponents: __WEBPACK_IMPORTED_MODULE_4__app_screens__["a" /* Screens */].declarations,
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* ClientApp */], __WEBPACK_IMPORTED_MODULE_2_smartux_client__["config"].ionic),
            __WEBPACK_IMPORTED_MODULE_2_smartux_client__["SmartUxClient"],
            __WEBPACK_IMPORTED_MODULE_3_components__["ComponentsModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__app_hooks__["a" /* Hooks */]
        ]
    })
], AppModule);

//# sourceMappingURL=module.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(7);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(13);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let MenuComponent = class MenuComponent {
};
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'menu-component',template:/*ion-inline-start:"/home/ad1/PowWow6/applications/Natalia/client/src/app/menu/menu.html"*/'<ion-menu id="menu-component" [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="outer-content">\n  </ion-content>\n\n</ion-menu>\n<ion-nav #content></ion-nav>\n\n'/*ion-inline-end:"/home/ad1/PowWow6/applications/Natalia/client/src/app/menu/menu.html"*/
    })
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_screens__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mocks_index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mocks_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mocks_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_hooks__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_smartux_client__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





let ClientApp = class ClientApp {
    constructor(bootstrap, hooks) {
        bootstrap(hooks, __WEBPACK_IMPORTED_MODULE_1__app_screens__["a" /* Screens */].mapping, __WEBPACK_IMPORTED_MODULE_2_mocks_index__);
    }
};
ClientApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/ad1/PowWow6/applications/Natalia/client/src/app/app.html"*/'<menu-component></menu-component>\n<ion-nav #nav></ion-nav>\n'/*ion-inline-end:"/home/ad1/PowWow6/applications/Natalia/client/src/app/app.html"*/
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4_smartux_client__["Bootstrap"])),
    __metadata("design:paramtypes", [Function, __WEBPACK_IMPORTED_MODULE_3__app_hooks__["a" /* Hooks */]])
], ClientApp);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports) {

//# sourceMappingURL=index.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map