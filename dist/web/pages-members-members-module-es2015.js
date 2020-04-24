(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-members-members-module"],{

/***/ "./src/app/pages/members/members-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/members/members-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: membersComponents, MembersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "membersComponents", function() { return membersComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersRoutingModule", function() { return MembersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _members_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./members.component */ "./src/app/pages/members/members.component.ts");





const membersComponents = [_members_component__WEBPACK_IMPORTED_MODULE_2__["MembersComponent"]];
const routes = [
    {
        path: '',
        component: _members_component__WEBPACK_IMPORTED_MODULE_2__["MembersComponent"]
    }
];
class MembersRoutingModule {
}
MembersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MembersRoutingModule });
MembersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MembersRoutingModule_Factory(t) { return new (t || MembersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MembersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MembersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/members/members.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/members/members.component.ts ***!
  \****************************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MembersComponent {
    constructor() {
    }
    ngOnInit() { }
}
MembersComponent.ɵfac = function MembersComponent_Factory(t) { return new (t || MembersComponent)(); };
MembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MembersComponent, selectors: [["app-members"]], decls: 2, vars: 0, template: function MembersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "members works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbWJlcnMvbWVtYmVycy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MembersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-members',
                templateUrl: './members.component.html',
                styleUrls: ['./members.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/members/members.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/members/members.module.ts ***!
  \*************************************************/
/*! exports provided: MembersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersModule", function() { return MembersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _members_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./members-routing.module */ "./src/app/pages/members/members-routing.module.ts");
/* harmony import */ var _members_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./members.component */ "./src/app/pages/members/members.component.ts");





class MembersModule {
}
MembersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MembersModule });
MembersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MembersModule_Factory(t) { return new (t || MembersModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _members_routing_module__WEBPACK_IMPORTED_MODULE_2__["MembersRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MembersModule, { declarations: [_members_component__WEBPACK_IMPORTED_MODULE_3__["MembersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _members_routing_module__WEBPACK_IMPORTED_MODULE_2__["MembersRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MembersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_members_component__WEBPACK_IMPORTED_MODULE_3__["MembersComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _members_routing_module__WEBPACK_IMPORTED_MODULE_2__["MembersRoutingModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-members-members-module-es2015.js.map