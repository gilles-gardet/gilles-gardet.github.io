"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _features_contact_components_general_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @features/contact/components/general/contact.component */ 2629);
/* harmony import */ var _features_resume_components_resume_resume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @features/resume/components/resume/resume.component */ 4692);
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/scrolltop */ 2071);




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["portfolio-root"]], decls: 6, vars: 0, consts: [["id", "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "portfolio-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "portfolio-resume")(5, "p-scrollTop");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } }, directives: [_features_contact_components_general_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent, _features_resume_components_resume_resume_component__WEBPACK_IMPORTED_MODULE_1__.ResumeComponent, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_3__.ScrollTop], styles: [".p-card-title,   .p-card-subtitle {\n  text-align: center;\n}\n  .p-tag,   .p-progressbar .p-progressbar-value {\n  background: var(--dark-grey);\n}\n  p-scrolltop > button.p-scrolltop {\n  z-index: 1004;\n}\n  p-panel .p-panel-header {\n  display: grid;\n  justify-content: center;\n}\n  code {\n  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;\n  font-size: 0.7rem;\n  background-color: #1c1c1c;\n  color: var(--primary-clear);\n  border-radius: 5px;\n  padding: 0.2rem;\n}\n#container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template: 1fr/18rem minmax(18rem, 65rem);\n  justify-content: center;\n}\n#container[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%] {\n  height: 100vh;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  scroll-snap-align: end;\n}\n#container[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(1rem, 3vw + 1rem, 4rem);\n  position: relative;\n  font-family: \"Source Code Pro\", monospace;\n  width: max-content;\n}\n#container[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before, #container[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n#container[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  background: var(--bg-color);\n  animation: typewriter var(--typewriterSpeed) steps(var(--typewriterCharacters)) 1s forwards;\n}\n#container[_ngcontent-%COMP%]   .welcome__content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  width: 0.125em;\n  background: var(--typewriter-text);\n  animation: typewriter var(--typewriterSpeed) steps(var(--typewriterCharacters)) 1s forwards, blink 750ms steps(var(--typewriterCharacters)) infinite;\n}\n#container[_ngcontent-%COMP%]   .welcome__content__subtitle[_ngcontent-%COMP%] {\n  color: var(--typewriter-text);\n  margin: 5rem 0;\n  font-size: 2rem;\n  font-weight: 400;\n  opacity: 0;\n  transform: translateY(3rem);\n  animation: fadeInUp 2s ease calc(var(--typewriterSpeed) + 2s) forwards;\n}\n#container[_ngcontent-%COMP%]   .welcome__content__goto[_ngcontent-%COMP%] {\n  opacity: 0;\n  animation: bounce 1.5s infinite calc(var(--typewriterSpeed) + 3s), visibility 1.5s forwards calc(var(--typewriterSpeed) + 3s);\n}\n#container[_ngcontent-%COMP%]   .welcome__content__goto[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n@keyframes typewriter {\n  to {\n    left: 100%;\n  }\n}\n@keyframes blink {\n  to {\n    background: transparent;\n  }\n}\n@keyframes visibility {\n  to {\n    opacity: 0.8;\n  }\n}\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-30px);\n  }\n  60% {\n    transform: translateY(-15px);\n  }\n}\n@keyframes fadeInUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n#container[_ngcontent-%COMP%]    > aside[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  margin: 0 1rem;\n}\n#container[_ngcontent-%COMP%]    > main[_ngcontent-%COMP%] {\n  scroll-snap-align: start;\n  display: flex;\n  padding: 2rem 1rem;\n}\n@media print, screen and (max-width: 960px) {\n  #container[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(18rem, 65rem);\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3N0eWxlcy9wcmltZW5nL292ZXJyaWRlLnNjc3MiLCJhcHAuY29tcG9uZW50LnNjc3MiLCIuLi9zdHlsZXMvY29tcG9uZW50cy9jb2RlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0VBRUUsa0JBQUE7QUNBSjtBREdFO0VBQ0UsNEJBQUE7QUNESjtBRElFO0VBQ0UsYUFBQTtBQ0ZKO0FES0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNISjtBQ2JBO0VBQ0UsK0ZBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QURnQkY7QUFuQkE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtFQUNBLHVCQUFBO0FBc0JGO0FBcEJFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBc0JKO0FBbkJNO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7QUFxQlI7QUFuQlE7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBb0JWO0FBakJRO0VBQ0UsMkJBQUE7RUFDQSwyRkFBQTtBQW1CVjtBQWhCUTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLG9KQUFBO0FBa0JWO0FBYk07RUFDRSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxzRUFBQTtBQWVSO0FBWk07RUFDRSxVQUFBO0VBQ0EsNkhBQUE7QUFjUjtBQVhRO0VBQ0UsZUFBQTtBQWFWO0FBUkk7RUFDRTtJQUNFLFVBQUE7RUFVTjtBQUNGO0FBUEk7RUFDRTtJQUNFLHVCQUFBO0VBU047QUFDRjtBQU5JO0VBQ0U7SUFDRSxZQUFBO0VBUU47QUFDRjtBQUxJO0VBQ0U7SUFLRSx3QkFBQTtFQUdOO0VBREk7SUFDRSw0QkFBQTtFQUdOO0VBREk7SUFDRSw0QkFBQTtFQUdOO0FBQ0Y7QUFBSTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBRU47QUFDRjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFBSjtBQUdFO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUtBO0VBQ0U7SUFDRSwyQ0FBQTtJQUNBLGVBQUE7RUFGRjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIC5wLWNhcmQtdGl0bGUsXG4gIC5wLWNhcmQtc3VidGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5wLXRhZywgLnAtcHJvZ3Jlc3NiYXIgLnAtcHJvZ3Jlc3NiYXItdmFsdWUge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstZ3JleSk7XG4gIH1cblxuICBwLXNjcm9sbHRvcCA+IGJ1dHRvbi5wLXNjcm9sbHRvcCB7XG4gICAgei1pbmRleDogMTAwNDtcbiAgfVxuXG4gIHAtcGFuZWwgLnAtcGFuZWwtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG4iLCJAdXNlIFwic3JjL3N0eWxlcy9wcmltZW5nL292ZXJyaWRlXCI7XG5AdXNlIFwic3JjL3N0eWxlcy9jb21wb25lbnRzL2NvZGVcIjtcblxuI2NvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxOHJlbSBtaW5tYXgoMThyZW0sIDY1cmVtKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLndlbGNvbWUge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBlbmQ7XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzdncgKyAxcmVtLCA0cmVtKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LWZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsIG1vbm9zcGFjZTtcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuXG4gICAgICAgICY6OmJlZm9yZSxcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbiAgICAgICAgICBhbmltYXRpb246IHR5cGV3cml0ZXIgdmFyKC0tdHlwZXdyaXRlclNwZWVkKSBzdGVwcyh2YXIoLS10eXBld3JpdGVyQ2hhcmFjdGVycykpIDFzIGZvcndhcmRzO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIHdpZHRoOiAwLjEyNWVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR5cGV3cml0ZXItdGV4dCk7XG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBld3JpdGVyIHZhcigtLXR5cGV3cml0ZXJTcGVlZCkgc3RlcHModmFyKC0tdHlwZXdyaXRlckNoYXJhY3RlcnMpKSAxcyBmb3J3YXJkcyxcbiAgICAgICAgICAgIGJsaW5rIDc1MG1zIHN0ZXBzKHZhcigtLXR5cGV3cml0ZXJDaGFyYWN0ZXJzKSkgaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJl9fc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogdmFyKC0tdHlwZXdyaXRlci10ZXh0KTtcbiAgICAgICAgbWFyZ2luOiA1cmVtIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNyZW0pO1xuICAgICAgICBhbmltYXRpb246IGZhZGVJblVwIDJzIGVhc2UgY2FsYyh2YXIoLS10eXBld3JpdGVyU3BlZWQpICsgMnMpIGZvcndhcmRzO1xuICAgICAgfVxuXG4gICAgICAmX19nb3RvIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYW5pbWF0aW9uOiBib3VuY2UgMS41cyBpbmZpbml0ZSBjYWxjKHZhcigtLXR5cGV3cml0ZXJTcGVlZCkgKyAzcyksXG4gICAgICAgICAgdmlzaWJpbGl0eSAxLjVzIGZvcndhcmRzIGNhbGModmFyKC0tdHlwZXdyaXRlclNwZWVkKSArIDNzKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHR5cGV3cml0ZXIge1xuICAgICAgdG8ge1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgYmxpbmsge1xuICAgICAgdG8ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHZpc2liaWxpdHkge1xuICAgICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBib3VuY2Uge1xuICAgICAgMCUsXG4gICAgICAyMCUsXG4gICAgICA1MCUsXG4gICAgICA4MCUsXG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgICAgNDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgICAgIH1cbiAgICAgIDYwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBmYWRlSW5VcCB7XG4gICAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICA+IGFzaWRlIHtcbiAgICBwYWRkaW5nOiAycmVtIDA7XG4gICAgbWFyZ2luOiAwIDFyZW07XG4gIH1cblxuICA+IG1haW4ge1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgcHJpbnQsIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgI2NvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMThyZW0sIDY1cmVtKTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cbn1cbiIsIjo6bmctZGVlcCBjb2RlIHtcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIFNGIE1vbm8sIE1lbmxvLCBDb25zb2xhcywgTGliZXJhdGlvbiBNb25vLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDExJSk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNsZWFyKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwLjJyZW07XG59XG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-markdown */ 3981);
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/scrolltop */ 2071);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.module */ 294);
/* harmony import */ var _features_resume_resume_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/resume/resume.module */ 8260);
/* harmony import */ var _features_contact_contact_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/contact/contact.module */ 981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _features_contact_contact_module__WEBPACK_IMPORTED_MODULE_5__.ContactModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_10__.MarkdownModule.forRoot(),
            _features_resume_resume_module__WEBPACK_IMPORTED_MODULE_4__.ResumeModule,
            primeng_scrolltop__WEBPACK_IMPORTED_MODULE_11__.ScrollTopModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _features_contact_contact_module__WEBPACK_IMPORTED_MODULE_5__.ContactModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_10__.MarkdownModule, _features_resume_resume_module__WEBPACK_IMPORTED_MODULE_4__.ResumeModule,
        primeng_scrolltop__WEBPACK_IMPORTED_MODULE_11__.ScrollTopModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 8914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] }); })();


