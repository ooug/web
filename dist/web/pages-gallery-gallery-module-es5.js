function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gallery-gallery-module"], {
  /***/
  "./src/app/pages/gallery/gallery.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/gallery/gallery.component.ts ***!
    \****************************************************/

  /*! exports provided: GalleryComponent */

  /***/
  function srcAppPagesGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
      return GalleryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GalleryComponent = /*#__PURE__*/function () {
      function GalleryComponent() {
        _classCallCheck(this, GalleryComponent);
      }

      _createClass(GalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GalleryComponent;
    }();

    GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
      return new (t || GalleryComponent)();
    };

    GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleryComponent,
      selectors: [["app-gallery"]],
      decls: 2,
      vars: 0,
      template: function GalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "gallery works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gallery',
          templateUrl: './gallery.component.html',
          styleUrls: ['./gallery.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/gallery/gallery.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/gallery/gallery.module.ts ***!
    \*************************************************/

  /*! exports provided: GalleryModule */

  /***/
  function srcAppPagesGalleryGalleryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryModule", function () {
      return GalleryModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./gallery.component */
    "./src/app/pages/gallery/gallery.component.ts");

    var routes = [{
      path: '',
      component: _gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"]
    }];

    var GalleryModule = function GalleryModule() {
      _classCallCheck(this, GalleryModule);
    };

    GalleryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GalleryModule
    });
    GalleryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GalleryModule_Factory(t) {
        return new (t || GalleryModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GalleryModule, {
        declarations: [_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-gallery-gallery-module-es5.js.map