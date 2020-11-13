(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Angular\Interview Tasks\DashNinja-task\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1OO+":
    /*!*******************************************************************!*\
      !*** ./src/app/client/client-content/client-content.component.ts ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function OO(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! @angular/router */
      "tyNb")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, i0, i1) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.ClientContentComponent = void 0;

        var ClientContentComponent = /*#__PURE__*/function () {
          function ClientContentComponent() {
            _classCallCheck(this, ClientContentComponent);
          }

          _createClass(ClientContentComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ClientContentComponent;
        }();

        exports.ClientContentComponent = ClientContentComponent;

        ClientContentComponent.ɵfac = function ClientContentComponent_Factory(t) {
          return new (t || ClientContentComponent)();
        };

        ClientContentComponent.ɵcmp = i0.ɵɵdefineComponent({
          type: ClientContentComponent,
          selectors: [["app-client-content"]],
          decls: 19,
          vars: 0,
          consts: [[1, "nav", "nav-tabs", "nav-justified", "mt-4"], ["routerLinkActive", "active", 1, "nav-item", "content-bar"], ["routerLink", "/profile", 1, "waves-effect"], [1, "fas", "fa-user"], [1, "nav-item", "content-bar"], ["routerLink", "authorizations", "routerLinkActive", "active", 1, "waves-effect"], [1, "fas", "fa-key"], ["routerLink", "cabinate", "routerLinkActive", "active", 1, "waves-effect"], [1, "fas", "fa-server"], ["routerLink", "schedule", "routerLinkActive", "active", 1, "waves-effect"], [1, "far", "fa-calendar-alt"], [1, "tab-content", "card"]],
          template: function ClientContentComponent_Template(rf, ctx) {
            if (rf & 1) {
              i0.ɵɵelementStart(0, "ul", 0);
              i0.ɵɵelementStart(1, "li", 1);
              i0.ɵɵelementStart(2, "a", 2);
              i0.ɵɵelement(3, "i", 3);
              i0.ɵɵtext(4, " Profile ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(5, "li", 4);
              i0.ɵɵelementStart(6, "a", 5);
              i0.ɵɵelement(7, "i", 6);
              i0.ɵɵtext(8, " Authorizations ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(9, "li", 4);
              i0.ɵɵelementStart(10, "a", 7);
              i0.ɵɵelement(11, "i", 8);
              i0.ɵɵtext(12, " Cabinate ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(13, "li", 4);
              i0.ɵɵelementStart(14, "a", 9);
              i0.ɵɵelement(15, "i", 10);
              i0.ɵɵtext(16, " Schedule ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(17, "div", 11);
              i0.ɵɵelement(18, "router-outlet");
              i0.ɵɵelementEnd();
            }
          },
          directives: [i1.RouterLinkActive, i1.RouterLinkWithHref, i1.RouterOutlet],
          styles: [".content-bar[_ngcontent-%COMP%] {\n  background-color: #f2fbff;\n  color: #0e0e0e;\n  margin: 0px auto;\n  padding: 15px 5px;\n}\n\n.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-right: #2b353f;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #c2e1ff;\n  color: #ffffff;\n  margin: 0px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC1jb250ZW50L2NsaWVudC1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9jbGllbnQvY2xpZW50LWNvbnRlbnQvY2xpZW50LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZmJmZjtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDE0LCAxNCk7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweCA1cHg7XHJcbn1cclxuLmNvbnRlbnQgdWwgbGkge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAjMmIzNTNmO1xyXG59XHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyZTFmZjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG4vLyAuY29udGVudC1iYXI6aG92ZXIge1xyXG4vLyBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJlMWZmO1xyXG4vLyBjb2xvcjogI2ZmZmZmZjtcclxuLy8gbWFyZ2luOiAwcHggYXV0bztcclxuXHJcbi8vIH0iXX0= */"]
        });
        /*@__PURE__*/

        (function () {
          i0.ɵsetClassMetadata(ClientContentComponent, [{
            type: core_1.Component,
            args: [{
              selector: 'app-client-content',
              templateUrl: './client-content.component.html',
              styleUrls: ['./client-content.component.scss']
            }]
          }], function () {
            return [];
          }, null);
        })();
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function AytR(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.environment = void 0;
        exports.environment = {
          production: false
        };
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "P8gj":
    /*!*************************************************************!*\
      !*** ./src/app/client/client-home/client-home.component.ts ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function P8gj(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! ../client-filter/client-filter.component */
      "qaHB"), __webpack_require__(
      /*! ../client-content/client-content.component */
      "1OO+")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, i0, i1, i2) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.ClientHomeComponent = void 0;

        var ClientHomeComponent = /*#__PURE__*/function () {
          function ClientHomeComponent() {
            _classCallCheck(this, ClientHomeComponent);
          }

          _createClass(ClientHomeComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ClientHomeComponent;
        }();

        exports.ClientHomeComponent = ClientHomeComponent;

        ClientHomeComponent.ɵfac = function ClientHomeComponent_Factory(t) {
          return new (t || ClientHomeComponent)();
        };

        ClientHomeComponent.ɵcmp = i0.ɵɵdefineComponent({
          type: ClientHomeComponent,
          selectors: [["app-client-home"]],
          decls: 5,
          vars: 0,
          consts: [[1, "row", 2, "margin-right", "0"], [1, "col-md-4"], [1, "col-md-8"]],
          template: function ClientHomeComponent_Template(rf, ctx) {
            if (rf & 1) {
              i0.ɵɵelementStart(0, "div", 0);
              i0.ɵɵelementStart(1, "div", 1);
              i0.ɵɵelement(2, "app-client-filter");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(3, "div", 2);
              i0.ɵɵelement(4, "app-client-content");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
            }
          },
          directives: [i1.ClientFilterComponent, i2.ClientContentComponent],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQtaG9tZS9jbGllbnQtaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
        });
        /*@__PURE__*/

        (function () {
          i0.ɵsetClassMetadata(ClientHomeComponent, [{
            type: core_1.Component,
            args: [{
              selector: 'app-client-home',
              templateUrl: './client-home.component.html',
              styleUrls: ['./client-home.component.scss']
            }]
          }], function () {
            return [];
          }, null);
        })();
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! no static exports found */

    /***/
    function Sy1n(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! ./header/header.component */
      "fECr"), __webpack_require__(
      /*! @angular/router */
      "tyNb")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, i0, i1, i2) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.AppComponent = void 0;

        var AppComponent = function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'DashNinja - Task';
        };

        exports.AppComponent = AppComponent;

        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)();
        };

        AppComponent.ɵcmp = i0.ɵɵdefineComponent({
          type: AppComponent,
          selectors: [["app-root"]],
          decls: 2,
          vars: 0,
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              i0.ɵɵelement(0, "app-header");
              i0.ɵɵelement(1, "router-outlet");
            }
          },
          directives: [i1.HeaderComponent, i2.RouterOutlet],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
        });
        /*@__PURE__*/

        (function () {
          i0.ɵsetClassMetadata(AppComponent, [{
            type: core_1.Component,
            args: [{
              selector: 'app-root',
              templateUrl: './app.component.html',
              styleUrls: ['./app.component.scss']
            }]
          }], null, null);
        })();
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! no static exports found */

    /***/
    function ZAI4(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1"), __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws"), __webpack_require__(
      /*! ./app.component */
      "Sy1n"), __webpack_require__(
      /*! angular-bootstrap-md */
      "dbUT"), __webpack_require__(
      /*! @angular/forms */
      "3Pt+"), __webpack_require__(
      /*! ./header/header.component */
      "fECr"), __webpack_require__(
      /*! ./app-routing.module */
      "vY5A"), __webpack_require__(
      /*! ./client/client.module */
      "kk3Z"), __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! angular-bootstrap-md */
      "dbUT")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, platform_browser_1, core_1, animations_1, app_component_1, angular_bootstrap_md_1, forms_1, header_component_1, app_routing_module_1, client_module_1, i0, i1) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.AppModule = void 0;

        var AppModule = function AppModule() {
          _classCallCheck(this, AppModule);
        };

        exports.AppModule = AppModule;
        AppModule.ɵmod = i0.ɵɵdefineNgModule({
          type: AppModule,
          bootstrap: [app_component_1.AppComponent]
        });
        AppModule.ɵinj = i0.ɵɵdefineInjector({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          providers: [],
          imports: [[platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, animations_1.BrowserAnimationsModule, angular_bootstrap_md_1.MDBBootstrapModule.forRoot(), forms_1.FormsModule, client_module_1.ClientModule]]
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, {
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent],
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, animations_1.BrowserAnimationsModule, i1.MDBRootModule, forms_1.FormsModule, client_module_1.ClientModule]
          });
        })();
        /*@__PURE__*/


        (function () {
          i0.ɵsetClassMetadata(AppModule, [{
            type: core_1.NgModule,
            args: [{
              declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent],
              imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, animations_1.BrowserAnimationsModule, angular_bootstrap_md_1.MDBBootstrapModule.forRoot(), forms_1.FormsModule, client_module_1.ClientModule],
              providers: [],
              bootstrap: [app_component_1.AppComponent]
            }]
          }], null, null);
        })();
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      /***/
    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function fECr(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! angular-bootstrap-md */
      "dbUT"), __webpack_require__(
      /*! @angular/router */
      "tyNb")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, i0, i1, i2) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.HeaderComponent = void 0;

        function HeaderComponent_div_10_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 19);
            i0.ɵɵelementStart(1, "a", 20);
            i0.ɵɵtext(2, "Staff");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "a", 20);
            i0.ɵɵtext(4, "Office Staff");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "a", 20);
            i0.ɵɵtext(6, "Primary Staff");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "div", 18);
            i0.ɵɵelementStart(8, "a", 20);
            i0.ɵɵtext(9, "Secondary Staff");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
          }
        }

        function HeaderComponent_div_15_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 19);
            i0.ɵɵelementStart(1, "a", 21);
            i0.ɵɵtext(2, "Client Page");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "a", 22);
            i0.ɵɵtext(4, "Add Client");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "a", 20);
            i0.ɵɵtext(6, "Other Clients");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "div", 18);
            i0.ɵɵelementStart(8, "a", 20);
            i0.ɵɵtext(9, "Reliable Clients");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
          }
        }

        function HeaderComponent_div_20_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 19);
            i0.ɵɵelementStart(1, "a", 20);
            i0.ɵɵtext(2, "Payer");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "a", 20);
            i0.ɵɵtext(4, "Primary Payer");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "a", 20);
            i0.ɵɵtext(6, "Secondary Payer");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "div", 18);
            i0.ɵɵelementStart(8, "a", 20);
            i0.ɵɵtext(9, "Valuable Payers");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
          }
        }

        function HeaderComponent_div_25_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 19);
            i0.ɵɵelementStart(1, "a", 20);
            i0.ɵɵtext(2, "Billing");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "a", 20);
            i0.ɵɵtext(4, "Client Billings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "a", 20);
            i0.ɵɵtext(6, "Customer Billings");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "div", 18);
            i0.ɵɵelementStart(8, "a", 20);
            i0.ɵɵtext(9, "Total Billings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
          }
        }

        var HeaderComponent = /*#__PURE__*/function () {
          function HeaderComponent() {
            _classCallCheck(this, HeaderComponent);
          }

          _createClass(HeaderComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return HeaderComponent;
        }();

        exports.HeaderComponent = HeaderComponent;

        HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
          return new (t || HeaderComponent)();
        };

        HeaderComponent.ɵcmp = i0.ɵɵdefineComponent({
          type: HeaderComponent,
          selectors: [["app-header"]],
          decls: 60,
          vars: 1,
          consts: [["SideClass", "navbar navbar-expand-lg navbar-dark unique-color", 3, "containerInside"], ["href", "#", 1, "navbar-brand", "ml-5"], [1, "navbar-nav", "ml-5", "mr-auto"], ["dropdown", "", 1, "nav-item", "dropdown"], ["dropdownToggle", "", "mdbWavesEffect", "", "type", "button", "mdbWavesEffect", "", 1, "nav-link", "dropdown-toggle", "waves-light"], [1, "caret"], ["class", "dropdown-menu dropdown dropdown-primary", "role", "menu", 4, "dropdownMenu"], [1, "nav-item"], ["mdbWavesEffect", "", 1, "nav-link", "waves-light"], [1, "navbar-nav", "ml-auto", "nav-flex-icons"], [1, "nav-link"], [1, "fas", "fa-bell"], [1, "fas", "fa-envelope"], ["mdbDropdown", "", 1, "btn-group"], ["fas", "", "icon", "user", "mdbDropdownToggle", ""], [1, "fas", "fa-caret-down"], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-primary"], ["href", "#", 1, "dropdown-item"], [1, "divider", "dropdown-divider"], ["role", "menu", 1, "dropdown-menu", "dropdown", "dropdown-primary"], ["mdbWavesEffect", "", "href", "#", 1, "dropdown-item", "waves-light"], ["mdbWavesEffect", "", "routerLink", "client", 1, "dropdown-item", "waves-light"], ["mdbWavesEffect", "", "routerLink", "add", 1, "dropdown-item", "waves-light"]],
          template: function HeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
              i0.ɵɵelementStart(0, "mdb-navbar", 0);
              i0.ɵɵelementStart(1, "mdb-navbar-brand");
              i0.ɵɵelementStart(2, "a", 1);
              i0.ɵɵtext(3, "ALOHA ABA");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(4, "links");
              i0.ɵɵelementStart(5, "ul", 2);
              i0.ɵɵelementStart(6, "li", 3);
              i0.ɵɵelementStart(7, "a", 4);
              i0.ɵɵtext(8, " STAFF");
              i0.ɵɵelement(9, "span", 5);
              i0.ɵɵelementEnd();
              i0.ɵɵtemplate(10, HeaderComponent_div_10_Template, 10, 0, "div", 6);
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(11, "li", 3);
              i0.ɵɵelementStart(12, "a", 4);
              i0.ɵɵtext(13, " CLIENT");
              i0.ɵɵelement(14, "span", 5);
              i0.ɵɵelementEnd();
              i0.ɵɵtemplate(15, HeaderComponent_div_15_Template, 10, 0, "div", 6);
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(16, "li", 3);
              i0.ɵɵelementStart(17, "a", 4);
              i0.ɵɵtext(18, " PAYER");
              i0.ɵɵelement(19, "span", 5);
              i0.ɵɵelementEnd();
              i0.ɵɵtemplate(20, HeaderComponent_div_20_Template, 10, 0, "div", 6);
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(21, "li", 3);
              i0.ɵɵelementStart(22, "a", 4);
              i0.ɵɵtext(23, " BILLING");
              i0.ɵɵelement(24, "span", 5);
              i0.ɵɵelementEnd();
              i0.ɵɵtemplate(25, HeaderComponent_div_25_Template, 10, 0, "div", 6);
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(26, "li", 7);
              i0.ɵɵelementStart(27, "a", 8);
              i0.ɵɵtext(28, "PAYROLL");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(29, "li", 7);
              i0.ɵɵelementStart(30, "a", 8);
              i0.ɵɵtext(31, "REPORTS");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(32, "li", 7);
              i0.ɵɵelementStart(33, "a", 8);
              i0.ɵɵtext(34, "SETTINGS");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(35, "li", 7);
              i0.ɵɵelementStart(36, "a", 8);
              i0.ɵɵtext(37, "ACTIVITY");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(38, "ul", 9);
              i0.ɵɵelementStart(39, "li", 7);
              i0.ɵɵelementStart(40, "a", 10);
              i0.ɵɵelement(41, "i", 11);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(42, "li", 7);
              i0.ɵɵelementStart(43, "a", 10);
              i0.ɵɵelement(44, "i", 12);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(45, "li", 7);
              i0.ɵɵelementStart(46, "a", 10);
              i0.ɵɵelementStart(47, "div", 13);
              i0.ɵɵelement(48, "mdb-icon", 14);
              i0.ɵɵelement(49, "i", 15);
              i0.ɵɵelementStart(50, "div", 16);
              i0.ɵɵelementStart(51, "a", 17);
              i0.ɵɵtext(52, "Action");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(53, "a", 17);
              i0.ɵɵtext(54, "Another action");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(55, "a", 17);
              i0.ɵɵtext(56, "Something else here");
              i0.ɵɵelementEnd();
              i0.ɵɵelement(57, "div", 18);
              i0.ɵɵelementStart(58, "a", 17);
              i0.ɵɵtext(59, "Separated link");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
            }

            if (rf & 2) {
              i0.ɵɵproperty("containerInside", false);
            }
          },
          directives: [i1.NavbarComponent, i1.LogoComponent, i1.LinksComponent, i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.WavesDirective, i1.BsDropdownMenuDirective, i1.MdbIconComponent, i1.FasDirective, i2.RouterLinkWithHref],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
        });
        /*@__PURE__*/

        (function () {
          i0.ɵsetClassMetadata(HeaderComponent, [{
            type: core_1.Component,
            args: [{
              selector: 'app-header',
              templateUrl: './header.component.html',
              styleUrls: ['./header.component.scss']
            }]
          }], function () {
            return [];
          }, null);
        })();
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      /***/
    },

    /***/
    "gNnr":
    /*!***********************************************************!*\
      !*** ./src/app/client/client-add/client-add.component.ts ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function gNnr(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! @angular/forms */
      "3Pt+"), __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt"), __webpack_require__(
      /*! @angular/material/radio */
      "QibW"), __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm"), __webpack_require__(
      /*! @angular/material/card */
      "Wp6s"), __webpack_require__(
      /*! @angular/router */
      "tyNb")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, forms_1, i0, i1, i2, i3, i4, i5) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.ClientAddComponent = void 0;

        var ClientAddComponent = /*#__PURE__*/function () {
          function ClientAddComponent() {
            _classCallCheck(this, ClientAddComponent);

            this.fname = new forms_1.FormControl('', [forms_1.Validators.required]);
            this.mname = new forms_1.FormControl('', [forms_1.Validators.required]);
            this.lname = new forms_1.FormControl('', [forms_1.Validators.required]);
            this.office = new forms_1.FormControl('', [forms_1.Validators.required]);
            this.street = new forms_1.FormControl('', [forms_1.Validators.required]);
            this.city = new forms_1.FormControl('', [forms_1.Validators.required]);
          }

          _createClass(ClientAddComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ClientAddComponent;
        }();

        exports.ClientAddComponent = ClientAddComponent;

        ClientAddComponent.ɵfac = function ClientAddComponent_Factory(t) {
          return new (t || ClientAddComponent)();
        };

        ClientAddComponent.ɵcmp = i0.ɵɵdefineComponent({
          type: ClientAddComponent,
          selectors: [["app-client-add"]],
          decls: 148,
          vars: 0,
          consts: [[1, "bg-title"], [1, "container-fluid"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], [1, "row", "mb-4"], ["title", "profile image", "src", "assets/images/profile-user.png", 1, "img-circle", "img-responsive"], [1, "text-center"], ["href", ""], [1, "col-md-12"], [1, "form-group"], [1, ""], ["id", "fname", "name", "fname", "placeholder", "First Name", "type", "text", 1, "form-control", "here"], ["id", "mname", "name", "mname", "placeholder", "Middle Name", "type", "text", 1, "form-control", "here"], ["id", "lname", "name", "lname", "placeholder", "Last Name", "required", "required", "type", "text", 1, "form-control", "here"], ["id", "alias", "name", "alias", "placeholder", "Alias", "required", "required", "type", "text", 1, "form-control", "here"], ["id", "office", "name", "office", "placeholder", "Office", "required", "required", "type", "text", 1, "form-control", "here"], ["id", "dob", "name", "dob", "placeholder", "Date of Birth", "required", "required", "type", "text", 1, "form-control", "here"], [1, "container"], [1, "title-sm", "col-md-6"], [1, "gender-card", "col-md-6"], ["aria-label", "Select an option"], ["value", "1"], ["value", "2"], [1, "service", "col-md-6"], [1, "status", "col-md-6"], [1, "mb-4"], ["id", "street", "name", "street", "placeholder", "Street", "type", "text", 1, "form-control", "here"], ["id", "city", "name", "city", "placeholder", "City", "type", "text", 1, "form-control", "here"], [1, "form-group", "ml-3"], ["id", "select", "name", "select", 1, "custom-select"], ["value", "..."], ["id", "Zcode", "name", "zcode", "placeholder", "Zip Code", "type", "text", 1, "form-control", "here"], ["id", "notes", "name", "notes", "placeholder", "Address Notes", "type", "text", 1, "form-control", "here"], ["id", "pn", "name", "pn", "placeholder", "Phone Number", "type", "text", 1, "form-control", "here"], ["id", "select1", "name", "select", 1, "custom-select"], ["id", "pn1", "name", "pn1", "placeholder", "Phone Number", "type", "text", 1, "form-control", "here"], ["id", "select2", "name", "select", 1, "custom-select"], ["id", "pn2", "name", "pn2", "placeholder", "Phone Number", "type", "text", 1, "form-control", "here"], ["id", "select3", "name", "select", 1, "custom-select"], ["id", "pn3", "name", "pn3", "placeholder", "Phone Number", "type", "text", 1, "form-control", "here"], ["id", "email", "name", "email", "placeholder", "Email Address", "required", "required", "type", "text", 1, "form-control", "here"], ["id", "email2", "name", "email2", "placeholder", "Email Address 2", "required", "required", "type", "text", 1, "form-control", "here"], [1, "float-right"], ["routerLink", "/profile", 1, "btn", "btn-primary", "mr-4", "mb-4"], ["routerLink", "/profile", 1, "btn", "btn-secondary", "mr-4", "mb-4"]],
          template: function ClientAddComponent_Template(rf, ctx) {
            if (rf & 1) {
              i0.ɵɵelementStart(0, "h3", 0);
              i0.ɵɵtext(1, "Add Client");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(2, "div", 1);
              i0.ɵɵelementStart(3, "div", 2);
              i0.ɵɵelementStart(4, "div", 3);
              i0.ɵɵelementStart(5, "mat-panel-title", 4);
              i0.ɵɵelementStart(6, "strong");
              i0.ɵɵtext(7, "Personal Info");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(8, "div", 5);
              i0.ɵɵelementStart(9, "div", 3);
              i0.ɵɵelementStart(10, "h4");
              i0.ɵɵtext(11, "Avatar");
              i0.ɵɵelementEnd();
              i0.ɵɵelement(12, "img", 6);
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(13, "div", 3);
              i0.ɵɵelement(14, "br");
              i0.ɵɵelement(15, "br");
              i0.ɵɵelementStart(16, "ul");
              i0.ɵɵelementStart(17, "li", 7);
              i0.ɵɵelementStart(18, "a", 8);
              i0.ɵɵtext(19, "Upload a Photo ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(20, "li", 7);
              i0.ɵɵtext(21, " From your Computer");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelement(22, "hr");
              i0.ɵɵelementStart(23, "ul");
              i0.ɵɵelementStart(24, "li", 7);
              i0.ɵɵelementStart(25, "a", 8);
              i0.ɵɵtext(26, "Take Photo");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(27, "li", 7);
              i0.ɵɵtext(28, "With your webcam");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(29, "div", 2);
              i0.ɵɵelementStart(30, "div", 9);
              i0.ɵɵelementStart(31, "form");
              i0.ɵɵelementStart(32, "div", 10);
              i0.ɵɵelementStart(33, "div", 11);
              i0.ɵɵelement(34, "input", 12);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(35, "div", 10);
              i0.ɵɵelementStart(36, "div", 11);
              i0.ɵɵelement(37, "input", 13);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(38, "div", 10);
              i0.ɵɵelementStart(39, "div", 11);
              i0.ɵɵelement(40, "input", 14);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(41, "div", 10);
              i0.ɵɵelementStart(42, "div", 11);
              i0.ɵɵelement(43, "input", 15);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(44, "div", 10);
              i0.ɵɵelementStart(45, "div", 11);
              i0.ɵɵelement(46, "input", 16);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(47, "div", 10);
              i0.ɵɵelementStart(48, "div", 11);
              i0.ɵɵelement(49, "input", 17);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(50, "div", 18);
              i0.ɵɵelementStart(51, "div", 2);
              i0.ɵɵelementStart(52, "div", 19);
              i0.ɵɵtext(53, " Gender : ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(54, "div", 20);
              i0.ɵɵelementStart(55, "mat-radio-group", 21);
              i0.ɵɵelementStart(56, "mat-radio-button", 22);
              i0.ɵɵtext(57, "Male \xA0");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(58, "mat-radio-button", 23);
              i0.ɵɵtext(59, "Female");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(60, "div", 2);
              i0.ɵɵelementStart(61, "div", 19);
              i0.ɵɵtext(62, " Service Provider : ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(63, "div", 24);
              i0.ɵɵtext(64, " No ");
              i0.ɵɵelementStart(65, "mat-slide-toggle");
              i0.ɵɵtext(66, "Yes");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(67, "div", 2);
              i0.ɵɵelementStart(68, "div", 19);
              i0.ɵɵtext(69, " Status : ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(70, "div", 25);
              i0.ɵɵtext(71, " Inactive ");
              i0.ɵɵelementStart(72, "mat-slide-toggle");
              i0.ɵɵtext(73, "Active");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(74, "div", 3);
              i0.ɵɵelementStart(75, "mat-panel-title", 26);
              i0.ɵɵelementStart(76, "strong");
              i0.ɵɵtext(77, " Address Info ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(78, "div", 10);
              i0.ɵɵelementStart(79, "div", 11);
              i0.ɵɵelement(80, "input", 27);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(81, "div", 10);
              i0.ɵɵelementStart(82, "div", 11);
              i0.ɵɵelement(83, "input", 28);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(84, "div", 2);
              i0.ɵɵelementStart(85, "div", 29);
              i0.ɵɵelementStart(86, "div", 11);
              i0.ɵɵelementStart(87, "select", 30);
              i0.ɵɵelementStart(88, "option", 31);
              i0.ɵɵtext(89, "State");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(90, "div", 29);
              i0.ɵɵelementStart(91, "div", 11);
              i0.ɵɵelement(92, "input", 32);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(93, "div", 10);
              i0.ɵɵelementStart(94, "div", 11);
              i0.ɵɵelement(95, "input", 33);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(96, "mat-panel-title", 4);
              i0.ɵɵelementStart(97, "strong");
              i0.ɵɵtext(98, "Contact Info");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(99, "div", 2);
              i0.ɵɵelementStart(100, "div", 29);
              i0.ɵɵelementStart(101, "div", 11);
              i0.ɵɵelementStart(102, "select", 30);
              i0.ɵɵelementStart(103, "option", 31);
              i0.ɵɵtext(104, "Select");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(105, "div", 29);
              i0.ɵɵelementStart(106, "div", 11);
              i0.ɵɵelement(107, "input", 34);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(108, "div", 2);
              i0.ɵɵelementStart(109, "div", 29);
              i0.ɵɵelementStart(110, "div", 11);
              i0.ɵɵelementStart(111, "select", 35);
              i0.ɵɵelementStart(112, "option", 31);
              i0.ɵɵtext(113, "Select");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(114, "div", 29);
              i0.ɵɵelementStart(115, "div", 11);
              i0.ɵɵelement(116, "input", 36);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(117, "div", 2);
              i0.ɵɵelementStart(118, "div", 29);
              i0.ɵɵelementStart(119, "div", 11);
              i0.ɵɵelementStart(120, "select", 37);
              i0.ɵɵelementStart(121, "option", 31);
              i0.ɵɵtext(122, "Select");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(123, "div", 29);
              i0.ɵɵelementStart(124, "div", 11);
              i0.ɵɵelement(125, "input", 38);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(126, "div", 2);
              i0.ɵɵelementStart(127, "div", 29);
              i0.ɵɵelementStart(128, "div", 11);
              i0.ɵɵelementStart(129, "select", 39);
              i0.ɵɵelementStart(130, "option", 31);
              i0.ɵɵtext(131, "Select");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(132, "div", 29);
              i0.ɵɵelementStart(133, "div", 11);
              i0.ɵɵelement(134, "input", 40);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(135, "div", 10);
              i0.ɵɵelementStart(136, "div", 11);
              i0.ɵɵelement(137, "input", 41);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(138, "div", 10);
              i0.ɵɵelementStart(139, "div", 11);
              i0.ɵɵelement(140, "input", 42);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelement(141, "hr");
              i0.ɵɵelementStart(142, "mat-card-footer");
              i0.ɵɵelementStart(143, "mat-card-actions", 43);
              i0.ɵɵelementStart(144, "button", 44);
              i0.ɵɵtext(145, "Save");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(146, "button", 45);
              i0.ɵɵtext(147, "Discard");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
            }
          },
          directives: [i1.MatExpansionPanelTitle, i2.MatRadioGroup, i2.MatRadioButton, i3.MatSlideToggle, i4.MatCardFooter, i4.MatCardActions, i5.RouterLink],
          styles: ["img[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC1hZGQvY2xpZW50LWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jbGllbnQvY2xpZW50LWFkZC9jbGllbnQtYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIGhlaWdodDoxNDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufSJdfQ== */"]
        });
        /*@__PURE__*/

        (function () {
          i0.ɵsetClassMetadata(ClientAddComponent, [{
            type: core_1.Component,
            args: [{
              selector: 'app-client-add',
              templateUrl: './client-add.component.html',
              styleUrls: ['./client-add.component.scss']
            }]
          }], function () {
            return [];
          }, null);
        })();
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      /***/
    },

    /***/
    "kk3Z":
    /*!*****************************************!*\
      !*** ./src/app/client/client.module.ts ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function kk3Z(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! @angular/common */
      "ofXK"), __webpack_require__(
      /*! ./client-home/client-home.component */
      "P8gj"), __webpack_require__(
      /*! ./client-filter/client-filter.component */
      "qaHB"), __webpack_require__(
      /*! ./client-routing.module */
      "m3Zf"), __webpack_require__(
      /*! ./client-profile/client-profile.component */
      "pEN9"), __webpack_require__(
      /*! ./client-content/client-content.component */
      "1OO+"), __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO"), __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt"), __webpack_require__(
      /*! @angular/material/icon */
      "NFeN"), __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG"), __webpack_require__(
      /*! @angular/material/button */
      "bTqV"), __webpack_require__(
      /*! @angular/material/input */
      "qFsG"), __webpack_require__(
      /*! @angular/material/card */
      "Wp6s"), __webpack_require__(
      /*! ./client-add/client-add.component */
      "gNnr"), __webpack_require__(
      /*! @angular/material/radio */
      "QibW"), __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm"), __webpack_require__(
      /*! @angular/material/select */
      "d3UM"), __webpack_require__(
      /*! @angular/core */
      "fXoL")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, common_1, client_home_component_1, client_filter_component_1, client_routing_module_1, client_profile_component_1, client_content_component_1, tabs_1, expansion_1, icon_1, form_field_1, button_1, input_1, card_1, client_add_component_1, radio_1, slide_toggle_1, select_1, i0) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.ClientModule = void 0;

        var ClientModule = function ClientModule() {
          _classCallCheck(this, ClientModule);
        };

        exports.ClientModule = ClientModule;
        ClientModule.ɵmod = i0.ɵɵdefineNgModule({
          type: ClientModule
        });
        ClientModule.ɵinj = i0.ɵɵdefineInjector({
          factory: function ClientModule_Factory(t) {
            return new (t || ClientModule)();
          },
          imports: [[common_1.CommonModule, client_routing_module_1.ClientRoutingModule, tabs_1.MatTabsModule, icon_1.MatIconModule, button_1.MatButtonModule, radio_1.MatRadioModule, form_field_1.MatFormFieldModule, slide_toggle_1.MatSlideToggleModule, select_1.MatSelectModule, input_1.MatInputModule, card_1.MatCardModule, expansion_1.MatExpansionModule]]
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ClientModule, {
            declarations: [client_home_component_1.ClientHomeComponent, client_filter_component_1.ClientFilterComponent, client_profile_component_1.ClientProfileComponent, client_content_component_1.ClientContentComponent, client_add_component_1.ClientAddComponent],
            imports: [common_1.CommonModule, client_routing_module_1.ClientRoutingModule, tabs_1.MatTabsModule, icon_1.MatIconModule, button_1.MatButtonModule, radio_1.MatRadioModule, form_field_1.MatFormFieldModule, slide_toggle_1.MatSlideToggleModule, select_1.MatSelectModule, input_1.MatInputModule, card_1.MatCardModule, expansion_1.MatExpansionModule]
          });
        })();
        /*@__PURE__*/


        (function () {
          i0.ɵsetClassMetadata(ClientModule, [{
            type: core_1.NgModule,
            args: [{
              declarations: [client_home_component_1.ClientHomeComponent, client_filter_component_1.ClientFilterComponent, client_profile_component_1.ClientProfileComponent, client_content_component_1.ClientContentComponent, client_add_component_1.ClientAddComponent],
              imports: [common_1.CommonModule, client_routing_module_1.ClientRoutingModule, tabs_1.MatTabsModule, icon_1.MatIconModule, button_1.MatButtonModule, radio_1.MatRadioModule, form_field_1.MatFormFieldModule, slide_toggle_1.MatSlideToggleModule, select_1.MatSelectModule, input_1.MatInputModule, card_1.MatCardModule, expansion_1.MatExpansionModule]
            }]
          }], null, null);
        })();
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      /***/
    },

    /***/
    "m3Zf":
    /*!*************************************************!*\
      !*** ./src/app/client/client-routing.module.ts ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function m3Zf(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! @angular/router */
      "tyNb"), __webpack_require__(
      /*! ./client-profile/client-profile.component */
      "pEN9"), __webpack_require__(
      /*! ./client-home/client-home.component */
      "P8gj"), __webpack_require__(
      /*! ./client-add/client-add.component */
      "gNnr"), __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! @angular/router */
      "tyNb")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, router_1, client_profile_component_1, client_home_component_1, client_add_component_1, i0, i1) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.ClientRoutingModule = void 0;
        var routes = [{
          path: '',
          component: client_home_component_1.ClientHomeComponent,
          children: [{
            path: 'profile',
            component: client_profile_component_1.ClientProfileComponent
          }, {
            path: 'add',
            component: client_add_component_1.ClientAddComponent
          }]
        }];

        var ClientRoutingModule = function ClientRoutingModule() {
          _classCallCheck(this, ClientRoutingModule);
        };

        exports.ClientRoutingModule = ClientRoutingModule;
        ClientRoutingModule.ɵmod = i0.ɵɵdefineNgModule({
          type: ClientRoutingModule
        });
        ClientRoutingModule.ɵinj = i0.ɵɵdefineInjector({
          factory: function ClientRoutingModule_Factory(t) {
            return new (t || ClientRoutingModule)();
          },
          imports: [[router_1.RouterModule.forChild(routes)], router_1.RouterModule]
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ClientRoutingModule, {
            imports: [i1.RouterModule],
            exports: [router_1.RouterModule]
          });
        })();
        /*@__PURE__*/


        (function () {
          i0.ɵsetClassMetadata(ClientRoutingModule, [{
            type: core_1.NgModule,
            args: [{
              imports: [router_1.RouterModule.forChild(routes)],
              exports: [router_1.RouterModule]
            }]
          }], null, null);
        })();
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      /***/
    },

    /***/
    "pEN9":
    /*!*******************************************************************!*\
      !*** ./src/app/client/client-profile/client-profile.component.ts ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function pEN9(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt"), __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt"), __webpack_require__(
      /*! @angular/router */
      "tyNb")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, expansion_1, i0, i1, i2) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.ClientProfileComponent = void 0;

        var ClientProfileComponent = /*#__PURE__*/function () {
          function ClientProfileComponent() {
            _classCallCheck(this, ClientProfileComponent);
          }

          _createClass(ClientProfileComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ClientProfileComponent;
        }();

        exports.ClientProfileComponent = ClientProfileComponent;

        ClientProfileComponent.ɵfac = function ClientProfileComponent_Factory(t) {
          return new (t || ClientProfileComponent)();
        };

        ClientProfileComponent.ɵcmp = i0.ɵɵdefineComponent({
          type: ClientProfileComponent,
          selectors: [["app-client-profile"]],
          viewQuery: function ClientProfileComponent_Query(rf, ctx) {
            if (rf & 1) {
              i0.ɵɵviewQuery(expansion_1.MatAccordion, true);
            }

            if (rf & 2) {
              var _t;

              i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.accordion = _t.first);
            }
          },
          decls: 256,
          vars: 0,
          consts: [[1, "bg-title"], ["routerLink", "/add", 1, "far", "fa-edit", "mr-2"], [1, "container", "mt-3"], [1, "row"], [1, "col-md-4", "img"], [1, "d-flex", "justify-content-center", "h-100"], [1, "image_outer_container"], [1, "green_icon"], [1, "image_inner_container"], ["src", "assets/images/Scott-Nelson.jpg"], [1, "col-md-4"], [1, "icon-map-marker"], [1, "p-0"], [1, "fas", "fa-map-marker-alt"], [1, "fas", "fa-phone-square-alt"], [1, "fas", "fa-envelope"], [1, "col-md-4", "details"], [1, "mt-4"], [1, "row", "mt-4"], [1, "col-md-6"], [1, "card"], [1, "card-header", "white"], [1, "h5-responsive", "font-weight-bold", "mb-0"], ["routerLink", "/add", 1, "far", "fa-edit", "float-right", "mr-2"], [1, "card-body", "my-custom-scrollbar"], [1, "row", "mt-2", "mb-4"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "contact"], [1, "wrap"], [1, "contact-status", "online"], ["src", "assets/images/Sachin.jpg", "alt", ""], [1, "meta"], [1, "name", 2, "margin-bottom", "0"], [1, "preview", 2, "margin-top", "0"], ["src", "assets/images/sehwag.jpg", "alt", ""], ["src", "assets/images/ganguly.jpg", "alt", ""], ["src", "assets/images/rahul.jpg", "alt", ""], ["src", "assets/images/dhoni.jpg", "alt", ""], ["src", "assets/images/virat.jpg", "alt", ""], ["src", "assets/images/yuvraj.jpg", "alt", ""], ["src", "assets/images/zaheer.jpg", "alt", ""]],
          template: function ClientProfileComponent_Template(rf, ctx) {
            if (rf & 1) {
              i0.ɵɵelementStart(0, "h3", 0);
              i0.ɵɵtext(1, "Nelson, Scott");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(2, "mat-expansion-panel");
              i0.ɵɵelementStart(3, "mat-expansion-panel-header");
              i0.ɵɵelementStart(4, "mat-panel-title");
              i0.ɵɵtext(5, " Personal Info ");
              i0.ɵɵelementEnd();
              i0.ɵɵelement(6, "i", 1);
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(7, "div", 2);
              i0.ɵɵelementStart(8, "div", 3);
              i0.ɵɵelementStart(9, "div", 4);
              i0.ɵɵelementStart(10, "div", 5);
              i0.ɵɵelementStart(11, "div", 6);
              i0.ɵɵelement(12, "div", 7);
              i0.ɵɵelementStart(13, "div", 8);
              i0.ɵɵelement(14, "img", 9);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(15, "div", 10);
              i0.ɵɵelementStart(16, "blockquote");
              i0.ɵɵelementStart(17, "h3");
              i0.ɵɵelementStart(18, "strong");
              i0.ɵɵtext(19, "Nelson Scott ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(20, "span");
              i0.ɵɵtext(21, "(Alias: ScNe01)");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(22, "small");
              i0.ɵɵtext(23, "Office Name ");
              i0.ɵɵelement(24, "i", 11);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(25, "ul", 12);
              i0.ɵɵelementStart(26, "li");
              i0.ɵɵelement(27, "i", 13);
              i0.ɵɵtext(28, " 123 Springfield Ave. New York");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(29, "li");
              i0.ɵɵelement(30, "i", 14);
              i0.ɵɵtext(31, " 555-999-9999, 666-666-6666");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(32, "li");
              i0.ɵɵelement(33, "i", 15);
              i0.ɵɵtext(34, " smith@gmail.com");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(35, "div", 16);
              i0.ɵɵelementStart(36, "blockquote");
              i0.ɵɵelement(37, "h5");
              i0.ɵɵelement(38, "br");
              i0.ɵɵelement(39, "br");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(40, "ul");
              i0.ɵɵelementStart(41, "li");
              i0.ɵɵtext(42, "Date of Birth: ");
              i0.ɵɵelementStart(43, "strong");
              i0.ɵɵtext(44, "May 25, 1974");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(45, "li");
              i0.ɵɵtext(46, "Gender: ");
              i0.ɵɵelementStart(47, "strong");
              i0.ɵɵtext(48, "Male");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(49, "mat-expansion-panel");
              i0.ɵɵelementStart(50, "mat-expansion-panel-header");
              i0.ɵɵelementStart(51, "mat-panel-title");
              i0.ɵɵtext(52, " Custom Fields ");
              i0.ɵɵelementEnd();
              i0.ɵɵelement(53, "i", 1);
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(54, "ul", 17);
              i0.ɵɵelementStart(55, "li");
              i0.ɵɵtext(56, " School Grade: ");
              i0.ɵɵelementStart(57, "strong");
              i0.ɵɵtext(58, "A+");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(59, "li");
              i0.ɵɵtext(60, " Age: ");
              i0.ɵɵelementStart(61, "strong");
              i0.ɵɵtext(62, "12");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(63, "li");
              i0.ɵɵtext(64, " Class: ");
              i0.ɵɵelementStart(65, "strong");
              i0.ɵɵtext(66, "XII");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(67, "li");
              i0.ɵɵtext(68, " Date of Birth: ");
              i0.ɵɵelementStart(69, "strong");
              i0.ɵɵtext(70, "Feb. 25, 1975");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(71, "li");
              i0.ɵɵtext(72, " School Name: ");
              i0.ɵɵelementStart(73, "strong");
              i0.ɵɵtext(74, "ST. Teresa, New York");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(75, "mat-expansion-panel");
              i0.ɵɵelementStart(76, "mat-expansion-panel-header");
              i0.ɵɵelementStart(77, "mat-panel-title");
              i0.ɵɵtext(78, " Contacts ");
              i0.ɵɵelementEnd();
              i0.ɵɵelement(79, "i", 1);
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(80, "div", 18);
              i0.ɵɵelementStart(81, "div", 19);
              i0.ɵɵelementStart(82, "div", 20);
              i0.ɵɵelementStart(83, "div", 21);
              i0.ɵɵelementStart(84, "p", 22);
              i0.ɵɵtext(85, "Parents ");
              i0.ɵɵelement(86, "i", 23);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(87, "div", 24);
              i0.ɵɵelementStart(88, "h4");
              i0.ɵɵelementStart(89, "strong");
              i0.ɵɵtext(90, "Mr. & Mrs. Smith");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(91, "ul", 12);
              i0.ɵɵelementStart(92, "li");
              i0.ɵɵelement(93, "i", 13);
              i0.ɵɵtext(94, " 123 Springfield Ave. New York, NY 1032");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(95, "li");
              i0.ɵɵelement(96, "i", 14);
              i0.ɵɵtext(97, " 555-999-9999, 666-666-6666");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(98, "li");
              i0.ɵɵelement(99, "i", 15);
              i0.ɵɵtext(100, " smith@gmail.com");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(101, "div", 19);
              i0.ɵɵelementStart(102, "div", 20);
              i0.ɵɵelementStart(103, "div", 21);
              i0.ɵɵelementStart(104, "p", 22);
              i0.ɵɵtext(105, "Daycare ");
              i0.ɵɵelement(106, "i", 23);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(107, "div", 24);
              i0.ɵɵelementStart(108, "h4");
              i0.ɵɵelementStart(109, "strong");
              i0.ɵɵtext(110, "ABC Daycare Center");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(111, "ul", 12);
              i0.ɵɵelementStart(112, "li");
              i0.ɵɵelement(113, "i", 13);
              i0.ɵɵtext(114, " 123 Springfield Ave. New York, NY 1032");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(115, "li");
              i0.ɵɵelement(116, "i", 14);
              i0.ɵɵtext(117, " 555-999-9999, 666-666-6666");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(118, "li");
              i0.ɵɵelement(119, "i", 15);
              i0.ɵɵtext(120, " smith@gmail.com");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(121, "div", 25);
              i0.ɵɵelementStart(122, "div", 19);
              i0.ɵɵelementStart(123, "div", 20);
              i0.ɵɵelementStart(124, "div", 21);
              i0.ɵɵelementStart(125, "p", 22);
              i0.ɵɵtext(126, "Parents ");
              i0.ɵɵelement(127, "i", 23);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(128, "div", 24);
              i0.ɵɵelementStart(129, "h4");
              i0.ɵɵelementStart(130, "strong");
              i0.ɵɵtext(131, "Mr. & Mrs. Smith");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(132, "ul", 12);
              i0.ɵɵelementStart(133, "li");
              i0.ɵɵelement(134, "i", 13);
              i0.ɵɵtext(135, " 123 Springfield Ave. New York, NY 1032");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(136, "li");
              i0.ɵɵelement(137, "i", 14);
              i0.ɵɵtext(138, " 555-999-9999, 666-666-6666");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(139, "li");
              i0.ɵɵelement(140, "i", 15);
              i0.ɵɵtext(141, " smith@gmail.com");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(142, "div", 19);
              i0.ɵɵelementStart(143, "div", 20);
              i0.ɵɵelementStart(144, "div", 21);
              i0.ɵɵelementStart(145, "p", 22);
              i0.ɵɵtext(146, "Daycare ");
              i0.ɵɵelement(147, "i", 23);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(148, "div", 24);
              i0.ɵɵelementStart(149, "h4");
              i0.ɵɵelementStart(150, "strong");
              i0.ɵɵtext(151, "ABC Daycare Center");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(152, "ul", 12);
              i0.ɵɵelementStart(153, "li");
              i0.ɵɵelement(154, "i", 13);
              i0.ɵɵtext(155, " 123 Springfield Ave. New York, NY 1032");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(156, "li");
              i0.ɵɵelement(157, "i", 14);
              i0.ɵɵtext(158, " 555-999-9999, 666-666-6666");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(159, "li");
              i0.ɵɵelement(160, "i", 15);
              i0.ɵɵtext(161, " smith@gmail.com");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(162, "mat-expansion-panel");
              i0.ɵɵelementStart(163, "mat-expansion-panel-header");
              i0.ɵɵelementStart(164, "mat-panel-title");
              i0.ɵɵtext(165, " Client Assignment ");
              i0.ɵɵelementEnd();
              i0.ɵɵelement(166, "i", 1);
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(167, "div", 18);
              i0.ɵɵelementStart(168, "div", 19);
              i0.ɵɵelementStart(169, "div", 20);
              i0.ɵɵelementStart(170, "div", 21);
              i0.ɵɵelementStart(171, "p", 22);
              i0.ɵɵtext(172, "Staff Assignment ");
              i0.ɵɵelement(173, "i", 23);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(174, "div", 24);
              i0.ɵɵelementStart(175, "ul", 26);
              i0.ɵɵelementStart(176, "li", 27);
              i0.ɵɵelementStart(177, "div", 28);
              i0.ɵɵelement(178, "span", 29);
              i0.ɵɵelement(179, "img", 30);
              i0.ɵɵelementStart(180, "div", 31);
              i0.ɵɵelementStart(181, "p", 32);
              i0.ɵɵtext(182, "Sachin Tendulkar");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(183, "p", 33);
              i0.ɵɵtext(184, "Indian Cricket Player ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(185, "li", 27);
              i0.ɵɵelementStart(186, "div", 28);
              i0.ɵɵelement(187, "span", 29);
              i0.ɵɵelement(188, "img", 34);
              i0.ɵɵelementStart(189, "div", 31);
              i0.ɵɵelementStart(190, "p", 32);
              i0.ɵɵtext(191, "Sehwag Smash");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(192, "p", 33);
              i0.ɵɵtext(193, "Indian Cricket Player ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(194, "li", 27);
              i0.ɵɵelementStart(195, "div", 28);
              i0.ɵɵelement(196, "span", 29);
              i0.ɵɵelement(197, "img", 35);
              i0.ɵɵelementStart(198, "div", 31);
              i0.ɵɵelementStart(199, "p", 32);
              i0.ɵɵtext(200, "Ganguly Dada");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(201, "p", 33);
              i0.ɵɵtext(202, "Indian Cricket Player ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(203, "li", 27);
              i0.ɵɵelementStart(204, "div", 28);
              i0.ɵɵelement(205, "span", 29);
              i0.ɵɵelement(206, "img", 36);
              i0.ɵɵelementStart(207, "div", 31);
              i0.ɵɵelementStart(208, "p", 32);
              i0.ɵɵtext(209, "Rahul Dravid");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(210, "p", 33);
              i0.ɵɵtext(211, "Indian Cricket Player ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(212, "div", 19);
              i0.ɵɵelementStart(213, "div", 20);
              i0.ɵɵelementStart(214, "div", 21);
              i0.ɵɵelementStart(215, "p", 22);
              i0.ɵɵtext(216, "Team Beata ");
              i0.ɵɵelement(217, "i", 23);
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(218, "div", 24);
              i0.ɵɵelementStart(219, "ul", 26);
              i0.ɵɵelementStart(220, "li", 27);
              i0.ɵɵelementStart(221, "div", 28);
              i0.ɵɵelement(222, "span", 29);
              i0.ɵɵelement(223, "img", 37);
              i0.ɵɵelementStart(224, "div", 31);
              i0.ɵɵelementStart(225, "p", 32);
              i0.ɵɵtext(226, "M.S. Dhoni");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(227, "p", 33);
              i0.ɵɵtext(228, "Indian Cricket Player ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(229, "li", 27);
              i0.ɵɵelementStart(230, "div", 28);
              i0.ɵɵelement(231, "span", 29);
              i0.ɵɵelement(232, "img", 38);
              i0.ɵɵelementStart(233, "div", 31);
              i0.ɵɵelementStart(234, "p", 32);
              i0.ɵɵtext(235, "Virat Kohli");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(236, "p", 33);
              i0.ɵɵtext(237, "Indian Cricket Player ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(238, "li", 27);
              i0.ɵɵelementStart(239, "div", 28);
              i0.ɵɵelement(240, "span", 29);
              i0.ɵɵelement(241, "img", 39);
              i0.ɵɵelementStart(242, "div", 31);
              i0.ɵɵelementStart(243, "p", 32);
              i0.ɵɵtext(244, "Yuvraj Singh");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(245, "p", 33);
              i0.ɵɵtext(246, "Indian Cricket Player ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(247, "li", 27);
              i0.ɵɵelementStart(248, "div", 28);
              i0.ɵɵelement(249, "span", 29);
              i0.ɵɵelement(250, "img", 40);
              i0.ɵɵelementStart(251, "div", 31);
              i0.ɵɵelementStart(252, "p", 32);
              i0.ɵɵtext(253, "Zaheer Khan");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(254, "p", 33);
              i0.ɵɵtext(255, "Indian Cricket Player ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
            }
          },
          directives: [i1.MatExpansionPanel, i1.MatExpansionPanelHeader, i1.MatExpansionPanelTitle, i2.RouterLink],
          styles: [".container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  border-left: 3px solid #ded4da;\n}\n\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  background-color: #edf6ff;\n  color: #3f729b;\n}\n\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  color: #3f729b;\n}\n\n.example-action-buttons[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.image_outer_container[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  border-radius: 50%;\n  position: relative;\n}\n\n.image_inner_container[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 5px;\n  background: #3f729b;\n}\n\n.image_inner_container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  border: 5px solid white;\n}\n\n.image_outer_container[_ngcontent-%COMP%]   .green_icon[_ngcontent-%COMP%] {\n  background-color: #4cd137;\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  height: 30px;\n  width: 30px;\n  border: 5px solid white;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC1wcm9maWxlL2NsaWVudC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7QUFBRjs7QUFFQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBQUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFBRTtFQUNFLGNBQUE7QUFHSjs7QUFBRTtFQUNJLG9CQUFBO0FBR047O0FBQUU7O0VBRUUsYUFBQTtBQUdKOztBQUFFO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUFFO0VBQ0UsZ0JBQUE7QUFHSjs7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDRCxtQkFBQTtBQUVIOztBQUVFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQtcHJvZmlsZS9jbGllbnQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVyIC5pbWd7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lciAuZGV0YWlsc3tcclxuICBib3JkZXItbGVmdDozcHggc29saWQgI2RlZDRkYTtcclxufVxyXG4uY29udGFpbmVyIC5kZXRhaWxzIHB7XHJcbiAgZm9udC1zaXplOjE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG5oMyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjZmZjtcclxuICAgIGNvbG9yOiAjM2Y3MjliO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjM2Y3MjliO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcclxuICAuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgICBmbGV4LWJhc2lzOiAwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLmltYWdlX291dGVyX2NvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlX2lubmVyX2NvbnRhaW5lcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgYmFja2dyb3VuZDogIzNmNzI5YjsgXHJcbiAgLy8gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZjYjA0NSwgI2ZkMWQxZCwgIzgzM2FiNCk7IFxyXG4gIC8vICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmNiMDQ1LCAjZmQxZDFkLCAjODMzYWI0KTtcclxuICB9XHJcbiAgLmltYWdlX2lubmVyX2NvbnRhaW5lciBpbWd7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2Vfb3V0ZXJfY29udGFpbmVyIC5ncmVlbl9pY29ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjZDEzNztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBib3JkZXI6NXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuIl19 */"]
        });
        /*@__PURE__*/

        (function () {
          i0.ɵsetClassMetadata(ClientProfileComponent, [{
            type: core_1.Component,
            args: [{
              selector: 'app-client-profile',
              templateUrl: './client-profile.component.html',
              styleUrls: ['./client-profile.component.scss']
            }]
          }], function () {
            return [];
          }, {
            accordion: [{
              type: core_1.ViewChild,
              args: [expansion_1.MatAccordion]
            }]
          });
        })();
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      /***/
    },

    /***/
    "qaHB":
    /*!*****************************************************************!*\
      !*** ./src/app/client/client-filter/client-filter.component.ts ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function qaHB(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! @angular/core */
      "fXoL")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, i0) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.ClientFilterComponent = void 0;

        var ClientFilterComponent = /*#__PURE__*/function () {
          function ClientFilterComponent() {
            _classCallCheck(this, ClientFilterComponent);
          }

          _createClass(ClientFilterComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ClientFilterComponent;
        }();

        exports.ClientFilterComponent = ClientFilterComponent;

        ClientFilterComponent.ɵfac = function ClientFilterComponent_Factory(t) {
          return new (t || ClientFilterComponent)();
        };

        ClientFilterComponent.ɵcmp = i0.ɵɵdefineComponent({
          type: ClientFilterComponent,
          selectors: [["app-client-filter"]],
          decls: 128,
          vars: 0,
          consts: [[1, "filter", "mt-5"], [1, "row", "d-flex", "justify-content-center"], [1, "border", "p-3"], [1, "mb-3"], [1, "form-inline", "d-flex", "md-form", "form-sm", 2, "margin-top", "0"], ["type", "text", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "form-control-sm", "mr-3", "w-75"], ["aria-hidden", "true", 1, "fas", "fa-search"], [1, "fas", "fa-filter", "ml-1"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "contact"], [1, "wrap"], [1, "contact-status", "online"], ["src", "assets/images/Scott-Nelson.jpg", "alt", ""], [1, "meta"], [1, "name", 2, "margin-bottom", "0"], [1, "preview", 2, "margin-top", "0"], ["src", "assets/images/Sachin.jpg", "alt", ""], ["src", "assets/images/kapil.jpg", "alt", ""], ["src", "assets/images/sehwag.jpg", "alt", ""], ["src", "assets/images/ganguly.jpg", "alt", ""], ["src", "assets/images/rahul.jpg", "alt", ""], ["src", "assets/images/dhoni.jpg", "alt", ""], ["src", "assets/images/virat.jpg", "alt", ""], ["src", "assets/images/yuvraj.jpg", "alt", ""], ["src", "assets/images/zaheer.jpg", "alt", ""], [1, "pagination", "pg-blue"], [1, "page-item"], ["aria-label", "Previous", 1, "page-link"], ["aria-hidden", "true"], [1, "sr-only"], [1, "page-item", "active"], [1, "page-link"], ["aria-label", "Next", 1, "page-link"]],
          template: function ClientFilterComponent_Template(rf, ctx) {
            if (rf & 1) {
              i0.ɵɵelementStart(0, "section", 0);
              i0.ɵɵelementStart(1, "div", 1);
              i0.ɵɵelementStart(2, "div", 2);
              i0.ɵɵelementStart(3, "div", 3);
              i0.ɵɵelementStart(4, "form", 4);
              i0.ɵɵelement(5, "input", 5);
              i0.ɵɵelement(6, "i", 6);
              i0.ɵɵelement(7, "i", 7);
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(8, "ul", 8);
              i0.ɵɵelementStart(9, "li", 9);
              i0.ɵɵelementStart(10, "div", 10);
              i0.ɵɵelement(11, "span", 11);
              i0.ɵɵelement(12, "img", 12);
              i0.ɵɵelementStart(13, "div", 13);
              i0.ɵɵelementStart(14, "p", 14);
              i0.ɵɵtext(15, "Nelson Scott");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(16, "p", 15);
              i0.ɵɵtext(17, "ALOHA Client ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(18, "li", 9);
              i0.ɵɵelementStart(19, "div", 10);
              i0.ɵɵelement(20, "span", 11);
              i0.ɵɵelement(21, "img", 16);
              i0.ɵɵelementStart(22, "div", 13);
              i0.ɵɵelementStart(23, "p", 14);
              i0.ɵɵtext(24, "Sachin Tendulkar");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(25, "p", 15);
              i0.ɵɵtext(26, "Indian Cricket Player ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(27, "li", 9);
              i0.ɵɵelementStart(28, "div", 10);
              i0.ɵɵelement(29, "span", 11);
              i0.ɵɵelement(30, "img", 17);
              i0.ɵɵelementStart(31, "div", 13);
              i0.ɵɵelementStart(32, "p", 14);
              i0.ɵɵtext(33, "Kapil Dev");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(34, "p", 15);
              i0.ɵɵtext(35, "Indian Cricket Player ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(36, "li", 9);
              i0.ɵɵelementStart(37, "div", 10);
              i0.ɵɵelement(38, "span", 11);
              i0.ɵɵelement(39, "img", 18);
              i0.ɵɵelementStart(40, "div", 13);
              i0.ɵɵelementStart(41, "p", 14);
              i0.ɵɵtext(42, "Sehwag Smash");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(43, "p", 15);
              i0.ɵɵtext(44, "Indian Cricket Player ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(45, "li", 9);
              i0.ɵɵelementStart(46, "div", 10);
              i0.ɵɵelement(47, "span", 11);
              i0.ɵɵelement(48, "img", 19);
              i0.ɵɵelementStart(49, "div", 13);
              i0.ɵɵelementStart(50, "p", 14);
              i0.ɵɵtext(51, "Ganguly Dada");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(52, "p", 15);
              i0.ɵɵtext(53, "Indian Cricket Player ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(54, "li", 9);
              i0.ɵɵelementStart(55, "div", 10);
              i0.ɵɵelement(56, "span", 11);
              i0.ɵɵelement(57, "img", 20);
              i0.ɵɵelementStart(58, "div", 13);
              i0.ɵɵelementStart(59, "p", 14);
              i0.ɵɵtext(60, "Rahul Dravid");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(61, "p", 15);
              i0.ɵɵtext(62, "Indian Cricket Player ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(63, "li", 9);
              i0.ɵɵelementStart(64, "div", 10);
              i0.ɵɵelement(65, "span", 11);
              i0.ɵɵelement(66, "img", 21);
              i0.ɵɵelementStart(67, "div", 13);
              i0.ɵɵelementStart(68, "p", 14);
              i0.ɵɵtext(69, "M.S. Dhoni");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(70, "p", 15);
              i0.ɵɵtext(71, "Indian Cricket Player ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(72, "li", 9);
              i0.ɵɵelementStart(73, "div", 10);
              i0.ɵɵelement(74, "span", 11);
              i0.ɵɵelement(75, "img", 22);
              i0.ɵɵelementStart(76, "div", 13);
              i0.ɵɵelementStart(77, "p", 14);
              i0.ɵɵtext(78, "Virat Kohli");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(79, "p", 15);
              i0.ɵɵtext(80, "Indian Cricket Player ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(81, "li", 9);
              i0.ɵɵelementStart(82, "div", 10);
              i0.ɵɵelement(83, "span", 11);
              i0.ɵɵelement(84, "img", 23);
              i0.ɵɵelementStart(85, "div", 13);
              i0.ɵɵelementStart(86, "p", 14);
              i0.ɵɵtext(87, "Yuvraj Singh");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(88, "p", 15);
              i0.ɵɵtext(89, "Indian Cricket Player ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(90, "li", 9);
              i0.ɵɵelementStart(91, "div", 10);
              i0.ɵɵelement(92, "span", 11);
              i0.ɵɵelement(93, "img", 24);
              i0.ɵɵelementStart(94, "div", 13);
              i0.ɵɵelementStart(95, "p", 14);
              i0.ɵɵtext(96, "Zaheer Khan");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(97, "p", 15);
              i0.ɵɵtext(98, "Indian Cricket Player ");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(99, "nav");
              i0.ɵɵelementStart(100, "ul", 25);
              i0.ɵɵelementStart(101, "li", 26);
              i0.ɵɵelementStart(102, "a", 27);
              i0.ɵɵelementStart(103, "span", 28);
              i0.ɵɵtext(104, "\xAB");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(105, "span", 29);
              i0.ɵɵtext(106, "Previous");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(107, "li", 30);
              i0.ɵɵelementStart(108, "a", 31);
              i0.ɵɵtext(109, "1");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(110, "li", 26);
              i0.ɵɵelementStart(111, "a", 31);
              i0.ɵɵtext(112, "2");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(113, "li", 26);
              i0.ɵɵelementStart(114, "a", 31);
              i0.ɵɵtext(115, "3");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(116, "li", 26);
              i0.ɵɵelementStart(117, "a", 31);
              i0.ɵɵtext(118, "4");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(119, "li", 26);
              i0.ɵɵelementStart(120, "a", 31);
              i0.ɵɵtext(121, "5");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(122, "li", 26);
              i0.ɵɵelementStart(123, "a", 32);
              i0.ɵɵelementStart(124, "span", 28);
              i0.ɵɵtext(125, "\xBB");
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(126, "span", 29);
              i0.ɵɵtext(127, "Next");
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
            }
          },
          styles: [".link-black[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.link-black[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n}\n\n.link-black[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #0056b3;\n}\n\n.divider-small[_ngcontent-%COMP%] {\n  width: 30px;\n  background-color: rgba(0, 0, 0, 0.1);\n  height: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC1maWx0ZXIvY2xpZW50LWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQtZmlsdGVyL2NsaWVudC1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluay1ibGFjayBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5saW5rLWJsYWNrIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDU2YjM7XHJcbiAgfVxyXG5cclxuICAubGluay1ibGFjayAuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDA1NmIzO1xyXG4gIH1cclxuXHJcbiAgLmRpdmlkZXItc21hbGwge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xKTtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gIH0iXX0= */"]
        });
        /*@__PURE__*/

        (function () {
          i0.ɵsetClassMetadata(ClientFilterComponent, [{
            type: core_1.Component,
            args: [{
              selector: 'app-client-filter',
              templateUrl: './client-filter.component.html',
              styleUrls: ['./client-filter.component.scss']
            }]
          }], function () {
            return [];
          }, null);
        })();
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! no static exports found */

    /***/
    function vY5A(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! @angular/router */
      "tyNb"), __webpack_require__(
      /*! ./client/client-home/client-home.component */
      "P8gj"), __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! @angular/router */
      "tyNb")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, router_1, client_home_component_1, i0, i1) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.AppRoutingModule = void 0;
        var routes = [{
          path: 'client',
          component: client_home_component_1.ClientHomeComponent
        }]; // sets up routes constant where you define your routes
        // configures NgModule imports and exports

        var AppRoutingModule = function AppRoutingModule() {
          _classCallCheck(this, AppRoutingModule);
        };

        exports.AppRoutingModule = AppRoutingModule;
        AppRoutingModule.ɵmod = i0.ɵɵdefineNgModule({
          type: AppRoutingModule
        });
        AppRoutingModule.ɵinj = i0.ɵɵdefineInjector({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)();
          },
          imports: [[router_1.RouterModule.forRoot(routes)], router_1.RouterModule]
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, {
            imports: [i1.RouterModule],
            exports: [router_1.RouterModule]
          });
        })();
        /*@__PURE__*/


        (function () {
          i0.ɵsetClassMetadata(AppRoutingModule, [{
            type: core_1.NgModule,
            args: [{
              imports: [router_1.RouterModule.forRoot(routes)],
              exports: [router_1.RouterModule]
            }]
          }], null, null);
        })();
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no static exports found */

    /***/
    function zUnb(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
      /*! @angular/core */
      "fXoL"), __webpack_require__(
      /*! ./environments/environment */
      "AytR"), __webpack_require__(
      /*! ./app/app.module */
      "ZAI4"), __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, environment_1, __NgCli_bootstrap_1, __NgCli_bootstrap_2) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        if (environment_1.environment.production) {
          core_1.enableProdMode();
        }

        __NgCli_bootstrap_2.platformBrowser().bootstrapModule(__NgCli_bootstrap_1.AppModule)["catch"](function (err) {
          return console.error(err);
        });
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map