/***/ }),

/***/ 8914:
/*!*************************************************!*\
  !*** ./src/app/core/services/config.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
var _a;


// const osColorMode = window.matchMedia('(prefers-color-scheme: dark)');
const theme = (_a = localStorage.getItem('theme')) !== null && _a !== void 0 ? _a : 'light';
class ConfigService {
    constructor() {
        this._theme$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(theme);
    }
    /**
     *
     * @param theme the theme to be set
     */
    setTheme$(theme) {
        this._theme$.next(theme);
    }
    /**
     * Return the current theme
     */
    get theme$() {
        return this._theme$;
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac });


/***/ }),

/***/ 2629:
/*!**************************************************************************!*\
  !*** ./src/app/features/contact/components/general/contact.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 8914);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/card */ 6480);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/avatar */ 9713);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/chip */ 4580);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 2875);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ 1210);










class ContactComponent {
    /**
     * Constructor
     *
     * @param configService the config service to be injected as a dependency
     */
    constructor(configService) {
        this.configService = configService;
        this._unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.configService.theme$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this._unsubscribe$)).subscribe((theme) => {
            this.themeChecked = theme === 'light';
            document.body.classList.toggle('dark', !this.themeChecked);
        });
    }
    /**
     * Change theme from dark to light and vise-versa
     */
    switchTheme() {
        this.themeChecked = !this.themeChecked;
        const theme = this.themeChecked ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        this.configService.setTheme$(theme);
    }
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
        anchor.href = 'assets/pdf/CV_GARDET_Gilles.pdf';
        anchor.download = 'gardet_gilles.pdf';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }
    /**
     * @inheritDoc
     */
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.unsubscribe();
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService)); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["portfolio-contact"]], decls: 9, vars: 0, consts: [[1, "general"], ["size", "xlarge", "shape", "circle", "styleClass", "p-mt-5", "image", "assets/pictures/me.jpg"], [1, "general__name"], [1, "general__presentation"], ["label", "gilles.gardet@gmail.com", "icon", "pi pi-envelope", "styleClass", "p-mr-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "submit", "icon", "pi pi-cloud-download", "pTooltip", "T\u00E9l\u00E9charger mon CV au format PDF", 1, "p-button-rounded", "p-button-text", "general__button-left", 3, "click"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-card")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Gilles Gardet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "D\u00E9veloppeur fullstack, curieux par nature et passionn\u00E9 par son m\u00E9tier.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p-chip", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContactComponent_Template_p_chip_click_7_listener() { return ctx.openEmailClient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_8_listener() { return ctx.downloadCurriculumVitae(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_4__.Card, primeng_avatar__WEBPACK_IMPORTED_MODULE_5__.Avatar, primeng_chip__WEBPACK_IMPORTED_MODULE_6__.Chip, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.Ripple, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.Tooltip], styles: [".general[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.general[_ngcontent-%COMP%]   .general__name[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: bold;\n  margin: 1rem 0;\n}\n.general[_ngcontent-%COMP%]   .general__presentation[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 1rem;\n}\n.general[_ngcontent-%COMP%]   .general__button-left[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  left: 0.5rem;\n}\n.general[_ngcontent-%COMP%]   .general__button-right[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  left: 0.5rem;\n}\n  p-card > div.p-card {\n  position: sticky;\n  top: 2rem;\n}\n  button.p-button {\n  border: 1px solid var(--button);\n  background: var(--button);\n}\n  button.p-button.p-button.p-button-text,   button.p-button.p-button.p-button-text:enabled:hover,   button.p-button.p-button.p-button-text:enabled:active {\n  color: var(--button);\n}\n  button.p-button.p-button.p-button-text:enabled:hover,   button.p-button.p-button.p-button-text:enabled:active {\n  background: rgba(75, 85, 94, 0.04);\n}\n  button.p-button.p-button:focus,   button.p-button.p-button.p-button-text:enabled:active {\n  box-shadow: 0 0 0 0.2rem #aab1b9;\n}\n  p-chip[label=\"gilles.gardet@gmail.com\"] {\n  --params: 0.8s ease;\n}\n  p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip {\n  position: relative;\n  overflow: hidden;\n  transition: color var(--params), background-color var(--params);\n  background-color: var(--chip-bg);\n  z-index: 0;\n}\n  p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  background-color: var(--dark-grey);\n  transform: translateX(100%);\n  transition: transform var(--params), opacity var(--params);\n}\n  p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:hover {\n  cursor: pointer;\n  color: var(--white);\n  background-color: transparent;\n}\n  p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:hover::before {\n  transform: translateX(0);\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFOO0FBR0k7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBRE47QUFLTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFIUjtBQU1NO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUpSO0FBV0U7RUFDRSxnQkFBQTtFQUNBLFNBQUE7QUFSSjtBQVdFO0VBQ0UsK0JBQUE7RUFDQSx5QkFBQTtBQVRKO0FBV0k7RUFHRSxvQkFBQTtBQVhOO0FBY0k7RUFFRSxrQ0FBQTtBQWJOO0FBZ0JJO0VBRUUsZ0NBQUE7QUFmTjtBQW1CRTtFQUNFLG1CQUFBO0FBakJKO0FBbUJJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FBakJOO0FBbUJNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsMERBQUE7QUFqQlI7QUFvQk07RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQWxCUjtBQW9CUTtFQUNFLHdCQUFBO0VBQ0EsVUFBQTtBQWxCViIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdlbmVyYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5nZW5lcmFsIHtcbiAgICAmX19uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICB9XG5cbiAgICAmX19wcmVzZW50YXRpb24ge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgJl9fYnV0dG9uIHtcbiAgICAgICYtbGVmdCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwLjVyZW07XG4gICAgICAgIGxlZnQ6IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgJi1yaWdodCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwLjVyZW07XG4gICAgICAgIGxlZnQ6IDAuNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgcC1jYXJkID4gZGl2LnAtY2FyZCB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDJyZW07XG4gIH1cblxuICBidXR0b24ucC1idXR0b24ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uKTtcblxuICAgICYucC1idXR0b24ucC1idXR0b24tdGV4dCxcbiAgICAmLnAtYnV0dG9uLnAtYnV0dG9uLXRleHQ6ZW5hYmxlZDpob3ZlcixcbiAgICAmLnAtYnV0dG9uLnAtYnV0dG9uLXRleHQ6ZW5hYmxlZDphY3RpdmUge1xuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbik7XG4gICAgfVxuXG4gICAgJi5wLWJ1dHRvbi5wLWJ1dHRvbi10ZXh0OmVuYWJsZWQ6aG92ZXIsXG4gICAgJi5wLWJ1dHRvbi5wLWJ1dHRvbi10ZXh0OmVuYWJsZWQ6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzUsIDg1LCA5NCwgMC4wNCk7XG4gICAgfVxuXG4gICAgJi5wLWJ1dHRvbjpmb2N1cyxcbiAgICAmLnAtYnV0dG9uLnAtYnV0dG9uLXRleHQ6ZW5hYmxlZDphY3RpdmUge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICNhYWIxYjk7XG4gICAgfVxuICB9XG5cbiAgcC1jaGlwW2xhYmVsPSdnaWxsZXMuZ2FyZGV0QGdtYWlsLmNvbSddIHtcbiAgICAtLXBhcmFtczogMC44cyBlYXNlO1xuXG4gICAgLnAtY2hpcCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tcGFyYW1zKSwgYmFja2dyb3VuZC1jb2xvciB2YXIoLS1wYXJhbXMpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hpcC1iZyk7XG4gICAgICB6LWluZGV4OiAwO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS1wYXJhbXMpLCBvcGFjaXR5IHZhcigtLXBhcmFtcyk7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 981:
/*!****************************************************!*\
  !*** ./src/app/features/contact/contact.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactModule": () => (/* binding */ ContactModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/card */ 6480);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/avatar */ 9713);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/chip */ 4580);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/ripple */ 2875);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ 1210);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputswitch */ 2236);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _features_contact_components_general_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @features/contact/components/general/contact.component */ 2629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);











