(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 6804);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resume/resume.component */ 8952);



class AppComponent {
    /**
     * Navigate with a smooth scroll to the element given as parameter
     *
     * @param element the event throwed on the click of the navigate button
     */
    scrollToPortfolio(element) {
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["portfolio-root"]], decls: 14, vars: 0, consts: [["id", "container"], [1, "welcome"], [1, "welcome__content"], [1, "subtitle"], [3, "click"], ["src", "assets/chevron.svg", "alt", "lien portfolio", 1, "portfolio__goto", 2, "width", "3rem"], ["id", "portfolio"], ["portfolio", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Bonjour, je m'appelle Gilles.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Bienvenue sur mon Curriculum Vitae !");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12); return ctx.scrollToPortfolio(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "portfolio-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "main", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "portfolio-resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _resume_resume_component__WEBPACK_IMPORTED_MODULE_1__.ResumeComponent], styles: ["#container[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: grid;\n  grid-template: 1fr 1fr/18rem minmax(18rem, 65rem);\n  justify-content: center;\n  overflow-y: scroll;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n#container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n#container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%] {\n  height: 100vh;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  scroll-snap-align: end;\n}\n#container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(1rem, 3vw + 1rem, 4rem);\n  position: relative;\n  font-family: \"Source Code Pro\", monospace;\n  width: -webkit-max-content;\n  width: max-content;\n}\n#container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before, #container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n#container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  background: var(--bg-color);\n  animation: typewriter var(--typewriterSpeed) steps(var(--typewriterCharacters)) 1s forwards;\n}\n#container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  width: 0.125em;\n  background: black;\n  animation: typewriter var(--typewriterSpeed) steps(var(--typewriterCharacters)) 1s forwards, blink 750ms steps(var(--typewriterCharacters)) infinite;\n}\n#container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.7);\n  margin: 5rem 0;\n  font-size: 2rem;\n  font-weight: 400;\n  opacity: 0;\n  transform: translateY(3rem);\n  animation: fadeInUp 2s ease calc(var(--typewriterSpeed) + 2s) forwards;\n}\n#container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   .portfolio__goto[_ngcontent-%COMP%] {\n  opacity: 0;\n  animation: bounce 1.5s infinite calc(var(--typewriterSpeed) + 3s), visibility 1.5s forwards calc(var(--typewriterSpeed) + 3s);\n}\n#container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   .portfolio__goto[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n@keyframes typewriter {\n  to {\n    left: 100%;\n  }\n}\n@keyframes blink {\n  to {\n    background: transparent;\n  }\n}\n@keyframes visibility {\n  to {\n    opacity: 0.8;\n  }\n}\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-30px);\n  }\n  60% {\n    transform: translateY(-15px);\n  }\n}\n@keyframes fadeInUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n#container[_ngcontent-%COMP%]    > aside[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n#container[_ngcontent-%COMP%]    > main[_ngcontent-%COMP%] {\n  scroll-snap-align: start;\n  display: flex;\n  padding: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQUFGO0FBRUU7RUFDRSxhQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQURKO0FBS007RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSwwQkFBQTtFQUFBLGtCQUFBO0FBSFI7QUFLUTtFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUFKVjtBQU9RO0VBQ0UsMkJBQUE7RUFDQSwyRkFBQTtBQUxWO0FBUVE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvSkFBQTtBQU5WO0FBV007RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxzRUFBQTtBQVRSO0FBYUk7RUFDRSxVQUFBO0VBQ0EsNkhBQUE7QUFYTjtBQWNNO0VBQ0UsZUFBQTtBQVpSO0FBZ0JJO0VBQ0U7SUFDRSxVQUFBO0VBZE47QUFDRjtBQWlCSTtFQUNFO0lBQ0UsdUJBQUE7RUFmTjtBQUNGO0FBa0JJO0VBQ0U7SUFDRSxZQUFBO0VBaEJOO0FBQ0Y7QUFtQkk7RUFDRTtJQUNFLHdCQUFBO0VBakJOO0VBbUJJO0lBQ0UsNEJBQUE7RUFqQk47RUFtQkk7SUFDRSw0QkFBQTtFQWpCTjtBQUNGO0FBb0JJO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFsQk47QUFDRjtBQXNCRTtFQUNFLGVBQUE7QUFwQko7QUF1QkU7RUFDRSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBckJKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIC8gMThyZW0gbWlubWF4KDE4cmVtLCA2NXJlbSk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvL3Njcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLndlbGNvbWUge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBlbmQ7XG5cbiAgICAud2VsY29tZV9fY29udGVudCB7XG5cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzdncgKyAxcmVtLCA0cmVtKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LWZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsIG1vbm9zcGFjZTtcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuXG4gICAgICAgICY6OmJlZm9yZSxcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgICAgICAgICBhbmltYXRpb246IHR5cGV3cml0ZXIgdmFyKC0tdHlwZXdyaXRlclNwZWVkKSBzdGVwcyh2YXIoLS10eXBld3JpdGVyQ2hhcmFjdGVycykpIDFzIGZvcndhcmRzO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIHdpZHRoOiAwLjEyNWVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgIGFuaW1hdGlvbjogdHlwZXdyaXRlciB2YXIoLS10eXBld3JpdGVyU3BlZWQpIHN0ZXBzKHZhcigtLXR5cGV3cml0ZXJDaGFyYWN0ZXJzKSkgMXMgZm9yd2FyZHMsXG4gICAgICAgICAgYmxpbmsgNzUwbXMgc3RlcHModmFyKC0tdHlwZXdyaXRlckNoYXJhY3RlcnMpKSBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogaHNsKDAgMCUgMCUgLyAwLjcpO1xuICAgICAgICBtYXJnaW46IDVyZW0gMDtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3JlbSk7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluVXAgMnMgZWFzZSBjYWxjKHZhcigtLXR5cGV3cml0ZXJTcGVlZCkgKyAycykgZm9yd2FyZHM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnBvcnRmb2xpb19fZ290byB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgYW5pbWF0aW9uOiBib3VuY2UgMS41cyBpbmZpbml0ZSBjYWxjKHZhcigtLXR5cGV3cml0ZXJTcGVlZCkgKyAzcyksXG4gICAgICB2aXNpYmlsaXR5IDEuNXMgZm9yd2FyZHMgY2FsYyh2YXIoLS10eXBld3JpdGVyU3BlZWQpICsgM3MpO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgdHlwZXdyaXRlciB7XG4gICAgICB0byB7XG4gICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBibGluayB7XG4gICAgICB0byB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgdmlzaWJpbGl0eSB7XG4gICAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGJvdW5jZSB7XG4gICAgICAwJSwgMjAlLCA1MCUsIDgwJSwgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICAgIDQwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gICAgICB9XG4gICAgICA2MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgZmFkZUluVXAge1xuICAgICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgPiBhc2lkZSB7XG4gICAgcGFkZGluZzogMnJlbSAwO1xuICB9XG5cbiAgPiBtYWluIHtcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAycmVtO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 6804);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume/resume.component */ 8952);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/timeline */ 2670);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/progressbar */ 8220);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/avatar */ 7839);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tag */ 3771);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/chip */ 2341);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/panel */ 4020);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/divider */ 669);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-markdown */ 6715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            primeng_avatar__WEBPACK_IMPORTED_MODULE_5__.AvatarModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule,
            primeng_card__WEBPACK_IMPORTED_MODULE_9__.CardModule,
            primeng_chip__WEBPACK_IMPORTED_MODULE_10__.ChipModule,
            primeng_divider__WEBPACK_IMPORTED_MODULE_11__.DividerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_14__.MarkdownModule.forRoot(),
            primeng_panel__WEBPACK_IMPORTED_MODULE_15__.PanelModule,
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_16__.ProgressBarModule,
            primeng_tag__WEBPACK_IMPORTED_MODULE_17__.TagModule,
            primeng_timeline__WEBPACK_IMPORTED_MODULE_18__.TimelineModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__.ResumeComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        primeng_avatar__WEBPACK_IMPORTED_MODULE_5__.AvatarModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_9__.CardModule,
        primeng_chip__WEBPACK_IMPORTED_MODULE_10__.ChipModule,
        primeng_divider__WEBPACK_IMPORTED_MODULE_11__.DividerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_14__.MarkdownModule, primeng_panel__WEBPACK_IMPORTED_MODULE_15__.PanelModule,
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_16__.ProgressBarModule,
        primeng_tag__WEBPACK_IMPORTED_MODULE_17__.TagModule,
        primeng_timeline__WEBPACK_IMPORTED_MODULE_18__.TimelineModule] }); })();


