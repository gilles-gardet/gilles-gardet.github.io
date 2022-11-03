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



const routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @features/resume/components/resume/resume.component */ 4692)).then((module) => module.ResumeComponent),
    },
    {
        path: '**',
        loadComponent: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @features/resume/components/resume/resume.component */ 4692)).then((module) => module.ResumeComponent),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
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
/* harmony import */ var _features_contact_components_general_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @features/contact/components/general/contact.component */ 2629);
/* harmony import */ var _features_resume_components_resume_resume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @features/resume/components/resume/resume.component */ 4692);
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/scrolltop */ 2071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class AppComponent {
    /**
     * Listen for the page scroll in order to display a reading indicator
     */
    onPageScroll() {
        const scrollTracker = document.getElementById('scroll-tracker');
        let scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
        let progressWidth = (scrollDistance / (document.body.scrollHeight - document.documentElement.clientHeight)) * 100;
        scrollTracker.style.width = progressWidth + '%';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["cv-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) { return ctx.onPageScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]], decls: 6, vars: 0, consts: [["id", "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "cv-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "cv-resume")(5, "p-scrollTop");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } }, dependencies: [_features_contact_components_general_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent, _features_resume_components_resume_resume_component__WEBPACK_IMPORTED_MODULE_1__.ResumeComponent, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_3__.ScrollTopModule, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_3__.ScrollTop], styles: [".p-card-title,\n.p-card-subtitle {\n  text-align: center;\n}\n\n.p-progressbar {\n  --tw-bg-opacity: 1;\n  background-color: hsl(210 14% 89% / var(--tw-bg-opacity));\n}\n\n.dark .p-progressbar {\n  --tw-bg-opacity: 1;\n  background-color: hsl(210 9% 31% / var(--tw-bg-opacity));\n}\n\n.p-progressbar {\n  height: 0.5rem;\n  border-radius: 5px;\n}\n\n.p-progressbar .p-progressbar-value {\n  --tw-bg-opacity: 1;\n  background-color: hsl(210 9% 31% / var(--tw-bg-opacity));\n}\n\n.dark .p-progressbar .p-progressbar-value {\n  --tw-bg-opacity: 1;\n  background-color: hsl(210 14% 89% / var(--tw-bg-opacity));\n}\n\n.p-tag {\n  --tw-bg-opacity: 1;\n  background-color: hsl(210 9% 31% / var(--tw-bg-opacity));\n}\n\n.dark .p-tag {\n  --tw-bg-opacity: 1;\n  background-color: hsl(210 14% 89% / var(--tw-bg-opacity));\n}\n\n.p-tag {\n  --tw-text-opacity: 1;\n  color: hsl(240 4% 90% / var(--tw-text-opacity));\n}\n\n.dark .p-tag {\n  --tw-text-opacity: 1;\n  color: hsl(210 9% 31% / var(--tw-text-opacity));\n}\n\np-scrolltop > button.p-scrolltop {\n  z-index: 1004;\n}\n\np-panel .p-panel-header {\n  display: grid;\n  justify-content: center;\n}\n\np-panel .p-panel-header,\np-panel .p-panel-content {\n  --tw-bg-opacity: 1;\n  background-color: hsl(210 17% 98% / var(--tw-bg-opacity));\n}\n\n.dark p-panel .p-panel-header,.dark \np-panel .p-panel-content {\n  --tw-bg-opacity: 1;\n  background-color: hsl(217 17% 20% / var(--tw-bg-opacity));\n}\n\np-panel .p-panel-header,\np-panel .p-panel-content {\n  --tw-text-opacity: 1;\n  color: hsl(210 9% 31% / var(--tw-text-opacity));\n}\n\n.dark p-panel .p-panel-header,.dark \np-panel .p-panel-content {\n  --tw-text-opacity: 1;\n  color: hsl(240 4% 90% / var(--tw-text-opacity));\n}\n\np-panel .p-panel-header,\np-panel .p-panel-content {\n  --tw-border-opacity: 1;\n  border-color: hsl(210 14% 89% / var(--tw-border-opacity));\n}\n\n.dark p-panel .p-panel-header,.dark \np-panel .p-panel-content {\n  --tw-border-opacity: 1;\n  border-color: hsl(213 19% 30% / var(--tw-border-opacity));\n}\n\np-card > div.p-card {\n  --tw-bg-opacity: 1;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity));\n}\n\n.dark p-card > div.p-card {\n  --tw-bg-opacity: 1;\n  background-color: hsl(217 17% 20% / var(--tw-bg-opacity));\n}\n\np-card > div.p-card {\n  --tw-text-opacity: 1;\n  color: hsl(210 9% 31% / var(--tw-text-opacity));\n}\n\n.dark p-card > div.p-card {\n  --tw-text-opacity: 1;\n  color: hsl(240 4% 90% / var(--tw-text-opacity));\n}\n\np-card > div.p-card {\n  position: sticky;\n  top: 2rem;\n}\n\n.p-menu.p-menu-overlay {\n  --tw-bg-opacity: 1;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity));\n}\n\n.dark .p-menu.p-menu-overlay {\n  --tw-bg-opacity: 1;\n  background-color: hsl(217 17% 20% / var(--tw-bg-opacity));\n}\n\n.p-menu .p-submenu-header {\n  display: flex;\n  justify-content: center;\n  --tw-bg-opacity: 1;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity));\n}\n\n.dark .p-menu .p-submenu-header {\n  --tw-bg-opacity: 1;\n  background-color: hsl(217 17% 20% / var(--tw-bg-opacity));\n}\n\n.p-menu .p-menuitem-link .p-menuitem-text,\n.p-menu .p-submenu-header {\n  --tw-text-opacity: 1;\n  color: hsl(210 9% 31% / var(--tw-text-opacity));\n}\n\n.dark .p-menu .p-menuitem-link .p-menuitem-text,.dark \n.p-menu .p-submenu-header {\n  --tw-text-opacity: 1;\n  color: hsl(240 4% 90% / var(--tw-text-opacity));\n}\n\n.p-menu .p-menuitem-icon {\n  transition: color 0s, background-color 0s;\n}\n\n.p-menu .p-menuitem-link:not(.p-disabled):hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(214 16% 93% / var(--tw-bg-opacity));\n}\n\n.dark .p-menu .p-menuitem-link:not(.p-disabled):hover {\n  --tw-bg-opacity: 1;\n  background-color: hsl(215 15% 23% / var(--tw-bg-opacity));\n}\n\n.p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text,\n.p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n  transition: color 0s, background-color 0s;\n  --tw-text-opacity: 1;\n  color: hsl(210 9% 31% / var(--tw-text-opacity));\n}\n\n.dark .p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text,.dark \n.p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n  --tw-text-opacity: 1;\n  color: hsl(240 4% 90% / var(--tw-text-opacity));\n}\n\nbutton.p-button {\n  border: 1px solid var(--button);\n  --tw-text-opacity: 1;\n  color: hsl(210 9% 31% / var(--tw-text-opacity));\n}\n\n.dark button.p-button {\n  --tw-text-opacity: 1;\n  color: hsl(212 10% 70% / var(--tw-text-opacity));\n}\n\nbutton.p-button.p-button.p-button-text, button.p-button.p-button.p-button-text:enabled:hover, button.p-button.p-button.p-button-text:enabled:active {\n  --tw-text-opacity: 1;\n  color: hsl(210 9% 31% / var(--tw-text-opacity));\n}\n\n.dark button.p-button.p-button.p-button-text,.dark  button.p-button.p-button.p-button-text:enabled:hover,.dark  button.p-button.p-button.p-button-text:enabled:active {\n  --tw-text-opacity: 1;\n  color: hsl(212 10% 70% / var(--tw-text-opacity));\n}\n\nbutton.p-button.p-button.p-button-text:enabled:hover, button.p-button.p-button.p-button-text:enabled:active {\n  background: rgba(75, 85, 94, 0.04);\n}\n\nbutton.p-button.p-button:focus, button.p-button.p-button.p-button-text:enabled:active {\n  box-shadow: 0 0 0 0.2rem #aab1b9;\n}\n\np-chip[label=\"gilles.gardet@gmail.com\"] {\n  --params: 0.8s ease;\n}\n\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip {\n  position: relative;\n  overflow: hidden;\n  transition: color var(--params), background-color var(--params);\n  z-index: 0;\n  --tw-bg-opacity: 1;\n  background-color: hsl(207 9% 31% / var(--tw-bg-opacity));\n}\n\n.dark p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip {\n  --tw-bg-opacity: 1;\n  background-color: hsl(216 14% 89% / var(--tw-bg-opacity));\n}\n\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip {\n  --tw-text-opacity: 1;\n  color: hsl(240 4% 90% / var(--tw-text-opacity));\n}\n\n.dark p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip {\n  --tw-text-opacity: 1;\n  color: hsl(210 9% 31% / var(--tw-text-opacity));\n}\n\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  --tw-bg-opacity: 1;\n  background-color: hsl(216 14% 89% / var(--tw-bg-opacity));\n}\n\n.dark p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip::before {\n  --tw-bg-opacity: 1;\n  background-color: hsl(207 9% 31% / var(--tw-bg-opacity));\n}\n\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip::before {\n  transform: translateX(100%);\n  transition: transform var(--params), opacity var(--params);\n}\n\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:hover {\n  cursor: pointer;\n  --tw-text-opacity: 1;\n  color: hsl(210 9% 31% / var(--tw-text-opacity));\n}\n\n.dark p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:hover {\n  --tw-text-opacity: 1;\n  color: hsl(240 4% 90% / var(--tw-text-opacity));\n}\n\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:hover {\n  background-color: transparent;\n}\n\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:hover::before {\n  transform: translateX(0);\n  opacity: 1;\n}\n\n.p-timeline-event-content,\n.p-timeline-event-opposite {\n  line-height: 1;\n}\n\n.p-button.p-button-secondary.p-button-outlined {\n  color: var(--dark);\n}\n\n.mission {\n  box-shadow: none;\n}\n\n.mission__animation-left {\n  opacity: 0;\n  transform: translateX(-40px);\n  animation: fadeIn 3s forwards;\n  -webkit-animation: fadeIn 3s forwards;\n  -moz-animation: fadeIn 3s forwards;\n  -o-animation: fadeIn 3s forwards;\n  -ms-animation: fadeIn 3s forwards;\n}\n\n.mission__animation-right {\n  opacity: 0;\n  transform: translateX(40px);\n  animation: fadeIn 3s forwards;\n  -webkit-animation: fadeIn 3s forwards;\n  -moz-animation: fadeIn 3s forwards;\n  -o-animation: fadeIn 3s forwards;\n  -ms-animation: fadeIn 3s forwards;\n}\n\n.mission__button {\n  display: flex;\n  justify-content: center;\n}\n\n.p-timeline-event-content > p-card > .mission > .p-card-body > .p-card-content {\n  text-align: left;\n}\n\n.p-timeline .p-timeline-event-connector {\n  --tw-bg-opacity: 1;\n  background-color: hsl(216 14% 89% / var(--tw-bg-opacity));\n}\n\n.dark .p-timeline .p-timeline-event-connector {\n  --tw-bg-opacity: 1;\n  background-color: hsl(213 19% 30% / var(--tw-bg-opacity));\n}\n\n.p-card-content {\n  display: grid;\n  gap: 1rem;\n}\n\n.p-dialog .p-dialog-header,\n.p-dialog .p-dialog-content {\n  --tw-bg-opacity: 1;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity));\n}\n\n.dark .p-dialog .p-dialog-header,.dark \n.p-dialog .p-dialog-content {\n  --tw-bg-opacity: 1;\n  background-color: hsl(217 17% 20% / var(--tw-bg-opacity));\n}\n\n.p-dialog .p-dialog-header,\n.p-dialog .p-dialog-content {\n  --tw-text-opacity: 1;\n  color: hsl(210 9% 31% / var(--tw-text-opacity));\n}\n\n.dark .p-dialog .p-dialog-header,.dark \n.p-dialog .p-dialog-content {\n  --tw-text-opacity: 1;\n  color: hsl(240 4% 90% / var(--tw-text-opacity));\n}\n\n.p-dialog .p-dialog-header {\n  display: grid;\n}\n\n.p-dialog .p-dialog-header .p-dialog-header-icons {\n  grid-area: 1/3/1/4;\n  align-self: flex-start;\n}\n\n.p-dialog .p-dialog-content {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  display: flex;\n  justify-content: center;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n.p-dialog .p-dialog-content .p-progress-spinner-circle {\n  animation: progress-spinner-dash 1.5s ease-in-out infinite, progress-spinner-color 6s ease-in-out infinite;\n}\n\n@keyframes progress-spinner-color {\n  100%, 0%, 40%, 66%, 80%, 90% {\n    stroke: hsl(210, 9%, 31%);\n  }\n  .dark 100%,.dark  0%,.dark  40%,.dark  66%,.dark  80%,.dark  90% {\n    stroke: hsl(240, 4%, 90%);\n  }\n}\n\n@keyframes progress-spinner-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n.p-dialog .p-dialog-content-scroll {\n  overflow-y: auto;\n  animation: hideScroll 800ms backwards;\n}\n\n.p-scrolltop.p-link {\n  --tw-bg-opacity: 1;\n  background-color: hsl(0 0% 30% / var(--tw-bg-opacity));\n}\n\n.dark .p-scrolltop.p-link {\n  --tw-bg-opacity: 1;\n  background-color: hsl(210 14% 89% / var(--tw-bg-opacity));\n}\n\n.p-scrolltop .p-scrolltop-icon {\n  --tw-text-opacity: 1;\n  color: hsl(240 4% 90% / var(--tw-text-opacity));\n}\n\n.dark .p-scrolltop .p-scrolltop-icon {\n  --tw-text-opacity: 1;\n  color: hsl(210 9% 31% / var(--tw-text-opacity));\n}\n\n.p-link:focus {\n  box-shadow: 0 0 0 0.2rem #aab1b9;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n@media screen and (max-width: 960px) {\n  .customized-timeline .p-timeline-event:nth-child(even) {\n    flex-direction: row !important;\n  }\n  .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content {\n    text-align: left !important;\n  }\n  .customized-timeline .p-timeline-event-opposite {\n    display: none;\n  }\n  .customized-timeline .p-card {\n    margin-top: 1rem;\n  }\n}\n\n:not(pre) > pre {\n  --tw-bg-opacity: 1;\n  background-color: hsl(74 7% 15% / var(--tw-bg-opacity));\n}\n\n.dark :not(pre) > pre {\n  --tw-bg-opacity: 1;\n  background-color: hsl(60 28% 96% / var(--tw-bg-opacity));\n}\n\npre {\n  --tw-text-opacity: 1;\n  color: hsl(60 28% 96% / var(--tw-text-opacity));\n}\n\n.dark pre {\n  --tw-text-opacity: 1;\n  color: hsl(74 7% 15% / var(--tw-text-opacity));\n}\n\npre {\n  padding: 0.3rem;\n  margin: 0.5em 0;\n  border-radius: 0.3em;\n  background: none;\n  font-family: Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;\n  font-size: 1em;\n  text-align: left;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  hyphens: none;\n  text-shadow: none;\n}\n\ncode[class*=language-] {\n  font-size: 0.7rem;\n  max-width: calc(100vw - 4rem);\n  display: grid;\n  grid-auto-columns: auto;\n  text-shadow: none;\n  white-space: normal;\n}\n\ncode {\n  --tw-bg-opacity: 1;\n  background-color: hsl(74 7% 15% / var(--tw-bg-opacity));\n}\n\n.dark code {\n  --tw-bg-opacity: 1;\n  background-color: hsl(60 28% 96% / var(--tw-bg-opacity));\n}\n\ncode {\n  --tw-text-opacity: 1;\n  color: hsl(60 28% 96% / var(--tw-text-opacity));\n}\n\n.dark code {\n  --tw-text-opacity: 1;\n  color: hsl(74 7% 15% / var(--tw-text-opacity));\n}\n\ncode {\n  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;\n  font-size: 0.7rem;\n  border-radius: 5px;\n  padding: 0.2rem;\n  text-shadow: none;\n}\n\n#container {\n  --tw-bg-opacity: 1;\n  background-color: hsl(0 0% 92% / var(--tw-bg-opacity));\n}\n\n.dark #container {\n  --tw-bg-opacity: 1;\n  background-color: hsl(214 18% 15% / var(--tw-bg-opacity));\n}\n\n#container {\n  min-height: 100vh;\n  display: grid;\n  grid-template: 1fr/18rem minmax(18rem, 65rem);\n  justify-content: center;\n}\n\n#container .welcome {\n  height: 100vh;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  scroll-snap-align: end;\n}\n\n#container .welcome__content h1 {\n  font-size: clamp(1rem, 3vw + 1rem, 4rem);\n  position: relative;\n  font-family: \"Source Code Pro\", monospace;\n  width: max-content;\n}\n\n#container .welcome__content h1::before, #container .welcome__content h1::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n#container .welcome__content h1::before {\n  background: var(--typewriter-bg);\n  animation: typewriter var(--typewriterSpeed) steps(var(--typewriterCharacters)) 1s forwards;\n}\n\n#container .welcome__content h1::after {\n  width: 0.125em;\n  background: var(--black);\n  animation: typewriter var(--typewriterSpeed) steps(var(--typewriterCharacters)) 1s forwards, blink 750ms steps(var(--typewriterCharacters)) infinite;\n}\n\n#container .welcome__content__subtitle {\n  color: var(--black);\n  margin: 5rem 0;\n  font-size: 2rem;\n  font-weight: 400;\n  opacity: 0;\n  transform: translateY(3rem);\n  animation: fadeInUp 2s ease calc(var(--typewriterSpeed) + 2s) forwards;\n}\n\n#container .welcome__content__goto {\n  opacity: 0;\n  animation: bounce 1.5s infinite calc(var(--typewriterSpeed) + 3s), visibility 1.5s forwards calc(var(--typewriterSpeed) + 3s);\n}\n\n#container .welcome__content__goto:hover {\n  cursor: pointer;\n}\n\n@keyframes typewriter {\n  to {\n    left: 100%;\n  }\n}\n\n@keyframes blink {\n  to {\n    background: transparent;\n  }\n}\n\n@keyframes visibility {\n  to {\n    opacity: 0.8;\n  }\n}\n\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-30px);\n  }\n  60% {\n    transform: translateY(-15px);\n  }\n}\n\n@keyframes fadeInUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n#container > aside {\n  padding: 2rem 0;\n  margin: 0 1rem;\n}\n\n#container > main {\n  scroll-snap-align: start;\n  display: flex;\n  padding: 2rem 1rem;\n}\n\n#container .scroll-wrapper {\n  width: 100%;\n  height: 0.2rem;\n  position: fixed;\n  inset: 0 0 auto;\n  z-index: 98;\n}\n\n#container .scroll-wrapper #scroll-tracker {\n  --tw-bg-opacity: 1;\n  background-color: hsl(180 0% 30% / var(--tw-bg-opacity));\n}\n\n.dark #container .scroll-wrapper #scroll-tracker {\n  --tw-bg-opacity: 1;\n  background-color: hsl(210 14% 89% / var(--tw-bg-opacity));\n}\n\n#container .scroll-wrapper #scroll-tracker {\n  position: fixed;\n  inset: 0 0 auto;\n  height: 0.2rem;\n  width: 0;\n  z-index: 99;\n}\n\n@media print, screen and (max-width: 960px) {\n  #container {\n    grid-template-columns: minmax(18rem, 65rem);\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3N0eWxlcy9vdmVycmlkZS9wcmltZW5nLnNjc3MiLCJhcHAuY29tcG9uZW50LnNjc3MiLCIuLi9zdHlsZXMvb3ZlcnJpZGUvbmd4LW1hcmtkb3duLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsa0JBQUE7QUNDRjs7QURHRTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFERjtFQUVFLGNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVJO0VBQUEsa0JBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEsa0JBQUE7RUFBQTtBQUFBOztBQUtGO0VBQUEsa0JBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEsa0JBQUE7RUFBQTtBQUFBOztBQUNBO0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUdGO0VBQ0UsYUFBQTtBQ0FGOztBRElFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDREo7O0FETUk7O0VBQUEsa0JBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFDQTs7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUNBOztFQUFBLHNCQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQSxzQkFBQTtFQUFBO0FBQUE7O0FBS0Y7RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBQ0E7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBRkY7RUFHRSxnQkFBQTtFQUNBLFNBQUE7QUNIRjs7QURRSTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFHRjtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQUEsdURBQUE7QUNMSjs7QURLSTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFLQTs7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUdGO0VBQ0UseUNBQUE7QUNQSjs7QURXSTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFDQTs7RUFFRSx5Q0FBQTtFQUNBLG9CQUFBO0VBQUEsK0NBQUE7QUNQTjs7QURPTTs7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBS047RUFDRSwrQkFBQTtFQUNBLG9CQUFBO0VBQUEsK0NBQUE7QUNURjs7QURTRTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFLRTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFHRjtFQUVFLGtDQUFBO0FDYko7O0FEZ0JFO0VBRUUsZ0NBQUE7QUNmSjs7QURtQkE7RUFDRSxtQkFBQTtBQ2hCRjs7QURrQkU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0RBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFBQSx3REFBQTtBQ2ZKOztBRGVJO0VBQUEsa0JBQUE7RUFBQTtBQUFBOztBQUNBO0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUFBLHlEQUFBO0FDZE47O0FEY007RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBUkY7RUFTRSwyQkFBQTtFQUNBLDBEQUFBO0FDaEJOOztBRG1CSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUFBLCtDQUFBO0FDaEJOOztBRGdCTTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFGRjtFQUdFLDZCQUFBO0FDakJOOztBRG1CTTtFQUNFLHdCQUFBO0VBQ0EsVUFBQTtBQ2pCUjs7QUR1QkE7O0VBRUUsY0FBQTtBQ3BCRjs7QUR1QkE7RUFDRSxrQkFBQTtBQ3BCRjs7QUR1QkE7RUFDRSxnQkFBQTtBQ3BCRjs7QURzQkU7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FDcEJKOztBRHVCRTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7QUNyQko7O0FEd0JFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDdEJKOztBRDBCQTtFQUNFLGdCQUFBO0FDdkJGOztBRDJCRTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFHRjtFQUNFLGFBQUE7RUFDQSxTQUFBO0FDdkJGOztBRDZCSTs7RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBQUE7O0VBQUEsa0JBQUE7RUFBQTtBQUFBOztBQUNBOztFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBR0Y7RUFDRSxhQUFBO0FDekJKOztBRDJCSTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUN6Qk47O0FENkJFO0VBQ0UsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUMzQko7O0FENkJJO0VBQ0UsMEdBQUE7QUMzQk47O0FEOEJJO0VBT0k7SUFBQTtFQUFBO0VBQUE7SUFBQTtFQUFBO0FDaENSOztBRG9DSTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQ2xDTjtFRG9DSTtJQUNFLHlCQUFBO0lBQ0Esd0JBQUE7RUNsQ047RURvQ0k7SUFDRSx5QkFBQTtJQUNBLHlCQUFBO0VDbENOO0FBQ0Y7O0FEc0NFO0VBQ0UsZ0JBQUE7RUFDQSxxQ0FBQTtBQ3BDSjs7QUQwQ0k7RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBSUo7RUFDRSxnQ0FBQTtBQ3hDRjs7QUQyQ0E7RUFDRTtJQUNFLFVBQUE7RUN4Q0Y7RUQwQ0E7SUFDRSxVQUFBO0VDeENGO0VEMENBO0lBQ0Usd0JBQUE7RUN4Q0Y7QUFDRjs7QUQyRkE7RUFFSTtJQUNFLDhCQUFBO0VDOUNKO0VEZ0RJO0lBQ0UsMkJBQUE7RUM5Q047RURrREU7SUFDRSxhQUFBO0VDaERKO0VEbURFO0lBQ0UsZ0JBQUE7RUNqREo7QUFDRjs7QUM3UkU7RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBREY7RUFFRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzRUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FEZ1NGOztBQzdSQTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FEZ1NGOztBQzVSRTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFDQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFGRjtFQUdFLCtGQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRGdTRjs7QUFwVUU7RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBREY7RUFFRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtFQUNBLHVCQUFBO0FBd1VGOztBQXRVRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQXdVSjs7QUFyVU07RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtBQXVVUjs7QUFyVVE7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBc1VWOztBQW5VUTtFQUNFLGdDQUFBO0VBQ0EsMkZBQUE7QUFxVVY7O0FBbFVRO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0pBQUE7QUFvVVY7O0FBL1RNO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0VBQUE7QUFpVVI7O0FBOVRNO0VBQ0UsVUFBQTtFQUNBLDZIQUFBO0FBZ1VSOztBQTdUUTtFQUNFLGVBQUE7QUErVFY7O0FBMVRJO0VBQ0U7SUFDRSxVQUFBO0VBNFROO0FBQ0Y7O0FBelRJO0VBQ0U7SUFDRSx1QkFBQTtFQTJUTjtBQUNGOztBQXhUSTtFQUNFO0lBQ0UsWUFBQTtFQTBUTjtBQUNGOztBQXZUSTtFQUNFO0lBS0Usd0JBQUE7RUFxVE47RUFuVEk7SUFDRSw0QkFBQTtFQXFUTjtFQW5USTtJQUNFLDRCQUFBO0VBcVROO0FBQ0Y7O0FBbFRJO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFvVE47QUFDRjs7QUFoVEU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQWtUSjs7QUEvU0U7RUFDRSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQWlUSjs7QUE5U0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQWdUSjs7QUE3U007RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBREY7RUFFRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQWdUTjs7QUEzU0E7RUFDRTtJQUNFLDJDQUFBO0lBQ0EsZUFBQTtFQThTRjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wLWNhcmQtdGl0bGUsXG4ucC1jYXJkLXN1YnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucC1wcm9ncmVzc2JhciB7XG4gIEBhcHBseSBiZy1wcm9ncmVzcy1iYXItYmcgZGFyazpiZy1kYXJrLXByb2dyZXNzLWJhci1iZztcbiAgaGVpZ2h0OiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAucC1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gICAgQGFwcGx5IGJnLXByb2dyZXNzLWJhciBkYXJrOmJnLWRhcmstcHJvZ3Jlc3MtYmFyO1xuICB9XG59XG5cbi5wLXRhZyB7XG4gIEBhcHBseSBiZy1wcm9ncmVzcy1iYXIgZGFyazpiZy1kYXJrLXByb2dyZXNzLWJhcjtcbiAgQGFwcGx5IHRleHQtZGFyay10ZXh0LWNvbG9yIGRhcms6dGV4dC10ZXh0LWNvbG9yO1xufVxuXG5wLXNjcm9sbHRvcCA+IGJ1dHRvbi5wLXNjcm9sbHRvcCB7XG4gIHotaW5kZXg6IDEwMDQ7XG59XG5cbnAtcGFuZWwge1xuICAucC1wYW5lbC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAucC1wYW5lbC1oZWFkZXIsXG4gIC5wLXBhbmVsLWNvbnRlbnQge1xuICAgIEBhcHBseSBiZy1wYW5lbC10aXRsZS1iZyBkYXJrOmJnLWRhcmstcGFuZWwtdGl0bGUtYmc7XG4gICAgQGFwcGx5IHRleHQtdGV4dC1jb2xvciBkYXJrOnRleHQtZGFyay10ZXh0LWNvbG9yO1xuICAgIEBhcHBseSBib3JkZXItcGFuZWwtYm9yZGVyIGRhcms6Ym9yZGVyLWRhcmstcGFuZWwtYm9yZGVyO1xuICB9XG59XG5cbnAtY2FyZCA+IGRpdi5wLWNhcmQge1xuICBAYXBwbHkgYmctY2FyZC1iZyBkYXJrOmJnLWRhcmstY2FyZC1iZztcbiAgQGFwcGx5IHRleHQtdGV4dC1jb2xvciBkYXJrOnRleHQtZGFyay10ZXh0LWNvbG9yO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDJyZW07XG59XG5cbi5wLW1lbnUge1xuICAmLnAtbWVudS1vdmVybGF5IHtcbiAgICBAYXBwbHkgYmctbWVudS1iZyBkYXJrOmJnLWRhcmstbWVudS1iZztcbiAgfVxuXG4gIC5wLXN1Ym1lbnUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIEBhcHBseSBiZy1tZW51LWJnIGRhcms6YmctZGFyay1tZW51LWJnO1xuICB9XG5cbiAgLnAtbWVudWl0ZW0tbGluayAucC1tZW51aXRlbS10ZXh0LFxuICAucC1zdWJtZW51LWhlYWRlciB7XG4gICAgQGFwcGx5IHRleHQtdGV4dC1jb2xvciBkYXJrOnRleHQtZGFyay10ZXh0LWNvbG9yO1xuICB9XG5cbiAgLnAtbWVudWl0ZW0taWNvbiB7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMHMsIGJhY2tncm91bmQtY29sb3IgMHM7XG4gIH1cblxuICAucC1tZW51aXRlbS1saW5rOm5vdCgucC1kaXNhYmxlZCk6aG92ZXIge1xuICAgIEBhcHBseSBiZy1tZW51LWl0ZW0taG92ZXIgZGFyazpiZy1kYXJrLW1lbnUtaXRlbS1ob3ZlcjtcbiAgICAucC1tZW51aXRlbS10ZXh0LFxuICAgIC5wLW1lbnVpdGVtLWljb24ge1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMHMsIGJhY2tncm91bmQtY29sb3IgMHM7XG4gICAgICBAYXBwbHkgdGV4dC10ZXh0LWNvbG9yIGRhcms6dGV4dC1kYXJrLXRleHQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cbmJ1dHRvbi5wLWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbik7XG4gIEBhcHBseSB0ZXh0LW1lbnUtYnV0dG9uIGRhcms6dGV4dC1kYXJrLW1lbnUtYnV0dG9uO1xuXG4gICYucC1idXR0b24ucC1idXR0b24tdGV4dCxcbiAgJi5wLWJ1dHRvbi5wLWJ1dHRvbi10ZXh0OmVuYWJsZWQ6aG92ZXIsXG4gICYucC1idXR0b24ucC1idXR0b24tdGV4dDplbmFibGVkOmFjdGl2ZSB7XG4gICAgQGFwcGx5IHRleHQtbWVudS1idXR0b24gZGFyazp0ZXh0LWRhcmstbWVudS1idXR0b247XG4gIH1cblxuICAmLnAtYnV0dG9uLnAtYnV0dG9uLXRleHQ6ZW5hYmxlZDpob3ZlcixcbiAgJi5wLWJ1dHRvbi5wLWJ1dHRvbi10ZXh0OmVuYWJsZWQ6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDc1LCA4NSwgOTQsIDAuMDQpO1xuICB9XG5cbiAgJi5wLWJ1dHRvbjpmb2N1cyxcbiAgJi5wLWJ1dHRvbi5wLWJ1dHRvbi10ZXh0OmVuYWJsZWQ6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gI2FhYjFiOTtcbiAgfVxufVxuXG5wLWNoaXBbbGFiZWw9J2dpbGxlcy5nYXJkZXRAZ21haWwuY29tJ10ge1xuICAtLXBhcmFtczogMC44cyBlYXNlO1xuXG4gIC5wLWNoaXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIHZhcigtLXBhcmFtcyksIGJhY2tncm91bmQtY29sb3IgdmFyKC0tcGFyYW1zKTtcbiAgICB6LWluZGV4OiAwO1xuICAgIEBhcHBseSBiZy1jaGlwLWJnIGRhcms6YmctZGFyay1jaGlwLWJnO1xuICAgIEBhcHBseSB0ZXh0LWRhcmstdGV4dC1jb2xvciBkYXJrOnRleHQtdGV4dC1jb2xvcjtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgQGFwcGx5IGJnLWRhcmstY2hpcC1iZyBkYXJrOmJnLWNoaXAtYmc7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tcGFyYW1zKSwgb3BhY2l0eSB2YXIoLS1wYXJhbXMpO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgQGFwcGx5IHRleHQtdGV4dC1jb2xvciBkYXJrOnRleHQtZGFyay10ZXh0LWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnAtdGltZWxpbmUtZXZlbnQtY29udGVudCxcbi5wLXRpbWVsaW5lLWV2ZW50LW9wcG9zaXRlIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5wLWJ1dHRvbi5wLWJ1dHRvbi1zZWNvbmRhcnkucC1idXR0b24tb3V0bGluZWQge1xuICBjb2xvcjogdmFyKC0tZGFyayk7XG59XG5cbi5taXNzaW9uIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcblxuICAmX19hbmltYXRpb24tbGVmdCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwcHgpO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgLW1vei1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAtby1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAtbXMtYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gIH1cblxuICAmX19hbmltYXRpb24tcmlnaHQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQwcHgpO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgLW1vei1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAtby1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAtbXMtYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gIH1cblxuICAmX19idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLnAtdGltZWxpbmUtZXZlbnQtY29udGVudCA+IHAtY2FyZCA+IC5taXNzaW9uID4gLnAtY2FyZC1ib2R5ID4gLnAtY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnAtdGltZWxpbmUgLnAtdGltZWxpbmUtZXZlbnQtY29ubmVjdG9yIHtcbiAgQGFwcGx5IGJnLXRpbWVsaW5lLWNvbm5lY3RvciBkYXJrOmJnLWRhcmstdGltZWxpbmUtY29ubmVjdG9yO1xufVxuXG4ucC1jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFyZW07XG59XG5cbi5wLWRpYWxvZyB7XG4gIC5wLWRpYWxvZy1oZWFkZXIsXG4gIC5wLWRpYWxvZy1jb250ZW50IHtcbiAgICBAYXBwbHkgYmctY2FyZC1iZyBkYXJrOmJnLWRhcmstY2FyZC1iZztcbiAgICBAYXBwbHkgdGV4dC10ZXh0LWNvbG9yIGRhcms6dGV4dC1kYXJrLXRleHQtY29sb3I7XG4gIH1cblxuICAucC1kaWFsb2ctaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgLnAtZGlhbG9nLWhlYWRlci1pY29ucyB7XG4gICAgICBncmlkLWFyZWE6IDEgLyAzIC8gMSAvIDQ7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgfVxuXG4gIC5wLWRpYWxvZy1jb250ZW50IHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG5cbiAgICAucC1wcm9ncmVzcy1zcGlubmVyLWNpcmNsZSB7XG4gICAgICBhbmltYXRpb246IHByb2dyZXNzLXNwaW5uZXItZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlLCBwcm9ncmVzcy1zcGlubmVyLWNvbG9yIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcHJvZ3Jlc3Mtc3Bpbm5lci1jb2xvciB7XG4gICAgICAxMDAlLFxuICAgICAgMCUsXG4gICAgICA0MCUsXG4gICAgICA2NiUsXG4gICAgICA4MCUsXG4gICAgICA5MCUge1xuICAgICAgICBAYXBwbHkgc3Ryb2tlLXRleHQtY29sb3IgZGFyazpzdHJva2UtZGFyay10ZXh0LWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcHJvZ3Jlc3Mtc3Bpbm5lci1kYXNoIHtcbiAgICAgIDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICAgIH1cbiAgICAgIDUwJSB7XG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzVweDtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wLWRpYWxvZy1jb250ZW50LXNjcm9sbCB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBhbmltYXRpb246IGhpZGVTY3JvbGwgODAwbXMgYmFja3dhcmRzO1xuICB9XG59XG5cbi5wLXNjcm9sbHRvcCB7XG4gICYucC1saW5rIHtcbiAgICBAYXBwbHkgYmctc2Nyb2xsLWJnIGRhcms6YmctZGFyay1zY3JvbGwtYmc7XG4gIH1cblxuICAucC1zY3JvbGx0b3AtaWNvbiB7XG4gICAgQGFwcGx5IHRleHQtZGFyay10ZXh0LWNvbG9yIGRhcms6dGV4dC10ZXh0LWNvbG9yO1xuICB9XG59XG5cbi5wLWxpbms6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gI2FhYjFiOTtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkAtby1rZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkAtbXMta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuY3VzdG9taXplZC10aW1lbGluZSB7XG4gICAgLnAtdGltZWxpbmUtZXZlbnQ6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcblxuICAgICAgLnAtdGltZWxpbmUtZXZlbnQtY29udGVudCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucC10aW1lbGluZS1ldmVudC1vcHBvc2l0ZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5wLWNhcmQge1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3NyYy9zdHlsZXMvb3ZlcnJpZGUvcHJpbWVuZyc7XG5AdXNlICdzcmMvc3R5bGVzL292ZXJyaWRlL25neC1tYXJrZG93bic7XG5cbiNjb250YWluZXIge1xuICBAYXBwbHkgYmctYm9keS1iZyBkYXJrOmJnLWRhcmstYm9keS1iZztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIDE4cmVtIG1pbm1heCgxOHJlbSwgNjVyZW0pO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAud2VsY29tZSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IGVuZDtcblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDN2dyArIDFyZW0sIDRyZW0pO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIENvZGUgUHJvJywgbW9ub3NwYWNlO1xuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG5cbiAgICAgICAgJjo6YmVmb3JlLFxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHlwZXdyaXRlci1iZyk7XG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBld3JpdGVyIHZhcigtLXR5cGV3cml0ZXJTcGVlZCkgc3RlcHModmFyKC0tdHlwZXdyaXRlckNoYXJhY3RlcnMpKSAxcyBmb3J3YXJkcztcbiAgICAgICAgfVxuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICB3aWR0aDogMC4xMjVlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjayk7XG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBld3JpdGVyIHZhcigtLXR5cGV3cml0ZXJTcGVlZCkgc3RlcHModmFyKC0tdHlwZXdyaXRlckNoYXJhY3RlcnMpKSAxcyBmb3J3YXJkcyxcbiAgICAgICAgICAgIGJsaW5rIDc1MG1zIHN0ZXBzKHZhcigtLXR5cGV3cml0ZXJDaGFyYWN0ZXJzKSkgaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJl9fc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgICAgICBtYXJnaW46IDVyZW0gMDtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3JlbSk7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluVXAgMnMgZWFzZSBjYWxjKHZhcigtLXR5cGV3cml0ZXJTcGVlZCkgKyAycykgZm9yd2FyZHM7XG4gICAgICB9XG5cbiAgICAgICZfX2dvdG8ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBhbmltYXRpb246IGJvdW5jZSAxLjVzIGluZmluaXRlIGNhbGModmFyKC0tdHlwZXdyaXRlclNwZWVkKSArIDNzKSxcbiAgICAgICAgICB2aXNpYmlsaXR5IDEuNXMgZm9yd2FyZHMgY2FsYyh2YXIoLS10eXBld3JpdGVyU3BlZWQpICsgM3MpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgdHlwZXdyaXRlciB7XG4gICAgICB0byB7XG4gICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBibGluayB7XG4gICAgICB0byB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgdmlzaWJpbGl0eSB7XG4gICAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGJvdW5jZSB7XG4gICAgICAwJSxcbiAgICAgIDIwJSxcbiAgICAgIDUwJSxcbiAgICAgIDgwJSxcbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG4gICAgICA0MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICAgICAgfVxuICAgICAgNjAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gID4gYXNpZGUge1xuICAgIHBhZGRpbmc6IDJyZW0gMDtcbiAgICBtYXJnaW46IDAgMXJlbTtcbiAgfVxuXG4gID4gbWFpbiB7XG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xuICB9XG5cbiAgLnNjcm9sbC13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDAuMnJlbTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaW5zZXQ6IDAgMCBhdXRvO1xuICAgIHotaW5kZXg6IDk4O1xuXG4gICAgI3Njcm9sbC10cmFja2VyIHtcbiAgICAgIEBhcHBseSBiZy1wcm9ncmVzcyBkYXJrOmJnLWRhcmstcHJvZ3Jlc3M7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBpbnNldDogMCAwIGF1dG87XG4gICAgICBoZWlnaHQ6IDAuMnJlbTtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgei1pbmRleDogOTk7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBwcmludCwgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAjY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxOHJlbSwgNjVyZW0pO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgfVxufVxuIiwiOm5vdChwcmUpID4gcHJlIHtcbiAgQGFwcGx5IGJnLXByZS1iZyBkYXJrOmJnLWRhcmstcHJlLWJnO1xufVxuXG5wcmUge1xuICBAYXBwbHkgdGV4dC1wcmUtdGV4dCBkYXJrOnRleHQtZGFyay1wcmUtdGV4dDtcbiAgcGFkZGluZzogMC4zcmVtO1xuICBtYXJnaW46IDAuNWVtIDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LWZhbWlseTogQ29uc29sYXMsIE1vbmFjbywgJ0FuZGFsZSBNb25vJywgJ1VidW50dSBNb25vJywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIC1tb3otdGFiLXNpemU6IDQ7XG4gIHRhYi1zaXplOiA0O1xuICAtd2Via2l0LWh5cGhlbnM6IG5vbmU7XG4gIGh5cGhlbnM6IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG5jb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10ge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNHJlbSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1jb2x1bW5zOiBhdXRvO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuY29kZSB7XG4gIEBhcHBseSBiZy1wcmUtYmcgZGFyazpiZy1kYXJrLXByZS1iZztcbiAgQGFwcGx5IHRleHQtcHJlLXRleHQgZGFyazp0ZXh0LWRhcmstcHJlLXRleHQ7XG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBTRiBNb25vLCBNZW5sbywgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIHRleHQtc2hhZG93OiBub25lO1xufSJdfQ== */"], encapsulation: 2, changeDetection: 0 });


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
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] }); })();