class ContactModule {
}
ContactModule.ɵfac = function ContactModule_Factory(t) { return new (t || ContactModule)(); };
ContactModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContactModule });
ContactModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            primeng_avatar__WEBPACK_IMPORTED_MODULE_2__.AvatarModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule,
            primeng_card__WEBPACK_IMPORTED_MODULE_4__.CardModule,
            primeng_chip__WEBPACK_IMPORTED_MODULE_5__.ChipModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_8__.InputSwitchModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.RippleModule,
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.TooltipModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactModule, { declarations: [_features_contact_components_general_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent], imports: [primeng_avatar__WEBPACK_IMPORTED_MODULE_2__.AvatarModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_4__.CardModule,
        primeng_chip__WEBPACK_IMPORTED_MODULE_5__.ChipModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_8__.InputSwitchModule,
        primeng_ripple__WEBPACK_IMPORTED_MODULE_9__.RippleModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.TooltipModule], exports: [_features_contact_components_general_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent] }); })();


/***/ }),

/***/ 7924:
/*!*************************************************************************!*\
  !*** ./src/app/features/resume/components/hobbies/hobbies.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HobbiesComponent": () => (/* binding */ HobbiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/panel */ 6572);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/tag */ 5277);



class HobbiesComponent {
}
HobbiesComponent.ɵfac = function HobbiesComponent_Factory(t) { return new (t || HobbiesComponent)(); };
HobbiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HobbiesComponent, selectors: [["portfolio-hobbies"]], decls: 11, vars: 4, consts: [["header", "Loisirs"], [1, "p-grid", "p-flex-column", "hobbies"], [3, "rounded"], [1, "pi"]], template: function HobbiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-panel", 0)(1, "div", 1)(2, "p-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "D\u00E9veloppement relatif \u00E0 tout type de langages et technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Basketball en comp\u00E9tition (niveau excellence)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Course \u00E0 pied (participation au marathon de Toulouse en \u00E9quipe)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cin\u00E9ma fantastique des ann\u00E9es 80-90 (Carpenter, Cronenberg, Romero...)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true);
    } }, directives: [primeng_panel__WEBPACK_IMPORTED_MODULE_1__.Panel, primeng_tag__WEBPACK_IMPORTED_MODULE_2__.Tag], styles: [".hobbies[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvYmJpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0YiLCJmaWxlIjoiaG9iYmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob2JiaWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuIl19 */"] });


