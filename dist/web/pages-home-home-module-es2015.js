(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/pages/home/components/technology-stack/technology-stack.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/home/components/technology-stack/technology-stack.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TechnologyStackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyStackComponent", function() { return TechnologyStackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function TechnologyStackComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "View Full Article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", article_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" By: ", article_r1.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", article_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class TechnologyStackComponent {
    constructor() {
        this.articles = [
            {
                title: 'Title 1',
                author: 'Author 1',
                link: 'Link 1'
            },
            {
                title: 'Title 2',
                author: 'Author 2',
                link: 'Link 2'
            },
            {
                title: 'Title 3',
                author: 'Author 3',
                link: 'Link 3'
            },
            {
                title: 'Title 4',
                author: 'Author 4',
                link: 'Link 4'
            },
            {
                title: 'Title 5',
                author: 'Author 5',
                link: 'Link 5'
            }
        ];
    }
    ngOnInit() { }
}
TechnologyStackComponent.ɵfac = function TechnologyStackComponent_Factory(t) { return new (t || TechnologyStackComponent)(); };
TechnologyStackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TechnologyStackComponent, selectors: [["app-technology-stack"]], decls: 9, vars: 1, consts: [[1, "container"], [1, "row", "mt-5"], [1, "col-md-12", "col-12", "text-center"], ["id", "heading"], [1, "row"], [1, "col-md-12", "col-12"], [4, "ngFor", "ngForOf"], [1, "card", "card-block", "my-1"], [1, "card-body"], [1, "text-secondary"], [1, "card-link", "float-right", 3, "href"]], template: function TechnologyStackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ARTICLES/BLOGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TechnologyStackComponent_div_8_Template, 8, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["@import \"https://fonts.googleapis.com/css?family=Roboto\";\n#heading[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n}\n.card[_ngcontent-%COMP%] {\n  transition: box-shadow 0.3s;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 2rem #652e90;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL3RlY2hub2xvZ3ktc3RhY2svRDpcXG9vdWcgd2Vic2l0ZVxcd2ViL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcY29tcG9uZW50c1xcdGVjaG5vbG9neS1zdGFja1xcdGVjaG5vbG9neS1zdGFjay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL3RlY2hub2xvZ3ktc3RhY2svdGVjaG5vbG9neS1zdGFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx3REFBQTtBQUNSO0VBQ0kscUJBQUE7QUNDSjtBREVBO0VBQ0ksMkJBQUE7QUNDSjtBREVBO0VBQ0ksNEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvY29tcG9uZW50cy90ZWNobm9sb2d5LXN0YWNrL3RlY2hub2xvZ3ktc3RhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b1wiO1xyXG4jaGVhZGluZyB7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3M7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycmVtICM2NTJlOTA7XHJcbiAgICA7XHJcbn0iLCJAaW1wb3J0IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b1wiO1xuI2hlYWRpbmcge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbn1cblxuLmNhcmQge1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDJyZW0gIzY1MmU5MDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TechnologyStackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-technology-stack',
                templateUrl: './technology-stack.component.html',
                styleUrls: ['./technology-stack.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/components/upcoming-events/upcoming-events.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/home/components/upcoming-events/upcoming-events.component.ts ***!
  \************************************************************************************/
/*! exports provided: UpcomingEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingEventsComponent", function() { return UpcomingEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UpcomingEventsComponent {
    constructor() {
        this.upcoming_events = [
            {
                img_link: '../../../../../assets/imgs/gray.jpg',
                title: 'Upcoming Event 1',
                description: 'Some data about the event. Not more than 2 lines.',
                link: '#'
            },
            {
                img_link: '../../../../../assets/imgs/gray.jpg',
                title: 'Upcoming Event 2',
                description: 'Some data about the event. Not more than 2 lines.',
                link: '#'
            }, {
                img_link: '../../../../../assets/imgs/gray.jpg',
                title: 'Upcoming Event 3',
                description: 'Some data about the event. Not more than 2 lines.',
                link: '#'
            }
        ];
    }
    ngOnInit() { }
}
UpcomingEventsComponent.ɵfac = function UpcomingEventsComponent_Factory(t) { return new (t || UpcomingEventsComponent)(); };
UpcomingEventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpcomingEventsComponent, selectors: [["app-upcoming-events"]], decls: 40, vars: 12, consts: [[1, "container"], [1, "row", "mt-5"], [1, "col-md-12", "col-12", "text-center"], ["id", "heading"], [1, "row"], [1, "col-md-4"], [1, "card", "card-block", "text-light", "my-1"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "text-center"], [1, "btn", "btn-primary", "btn-sm", 3, "href"]], template: function UpcomingEventsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "UPCOMING EVENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Know more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Know more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Know more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.upcoming_events[0].img_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.upcoming_events[0].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.upcoming_events[0].description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.upcoming_events[0].link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.upcoming_events[1].img_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.upcoming_events[1].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.upcoming_events[1].description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.upcoming_events[1].link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.upcoming_events[2].img_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.upcoming_events[2].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.upcoming_events[2].description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.upcoming_events[2].link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["@import \"https://fonts.googleapis.com/css?family=Roboto\";\n#heading[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n}\n.card[_ngcontent-%COMP%] {\n  transition: box-shadow 0.3s;\n  background-color: #652e90;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 2rem #652e90;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL3VwY29taW5nLWV2ZW50cy9EOlxcb291ZyB3ZWJzaXRlXFx3ZWIvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxjb21wb25lbnRzXFx1cGNvbWluZy1ldmVudHNcXHVwY29taW5nLWV2ZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL3VwY29taW5nLWV2ZW50cy91cGNvbWluZy1ldmVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsd0RBQUE7QUFDUjtFQUNJLHFCQUFBO0FDQ0o7QURFQTtFQUNJLDJCQUFBO0VBQ0EseUJBQUE7QUNDSjtBREVBO0VBQ0ksNEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvY29tcG9uZW50cy91cGNvbWluZy1ldmVudHMvdXBjb21pbmctZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG9cIjtcclxuI2hlYWRpbmcge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY1MmU5MDtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJyZW0gIzY1MmU5MDtcclxuICAgIDtcclxufSIsIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvXCI7XG4jaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xufVxuXG4uY2FyZCB7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1MmU5MDtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMnJlbSAjNjUyZTkwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpcomingEventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upcoming-events',
                templateUrl: './upcoming-events.component.html',
                styleUrls: ['./upcoming-events.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_upcoming_events_upcoming_events_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/upcoming-events/upcoming-events.component */ "./src/app/pages/home/components/upcoming-events/upcoming-events.component.ts");
/* harmony import */ var _components_technology_stack_technology_stack_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/technology-stack/technology-stack.component */ "./src/app/pages/home/components/technology-stack/technology-stack.component.ts");




class HomeComponent {
    constructor() {
    }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 36, vars: 0, consts: [["id", "intro"], [1, "container-fluid", "h-100"], [1, "row", "h-100"], [1, "col-md-12", "col-12", "my-auto", "text-center"], ["src", "../../../assets/imgs/ooug_png.png", "alt", "OOUG_icon", "width", "200px", 1, "d-none", "d-md-block", "mx-auto", "img-fluid", "mb-4"], ["id", "ooug_title"], [2, "color", "red"], [1, "text-light"], [1, "text-center", "text-light", "mt-3", 2, "font-size", "1.5rem"], [1, "container"], [1, "row", "mt-5"], [1, "col-md-12", "col-12"], [1, "text-center"], [1, "row"], [1, "col-md-4", "col-12"], ["src", "../../../assets/imgs/vision.png", "width", "100%", "alt", "our_vision", 1, "img-fluid"], [1, "col-md-8", "col-12", "text-justify", "my-auto", "text-secondary"], ["src", "../../../assets/imgs/mission.png", "width", "100%", "alt", "our_mission", 1, "img-fluid"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Odisha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Oracle Users Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "No Rollback, Only Commit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " OUR VISION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Our vision is to enhance the inner talent of every individual student in the best way possible.We are constantly trying to encourage students to achieve their full potential. Our vision is to make our country proud and prosper with the help of youth empowerment . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " OUR MISSION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Our misssion is to train our students in the latest technical as well as non-technical fields so that they become the flagbearers in thier respective fields and achieve success in thier career.We at OOUG focus to build students technically as well as morally so that the succeed in their life. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-upcoming-events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-technology-stack");
    } }, directives: [_components_upcoming_events_upcoming_events_component__WEBPACK_IMPORTED_MODULE_1__["UpcomingEventsComponent"], _components_technology_stack_technology_stack_component__WEBPACK_IMPORTED_MODULE_2__["TechnologyStackComponent"]], styles: ["@import \"https://fonts.googleapis.com/css?family=Good+Times\";\n#intro[_ngcontent-%COMP%] {\n  height: 100vh;\n  background: url('back2.jpg');\n  background-size: cover !important;\n}\n#ooug_title[_ngcontent-%COMP%] {\n  font-family: \"Good Times\", \"Roboto\";\n  font-size: 3rem;\n  line-height: 3.8rem;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9EOlxcb291ZyB3ZWJzaXRlXFx3ZWIvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNERBQUE7QUFDUjtFQUNJLGFBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0FDQ0o7QURFQTtFQUNJLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFQTs7Ozs7O0VBTUkscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9R29vZCtUaW1lc1wiO1xyXG4jaW50cm8ge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmFjazIuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNvb3VnX3RpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkdvb2QgVGltZXNcIiwgXCJSb2JvdG9cIjtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzLjhyZW07XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbn0iLCJAaW1wb3J0IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUdvb2QrVGltZXNcIjtcbiNpbnRybyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWdzL2JhY2syLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufVxuXG4jb291Z190aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvb2QgVGltZXNcIiwgXCJSb2JvdG9cIjtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBsaW5lLWhlaWdodDogMy44cmVtO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_upcoming_events_upcoming_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/upcoming-events/upcoming-events.component */ "./src/app/pages/home/components/upcoming-events/upcoming-events.component.ts");
/* harmony import */ var _components_technology_stack_technology_stack_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/technology-stack/technology-stack.component */ "./src/app/pages/home/components/technology-stack/technology-stack.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");








const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }
];
class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_components_upcoming_events_upcoming_events_component__WEBPACK_IMPORTED_MODULE_3__["UpcomingEventsComponent"],
        _components_technology_stack_technology_stack_component__WEBPACK_IMPORTED_MODULE_4__["TechnologyStackComponent"],
        _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_upcoming_events_upcoming_events_component__WEBPACK_IMPORTED_MODULE_3__["UpcomingEventsComponent"],
                    _components_technology_stack_technology_stack_component__WEBPACK_IMPORTED_MODULE_4__["TechnologyStackComponent"],
                    _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map