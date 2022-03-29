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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/config.service */ 946);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 6804);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume/resume.component */ 8952);
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/scrolltop */ 5484);





class AppComponent {
    /**
     * Constructor
     *
     * @param configService the config service to be injected as a dependency
     */
    constructor(configService) {
        this.configService = configService;
        this.theme = 'light';
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe((config) => {
            var _a;
            this.config = config;
            localStorage.setItem('theme', (_a = this.config) === null || _a === void 0 ? void 0 : _a.theme);
        });
        let appTheme;
        const queryString = window.location.search;
        if (queryString)
            appTheme = new URLSearchParams(queryString.substring(1)).get('theme');
        else
            appTheme = localStorage.getItem('theme');
        if (appTheme)
            this.changeTheme(appTheme);
    }
    /**
     * @inheritDoc
     */
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
    /**
     * Chnge the theme
     *
     * @param event the event containing the heme options
     */
    changeTheme(event) {
        var _a;
        let themeElement = document.getElementById('theme');
        themeElement === null || themeElement === void 0 ? void 0 : themeElement.setAttribute('href', (_a = themeElement === null || themeElement === void 0 ? void 0 : themeElement.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.replace(this.theme, event === null || event === void 0 ? void 0 : event.theme));
        this.theme = event.theme;
        this.config.theme = this.theme;
        this.configService.updateConfig(this.config);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["portfolio-root"]], decls: 6, vars: 0, consts: [["id", "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "portfolio-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "portfolio-resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "p-scrollTop");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _resume_resume_component__WEBPACK_IMPORTED_MODULE_2__.ResumeComponent, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_4__.ScrollTop], styles: [".p-card-title,   .p-card-subtitle {\n  text-align: center;\n}\n  .p-tag,   .p-progressbar .p-progressbar-value {\n  background: var(--dark-grey);\n}\n  code {\n  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;\n  font-size: 0.7rem;\n  background-color: #1c1c1c;\n  color: var(--primary-clear);\n  border-radius: 5px;\n  padding: 0.2rem;\n}\n#container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template: 1fr/18rem minmax(18rem, 65rem);\n  justify-content: center;\n}\n#container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%] {\n  height: 100vh;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  scroll-snap-align: end;\n}\n#container[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(1rem, 3vw + 1rem, 4rem);\n  position: relative;\n  font-family: \"Source Code Pro\", monospace;\n  width: -webkit-max-content;\n  width: max-content;\n}\n#container[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before, #container[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n#container[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  background: var(--bg-color);\n  animation: typewriter var(--typewriterSpeed) steps(var(--typewriterCharacters)) 1s forwards;\n}\n#container[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  width: 0.125em;\n  background: black;\n  animation: typewriter var(--typewriterSpeed) steps(var(--typewriterCharacters)) 1s forwards, blink 750ms steps(var(--typewriterCharacters)) infinite;\n}\n#container[_ngcontent-%COMP%]   .welcome__content__subtitle[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.7);\n  margin: 5rem 0;\n  font-size: 2rem;\n  font-weight: 400;\n  opacity: 0;\n  transform: translateY(3rem);\n  animation: fadeInUp 2s ease calc(var(--typewriterSpeed) + 2s) forwards;\n}\n#container[_ngcontent-%COMP%]   .welcome__content__goto[_ngcontent-%COMP%] {\n  opacity: 0;\n  animation: bounce 1.5s infinite calc(var(--typewriterSpeed) + 3s), visibility 1.5s forwards calc(var(--typewriterSpeed) + 3s);\n}\n#container[_ngcontent-%COMP%]   .welcome__content__goto[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n@keyframes typewriter {\n  to {\n    left: 100%;\n  }\n}\n@keyframes blink {\n  to {\n    background: transparent;\n  }\n}\n@keyframes visibility {\n  to {\n    opacity: 0.8;\n  }\n}\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-30px);\n  }\n  60% {\n    transform: translateY(-15px);\n  }\n}\n@keyframes fadeInUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n#container[_ngcontent-%COMP%]    > aside[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  margin: 0 1rem;\n}\n#container[_ngcontent-%COMP%]    > main[_ngcontent-%COMP%] {\n  scroll-snap-align: start;\n  display: flex;\n  padding: 2rem 1rem;\n}\n@media screen and (max-width: 960px) {\n  #container[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(18rem, 65rem);\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3N0eWxlcy9wcmltZW5nL292ZXJyaWRlLnNjc3MiLCJhcHAuY29tcG9uZW50LnNjc3MiLCIuLi9zdHlsZXMvZ2xvYmFscy9jb2RlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0VBRUUsa0JBQUE7QUNBSjtBREdFO0VBQ0UsNEJBQUE7QUNESjtBQ05BO0VBQ0UsK0ZBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QURTRjtBQVpBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkNBQUE7RUFDQSx1QkFBQTtBQWVGO0FBYkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFlSjtBQVpNO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsMEJBQUE7RUFBQSxrQkFBQTtBQWNSO0FBWlE7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBYVY7QUFWUTtFQUNFLDJCQUFBO0VBQ0EsMkZBQUE7QUFZVjtBQVRRO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0pBQUE7QUFXVjtBQU5NO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0VBQUE7QUFRUjtBQUxNO0VBQ0UsVUFBQTtFQUNBLDZIQUFBO0FBT1I7QUFKUTtFQUNFLGVBQUE7QUFNVjtBQURJO0VBQ0U7SUFDRSxVQUFBO0VBR047QUFDRjtBQUFJO0VBQ0U7SUFDRSx1QkFBQTtFQUVOO0FBQ0Y7QUFDSTtFQUNFO0lBQ0UsWUFBQTtFQUNOO0FBQ0Y7QUFFSTtFQUNFO0lBS0Usd0JBQUE7RUFKTjtFQU1JO0lBQ0UsNEJBQUE7RUFKTjtFQU1JO0lBQ0UsNEJBQUE7RUFKTjtBQUNGO0FBT0k7RUFDRTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQUxOO0FBQ0Y7QUFTRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBUEo7QUFVRTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBUko7QUFZQTtFQUNFO0lBQ0UsMkNBQUE7SUFDQSxlQUFBO0VBVEY7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICAucC1jYXJkLXRpdGxlLFxuICAucC1jYXJkLXN1YnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAucC10YWcsIC5wLXByb2dyZXNzYmFyIC5wLXByb2dyZXNzYmFyLXZhbHVlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWdyZXkpO1xuICB9XG59XG4iLCJAdXNlIFwic3JjL3N0eWxlcy9wcmltZW5nL292ZXJyaWRlXCI7XG5AdXNlIFwic3JjL3N0eWxlcy9nbG9iYWxzL2NvZGVcIjtcblxuI2NvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxOHJlbSBtaW5tYXgoMThyZW0sIDY1cmVtKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLndlbGNvbWUge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBlbmQ7XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzdncgKyAxcmVtLCA0cmVtKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LWZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsIG1vbm9zcGFjZTtcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuXG4gICAgICAgICY6OmJlZm9yZSxcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgICAgICAgICBhbmltYXRpb246IHR5cGV3cml0ZXIgdmFyKC0tdHlwZXdyaXRlclNwZWVkKSBzdGVwcyh2YXIoLS10eXBld3JpdGVyQ2hhcmFjdGVycykpIDFzIGZvcndhcmRzO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIHdpZHRoOiAwLjEyNWVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgIGFuaW1hdGlvbjogdHlwZXdyaXRlciB2YXIoLS10eXBld3JpdGVyU3BlZWQpIHN0ZXBzKHZhcigtLXR5cGV3cml0ZXJDaGFyYWN0ZXJzKSkgMXMgZm9yd2FyZHMsXG4gICAgICAgICAgICBibGluayA3NTBtcyBzdGVwcyh2YXIoLS10eXBld3JpdGVyQ2hhcmFjdGVycykpIGluZmluaXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICZfX3N1YnRpdGxlIHtcbiAgICAgICAgY29sb3I6IGhzbCgwIDAlIDAlIC8gMC43KTtcbiAgICAgICAgbWFyZ2luOiA1cmVtIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNyZW0pO1xuICAgICAgICBhbmltYXRpb246IGZhZGVJblVwIDJzIGVhc2UgY2FsYyh2YXIoLS10eXBld3JpdGVyU3BlZWQpICsgMnMpIGZvcndhcmRzO1xuICAgICAgfVxuXG4gICAgICAmX19nb3RvIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYW5pbWF0aW9uOiBib3VuY2UgMS41cyBpbmZpbml0ZSBjYWxjKHZhcigtLXR5cGV3cml0ZXJTcGVlZCkgKyAzcyksXG4gICAgICAgICAgdmlzaWJpbGl0eSAxLjVzIGZvcndhcmRzIGNhbGModmFyKC0tdHlwZXdyaXRlclNwZWVkKSArIDNzKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHR5cGV3cml0ZXIge1xuICAgICAgdG8ge1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgYmxpbmsge1xuICAgICAgdG8ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHZpc2liaWxpdHkge1xuICAgICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBib3VuY2Uge1xuICAgICAgMCUsXG4gICAgICAyMCUsXG4gICAgICA1MCUsXG4gICAgICA4MCUsXG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgICAgNDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgICAgIH1cbiAgICAgIDYwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBmYWRlSW5VcCB7XG4gICAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICA+IGFzaWRlIHtcbiAgICBwYWRkaW5nOiAycmVtIDA7XG4gICAgbWFyZ2luOiAwIDFyZW07XG4gIH1cblxuICA+IG1haW4ge1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAjY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxOHJlbSwgNjVyZW0pO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgfVxufVxuIiwiOjpuZy1kZWVwIGNvZGUge1xuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgU0YgTW9ubywgTWVubG8sIENvbnNvbGFzLCBMaWJlcmF0aW9uIE1vbm8sIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTElKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY2xlYXIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbn1cbiJdfQ== */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 6804);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume/resume.component */ 8952);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/timeline */ 2670);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/progressbar */ 8220);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/avatar */ 7839);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/tag */ 3771);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/chip */ 2341);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/panel */ 4020);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/divider */ 669);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-markdown */ 6715);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ 2404);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/progressspinner */ 3621);
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/scrolltop */ 5484);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/config.service */ 946);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/scrollpanel */ 6025);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/ripple */ 9309);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/tooltip */ 9287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);



























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_services_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            primeng_avatar__WEBPACK_IMPORTED_MODULE_6__.AvatarModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule,
            primeng_card__WEBPACK_IMPORTED_MODULE_10__.CardModule,
            primeng_chip__WEBPACK_IMPORTED_MODULE_11__.ChipModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogModule,
            primeng_divider__WEBPACK_IMPORTED_MODULE_13__.DividerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_16__.MarkdownModule.forRoot(),
            primeng_panel__WEBPACK_IMPORTED_MODULE_17__.PanelModule,
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_18__.ProgressBarModule,
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19__.ProgressSpinnerModule,
            primeng_scrolltop__WEBPACK_IMPORTED_MODULE_20__.ScrollTopModule,
            primeng_tag__WEBPACK_IMPORTED_MODULE_21__.TagModule,
            primeng_timeline__WEBPACK_IMPORTED_MODULE_22__.TimelineModule,
            primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_23__.ScrollPanelModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_24__.RippleModule,
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_25__.TooltipModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__.ResumeComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        primeng_avatar__WEBPACK_IMPORTED_MODULE_6__.AvatarModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_10__.CardModule,
        primeng_chip__WEBPACK_IMPORTED_MODULE_11__.ChipModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogModule,
        primeng_divider__WEBPACK_IMPORTED_MODULE_13__.DividerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_16__.MarkdownModule, primeng_panel__WEBPACK_IMPORTED_MODULE_17__.PanelModule,
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_18__.ProgressBarModule,
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_19__.ProgressSpinnerModule,
        primeng_scrolltop__WEBPACK_IMPORTED_MODULE_20__.ScrollTopModule,
        primeng_tag__WEBPACK_IMPORTED_MODULE_21__.TagModule,
        primeng_timeline__WEBPACK_IMPORTED_MODULE_22__.TimelineModule,
        primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_23__.ScrollPanelModule,
        primeng_ripple__WEBPACK_IMPORTED_MODULE_24__.RippleModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_25__.TooltipModule] }); })();


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5758);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/config.service */ 946);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ 6715);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/panel */ 4020);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/timeline */ 2670);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 3013);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tag */ 3771);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/progressbar */ 8220);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ 2404);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/progressspinner */ 3621);















function ResumeComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "p-progressBar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tool_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tool_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", tool_r4.rate)("showValue", false);
} }
function ResumeComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", "#607D8B");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "pi pi-bookmark");
} }
const _c0 = function () { return { backgroundColor: "hsl(48, 37%, 94%)" }; };
function ResumeComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "markdown", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResumeComponent_ng_template_28_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const mission_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.openDialog(mission_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "En savoir plus");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mission_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("header", mission_r6.client)("subheader", ctx_r2.missionTimelapse(mission_r6.startDate, mission_r6.endDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.missionFromDate(mission_r6.startDate, "light"));
} }
function ResumeComponent_p_dialog_38_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.missionTimelapse(ctx_r9.selectedMission == null ? null : ctx_r9.selectedMission.startDate, ctx_r9.selectedMission == null ? null : ctx_r9.selectedMission.endDate));
} }
function ResumeComponent_p_dialog_38_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p-progressSpinner", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResumeComponent_p_dialog_38_ng_template_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r13.innerLightMission, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r13.innerFullMission, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function ResumeComponent_p_dialog_38_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ResumeComponent_p_dialog_38_ng_template_2_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ResumeComponent_p_dialog_38_ng_template_2_ng_template_2_Template, 3, 2, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mission__content-transition", !ctx_r10.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.loading)("ngIfElse", _r12);
} }
const _c1 = function () { return { maxWidth: "1280px" }; };
function ResumeComponent_p_dialog_38_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-dialog", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function ResumeComponent_p_dialog_38_Template_p_dialog_visibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.displayDialog = $event; })("onHide", function ResumeComponent_p_dialog_38_Template_p_dialog_onHide_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.onDialogHiding(); })("onShow", function ResumeComponent_p_dialog_38_Template_p_dialog_onShow_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.onMissionLoading(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ResumeComponent_p_dialog_38_ng_template_1_Template, 2, 1, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ResumeComponent_p_dialog_38_ng_template_2_Template, 4, 4, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx_r3.displayDialog)("header", ctx_r3.selectedMission == null ? null : ctx_r3.selectedMission.client)("modal", true)("closeOnEscape", true)("dismissableMask", true)("blockScroll", true);
} }
class ResumeComponent {
    /**
     * Constructor
     *
     * @param configService the configuration service to be injected as a dependency
     * @param httpClient the HTTP client to be injected as a dependency
     * @param markdownService the markdown service to be injected as a dependency
     */
    constructor(configService, httpClient, markdownService) {
        this.configService = configService;
        this.httpClient = httpClient;
        this.markdownService = markdownService;
        this.selectedMission = null;
        this.missions = [];
        this.tools = [];
        this.clones = [];
        this.displayDialog = false;
        this.loading = true;
        this.innerFullMission = '';
        this.innerLightMission = '';
        this.experience = new Date(2013, 4);
        // empty
    }
    /**
     * @inheritDoc
     */
    ngOnInit() {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe((config) => (this.config = config));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === null || _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === void 0 ? void 0 : _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.missions).subscribe((response) => (this.missions = response));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === null || _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment === void 0 ? void 0 : _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tools).subscribe((response) => {
            this.tools = response;
            this.clones = response;
            this.tools = this.tools.map((tool) => ({ name: tool.name, rate: 0 }));
        });
        this.screenWidth = window.innerWidth;
    }
    /**
     * Listen for the screen size changes and keep track of these sizes
     */
    onWindowResize() {
        this.screenWidth = window.innerWidth;
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
        this._animateSkillsOnView();
        this._animateMissionsOnView();
    }
    /**
     * Animate the skills bar when visible on screen
     */
    _animateSkillsOnView() {
        const rateIntersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.tools.forEach((tool) => (tool.rate = this.clones.find((clone) => clone.name === tool.name).rate));
                }
            });
        }, {
            threshold: 0,
        });
        const rateElement = document.querySelector('p-panel[header="Langages et outils"] .p-component');
        if (rateElement)
            rateIntersectionObserver.observe(rateElement);
    }
    /**
     * Animate the missions cards when visible on screen
     */
    _animateMissionsOnView() {
        const intersectionObserver = new IntersectionObserver((entries) => {
            // trigger the animation on the intersection according to the side of the timeline event
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (this.screenWidth > 960) {
                        entry.target
                            .querySelectorAll(':nth-child(2n + 1) > .p-timeline-event-content')
                            .forEach((element) => element.classList.add('mission__animation-right'));
                        entry.target
                            .querySelectorAll(':nth-child(2n) > .p-timeline-event-content')
                            .forEach((element) => element.classList.add('mission__animation-left'));
                    }
                    else {
                        entry.target
                            .querySelectorAll('.p-timeline-event-content')
                            .forEach((element) => element.classList.add('mission__animation-right'));
                    }
                }
            });
        }, {
            threshold: 0,
        });
        const experienceElements = document.querySelectorAll('p-panel[header="Expérience"] .p-component .p-timeline-alternate .p-timeline-event');
        experienceElements.forEach((experienceElement) => {
            intersectionObserver.observe(experienceElement);
        });
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
    /**
     * Re-initialize the loader of the dialog content
     */
    onDialogHiding() {
        this.loading = true;
    }
    /**
     * Parse the markdown contained in the selected mission file
     */
    onMissionLoading() {
        var _a, _b;
        const fullMission = this.markdownService.getSource(this.missionFromDate((_a = this.selectedMission) === null || _a === void 0 ? void 0 : _a.startDate, 'full'));
        const lightMission = this.markdownService.getSource(this.missionFromDate((_b = this.selectedMission) === null || _b === void 0 ? void 0 : _b.startDate, 'light'));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)({ lightMission, fullMission }).subscribe((value) => {
            this.innerLightMission = this.markdownService.compile(value.lightMission);
            this.innerFullMission = this.markdownService.compile(value.fullMission);
            setTimeout(() => {
                var _a;
                this.loading = false;
                (_a = document
                    .querySelector('p-dialog > .p-dialog-mask > .p-dialog > .p-dialog-content')) === null || _a === void 0 ? void 0 : _a.classList.add('p-dialog-content-scroll');
            }, 600);
        });
    }
    /**
     * Change the theme mode (dark or light)
     *
     * @param event the event throwed
     * @param theme the theme
     * @param dark the darkmode flag
     */
    changeTheme(event, theme, dark) {
        var _a, _b;
        let themeElement = document.getElementById('theme');
        themeElement === null || themeElement === void 0 ? void 0 : themeElement.setAttribute('href', (_a = themeElement.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.replace((_b = this.config) === null || _b === void 0 ? void 0 : _b.theme, theme));
        this.configService.updateConfig(Object.assign(Object.assign({}, this.config), { theme, dark }));
        event.preventDefault();
    }
    /**
     * @inheritDoc
     */
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_markdown__WEBPACK_IMPORTED_MODULE_6__.MarkdownService)); };
ResumeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["portfolio-resume"]], hostBindings: function ResumeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function ResumeComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 39, vars: 7, consts: [["header", "Profil et g\u00E9n\u00E9ralit\u00E9s"], [2, "text-align", "start"], ["header", "Langages et outils"], [1, "tool"], [4, "ngFor", "ngForOf"], ["header", "Exp\u00E9rience"], ["align", "alternate", "styleClass", "customized-timeline", 3, "value"], ["pTemplate", "marker"], ["pTemplate", "content"], ["header", "Loisirs"], [1, "p-grid", "p-flex-column", 2, "display", "flex", "flex-direction", "column", "gap", "1rem"], [3, "rounded"], [1, "pi"], [3, "visible", "header", "modal", "style", "closeOnEscape", "dismissableMask", "blockScroll", "visibleChange", "onHide", "onShow", 4, "ngIf"], [1, "tool__languages"], [3, "value", "showValue"], [1, "custom-marker", "p-shadow-2"], [3, "ngClass"], ["styleClass", "mission", 3, "header", "subheader"], [3, "src"], [2, "display", "flex", "justify-content", "center"], [1, "learn-more", 3, "click"], ["aria-hidden", "true", 1, "circle"], [1, "icon", "arrow"], [1, "button-text"], [3, "visible", "header", "modal", "closeOnEscape", "dismissableMask", "blockScroll", "visibleChange", "onHide", "onShow"], ["pTemplate", "header"], [1, "mission__timelapse"], [1, "mission__content"], [4, "ngIf", "ngIfElse"], ["missionContent", ""], ["strokeWidth", "6", "styleClass", "mission__content__spinner"], [1, "mission__content__text"], [3, "innerHTML"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Je b\u00E9n\u00E9ficie d\u2019une exp\u00E9rience de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " en tant que concepteur d\u00E9veloppeur en mati\u00E8re de syst\u00E8mes d\u2019information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Principalement sp\u00E9cialis\u00E9 dans les technologies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "backend");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " (Java, Spring...), que j'ai pu \u00E9prouver sur diff\u00E9rentes missions elles-m\u00EAmes touchant \u00E0 plusieurs domaines d'activit\u00E9s (domaine du spatial, des ressources humaines, des collectivit\u00E9s...). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " J'ai n\u00E9anmoins un profil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "fullstack");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " de par les nombreux projets frontend que j'ai pu r\u00E9aliser en parall\u00E8le. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " J'ai l'habitude de travailler avec les m\u00E9thodes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Agiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " que j'affectionne quand il s'agit de conduire un projet (Scrum, Kanban..). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ResumeComponent_ng_container_24_Template, 5, 3, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p-panel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p-timeline", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ResumeComponent_ng_template_27_Template, 2, 3, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ResumeComponent_ng_template_28_Template, 8, 6, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p-panel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p-tag", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Basketball en comp\u00E9tition (niveau excellence)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p-tag", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Course \u00E0 pied (marathon de Toulouse en \u00E9quipe)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p-tag", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "D\u00E9veloppement");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, ResumeComponent_p_dialog_38_Template, 3, 9, "p-dialog", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.numberOfYearsFromDateToCurrentDate(ctx.experience), " ans");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tools);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.missions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedMission);
    } }, directives: [primeng_panel__WEBPACK_IMPORTED_MODULE_7__.Panel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, primeng_timeline__WEBPACK_IMPORTED_MODULE_9__.Timeline, primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_tag__WEBPACK_IMPORTED_MODULE_11__.Tag, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__.ProgressBar, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, primeng_card__WEBPACK_IMPORTED_MODULE_13__.Card, ngx_markdown__WEBPACK_IMPORTED_MODULE_6__.MarkdownComponent, primeng_dialog__WEBPACK_IMPORTED_MODULE_14__.Dialog, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__.ProgressSpinner], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-row-gap: 2rem;\n}\n[_nghost-%COMP%]   .tool[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 2rem;\n  grid-row-gap: 1rem;\n  padding: 0 2rem;\n}\n[_nghost-%COMP%]   .tool__languages[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .tool__languages[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: start;\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   .tool__languages[_ngcontent-%COMP%]    > p-progressbar[_ngcontent-%COMP%] {\n  flex: 2;\n}\n[_nghost-%COMP%]   .custom-marker[_ngcontent-%COMP%] {\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  border-radius: 50%;\n  z-index: 1;\n}\n[_nghost-%COMP%]     .p-timeline-event-content, [_nghost-%COMP%]     .p-timeline-event-opposite {\n  line-height: 1;\n}\n[_nghost-%COMP%]     :not(pre) > pre {\n  background: #272822;\n}\n[_nghost-%COMP%]     pre {\n  padding: 0.3rem;\n  margin: 0.5em 0;\n  overflow: auto;\n  border-radius: 0.3em;\n  color: #f8f8f2;\n  background: none;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n  font-family: Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  hyphens: none;\n}\n[_nghost-%COMP%]     code[class*=language-] {\n  font-size: 0.7rem;\n  max-width: calc(100vw - 4rem);\n  display: flex;\n}\n[_nghost-%COMP%]     .p-dialog .p-dialog-header .mission__timelapse {\n  font-style: italic;\n  margin: 0 1rem;\n}\n[_nghost-%COMP%]     .p-dialog .p-dialog-content {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  display: flex;\n  justify-content: center;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n[_nghost-%COMP%]     .p-dialog .p-dialog-content .mission__content {\n  max-height: 100px;\n  max-width: 100px;\n  transition: max-height 800ms ease-in-out, max-width 800ms ease-in-out;\n}\n[_nghost-%COMP%]     .p-dialog .p-dialog-content .mission__content .mission__content__spinner .p-progress-spinner-circle {\n  animation: progress-spinner-dash 1.5s ease-in-out infinite, progress-spinner-color 6s ease-in-out infinite;\n}\n@keyframes progress-spinner-color {\n  100%, 0%, 40%, 66%, 80%, 90% {\n    stroke: var(--dark-grey);\n  }\n}\n@keyframes progress-spinner-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n[_nghost-%COMP%]     .p-dialog .p-dialog-content .mission__content .mission__content__text {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  opacity: 0;\n  animation: fadeText 800ms forwards 800ms;\n}\n@keyframes fadeText {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n[_nghost-%COMP%]     .p-dialog .p-dialog-content .mission__content-transition {\n  max-height: 100vh;\n  max-width: calc(1280px - 3rem);\n}\n[_nghost-%COMP%]     .p-dialog .p-dialog-content-scroll {\n  overflow-y: auto;\n  animation: hideScroll 800ms backwards;\n}\n@keyframes hideScroll {\n  from, to {\n    overflow-y: hidden;\n  }\n}\n[_nghost-%COMP%]     .p-progressbar {\n  height: 0.5rem;\n  border-radius: 5px;\n}\n[_nghost-%COMP%]     .p-panel-header {\n  justify-content: center;\n}\n[_nghost-%COMP%]     .p-button.p-button-secondary.p-button-outlined {\n  color: var(--dark);\n}\n[_nghost-%COMP%]     .mission__animation-left {\n  opacity: 0;\n  transform: translateX(-40px);\n  animation: fadeIn 3s forwards;\n  -webkit-animation: fadeIn 3s forwards;\n  -moz-animation: fadeIn 3s forwards;\n  -o-animation: fadeIn 3s forwards;\n  -ms-animation: fadeIn 3s forwards;\n}\n[_nghost-%COMP%]     .mission__animation-right {\n  opacity: 0;\n  transform: translateX(40px);\n  animation: fadeIn 3s forwards;\n  -webkit-animation: fadeIn 3s forwards;\n  -moz-animation: fadeIn 3s forwards;\n  -o-animation: fadeIn 3s forwards;\n  -ms-animation: fadeIn 3s forwards;\n}\n[_nghost-%COMP%]     .p-timeline-event-content > p-card > .mission > .p-card-body > .p-card-content {\n  text-align: left;\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@media screen and (max-width: 960px) {\n  [_nghost-%COMP%]   .tool[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  [_nghost-%COMP%]     .customized-timeline .p-timeline-event:nth-child(even) {\n    flex-direction: row !important;\n  }\n  [_nghost-%COMP%]     .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content {\n    text-align: left !important;\n  }\n  [_nghost-%COMP%]     .customized-timeline .p-timeline-event-opposite {\n    flex: 0;\n  }\n  [_nghost-%COMP%]     .customized-timeline .p-card {\n    margin-top: 1rem;\n  }\n}\nbutton[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  text-decoration: none;\n  background: white;\n  padding: 0;\n  font-size: 14px;\n  outline: none;\n  border: none;\n  border-radius: 1.625rem;\n}\nbutton.learn-more[_ngcontent-%COMP%] {\n  width: 10rem;\n  height: auto;\n}\nbutton.learn-more[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: relative;\n  display: block;\n  margin: 0;\n  width: 2rem;\n  height: 2rem;\n  background: var(--bluegray-500);\n  border-radius: 1.625rem;\n}\nbutton.learn-more[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  background: #fff;\n}\nbutton.learn-more[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .icon.arrow[_ngcontent-%COMP%] {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  left: 0.125rem;\n  width: 1.125rem;\n  height: 0.125rem;\n  background: none;\n}\nbutton.learn-more[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .icon.arrow[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  top: -0.25rem;\n  right: 0.0625rem;\n  width: 0.625rem;\n  height: 0.625rem;\n  border-top: 0.125rem solid #fff;\n  border-right: 0.125rem solid #fff;\n  transform: rotate(45deg);\n}\nbutton.learn-more[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%] {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.75rem 0;\n  margin: 0 0 0 1.85rem;\n  color: var(--bluegray-500);\n  line-height: 0.6;\n  text-align: center;\n}\nbutton[_ngcontent-%COMP%]:hover   .circle[_ngcontent-%COMP%] {\n  width: 100%;\n}\nbutton[_ngcontent-%COMP%]:hover   .circle[_ngcontent-%COMP%]   .icon.arrow[_ngcontent-%COMP%] {\n  background: #fff;\n  transform: translate(1rem, 0);\n}\nbutton[_ngcontent-%COMP%]:hover   .button-text[_ngcontent-%COMP%] {\n  color: #fff;\n}\n@supports (display: grid) {\n  body[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap: 0.625rem;\n    grid-template-areas: \". main main .\" \". main main .\";\n  }\n\n  #container[_ngcontent-%COMP%] {\n    grid-area: main;\n    align-self: center;\n    justify-self: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUZGO0FBSUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZKO0FBSUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFGTjtBQUlNO0VBQ0UsT0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQUtNO0VBQ0UsT0FBQTtBQUhSO0FBUUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQU5KO0FBVUk7O0VBRUUsY0FBQTtBQVJOO0FBV0k7RUFDRSxtQkFBQTtBQVROO0FBWUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0VBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBVk47QUFhSTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBWE47QUFlTTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQWJSO0FBZ0JNO0VBQ0UsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFkUjtBQWdCUTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxRUFBQTtBQWRWO0FBZ0JVO0VBQ0UsMEdBQUE7QUFkWjtBQWlCVTtFQUNFO0lBTUUsd0JBQUE7RUFwQlo7QUFDRjtBQXVCVTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQXJCWjtFQXVCVTtJQUNFLHlCQUFBO0lBQ0Esd0JBQUE7RUFyQlo7RUF1QlU7SUFDRSx5QkFBQTtJQUNBLHlCQUFBO0VBckJaO0FBQ0Y7QUF3QlU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtBQXRCWjtBQXlCVTtFQUNFO0lBQ0UsVUFBQTtFQXZCWjtFQXlCVTtJQUNFLFVBQUE7RUF2Qlo7QUFDRjtBQTJCUTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7QUF6QlY7QUE2Qk07RUFDRSxnQkFBQTtFQUNBLHFDQUFBO0FBM0JSO0FBOEJNO0VBQ0U7SUFFRSxrQkFBQTtFQTdCUjtBQUNGO0FBaUNJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBL0JOO0FBa0NJO0VBQ0UsdUJBQUE7QUFoQ047QUFtQ0k7RUFDRSxrQkFBQTtBQWpDTjtBQW9DSTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7QUFsQ047QUFxQ0k7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FBbkNOO0FBc0NJO0VBQ0UsZ0JBQUE7QUFwQ047QUF1Q0k7RUFDRTtJQUNFLFVBQUE7RUFyQ047RUF1Q0k7SUFDRSxVQUFBO0VBckNOO0VBdUNJO0lBQ0Usd0JBQUE7RUFyQ047QUFDRjtBQXlGRTtFQUNFO0lBQ0UsMEJBQUE7RUEzQ0o7RUFnRE07SUFDRSw4QkFBQTtFQTlDUjtFQWdEUTtJQUNFLDJCQUFBO0VBOUNWO0VBa0RNO0lBQ0UsT0FBQTtFQWhEUjtFQW1ETTtJQUNFLGdCQUFBO0VBakRSO0FBQ0Y7QUEyREE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUF4REY7QUEyREU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQXpESjtBQTJESTtFQXBCRixxREFBQTtFQXNCSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0FBekROO0FBMkRNO0VBOUJKLHFEQUFBO0VBZ0NNLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBdFVBO0FBNlFSO0FBMkRRO0VBdENOLHFEQUFBO0VBd0NRLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQXpEVjtBQTJEVTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtBQXpEWjtBQStESTtFQTVERixxREFBQTtFQThESSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBN0ROO0FBa0VJO0VBQ0UsV0FBQTtBQWhFTjtBQW1FUTtFQUNFLGdCQW5YRjtFQW9YRSw2QkFBQTtBQWpFVjtBQXNFSTtFQUNFLFdBMVhFO0FBc1RSO0FBeUVBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EscUNBQUE7SUFDQSxrQkFBQTtJQUNBLG9EQUFBO0VBdEVGOztFQXlFQTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtJQUNBLG9CQUFBO0VBdEVGO0FBQ0YiLCJmaWxlIjoicmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJnOiAjZjNmOGZhO1xuJHdoaXRlOiAjZmZmO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtcm93LWdhcDogMnJlbTtcblxuICAudG9vbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAycmVtO1xuICAgIGdyaWQtcm93LWdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAwIDJyZW07XG5cbiAgICAmX19sYW5ndWFnZXMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgID4gc3BhbiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICB9XG5cbiAgICAgID4gcC1wcm9ncmVzc2JhciB7XG4gICAgICAgIGZsZXg6IDI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmN1c3RvbS1tYXJrZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICA6Om5nLWRlZXAge1xuICAgIC5wLXRpbWVsaW5lLWV2ZW50LWNvbnRlbnQsXG4gICAgLnAtdGltZWxpbmUtZXZlbnQtb3Bwb3NpdGUge1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgfVxuXG4gICAgOm5vdChwcmUpID4gcHJlIHtcbiAgICAgIGJhY2tncm91bmQ6ICMyNzI4MjI7XG4gICAgfVxuXG4gICAgcHJlIHtcbiAgICAgIHBhZGRpbmc6IDAuM3JlbTtcbiAgICAgIG1hcmdpbjogMC41ZW0gMDtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgICBjb2xvcjogI2Y4ZjhmMjtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBNb25hY28sICdBbmRhbGUgTW9ubycsICdVYnVudHUgTW9ubycsIG1vbm9zcGFjZTtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgICAgIHdvcmQtd3JhcDogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIC1tb3otdGFiLXNpemU6IDQ7XG4gICAgICB0YWItc2l6ZTogNDtcbiAgICAgIC13ZWJraXQtaHlwaGVuczogbm9uZTtcbiAgICAgIGh5cGhlbnM6IG5vbmU7XG4gICAgfVxuXG4gICAgY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNHJlbSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5wLWRpYWxvZyB7XG4gICAgICAucC1kaWFsb2ctaGVhZGVyIC5taXNzaW9uX190aW1lbGFwc2Uge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgfVxuXG4gICAgICAucC1kaWFsb2ctY29udGVudCB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuXG4gICAgICAgIC5taXNzaW9uX19jb250ZW50IHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgODAwbXMgZWFzZS1pbi1vdXQsIG1heC13aWR0aCA4MDBtcyBlYXNlLWluLW91dDtcblxuICAgICAgICAgIC5taXNzaW9uX19jb250ZW50X19zcGlubmVyIC5wLXByb2dyZXNzLXNwaW5uZXItY2lyY2xlIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3Mtc3Bpbm5lci1kYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUsIHByb2dyZXNzLXNwaW5uZXItY29sb3IgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyBwcm9ncmVzcy1zcGlubmVyLWNvbG9yIHtcbiAgICAgICAgICAgIDEwMCUsXG4gICAgICAgICAgICAwJSxcbiAgICAgICAgICAgIDQwJSxcbiAgICAgICAgICAgIDY2JSxcbiAgICAgICAgICAgIDgwJSxcbiAgICAgICAgICAgIDkwJSB7XG4gICAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tZGFyay1ncmV5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIHByb2dyZXNzLXNwaW5uZXItZGFzaCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcbiAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xuICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWlzc2lvbl9fY29udGVudF9fdGV4dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlVGV4dCA4MDBtcyBmb3J3YXJkcyA4MDBtcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVUZXh0IHtcbiAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5taXNzaW9uX19jb250ZW50LXRyYW5zaXRpb24ge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMjgwcHggLSAzcmVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucC1kaWFsb2ctY29udGVudC1zY3JvbGwge1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBhbmltYXRpb246IGhpZGVTY3JvbGwgODAwbXMgYmFja3dhcmRzO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGhpZGVTY3JvbGwge1xuICAgICAgICBmcm9tLFxuICAgICAgICB0byB7XG4gICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnAtcHJvZ3Jlc3NiYXIge1xuICAgICAgaGVpZ2h0OiAwLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLnAtcGFuZWwtaGVhZGVyIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5wLWJ1dHRvbi5wLWJ1dHRvbi1zZWNvbmRhcnkucC1idXR0b24tb3V0bGluZWQge1xuICAgICAgY29sb3I6IHZhcigtLWRhcmspO1xuICAgIH1cblxuICAgIC5taXNzaW9uX19hbmltYXRpb24tbGVmdCB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MHB4KTtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgICAtby1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAgIC1tcy1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICB9XG5cbiAgICAubWlzc2lvbl9fYW5pbWF0aW9uLXJpZ2h0IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDBweCk7XG4gICAgICBhbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgICAtbW96LWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgICAgLW8tYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgICAtbXMtYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgfVxuXG4gICAgLnAtdGltZWxpbmUtZXZlbnQtY29udGVudCA+IHAtY2FyZCA+IC5taXNzaW9uID4gLnAtY2FyZC1ib2R5ID4gLnAtY2FyZC1jb250ZW50IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIEAtby1rZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQC1tcy1rZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICAudG9vbCB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG5cbiAgICA6Om5nLWRlZXAge1xuICAgICAgLmN1c3RvbWl6ZWQtdGltZWxpbmUge1xuICAgICAgICAucC10aW1lbGluZS1ldmVudDpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcblxuICAgICAgICAgIC5wLXRpbWVsaW5lLWV2ZW50LWNvbnRlbnQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wLXRpbWVsaW5lLWV2ZW50LW9wcG9zaXRlIHtcbiAgICAgICAgICBmbGV4OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnAtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkcHJvcGVydHk6IGFsbCwgJGR1cmF0aW9uOiAwLjQ1cywgJGVhc2U6IGN1YmljLWJlemllcigwLjY1LDAsLjA3NiwxKSkge1xuICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJGR1cmF0aW9uICRlYXNlO1xufVxuXG5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMS42MjVyZW07XG4gIC8vYm94LXNoYWRvdzogMCAwIDAgMXB0ICM2MDdkOGI7XG5cbiAgJi5sZWFybi1tb3JlIHtcbiAgICB3aWR0aDogMTByZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgLmNpcmNsZSB7XG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40NXMsIGN1YmljLWJlemllcigwLjY1LCAwLCAuMDc2LCAxKSk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZWdyYXktNTAwKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEuNjI1cmVtO1xuXG4gICAgICAuaWNvbiB7XG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjQ1cywgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIC4wNzYsIDEpKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG5cbiAgICAgICAgJi5hcnJvdyB7XG4gICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNDVzLCBjdWJpYy1iZXppZXIoMC42NSwgMCwgLjA3NiwgMSkpO1xuICAgICAgICAgIGxlZnQ6IDAuMTI1cmVtO1xuICAgICAgICAgIHdpZHRoOiAxLjEyNXJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDAuMTI1cmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG5cbiAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICB0b3A6IC0wLjI1cmVtO1xuICAgICAgICAgICAgcmlnaHQ6IDAuMDYyNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAwLjYyNXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMC42MjVyZW07XG4gICAgICAgICAgICBib3JkZXItdG9wOiAwLjEyNXJlbSBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwLjEyNXJlbSBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5idXR0b24tdGV4dCB7XG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40NXMsIGN1YmljLWJlemllcigwLjY1LCAwLCAuMDc2LCAxKSk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDA7XG4gICAgICBtYXJnaW46IDAgMCAwIDEuODVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tYmx1ZWdyYXktNTAwKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAwLjY7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgLmNpcmNsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLmljb24ge1xuICAgICAgICAmLmFycm93IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXJlbSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnV0dG9uLXRleHQge1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuQHN1cHBvcnRzIChkaXNwbGF5OiBncmlkKSB7XG4gIGJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBncmlkLWdhcDogMC42MjVyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIuIG1haW4gbWFpbiAuXCIgXCIuIG1haW4gbWFpbiAuXCI7XG4gIH1cblxuICAjY29udGFpbmVyIHtcbiAgICBncmlkLWFyZWE6IG1haW47XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 946:
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class ConfigService {
    constructor() {
        this._configUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.config = {
            theme: 'saga-blue',
            dark: false,
            inputStyle: 'outlined',
            ripple: true,
        };
        this.configUpdate$ = this._configUpdate.asObservable();
    }
    /**
     *
     * @param config
     */
    updateConfig(config) {
        this.config = config;
        this._configUpdate.next(config);
    }
    /**
     *
     */
    getConfig() {
        return this.config;
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac });


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
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 9309);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ 9287);







class SidebarComponent {
    /**
     * Open the default email client with default values
     */
    openEmailClient() {
        window.open('mailto:gilles.gardet@gmail.com');
    }
    /**
     * Download the curriculum vitae
     */
    downloadCurriculumVitae() {
        const anchor = document.createElement('a');
        anchor.href = 'assets/CV_GARDET_Gilles.pdf';
        anchor.download = 'gardet_gilles.pdf';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["portfolio-sidebar"]], decls: 9, vars: 0, consts: [[2, "display", "flex", "flex-direction", "column", "align-items", "center"], ["size", "xlarge", "shape", "circle", "styleClass", "p-mt-5", "image", "assets/me.jpg"], [2, "font-size", "1.2rem", "font-weight", "bold", "margin", "1rem 0"], [2, "text-align", "left", "margin-bottom", "1rem"], ["label", "gilles.gardet@gmail.com", "icon", "pi pi-envelope", "styleClass", "p-mr-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "submit", "icon", "pi pi-cloud-download", "pTooltip", "T\u00E9l\u00E9charger mon CV au format PDF", 1, "p-button-rounded", "p-button-text", 2, "position", "absolute", "top", "0.5rem", "left", "0.5rem", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gilles Gardet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "D\u00E9veloppeur fullstack, curieux par nature et passionn\u00E9 par son m\u00E9tier.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-chip", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_p_chip_click_7_listener() { return ctx.openEmailClient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_8_listener() { return ctx.downloadCurriculumVitae(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_1__.Card, primeng_avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar, primeng_chip__WEBPACK_IMPORTED_MODULE_3__.Chip, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.Tooltip], styles: ["p-card > div.p-card {\n  position: sticky;\n  top: 2rem;\n}\n  button.p-button {\n  border: 1px solid #495057;\n  background: #495057;\n}\n  button.p-button.p-button.p-button-text,   button.p-button.p-button.p-button-text:enabled:hover,   button.p-button.p-button.p-button-text:enabled:active {\n  color: #495057;\n}\n  button.p-button.p-button.p-button-text:enabled:hover,   button.p-button.p-button.p-button-text:enabled:active {\n  background: rgba(75, 85, 94, 0.04);\n}\n  button.p-button.p-button:focus,   button.p-button.p-button.p-button-text:enabled:active {\n  box-shadow: 0 0 0 0.2rem #aab1b9;\n}\n  p-chip[label=\"gilles.gardet@gmail.com\"] {\n  --params: 0.8s ease;\n}\n  p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip {\n  position: relative;\n  overflow: hidden;\n  transition: color var(--params), background-color var(--params);\n  background-color: var(--grey);\n  z-index: 0;\n}\n  p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  background-color: var(--dark-grey);\n  transform: translateX(100%);\n  transition: transform var(--params), opacity var(--params);\n}\n  p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:hover {\n  cursor: pointer;\n  color: var(--white);\n  background-color: transparent;\n}\n  p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:hover::before {\n  transform: translateX(0);\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtFQUNBLFNBQUE7QUFBSjtBQUdFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQURKO0FBRUk7RUFHRSxjQUFBO0FBRk47QUFJSTtFQUVFLGtDQUFBO0FBSE47QUFLSTtFQUVFLGdDQUFBO0FBSk47QUFPRTtFQUNFLG1CQUFBO0FBTEo7QUFPSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQUxOO0FBT007RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSwwREFBQTtBQUxSO0FBUU07RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQU5SO0FBUVE7RUFDRSx3QkFBQTtFQUNBLFVBQUE7QUFOViIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgcC1jYXJkID4gZGl2LnAtY2FyZCB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDJyZW07XG4gIH1cblxuICBidXR0b24ucC1idXR0b24ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0OTUwNTc7XG4gICAgYmFja2dyb3VuZDogIzQ5NTA1NztcbiAgICAmLnAtYnV0dG9uLnAtYnV0dG9uLXRleHQsXG4gICAgJi5wLWJ1dHRvbi5wLWJ1dHRvbi10ZXh0OmVuYWJsZWQ6aG92ZXIsXG4gICAgJi5wLWJ1dHRvbi5wLWJ1dHRvbi10ZXh0OmVuYWJsZWQ6YWN0aXZlIHtcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIH1cbiAgICAmLnAtYnV0dG9uLnAtYnV0dG9uLXRleHQ6ZW5hYmxlZDpob3ZlcixcbiAgICAmLnAtYnV0dG9uLnAtYnV0dG9uLXRleHQ6ZW5hYmxlZDphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg3NSwgODUsIDk0LCAwLjA0KTtcbiAgICB9XG4gICAgJi5wLWJ1dHRvbjpmb2N1cyxcbiAgICAmLnAtYnV0dG9uLnAtYnV0dG9uLXRleHQ6ZW5hYmxlZDphY3RpdmUge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICNhYWIxYjk7XG4gICAgfVxuICB9XG4gIHAtY2hpcFtsYWJlbD0nZ2lsbGVzLmdhcmRldEBnbWFpbC5jb20nXSB7XG4gICAgLS1wYXJhbXM6IDAuOHMgZWFzZTtcblxuICAgIC5wLWNoaXAge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIHZhcigtLXBhcmFtcyksIGJhY2tncm91bmQtY29sb3IgdmFyKC0tcGFyYW1zKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xuICAgICAgei1pbmRleDogMDtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tcGFyYW1zKSwgb3BhY2l0eSB2YXIoLS1wYXJhbXMpO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


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
            client: 'Air France - Dev Portal',
            startDate: '2019-01-01',
            endDate: null,
        },
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