/***/ }),

/***/ 6032:
/*!***************************************************************************!*\
  !*** ./src/app/features/resume/components/missions/missions.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MissionsComponent": () => (/* binding */ MissionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/panel */ 6572);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/timeline */ 8554);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/card */ 6480);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ 3981);
/* harmony import */ var _shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/slide-button/slide-button.component */ 4324);









function MissionsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", "#607D8B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "pi pi-bookmark");
} }
const _c0 = function () { return { backgroundColor: "hsl(204, 19%, 98%)" }; };
function MissionsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "markdown", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8)(3, "portfolio-slide-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MissionsComponent_ng_template_3_Template_portfolio_slide_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const mission_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.emitOpenMissionDialog(mission_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const mission_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", mission_r3.client)("subheader", mission_r3.timelapse);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", mission_r3.description);
} }
class MissionsComponent {
    constructor() {
        this.missions = [];
        this.openDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    /**
     * @inheritDoc
     */
    ngOnInit() {
        this.screenWidth = window.innerWidth;
    }
    /**
     * @inheritDoc
     */
    ngAfterViewInit() {
        this._animateMissionsOnView();
    }
    /**
     * Listen for the screen size changes and keep track of these sizes
     */
    onWindowResize() {
        this.screenWidth = window.innerWidth;
    }
    /**
     * Animate the missions cards when visible on screen
     */
    _animateMissionsOnView() {
        const intersectionObserver = new IntersectionObserver((entries) => {
            // trigger the animation on the intersection according to the side of the timeline event
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }
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
     * Open the details dialog
     */
    emitOpenMissionDialog(mission) {
        this.openDialog.emit(mission);
    }
}
MissionsComponent.ɵfac = function MissionsComponent_Factory(t) { return new (t || MissionsComponent)(); };
MissionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MissionsComponent, selectors: [["portfolio-missions"]], hostBindings: function MissionsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function MissionsComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { missions: "missions" }, outputs: { openDialog: "openDialog" }, decls: 4, vars: 1, consts: [["header", "Exp\u00E9rience"], ["align", "alternate", "styleClass", "customized-timeline", 3, "value"], ["pTemplate", "marker"], ["pTemplate", "content"], [1, "custom-marker", "p-shadow-2"], [3, "ngClass"], ["styleClass", "mission", 3, "header", "subheader"], [3, "src"], [1, "mission__button"], [3, "click"]], template: function MissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-panel", 0)(1, "p-timeline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MissionsComponent_ng_template_2_Template, 2, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MissionsComponent_ng_template_3_Template, 4, 6, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.missions);
    } }, directives: [primeng_panel__WEBPACK_IMPORTED_MODULE_2__.Panel, primeng_timeline__WEBPACK_IMPORTED_MODULE_3__.Timeline, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, primeng_card__WEBPACK_IMPORTED_MODULE_6__.Card, ngx_markdown__WEBPACK_IMPORTED_MODULE_7__.MarkdownComponent, _shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_0__.SlideButtonComponent], styles: [".custom-marker[_ngcontent-%COMP%] {\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  justify-content: center;\n  color: var(--white);\n  border-radius: 50%;\n  z-index: 1;\n}\n\n  .p-timeline-event-content,   .p-timeline-event-opposite {\n  line-height: 1;\n}\n\n  .p-button.p-button-secondary.p-button-outlined {\n  color: var(--dark);\n}\n\n  .mission__animation-left {\n  opacity: 0;\n  transform: translateX(-40px);\n  animation: fadeIn 3s forwards;\n  -webkit-animation: fadeIn 3s forwards;\n  -moz-animation: fadeIn 3s forwards;\n  -o-animation: fadeIn 3s forwards;\n  -ms-animation: fadeIn 3s forwards;\n}\n\n  .mission__animation-right {\n  opacity: 0;\n  transform: translateX(40px);\n  animation: fadeIn 3s forwards;\n  -webkit-animation: fadeIn 3s forwards;\n  -moz-animation: fadeIn 3s forwards;\n  -o-animation: fadeIn 3s forwards;\n  -ms-animation: fadeIn 3s forwards;\n}\n\n  .mission__button {\n  display: flex;\n  justify-content: center;\n}\n\n  .p-timeline-event-content > p-card > .mission > .p-card-body > .p-card-content {\n  text-align: left;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n@media screen and (max-width: 960px) {\n    .customized-timeline .p-timeline-event:nth-child(even) {\n    flex-direction: row !important;\n  }\n    .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content {\n    text-align: left !important;\n  }\n    .customized-timeline .p-timeline-event-opposite {\n    flex: 0;\n  }\n    .customized-timeline .p-card {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc3Npb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBR0U7O0VBRUUsY0FBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7QUFESjs7QUFJRTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7QUFGSjs7QUFLRTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7QUFISjs7QUFNRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUpKOztBQU9FO0VBQ0UsZ0JBQUE7QUFMSjs7QUFRRTtFQUNFO0lBQ0UsVUFBQTtFQU5KO0VBUUU7SUFDRSxVQUFBO0VBTko7RUFRRTtJQUNFLHdCQUFBO0VBTko7QUFDRjs7QUEwREE7RUFHTTtJQUNFLDhCQUFBO0VBYk47RUFlTTtJQUNFLDJCQUFBO0VBYlI7RUFpQkk7SUFDRSxPQUFBO0VBZk47RUFrQkk7SUFDRSxnQkFBQTtFQWhCTjtBQUNGIiwiZmlsZSI6Im1pc3Npb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1tYXJrZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xufVxuXG46Om5nLWRlZXAge1xuICAucC10aW1lbGluZS1ldmVudC1jb250ZW50LFxuICAucC10aW1lbGluZS1ldmVudC1vcHBvc2l0ZSB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cblxuICAucC1idXR0b24ucC1idXR0b24tc2Vjb25kYXJ5LnAtYnV0dG9uLW91dGxpbmVkIHtcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG4gIH1cblxuICAubWlzc2lvbl9fYW5pbWF0aW9uLWxlZnQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MHB4KTtcbiAgICBhbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgLW1zLWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICB9XG5cbiAgLm1pc3Npb25fX2FuaW1hdGlvbi1yaWdodCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDBweCk7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgIC1vLWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgIC1tcy1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgfVxuXG4gIC5taXNzaW9uX19idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAucC10aW1lbGluZS1ldmVudC1jb250ZW50ID4gcC1jYXJkID4gLm1pc3Npb24gPiAucC1jYXJkLWJvZHkgPiAucC1jYXJkLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICB9XG5cbiAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICB9XG5cbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICB9XG5cbiAgQC1vLWtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgfVxuXG4gIEAtbXMta2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIDo6bmctZGVlcCB7XG4gICAgLmN1c3RvbWl6ZWQtdGltZWxpbmUge1xuICAgICAgLnAtdGltZWxpbmUtZXZlbnQ6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuXG4gICAgICAgIC5wLXRpbWVsaW5lLWV2ZW50LWNvbnRlbnQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucC10aW1lbGluZS1ldmVudC1vcHBvc2l0ZSB7XG4gICAgICAgIGZsZXg6IDA7XG4gICAgICB9XG5cbiAgICAgIC5wLWNhcmQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 4692:
/*!***********************************************************************!*\
  !*** ./src/app/features/resume/components/resume/resume.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeComponent": () => (/* binding */ ResumeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9727);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4350);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _assets_resume_missions_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @assets/resume/missions.json */ 8594);