/***/ }),

/***/ 8914:
/*!*************************************************!*\
  !*** ./src/app/core/services/config.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService),
/* harmony export */   "DARK_THEME": () => (/* binding */ DARK_THEME),
/* harmony export */   "LIGHT_THEME": () => (/* binding */ LIGHT_THEME),
/* harmony export */   "THEME_KEY": () => (/* binding */ THEME_KEY)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
var _a;


const THEME_KEY = 'theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
const theme = (_a = localStorage.getItem(THEME_KEY)) !== null && _a !== void 0 ? _a : LIGHT_THEME;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 8914);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/avatar */ 9713);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ 6480);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/chip */ 4580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputswitch */ 2236);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/ripple */ 2875);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tooltip */ 1210);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/menu */ 5207);






















const _c0 = ["menu"];
class ContactComponent {
    /**
     * @constructor
     */
    constructor() {
        this.configService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService);
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.items = [];
        this.initMenuItems();
        this.configService.theme$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.unsubscribe$))
            .subscribe((theme) => this.onThemeChange(theme));
    }
    /**
     * Listen for the scroll events to close the menu (workaround to avoid the menu to scroll with the content of the
     * page).
     */
    onScroll() {
        var _a;
        (_a = this.menu) === null || _a === void 0 ? void 0 : _a.hide();
    }
    /**
     * Initialize the contextual menu with the default items.
     */
    initMenuItems() {
        this.items = [
            {
                label: 'Menu',
                items: [
                    {
                        label: this.isDarkTheme ? 'Dark Mode' : 'Light Mode',
                        icon: this.isDarkTheme ? 'pi pi-moon' : 'pi pi-sun',
                        title: 'Changer le mode',
                        command: () => this.configService.setTheme$(!this.isDarkTheme ? _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME : _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.LIGHT_THEME),
                    },
                    {
                        label: 'English',
                        icon: 'pi pi-globe',
                        title: 'Changer le language',
                        disabled: true,
                        command: () => {
                            console.log('Changer le language');
                        },
                    },
                    {
                        label: 'Télécharger',
                        icon: 'pi pi-download',
                        title: 'Télécharger le CV au format PDF',
                        command: () => this.downloadCurriculumVitae(),
                    },
                ],
            },
        ];
    }
    /**
     * Listen for the changes on the theme mode selection and apply the CSS theme according to it.
     *
     * @param theme the selected theme (light or dark)
     */
    onThemeChange(theme) {
        if (theme === _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME) {
            this.isDarkTheme = true;
            document.documentElement.classList.add(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME);
            localStorage.setItem(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.THEME_KEY, _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME);
            this.items[0].items[0].label = 'Light Mode';
            this.items[0].items[0].icon = 'pi pi-sun';
            return;
        }
        this.isDarkTheme = false;
        document.documentElement.classList.remove(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME);
        localStorage.setItem(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.THEME_KEY, _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.LIGHT_THEME);
        this.items[0].items[0].label = 'Dark Mode';
        this.items[0].items[0].icon = 'pi pi-moon';
    }
    /**
     * Change theme from dark to light and vise-versa
     */
    switchTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        const theme = this.isDarkTheme ? _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.LIGHT_THEME : _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME;
        localStorage.setItem(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.THEME_KEY, theme);
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
        this.unsubscribe$.next();
        this.unsubscribe$.unsubscribe();
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["cv-contact"]], viewQuery: function ContactComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
    } }, hostBindings: function ContactComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function ContactComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]], decls: 11, vars: 3, consts: [[1, "general"], ["size", "xlarge", "shape", "circle", "styleClass", "p-mt-5", "image", "assets/pictures/me.jpg"], [1, "general__name"], [1, "general__presentation"], ["label", "gilles.gardet@gmail.com", "icon", "pi pi-envelope", 3, "click"], ["pButton", "", "pRipple", "", "type", "submit", "icon", "pi pi-bars", "pTooltip", "Afficher le menu", 1, "p-button-rounded", "p-button-text", "general__button-left", 3, "click"], ["appendTo", "body", 3, "popup", "model", "autoZIndex"], ["menu", ""]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-card")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "p-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Gilles Gardet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "D\u00E9veloppeur fullstack, curieux par nature et passionn\u00E9 par son m\u00E9tier.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p-chip", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactComponent_Template_p_chip_click_7_listener() { return ctx.openEmailClient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.toggle($event)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "p-menu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("popup", true)("model", ctx.items)("autoZIndex", true);
    } }, dependencies: [primeng_avatar__WEBPACK_IMPORTED_MODULE_5__.AvatarModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_5__.Avatar, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_card__WEBPACK_IMPORTED_MODULE_7__.CardModule, primeng_card__WEBPACK_IMPORTED_MODULE_7__.Card, primeng_chip__WEBPACK_IMPORTED_MODULE_8__.ChipModule, primeng_chip__WEBPACK_IMPORTED_MODULE_8__.Chip, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_10__.InputSwitchModule,
        primeng_menu__WEBPACK_IMPORTED_MODULE_11__.MenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_11__.Menu, primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.Tooltip, primeng_ripple__WEBPACK_IMPORTED_MODULE_13__.RippleModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_13__.Ripple, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.TooltipModule], styles: [".general[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.general[_ngcontent-%COMP%]   .general__name[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: bold;\n  margin: 1rem 0;\n}\n.general[_ngcontent-%COMP%]   .general__presentation[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 1rem;\n}\n.general[_ngcontent-%COMP%]   .general__button-left[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  left: 0.5rem;\n}\n.general[_ngcontent-%COMP%]   .general__button-right[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFOO0FBR0k7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBRE47QUFLTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFIUjtBQU1NO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUpSIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2VuZXJhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmdlbmVyYWwge1xuICAgICZfX25hbWUge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgIH1cblxuICAgICZfX3ByZXNlbnRhdGlvbiB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG5cbiAgICAmX19idXR0b24ge1xuICAgICAgJi1sZWZ0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDAuNXJlbTtcbiAgICAgICAgbGVmdDogMC41cmVtO1xuICAgICAgfVxuXG4gICAgICAmLXJpZ2h0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDAuNXJlbTtcbiAgICAgICAgbGVmdDogMC41cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 7861:
/*!*************************************************************************!*\
  !*** ./src/app/features/resume/components/details/details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsComponent": () => (/* binding */ DetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4350);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-markdown */ 3981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ 3489);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/progressspinner */ 120);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 1122);