/***/ }),

/***/ 8952:
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeComponent": () => (/* binding */ ResumeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ 6715);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/panel */ 4020);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/timeline */ 2670);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 3013);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tag */ 3771);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/progressbar */ 8220);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 4207);













function ResumeComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "p-progressBar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tool_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tool_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", tool_r3.rate)("showValue", false);
} }
function ResumeComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", "#607D8B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "pi pi-bookmark");
} }
function ResumeComponent_ng_template_29_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 20);
} if (rf & 2) {
    const mission_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/showcase/images/demo/product/" + mission_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", mission_r5.name);
} }
const _c0 = function () { return { backgroundColor: "hsl(48, 37%, 94%)" }; };
function ResumeComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ResumeComponent_ng_template_29_img_1_Template, 1, 2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mission_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", mission_r5.client)("subheader", ctx_r2.missionTimelapse(mission_r5.startDate, mission_r5.endDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", mission_r5.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mission_r5.description);
} }
class ResumeComponent {
    /**
     * Constructor
     *
     * @param httpClient the HTTP client to be injected as a dependency
     * @param markdownService the markdown service to be injected as a dependency
     */
    constructor(httpClient, markdownService) {
        this.httpClient = httpClient;
        this.markdownService = markdownService;
        this.missions = [];
        this.tools = [];
        this.experience = new Date(2013, 4);
        this.birthday = new Date(1986, 5);
        // empty
    }
    /**
     * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
     */
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === null || _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === void 0 ? void 0 : _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.missions).subscribe((response) => (this.missions = response));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === null || _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === void 0 ? void 0 : _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tools).subscribe((response) => (this.tools = response));
        this.httpClient
            .get(`/assets/missions/201901_full.md`, { responseType: 'text' })
            .subscribe((value) => (this.markdown = this.markdownService.compile(value)));
    }
    /**
     * A lifecycle hook that is called after Angular has fully initialized a component's view
     */
    ngAfterViewInit() {
        const intersectionObserver = new IntersectionObserver((entries) => {
            // trigger the animation on the intersection according to the side of the timeline event
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target
                        .querySelectorAll(':nth-child(2n + 1) > .p-timeline-event-content')
                        .forEach((element) => element.classList.add('mission__animation-right'));
                    entry.target
                        .querySelectorAll(':nth-child(2n) > .p-timeline-event-content')
                        .forEach((element) => element.classList.add('mission__animation-left'));
                }
                else {
                    entry.target
                        .querySelectorAll(':nth-child(2n + 1) > .p-timeline-event-content')
                        .forEach((element) => element.classList.remove('mission__animation-right'));
                    entry.target
                        .querySelectorAll(':nth-child(2n) > .p-timeline-event-content')
                        .forEach((element) => element.classList.remove('mission__animation-left'));
                }
            });
        }, {
            threshold: 0,
        });
        const experienceElement = document.querySelector('p-panel[header="Expérience"] .p-component .p-timeline-alternate');
        if (experienceElement)
            intersectionObserver.observe(experienceElement);
    }
    /**
     * Calculate the number of years between a given date and the current date
     * @param {Date} date the date to substract to the current date
     */
    numberOfYearsFromDateToCurrentDate(date) {
        return new Date().getFullYear() - date.getFullYear();
    }
    /**
     * Construct the date to timelapse to be displayed on a mission
     *
     * @param start the date (string) on which the mission started
     * @param end the date (string) on which the mission ended
     * @return the label representing the mission timelapse
     */
    missionTimelapse(start, end) {
        if (end)
            return `${this.formatDate(new Date(start))} - ${this.formatDate(new Date(end))} (${this.missionDuration(start, end)})`;
        return `${this.formatDate(new Date(start))} - en cours (${this.missionDuration(start, end)})`;
    }
    /**
     * Format the given date and return it as a string
     *
     * @param date the date
     * @return the formated date
     */
    formatDate(date) {
        const addTwoDigits = (number) => {
            if (number < 10) {
                return `0${number}`;
            }
            return `${number}`;
        };
        return `${addTwoDigits(date.getDay() + 1)}/${addTwoDigits(date.getMonth() + 1)}/${date.getFullYear()}`;
    }
    /**
     * Calculate the mission duration
     *
     * @param {string} start the date (string) on which the mission started
     * @param {string} end the date (string) on which the mission ended
     * @return label representing the mission duration
     */
    missionDuration(start, end) {
        const startTimestamp = Date.parse(start);
        const startDate = new Date(startTimestamp);
        let endDate = new Date(Date.now());
        if (end) {
            const endTimestamp = Date.parse(end);
            endDate = new Date(endTimestamp);
        }
        return `${this.monthBetweenDates(startDate, endDate)} mois`;
    }
    /**
     * Calculate the number of month between two dates
     *
     * @param {Date} start the starting date
     * @param {Date} end the ending date
     * @return number representing the number of months
     */
    monthBetweenDates(start, end) {
        let months;
        months = (end.getFullYear() - start.getFullYear()) * 12;
        months -= start.getMonth();
        months += end.getMonth();
        return months <= 0 ? 0 : months;
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_markdown__WEBPACK_IMPORTED_MODULE_4__.MarkdownService)); };
ResumeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["portfolio-resume"]], decls: 41, vars: 4, consts: [["header", "Profil et g\u00E9n\u00E9ralit\u00E9s"], [2, "text-align", "start"], ["header", "Langages et outils"], [2, "display", "grid", "grid-template-columns", "1fr 1fr", "grid-column-gap", "2rem", "grid-row-gap", "1rem", "padding", "0 2rem"], [4, "ngFor", "ngForOf"], ["header", "Exp\u00E9rience"], [3, "data"], ["align", "alternate", "styleClass", "customized-timeline", 3, "value"], ["pTemplate", "marker"], ["pTemplate", "content"], ["header", "Loisirs"], [1, "p-grid", "p-flex-column"], [1, "p-col"], [1, "tool"], [3, "value", "showValue"], [1, "custom-marker", "p-shadow-2"], [3, "ngClass"], ["styleClass", "mission", 3, "header", "subheader"], ["width", "200", "class", "p-shadow-2", 3, "src", "alt", 4, "ngIf"], ["pButton", "", "label", "En savoir plus", 1, "p-button-text"], ["width", "200", 1, "p-shadow-2", 3, "src", "alt"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Je profite d\u2019une exp\u00E9rience de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " en tant que concepteur d\u00E9veloppeur en mati\u00E8re de syst\u00E8mes d\u2019information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Principalement sp\u00E9cialis\u00E9 dans les technologies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "backend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " (Java, Spring...), que j'ai pu \u00E9prouver sur diff\u00E9rentes missions elles-m\u00EAmes touchant \u00E0 plusieurs domaines d'activit\u00E9s (domaine du spatial, des ressources humaines, des collectivit\u00E9s...). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " J'ai n\u00E9anmoins un profil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "fullstack");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " de par les nombreux projets frontend que j'ai pu r\u00E9aliser en parall\u00E8le. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " J'ai l'habitude de travailler avec les m\u00E9thodes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Agiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " que j'affectionne quand il s'agit de conduire un projet (Scrum, Kanban..). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ResumeComponent_ng_container_24_Template, 5, 3, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p-panel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "markdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p-timeline", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ResumeComponent_ng_template_28_Template, 2, 3, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ResumeComponent_ng_template_29_Template, 5, 7, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p-panel", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Basketball en comp\u00E9tition (niveau excellence)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Course \u00E0 pied (marathon de Toulouse en \u00E9quipe)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "D\u00E9veloppement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.numberOfYearsFromDateToCurrentDate(ctx.experience), " ans");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tools);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.markdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.missions);
    } }, directives: [primeng_panel__WEBPACK_IMPORTED_MODULE_5__.Panel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ngx_markdown__WEBPACK_IMPORTED_MODULE_4__.MarkdownComponent, primeng_timeline__WEBPACK_IMPORTED_MODULE_7__.Timeline, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_tag__WEBPACK_IMPORTED_MODULE_9__.Tag, primeng_progressbar__WEBPACK_IMPORTED_MODULE_10__.ProgressBar, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, primeng_card__WEBPACK_IMPORTED_MODULE_11__.Card, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-row-gap: 2rem;\n}\n[_nghost-%COMP%]   .tool[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .tool[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: start;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .tool[_ngcontent-%COMP%]    > p-progressbar[_ngcontent-%COMP%] {\n  flex: 2;\n}\n[_nghost-%COMP%]   .custom-marker[_ngcontent-%COMP%] {\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  border-radius: 50%;\n  z-index: 1;\n}\n[_nghost-%COMP%]     .p-timeline-event-content, [_nghost-%COMP%]     .p-timeline-event-opposite {\n  line-height: 1;\n}\n[_nghost-%COMP%]     .p-progressbar {\n  height: 0.5rem;\n  border-radius: 5px;\n}\n[_nghost-%COMP%]     .p-panel-header {\n  justify-content: center;\n}\n[_nghost-%COMP%]     .mission__animation-left {\n  opacity: 0;\n  transform: translateX(-40px);\n  animation: fadeIn 3s forwards;\n  -webkit-animation: fadeIn 3s forwards;\n  -moz-animation: fadeIn 3s forwards;\n  -o-animation: fadeIn 3s forwards;\n  -ms-animation: fadeIn 3s forwards;\n}\n[_nghost-%COMP%]     .mission__animation-right {\n  opacity: 0;\n  transform: translateX(40px);\n  animation: fadeIn 3s forwards;\n  -webkit-animation: fadeIn 3s forwards;\n  -moz-animation: fadeIn 3s forwards;\n  -o-animation: fadeIn 3s forwards;\n  -ms-animation: fadeIn 3s forwards;\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@media screen and (max-width: 960px) {\n  [_nghost-%COMP%]     .customized-timeline .p-timeline-event:nth-child(even) {\n    flex-direction: row !important;\n  }\n  [_nghost-%COMP%]     .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content {\n    text-align: left !important;\n  }\n  [_nghost-%COMP%]     .customized-timeline .p-timeline-event-opposite {\n    flex: 0;\n  }\n  [_nghost-%COMP%]     .customized-timeline .p-card {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0UsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUVJO0VBQ0UsT0FBQTtBQUFOO0FBSUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUZKO0FBTUk7O0VBRUUsY0FBQTtBQUpOO0FBT0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFMTjtBQVFJO0VBQ0UsdUJBQUE7QUFOTjtBQVNJO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtBQVBOO0FBVUk7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FBUk47QUFXSTtFQUNFO0lBQ0UsVUFBQTtFQVROO0VBV0k7SUFDRSxVQUFBO0VBVE47RUFXSTtJQUNFLHdCQUFBO0VBVE47QUFDRjtBQTZERTtFQUdNO0lBQ0UsOEJBQUE7RUFqQlI7RUFtQlE7SUFDRSwyQkFBQTtFQWpCVjtFQXFCTTtJQUNFLE9BQUE7RUFuQlI7RUFzQk07SUFDRSxnQkFBQTtFQXBCUjtBQUNGIiwiZmlsZSI6InJlc3VtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1yb3ctZ2FwOiAycmVtO1xuXG4gIC50b29sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICA+IHNwYW4ge1xuICAgICAgZmxleDogMTtcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG5cbiAgICA+IHAtcHJvZ3Jlc3NiYXIge1xuICAgICAgZmxleDogMjtcbiAgICB9XG4gIH1cblxuICAuY3VzdG9tLW1hcmtlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIDo6bmctZGVlcCB7XG4gICAgLnAtdGltZWxpbmUtZXZlbnQtY29udGVudCxcbiAgICAucC10aW1lbGluZS1ldmVudC1vcHBvc2l0ZSB7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG5cbiAgICAucC1wcm9ncmVzc2JhciB7XG4gICAgICBoZWlnaHQ6IDAuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAucC1wYW5lbC1oZWFkZXIge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLm1pc3Npb25fX2FuaW1hdGlvbi1sZWZ0IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwcHgpO1xuICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgICAgLW1vei1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAgIC1vLWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgICAgLW1zLWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgIH1cblxuICAgIC5taXNzaW9uX19hbmltYXRpb24tcmlnaHQge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MHB4KTtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgICAtby1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAgIC1tcy1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIEAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQC1vLWtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBALW1zLWtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIDo6bmctZGVlcCB7XG4gICAgICAuY3VzdG9taXplZC10aW1lbGluZSB7XG4gICAgICAgIC5wLXRpbWVsaW5lLWV2ZW50Om50aC1jaGlsZChldmVuKSB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgLnAtdGltZWxpbmUtZXZlbnQtY29udGVudCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnAtdGltZWxpbmUtZXZlbnQtb3Bwb3NpdGUge1xuICAgICAgICAgIGZsZXg6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAucC1jYXJkIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 6804:
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/avatar */ 7839);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/chip */ 2341);




const _c0 = function () { return { padding: "0 2rem" }; };
class SidebarComponent {
    /**
     * Open the default email client with default values
     */
    openEmailClient() {
        window.open('mailto:gilles.gardet@gmail.com');
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["portfolio-sidebar"]], decls: 8, vars: 3, consts: [[2, "display", "flex", "flex-direction", "column", "align-items", "center"], ["icon", "pi pi-user", "size", "xlarge", "shape", "circle", "styleClass", "p-mt-5"], [2, "font-size", "1.2rem", "font-weight", "bold", "margin", "1rem 0"], [2, "text-align", "center", "margin-bottom", "1rem"], ["label", "gilles.gardet@gmail.com", "icon", "pi pi-envelope", "styleClass", "p-mr-2", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gilles Gardet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "D\u00E9veloppeur fullstack, curieux par nature et passion\u00E9 par son m\u00E9tier.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-chip", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_p_chip_click_7_listener() { return ctx.openEmailClient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_1__.Card, primeng_avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar, primeng_chip__WEBPACK_IMPORTED_MODULE_3__.Chip], styles: ["[_nghost-%COMP%] {\n  position: sticky;\n  top: 2rem;\n}\n[_nghost-%COMP%]     p-chip[label=\"gilles.gardet@gmail.com\"]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFNBQUE7QUFDRjtBQUVJO0VBQ0UsZUFBQTtBQUFOIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMnJlbTtcblxuICA6Om5nLWRlZXAge1xuICAgIHAtY2hpcFtsYWJlbD0nZ2lsbGVzLmdhcmRldEBnbWFpbC5jb20nXTpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    missions: [
        {
            client: 'Orange - SPDP & O2H',
            startDate: '2020-12-01',
            endDate: null,
        },
        {
            client: 'MAIF - Gimaweb',
            startDate: '2020-07-01',
            endDate: '2020-12-01',
        },
        {
            client: 'Air France - Dev Portal',
            startDate: '2019-01-01',
            endDate: '2020-07-01',
        },
        {
            client: 'Air France - CCAPI',
            startDate: '2016-07-01',
            endDate: '2019-01-01',
        },
        {
            client: 'Airbus - GAS',
            startDate: '2016-01-01',
            endDate: '2016-07-01',
        },
        {
            client: 'GFI - Gimaweb',
            startDate: '2015-04-01',
            endDate: '2016-01-01',
        },
        {
            client: 'Mairie de Toulouse - Portail interne',
            startDate: '2015-01-01',
            endDate: '2015-04-01',
        },
        {
            client: 'Airbus - Flight Ops Document Manager',
            startDate: '2013-04-01',
            endDate: '2015-01-01',
        },
    ],
    tools: [
        { name: 'HTML', rate: 80 },
        { name: 'Java', rate: 90 },
        { name: 'Spring Boot', rate: 85 },
        { name: 'Spring MVC', rate: 85 },
        { name: 'Spring Data', rate: 75 },
        { name: 'Spring Security', rate: 70 },
        { name: 'CSS', rate: 75 },
        { name: 'Sass', rate: 75 },
        { name: 'Javascript', rate: 80 },
        { name: 'SQL', rate: 70 },
        { name: 'TypeScript', rate: 80 },
        { name: 'Angular', rate: 85 },
        { name: 'NestJS', rate: 70 },
        { name: 'ReactJS', rate: 65 },
        { name: 'Hibernate', rate: 80 },
        { name: 'Typeorm', rate: 70 },
        { name: 'Kotlin', rate: 80 },
    ],
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map