/* harmony import */ var _assets_resume_skills_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/resume/skills.json */ 2243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-markdown */ 3981);
/* harmony import */ var _features_resume_components_summary_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/resume/components/summary/summary.component */ 996);
/* harmony import */ var _features_resume_components_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/resume/components/skills/skills.component */ 1430);
/* harmony import */ var _features_resume_components_missions_missions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/resume/components/missions/missions.component */ 6032);
/* harmony import */ var _features_resume_components_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/resume/components/hobbies/hobbies.component */ 7924);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ 3489);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/progressspinner */ 120);














function ResumeComponent_p_dialog_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.selectedMission.timelapse);
} }
function ResumeComponent_p_dialog_4_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "p-progressSpinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ResumeComponent_p_dialog_4_ng_template_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 12)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r5.innerLightMission, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r5.innerFullMission, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function ResumeComponent_p_dialog_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ResumeComponent_p_dialog_4_ng_template_2_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ResumeComponent_p_dialog_4_ng_template_2_ng_template_2_Template, 3, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mission__content-transition", !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.loading)("ngIfElse", _r4);
} }
const _c0 = function () { return { maxWidth: "1280px" }; };
function ResumeComponent_p_dialog_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-dialog", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("visibleChange", function ResumeComponent_p_dialog_4_Template_p_dialog_visibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.displayDialog = $event; })("onHide", function ResumeComponent_p_dialog_4_Template_p_dialog_onHide_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r8.onDialogHiding(); })("onShow", function ResumeComponent_p_dialog_4_Template_p_dialog_onShow_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r9.onMissionLoading(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ResumeComponent_p_dialog_4_ng_template_1_Template, 2, 1, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ResumeComponent_p_dialog_4_ng_template_2_Template, 4, 4, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx_r0.displayDialog)("header", (tmp_2_0 = ctx_r0.selectedMission) == null ? null : tmp_2_0.client)("modal", true)("closeOnEscape", true)("dismissableMask", true)("blockScroll", true);
} }
class ResumeComponent {
    /**
     * Constructor
     */
    constructor(markdownService) {
        this.markdownService = markdownService;
        this._unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.selectedMission = {};
        this.missions = [];
        this.skills = [];
        this.clones = [];
        this.displayDialog = false;
        this.loading = true;
        this.innerFullMission = '';
        this.innerLightMission = '';
    }
    /**
     * @inheritDoc
     */
    ngOnInit() {
        const missions$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_assets_resume_missions_json__WEBPACK_IMPORTED_MODULE_0__);
        const skills$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_assets_resume_skills_json__WEBPACK_IMPORTED_MODULE_1__);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.zip)(missions$, skills$)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([missions, skills]) => ({ missions, skills })))
            .subscribe((result) => {
            this.missions = result.missions.map((mission) => {
                return Object.assign(Object.assign({}, mission), { timelapse: this.missionTimelapse(mission.startDate, mission.endDate), description: this.missionFromDate(mission.startDate, 'light') });
            });
            this.skills = result.skills;
            this.clones = result.skills;
            this.skills = result.skills.map((skill) => ({ name: skill.name, rate: 0 }));
        });
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
        return `/assets/resume/missions/${date.getFullYear()}${month}/${date.getFullYear()}${month}_${type}.md`;
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
        const addTwoDigits = (number) => (number < 10 ? `0${number}` : `${number}`);
        return `${addTwoDigits(date.getDate())}/${addTwoDigits(date.getMonth() + 1)}/${date.getFullYear()}`;
    }
    /**
     * Calculate the mission duration
     *
     * @param {string} start the date on which the mission started
     * @param {string} end the date on which the mission ended
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)({ lightMission, fullMission })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._unsubscribe$))
            .subscribe((value) => {
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
     * @inheritDoc
     */
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.unsubscribe();
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_markdown__WEBPACK_IMPORTED_MODULE_13__.MarkdownService)); };
ResumeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["portfolio-resume"]], decls: 5, vars: 4, consts: [[3, "skills", "clones"], [3, "missions", "openDialog"], [3, "visible", "header", "modal", "style", "closeOnEscape", "dismissableMask", "blockScroll", "visibleChange", "onHide", "onShow", 4, "ngIf"], [3, "visible", "header", "modal", "closeOnEscape", "dismissableMask", "blockScroll", "visibleChange", "onHide", "onShow"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "mission__timelapse"], [1, "mission__content"], [4, "ngIf", "ngIfElse"], ["missionContent", ""], ["strokeWidth", "6", "styleClass", "mission__content__spinner"], [1, "mission__content__text"], [3, "innerHTML"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "portfolio-summary")(1, "portfolio-skills", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "portfolio-missions", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("openDialog", function ResumeComponent_Template_portfolio_missions_openDialog_2_listener($event) { return ctx.openDialog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "portfolio-hobbies");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ResumeComponent_p_dialog_4_Template, 3, 9, "p-dialog", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("skills", ctx.skills)("clones", ctx.clones);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("missions", ctx.missions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedMission);
    } }, directives: [_features_resume_components_summary_summary_component__WEBPACK_IMPORTED_MODULE_2__.SummaryComponent, _features_resume_components_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__.SkillsComponent, _features_resume_components_missions_missions_component__WEBPACK_IMPORTED_MODULE_4__.MissionsComponent, _features_resume_components_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_5__.HobbiesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, primeng_dialog__WEBPACK_IMPORTED_MODULE_15__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__.ProgressSpinner], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-row-gap: 2rem;\n}\n[_nghost-%COMP%]     :not(pre) > pre {\n  background: #272822;\n}\n[_nghost-%COMP%]     pre {\n  padding: 0.3rem;\n  margin: 0.5em 0;\n  overflow: auto;\n  border-radius: 0.3em;\n  color: #f8f8f2;\n  background: none;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n  font-family: Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  hyphens: none;\n}\n[_nghost-%COMP%]     code[class*=language-] {\n  font-size: 0.7rem;\n  max-width: calc(100vw - 4rem);\n  display: grid;\n  grid-auto-columns: auto;\n}\n[_nghost-%COMP%]     .p-dialog .p-dialog-header .mission__timelapse {\n  font-style: italic;\n  margin: 0 1rem;\n}\n[_nghost-%COMP%]     .p-dialog .p-dialog-content {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  display: flex;\n  justify-content: center;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n[_nghost-%COMP%]     .p-dialog .p-dialog-content .mission__content {\n  max-height: 100px;\n  max-width: 100px;\n  transition: max-height 800ms ease-in-out, max-width 800ms ease-in-out;\n}\n[_nghost-%COMP%]     .p-dialog .p-dialog-content .mission__content .mission__content__spinner .p-progress-spinner-circle {\n  animation: progress-spinner-dash 1.5s ease-in-out infinite, progress-spinner-color 6s ease-in-out infinite;\n}\n@keyframes progress-spinner-color {\n  100%, 0%, 40%, 66%, 80%, 90% {\n    stroke: var(--dark-grey);\n  }\n}\n@keyframes progress-spinner-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n[_nghost-%COMP%]     .p-dialog .p-dialog-content .mission__content .mission__content__text {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  opacity: 0;\n  animation: fadeText 800ms forwards 800ms;\n}\n@keyframes fadeText {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n[_nghost-%COMP%]     .p-dialog .p-dialog-content .mission__content-transition {\n  max-height: 100vh;\n  max-width: calc(1280px - 3rem);\n}\n[_nghost-%COMP%]     .p-dialog .p-dialog-content-scroll {\n  overflow-y: auto;\n  animation: hideScroll 800ms backwards;\n}\n@keyframes hideScroll {\n  from, to {\n    overflow-y: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUk7RUFDRSxtQkFBQTtBQUFOO0FBR0k7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0VBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUROO0FBSUk7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBRk47QUFNTTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUpSO0FBT007RUFDRSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUxSO0FBT1E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUVBQUE7QUFMVjtBQU9VO0VBQ0UsMEdBQUE7QUFMWjtBQVFVO0VBQ0U7SUFNRSx3QkFBQTtFQVhaO0FBQ0Y7QUFjVTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQVpaO0VBY1U7SUFDRSx5QkFBQTtJQUNBLHdCQUFBO0VBWlo7RUFjVTtJQUNFLHlCQUFBO0lBQ0EseUJBQUE7RUFaWjtBQUNGO0FBZVU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtBQWJaO0FBZ0JVO0VBQ0U7SUFDRSxVQUFBO0VBZFo7RUFnQlU7SUFDRSxVQUFBO0VBZFo7QUFDRjtBQWtCUTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7QUFoQlY7QUFvQk07RUFDRSxnQkFBQTtFQUNBLHFDQUFBO0FBbEJSO0FBcUJNO0VBQ0U7SUFFRSxrQkFBQTtFQXBCUjtBQUNGIiwiZmlsZSI6InJlc3VtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1yb3ctZ2FwOiAycmVtO1xuXG4gIDo6bmctZGVlcCB7XG4gICAgOm5vdChwcmUpID4gcHJlIHtcbiAgICAgIGJhY2tncm91bmQ6ICMyNzI4MjI7XG4gICAgfVxuXG4gICAgcHJlIHtcbiAgICAgIHBhZGRpbmc6IDAuM3JlbTtcbiAgICAgIG1hcmdpbjogMC41ZW0gMDtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgICBjb2xvcjogI2Y4ZjhmMjtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBNb25hY28sICdBbmRhbGUgTW9ubycsICdVYnVudHUgTW9ubycsIG1vbm9zcGFjZTtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgICAgIHdvcmQtd3JhcDogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIC1tb3otdGFiLXNpemU6IDQ7XG4gICAgICB0YWItc2l6ZTogNDtcbiAgICAgIC13ZWJraXQtaHlwaGVuczogbm9uZTtcbiAgICAgIGh5cGhlbnM6IG5vbmU7XG4gICAgfVxuXG4gICAgY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNHJlbSk7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC1hdXRvLWNvbHVtbnM6IGF1dG87XG4gICAgfVxuXG4gICAgLnAtZGlhbG9nIHtcbiAgICAgIC5wLWRpYWxvZy1oZWFkZXIgLm1pc3Npb25fX3RpbWVsYXBzZSB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICB9XG5cbiAgICAgIC5wLWRpYWxvZy1jb250ZW50IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG5cbiAgICAgICAgLm1pc3Npb25fX2NvbnRlbnQge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCA4MDBtcyBlYXNlLWluLW91dCwgbWF4LXdpZHRoIDgwMG1zIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgLm1pc3Npb25fX2NvbnRlbnRfX3NwaW5uZXIgLnAtcHJvZ3Jlc3Mtc3Bpbm5lci1jaXJjbGUge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzcy1zcGlubmVyLWRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSwgcHJvZ3Jlc3Mtc3Bpbm5lci1jb2xvciA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIHByb2dyZXNzLXNwaW5uZXItY29sb3Ige1xuICAgICAgICAgICAgMTAwJSxcbiAgICAgICAgICAgIDAlLFxuICAgICAgICAgICAgNDAlLFxuICAgICAgICAgICAgNjYlLFxuICAgICAgICAgICAgODAlLFxuICAgICAgICAgICAgOTAlIHtcbiAgICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1kYXJrLWdyZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgcHJvZ3Jlc3Mtc3Bpbm5lci1kYXNoIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xuICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xuICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5taXNzaW9uX19jb250ZW50X190ZXh0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVUZXh0IDgwMG1zIGZvcndhcmRzIDgwMG1zO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZVRleHQge1xuICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1pc3Npb25fX2NvbnRlbnQtdHJhbnNpdGlvbiB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEyODBweCAtIDNyZW0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wLWRpYWxvZy1jb250ZW50LXNjcm9sbCB7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIGFuaW1hdGlvbjogaGlkZVNjcm9sbCA4MDBtcyBiYWNrd2FyZHM7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgaGlkZVNjcm9sbCB7XG4gICAgICAgIGZyb20sXG4gICAgICAgIHRvIHtcbiAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 1430:
/*!***********************************************************************!*\
  !*** ./src/app/features/resume/components/skills/skills.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsComponent": () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/panel */ 6572);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/progressbar */ 9858);




function SkillsComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-progressBar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", skill_r1.rate)("showValue", false);
} }
class SkillsComponent {
    constructor() {
        this.skills = [];
        this.clones = [];
    }
    /**
     * @inheritDoc
     */
    ngAfterViewInit() {
        this._animateSkillsOnView();
    }
    /**
     * Animate the skills bar when visible on screen
     */
    _animateSkillsOnView() {
        const rateIntersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && this.clones.length > 0) {
                    this.skills.forEach((tool) => { var _a, _b; return (tool.rate = (_b = (_a = this.clones) === null || _a === void 0 ? void 0 : _a.find((clone) => clone.name === tool.name)) === null || _b === void 0 ? void 0 : _b.rate); });
                }
            });
        }, {
            threshold: 0,
        });
        const rateElement = document.querySelector('p-panel[header="Langages et outils"] .p-component');
        if (rateElement)
            rateIntersectionObserver.observe(rateElement);
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["portfolio-skills"]], inputs: { skills: "skills", clones: "clones" }, decls: 3, vars: 1, consts: [["header", "Langages et outils"], [1, "skills"], [4, "ngFor", "ngForOf"], [1, "skills__languages"], [3, "value", "showValue"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-panel", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkillsComponent_ng_container_2_Template, 5, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [primeng_panel__WEBPACK_IMPORTED_MODULE_1__.Panel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, primeng_progressbar__WEBPACK_IMPORTED_MODULE_3__.ProgressBar], styles: [".skills[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 2rem;\n  grid-row-gap: 1rem;\n  padding: 0 2rem;\n}\n.skills__languages[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.skills__languages[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: start;\n  margin-right: 1rem;\n}\n.skills__languages[_ngcontent-%COMP%]    > p-progressbar[_ngcontent-%COMP%] {\n  flex: 2;\n}\n  .p-progressbar {\n  height: 0.5rem;\n  border-radius: 5px;\n}\n@media screen and (max-width: 960px) {\n  .skills[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNOO0FBRUk7RUFDRSxPQUFBO0FBQU47QUFNRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUhKO0FBT0E7RUFDRTtJQUNFLDBCQUFBO0VBSkY7QUFDRiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGxzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDJyZW07XG4gIGdyaWQtcm93LWdhcDogMXJlbTtcbiAgcGFkZGluZzogMCAycmVtO1xuXG4gICZfX2xhbmd1YWdlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgPiBzcGFuIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICB9XG5cbiAgICA+IHAtcHJvZ3Jlc3NiYXIge1xuICAgICAgZmxleDogMjtcbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgLnAtcHJvZ3Jlc3NiYXIge1xuICAgIGhlaWdodDogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuc2tpbGxzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 996:
/*!*************************************************************************!*\
  !*** ./src/app/features/resume/components/summary/summary.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryComponent": () => (/* binding */ SummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/panel */ 6572);


class SummaryComponent {
    constructor() {
        this.experience = new Date(2013, 4);
    }
    /**
     * Calculate the number of years between a given date and the current date
     * @param {Date} date the date to substract to the current date
     */
    numberOfYearsFromDateToCurrentDate(date) {
        return new Date().getFullYear() - date.getFullYear();
    }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) { return new (t || SummaryComponent)(); };
SummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["portfolio-summary"]], decls: 22, vars: 1, consts: [["header", "Profil et g\u00E9n\u00E9ralit\u00E9s"], [1, "summary"]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-panel", 0)(1, "div", 1)(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Je b\u00E9n\u00E9ficie d\u2019une exp\u00E9rience de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " en tant que concepteur d\u00E9veloppeur en mati\u00E8re de syst\u00E8mes d\u2019information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Principalement sp\u00E9cialis\u00E9 dans les technologies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "backend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " (Java, Spring...), que j'ai pu \u00E9prouver sur diff\u00E9rentes missions elles-m\u00EAmes touchant \u00E0 plusieurs domaines d'activit\u00E9s (domaine du spatial, des ressources humaines, des collectivit\u00E9s...). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " J'ai n\u00E9anmoins un profil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "fullstack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " de par les nombreux projets frontend que j'ai pu r\u00E9aliser en parall\u00E8le. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " J'ai l'habitude de travailler avec les m\u00E9thodes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Agiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " que j'affectionne quand il s'agit de conduire un projet (Scrum, Kanban..). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.numberOfYearsFromDateToCurrentDate(ctx.experience), " ans");
    } }, directives: [primeng_panel__WEBPACK_IMPORTED_MODULE_1__.Panel], styles: [".summary[_ngcontent-%COMP%] {\n  text-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6InN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VtbWFyeSB7XG4gIHRleHQtYWxpZ246IHN0YXJ0XG59XG4iXX0= */"] });