function DetailsComponent_p_dialog_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedMission.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedMission.timelapse);
} }
function DetailsComponent_p_dialog_0_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-progressSpinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailsComponent_p_dialog_0_ng_template_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 12)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.innerLightMission, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.innerFullMission, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DetailsComponent_p_dialog_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailsComponent_p_dialog_0_ng_template_2_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailsComponent_p_dialog_0_ng_template_2_ng_template_2_Template, 3, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mission__content-transition", !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loading)("ngIfElse", _r4);
} }
const _c0 = function () { return { maxWidth: "960px" }; };
function DetailsComponent_p_dialog_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dialog", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function DetailsComponent_p_dialog_0_Template_p_dialog_visibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.displayDialog = $event); })("onHide", function DetailsComponent_p_dialog_0_Template_p_dialog_onHide_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onDialogHiding()); })("onShow", function DetailsComponent_p_dialog_0_Template_p_dialog_onShow_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onMissionLoading()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailsComponent_p_dialog_0_ng_template_1_Template, 5, 2, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailsComponent_p_dialog_0_ng_template_2_Template, 4, 4, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx_r0.displayDialog)("header", ctx_r0.selectedMission.client)("modal", true)("closeOnEscape", true)("dismissableMask", true)("blockScroll", true);
} }
class DetailsComponent {
    constructor() {
        this.selectedMission = {};
        this.displayDialog = false;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.markdownService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ngx_markdown__WEBPACK_IMPORTED_MODULE_2__.MarkdownService);
        this.changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
        this.loading = true;
        this.innerFullMission = '';
        this.innerLightMission = '';
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
     * Re-initialize the loader of the dialog content
     */
    onDialogHiding() {
        this.loading = true;
        this.close.next(true);
    }
    /**
     * Parse the markdown contained in the selected mission file
     */
    onMissionLoading() {
        var _a, _b;
        const fullMission = this.markdownService.getSource(this.missionFromDate((_a = this.selectedMission) === null || _a === void 0 ? void 0 : _a.startDate, 'full'));
        const lightMission = this.markdownService.getSource(this.missionFromDate((_b = this.selectedMission) === null || _b === void 0 ? void 0 : _b.startDate, 'light'));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)({ lightMission, fullMission })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribe$))
            .subscribe((value) => {
            this.innerLightMission = this.markdownService.parse(value.lightMission);
            this.innerFullMission = this.markdownService.parse(value.fullMission);
            setTimeout(() => {
                var _a;
                this.loading = false;
                this.changeDetectorRef.detectChanges();
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
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(); };
DetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["cv-details"]], inputs: { selectedMission: "selectedMission", displayDialog: "displayDialog" }, outputs: { close: "close" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]], decls: 1, vars: 1, consts: [[3, "visible", "header", "modal", "style", "closeOnEscape", "dismissableMask", "blockScroll", "visibleChange", "onHide", "onShow", 4, "ngIf"], [3, "visible", "header", "modal", "closeOnEscape", "dismissableMask", "blockScroll", "visibleChange", "onHide", "onShow"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "mission__title"], [1, "prose", "prose-2xl", "font-bold", "text-slate-600", "dark:text-slate-100"], [1, "mission__title__timelapse"], [1, "mission__content"], [4, "ngIf", "ngIfElse"], ["missionContent", ""], ["strokeWidth", "6", "styleClass", "mission__content__spinner"], [1, "mission__content__text"], [3, "innerHTML"], [1, "flex", "flex-col", "gap-3", 3, "innerHTML"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailsComponent_p_dialog_0_Template, 3, 9, "p-dialog", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedMission);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__.ProgressSpinnerModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__.ProgressSpinner], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-row-gap: 2rem;\n}\n[_nghost-%COMP%]   .mission__title[_ngcontent-%COMP%] {\n  grid-area: 1/2/1/3;\n}\n[_nghost-%COMP%]   .mission__title__timelapse[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n[_nghost-%COMP%]   .mission__content[_ngcontent-%COMP%] {\n  max-height: 100px;\n  max-width: 100px;\n  transition: max-height 800ms ease-in-out, max-width 800ms ease-in-out;\n}\n[_nghost-%COMP%]   .mission__content__spinner[_ngcontent-%COMP%] {\n  animation: progress-spinner-dash 1.5s ease-in-out infinite, progress-spinner-color 6s ease-in-out infinite;\n}\n[_nghost-%COMP%]   .mission__content__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  opacity: 0;\n  animation: fadeText 800ms forwards 800ms;\n}\n[_nghost-%COMP%]   .mission__content-transition[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  max-width: calc(1280px - 3rem);\n}\n@keyframes fadeText {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes hideScroll {\n  from, to {\n    overflow-y: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVJO0VBQ0Usa0JBQUE7QUFBTjtBQUVNO0VBQ0Usa0JBQUE7QUFBUjtBQUlJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFFQUFBO0FBRk47QUFJTTtFQUNFLDBHQUFBO0FBRlI7QUFLTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0FBSFI7QUFNTTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7QUFKUjtBQU9NO0VBQ0U7SUFDRSxVQUFBO0VBTFI7RUFPTTtJQUNFLFVBQUE7RUFMUjtBQUNGO0FBVUU7RUFDRTtJQUVFLGtCQUFBO0VBVEo7QUFDRiIsImZpbGUiOiJkZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXJvdy1nYXA6IDJyZW07XG5cbiAgLm1pc3Npb24ge1xuICAgICZfX3RpdGxlIHtcbiAgICAgIGdyaWQtYXJlYTogMSAvIDIgLyAxIC8gMztcblxuICAgICAgJl9fdGltZWxhcHNlIHtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgfVxuICAgIH1cblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCA4MDBtcyBlYXNlLWluLW91dCwgbWF4LXdpZHRoIDgwMG1zIGVhc2UtaW4tb3V0O1xuXG4gICAgICAmX19zcGlubmVyIHtcbiAgICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzcy1zcGlubmVyLWRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSwgcHJvZ3Jlc3Mtc3Bpbm5lci1jb2xvciA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgIH1cblxuICAgICAgJl9fdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZVRleHQgODAwbXMgZm9yd2FyZHMgODAwbXM7XG4gICAgICB9XG5cbiAgICAgICYtdHJhbnNpdGlvbiB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTI4MHB4IC0gM3JlbSk7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgZmFkZVRleHQge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBoaWRlU2Nyb2xsIHtcbiAgICBmcm9tLFxuICAgIHRvIHtcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


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
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/tag */ 5277);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/panel */ 6572);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);






