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
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["portfolio-root"]], decls: 5, vars: 0, consts: [["id", "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "portfolio-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "portfolio-resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _resume_resume_component__WEBPACK_IMPORTED_MODULE_1__.ResumeComponent], styles: [".p-card-title,   .p-card-subtitle {\n  text-align: center;\n}\n  .p-tag,   .p-progressbar .p-progressbar-value {\n  background: var(--dark-grey);\n}\n  code {\n  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;\n  font-size: 0.7rem;\n  background-color: lightgray;\n  border-radius: 5px;\n  padding: 0.2rem;\n}\n#container[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: grid;\n  grid-template: 1fr 1fr/18rem minmax(18rem, 65rem);\n  justify-content: center;\n  overflow-y: scroll;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n#container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n#container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%] {\n  height: 100vh;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  scroll-snap-align: end;\n}\n#container[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(1rem, 3vw + 1rem, 4rem);\n  position: relative;\n  font-family: \"Source Code Pro\", monospace;\n  width: -webkit-max-content;\n  width: max-content;\n}\n#container[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before, #container[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n#container[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  background: var(--bg-color);\n  animation: typewriter var(--typewriterSpeed) steps(var(--typewriterCharacters)) 1s forwards;\n}\n#container[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  width: 0.125em;\n  background: black;\n  animation: typewriter var(--typewriterSpeed) steps(var(--typewriterCharacters)) 1s forwards, blink 750ms steps(var(--typewriterCharacters)) infinite;\n}\n#container[_ngcontent-%COMP%]   .welcome__content__subtitle[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.7);\n  margin: 5rem 0;\n  font-size: 2rem;\n  font-weight: 400;\n  opacity: 0;\n  transform: translateY(3rem);\n  animation: fadeInUp 2s ease calc(var(--typewriterSpeed) + 2s) forwards;\n}\n#container[_ngcontent-%COMP%]   .welcome__content__goto[_ngcontent-%COMP%] {\n  opacity: 0;\n  animation: bounce 1.5s infinite calc(var(--typewriterSpeed) + 3s), visibility 1.5s forwards calc(var(--typewriterSpeed) + 3s);\n}\n#container[_ngcontent-%COMP%]   .welcome__content__goto[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n@keyframes typewriter {\n  to {\n    left: 100%;\n  }\n}\n@keyframes blink {\n  to {\n    background: transparent;\n  }\n}\n@keyframes visibility {\n  to {\n    opacity: 0.8;\n  }\n}\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-30px);\n  }\n  60% {\n    transform: translateY(-15px);\n  }\n}\n@keyframes fadeInUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n#container[_ngcontent-%COMP%]    > aside[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  margin: 0 1rem;\n}\n#container[_ngcontent-%COMP%]    > main[_ngcontent-%COMP%] {\n  scroll-snap-align: start;\n  display: flex;\n  padding: 2rem 1rem;\n}\n@media screen and (max-width: 960px) {\n  #container[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(18rem, 65rem);\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3N0eWxlcy9wcmltZW5nL292ZXJyaWRlLnNjc3MiLCJhcHAuY29tcG9uZW50LnNjc3MiLCIuLi9zdHlsZXMvZ2xvYmFscy9jb2RlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0VBRUUsa0JBQUE7QUNBSjtBREdFO0VBQ0UsNEJBQUE7QUNESjtBQ05BO0VBQ0UsK0ZBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEU0Y7QUFYQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQWNGO0FBWEU7RUFDRSxhQUFBO0FBYUo7QUFWRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVlKO0FBVE07RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSwwQkFBQTtFQUFBLGtCQUFBO0FBV1I7QUFUUTtFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUFVVjtBQVBRO0VBQ0UsMkJBQUE7RUFDQSwyRkFBQTtBQVNWO0FBTlE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvSkFBQTtBQVFWO0FBSE07RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxzRUFBQTtBQUtSO0FBRk07RUFDRSxVQUFBO0VBQ0EsNkhBQUE7QUFJUjtBQURRO0VBQ0UsZUFBQTtBQUdWO0FBRUk7RUFDRTtJQUNFLFVBQUE7RUFBTjtBQUNGO0FBR0k7RUFDRTtJQUNFLHVCQUFBO0VBRE47QUFDRjtBQUlJO0VBQ0U7SUFDRSxZQUFBO0VBRk47QUFDRjtBQUtJO0VBQ0U7SUFLRSx3QkFBQTtFQVBOO0VBU0k7SUFDRSw0QkFBQTtFQVBOO0VBU0k7SUFDRSw0QkFBQTtFQVBOO0FBQ0Y7QUFVSTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBUk47QUFDRjtBQVlFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFWSjtBQWFFO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFYSjtBQWVBO0VBQ0U7SUFDRSwyQ0FBQTtJQUNBLGVBQUE7RUFaRjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIC5wLWNhcmQtdGl0bGUsXG4gIC5wLWNhcmQtc3VidGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5wLXRhZywgLnAtcHJvZ3Jlc3NiYXIgLnAtcHJvZ3Jlc3NiYXItdmFsdWUge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstZ3JleSk7XG4gIH1cbn1cbiIsIkB1c2UgXCJzcmMvc3R5bGVzL3ByaW1lbmcvb3ZlcnJpZGVcIjtcbkB1c2UgXCJzcmMvc3R5bGVzL2dsb2JhbHMvY29kZVwiO1xuXG4jY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDE4cmVtIG1pbm1heCgxOHJlbSwgNjVyZW0pO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgLy9zY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC53ZWxjb21lIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogZW5kO1xuXG4gICAgJl9fY29udGVudCB7XG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgM3Z3ICsgMXJlbSwgNHJlbSk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgQ29kZSBQcm8nLCBtb25vc3BhY2U7XG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcblxuICAgICAgICAmOjpiZWZvcmUsXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBld3JpdGVyIHZhcigtLXR5cGV3cml0ZXJTcGVlZCkgc3RlcHModmFyKC0tdHlwZXdyaXRlckNoYXJhY3RlcnMpKSAxcyBmb3J3YXJkcztcbiAgICAgICAgfVxuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICB3aWR0aDogMC4xMjVlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICBhbmltYXRpb246IHR5cGV3cml0ZXIgdmFyKC0tdHlwZXdyaXRlclNwZWVkKSBzdGVwcyh2YXIoLS10eXBld3JpdGVyQ2hhcmFjdGVycykpIDFzIGZvcndhcmRzLFxuICAgICAgICAgICAgYmxpbmsgNzUwbXMgc3RlcHModmFyKC0tdHlwZXdyaXRlckNoYXJhY3RlcnMpKSBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmX19zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiBoc2woMCAwJSAwJSAvIDAuNyk7XG4gICAgICAgIG1hcmdpbjogNXJlbSAwO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW5VcCAycyBlYXNlIGNhbGModmFyKC0tdHlwZXdyaXRlclNwZWVkKSArIDJzKSBmb3J3YXJkcztcbiAgICAgIH1cblxuICAgICAgJl9fZ290byB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGFuaW1hdGlvbjogYm91bmNlIDEuNXMgaW5maW5pdGUgY2FsYyh2YXIoLS10eXBld3JpdGVyU3BlZWQpICsgM3MpLFxuICAgICAgICAgIHZpc2liaWxpdHkgMS41cyBmb3J3YXJkcyBjYWxjKHZhcigtLXR5cGV3cml0ZXJTcGVlZCkgKyAzcyk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyB0eXBld3JpdGVyIHtcbiAgICAgIHRvIHtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICAgIHRvIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyB2aXNpYmlsaXR5IHtcbiAgICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgYm91bmNlIHtcbiAgICAgIDAlLFxuICAgICAgMjAlLFxuICAgICAgNTAlLFxuICAgICAgODAlLFxuICAgICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICAgIDQwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gICAgICB9XG4gICAgICA2MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgZmFkZUluVXAge1xuICAgICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgPiBhc2lkZSB7XG4gICAgcGFkZGluZzogMnJlbSAwO1xuICAgIG1hcmdpbjogMCAxcmVtO1xuICB9XG5cbiAgPiBtYWluIHtcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgI2NvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMThyZW0sIDY1cmVtKTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cbn1cbiIsIjo6bmctZGVlcCBjb2RlIHtcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIFNGIE1vbm8sIE1lbmxvLCBDb25zb2xhcywgTGliZXJhdGlvbiBNb25vLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMC4ycmVtO1xufVxuIl19 */"] });


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
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dialog */ 2404);
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
            primeng_dialog__WEBPACK_IMPORTED_MODULE_19__.DialogModule,
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
        primeng_timeline__WEBPACK_IMPORTED_MODULE_18__.TimelineModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_19__.DialogModule] }); })();


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
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ 2404);














function ResumeComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "p-progressBar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tool_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tool_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", tool_r4.rate)("showValue", false);
} }
function ResumeComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", "#607D8B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "pi pi-bookmark");
} }
const _c0 = function () { return { backgroundColor: "hsl(48, 37%, 94%)" }; };
function ResumeComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "markdown", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResumeComponent_ng_template_28_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const mission_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.openDialog(mission_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mission_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", mission_r6.client)("subheader", ctx_r2.missionTimelapse(mission_r6.startDate, mission_r6.endDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.missionFromDate(mission_r6.startDate, "light"));
} }
function ResumeComponent_p_dialog_37_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-dialog", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function ResumeComponent_p_dialog_37_Template_p_dialog_visibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.displayDialog = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "markdown", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "markdown", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx_r3.displayDialog)("header", ctx_r3.selectedMission == null ? null : ctx_r3.selectedMission.client)("modal", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.missionFromDate(ctx_r3.selectedMission == null ? null : ctx_r3.selectedMission.startDate, "light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.missionFromDate(ctx_r3.selectedMission == null ? null : ctx_r3.selectedMission.startDate, "full"));
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
        this.selectedMission = null;
        this.experience = new Date(2013, 4);
        this.displayDialog = false;
        // empty
    }
    /**
     * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
     */
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === null || _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === void 0 ? void 0 : _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.missions).subscribe((response) => (this.missions = response));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === null || _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === void 0 ? void 0 : _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tools).subscribe((response) => (this.tools = response));
    }
    /**
     * Retrieve the mission from the passed date
     *
     * @param startingDate the starting date of the mission
     * @param type the type of mardown file to fetch
     * @return description the mission description we want to display
     */
    missionFromDate(startingDate, type) {
        const date = new Date(startingDate);
        const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
        return `/assets/missions/${date.getFullYear()}${month}/${date.getFullYear()}${month}_${type}.md`;
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
        // const rateIntersectionObserver = new IntersectionObserver(
        //   (entries: IntersectionObserverEntry[]) => {
        //     // trigger the animation on the intersection according to the side of the timeline event
        //     entries.forEach((entry: IntersectionObserverEntry) => {
        //       if (entry.isIntersecting)
        //         entry.target
        //           .querySelectorAll('.p-progressbar-value')
        //           .forEach((element: Element) => );
        //     });
        //   },
        //   {
        //     threshold: 0,
        //   }
        // );
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
        if (this.monthBetweenDates(startDate, endDate) > 12 && this.monthBetweenDates(startDate, endDate) % 12 > 0) {
            const years = Math.trunc(this.monthBetweenDates(startDate, endDate) / 12);
            const months = this.monthBetweenDates(startDate, endDate) % 12;
            return `${years} an${years > 1 ? 's' : ''} et ${months} mois`;
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
    /**
     * Open the details dialog
     */
    openDialog(mission) {
        this.displayDialog = true;
        this.selectedMission = mission;
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_markdown__WEBPACK_IMPORTED_MODULE_4__.MarkdownService)); };
ResumeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["portfolio-resume"]], decls: 38, vars: 4, consts: [["header", "Profil et g\u00E9n\u00E9ralit\u00E9s"], [2, "text-align", "start"], ["header", "Langages et outils"], [1, "tool"], [4, "ngFor", "ngForOf"], ["header", "Exp\u00E9rience"], ["align", "alternate", "styleClass", "customized-timeline", 3, "value"], ["pTemplate", "marker"], ["pTemplate", "content"], ["header", "Loisirs"], [1, "p-grid", "p-flex-column", 2, "display", "flex", "flex-direction", "column", "gap", "1rem"], [3, "visible", "header", "modal", "visibleChange", 4, "ngIf"], [1, "tool__languages"], [3, "value", "showValue"], [1, "custom-marker", "p-shadow-2"], [3, "ngClass"], ["styleClass", "mission", 3, "header", "subheader"], [3, "src"], [2, "display", "flex", "justify-content", "center"], ["pButton", "", "type", "button", "icon", "pi pi-info-circle", "iconPos", "left", "label", "En savoir plus", 1, "p-button-secondary", "p-button-rounded", "p-button-outlined", 3, "click"], [3, "visible", "header", "modal", "visibleChange"], [2, "display", "flex", "flex-direction", "column", "text-align", "left"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p-timeline", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ResumeComponent_ng_template_27_Template, 2, 3, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ResumeComponent_ng_template_28_Template, 4, 6, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p-panel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Basketball en comp\u00E9tition (niveau excellence)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Course \u00E0 pied (marathon de Toulouse en \u00E9quipe)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "D\u00E9veloppement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ResumeComponent_p_dialog_37_Template, 4, 5, "p-dialog", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.numberOfYearsFromDateToCurrentDate(ctx.experience), " ans");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tools);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.missions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedMission);
    } }, directives: [primeng_panel__WEBPACK_IMPORTED_MODULE_5__.Panel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, primeng_timeline__WEBPACK_IMPORTED_MODULE_7__.Timeline, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_tag__WEBPACK_IMPORTED_MODULE_9__.Tag, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_progressbar__WEBPACK_IMPORTED_MODULE_10__.ProgressBar, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, primeng_card__WEBPACK_IMPORTED_MODULE_11__.Card, ngx_markdown__WEBPACK_IMPORTED_MODULE_4__.MarkdownComponent, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_dialog__WEBPACK_IMPORTED_MODULE_13__.Dialog], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-row-gap: 2rem;\n}\n[_nghost-%COMP%]   .tool[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 2rem;\n  grid-row-gap: 1rem;\n  padding: 0 2rem;\n}\n[_nghost-%COMP%]   .tool__languages[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .tool__languages[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: start;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .tool__languages[_ngcontent-%COMP%]    > p-progressbar[_ngcontent-%COMP%] {\n  flex: 2;\n}\n[_nghost-%COMP%]   .custom-marker[_ngcontent-%COMP%] {\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  border-radius: 50%;\n  z-index: 1;\n}\n[_nghost-%COMP%]     .p-timeline-event-content, [_nghost-%COMP%]     .p-timeline-event-opposite {\n  line-height: 1;\n}\n[_nghost-%COMP%]     .p-progressbar {\n  height: 0.5rem;\n  border-radius: 5px;\n}\n[_nghost-%COMP%]     .p-panel-header {\n  justify-content: center;\n}\n[_nghost-%COMP%]     .mission__animation-left {\n  opacity: 0;\n  transform: translateX(-40px);\n  animation: fadeIn 3s forwards;\n  -webkit-animation: fadeIn 3s forwards;\n  -moz-animation: fadeIn 3s forwards;\n  -o-animation: fadeIn 3s forwards;\n  -ms-animation: fadeIn 3s forwards;\n}\n[_nghost-%COMP%]     .mission__animation-right {\n  opacity: 0;\n  transform: translateX(40px);\n  animation: fadeIn 3s forwards;\n  -webkit-animation: fadeIn 3s forwards;\n  -moz-animation: fadeIn 3s forwards;\n  -o-animation: fadeIn 3s forwards;\n  -ms-animation: fadeIn 3s forwards;\n}\n[_nghost-%COMP%]     .p-timeline-event-content > p-card > .mission > .p-card-body > .p-card-content {\n  text-align: left;\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@media screen and (max-width: 960px) {\n  [_nghost-%COMP%]   .tool[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  [_nghost-%COMP%]     .customized-timeline .p-timeline-event:nth-child(even) {\n    flex-direction: row !important;\n  }\n  [_nghost-%COMP%]     .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content {\n    text-align: left !important;\n  }\n  [_nghost-%COMP%]     .customized-timeline .p-timeline-event-opposite {\n    flex: 0;\n  }\n  [_nghost-%COMP%]     .customized-timeline .p-card {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUNNO0VBQ0UsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUVNO0VBQ0UsT0FBQTtBQUFSO0FBS0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUhKO0FBT0k7O0VBRUUsY0FBQTtBQUxOO0FBUUk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFOTjtBQVNJO0VBQ0UsdUJBQUE7QUFQTjtBQVVJO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtBQVJOO0FBV0k7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FBVE47QUFZSTtFQUNFLGdCQUFBO0FBVk47QUFhSTtFQUNFO0lBQ0UsVUFBQTtFQVhOO0VBYUk7SUFDRSxVQUFBO0VBWE47RUFhSTtJQUNFLHdCQUFBO0VBWE47QUFDRjtBQStERTtFQUNFO0lBQ0UsMEJBQUE7RUFqQko7RUFzQk07SUFDRSw4QkFBQTtFQXBCUjtFQXNCUTtJQUNFLDJCQUFBO0VBcEJWO0VBd0JNO0lBQ0UsT0FBQTtFQXRCUjtFQXlCTTtJQUNFLGdCQUFBO0VBdkJSO0FBQ0YiLCJmaWxlIjoicmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXJvdy1nYXA6IDJyZW07XG5cbiAgLnRvb2wge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMnJlbTtcbiAgICBncmlkLXJvdy1nYXA6IDFyZW07XG4gICAgcGFkZGluZzogMCAycmVtO1xuXG4gICAgJl9fbGFuZ3VhZ2VzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICA+IHNwYW4ge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cblxuICAgICAgPiBwLXByb2dyZXNzYmFyIHtcbiAgICAgICAgZmxleDogMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY3VzdG9tLW1hcmtlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIDo6bmctZGVlcCB7XG4gICAgLnAtdGltZWxpbmUtZXZlbnQtY29udGVudCxcbiAgICAucC10aW1lbGluZS1ldmVudC1vcHBvc2l0ZSB7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG5cbiAgICAucC1wcm9ncmVzc2JhciB7XG4gICAgICBoZWlnaHQ6IDAuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAucC1wYW5lbC1oZWFkZXIge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLm1pc3Npb25fX2FuaW1hdGlvbi1sZWZ0IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwcHgpO1xuICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgICAgLW1vei1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAgIC1vLWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgICAgLW1zLWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgIH1cblxuICAgIC5taXNzaW9uX19hbmltYXRpb24tcmlnaHQge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MHB4KTtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgICAtby1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAgIC1tcy1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICB9XG5cbiAgICAucC10aW1lbGluZS1ldmVudC1jb250ZW50ID4gcC1jYXJkID4gLm1pc3Npb24gPiAucC1jYXJkLWJvZHkgPiAucC1jYXJkLWNvbnRlbnQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIEAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQC1vLWtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBALW1zLWtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIC50b29sIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cblxuICAgIDo6bmctZGVlcCB7XG4gICAgICAuY3VzdG9taXplZC10aW1lbGluZSB7XG4gICAgICAgIC5wLXRpbWVsaW5lLWV2ZW50Om50aC1jaGlsZChldmVuKSB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgLnAtdGltZWxpbmUtZXZlbnQtY29udGVudCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnAtdGltZWxpbmUtZXZlbnQtb3Bwb3NpdGUge1xuICAgICAgICAgIGZsZXg6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAucC1jYXJkIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


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




class SidebarComponent {
    /**
     * Open the default email client with default values
     */
    openEmailClient() {
        window.open('mailto:gilles.gardet@gmail.com');
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["portfolio-sidebar"]], decls: 8, vars: 0, consts: [[2, "display", "flex", "flex-direction", "column", "align-items", "center"], ["icon", "pi pi-user", "size", "xlarge", "shape", "circle", "styleClass", "p-mt-5"], [2, "font-size", "1.2rem", "font-weight", "bold", "margin", "1rem 0"], [2, "text-align", "left", "margin-bottom", "1rem"], ["label", "gilles.gardet@gmail.com", "icon", "pi pi-envelope", "styleClass", "p-mr-2", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_1__.Card, primeng_avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar, primeng_chip__WEBPACK_IMPORTED_MODULE_3__.Chip], styles: ["[_nghost-%COMP%] {\n  position: sticky;\n  top: 2rem;\n}\n[_nghost-%COMP%]     p-chip[label=\"gilles.gardet@gmail.com\"] {\n  --params: 0.8s ease;\n}\n[_nghost-%COMP%]     p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip {\n  position: relative;\n  overflow: hidden;\n  transition: color var(--params), background-color var(--params);\n  background-color: var(--grey);\n  z-index: 0;\n}\n[_nghost-%COMP%]     p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  background-color: var(--dark-grey);\n  transform: translateX(100%);\n  transition: transform var(--params), opacity var(--params);\n}\n[_nghost-%COMP%]     p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:hover {\n  cursor: pointer;\n  color: var(--white);\n  background-color: transparent;\n}\n[_nghost-%COMP%]     p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:hover::before {\n  transform: translateX(0);\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFNBQUE7QUFDRjtBQUVJO0VBQ0UsbUJBQUE7QUFBTjtBQUVNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBQVI7QUFFUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLDBEQUFBO0FBQVY7QUFHUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBRFY7QUFHVTtFQUNFLHdCQUFBO0VBQ0EsVUFBQTtBQURaIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMnJlbTtcblxuICA6Om5nLWRlZXAge1xuICAgIHAtY2hpcFtsYWJlbD0nZ2lsbGVzLmdhcmRldEBnbWFpbC5jb20nXSB7XG4gICAgICAtLXBhcmFtczogMC44cyBlYXNlO1xuXG4gICAgICAucC1jaGlwIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciB2YXIoLS1wYXJhbXMpLCBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLXBhcmFtcyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xuICAgICAgICB6LWluZGV4OiAwO1xuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tcGFyYW1zKSwgb3BhY2l0eSB2YXIoLS1wYXJhbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


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