/***/ }),

/***/ 8260:
/*!**************************************************!*\
  !*** ./src/app/features/resume/resume.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeModule": () => (/* binding */ ResumeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _features_resume_components_resume_resume_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @features/resume/components/resume/resume.component */ 4692);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/panel */ 6572);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/progressbar */ 9858);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/timeline */ 8554);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ 6480);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-markdown */ 3981);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tag */ 5277);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ 3489);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/progressspinner */ 120);
/* harmony import */ var _features_resume_components_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/resume/components/hobbies/hobbies.component */ 7924);
/* harmony import */ var _features_resume_components_summary_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/resume/components/summary/summary.component */ 996);
/* harmony import */ var _features_resume_components_skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/resume/components/skills/skills.component */ 1430);
/* harmony import */ var _features_resume_components_missions_missions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/resume/components/missions/missions.component */ 6032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
















class ResumeModule {
}
ResumeModule.ɵfac = function ResumeModule_Factory(t) { return new (t || ResumeModule)(); };
ResumeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ResumeModule });
ResumeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            primeng_card__WEBPACK_IMPORTED_MODULE_7__.CardModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.DialogModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_10__.MarkdownModule,
            primeng_panel__WEBPACK_IMPORTED_MODULE_11__.PanelModule,
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__.ProgressBarModule,
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__.ProgressSpinnerModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            primeng_tag__WEBPACK_IMPORTED_MODULE_14__.TagModule,
            primeng_timeline__WEBPACK_IMPORTED_MODULE_15__.TimelineModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ResumeModule, { declarations: [_features_resume_components_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_2__.HobbiesComponent, _features_resume_components_missions_missions_component__WEBPACK_IMPORTED_MODULE_5__.MissionsComponent, _features_resume_components_resume_resume_component__WEBPACK_IMPORTED_MODULE_0__.ResumeComponent, _features_resume_components_skills_skills_component__WEBPACK_IMPORTED_MODULE_4__.SkillsComponent, _features_resume_components_summary_summary_component__WEBPACK_IMPORTED_MODULE_3__.SummaryComponent], imports: [primeng_card__WEBPACK_IMPORTED_MODULE_7__.CardModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.DialogModule,
        ngx_markdown__WEBPACK_IMPORTED_MODULE_10__.MarkdownModule,
        primeng_panel__WEBPACK_IMPORTED_MODULE_11__.PanelModule,
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_12__.ProgressBarModule,
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__.ProgressSpinnerModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        primeng_tag__WEBPACK_IMPORTED_MODULE_14__.TagModule,
        primeng_timeline__WEBPACK_IMPORTED_MODULE_15__.TimelineModule], exports: [_features_resume_components_resume_resume_component__WEBPACK_IMPORTED_MODULE_0__.ResumeComponent] }); })();


/***/ }),