class HobbiesComponent {
}
HobbiesComponent.ɵfac = function HobbiesComponent_Factory(t) { return new (t || HobbiesComponent)(); };
HobbiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HobbiesComponent, selectors: [["cv-hobbies"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 11, vars: 4, consts: [["header", "Loisirs"], [1, "hobbies"], [3, "rounded"], [1, "pi"]], template: function HobbiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-panel", 0)(1, "div", 1)(2, "p-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "D\u00E9veloppement relatif \u00E0 tout type de langages et technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Basketball en comp\u00E9tition (niveau excellence)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Course \u00E0 pied (participation au marathon de Toulouse en \u00E9quipe)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cin\u00E9ma fantastique des ann\u00E9es 80-90 (Carpenter, Cronenberg, Romero...)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
    } }, dependencies: [primeng_panel__WEBPACK_IMPORTED_MODULE_2__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_2__.Panel, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, primeng_tag__WEBPACK_IMPORTED_MODULE_3__.TagModule, primeng_tag__WEBPACK_IMPORTED_MODULE_3__.Tag], styles: [".hobbies[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvYmJpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0YiLCJmaWxlIjoiaG9iYmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob2JiaWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuIl19 */"], changeDetection: 0 });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/panel */ 6572);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/timeline */ 8554);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/card */ 6480);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ 3981);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/slide-button/slide-button.component */ 4324);














function MissionsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", "#495057");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "pi pi-bookmark");
} }
function MissionsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "markdown", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 8)(3, "cv-slide-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MissionsComponent_ng_template_3_Template_cv_slide_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const mission_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.emitOpenMissionDialog(mission_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const mission_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("header", mission_r2["client"])("subheader", mission_r2["timelapse"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", mission_r2.description);
} }
class MissionsComponent {
    constructor() {
        this.missions = [];
        this.openDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
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
MissionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MissionsComponent, selectors: [["cv-missions"]], hostBindings: function MissionsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function MissionsComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, inputs: { missions: "missions" }, outputs: { openDialog: "openDialog" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]], decls: 4, vars: 1, consts: [["header", "Exp\u00E9rience"], ["align", "alternate", "styleClass", "customized-timeline", 3, "value"], ["pTemplate", "marker"], ["pTemplate", "content"], [1, "custom-marker"], [3, "ngClass"], ["styleClass", "mission", 3, "header", "subheader"], [3, "src"], [1, "mission__button"], [3, "click"]], template: function MissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-panel", 0)(1, "p-timeline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MissionsComponent_ng_template_2_Template, 2, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MissionsComponent_ng_template_3_Template, 4, 3, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.missions);
    } }, dependencies: [primeng_card__WEBPACK_IMPORTED_MODULE_3__.CardModule, primeng_card__WEBPACK_IMPORTED_MODULE_3__.Card, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownComponent, primeng_panel__WEBPACK_IMPORTED_MODULE_6__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_6__.Panel, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_1__.SlideButtonComponent, primeng_timeline__WEBPACK_IMPORTED_MODULE_8__.TimelineModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_8__.Timeline], styles: [".custom-marker[_ngcontent-%COMP%] {\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  justify-content: center;\n  color: var(--white);\n  border-radius: 50%;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc3Npb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0YiLCJmaWxlIjoibWlzc2lvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLW1hcmtlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDE7XG59XG4iXX0= */"], changeDetection: 0 });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9727);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _features_resume_components_summary_summary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @features/resume/components/summary/summary.component */ 996);