/***/ 4324:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/slide-button/slide-button.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideButtonComponent": () => (/* binding */ SlideButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SlideButtonComponent {
}
SlideButtonComponent.ɵfac = function SlideButtonComponent_Factory(t) { return new (t || SlideButtonComponent)(); };
SlideButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlideButtonComponent, selectors: [["portfolio-slide-button"]], decls: 5, vars: 0, consts: [[1, "learn-more"], ["aria-hidden", "true", 1, "circle"], [1, "icon", "arrow"], [1, "button-text"]], template: function SlideButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "En savoir plus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["button[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  text-decoration: none;\n  background: var(--white);\n  padding: 0;\n  font-size: 14px;\n  outline: none;\n  border: none;\n  border-radius: 1.625rem;\n}\nbutton.learn-more[_ngcontent-%COMP%] {\n  width: 10rem;\n  height: auto;\n}\nbutton.learn-more[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: relative;\n  display: block;\n  margin: 0;\n  width: 2rem;\n  height: 2rem;\n  background: var(--bluegray-500);\n  border-radius: 1.625rem;\n}\nbutton.learn-more[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  background: var(--white);\n}\nbutton.learn-more[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .icon.arrow[_ngcontent-%COMP%] {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  left: 0.125rem;\n  width: 1.125rem;\n  height: 0.125rem;\n  background: none;\n}\nbutton.learn-more[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .icon.arrow[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  top: -0.25rem;\n  right: 0.0625rem;\n  width: 0.625rem;\n  height: 0.625rem;\n  border-top: 0.125rem solid var(--white);\n  border-right: 0.125rem solid var(--white);\n  transform: rotate(45deg);\n}\nbutton.learn-more[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%] {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.75rem 0;\n  margin: 0 0 0 1.85rem;\n  color: var(--bluegray-500);\n  line-height: 0.6;\n  text-align: center;\n}\nbutton[_ngcontent-%COMP%]:hover   .circle[_ngcontent-%COMP%] {\n  width: 100%;\n}\nbutton[_ngcontent-%COMP%]:hover   .circle[_ngcontent-%COMP%]   .icon.arrow[_ngcontent-%COMP%] {\n  background: var(--white);\n  transform: translate(1rem, 0);\n}\nbutton[_ngcontent-%COMP%]:hover   .button-text[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUhGO0FBS0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUhKO0FBS0k7RUFuQkYscURBQUE7RUFxQkksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtBQUhOO0FBS007RUE3QkoscURBQUE7RUErQk0sa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQUhSO0FBS1E7RUFyQ04scURBQUE7RUF1Q1EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSFY7QUFLVTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSx3QkFBQTtBQUhaO0FBU0k7RUEzREYscURBQUE7RUE2REksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVBOO0FBWUk7RUFDRSxXQUFBO0FBVk47QUFhUTtFQUNFLHdCQUFBO0VBQ0EsNkJBQUE7QUFYVjtBQWdCSTtFQUNFLG1CQUFBO0FBZE4iLCJmaWxlIjoic2xpZGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5OiBhbGwsICRkdXJhdGlvbjogMC40NXMsICRlYXNlOiBjdWJpYy1iZXppZXIoMC42NSwwLC4wNzYsMSkpIHtcbiAgdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbiAkZWFzZTtcbn1cblxuYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxLjYyNXJlbTtcblxuICAmLmxlYXJuLW1vcmUge1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAuY2lyY2xlIHtcbiAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjQ1cywgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIC4wNzYsIDEpKTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgd2lkdGg6IDJyZW07XG4gICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlZ3JheS01MDApO1xuICAgICAgYm9yZGVyLXJhZGl1czogMS42MjVyZW07XG5cbiAgICAgIC5pY29uIHtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNDVzLCBjdWJpYy1iZXppZXIoMC42NSwgMCwgLjA3NiwgMSkpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblxuICAgICAgICAmLmFycm93IHtcbiAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40NXMsIGN1YmljLWJlemllcigwLjY1LCAwLCAuMDc2LCAxKSk7XG4gICAgICAgICAgbGVmdDogMC4xMjVyZW07XG4gICAgICAgICAgd2lkdGg6IDEuMTI1cmVtO1xuICAgICAgICAgIGhlaWdodDogMC4xMjVyZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcblxuICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHRvcDogLTAuMjVyZW07XG4gICAgICAgICAgICByaWdodDogMC4wNjI1cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDAuNjI1cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAwLjYyNXJlbTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDAuMTI1cmVtIHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMC4xMjVyZW0gc29saWQgdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5idXR0b24tdGV4dCB7XG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40NXMsIGN1YmljLWJlemllcigwLjY1LCAwLCAuMDc2LCAxKSk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDA7XG4gICAgICBtYXJnaW46IDAgMCAwIDEuODVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tYmx1ZWdyYXktNTAwKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAwLjY7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgLmNpcmNsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLmljb24ge1xuICAgICAgICAmLmFycm93IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXJlbSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnV0dG9uLXRleHQge1xuICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/slide-button/slide-button.component */ 4324);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_0__.SlideButtonComponent], imports: [primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_0__.SlideButtonComponent] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 8594:
/*!*****************************************!*\
  !*** ./src/assets/resume/missions.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"client":"Air France KLM (Inetum) - Dev Portal","startDate":"2019-01-01","endDate":null},{"client":"Orange (Inetum) - SPDP & O2H","startDate":"2020-12-01","endDate":null},{"client":"MAIF (Inetum) - IRSA","startDate":"2020-07-01","endDate":"2020-12-01"},{"client":"Air France KLM (Inetum) - CCAPI","startDate":"2016-07-01","endDate":"2019-01-01"},{"client":"Airbus (GFI) - GAS","startDate":"2016-01-01","endDate":"2016-07-01"},{"client":"GFI - Gimaweb","startDate":"2015-04-01","endDate":"2016-01-01"},{"client":"Mairie de Toulouse (GFI) - Portail interne","startDate":"2015-01-01","endDate":"2015-04-01"},{"client":"Airbus (GFI) - Flight Ops Document Manager","startDate":"2013-04-01","endDate":"2015-01-01"}]');

/***/ }),

/***/ 2243:
/*!***************************************!*\
  !*** ./src/assets/resume/skills.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"HTML","rate":80},{"name":"Java","rate":90},{"name":"Spring Boot","rate":85},{"name":"Spring MVC","rate":85},{"name":"Spring Data","rate":75},{"name":"Spring Security","rate":70},{"name":"CSS","rate":75},{"name":"Sass","rate":75},{"name":"Javascript","rate":80},{"name":"SQL","rate":70},{"name":"TypeScript","rate":80},{"name":"Angular","rate":85},{"name":"NestJS","rate":70},{"name":"ReactJS","rate":65},{"name":"Hibernate","rate":80},{"name":"Typeorm","rate":70},{"name":"Kotlin","rate":70}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map