/* harmony import */ var _features_resume_components_skills_skills_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @features/resume/components/skills/skills.component */ 1430);
/* harmony import */ var _features_resume_components_missions_missions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/resume/components/missions/missions.component */ 6032);
/* harmony import */ var _features_resume_components_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/resume/components/hobbies/hobbies.component */ 7924);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var _features_resume_components_details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/resume/components/details/details.component */ 7861);
/* harmony import */ var _assets_resume_missions_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @assets/resume/missions.json */ 8594);
/* harmony import */ var _assets_resume_skills_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @assets/resume/skills.json */ 2243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);











class ResumeComponent {
    constructor() {
        this._unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.selectedMission = {};
        this.missions = [];
        this.skills = [];
        this.clones = [];
        this.displayDialog = false;
    }
    /**
     * @inheritDoc
     */
    ngOnInit() {
        const missions$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_assets_resume_missions_json__WEBPACK_IMPORTED_MODULE_6__);
        const skills$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(_assets_resume_skills_json__WEBPACK_IMPORTED_MODULE_7__);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.zip)(missions$, skills$)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([missions, skills]) => ({ missions, skills })))
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
        let monthsBetweenDates = this.monthBetweenDates(startDate, endDate);
        if (monthsBetweenDates > 12 && monthsBetweenDates % 12 > 0) {
            const years = Math.trunc(monthsBetweenDates / 12);
            const months = monthsBetweenDates % 12;
            return `${years} an${years > 1 ? 's' : ''} et ${months} mois`;
        }
        if (monthsBetweenDates % 12 === 0) {
            const years = Math.trunc(monthsBetweenDates / 12);
            return `${years} an${years > 1 ? 's' : ''}`;
        }
        return `${monthsBetweenDates} mois`;
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
     * Change the close dialog flag when the details' dialog component was closed from itself.
     */
    onDetailsClose() {
        this.displayDialog = false;
    }
    /**
     * Open the details dialog
     */
    openDialog(mission) {
        this.displayDialog = true;
        this.selectedMission = mission;
    }
    /**
     * @inheritDoc
     */
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.unsubscribe();
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["cv-resume"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]], decls: 7, vars: 5, consts: [[1, "scroll-wrapper"], ["id", "scroll-tracker"], [3, "skills", "clones"], [3, "missions", "openDialog"], [3, "selectedMission", "displayDialog", "close"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "cv-summary")(3, "cv-skills", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "cv-missions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("openDialog", function ResumeComponent_Template_cv_missions_openDialog_4_listener($event) { return ctx.openDialog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "cv-hobbies");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "cv-details", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("close", function ResumeComponent_Template_cv_details_close_6_listener() { return ctx.onDetailsClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("skills", ctx.skills)("clones", ctx.clones);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("missions", ctx.missions);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("selectedMission", ctx.selectedMission)("displayDialog", ctx.displayDialog);
    } }, dependencies: [_features_resume_components_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_3__.HobbiesComponent, _features_resume_components_missions_missions_component__WEBPACK_IMPORTED_MODULE_2__.MissionsComponent, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _features_resume_components_skills_skills_component__WEBPACK_IMPORTED_MODULE_1__.SkillsComponent, _features_resume_components_summary_summary_component__WEBPACK_IMPORTED_MODULE_0__.SummaryComponent, _features_resume_components_details_details_component__WEBPACK_IMPORTED_MODULE_5__.DetailsComponent], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-row-gap: 2rem;\n}\n[_nghost-%COMP%]   .mission__title[_ngcontent-%COMP%] {\n  grid-area: 1/2/1/3;\n}\n[_nghost-%COMP%]   .mission__title__timelapse[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n[_nghost-%COMP%]   .mission__content[_ngcontent-%COMP%] {\n  max-height: 100px;\n  max-width: 100px;\n  transition: max-height 800ms ease-in-out, max-width 800ms ease-in-out;\n}\n[_nghost-%COMP%]   .mission__content__spinner[_ngcontent-%COMP%] {\n  animation: progress-spinner-dash 1.5s ease-in-out infinite, progress-spinner-color 6s ease-in-out infinite;\n}\n@keyframes progress-spinner-color {\n  100%, 0%, 40%, 66%, 80%, 90% {\n    stroke: hsl(210, 9%, 31%);\n  }\n  .dark 100%,.dark  0%,.dark  40%,.dark  66%,.dark  80%,.dark  90% {\n    stroke: hsl(240, 4%, 90%);\n  }\n}\n@keyframes progress-spinner-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n[_nghost-%COMP%]   .mission__content__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  opacity: 0;\n  animation: fadeText 800ms forwards 800ms;\n}\n[_nghost-%COMP%]   .mission__content-transition[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  max-width: calc(1280px - 3rem);\n}\n@keyframes fadeText {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes hideScroll {\n  from, to {\n    overflow-y: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUk7RUFDRSxrQkFBQTtBQUFOO0FBRU07RUFDRSxrQkFBQTtBQUFSO0FBSUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUVBQUE7QUFGTjtBQUlNO0VBQ0UsMEdBQUE7QUFGUjtBQUtNO0VBT0k7SUFBQTtFQUFBO0VBQUE7SUFBQTtFQUFBO0FBUFY7QUFXTTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQVRSO0VBV007SUFDRSx5QkFBQTtJQUNBLHdCQUFBO0VBVFI7RUFXTTtJQUNFLHlCQUFBO0lBQ0EseUJBQUE7RUFUUjtBQUNGO0FBWU07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtBQVZSO0FBYU07RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0FBWFI7QUFjTTtFQUNFO0lBQ0UsVUFBQTtFQVpSO0VBY007SUFDRSxVQUFBO0VBWlI7QUFDRjtBQWlCRTtFQUNFO0lBRUUsa0JBQUE7RUFoQko7QUFDRiIsImZpbGUiOiJyZXN1bWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtcm93LWdhcDogMnJlbTtcblxuICAubWlzc2lvbiB7XG4gICAgJl9fdGl0bGUge1xuICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDEgLyAzO1xuXG4gICAgICAmX190aW1lbGFwc2Uge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fY29udGVudCB7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDgwMG1zIGVhc2UtaW4tb3V0LCBtYXgtd2lkdGggODAwbXMgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICZfX3NwaW5uZXIge1xuICAgICAgICBhbmltYXRpb246IHByb2dyZXNzLXNwaW5uZXItZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlLCBwcm9ncmVzcy1zcGlubmVyLWNvbG9yIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHByb2dyZXNzLXNwaW5uZXItY29sb3Ige1xuICAgICAgICAxMDAlLFxuICAgICAgICAwJSxcbiAgICAgICAgNDAlLFxuICAgICAgICA2NiUsXG4gICAgICAgIDgwJSxcbiAgICAgICAgOTAlIHtcbiAgICAgICAgICBAYXBwbHkgc3Ryb2tlLXRleHQtY29sb3IgZGFyazpzdHJva2UtZGFyay10ZXh0LWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgcHJvZ3Jlc3Mtc3Bpbm5lci1kYXNoIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcbiAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNXB4O1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjRweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmX190ZXh0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlVGV4dCA4MDBtcyBmb3J3YXJkcyA4MDBtcztcbiAgICAgIH1cblxuICAgICAgJi10cmFuc2l0aW9uIHtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMjgwcHggLSAzcmVtKTtcbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBmYWRlVGV4dCB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGhpZGVTY3JvbGwge1xuICAgIGZyb20sXG4gICAgdG8ge1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/progressbar */ 9858);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/panel */ 6572);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);








function SkillsComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "p-progressBar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](skill_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", skill_r1.rate)("showValue", false);
} }
class SkillsComponent {
    constructor() {
        this.skills = [];
        this.clones = [];
        this.changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
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
                else {
                    this.skills.forEach((tool) => (tool.rate = 0));
                }
                this.changeDetectorRef.detectChanges();
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
SkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["cv-skills"]], inputs: { skills: "skills", clones: "clones" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 3, vars: 1, consts: [["header", "Langages et outils"], [1, "skills"], [4, "ngFor", "ngForOf"], [1, "skills__languages"], [3, "value", "showValue"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-panel", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SkillsComponent_ng_container_2_Template, 5, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, dependencies: [primeng_panel__WEBPACK_IMPORTED_MODULE_2__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_2__.Panel, primeng_progressbar__WEBPACK_IMPORTED_MODULE_3__.ProgressBarModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_3__.ProgressBar, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["[_nghost-%COMP%]   .skills[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 2rem;\n  grid-row-gap: 1rem;\n  padding: 0 2rem;\n}\n[_nghost-%COMP%]   .skills__languages[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .skills__languages[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: start;\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   .skills__languages[_ngcontent-%COMP%]    > p-progressbar[_ngcontent-%COMP%] {\n  flex: 2;\n}\n@media screen and (max-width: 960px) {\n  [_nghost-%COMP%]   .skills[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUo7QUFFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFOO0FBRU07RUFDRSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFSO0FBR007RUFDRSxPQUFBO0FBRFI7QUFNRTtFQUNFO0lBQ0UsMEJBQUE7RUFKSjtBQUNGIiwiZmlsZSI6InNraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLnNraWxscyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAycmVtO1xuICAgIGdyaWQtcm93LWdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAwIDJyZW07XG5cbiAgICAmX19sYW5ndWFnZXMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgID4gc3BhbiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICB9XG5cbiAgICAgID4gcC1wcm9ncmVzc2JhciB7XG4gICAgICAgIGZsZXg6IDI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICAuc2tpbGxzIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });


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
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/panel */ 6572);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




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
SummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["cv-summary"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 22, vars: 1, consts: [["header", "Profil et g\u00E9n\u00E9ralit\u00E9s"], [1, "summary"]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-panel", 0)(1, "div", 1)(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Je b\u00E9n\u00E9ficie d\u2019une exp\u00E9rience de ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.numberOfYearsFromDateToCurrentDate(ctx.experience), " ans");
    } }, dependencies: [primeng_panel__WEBPACK_IMPORTED_MODULE_2__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_2__.Panel, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule], styles: [".summary[_ngcontent-%COMP%] {\n  text-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6InN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VtbWFyeSB7XG4gIHRleHQtYWxpZ246IHN0YXJ0XG59XG4iXX0= */"], changeDetection: 0 });


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
SlideButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlideButtonComponent, selectors: [["cv-slide-button"]], decls: 5, vars: 0, consts: [[1, "learn-more"], ["aria-hidden", "true", 1, "circle"], [1, "icon", "arrow"], [1, "button-text"]], template: function SlideButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "En savoir plus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["button {\n  --tw-bg-opacity: 1;\n  background-color: hsl(207 9% 31% / var(--tw-bg-opacity));\n}.dark button {\n  --tw-bg-opacity: 1;\n  background-color: hsl(218 12% 89% / var(--tw-bg-opacity));\n}button {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  text-decoration: none;\n  padding: 0;\n  font-size: 14px;\n  outline: none;\n  border: none;\n  border-radius: 1.625rem;\n}\nbutton.learn-more {\n  width: 10rem;\n  height: auto;\n}\nbutton.learn-more .circle {\n  --tw-bg-opacity: 1;\n  background-color: hsl(218 12% 89% / var(--tw-bg-opacity));\n}\n.dark button.learn-more .circle {\n  --tw-bg-opacity: 1;\n  background-color: hsl(207 9% 31% / var(--tw-bg-opacity));\n}\nbutton.learn-more .circle {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: relative;\n  display: block;\n  margin: 0;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 1.625rem;\n}\nbutton.learn-more .circle .icon {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\nbutton.learn-more .circle .icon.arrow {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  left: 0.125rem;\n  width: 1.125rem;\n  height: 0.125rem;\n  background: none;\n}\nbutton.learn-more .circle .icon.arrow::before {\n  --tw-border-opacity: 1;\n  border-top-color: hsl(207 9% 31% / var(--tw-border-opacity));\n}\n.dark button.learn-more .circle .icon.arrow::before {\n  --tw-border-opacity: 1;\n  border-top-color: hsl(0 0% 100% / var(--tw-border-opacity));\n}\nbutton.learn-more .circle .icon.arrow::before {\n  --tw-border-opacity: 1;\n  border-right-color: hsl(207 9% 31% / var(--tw-border-opacity));\n}\n.dark button.learn-more .circle .icon.arrow::before {\n  --tw-border-opacity: 1;\n  border-right-color: hsl(0 0% 100% / var(--tw-border-opacity));\n}\nbutton.learn-more .circle .icon.arrow::before {\n  border-top-width: 0.125rem;\n  border-right-width: 0.125rem;\n  border-top-style: solid;\n  border-right-style: solid;\n  position: absolute;\n  content: \"\";\n  top: -0.25rem;\n  right: 0.0625rem;\n  width: 0.625rem;\n  height: 0.625rem;\n  transform: rotate(45deg);\n}\nbutton.learn-more .button-text {\n  --tw-text-opacity: 1;\n  color: hsl(240 4% 90% / var(--tw-text-opacity));\n}\n.dark button.learn-more .button-text {\n  --tw-text-opacity: 1;\n  color: hsl(210 9% 31% / var(--tw-text-opacity));\n}\nbutton.learn-more .button-text {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.75rem 0;\n  margin: 0 0 0 1.85rem;\n  line-height: 0.6;\n  text-align: center;\n}\nbutton:hover .circle {\n  width: 100%;\n}\nbutton:hover .circle .icon.arrow {\n  --tw-bg-opacity: 1;\n  background-color: hsl(207 9% 31% / var(--tw-bg-opacity));\n}\n.dark button:hover .circle .icon.arrow {\n  --tw-bg-opacity: 1;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity));\n}\nbutton:hover .circle .icon.arrow {\n  transform: translate(1rem, 0);\n}\nbutton:hover .button-text {\n  --tw-text-opacity: 1;\n  color: hsl(207 9% 31% / var(--tw-text-opacity));\n}\n.dark button:hover .button-text {\n  --tw-text-opacity: 1;\n  color: hsl(0 0% 100% / var(--tw-text-opacity));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLRTtFQUFBLGtCQUFBO0VBQUE7QUFBQSxDQUFBO0VBQUEsa0JBQUE7RUFBQTtBQUFBLENBREY7RUFFRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBSEY7QUFLRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBSEo7QUFNTTtFQUFBLGtCQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsa0JBQUE7RUFBQTtBQUFBO0FBREY7RUFuQkYscURBQUE7RUFzQkksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFITjtBQUtNO0VBN0JKLHFEQUFBO0VBK0JNLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBSFI7QUFLUTtFQXBDTixxREFBQTtFQXNDUSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFIVjtBQU1ZO0VBQUEsc0JBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSxzQkFBQTtFQUFBO0FBQUE7QUFDQTtFQUFBLHNCQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsc0JBQUE7RUFBQTtBQUFBO0FBRkY7RUFHRSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBSFo7QUFVTTtFQUFBLG9CQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBO0FBREY7RUE5REYscURBQUE7RUFpRUksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFQTjtBQVlJO0VBQ0UsV0FBQTtBQVZOO0FBY1U7RUFBQSxrQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLGtCQUFBO0VBQUE7QUFBQTtBQURGO0VBRUUsNkJBQUE7QUFYVjtBQWlCTTtFQUFBLG9CQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBIiwiZmlsZSI6InNsaWRlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0eTogYWxsLCAkZHVyYXRpb246IDAuNDVzLCAkZWFzZTogY3ViaWMtYmV6aWVyKDAuNjUsMCwuMDc2LDEpKSB7XG4gIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb24gJGVhc2U7XG59XG5cbmJ1dHRvbiB7XG4gIEBhcHBseSBiZy1kYXJrLXNsaWRlLWJ1dHRvbi1iZyBkYXJrOmJnLXNsaWRlLWJ1dHRvbi1iZztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMS42MjVyZW07XG5cbiAgJi5sZWFybi1tb3JlIHtcbiAgICB3aWR0aDogMTByZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgLmNpcmNsZSB7XG4gICAgICBAYXBwbHkgYmctZGFyay1zbGlkZS1jaXJjbGUtYnV0dG9uLWJnIGRhcms6Ymctc2xpZGUtY2lyY2xlLWJ1dHRvbi1iZztcbiAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjQ1cywgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIC4wNzYsIDEpKTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgd2lkdGg6IDJyZW07XG4gICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAxLjYyNXJlbTtcblxuICAgICAgLmljb24ge1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40NXMsIGN1YmljLWJlemllcigwLjY1LCAwLCAuMDc2LCAxKSk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcblxuICAgICAgICAmLmFycm93IHtcbiAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40NXMsIGN1YmljLWJlemllcigwLjY1LCAwLCAuMDc2LCAxKSk7XG4gICAgICAgICAgbGVmdDogMC4xMjVyZW07XG4gICAgICAgICAgd2lkdGg6IDEuMTI1cmVtO1xuICAgICAgICAgIGhlaWdodDogMC4xMjVyZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcblxuICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICBAYXBwbHkgYm9yZGVyLXQtZGFyay1zbGlkZS1idXR0b24taWNvbiBkYXJrOmJvcmRlci10LXNsaWRlLWJ1dHRvbi1pY29uO1xuICAgICAgICAgICAgQGFwcGx5IGJvcmRlci1yLWRhcmstc2xpZGUtYnV0dG9uLWljb24gZGFyazpib3JkZXItci1zbGlkZS1idXR0b24taWNvbjtcbiAgICAgICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDAuMTI1cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwLjEyNXJlbTtcbiAgICAgICAgICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgdG9wOiAtMC4yNXJlbTtcbiAgICAgICAgICAgIHJpZ2h0OiAwLjA2MjVyZW07XG4gICAgICAgICAgICB3aWR0aDogMC42MjVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDAuNjI1cmVtO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5idXR0b24tdGV4dCB7XG4gICAgICBAYXBwbHkgdGV4dC1kYXJrLXRleHQtY29sb3IgZGFyazp0ZXh0LXRleHQtY29sb3I7XG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40NXMsIGN1YmljLWJlemllcigwLjY1LCAwLCAuMDc2LCAxKSk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDA7XG4gICAgICBtYXJnaW46IDAgMCAwIDEuODVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMC42O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIC5jaXJjbGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5pY29uIHtcbiAgICAgICAgJi5hcnJvdyB7XG4gICAgICAgICAgQGFwcGx5IGJnLWRhcmstc2xpZGUtYnV0dG9uLWljb24gZGFyazpiZy1zbGlkZS1idXR0b24taWNvbjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcmVtLCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5idXR0b24tdGV4dCB7XG4gICAgICBAYXBwbHkgdGV4dC1kYXJrLXNsaWRlLWJ1dHRvbi1pY29uIGRhcms6dGV4dC1zbGlkZS1idXR0b24taWNvbjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2, changeDetection: 0 });


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
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_0__.SlideButtonComponent], imports: [primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_0__.SlideButtonComponent] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 2340);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 5041);
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app-routing.module */ 158);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.module */ 294);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-markdown */ 3981);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ 4466);










if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, {
    providers: [
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(ngx_markdown__WEBPACK_IMPORTED_MODULE_9__.MarkdownModule.forRoot()),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule),
    ],
}).catch((err) => console.error(err));


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