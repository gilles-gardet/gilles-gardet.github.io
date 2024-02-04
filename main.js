"use strict";
(self["webpackChunkcv"] = self["webpackChunkcv"] || []).push([["main"],{

/***/ 5133:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1330);
/* harmony import */ var _core_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/string.utils */ 8418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8559);




const routes = [{
  path: _core_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__.EMPTY_STRING,
  pathMatch: 'full',
  loadComponent: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @features/resume/components/resume/resume.component */ 882)).then(module => module.ResumeComponent)
}, {
  path: '**',
  loadComponent: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @features/resume/components/resume/resume.component */ 882)).then(module => module.ResumeComponent)
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6685:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 8559);
/* harmony import */ var _features_general_components_general_general_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @features/general/components/general/general.component */ 1616);
/* harmony import */ var _features_resume_components_resume_resume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @features/resume/components/resume/resume.component */ 882);
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/scrolltop */ 1640);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 912);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 33);
/* harmony import */ var _core_utils_string_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/string.utils */ 8418);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/config.service */ 6792);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/progressspinner */ 8132);
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/blockui */ 4568);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7420);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2890);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 5357);
















function AppComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-progressSpinner", 0);
  }
}
function AppComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "aside");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "cv-general");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "cv-resume")(5, "p-scrollTop");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class AppComponent {
  /**
   * @constructor
   */
  constructor() {
    this.translateService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService);
    this.changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef);
    this.configService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.DestroyRef);
    this.language = _core_utils_string_utils__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STRING;
    this.isLoading$ = this.configService.loading$;
    this.translateService.addLangs(['fr', 'en']);
    this._initLanguagePreference();
  }
  /**
   * @inheritDoc
   */
  ngOnInit() {
    const language$ = this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.configService.setLoading$(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.timer)(600)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.configService.setLoading$(false)), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef));
    language$.subscribe(() => this.changeDetectorRef.markForCheck());
  }
  /**
   * Listen for the page scroll in order to display a reading indicator.
   */
  onPageScroll() {
    const scrollTracker = document.getElementById('scroll-tracker');
    const scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
    const progressWidth = scrollDistance / (document.body.scrollHeight - document.documentElement.clientHeight) * 100;
    if (scrollTracker?.style) {
      scrollTracker.style.width = progressWidth + '%';
    }
  }
  /**
   * Define the navigation session language.
   */
  _initLanguagePreference() {
    const languageKey = localStorage.getItem(_core_services_config_service__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE_KEY) ?? 'en';
    let sessionLanguage;
    if ((0,_core_utils_string_utils__WEBPACK_IMPORTED_MODULE_2__.isBlank)(languageKey) || !/en|fr/.exec(languageKey)) {
      const browserLang = this.translateService.getBrowserLang() ?? 'en';
      sessionLanguage = /en|fr/.exec(browserLang) ? browserLang : 'en';
    } else {
      sessionLanguage = languageKey;
    }
    this._changeLanguage(sessionLanguage);
  }
  /**
   * .Change the current language by the given one.
   *
   * @param language the new language to be set
   */
  _changeLanguage(language) {
    this.translateService.use(language);
    this.language = language;
    if (localStorage.getItem(_core_services_config_service__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE_KEY) !== language) {
      localStorage.setItem(_core_services_config_service__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE_KEY, this.language);
    }
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["cv-root"]],
    hostBindings: function AppComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) {
          return ctx.onPageScroll($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 1,
    consts: [["strokeWidth", "6", "styleClass", "spinner"], ["id", "container"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AppComponent_Conditional_0_Template, 1, 0, "p-progressSpinner", 0)(1, AppComponent_Conditional_1_Template, 6, 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](0, ctx.isLoading$() ? 0 : 1);
      }
    },
    dependencies: [primeng_blockui__WEBPACK_IMPORTED_MODULE_10__.BlockUIModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _features_general_components_general_general_component__WEBPACK_IMPORTED_MODULE_0__.GeneralComponent, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_12__.ProgressSpinnerModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_12__.ProgressSpinner, _features_resume_components_resume_resume_component__WEBPACK_IMPORTED_MODULE_1__.ResumeComponent, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_13__.ScrollTopModule, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_13__.ScrollTop],
    styles: [".p-card-title,\n.p-card-subtitle {\n  text-align: center;\n}\n\n.p-progressbar {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(210 14% 89% / var(--tw-bg-opacity)) !important;\n}\n\n:is(:where(.dark) .p-progressbar) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(210 9% 31% / var(--tw-bg-opacity)) !important;\n}\n\n.p-progressbar {\n  height: 0.5rem;\n  border-radius: 5px;\n}\n.p-progressbar .p-progressbar-value {\n  --tw-bg-opacity: 1;\n  background-color: hsl(210 9% 31% / var(--tw-bg-opacity));\n}\n:is(:where(.dark) .p-progressbar .p-progressbar-value) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(210 14% 89% / var(--tw-bg-opacity));\n}\n\n.p-tag {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(210 9% 31% / var(--tw-bg-opacity)) !important;\n}\n\n:is(:where(.dark) .p-tag) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(210 14% 89% / var(--tw-bg-opacity)) !important;\n}\n\n.p-tag {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\n\n:is(:where(.dark) .p-tag) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\n\np-scrolltop > button.p-scrolltop {\n  z-index: 1004;\n}\n\np-panel .p-panel-header {\n  display: grid;\n  justify-content: center;\n}\np-panel .p-panel-header,\np-panel .p-panel-content {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(210 17% 98% / var(--tw-bg-opacity)) !important;\n}\n:is(:where(.dark) p-panel .p-panel-header),:is(:where(.dark) \np-panel .p-panel-content) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(217 17% 20% / var(--tw-bg-opacity)) !important;\n}\np-panel .p-panel-header,\np-panel .p-panel-content {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\n:is(:where(.dark) p-panel .p-panel-header),:is(:where(.dark) \np-panel .p-panel-content) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\np-panel .p-panel-header,\np-panel .p-panel-content {\n  --tw-border-opacity: 1 !important;\n  border-color: hsl(210 14% 89% / var(--tw-border-opacity)) !important;\n}\n:is(:where(.dark) p-panel .p-panel-header),:is(:where(.dark) \np-panel .p-panel-content) {\n  --tw-border-opacity: 1 !important;\n  border-color: hsl(213 19% 30% / var(--tw-border-opacity)) !important;\n}\n\np-card > div.p-card {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity)) !important;\n}\n\n:is(:where(.dark) p-card > div.p-card) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(217 17% 20% / var(--tw-bg-opacity)) !important;\n}\n\np-card > div.p-card {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\n\n:is(:where(.dark) p-card > div.p-card) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\n\np-card > div.p-card {\n  position: sticky;\n  top: 2rem;\n}\np-card.alt-card > div.p-card {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity)) !important;\n}\n:is(:where(.dark) p-card.alt-card > div.p-card) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(214 18% 15% / var(--tw-bg-opacity)) !important;\n}\n\n.p-menu.p-menu-overlay {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity)) !important;\n}\n\n:is(:where(.dark) .p-menu.p-menu-overlay) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(217 17% 20% / var(--tw-bg-opacity)) !important;\n}\n.p-menu .p-submenu-header {\n  display: flex;\n  justify-content: center;\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity)) !important;\n}\n:is(:where(.dark) .p-menu .p-submenu-header) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(217 17% 20% / var(--tw-bg-opacity)) !important;\n}\n.p-menu .p-menuitem-link .p-menuitem-text,\n.p-menu .p-submenu-header {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\n:is(:where(.dark) .p-menu .p-menuitem-link .p-menuitem-text),:is(:where(.dark) \n.p-menu .p-submenu-header) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\n.p-menu .p-menuitem-icon {\n  transition: color 0s, background-color 0s;\n}\n.p-menu .p-menuitem-link:not(.p-disabled):hover {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(214 16% 93% / var(--tw-bg-opacity)) !important;\n}\n:is(:where(.dark) .p-menu .p-menuitem-link:not(.p-disabled):hover) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(215 15% 23% / var(--tw-bg-opacity)) !important;\n}\n.p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text,\n.p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n  transition: color 0s, background-color 0s;\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\n:is(:where(.dark) .p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text),:is(:where(.dark) \n.p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\n\nbutton.p-button {\n  border: 1px solid var(--button);\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\n\n:is(:where(.dark) button.p-button) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(212 10% 70% / var(--tw-text-opacity)) !important;\n}\nbutton.p-button.p-button.p-button-text, button.p-button.p-button.p-button-text:enabled:hover, button.p-button.p-button.p-button-text:enabled:active {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\n:is(:where(.dark) button.p-button.p-button.p-button-text),:is(:where(.dark)  button.p-button.p-button.p-button-text:enabled:hover),:is(:where(.dark)  button.p-button.p-button.p-button-text:enabled:active) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(212 10% 70% / var(--tw-text-opacity)) !important;\n}\nbutton.p-button.p-button.p-button-text:enabled:hover, button.p-button.p-button.p-button-text:enabled:active {\n  background: rgba(75, 85, 94, 0.04);\n}\nbutton.p-button.p-button:focus, button.p-button.p-button.p-button-text:enabled:active {\n  box-shadow: 0 0 0 0.2rem #aab1b9;\n}\n\np-chip[label=\"gilles.gardet@gmail.com\"] {\n  --params: 0.8s ease;\n}\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip {\n  position: relative;\n  overflow: hidden;\n  transition: color var(--params), background-color var(--params);\n  z-index: 0;\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(207 9% 31% / var(--tw-bg-opacity)) !important;\n}\n:is(:where(.dark) p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(216 14% 89% / var(--tw-bg-opacity)) !important;\n}\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\n:is(:where(.dark) p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(216 14% 89% / var(--tw-bg-opacity)) !important;\n}\n:is(:where(.dark) p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip)::before {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(207 9% 31% / var(--tw-bg-opacity)) !important;\n}\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip::before {\n  transform: translateX(100%);\n  transition: transform var(--params), opacity var(--params);\n}\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:hover {\n  cursor: pointer;\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\n:is(:where(.dark) p-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:hover) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:hover {\n  background-color: transparent;\n}\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:hover::before {\n  transform: translateX(0);\n  opacity: 1;\n}\n\n.p-timeline-event-content,\n.p-timeline-event-opposite {\n  line-height: 1;\n}\n\n.p-button.p-button-secondary.p-button-outlined {\n  color: var(--dark);\n}\n\n.mission {\n  box-shadow: none;\n}\n.mission__animation-left {\n  opacity: 0;\n  transform: translateX(-40px);\n  animation: fadeIn 3s forwards;\n  -webkit-animation: fadeIn 3s forwards;\n  -moz-animation: fadeIn 3s forwards;\n  -o-animation: fadeIn 3s forwards;\n  -ms-animation: fadeIn 3s forwards;\n}\n.mission__animation-right {\n  opacity: 0;\n  transform: translateX(40px);\n  animation: fadeIn 3s forwards;\n  -webkit-animation: fadeIn 3s forwards;\n  -moz-animation: fadeIn 3s forwards;\n  -o-animation: fadeIn 3s forwards;\n  -ms-animation: fadeIn 3s forwards;\n}\n.mission__button {\n  display: flex;\n  justify-content: center;\n}\n\n.p-timeline-event-content > p-card > .p-card > .p-card-body > .p-card-content {\n  text-align: left;\n}\n\n.p-timeline .p-timeline-event-connector {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(216 14% 89% / var(--tw-bg-opacity)) !important;\n}\n\n:is(:where(.dark) .p-timeline .p-timeline-event-connector) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(213 19% 30% / var(--tw-bg-opacity)) !important;\n}\n\n.p-card-content {\n  display: grid;\n  gap: 1rem;\n}\n\n.p-dialog .p-dialog-header,\n.p-dialog .p-dialog-content {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity)) !important;\n}\n\n:is(:where(.dark) .p-dialog .p-dialog-header),:is(:where(.dark) \n.p-dialog .p-dialog-content) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(217 17% 20% / var(--tw-bg-opacity)) !important;\n}\n\n.p-dialog .p-dialog-header,\n.p-dialog .p-dialog-content {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\n\n:is(:where(.dark) .p-dialog .p-dialog-header),:is(:where(.dark) \n.p-dialog .p-dialog-content) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\n.p-dialog .p-dialog-header {\n  display: grid;\n}\n.p-dialog .p-dialog-header .p-dialog-header-icons {\n  grid-area: 1/3/1/4;\n  align-self: flex-start;\n}\n.p-dialog .p-dialog-content {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  display: flex;\n  justify-content: center;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n.p-dialog .p-dialog-content .p-progress-spinner-circle {\n  animation: progress-spinner-dash 1.5s ease-in-out infinite, progress-spinner-color 6s ease-in-out infinite;\n}\n@keyframes progress-spinner-color {\n  100%, 0%, 40%, 66%, 80%, 90% {\n    stroke: hsl(210, 9%, 31%) !important;\n  }\n  :is(:where(.dark) 100%),:is(:where(.dark)  0%),:is(:where(.dark)  40%),:is(:where(.dark)  66%),:is(:where(.dark)  80%),:is(:where(.dark)  90%) {\n    stroke: hsl(240, 4%, 90%) !important;\n  }\n}\n@keyframes progress-spinner-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n.p-dialog .p-dialog-content-scroll {\n  overflow-y: auto;\n  animation: hideScroll 800ms backwards;\n}\n\n.p-scrolltop.p-link {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(0 0% 30% / var(--tw-bg-opacity)) !important;\n}\n\n:is(:where(.dark) .p-scrolltop.p-link) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(210 14% 89% / var(--tw-bg-opacity)) !important;\n}\n.p-scrolltop .p-scrolltop-icon {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\n:is(:where(.dark) .p-scrolltop .p-scrolltop-icon) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\n\n.p-link:focus {\n  box-shadow: 0 0 0 0.2rem #aab1b9;\n}\n\n@keyframes hideScroll {\n  from, to {\n    overflow-y: hidden;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@media screen and (max-width: 960px) {\n  .customized-timeline .p-timeline-event:nth-child(even) {\n    flex-direction: row !important;\n  }\n  .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content {\n    text-align: left !important;\n  }\n  .customized-timeline .p-timeline-event-opposite {\n    display: none;\n  }\n  .customized-timeline .p-card {\n    margin-top: 1rem;\n  }\n}\n:not(pre) > pre {\n  --tw-bg-opacity: 1;\n  background-color: hsl(74 7% 15% / var(--tw-bg-opacity));\n}\n:is(:where(.dark) :not(pre) > pre) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(60 28% 96% / var(--tw-bg-opacity));\n}\n\npre {\n  --tw-text-opacity: 1;\n  color: hsl(60 28% 96% / var(--tw-text-opacity));\n}\n\n:is(:where(.dark) pre) {\n  --tw-text-opacity: 1;\n  color: hsl(74 7% 15% / var(--tw-text-opacity));\n}\n\npre {\n  padding: 0.3rem;\n  margin: 0.5em 0;\n  border-radius: 0.3em;\n  background: none;\n  font-family: Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;\n  font-size: 1em;\n  text-align: left;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  hyphens: none;\n  text-shadow: none;\n}\n\ncode[class*=language-] {\n  font-size: 0.7rem;\n  max-width: calc(100vw - 4rem);\n  display: grid;\n  grid-auto-columns: auto;\n  text-shadow: none;\n  white-space: normal;\n}\n\ncode {\n  --tw-bg-opacity: 1;\n  background-color: hsl(74 7% 15% / var(--tw-bg-opacity));\n}\n\n:is(:where(.dark) code) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(60 28% 96% / var(--tw-bg-opacity));\n}\n\ncode {\n  --tw-text-opacity: 1;\n  color: hsl(60 28% 96% / var(--tw-text-opacity));\n}\n\n:is(:where(.dark) code) {\n  --tw-text-opacity: 1;\n  color: hsl(74 7% 15% / var(--tw-text-opacity));\n}\n\ncode {\n  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;\n  font-size: 0.7rem;\n  border-radius: 5px;\n  padding: 0.2rem;\n  text-shadow: none;\n}\n\n#container {\n  --tw-bg-opacity: 1;\n  background-color: hsl(0 0% 92% / var(--tw-bg-opacity));\n}\n\n:is(:where(.dark) #container) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(214 18% 15% / var(--tw-bg-opacity));\n}\n\n#container {\n  min-height: 100vh;\n  display: grid;\n  grid-template: 1fr/18rem minmax(18rem, 65rem);\n  justify-content: center;\n}\n#container .welcome {\n  height: 100vh;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  scroll-snap-align: end;\n}\n#container .welcome__content h1 {\n  font-size: clamp(1rem, 3vw + 1rem, 4rem);\n  position: relative;\n  font-family: \"Source Code Pro\", monospace;\n  width: max-content;\n}\n#container .welcome__content h1::before, #container .welcome__content h1::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n#container .welcome__content h1::before {\n  background: var(--typewriter-bg);\n  animation: typewriter var(--typewriterSpeed) steps(var(--typewriterCharacters)) 1s forwards;\n}\n#container .welcome__content h1::after {\n  width: 0.125em;\n  background: var(--black);\n  animation: typewriter var(--typewriterSpeed) steps(var(--typewriterCharacters)) 1s forwards, blink 750ms steps(var(--typewriterCharacters)) infinite;\n}\n#container .welcome__content__subtitle {\n  color: var(--black);\n  margin: 5rem 0;\n  font-size: 2rem;\n  font-weight: 400;\n  opacity: 0;\n  transform: translateY(3rem);\n  animation: fadeInUp 2s ease calc(var(--typewriterSpeed) + 2s) forwards;\n}\n#container .welcome__content__goto {\n  opacity: 0;\n  animation: bounce 1.5s infinite calc(var(--typewriterSpeed) + 3s), visibility 1.5s forwards calc(var(--typewriterSpeed) + 3s);\n}\n#container .welcome__content__goto:hover {\n  cursor: pointer;\n}\n@keyframes typewriter {\n  to {\n    left: 100%;\n  }\n}\n@keyframes blink {\n  to {\n    background: transparent;\n  }\n}\n@keyframes visibility {\n  to {\n    opacity: 0.8;\n  }\n}\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-30px);\n  }\n  60% {\n    transform: translateY(-15px);\n  }\n}\n@keyframes fadeInUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n#container > aside {\n  padding: 2rem 0;\n  margin: 0 1rem;\n}\n#container > main {\n  scroll-snap-align: start;\n  display: flex;\n  padding: 2rem 1rem;\n}\n#container .scroll-wrapper {\n  width: 100%;\n  height: 0.2rem;\n  position: fixed;\n  inset: 0 0 auto;\n  z-index: 98;\n}\n#container .scroll-wrapper #scroll-tracker {\n  --tw-bg-opacity: 1;\n  background-color: hsl(180 0% 30% / var(--tw-bg-opacity));\n}\n:is(:where(.dark) #container .scroll-wrapper #scroll-tracker) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(210 14% 89% / var(--tw-bg-opacity));\n}\n#container .scroll-wrapper #scroll-tracker {\n  position: fixed;\n  inset: 0 0 auto;\n  height: 0.2rem;\n  width: 0;\n  z-index: 99;\n}\n\n.spinner {\n  animation: progress-spinner-dash 1.5s ease-in-out infinite, progress-spinner-color 6s ease-in-out infinite;\n}\n\n@keyframes progress-spinner-color {\n  100%, 0%, 40%, 66%, 80%, 90% {\n    stroke: hsl(210, 9%, 31%);\n  }\n  :is(:where(.dark) 100%),:is(:where(.dark)  0%),:is(:where(.dark)  40%),:is(:where(.dark)  66%),:is(:where(.dark)  80%),:is(:where(.dark)  90%) {\n    stroke: hsl(240, 4%, 90%);\n  }\n}\n@keyframes progress-spinner-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n@media print, screen and (max-width: 960px) {\n  #container {\n    grid-template-columns: minmax(18rem, 65rem);\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3N0eWxlcy9vdmVycmlkZS9wcmltZW5nLnNjc3MiLCJhcHAuY29tcG9uZW50LnNjc3MiLCIuLi9zdHlsZXMvb3ZlcnJpZGUvbmd4LW1hcmtkb3duLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsa0JBQUE7QUNDRjs7QURHRTtFQUFBLDZCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBLDZCQUFBO0VBQUE7QUFBQTs7QUFERjtFQUVFLGNBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUk7RUFBQSxrQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFLRjtFQUFBLDZCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBLDZCQUFBO0VBQUE7QUFBQTs7QUFDQTtFQUFBLCtCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBLCtCQUFBO0VBQUE7QUFBQTs7QUFHRjtFQUNFLGFBQUE7QUNBRjs7QURJRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0RKO0FETUk7O0VBQUEsNkJBQUE7RUFBQTtBQUFBO0FBQUE7O0VBQUEsNkJBQUE7RUFBQTtBQUFBO0FBQ0E7O0VBQUEsK0JBQUE7RUFBQTtBQUFBO0FBQUE7O0VBQUEsK0JBQUE7RUFBQTtBQUFBO0FBQ0E7O0VBQUEsaUNBQUE7RUFBQTtBQUFBO0FBQUE7O0VBQUEsaUNBQUE7RUFBQTtBQUFBOztBQU1BO0VBQUEsNkJBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEsNkJBQUE7RUFBQTtBQUFBOztBQUNBO0VBQUEsK0JBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEsK0JBQUE7RUFBQTtBQUFBOztBQUZGO0VBR0UsZ0JBQUE7RUFDQSxTQUFBO0FDSko7QURPSTtFQUFBLDZCQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsNkJBQUE7RUFBQTtBQUFBOztBQU1BO0VBQUEsNkJBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEsNkJBQUE7RUFBQTtBQUFBO0FBR0Y7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFD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QSxRQUFBO0VBQ0EsV0FBQTtBQXdUTjs7QUFuVEE7RUFDRSwwR0FBQTtBQXNURjs7QUFuVEE7RUFPSTtJQUFBO0VBQUE7RUFBQTtJQUFBO0VBQUE7QUFrVEo7QUE5U0E7RUFDRTtJQUNFLHdCQUFBO0lBQ0Esb0JBQUE7RUFnVEY7RUE5U0E7SUFDRSx5QkFBQTtJQUNBLHdCQUFBO0VBZ1RGO0VBOVNBO0lBQ0UseUJBQUE7SUFDQSx5QkFBQTtFQWdURjtBQUNGO0FBN1NBO0VBQ0U7SUFDRSwyQ0FBQTtJQUNBLGVBQUE7RUErU0Y7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucC1jYXJkLXRpdGxlLFxuLnAtY2FyZC1zdWJ0aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnAtcHJvZ3Jlc3NiYXIge1xuICBAYXBwbHkgYmctcHJvZ3Jlc3MtYmFyLWJnIGRhcms6YmctZGFyay1wcm9ncmVzcy1iYXItYmcgI3shaW1wb3J0YW50fTtcbiAgaGVpZ2h0OiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAucC1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gICAgQGFwcGx5IGJnLXByb2dyZXNzLWJhciBkYXJrOmJnLWRhcmstcHJvZ3Jlc3MtYmFyO1xuICB9XG59XG5cbi5wLXRhZyB7XG4gIEBhcHBseSBiZy1wcm9ncmVzcy1iYXIgZGFyazpiZy1kYXJrLXByb2dyZXNzLWJhciAjeyFpbXBvcnRhbnR9O1xuICBAYXBwbHkgdGV4dC1kYXJrLXRleHQtY29sb3IgZGFyazp0ZXh0LXRleHQtY29sb3IgI3shaW1wb3J0YW50fTtcbn1cblxucC1zY3JvbGx0b3AgPiBidXR0b24ucC1zY3JvbGx0b3Age1xuICB6LWluZGV4OiAxMDA0O1xufVxuXG5wLXBhbmVsIHtcbiAgLnAtcGFuZWwtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnAtcGFuZWwtaGVhZGVyLFxuICAucC1wYW5lbC1jb250ZW50IHtcbiAgICBAYXBwbHkgYmctcGFuZWwtdGl0bGUtYmcgZGFyazpiZy1kYXJrLXBhbmVsLXRpdGxlLWJnICN7IWltcG9ydGFudH07XG4gICAgQGFwcGx5IHRleHQtdGV4dC1jb2xvciBkYXJrOnRleHQtZGFyay10ZXh0LWNvbG9yICN7IWltcG9ydGFudH07XG4gICAgQGFwcGx5IGJvcmRlci1wYW5lbC1ib3JkZXIgZGFyazpib3JkZXItZGFyay1wYW5lbC1ib3JkZXIgI3shaW1wb3J0YW50fTtcbiAgfVxufVxuXG5wLWNhcmQge1xuICA+IGRpdi5wLWNhcmQge1xuICAgIEBhcHBseSBiZy1jYXJkLWJnIGRhcms6YmctZGFyay1jYXJkLWJnICN7IWltcG9ydGFudH07XG4gICAgQGFwcGx5IHRleHQtdGV4dC1jb2xvciBkYXJrOnRleHQtZGFyay10ZXh0LWNvbG9yICN7IWltcG9ydGFudH07XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDJyZW07XG4gIH1cbiAgJi5hbHQtY2FyZCA+IGRpdi5wLWNhcmQge1xuICAgIEBhcHBseSBiZy1jYXJkLWJnIGRhcms6YmctZGFyay1ib2R5LWJnICN7IWltcG9ydGFudH07XG4gIH1cbn1cblxuLnAtbWVudSB7XG4gICYucC1tZW51LW92ZXJsYXkge1xuICAgIEBhcHBseSBiZy1tZW51LWJnIGRhcms6YmctZGFyay1tZW51LWJnICN7IWltcG9ydGFudH07XG4gIH1cblxuICAucC1zdWJtZW51LWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBAYXBwbHkgYmctbWVudS1iZyBkYXJrOmJnLWRhcmstbWVudS1iZyAjeyFpbXBvcnRhbnR9O1xuICB9XG5cbiAgLnAtbWVudWl0ZW0tbGluayAucC1tZW51aXRlbS10ZXh0LFxuICAucC1zdWJtZW51LWhlYWRlciB7XG4gICAgQGFwcGx5IHRleHQtdGV4dC1jb2xvciBkYXJrOnRleHQtZGFyay10ZXh0LWNvbG9yICN7IWltcG9ydGFudH07XG4gIH1cblxuICAucC1tZW51aXRlbS1pY29uIHtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwcywgYmFja2dyb3VuZC1jb2xvciAwcztcbiAgfVxuXG4gIC5wLW1lbnVpdGVtLWxpbms6bm90KC5wLWRpc2FibGVkKTpob3ZlciB7XG4gICAgQGFwcGx5IGJnLW1lbnUtaXRlbS1ob3ZlciBkYXJrOmJnLWRhcmstbWVudS1pdGVtLWhvdmVyICN7IWltcG9ydGFudH07XG4gICAgLnAtbWVudWl0ZW0tdGV4dCxcbiAgICAucC1tZW51aXRlbS1pY29uIHtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDBzLCBiYWNrZ3JvdW5kLWNvbG9yIDBzO1xuICAgICAgQGFwcGx5IHRleHQtdGV4dC1jb2xvciBkYXJrOnRleHQtZGFyay10ZXh0LWNvbG9yICN7IWltcG9ydGFudH07XG4gICAgfVxuICB9XG59XG5cbmJ1dHRvbi5wLWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbik7XG4gIEBhcHBseSB0ZXh0LW1lbnUtYnV0dG9uIGRhcms6dGV4dC1kYXJrLW1lbnUtYnV0dG9uICN7IWltcG9ydGFudH07XG5cbiAgJi5wLWJ1dHRvbi5wLWJ1dHRvbi10ZXh0LFxuICAmLnAtYnV0dG9uLnAtYnV0dG9uLXRleHQ6ZW5hYmxlZDpob3ZlcixcbiAgJi5wLWJ1dHRvbi5wLWJ1dHRvbi10ZXh0OmVuYWJsZWQ6YWN0aXZlIHtcbiAgICBAYXBwbHkgdGV4dC1tZW51LWJ1dHRvbiBkYXJrOnRleHQtZGFyay1tZW51LWJ1dHRvbiAjeyFpbXBvcnRhbnR9O1xuICB9XG5cbiAgJi5wLWJ1dHRvbi5wLWJ1dHRvbi10ZXh0OmVuYWJsZWQ6aG92ZXIsXG4gICYucC1idXR0b24ucC1idXR0b24tdGV4dDplbmFibGVkOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSg3NSwgODUsIDk0LCAwLjA0KTtcbiAgfVxuXG4gICYucC1idXR0b246Zm9jdXMsXG4gICYucC1idXR0b24ucC1idXR0b24tdGV4dDplbmFibGVkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICNhYWIxYjk7XG4gIH1cbn1cblxucC1jaGlwW2xhYmVsPSdnaWxsZXMuZ2FyZGV0QGdtYWlsLmNvbSddIHtcbiAgLS1wYXJhbXM6IDAuOHMgZWFzZTtcblxuICAucC1jaGlwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciB2YXIoLS1wYXJhbXMpLCBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLXBhcmFtcyk7XG4gICAgei1pbmRleDogMDtcbiAgICBAYXBwbHkgYmctY2hpcC1iZyBkYXJrOmJnLWRhcmstY2hpcC1iZyAjeyFpbXBvcnRhbnR9O1xuICAgIEBhcHBseSB0ZXh0LWRhcmstdGV4dC1jb2xvciBkYXJrOnRleHQtdGV4dC1jb2xvciAjeyFpbXBvcnRhbnR9O1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgICBAYXBwbHkgYmctZGFyay1jaGlwLWJnIGRhcms6YmctY2hpcC1iZyAjeyFpbXBvcnRhbnR9O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLXBhcmFtcyksIG9wYWNpdHkgdmFyKC0tcGFyYW1zKTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIEBhcHBseSB0ZXh0LXRleHQtY29sb3IgZGFyazp0ZXh0LWRhcmstdGV4dC1jb2xvciAjeyFpbXBvcnRhbnR9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnAtdGltZWxpbmUtZXZlbnQtY29udGVudCxcbi5wLXRpbWVsaW5lLWV2ZW50LW9wcG9zaXRlIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5wLWJ1dHRvbi5wLWJ1dHRvbi1zZWNvbmRhcnkucC1idXR0b24tb3V0bGluZWQge1xuICBjb2xvcjogdmFyKC0tZGFyayk7XG59XG5cbi5taXNzaW9uIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcblxuICAmX19hbmltYXRpb24tbGVmdCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwcHgpO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgLW1vei1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAtby1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAtbXMtYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gIH1cblxuICAmX19hbmltYXRpb24tcmlnaHQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQwcHgpO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgLW1vei1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAtby1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAtbXMtYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gIH1cblxuICAmX19idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLnAtdGltZWxpbmUtZXZlbnQtY29udGVudCA+IHAtY2FyZCA+IC5wLWNhcmQgPiAucC1jYXJkLWJvZHkgPiAucC1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucC10aW1lbGluZSAucC10aW1lbGluZS1ldmVudC1jb25uZWN0b3Ige1xuICBAYXBwbHkgYmctdGltZWxpbmUtY29ubmVjdG9yIGRhcms6YmctZGFyay10aW1lbGluZS1jb25uZWN0b3IgI3shaW1wb3J0YW50fTtcbn1cblxuLnAtY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ucC1kaWFsb2cge1xuICAucC1kaWFsb2ctaGVhZGVyLFxuICAucC1kaWFsb2ctY29udGVudCB7XG4gICAgQGFwcGx5IGJnLWNhcmQtYmcgZGFyazpiZy1kYXJrLWNhcmQtYmcgI3shaW1wb3J0YW50fTtcbiAgICBAYXBwbHkgdGV4dC10ZXh0LWNvbG9yIGRhcms6dGV4dC1kYXJrLXRleHQtY29sb3IgI3shaW1wb3J0YW50fTtcbiAgICAvLyBUT0RPOiBmaXggb3ZlcmZsb3cgb24gYW5pbWF0aW9uXG4gICAgLy9vdmVyZmxvdzogaGlkZGVuICN7IWltcG9ydGFudH07XG4gIH1cblxuICAucC1kaWFsb2ctaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgLnAtZGlhbG9nLWhlYWRlci1pY29ucyB7XG4gICAgICBncmlkLWFyZWE6IDEgLyAzIC8gMSAvIDQ7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgfVxuXG4gIC5wLWRpYWxvZy1jb250ZW50IHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG5cbiAgICAucC1wcm9ncmVzcy1zcGlubmVyLWNpcmNsZSB7XG4gICAgICBhbmltYXRpb246IHByb2dyZXNzLXNwaW5uZXItZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlLCBwcm9ncmVzcy1zcGlubmVyLWNvbG9yIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcHJvZ3Jlc3Mtc3Bpbm5lci1jb2xvciB7XG4gICAgICAxMDAlLFxuICAgICAgMCUsXG4gICAgICA0MCUsXG4gICAgICA2NiUsXG4gICAgICA4MCUsXG4gICAgICA5MCUge1xuICAgICAgICBAYXBwbHkgc3Ryb2tlLXRleHQtY29sb3IgZGFyazpzdHJva2UtZGFyay10ZXh0LWNvbG9yICN7IWltcG9ydGFudH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBwcm9ncmVzcy1zcGlubmVyLWRhc2gge1xuICAgICAgMCUge1xuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgICAgfVxuICAgICAgNTAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNXB4O1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTI0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnAtZGlhbG9nLWNvbnRlbnQtc2Nyb2xsIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGFuaW1hdGlvbjogaGlkZVNjcm9sbCA4MDBtcyBiYWNrd2FyZHM7XG4gIH1cbn1cblxuLnAtc2Nyb2xsdG9wIHtcbiAgJi5wLWxpbmsge1xuICAgIEBhcHBseSBiZy1zY3JvbGwtYmcgZGFyazpiZy1kYXJrLXNjcm9sbC1iZyAjeyFpbXBvcnRhbnR9O1xuICB9XG5cbiAgLnAtc2Nyb2xsdG9wLWljb24ge1xuICAgIEBhcHBseSB0ZXh0LWRhcmstdGV4dC1jb2xvciBkYXJrOnRleHQtdGV4dC1jb2xvciAjeyFpbXBvcnRhbnR9O1xuICB9XG59XG5cbi5wLWxpbms6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gI2FhYjFiOTtcbn1cblxuXG5Aa2V5ZnJhbWVzIGhpZGVTY3JvbGwge1xuICBmcm9tLFxuICB0byB7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG5ALW8ta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG5ALW1zLWtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmN1c3RvbWl6ZWQtdGltZWxpbmUge1xuICAgIC5wLXRpbWVsaW5lLWV2ZW50Om50aC1jaGlsZChldmVuKSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG5cbiAgICAgIC5wLXRpbWVsaW5lLWV2ZW50LWNvbnRlbnQge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnAtdGltZWxpbmUtZXZlbnQtb3Bwb3NpdGUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAucC1jYXJkIHtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzcmMvc3R5bGVzL292ZXJyaWRlL3ByaW1lbmcnO1xuQHVzZSAnc3JjL3N0eWxlcy9vdmVycmlkZS9uZ3gtbWFya2Rvd24nO1xuXG4jY29udGFpbmVyIHtcbiAgQGFwcGx5IGJnLWJvZHktYmcgZGFyazpiZy1kYXJrLWJvZHktYmc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxOHJlbSBtaW5tYXgoMThyZW0sIDY1cmVtKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLndlbGNvbWUge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBlbmQ7XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzdncgKyAxcmVtLCA0cmVtKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LWZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsIG1vbm9zcGFjZTtcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuXG4gICAgICAgICY6OmJlZm9yZSxcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR5cGV3cml0ZXItYmcpO1xuICAgICAgICAgIGFuaW1hdGlvbjogdHlwZXdyaXRlciB2YXIoLS10eXBld3JpdGVyU3BlZWQpIHN0ZXBzKHZhcigtLXR5cGV3cml0ZXJDaGFyYWN0ZXJzKSkgMXMgZm9yd2FyZHM7XG4gICAgICAgIH1cblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgd2lkdGg6IDAuMTI1ZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xuICAgICAgICAgIGFuaW1hdGlvbjogdHlwZXdyaXRlciB2YXIoLS10eXBld3JpdGVyU3BlZWQpIHN0ZXBzKHZhcigtLXR5cGV3cml0ZXJDaGFyYWN0ZXJzKSkgMXMgZm9yd2FyZHMsXG4gICAgICAgICAgICBibGluayA3NTBtcyBzdGVwcyh2YXIoLS10eXBld3JpdGVyQ2hhcmFjdGVycykpIGluZmluaXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICZfX3N1YnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAgICAgbWFyZ2luOiA1cmVtIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNyZW0pO1xuICAgICAgICBhbmltYXRpb246IGZhZGVJblVwIDJzIGVhc2UgY2FsYyh2YXIoLS10eXBld3JpdGVyU3BlZWQpICsgMnMpIGZvcndhcmRzO1xuICAgICAgfVxuXG4gICAgICAmX19nb3RvIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYW5pbWF0aW9uOiBib3VuY2UgMS41cyBpbmZpbml0ZSBjYWxjKHZhcigtLXR5cGV3cml0ZXJTcGVlZCkgKyAzcyksXG4gICAgICAgICAgdmlzaWJpbGl0eSAxLjVzIGZvcndhcmRzIGNhbGModmFyKC0tdHlwZXdyaXRlclNwZWVkKSArIDNzKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHR5cGV3cml0ZXIge1xuICAgICAgdG8ge1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgYmxpbmsge1xuICAgICAgdG8ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHZpc2liaWxpdHkge1xuICAgICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBib3VuY2Uge1xuICAgICAgMCUsXG4gICAgICAyMCUsXG4gICAgICA1MCUsXG4gICAgICA4MCUsXG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgICAgNDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgICAgIH1cbiAgICAgIDYwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBmYWRlSW5VcCB7XG4gICAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICA+IGFzaWRlIHtcbiAgICBwYWRkaW5nOiAycmVtIDA7XG4gICAgbWFyZ2luOiAwIDFyZW07XG4gIH1cblxuICA+IG1haW4ge1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgfVxuXG4gIC5zY3JvbGwtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwLjJyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGluc2V0OiAwIDAgYXV0bztcbiAgICB6LWluZGV4OiA5ODtcblxuICAgICNzY3JvbGwtdHJhY2tlciB7XG4gICAgICBAYXBwbHkgYmctcHJvZ3Jlc3MgZGFyazpiZy1kYXJrLXByb2dyZXNzO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgaW5zZXQ6IDAgMCBhdXRvO1xuICAgICAgaGVpZ2h0OiAwLjJyZW07XG4gICAgICB3aWR0aDogMDtcbiAgICAgIHotaW5kZXg6IDk5O1xuICAgIH1cbiAgfVxufVxuXG4uc3Bpbm5lciB7XG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3Mtc3Bpbm5lci1kYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUsIHByb2dyZXNzLXNwaW5uZXItY29sb3IgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3Mtc3Bpbm5lci1jb2xvciB7XG4gIDEwMCUsXG4gIDAlLFxuICA0MCUsXG4gIDY2JSxcbiAgODAlLFxuICA5MCUge1xuICAgIEBhcHBseSBzdHJva2UtdGV4dC1jb2xvciBkYXJrOnN0cm9rZS1kYXJrLXRleHQtY29sb3I7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcy1zcGlubmVyLWRhc2gge1xuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1cHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNHB4O1xuICB9XG59XG5cbkBtZWRpYSBwcmludCwgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAjY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxOHJlbSwgNjVyZW0pO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgfVxufVxuIiwiOm5vdChwcmUpID4gcHJlIHtcbiAgQGFwcGx5IGJnLXByZS1iZyBkYXJrOmJnLWRhcmstcHJlLWJnO1xufVxuXG5wcmUge1xuICBAYXBwbHkgdGV4dC1wcmUtdGV4dCBkYXJrOnRleHQtZGFyay1wcmUtdGV4dDtcbiAgcGFkZGluZzogMC4zcmVtO1xuICBtYXJnaW46IDAuNWVtIDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LWZhbWlseTogQ29uc29sYXMsIE1vbmFjbywgJ0FuZGFsZSBNb25vJywgJ1VidW50dSBNb25vJywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIC1tb3otdGFiLXNpemU6IDQ7XG4gIHRhYi1zaXplOiA0O1xuICAtd2Via2l0LWh5cGhlbnM6IG5vbmU7XG4gIGh5cGhlbnM6IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG5jb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10ge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNHJlbSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1jb2x1bW5zOiBhdXRvO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuY29kZSB7XG4gIEBhcHBseSBiZy1wcmUtYmcgZGFyazpiZy1kYXJrLXByZS1iZztcbiAgQGFwcGx5IHRleHQtcHJlLXRleHQgZGFyazp0ZXh0LWRhcmstcHJlLXRleHQ7XG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBTRiBNb25vLCBNZW5sbywgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIHRleHQtc2hhZG93OiBub25lO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvb3ZlcnJpZGUvcHJpbWVuZy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL292ZXJyaWRlL25neC1tYXJrZG93bi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtCQUFBO0FDQ0Y7O0FER0U7RUFBQSw2QkFBQTtFQUFBLG9FQUFBO0FBQUE7O0FBQUE7RUFBQSw2QkFBQTtFQUFBLG1FQUFBO0FBQUE7O0FBREY7RUFFRSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVJO0VBQUEsa0JBQUE7RUFBQSx3REFBQTtBQUFBO0FBQUE7RUFBQSxrQkFBQTtFQUFBLHlEQUFBO0FBQUE7O0FBS0Y7RUFBQSw2QkFBQTtFQUFBLG1FQUFBO0FBQUE7O0FBQUE7RUFBQSw2QkFBQTtFQUFBLG9FQUFBO0FBQUE7O0FBQ0E7RUFBQSwrQkFBQTtFQUFBLDBEQUFBO0FBQUE7O0FBQUE7RUFBQSwrQkFBQTtFQUFBLDBEQUFBO0FBQUE7O0FBR0Y7RUFDRSxhQUFBO0FDQUY7O0FESUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNESjtBRE1JOztFQUFBLDZCQUFBO0VBQUEsb0VBQUE7QUFBQTtBQUFBOztFQUFBLDZCQUFBO0VBQUEsb0VBQUE7QUFBQTtBQUNBOztFQUFBLCtCQUFBO0VBQUEsMERBQUE7QUFBQTtBQUFBOztFQUFBLCtCQUFBO0VBQUEsMERBQUE7QUFBQTtBQUNBOztFQUFBLGlDQUFBO0VBQUEsb0VBQUE7QUFBQTtBQUFBOztFQUFBLGlDQUFBO0VBQUEsb0VBQUE7QUFBQTs7QUFNQTtFQUFBLDZCQUFBO0VBQUEsa0VBQUE7QUFBQTs7QUFBQTtFQUFBLDZCQUFBO0VBQUEsb0VBQUE7QUFBQTs7QUFDQTtFQUFBLCtCQUFBO0VBQUEsMERBQUE7QUFBQTs7QUFBQTtFQUFBLCtCQUFBO0VBQUEsMERBQUE7QUFBQTs7QUFGRjtFQUdFLGdC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RUFtVU47QUFDRjtBQWhVSTtFQUNFO0lBQ0UsWUFBQTtFQWtVTjtBQUNGO0FBL1RJO0VBQ0U7SUFLRSx3QkFBQTtFQTZUTjtFQTNUSTtJQUNFLDRCQUFBO0VBNlROO0VBM1RJO0lBQ0UsNEJBQUE7RUE2VE47QUFDRjtBQTFUSTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBNFROO0FBQ0Y7QUF4VEU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQTBUSjtBQXZURTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBeVRKO0FBdFRFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF3VEo7QUFyVE07RUFBQSxrQkFBQTtFQUFBLHdEQUFBO0FBQUE7QUFBQTtFQUFBLGtCQUFBO0VBQUEseURBQUE7QUFBQTtBQURGO0VBRUUsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUF3VE47O0FBblRBO0VBQ0UsMEdBQUE7QUFzVEY7O0FBblRBO0VBT0k7SUFBQSx5QkFBQTtFQUFBO0VBQUE7SUFBQSx5QkFBQTtFQUFBO0FBa1RKO0FBOVNBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLG9CQUFBO0VBZ1RGO0VBOVNBO0lBQ0UseUJBQUE7SUFDQSx3QkFBQTtFQWdURjtFQTlTQTtJQUNFLHlCQUFBO0lBQ0EseUJBQUE7RUFnVEY7QUFDRjtBQTdTQTtFQUNFO0lBQ0UsMkNBQUE7SUFDQSxlQUFBO0VBK1NGO0FBQ0Y7QUEwTEEsdzVyQkFBdzVyQiIsInNvdXJjZXNDb250ZW50IjpbIi5wLWNhcmQtdGl0bGUsXG4ucC1jYXJkLXN1YnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucC1wcm9ncmVzc2JhciB7XG4gIEBhcHBseSBiZy1wcm9ncmVzcy1iYXItYmcgZGFyazpiZy1kYXJrLXByb2dyZXNzLWJhci1iZyAjeyFpbXBvcnRhbnR9O1xuICBoZWlnaHQ6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gIC5wLXByb2dyZXNzYmFyLXZhbHVlIHtcbiAgICBAYXBwbHkgYmctcHJvZ3Jlc3MtYmFyIGRhcms6YmctZGFyay1wcm9ncmVzcy1iYXI7XG4gIH1cbn1cblxuLnAtdGFnIHtcbiAgQGFwcGx5IGJnLXByb2dyZXNzLWJhciBkYXJrOmJnLWRhcmstcHJvZ3Jlc3MtYmFyICN7IWltcG9ydGFudH07XG4gIEBhcHBseSB0ZXh0LWRhcmstdGV4dC1jb2xvciBkYXJrOnRleHQtdGV4dC1jb2xvciAjeyFpbXBvcnRhbnR9O1xufVxuXG5wLXNjcm9sbHRvcCA+IGJ1dHRvbi5wLXNjcm9sbHRvcCB7XG4gIHotaW5kZXg6IDEwMDQ7XG59XG5cbnAtcGFuZWwge1xuICAucC1wYW5lbC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAucC1wYW5lbC1oZWFkZXIsXG4gIC5wLXBhbmVsLWNvbnRlbnQge1xuICAgIEBhcHBseSBiZy1wYW5lbC10aXRsZS1iZyBkYXJrOmJnLWRhcmstcGFuZWwtdGl0bGUtYmcgI3shaW1wb3J0YW50fTtcbiAgICBAYXBwbHkgdGV4dC10ZXh0LWNvbG9yIGRhcms6dGV4dC1kYXJrLXRleHQtY29sb3IgI3shaW1wb3J0YW50fTtcbiAgICBAYXBwbHkgYm9yZGVyLXBhbmVsLWJvcmRlciBkYXJrOmJvcmRlci1kYXJrLXBhbmVsLWJvcmRlciAjeyFpbXBvcnRhbnR9O1xuICB9XG59XG5cbnAtY2FyZCB7XG4gID4gZGl2LnAtY2FyZCB7XG4gICAgQGFwcGx5IGJnLWNhcmQtYmcgZGFyazpiZy1kYXJrLWNhcmQtYmcgI3shaW1wb3J0YW50fTtcbiAgICBAYXBwbHkgdGV4dC10ZXh0LWNvbG9yIGRhcms6dGV4dC1kYXJrLXRleHQtY29sb3IgI3shaW1wb3J0YW50fTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMnJlbTtcbiAgfVxuICAmLmFsdC1jYXJkID4gZGl2LnAtY2FyZCB7XG4gICAgQGFwcGx5IGJnLWNhcmQtYmcgZGFyazpiZy1kYXJrLWJvZHktYmcgI3shaW1wb3J0YW50fTtcbiAgfVxufVxuXG4ucC1tZW51IHtcbiAgJi5wLW1lbnUtb3ZlcmxheSB7XG4gICAgQGFwcGx5IGJnLW1lbnUtYmcgZGFyazpiZy1kYXJrLW1lbnUtYmcgI3shaW1wb3J0YW50fTtcbiAgfVxuXG4gIC5wLXN1Ym1lbnUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIEBhcHBseSBiZy1tZW51LWJnIGRhcms6YmctZGFyay1tZW51LWJnICN7IWltcG9ydGFudH07XG4gIH1cblxuICAucC1tZW51aXRlbS1saW5rIC5wLW1lbnVpdGVtLXRleHQsXG4gIC5wLXN1Ym1lbnUtaGVhZGVyIHtcbiAgICBAYXBwbHkgdGV4dC10ZXh0LWNvbG9yIGRhcms6dGV4dC1kYXJrLXRleHQtY29sb3IgI3shaW1wb3J0YW50fTtcbiAgfVxuXG4gIC5wLW1lbnVpdGVtLWljb24ge1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDBzLCBiYWNrZ3JvdW5kLWNvbG9yIDBzO1xuICB9XG5cbiAgLnAtbWVudWl0ZW0tbGluazpub3QoLnAtZGlzYWJsZWQpOmhvdmVyIHtcbiAgICBAYXBwbHkgYmctbWVudS1pdGVtLWhvdmVyIGRhcms6YmctZGFyay1tZW51LWl0ZW0taG92ZXIgI3shaW1wb3J0YW50fTtcbiAgICAucC1tZW51aXRlbS10ZXh0LFxuICAgIC5wLW1lbnVpdGVtLWljb24ge1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMHMsIGJhY2tncm91bmQtY29sb3IgMHM7XG4gICAgICBAYXBwbHkgdGV4dC10ZXh0LWNvbG9yIGRhcms6dGV4dC1kYXJrLXRleHQtY29sb3IgI3shaW1wb3J0YW50fTtcbiAgICB9XG4gIH1cbn1cblxuYnV0dG9uLnAtYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnV0dG9uKTtcbiAgQGFwcGx5IHRleHQtbWVudS1idXR0b24gZGFyazp0ZXh0LWRhcmstbWVudS1idXR0b24gI3shaW1wb3J0YW50fTtcblxuICAmLnAtYnV0dG9uLnAtYnV0dG9uLXRleHQsXG4gICYucC1idXR0b24ucC1idXR0b24tdGV4dDplbmFibGVkOmhvdmVyLFxuICAmLnAtYnV0dG9uLnAtYnV0dG9uLXRleHQ6ZW5hYmxlZDphY3RpdmUge1xuICAgIEBhcHBseSB0ZXh0LW1lbnUtYnV0dG9uIGRhcms6dGV4dC1kYXJrLW1lbnUtYnV0dG9uICN7IWltcG9ydGFudH07XG4gIH1cblxuICAmLnAtYnV0dG9uLnAtYnV0dG9uLXRleHQ6ZW5hYmxlZDpob3ZlcixcbiAgJi5wLWJ1dHRvbi5wLWJ1dHRvbi10ZXh0OmVuYWJsZWQ6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDc1LCA4NSwgOTQsIDAuMDQpO1xuICB9XG5cbiAgJi5wLWJ1dHRvbjpmb2N1cyxcbiAgJi5wLWJ1dHRvbi5wLWJ1dHRvbi10ZXh0OmVuYWJsZWQ6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gI2FhYjFiOTtcbiAgfVxufVxuXG5wLWNoaXBbbGFiZWw9J2dpbGxlcy5nYXJkZXRAZ21haWwuY29tJ10ge1xuICAtLXBhcmFtczogMC44cyBlYXNlO1xuXG4gIC5wLWNoaXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIHZhcigtLXBhcmFtcyksIGJhY2tncm91bmQtY29sb3IgdmFyKC0tcGFyYW1zKTtcbiAgICB6LWluZGV4OiAwO1xuICAgIEBhcHBseSBiZy1jaGlwLWJnIGRhcms6YmctZGFyay1jaGlwLWJnICN7IWltcG9ydGFudH07XG4gICAgQGFwcGx5IHRleHQtZGFyay10ZXh0LWNvbG9yIGRhcms6dGV4dC10ZXh0LWNvbG9yICN7IWltcG9ydGFudH07XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIEBhcHBseSBiZy1kYXJrLWNoaXAtYmcgZGFyazpiZy1jaGlwLWJnICN7IWltcG9ydGFudH07XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tcGFyYW1zKSwgb3BhY2l0eSB2YXIoLS1wYXJhbXMpO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgQGFwcGx5IHRleHQtdGV4dC1jb2xvciBkYXJrOnRleHQtZGFyay10ZXh0LWNvbG9yICN7IWltcG9ydGFudH07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ucC10aW1lbGluZS1ldmVudC1jb250ZW50LFxuLnAtdGltZWxpbmUtZXZlbnQtb3Bwb3NpdGUge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLnAtYnV0dG9uLnAtYnV0dG9uLXNlY29uZGFyeS5wLWJ1dHRvbi1vdXRsaW5lZCB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcbn1cblxuLm1pc3Npb24ge1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gICZfX2FuaW1hdGlvbi1sZWZ0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDBweCk7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgIC1vLWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgIC1tcy1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgfVxuXG4gICZfX2FuaW1hdGlvbi1yaWdodCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDBweCk7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgIC1vLWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgIC1tcy1hbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgfVxuXG4gICZfX2J1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG4ucC10aW1lbGluZS1ldmVudC1jb250ZW50ID4gcC1jYXJkID4gLnAtY2FyZCA+IC5wLWNhcmQtYm9keSA+IC5wLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5wLXRpbWVsaW5lIC5wLXRpbWVsaW5lLWV2ZW50LWNvbm5lY3RvciB7XG4gIEBhcHBseSBiZy10aW1lbGluZS1jb25uZWN0b3IgZGFyazpiZy1kYXJrLXRpbWVsaW5lLWNvbm5lY3RvciAjeyFpbXBvcnRhbnR9O1xufVxuXG4ucC1jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFyZW07XG59XG5cbi5wLWRpYWxvZyB7XG4gIC5wLWRpYWxvZy1oZWFkZXIsXG4gIC5wLWRpYWxvZy1jb250ZW50IHtcbiAgICBAYXBwbHkgYmctY2FyZC1iZyBkYXJrOmJnLWRhcmstY2FyZC1iZyAjeyFpbXBvcnRhbnR9O1xuICAgIEBhcHBseSB0ZXh0LXRleHQtY29sb3IgZGFyazp0ZXh0LWRhcmstdGV4dC1jb2xvciAjeyFpbXBvcnRhbnR9O1xuICAgIC8vIFRPRE86IGZpeCBvdmVyZmxvdyBvbiBhbmltYXRpb25cbiAgICAvL292ZXJmbG93OiBoaWRkZW4gI3shaW1wb3J0YW50fTtcbiAgfVxuXG4gIC5wLWRpYWxvZy1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG5cbiAgICAucC1kaWFsb2ctaGVhZGVyLWljb25zIHtcbiAgICAgIGdyaWQtYXJlYTogMSAvIDMgLyAxIC8gNDtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICB9XG5cbiAgLnAtZGlhbG9nLWNvbnRlbnQge1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcblxuICAgIC5wLXByb2dyZXNzLXNwaW5uZXItY2lyY2xlIHtcbiAgICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3Mtc3Bpbm5lci1kYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUsIHByb2dyZXNzLXNwaW5uZXItY29sb3IgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBwcm9ncmVzcy1zcGlubmVyLWNvbG9yIHtcbiAgICAgIDEwMCUsXG4gICAgICAwJSxcbiAgICAgIDQwJSxcbiAgICAgIDY2JSxcbiAgICAgIDgwJSxcbiAgICAgIDkwJSB7XG4gICAgICAgIEBhcHBseSBzdHJva2UtdGV4dC1jb2xvciBkYXJrOnN0cm9rZS1kYXJrLXRleHQtY29sb3IgI3shaW1wb3J0YW50fTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHByb2dyZXNzLXNwaW5uZXItZGFzaCB7XG4gICAgICAwJSB7XG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgICB9XG4gICAgICA1MCUge1xuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1cHg7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucC1kaWFsb2ctY29udGVudC1zY3JvbGwge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYW5pbWF0aW9uOiBoaWRlU2Nyb2xsIDgwMG1zIGJhY2t3YXJkcztcbiAgfVxufVxuXG4ucC1zY3JvbGx0b3Age1xuICAmLnAtbGluayB7XG4gICAgQGFwcGx5IGJnLXNjcm9sbC1iZyBkYXJrOmJnLWRhcmstc2Nyb2xsLWJnICN7IWltcG9ydGFudH07XG4gIH1cblxuICAucC1zY3JvbGx0b3AtaWNvbiB7XG4gICAgQGFwcGx5IHRleHQtZGFyay10ZXh0LWNvbG9yIGRhcms6dGV4dC10ZXh0LWNvbG9yICN7IWltcG9ydGFudH07XG4gIH1cbn1cblxuLnAtbGluazpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAjYWFiMWI5O1xufVxuXG5cbkBrZXlmcmFtZXMgaGlkZVNjcm9sbCB7XG4gIGZyb20sXG4gIHRvIHtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkAtby1rZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkAtbXMta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuY3VzdG9taXplZC10aW1lbGluZSB7XG4gICAgLnAtdGltZWxpbmUtZXZlbnQ6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcblxuICAgICAgLnAtdGltZWxpbmUtZXZlbnQtY29udGVudCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucC10aW1lbGluZS1ldmVudC1vcHBvc2l0ZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5wLWNhcmQge1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3NyYy9zdHlsZXMvb3ZlcnJpZGUvcHJpbWVuZyc7XG5AdXNlICdzcmMvc3R5bGVzL292ZXJyaWRlL25neC1tYXJrZG93bic7XG5cbiNjb250YWluZXIge1xuICBAYXBwbHkgYmctYm9keS1iZyBkYXJrOmJnLWRhcmstYm9keS1iZztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIDE4cmVtIG1pbm1heCgxOHJlbSwgNjVyZW0pO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAud2VsY29tZSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IGVuZDtcblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDN2dyArIDFyZW0sIDRyZW0pO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIENvZGUgUHJvJywgbW9ub3NwYWNlO1xuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG5cbiAgICAgICAgJjo6YmVmb3JlLFxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHlwZXdyaXRlci1iZyk7XG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBld3JpdGVyIHZhcigtLXR5cGV3cml0ZXJTcGVlZCkgc3RlcHModmFyKC0tdHlwZXdyaXRlckNoYXJhY3RlcnMpKSAxcyBmb3J3YXJkcztcbiAgICAgICAgfVxuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICB3aWR0aDogMC4xMjVlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjayk7XG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBld3JpdGVyIHZhcigtLXR5cGV3cml0ZXJTcGVlZCkgc3RlcHModmFyKC0tdHlwZXdyaXRlckNoYXJhY3RlcnMpKSAxcyBmb3J3YXJkcyxcbiAgICAgICAgICAgIGJsaW5rIDc1MG1zIHN0ZXBzKHZhcigtLXR5cGV3cml0ZXJDaGFyYWN0ZXJzKSkgaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJl9fc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgICAgICBtYXJnaW46IDVyZW0gMDtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3JlbSk7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluVXAgMnMgZWFzZSBjYWxjKHZhcigtLXR5cGV3cml0ZXJTcGVlZCkgKyAycykgZm9yd2FyZHM7XG4gICAgICB9XG5cbiAgICAgICZfX2dvdG8ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBhbmltYXRpb246IGJvdW5jZSAxLjVzIGluZmluaXRlIGNhbGModmFyKC0tdHlwZXdyaXRlclNwZWVkKSArIDNzKSxcbiAgICAgICAgICB2aXNpYmlsaXR5IDEuNXMgZm9yd2FyZHMgY2FsYyh2YXIoLS10eXBld3JpdGVyU3BlZWQpICsgM3MpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgdHlwZXdyaXRlciB7XG4gICAgICB0byB7XG4gICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBibGluayB7XG4gICAgICB0byB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgdmlzaWJpbGl0eSB7XG4gICAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGJvdW5jZSB7XG4gICAgICAwJSxcbiAgICAgIDIwJSxcbiAgICAgIDUwJSxcbiAgICAgIDgwJSxcbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG4gICAgICA0MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICAgICAgfVxuICAgICAgNjAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gID4gYXNpZGUge1xuICAgIHBhZGRpbmc6IDJyZW0gMDtcbiAgICBtYXJnaW46IDAgMXJlbTtcbiAgfVxuXG4gID4gbWFpbiB7XG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xuICB9XG5cbiAgLnNjcm9sbC13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDAuMnJlbTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaW5zZXQ6IDAgMCBhdXRvO1xuICAgIHotaW5kZXg6IDk4O1xuXG4gICAgI3Njcm9sbC10cmFja2VyIHtcbiAgICAgIEBhcHBseSBiZy1wcm9ncmVzcyBkYXJrOmJnLWRhcmstcHJvZ3Jlc3M7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBpbnNldDogMCAwIGF1dG87XG4gICAgICBoZWlnaHQ6IDAuMnJlbTtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgei1pbmRleDogOTk7XG4gICAgfVxuICB9XG59XG5cbi5zcGlubmVyIHtcbiAgYW5pbWF0aW9uOiBwcm9ncmVzcy1zcGlubmVyLWRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSwgcHJvZ3Jlc3Mtc3Bpbm5lci1jb2xvciA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcy1zcGlubmVyLWNvbG9yIHtcbiAgMTAwJSxcbiAgMCUsXG4gIDQwJSxcbiAgNjYlLFxuICA4MCUsXG4gIDkwJSB7XG4gICAgQGFwcGx5IHN0cm9rZS10ZXh0LWNvbG9yIGRhcms6c3Ryb2tlLWRhcmstdGV4dC1jb2xvcjtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHByb2dyZXNzLXNwaW5uZXItZGFzaCB7XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzVweDtcbiAgfVxuICAxMDAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTI0cHg7XG4gIH1cbn1cblxuQG1lZGlhIHByaW50LCBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICNjb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE4cmVtLCA2NXJlbSk7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG59XG4iLCI6bm90KHByZSkgPiBwcmUge1xuICBAYXBwbHkgYmctcHJlLWJnIGRhcms6YmctZGFyay1wcmUtYmc7XG59XG5cbnByZSB7XG4gIEBhcHBseSB0ZXh0LXByZS10ZXh0IGRhcms6dGV4dC1kYXJrLXByZS10ZXh0O1xuICBwYWRkaW5nOiAwLjNyZW07XG4gIG1hcmdpbjogMC41ZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCAnQW5kYWxlIE1vbm8nLCAnVWJ1bnR1IE1vbm8nLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgLW1vei10YWItc2l6ZTogNDtcbiAgdGFiLXNpemU6IDQ7XG4gIC13ZWJraXQtaHlwaGVuczogbm9uZTtcbiAgaHlwaGVuczogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbmNvZGVbY2xhc3MqPSdsYW5ndWFnZS0nXSB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSA0cmVtKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IGF1dG87XG4gIHRleHQtc2hhZG93OiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG5jb2RlIHtcbiAgQGFwcGx5IGJnLXByZS1iZyBkYXJrOmJnLWRhcmstcHJlLWJnO1xuICBAYXBwbHkgdGV4dC1wcmUtdGV4dCBkYXJrOnRleHQtZGFyay1wcmUtdGV4dDtcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIFNGIE1vbm8sIE1lbmxvLCBDb25zb2xhcywgTGliZXJhdGlvbiBNb25vLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 8376:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreModule: () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 912);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 6792);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 33);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8139);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2451);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8559);








class HttpClientProxy extends _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient {
  /**
   * @constructor
   * @param {HttpBackend} httpBackend
   */
  constructor(httpBackend) {
    // override the HTTP client using HTTP backend in order to avoid being delayed by interceptor, which creates errors
    // while loading i18n files
    super(httpBackend);
  }
  static #_ = this.ɵfac = function HttpClientProxy_Factory(t) {
    return new (t || HttpClientProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpBackend));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: HttpClientProxy,
    factory: HttpClientProxy.ɵfac,
    providedIn: 'root'
  });
}
class CoreModule {
  constructor(parentModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import Core modules in the AppModule only.');
    }
  }
  static #_ = this.ɵfac = function CoreModule_Factory(t) {
    return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](CoreModule, 12));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: CoreModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    providers: [_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateLoader,
        useFactory: httpClient => new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__.TranslateHttpLoader(httpClient, '/i18n/', '.json'),
        deps: [HttpClientProxy]
      }
    }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule],
    exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule]
  });
})();

/***/ }),

/***/ 6792:
/*!*************************************************!*\
  !*** ./src/app/core/services/config.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigService: () => (/* binding */ ConfigService),
/* harmony export */   DARK_THEME: () => (/* binding */ DARK_THEME),
/* harmony export */   LANGUAGE_KEY: () => (/* binding */ LANGUAGE_KEY),
/* harmony export */   LIGHT_THEME: () => (/* binding */ LIGHT_THEME),
/* harmony export */   THEME_KEY: () => (/* binding */ THEME_KEY)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8559);


const THEME_KEY = 'theme';
const LANGUAGE_KEY = 'lang';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
class ConfigService {
  constructor() {
    this._theme$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(this.computeTheme());
    this._loading$ = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(true);
  }
  /**
   * Define the color sheme to apply and store the result in a local variable.
   */
  computeTheme() {
    const isOperatingSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isThemeStored = (THEME_KEY in localStorage);
    if (!isThemeStored && isOperatingSystemDark) {
      return DARK_THEME;
    }
    return localStorage.getItem(THEME_KEY) ?? LIGHT_THEME;
  }
  /**
   * Set the theme
   *
   * @param theme the theme to be set
   */
  setTheme$(theme) {
    this._theme$.set(theme);
  }
  /**
   * Return the current theme
   */
  get theme$() {
    return this._theme$;
  }
  /**
   * Set the loading flag
   *
   * @param loading the flag to be set
   */
  setLoading$(loading) {
    this._loading$.set(loading);
  }
  /**
   * Return the current loading flag
   */
  get loading$() {
    return this._loading$;
  }
  static #_ = this.ɵfac = function ConfigService_Factory(t) {
    return new (t || ConfigService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ConfigService,
    factory: ConfigService.ɵfac
  });
}

/***/ }),

/***/ 5374:
/*!**************************************************!*\
  !*** ./src/app/core/services/mission.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MissionService: () => (/* binding */ MissionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8559);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 33);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2058);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9288);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8139);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 3503);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1362);
/* harmony import */ var _core_utils_string_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/string.utils */ 8418);








class MissionService {
  constructor() {
    this.translateService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService);
    this.httpClient = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient);
    this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cdnUrl}/src/assets/resume`;
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
    const language = this.translateService.currentLang;
    return `${this.baseUrl}/missions/${language}/${date.getFullYear()}${month}/${date.getFullYear()}${month}_${type}.md`;
  }
  /**
   * Retrieve the missions from the json file stored in the repository assets folder
   *
   * @return missions the list of missions wrapped in an observable
   */
  fetchMissions$() {
    if (!this.missions$) {
      this.missions$ = this.httpClient.get(`${this.baseUrl}/missions.json`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(missions => {
        const missionsWithDescription$ = missions.map(mission => {
          const url = this.missionFromDate(mission.startDate, 'light');
          return this.fetchEnrichedMission$(url, mission);
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)([...missionsWithDescription$]);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.shareReplay)(1));
    }
    return this.missions$;
  }
  /**
   * Retrieve the skills from the json file stored in the repository assets folder
   *
   * @return skills the list of skills wrapped in an observable
   */
  fetchSkills$() {
    if (!this.skills$) {
      this.skills$ = this.httpClient.get(`${this.baseUrl}/skills.json`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.shareReplay)(1));
    }
    return this.skills$;
  }
  /**
   * Fetch the mission description from the given url and enrich the given mission with it
   *
   * @param url the url from which the mission description will be fetched
   * @param mission the mission to be enriched
   * @return the enriched mission
   */
  fetchEnrichedMission$(url, mission) {
    return this.httpClient.get(url, {
      responseType: 'text'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(description => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)({
        ...mission,
        timelapse: this.missionTimelapse(mission.startDate, mission.endDate),
        description: description
      });
    }));
  }
  /**
   * Construct the date to timelapse to be displayed on a mission
   *
   * @param start the date (string) on which the mission started
   * @param end the date (string) on which the mission ended
   * @return the label representing the mission timelapse
   */
  missionTimelapse(start, end) {
    if (end) return `${this.formatDate(new Date(start))} - ${this.formatDate(new Date(end))} (${this.missionDuration(start, end)})`;
    const onGoingLabel = this.translateService.currentLang === 'fr' ? 'en cours' : 'ongoing';
    return `${this.formatDate(new Date(start))} - ${onGoingLabel} (${this.missionDuration(start, end)})`;
  }
  /**
   * Format the given date and return it as a string
   *
   * @param date the date
   * @return the formated date
   */
  formatDate(date) {
    const addTwoDigits = number => number < 10 ? `0${number}` : `${number}`;
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
    const {
      yearLabel,
      monthLabel,
      andLabel
    } = this.getTranslatedLabels();
    let endDate = new Date(Date.now());
    if (end) {
      const endTimestamp = Date.parse(end);
      endDate = new Date(endTimestamp);
    }
    const monthsBetweenDates = this.monthBetweenDates(startDate, endDate);
    if (monthsBetweenDates > 12 && monthsBetweenDates % 12 > 0) {
      const years = Math.trunc(monthsBetweenDates / 12);
      const months = monthsBetweenDates % 12;
      return `${years} ${yearLabel}${years > 1 ? 's' : _core_utils_string_utils__WEBPACK_IMPORTED_MODULE_1__.EMPTY_STRING} ${andLabel} ${months} ${monthLabel}`;
    }
    if (monthsBetweenDates % 12 === 0) {
      const years = Math.trunc(monthsBetweenDates / 12);
      return `${years} ${yearLabel}${years > 1 ? 's' : _core_utils_string_utils__WEBPACK_IMPORTED_MODULE_1__.EMPTY_STRING}`;
    }
    return `${monthsBetweenDates} ${monthLabel}`;
  }
  /**
   * Get the translated labels used on the mission's subheader to display the duration of this mission.
   *
   * @return the translated labels
   */
  getTranslatedLabels() {
    if (this.translateService.currentLang === 'fr') {
      return {
        yearLabel: 'an',
        monthLabel: 'mois',
        andLabel: 'et'
      };
    }
    return {
      yearLabel: 'year',
      monthLabel: 'months',
      andLabel: 'and'
    };
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
  clearCache() {
    this.missions$ = undefined;
    this.skills$ = undefined;
  }
  static #_ = this.ɵfac = function MissionService_Factory(t) {
    return new (t || MissionService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: MissionService,
    factory: MissionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8418:
/*!********************************************!*\
  !*** ./src/app/core/utils/string.utils.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_STRING: () => (/* binding */ EMPTY_STRING),
/* harmony export */   isBlank: () => (/* binding */ isBlank),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty)
/* harmony export */ });
const EMPTY_STRING = '';
/**
 * Check wether or not the string value is empty.
 *
 * @param value the string value to be checked
 * @return a flag true if the string is empty, false otherwise
 */
const isEmpty = value => !value || value.length === 0;
/**
 * Check wether or not the string value is blank
 *
 * @param value the string value to be checked
 * @return a flag true if the string is blank, false otherwise
 */
const isBlank = value => !value || /^\s*$/.test(value);

/***/ }),

/***/ 1616:
/*!**************************************************************************!*\
  !*** ./src/app/features/general/components/general/general.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralComponent: () => (/* binding */ GeneralComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 8559);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 6792);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7420);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/avatar */ 9499);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 2209);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/card */ 198);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/chip */ 8564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 9010);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputswitch */ 7974);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/ripple */ 9246);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tooltip */ 8465);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ 4701);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/menu */ 5862);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 33);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ 3503);
/* harmony import */ var _core_services_mission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/mission.service */ 5374);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 5357);

























const _c0 = ["menu"];
class GeneralComponent {
  constructor() {
    this.configService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService);
    this.translateService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService);
    this.missionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_services_mission_service__WEBPACK_IMPORTED_MODULE_3__.MissionService);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.DestroyRef);
    this.injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector);
    this.menuItems = [];
  }
  /**
   * Listen for the scroll events to close the menu (workaround to avoid the menu to scroll with the content of the
   * page).
   */
  onScroll() {
    this.menu?.hide();
  }
  /**
   * @inheritDoc
   */
  ngOnInit() {
    this._initMenuItems();
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this._initMenuItems()), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_7__.takeUntilDestroyed)(this.destroyRef)).subscribe();
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.effect)(() => this.onThemeChange(this.configService.theme$()), {
      injector: this.injector
    });
  }
  /**
   * Initialize the contextual menu with the default items.
   */
  _initMenuItems() {
    this.menuItems = [{
      label: 'Menu',
      items: [{
        label: this.translateService.instant('cv.contact.menu.items.mode.label', {
          value: this.translateService.instant(this.isDarkTheme ? 'cv.mode.label.dark' : 'cv.mode.label.light')
        }),
        icon: this.isDarkTheme ? 'pi pi-moon' : 'pi pi-sun',
        title: this.translateService.instant('cv.contact.menu.items.mode.title'),
        command: () => this.configService.setTheme$(!this.isDarkTheme ? _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME : _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.LIGHT_THEME)
      }, {
        label: this.translateService.instant('cv.contact.menu.items.language.label'),
        icon: 'pi pi-globe',
        title: this.translateService.instant('cv.contact.menu.items.language.title'),
        command: () => this.changeLanguage(this.translateService.currentLang === 'fr' ? 'en' : 'fr')
      }, {
        label: this.translateService.instant('cv.contact.menu.items.download.label'),
        icon: 'pi pi-download',
        title: this.translateService.instant('cv.contact.menu.items.download.title'),
        command: () => this._downloadCurriculumVitae()
      }]
    }];
  }
  /**
   * .Change the current language by the given one.
   *
   * @param language the new language to be set
   */
  changeLanguage(language) {
    this.translateService.use(language);
    if (localStorage.getItem(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE_KEY) !== language) {
      localStorage.setItem(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE_KEY, language);
    }
    this.missionService.clearCache();
  }
  /**
   * Listen for the changes on the theme mode selection and apply the CSS theme according to it.
   *
   * @param theme the selected theme (light or dark)
   */
  onThemeChange(theme) {
    if (theme === _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME) {
      this._setDarkTheme();
      return;
    }
    this._setLightTheme();
  }
  /**
   * Set the light theme, chnage its corresponding menu item and store it as a local browser value.
   */
  _setLightTheme() {
    this.isDarkTheme = false;
    document.documentElement.classList.remove(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME);
    localStorage.setItem(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.THEME_KEY, _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.LIGHT_THEME);
    const childMenuItem = this._extractChildMenuItem();
    childMenuItem.label = this.translateService.instant('cv.contact.menu.items.mode.label', {
      value: this.translateService.instant('cv.mode.label.dark')
    });
    childMenuItem.icon = 'pi pi-moon';
  }
  /**
   * Extract the child menu item from the menu items.
   *
   * @return the child menu item as a {@link MenuItem}
   */
  _extractChildMenuItem() {
    if (!this.menuItems || this.menuItems.length === 0) {
      throw new Error('The menu items are not initialized');
    }
    const firstMenuItem = this.menuItems[0];
    if (!firstMenuItem?.items || firstMenuItem.items.length === 0) {
      throw new Error('The menu items are not properly initialized');
    }
    const childMenuItem = firstMenuItem.items[0];
    if (!childMenuItem) {
      throw new Error('Child menu item is not initialized');
    }
    return childMenuItem;
  }
  /**
   * Set the dark theme, chnage its corresponding menu item and store it as a local browser value.
   */
  _setDarkTheme() {
    this.isDarkTheme = true;
    document.documentElement.classList.add(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME);
    localStorage.setItem(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.THEME_KEY, _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME);
    const childMenuItem = this._extractChildMenuItem();
    childMenuItem.label = this.translateService.instant('cv.contact.menu.items.mode.label', {
      value: this.translateService.instant('cv.mode.label.light')
    });
    childMenuItem.icon = 'pi pi-sun';
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
  _downloadCurriculumVitae() {
    const anchor = document.createElement('a');
    anchor.href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.cdnUrl}/src/assets/pdf/CV_GARDET_Gilles.pdf`;
    anchor.download = 'gardet_gilles.pdf';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
  static #_ = this.ɵfac = function GeneralComponent_Factory(t) {
    return new (t || GeneralComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: GeneralComponent,
    selectors: [["cv-general"]],
    viewQuery: function GeneralComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
      }
    },
    hostBindings: function GeneralComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function GeneralComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 13,
    vars: 9,
    consts: [[1, "container"], [1, "general"], ["size", "xlarge", "shape", "circle", "styleClass", "p-mt-5", "image", "assets/pictures/me.jpg"], [1, "general__name"], [1, "general__presentation"], ["label", "gilles.gardet@gmail.com", "icon", "pi pi-envelope", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-bars", 1, "p-button-rounded", "p-button-text", "general__button-left", 3, "pTooltip", "click"], ["appendTo", "body", 3, "popup", "model", "autoZIndex"], ["menu", ""]],
    template: function GeneralComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "p-avatar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Gilles Gardet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p-chip", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GeneralComponent_Template_p_chip_click_8_listener() {
          return ctx.openEmailClient();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GeneralComponent_Template_button_click_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "p-menu", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 5, "cv.contact.presentation"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 7, "cv.contact.menu.tooltip"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("popup", true)("model", ctx.menuItems)("autoZIndex", true);
      }
    },
    dependencies: [primeng_avatar__WEBPACK_IMPORTED_MODULE_8__.AvatarModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_8__.Avatar, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_card__WEBPACK_IMPORTED_MODULE_10__.CardModule, primeng_chip__WEBPACK_IMPORTED_MODULE_11__.ChipModule, primeng_chip__WEBPACK_IMPORTED_MODULE_11__.Chip, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_13__.InputSwitchModule, primeng_menu__WEBPACK_IMPORTED_MODULE_14__.MenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_14__.Menu, primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__.Tooltip, primeng_ripple__WEBPACK_IMPORTED_MODULE_16__.RippleModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_16__.Ripple, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__.TooltipModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: [".container[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}[_ngcontent-%COMP%]:is(:where(.dark)   .container)[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}.container[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity)) !important;\n}[_ngcontent-%COMP%]:is(:where(.dark)   .container)[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(217 17% 20% / var(--tw-bg-opacity)) !important;\n}.container[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1 !important;\n  border-color: hsl(210 14% 89% / var(--tw-border-opacity)) !important;\n}[_ngcontent-%COMP%]:is(:where(.dark)   .container)[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1 !important;\n  border-color: hsl(213 19% 30% / var(--tw-border-opacity)) !important;\n}.container[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  border: 1px solid;\n  padding: 2rem 1rem;\n  position: sticky;\n  top: 2rem;\n  max-width: 100%;\n}\n.container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .general__name[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: bold;\n  margin: 1rem 0;\n}\n.container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .general__presentation[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 1rem;\n}\n.container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .general__button-left[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  left: 0.5rem;\n}\n.container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .general__button-right[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSwrQkFBQTtFQUFBO0FBQUEsQ0FBQTtFQUFBLCtCQUFBO0VBQUE7QUFBQSxDQUNBO0VBQUEsNkJBQUE7RUFBQTtBQUFBLENBQUE7RUFBQSw2QkFBQTtFQUFBO0FBQUEsQ0FDQTtFQUFBLGlDQUFBO0VBQUE7QUFBQSxDQUFBO0VBQUEsaUNBQUE7RUFBQTtBQUFBLENBSEY7RUFJRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFTTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQVI7QUFHTTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUtRO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhWO0FBTVE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSlYiLCJmaWxlIjoiZ2VuZXJhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBAYXBwbHkgdGV4dC10ZXh0LWNvbG9yIGRhcms6dGV4dC1kYXJrLXRleHQtY29sb3IgI3shaW1wb3J0YW50fTtcbiAgQGFwcGx5IGJnLWNhcmQtYmcgZGFyazpiZy1kYXJrLWNhcmQtYmcgI3shaW1wb3J0YW50fTtcbiAgQGFwcGx5IGJvcmRlci1wYW5lbC1ib3JkZXIgZGFyazpib3JkZXItZGFyay1wYW5lbC1ib3JkZXIgI3shaW1wb3J0YW50fTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDJyZW07XG4gIG1heC13aWR0aDogMTAwJTtcblxuICAuZ2VuZXJhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuZ2VuZXJhbCB7XG4gICAgICAmX19uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgIH1cblxuICAgICAgJl9fcHJlc2VudGF0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cblxuICAgICAgJl9fYnV0dG9uIHtcbiAgICAgICAgJi1sZWZ0IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwLjVyZW07XG4gICAgICAgICAgbGVmdDogMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1yaWdodCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMC41cmVtO1xuICAgICAgICAgIGxlZnQ6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZ2VuZXJhbC9jb21wb25lbnRzL2dlbmVyYWwvZ2VuZXJhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLCtCQUFBO0VBQUEsMERBQUE7QUFBQSxDQUFBO0VBQUEsK0JBQUE7RUFBQSwwREFBQTtBQUFBLENBQ0E7RUFBQSw2QkFBQTtFQUFBLGtFQUFBO0FBQUEsQ0FBQTtFQUFBLDZCQUFBO0VBQUEsb0VBQUE7QUFBQSxDQUNBO0VBQUEsaUNBQUE7RUFBQSxvRUFBQTtBQUFBLENBQUE7RUFBQSxpQ0FBQTtFQUFBLG9FQUFBO0FBQUEsQ0FIRjtFQUlFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBUjtBQUdNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQURSO0FBS1E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSFY7QUFNUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKVjtBQWdCQSx3OURBQXc5RCIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBAYXBwbHkgdGV4dC10ZXh0LWNvbG9yIGRhcms6dGV4dC1kYXJrLXRleHQtY29sb3IgI3shaW1wb3J0YW50fTtcbiAgQGFwcGx5IGJnLWNhcmQtYmcgZGFyazpiZy1kYXJrLWNhcmQtYmcgI3shaW1wb3J0YW50fTtcbiAgQGFwcGx5IGJvcmRlci1wYW5lbC1ib3JkZXIgZGFyazpib3JkZXItZGFyay1wYW5lbC1ib3JkZXIgI3shaW1wb3J0YW50fTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDJyZW07XG4gIG1heC13aWR0aDogMTAwJTtcblxuICAuZ2VuZXJhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuZ2VuZXJhbCB7XG4gICAgICAmX19uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgIH1cblxuICAgICAgJl9fcHJlc2VudGF0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cblxuICAgICAgJl9fYnV0dG9uIHtcbiAgICAgICAgJi1sZWZ0IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwLjVyZW07XG4gICAgICAgICAgbGVmdDogMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1yaWdodCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMC41cmVtO1xuICAgICAgICAgIGxlZnQ6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 4914:
/*!*************************************************************************!*\
  !*** ./src/app/features/resume/components/details/details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailsComponent: () => (/* binding */ DetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8559);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ 7421);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7420);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ 5697);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/progressspinner */ 8132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 912);
/* harmony import */ var _core_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/string.utils */ 8418);
/* harmony import */ var _core_services_mission_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/mission.service */ 5374);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 7340);













function DetailsComponent_Conditional_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.selectedMission.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.selectedMission.timelapse);
  }
}
function DetailsComponent_Conditional_0_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-progressSpinner", 8);
  }
}
function DetailsComponent_Conditional_0_ng_template_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "markdown", 10)(2, "markdown", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r4.innerLightMission);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r4.innerFullMission);
  }
}
function DetailsComponent_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DetailsComponent_Conditional_0_ng_template_2_Conditional_1_Template, 1, 0, "p-progressSpinner", 8)(2, DetailsComponent_Conditional_0_ng_template_2_Conditional_2_Template, 3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mission__content-transition", !ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, ctx_r2.isLoading ? 1 : 2);
  }
}
const _c0 = () => ({
  maxWidth: "960px"
});
function DetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-dialog", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function DetailsComponent_Conditional_0_Template_p_dialog_visibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.isDialogDisplayed = $event);
    })("onHide", function DetailsComponent_Conditional_0_Template_p_dialog_onHide_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.onDialogHiding());
    })("onShow", function DetailsComponent_Conditional_0_Template_p_dialog_onShow_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.onMissionLoading());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DetailsComponent_Conditional_0_ng_template_1_Template, 5, 2, "ng-template", 2)(2, DetailsComponent_Conditional_0_ng_template_2_Template, 3, 3, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx_r0.isDialogDisplayed)("header", ctx_r0.selectedMission.client)("modal", true)("closeOnEscape", true)("dismissableMask", true)("blockScroll", true);
  }
}
class DetailsComponent {
  constructor() {
    this.markdownService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(ngx_markdown__WEBPACK_IMPORTED_MODULE_3__.MarkdownService);
    this.changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
    this.missionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_core_services_mission_service__WEBPACK_IMPORTED_MODULE_1__.MissionService);
    this._isDialogDisplayed = false;
    this._selectedMission = {};
    this.isLoading = true;
    this.innerFullMission = _core_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__.EMPTY_STRING;
    this.innerLightMission = _core_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__.EMPTY_STRING;
    this.detailsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  get selectedMission() {
    return this._selectedMission;
  }
  set selectedMission(value) {
    this._selectedMission = value;
  }
  get isDialogDisplayed() {
    return this._isDialogDisplayed;
  }
  set isDialogDisplayed(value) {
    this._isDialogDisplayed = value;
  }
  /**
   * Re-initialize the loader of the dialog content
   */
  onDialogHiding() {
    this.isLoading = true;
    this.detailsChange.next(true);
  }
  /**
   * Parse the markdown contained in the selected mission file
   */
  onMissionLoading() {
    const fullMissionDescriptionUrl = this.missionService.missionFromDate(this._selectedMission?.startDate, 'full');
    this.markdownService.getSource(fullMissionDescriptionUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.innerLightMission = this._selectedMission.description ?? _core_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__.EMPTY_STRING)).subscribe(fullMission => {
      this.innerFullMission = fullMission;
      this.isLoading = false;
      this.changeDetectorRef.markForCheck();
      document.querySelector('p-dialog > .p-dialog-mask > .p-dialog > .p-dialog-content')?.classList.add('p-dialog-content-scroll');
    });
  }
  static #_ = this.ɵfac = function DetailsComponent_Factory(t) {
    return new (t || DetailsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DetailsComponent,
    selectors: [["cv-details"]],
    inputs: {
      selectedMission: "selectedMission",
      isDialogDisplayed: "isDialogDisplayed"
    },
    outputs: {
      detailsChange: "detailsChange"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[3, "visible", "header", "modal", "style", "closeOnEscape", "dismissableMask", "blockScroll"], [3, "visible", "header", "modal", "closeOnEscape", "dismissableMask", "blockScroll", "visibleChange", "onHide", "onShow"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "mission__title"], [1, "prose", "prose-2xl", "font-bold", "text-slate-600", "dark:text-slate-100"], [1, "mission__title__timelapse"], [1, "mission__content"], ["strokeWidth", "6", "styleClass", "mission__content__spinner"], [1, "mission__content__text"], [3, "data"], [1, "flex", "flex-col", "gap-3", 3, "data"]],
    template: function DetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DetailsComponent_Conditional_0_Template, 3, 9, "p-dialog", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, ctx.selectedMission ? 0 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__.ProgressSpinnerModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__.ProgressSpinner, ngx_markdown__WEBPACK_IMPORTED_MODULE_3__.MarkdownModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_3__.MarkdownComponent],
    styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-row-gap: 2rem;\n}\n[_nghost-%COMP%]   .mission__title[_ngcontent-%COMP%] {\n  grid-area: 1/2/1/3;\n}\n[_nghost-%COMP%]   .mission__title__timelapse[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n[_nghost-%COMP%]   .mission__content[_ngcontent-%COMP%] {\n  max-height: 100px;\n  max-width: 100px;\n  transition: max-height 800ms ease-in-out, max-width 800ms ease-in-out;\n}\n[_nghost-%COMP%]   .mission__content__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeText 800ms forwards 800ms;\n}\n[_nghost-%COMP%]   .mission__content-transition[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  max-width: calc(1280px - 3rem);\n}\n@keyframes _ngcontent-%COMP%_fadeText {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVJO0VBQ0Usa0JBQUE7QUFBTjtBQUVNO0VBQ0Usa0JBQUE7QUFBUjtBQUlJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFFQUFBO0FBRk47QUFJTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0FBRlI7QUFLTTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7QUFIUjtBQU1NO0VBQ0U7SUFDRSxVQUFBO0VBSlI7RUFNTTtJQUNFLFVBQUE7RUFKUjtBQUNGIiwiZmlsZSI6ImRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtcm93LWdhcDogMnJlbTtcblxuICAubWlzc2lvbiB7XG4gICAgJl9fdGl0bGUge1xuICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDEgLyAzO1xuXG4gICAgICAmX190aW1lbGFwc2Uge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fY29udGVudCB7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDgwMG1zIGVhc2UtaW4tb3V0LCBtYXgtd2lkdGggODAwbXMgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICZfX3RleHQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBhbmltYXRpb246IGZhZGVUZXh0IDgwMG1zIGZvcndhcmRzIDgwMG1zO1xuICAgICAgfVxuXG4gICAgICAmLXRyYW5zaXRpb24ge1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEyODBweCAtIDNyZW0pO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGZhZGVUZXh0IHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFFSTtFQUNFLGtCQUFBO0FBQU47QUFFTTtFQUNFLGtCQUFBO0FBQVI7QUFJSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxRUFBQTtBQUZOO0FBSU07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtBQUZSO0FBS007RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0FBSFI7QUFNTTtFQUNFO0lBQ0UsVUFBQTtFQUpSO0VBTU07SUFDRSxVQUFBO0VBSlI7QUFDRjtBQUNBLGdrREFBZ2tEIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXJvdy1nYXA6IDJyZW07XG5cbiAgLm1pc3Npb24ge1xuICAgICZfX3RpdGxlIHtcbiAgICAgIGdyaWQtYXJlYTogMSAvIDIgLyAxIC8gMztcblxuICAgICAgJl9fdGltZWxhcHNlIHtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgfVxuICAgIH1cblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCA4MDBtcyBlYXNlLWluLW91dCwgbWF4LXdpZHRoIDgwMG1zIGVhc2UtaW4tb3V0O1xuXG4gICAgICAmX190ZXh0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlVGV4dCA4MDBtcyBmb3J3YXJkcyA4MDBtcztcbiAgICAgIH1cblxuICAgICAgJi10cmFuc2l0aW9uIHtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMjgwcHggLSAzcmVtKTtcbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBmYWRlVGV4dCB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 6468:
/*!*************************************************************************!*\
  !*** ./src/app/features/resume/components/hobbies/hobbies.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HobbiesComponent: () => (/* binding */ HobbiesComponent)
/* harmony export */ });
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/tag */ 2963);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/panel */ 4118);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 4701);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 33);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8559);








class HobbiesComponent {
  static #_ = this.ɵfac = function HobbiesComponent_Factory(t) {
    return new (t || HobbiesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HobbiesComponent,
    selectors: [["cv-hobbies"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 18,
    vars: 23,
    consts: [["id", "hobbies", 3, "header"], [1, "hobbies"], [3, "rounded"]],
    template: function HobbiesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "p-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 11, "cv.hobbies.panelTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 13, "cv.hobbies.content.dev"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 15, "cv.hobbies.content.homelab"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 17, "cv.hobbies.content.movie"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 19, "cv.hobbies.content.basket"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 21, "cv.hobbies.content.running"));
      }
    },
    dependencies: [primeng_panel__WEBPACK_IMPORTED_MODULE_2__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_2__.Panel, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, primeng_tag__WEBPACK_IMPORTED_MODULE_3__.TagModule, primeng_tag__WEBPACK_IMPORTED_MODULE_3__.Tag, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: [".hobbies[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvYmJpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0YiLCJmaWxlIjoiaG9iYmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob2JiaWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvaG9iYmllcy9ob2JiaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0Esd1hBQXdYIiwic291cmNlc0NvbnRlbnQiOlsiLmhvYmJpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 6647:
/*!***************************************************************************!*\
  !*** ./src/app/features/resume/components/missions/missions.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MissionsComponent: () => (/* binding */ MissionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8559);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/panel */ 4118);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/timeline */ 6816);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/card */ 198);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 4701);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ 7421);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 33);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 7340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 912);
/* harmony import */ var _shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/slide-button/slide-button.component */ 3227);















function MissionsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", "#495057");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "pi pi-bookmark");
  }
}
function MissionsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "markdown", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 12)(9, "cv-slide-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MissionsComponent_ng_template_4_Template_cv_slide_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const mission_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.emitOpenMissionDialog(mission_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const mission_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mission_r2["client"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", "#6c757d");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mission_r2["timelapse"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", mission_r2.description, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
class MissionsComponent {
  constructor() {
    this._missions = [];
    this.openDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  get missions() {
    return this._missions;
  }
  set missions(value) {
    this._missions = value;
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
    const intersectionObserver = new IntersectionObserver(entries => {
      // trigger the animation on the intersection according to the side of the timeline event
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }
        if (!this.screenWidth) {
          return;
        }
        if (this.screenWidth > 960) {
          entry.target.querySelectorAll(':nth-child(2n + 1) > .p-timeline-event-content').forEach(element => element.classList.add('mission__animation-right'));
          entry.target.querySelectorAll(':nth-child(2n) > .p-timeline-event-content').forEach(element => element.classList.add('mission__animation-left'));
        } else {
          entry.target.querySelectorAll('.p-timeline-event-content').forEach(element => element.classList.add('mission__animation-right'));
        }
      });
    }, {
      threshold: 0
    });
    const experienceElements = document.querySelectorAll('p-panel#experience .p-component .p-timeline-alternate .p-timeline-event');
    experienceElements.forEach(experienceElement => {
      intersectionObserver.observe(experienceElement);
    });
  }
  /**
   * Open the details dialog
   */
  emitOpenMissionDialog(mission) {
    this.openDialog.emit(mission);
  }
  static #_ = this.ɵfac = function MissionsComponent_Factory(t) {
    return new (t || MissionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MissionsComponent,
    selectors: [["cv-missions"]],
    hostBindings: function MissionsComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function MissionsComponent_resize_HostBindingHandler($event) {
          return ctx.onWindowResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      missions: "missions"
    },
    outputs: {
      openDialog: "openDialog"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 4,
    consts: [["id", "experience", 3, "header"], ["align", "alternate", "styleClass", "customized-timeline", 3, "value"], ["pTemplate", "marker"], ["pTemplate", "content"], [1, "custom-marker"], [3, "ngClass"], [1, "flex", "flex-col", "mt-4", "p-4", "gap-4"], [1, "flex", "flex-col"], [1, "text-2xl", "font-bold", "mb-2", "text-center"], [1, "font-normal", "mb-2", "text-center"], [1, "flex", "flex-col", "pb-4", "gap-4", "text-start"], [3, "innerHTML"], [1, "mission__button"], [3, "click"]],
    template: function MissionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-timeline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MissionsComponent_ng_template_3_Template, 2, 3, "ng-template", 2)(4, MissionsComponent_ng_template_4_Template, 10, 5, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, "cv.missions.panelTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.missions);
      }
    },
    dependencies: [primeng_card__WEBPACK_IMPORTED_MODULE_3__.CardModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownComponent, primeng_panel__WEBPACK_IMPORTED_MODULE_6__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_6__.Panel, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_1__.SlideButtonComponent, primeng_timeline__WEBPACK_IMPORTED_MODULE_8__.TimelineModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_8__.Timeline, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
    styles: [".custom-marker[_ngcontent-%COMP%] {\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  justify-content: center;\n  color: var(--white);\n  border-radius: 50%;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc3Npb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0YiLCJmaWxlIjoibWlzc2lvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLW1hcmtlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDE7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvbWlzc2lvbnMvbWlzc2lvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjtBQUNBLHdsQkFBd2xCIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1tYXJrZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 882:
/*!***********************************************************************!*\
  !*** ./src/app/features/resume/components/resume/resume.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumeComponent: () => (/* binding */ ResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 8559);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2073);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 4546);
/* harmony import */ var _features_resume_components_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @features/resume/components/hobbies/hobbies.component */ 6468);
/* harmony import */ var _features_resume_components_missions_missions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @features/resume/components/missions/missions.component */ 6647);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 4701);
/* harmony import */ var _features_resume_components_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/resume/components/skills/skills.component */ 212);
/* harmony import */ var _features_resume_components_summary_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/resume/components/summary/summary.component */ 1453);
/* harmony import */ var _features_resume_components_details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/resume/components/details/details.component */ 4914);
/* harmony import */ var _core_services_mission_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/mission.service */ 5374);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/config.service */ 6792);












class ResumeComponent {
  constructor() {
    this.missionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_core_services_mission_service__WEBPACK_IMPORTED_MODULE_6__.MissionService);
    this.changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef);
    this.configService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.inject)(_core_services_config_service__WEBPACK_IMPORTED_MODULE_7__.ConfigService);
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
    this.configService.setLoading$(true);
    const missions$ = this.missionService.fetchMissions$();
    const skills$ = this.missionService.fetchSkills$();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.zip)(missions$, skills$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([missions, skills]) => ({
      missions,
      skills
    }))).subscribe(result => {
      this.missions = result.missions;
      this.skills = result.skills;
      this.clones = result.skills;
      this.skills = result.skills.map(skill => ({
        name: skill.name,
        rate: 0
      }));
      this.configService.setLoading$(false);
      this.changeDetectorRef.markForCheck();
    });
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
  static #_ = this.ɵfac = function ResumeComponent_Factory(t) {
    return new (t || ResumeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: ResumeComponent,
    selectors: [["cv-resume"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 5,
    consts: [[1, "scroll-wrapper"], ["id", "scroll-tracker"], [3, "skills", "clones"], [3, "missions", "openDialog"], [3, "selectedMission", "isDialogDisplayed", "detailsChange"]],
    template: function ResumeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "cv-summary")(3, "cv-skills", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "cv-missions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("openDialog", function ResumeComponent_Template_cv_missions_openDialog_4_listener($event) {
          return ctx.openDialog($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "cv-hobbies");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "cv-details", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("detailsChange", function ResumeComponent_Template_cv_details_detailsChange_6_listener() {
          return ctx.onDetailsClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("skills", ctx.skills)("clones", ctx.clones);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("missions", ctx.missions);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectedMission", ctx.selectedMission)("isDialogDisplayed", ctx.displayDialog);
      }
    },
    dependencies: [_features_resume_components_details_details_component__WEBPACK_IMPORTED_MODULE_5__.DetailsComponent, _features_resume_components_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_0__.HobbiesComponent, _features_resume_components_missions_missions_component__WEBPACK_IMPORTED_MODULE_1__.MissionsComponent, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _features_resume_components_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__.SkillsComponent, _features_resume_components_summary_summary_component__WEBPACK_IMPORTED_MODULE_4__.SummaryComponent],
    styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-row-gap: 2rem;\n}\n[_nghost-%COMP%]   .mission__title[_ngcontent-%COMP%] {\n  grid-area: 1/2/1/3;\n}\n[_nghost-%COMP%]   .mission__title__timelapse[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n[_nghost-%COMP%]   .mission__content[_ngcontent-%COMP%] {\n  max-height: 100px;\n  max-width: 100px;\n  transition: max-height 800ms ease-in-out, max-width 800ms ease-in-out;\n}\n[_nghost-%COMP%]   .mission__content__spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_progress-spinner-dash 1.5s ease-in-out infinite, _ngcontent-%COMP%_progress-spinner-color 6s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_progress-spinner-color {\n  100%, 0%, 40%, 66%, 80%, 90% {\n    stroke: hsl(210, 9%, 31%);\n  }\n  :is(:where(.dark) 100%),:is(:where(.dark)  0%),:is(:where(.dark)  40%),:is(:where(.dark)  66%),:is(:where(.dark)  80%),:is(:where(.dark)  90%) {\n    stroke: hsl(240, 4%, 90%);\n  }\n}\n@keyframes _ngcontent-%COMP%_progress-spinner-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n[_nghost-%COMP%]   .mission__content__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeText 800ms forwards 800ms;\n}\n[_nghost-%COMP%]   .mission__content-transition[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  max-width: calc(1280px - 3rem);\n}\n@keyframes _ngcontent-%COMP%_fadeText {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUk7RUFDRSxrQkFBQTtBQUFOO0FBRU07RUFDRSxrQkFBQTtBQUFSO0FBSUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUVBQUE7QUFGTjtBQUlNO0VBQ0UsMEdBQUE7QUFGUjtBQUtNO0VBT0k7SUFBQTtFQUFBO0VBQUE7SUFBQTtFQUFBO0FBUFY7QUFXTTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQVRSO0VBV007SUFDRSx5QkFBQTtJQUNBLHdCQUFBO0VBVFI7RUFXTTtJQUNFLHlCQUFBO0lBQ0EseUJBQUE7RUFUUjtBQUNGO0FBWU07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtBQVZSO0FBYU07RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0FBWFI7QUFjTTtFQUNFO0lBQ0UsVUFBQTtFQVpSO0VBY007SUFDRSxVQUFBO0VBWlI7QUFDRiIsImZpbGUiOiJyZXN1bWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtcm93LWdhcDogMnJlbTtcblxuICAubWlzc2lvbiB7XG4gICAgJl9fdGl0bGUge1xuICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDEgLyAzO1xuXG4gICAgICAmX190aW1lbGFwc2Uge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fY29udGVudCB7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDgwMG1zIGVhc2UtaW4tb3V0LCBtYXgtd2lkdGggODAwbXMgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICZfX3NwaW5uZXIge1xuICAgICAgICBhbmltYXRpb246IHByb2dyZXNzLXNwaW5uZXItZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlLCBwcm9ncmVzcy1zcGlubmVyLWNvbG9yIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHByb2dyZXNzLXNwaW5uZXItY29sb3Ige1xuICAgICAgICAxMDAlLFxuICAgICAgICAwJSxcbiAgICAgICAgNDAlLFxuICAgICAgICA2NiUsXG4gICAgICAgIDgwJSxcbiAgICAgICAgOTAlIHtcbiAgICAgICAgICBAYXBwbHkgc3Ryb2tlLXRleHQtY29sb3IgZGFyazpzdHJva2UtZGFyay10ZXh0LWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgcHJvZ3Jlc3Mtc3Bpbm5lci1kYXNoIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcbiAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNXB4O1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjRweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmX190ZXh0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlVGV4dCA4MDBtcyBmb3J3YXJkcyA4MDBtcztcbiAgICAgIH1cblxuICAgICAgJi10cmFuc2l0aW9uIHtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMjgwcHggLSAzcmVtKTtcbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBmYWRlVGV4dCB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUk7RUFDRSxrQkFBQTtBQUFOO0FBRU07RUFDRSxrQkFBQTtBQUFSO0FBSUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUVBQUE7QUFGTjtBQUlNO0VBQ0UsMEdBQUE7QUFGUjtBQUtNO0VBT0k7SUFBQSx5QkFBQTtFQUFBO0VBQUE7SUFBQSx5QkFBQTtFQUFBO0FBUFY7QUFXTTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQVRSO0VBV007SUFDRSx5QkFBQTtJQUNBLHdCQUFBO0VBVFI7RUFXTTtJQUNFLHlCQUFBO0lBQ0EseUJBQUE7RUFUUjtBQUNGO0FBWU07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtBQVZSO0FBYU07RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0FBWFI7QUFjTTtFQUNFO0lBQ0UsVUFBQTtFQVpSO0VBY007SUFDRSxVQUFBO0VBWlI7QUFDRjtBQUlBLHd0RkFBd3RGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXJvdy1nYXA6IDJyZW07XG5cbiAgLm1pc3Npb24ge1xuICAgICZfX3RpdGxlIHtcbiAgICAgIGdyaWQtYXJlYTogMSAvIDIgLyAxIC8gMztcblxuICAgICAgJl9fdGltZWxhcHNlIHtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgfVxuICAgIH1cblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCA4MDBtcyBlYXNlLWluLW91dCwgbWF4LXdpZHRoIDgwMG1zIGVhc2UtaW4tb3V0O1xuXG4gICAgICAmX19zcGlubmVyIHtcbiAgICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzcy1zcGlubmVyLWRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSwgcHJvZ3Jlc3Mtc3Bpbm5lci1jb2xvciA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBwcm9ncmVzcy1zcGlubmVyLWNvbG9yIHtcbiAgICAgICAgMTAwJSxcbiAgICAgICAgMCUsXG4gICAgICAgIDQwJSxcbiAgICAgICAgNjYlLFxuICAgICAgICA4MCUsXG4gICAgICAgIDkwJSB7XG4gICAgICAgICAgQGFwcGx5IHN0cm9rZS10ZXh0LWNvbG9yIGRhcms6c3Ryb2tlLWRhcmstdGV4dC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHByb2dyZXNzLXNwaW5uZXItZGFzaCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XG4gICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xuICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzVweDtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xuICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTI0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJl9fdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZVRleHQgODAwbXMgZm9yd2FyZHMgODAwbXM7XG4gICAgICB9XG5cbiAgICAgICYtdHJhbnNpdGlvbiB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTI4MHB4IC0gM3JlbSk7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgZmFkZVRleHQge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 212:
/*!***********************************************************************!*\
  !*** ./src/app/features/resume/components/skills/skills.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsComponent: () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8559);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/progressbar */ 202);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/panel */ 4118);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 4701);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 33);









const _forTrack0 = ($index, $item) => $item.name;
function SkillsComponent_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-progressBar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](skill_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", skill_r2.rate)("showValue", false);
  }
}
function SkillsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](0, SkillsComponent_Conditional_3_For_1_Template, 4, 3, "div", 4, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r0._skills);
  }
}
class SkillsComponent {
  constructor() {
    this.changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
    this._skills = [];
    this._clones = [];
  }
  get skills() {
    return this._skills;
  }
  set skills(value) {
    this._skills = value;
    this.changeDetectorRef.markForCheck();
  }
  get clones() {
    return this._clones;
  }
  set clones(value) {
    this._clones = value;
    this.changeDetectorRef.markForCheck();
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
    const rateIntersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => this._checkSkillIntersection(entry));
    }, {
      threshold: 0
    });
    const rateElement = document.querySelector('p-panel#skills .p-component');
    if (rateElement) {
      rateIntersectionObserver.observe(rateElement);
    }
  }
  _checkSkillIntersection(entry) {
    if (entry.isIntersecting && this._clones.length > 0) {
      this._skills.forEach(tool => tool.rate = this._clones?.find(clone => clone.name === tool.name)?.rate ?? 0);
    } else {
      this._skills.forEach(tool => tool.rate = 0);
    }
    this.changeDetectorRef.markForCheck();
  }
  static #_ = this.ɵfac = function SkillsComponent_Factory(t) {
    return new (t || SkillsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SkillsComponent,
    selectors: [["cv-skills"]],
    inputs: {
      skills: "skills",
      clones: "clones"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 4,
    consts: [["id", "skills", 3, "header"], [1, "skills"], [1, "skills__languages"], [3, "value", "showValue"], ["class", "skills__languages"]],
    template: function SkillsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SkillsComponent_Conditional_3_Template, 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "cv.skills.panelTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](3, !!ctx._skills && !!ctx._clones ? 3 : -1);
      }
    },
    dependencies: [primeng_panel__WEBPACK_IMPORTED_MODULE_2__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_2__.Panel, primeng_progressbar__WEBPACK_IMPORTED_MODULE_3__.ProgressBarModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_3__.ProgressBar, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: [".skills[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 2rem;\n  grid-row-gap: 1rem;\n  padding: 0 2rem;\n}\n.skills__languages[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.skills__languages[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: start;\n  margin-right: 1rem;\n}\n.skills__languages[_ngcontent-%COMP%]    > p-progressbar[_ngcontent-%COMP%] {\n  flex: 2;\n}\n\n@media screen and (max-width: 960px) {\n  .skills[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNOO0FBRUk7RUFDRSxPQUFBO0FBQU47O0FBS0E7RUFDRTtJQUNFLDBCQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGxzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDJyZW07XG4gIGdyaWQtcm93LWdhcDogMXJlbTtcbiAgcGFkZGluZzogMCAycmVtO1xuXG4gICZfX2xhbmd1YWdlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgPiBzcGFuIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICB9XG5cbiAgICA+IHAtcHJvZ3Jlc3NiYXIge1xuICAgICAgZmxleDogMjtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLnNraWxscyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNOO0FBRUk7RUFDRSxPQUFBO0FBQU47O0FBS0E7RUFDRTtJQUNFLDBCQUFBO0VBRkY7QUFDRjtBQUNBLHdpQ0FBd2lDIiwic291cmNlc0NvbnRlbnQiOlsiLnNraWxscyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAycmVtO1xuICBncmlkLXJvdy1nYXA6IDFyZW07XG4gIHBhZGRpbmc6IDAgMnJlbTtcblxuICAmX19sYW5ndWFnZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgID4gc3BhbiB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgfVxuXG4gICAgPiBwLXByb2dyZXNzYmFyIHtcbiAgICAgIGZsZXg6IDI7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5za2lsbHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 1453:
/*!*************************************************************************!*\
  !*** ./src/app/features/resume/components/summary/summary.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryComponent: () => (/* binding */ SummaryComponent)
/* harmony export */ });
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/panel */ 4118);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 4701);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 33);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8559);






const _c0 = a0 => ({
  value: a0
});
class SummaryComponent {
  /**
   * @constructor
   */
  constructor() {
    this.yearsOfExperience = 0;
    const startingDate = new Date(2013, 4);
    this.yearsOfExperience = this.numberOfYearsFromDateToCurrentDate(startingDate);
  }
  /**
   * Calculate the number of years between a given date and the current date
   * @param {Date} date the date to substract to the current date
   */
  numberOfYearsFromDateToCurrentDate(date) {
    return new Date().getFullYear() - date.getFullYear();
  }
  static #_ = this.ɵfac = function SummaryComponent_Factory(t) {
    return new (t || SummaryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SummaryComponent,
    selectors: [["cv-summary"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 9,
    consts: [["id", "summary", 3, "header"], [1, "summary", 3, "innerHTML"]],
    template: function SummaryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "cv.summary.panelTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, "cv.summary.content", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.yearsOfExperience)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    },
    dependencies: [primeng_panel__WEBPACK_IMPORTED_MODULE_2__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_2__.Panel, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: [".summary[_ngcontent-%COMP%] {\n  text-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6InN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VtbWFyeSB7XG4gIHRleHQtYWxpZ246IHN0YXJ0XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjtBQUNBLDRTQUE0UyIsInNvdXJjZXNDb250ZW50IjpbIi5zdW1tYXJ5IHtcbiAgdGV4dC1hbGlnbjogc3RhcnRcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 3227:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/slide-button/slide-button.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlideButtonComponent: () => (/* binding */ SlideButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8559);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 33);


class SlideButtonComponent {
  static #_ = this.ɵfac = function SlideButtonComponent_Factory(t) {
    return new (t || SlideButtonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SlideButtonComponent,
    selectors: [["cv-slide-button"]],
    decls: 6,
    vars: 3,
    consts: [[1, "learn-more"], ["aria-hidden", "true", 1, "circle"], [1, "icon", "arrow"], [1, "button-text"]],
    template: function SlideButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, "cv.shared.slideButton"));
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    styles: ["button {\n  --tw-bg-opacity: 1;\n  background-color: hsl(207 9% 31% / var(--tw-bg-opacity));\n}:is(:where(.dark) button) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(218 12% 89% / var(--tw-bg-opacity));\n}button {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  text-decoration: none;\n  padding: 2px;\n  font-size: 14px;\n  outline: none;\n  border: none;\n  border-radius: 1.625rem;\n}\nbutton.learn-more {\n  width: 10rem;\n  height: auto;\n}\nbutton.learn-more .circle {\n  --tw-bg-opacity: 1;\n  background-color: hsl(218 12% 89% / var(--tw-bg-opacity));\n}\n:is(:where(.dark) button.learn-more .circle) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(207 9% 31% / var(--tw-bg-opacity));\n}\nbutton.learn-more .circle {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: relative;\n  display: block;\n  margin: 0;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 1.625rem;\n}\nbutton.learn-more .circle .icon {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\nbutton.learn-more .circle .icon.arrow {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  left: 0.125rem;\n  width: 1.125rem;\n  height: 0.125rem;\n  background: none;\n}\nbutton.learn-more .circle .icon.arrow::before {\n  --tw-border-opacity: 1;\n  border-top-color: hsl(207 9% 31% / var(--tw-border-opacity));\n}\n:is(:where(.dark) button.learn-more .circle .icon.arrow)::before {\n  --tw-border-opacity: 1;\n  border-top-color: hsl(0 0% 100% / var(--tw-border-opacity));\n}\nbutton.learn-more .circle .icon.arrow::before {\n  --tw-border-opacity: 1;\n  border-right-color: hsl(207 9% 31% / var(--tw-border-opacity));\n}\n:is(:where(.dark) button.learn-more .circle .icon.arrow)::before {\n  --tw-border-opacity: 1;\n  border-right-color: hsl(0 0% 100% / var(--tw-border-opacity));\n}\nbutton.learn-more .circle .icon.arrow::before {\n  border-top-width: 0.125rem;\n  border-right-width: 0.125rem;\n  border-top-style: solid;\n  border-right-style: solid;\n  position: absolute;\n  content: \"\";\n  top: -0.25rem;\n  right: 0.0625rem;\n  width: 0.625rem;\n  height: 0.625rem;\n  transform: rotate(45deg);\n}\nbutton.learn-more .button-text {\n  --tw-text-opacity: 1;\n  color: hsl(240 4% 90% / var(--tw-text-opacity));\n}\n:is(:where(.dark) button.learn-more .button-text) {\n  --tw-text-opacity: 1;\n  color: hsl(210 9% 31% / var(--tw-text-opacity));\n}\nbutton.learn-more .button-text {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.75rem 0;\n  margin: 0 0 0 1.85rem;\n  line-height: 0.8;\n  text-align: center;\n}\nbutton:hover .circle {\n  width: 100%;\n}\nbutton:hover .circle .icon.arrow {\n  --tw-bg-opacity: 1;\n  background-color: hsl(207 9% 31% / var(--tw-bg-opacity));\n}\n:is(:where(.dark) button:hover .circle .icon.arrow) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity));\n}\nbutton:hover .circle .icon.arrow {\n  transform: translate(1rem, 0);\n}\nbutton:hover .button-text {\n  --tw-text-opacity: 1;\n  color: hsl(207 9% 31% / var(--tw-text-opacity));\n}\n:is(:where(.dark) button:hover .button-text) {\n  --tw-text-opacity: 1;\n  color: hsl(0 0% 100% / var(--tw-text-opacity));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPRTtFQUFBLGtCQUFBO0VBQUE7QUFBQSxDQUFBO0VBQUEsa0JBQUE7RUFBQTtBQUFBLENBREY7RUFFRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQVpPO0FBT1Q7QUFPRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBTEo7QUFRTTtFQUFBLGtCQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsa0JBQUE7RUFBQTtBQUFBO0FBREY7RUFyQkYscURBQUE7RUF3Qkksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBMUJHO0FBcUJUO0FBT007RUEvQkoscURBQUE7RUFpQ00sa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFMUjtBQU9RO0VBdENOLHFEQUFBO0VBd0NRLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUxWO0FBUVk7RUFBQSxzQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLHNCQUFBO0VBQUE7QUFBQTtBQUNBO0VBQUEsc0JBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSxzQkFBQTtFQUFBO0FBQUE7QUFGRjtFQUdFLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFMWjtBQVlNO0VBQUEsb0JBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7QUFERjtFQWhFRixxREFBQTtFQW1FSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVROO0FBY0k7RUFDRSxXQUFBO0FBWk47QUFnQlU7RUFBQSxrQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLGtCQUFBO0VBQUE7QUFBQTtBQURGO0VBRUUsNkJBQUE7QUFiVjtBQW1CTTtFQUFBLG9CQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBIiwiZmlsZSI6InNsaWRlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0eTogYWxsLCAkZHVyYXRpb246IDAuNDVzLCAkZWFzZTogY3ViaWMtYmV6aWVyKDAuNjUsMCwuMDc2LDEpKSB7XG4gIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb24gJGVhc2U7XG59XG5cbiRyYWRpdXM6IDEuNjI1cmVtO1xuXG5idXR0b24ge1xuICBAYXBwbHkgYmctZGFyay1zbGlkZS1idXR0b24tYmcgZGFyazpiZy1zbGlkZS1idXR0b24tYmc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcblxuICAmLmxlYXJuLW1vcmUge1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAuY2lyY2xlIHtcbiAgICAgIEBhcHBseSBiZy1kYXJrLXNsaWRlLWNpcmNsZS1idXR0b24tYmcgZGFyazpiZy1zbGlkZS1jaXJjbGUtYnV0dG9uLWJnO1xuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNDVzLCBjdWJpYy1iZXppZXIoMC42NSwgMCwgLjA3NiwgMSkpO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3aWR0aDogMnJlbTtcbiAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG5cbiAgICAgIC5pY29uIHtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNDVzLCBjdWJpYy1iZXppZXIoMC42NSwgMCwgLjA3NiwgMSkpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgICAgJi5hcnJvdyB7XG4gICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNDVzLCBjdWJpYy1iZXppZXIoMC42NSwgMCwgLjA3NiwgMSkpO1xuICAgICAgICAgIGxlZnQ6IDAuMTI1cmVtO1xuICAgICAgICAgIHdpZHRoOiAxLjEyNXJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDAuMTI1cmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG5cbiAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgQGFwcGx5IGJvcmRlci10LWRhcmstc2xpZGUtYnV0dG9uLWljb24gZGFyazpib3JkZXItdC1zbGlkZS1idXR0b24taWNvbjtcbiAgICAgICAgICAgIEBhcHBseSBib3JkZXItci1kYXJrLXNsaWRlLWJ1dHRvbi1pY29uIGRhcms6Ym9yZGVyLXItc2xpZGUtYnV0dG9uLWljb247XG4gICAgICAgICAgICBib3JkZXItdG9wLXdpZHRoOiAwLjEyNXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMC4xMjVyZW07XG4gICAgICAgICAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHRvcDogLTAuMjVyZW07XG4gICAgICAgICAgICByaWdodDogMC4wNjI1cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDAuNjI1cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAwLjYyNXJlbTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnV0dG9uLXRleHQge1xuICAgICAgQGFwcGx5IHRleHQtZGFyay10ZXh0LWNvbG9yIGRhcms6dGV4dC10ZXh0LWNvbG9yO1xuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNDVzLCBjdWJpYy1iZXppZXIoMC42NSwgMCwgLjA3NiwgMSkpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcGFkZGluZzogMC43NXJlbSAwO1xuICAgICAgbWFyZ2luOiAwIDAgMCAxLjg1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDAuODtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICAuY2lyY2xlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAuaWNvbiB7XG4gICAgICAgICYuYXJyb3cge1xuICAgICAgICAgIEBhcHBseSBiZy1kYXJrLXNsaWRlLWJ1dHRvbi1pY29uIGRhcms6Ymctc2xpZGUtYnV0dG9uLWljb247XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXJlbSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnV0dG9uLXRleHQge1xuICAgICAgQGFwcGx5IHRleHQtZGFyay1zbGlkZS1idXR0b24taWNvbiBkYXJrOnRleHQtc2xpZGUtYnV0dG9uLWljb247XG4gICAgfVxuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2xpZGUtYnV0dG9uL3NsaWRlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPRTtFQUFBLGtCQUFBO0VBQUEsd0RBQUE7QUFBQSxDQUFBO0VBQUEsa0JBQUE7RUFBQSx5REFBQTtBQUFBLENBREY7RUFFRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQVpPO0FBT1Q7QUFPRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBTEo7QUFRTTtFQUFBLGtCQUFBO0VBQUEseURBQUE7QUFBQTtBQUFBO0VBQUEsa0JBQUE7RUFBQSx3REFBQTtBQUFBO0FBREY7RUFyQkYscURBQUE7RUF3Qkksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBMUJHO0FBcUJUO0FBT007RUEvQkoscURBQUE7RUFpQ00sa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFMUjtBQU9RO0VBdENOLHFEQUFBO0VBd0NRLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUxWO0FBUVk7RUFBQSxzQkFBQTtFQUFBLDREQUFBO0FBQUE7QUFBQTtFQUFBLHNCQUFBO0VBQUEsMkRBQUE7QUFBQTtBQUNBO0VBQUEsc0JBQUE7RUFBQSw4REFBQTtBQUFBO0FBQUE7RUFBQSxzQkFBQTtFQUFBLDZEQUFBO0FBQUE7QUFGRjtFQUdFLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFMWjtBQVlNO0VBQUEsb0JBQUE7RUFBQSwrQ0FBQTtBQUFBO0FBQUE7RUFBQSxvQkFBQTtFQUFBLCtDQUFBO0FBQUE7QUFERjtFQWhFRixxREFBQTtFQW1FSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVROO0FBY0k7RUFDRSxXQUFBO0FBWk47QUFnQlU7RUFBQSxrQkFBQTtFQUFBLHdEQUFBO0FBQUE7QUFBQTtFQUFBLGtCQUFBO0VBQUEsdURBQUE7QUFBQTtBQURGO0VBRUUsNkJBQUE7QUFiVjtBQW1CTTtFQUFBLG9CQUFBO0VBQUEsK0NBQUE7QUFBQTtBQUFBO0VBQUEsb0JBQUE7RUFBQSw4Q0FBQTtBQUFBO0FBOEJOLGd5SkFBZ3lKIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5OiBhbGwsICRkdXJhdGlvbjogMC40NXMsICRlYXNlOiBjdWJpYy1iZXppZXIoMC42NSwwLC4wNzYsMSkpIHtcbiAgdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbiAkZWFzZTtcbn1cblxuJHJhZGl1czogMS42MjVyZW07XG5cbmJ1dHRvbiB7XG4gIEBhcHBseSBiZy1kYXJrLXNsaWRlLWJ1dHRvbi1iZyBkYXJrOmJnLXNsaWRlLWJ1dHRvbi1iZztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuXG4gICYubGVhcm4tbW9yZSB7XG4gICAgd2lkdGg6IDEwcmVtO1xuICAgIGhlaWdodDogYXV0bztcblxuICAgIC5jaXJjbGUge1xuICAgICAgQGFwcGx5IGJnLWRhcmstc2xpZGUtY2lyY2xlLWJ1dHRvbi1iZyBkYXJrOmJnLXNsaWRlLWNpcmNsZS1idXR0b24tYmc7XG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40NXMsIGN1YmljLWJlemllcigwLjY1LCAwLCAuMDc2LCAxKSk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcblxuICAgICAgLmljb24ge1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40NXMsIGN1YmljLWJlemllcigwLjY1LCAwLCAuMDc2LCAxKSk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcblxuICAgICAgICAmLmFycm93IHtcbiAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40NXMsIGN1YmljLWJlemllcigwLjY1LCAwLCAuMDc2LCAxKSk7XG4gICAgICAgICAgbGVmdDogMC4xMjVyZW07XG4gICAgICAgICAgd2lkdGg6IDEuMTI1cmVtO1xuICAgICAgICAgIGhlaWdodDogMC4xMjVyZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcblxuICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICBAYXBwbHkgYm9yZGVyLXQtZGFyay1zbGlkZS1idXR0b24taWNvbiBkYXJrOmJvcmRlci10LXNsaWRlLWJ1dHRvbi1pY29uO1xuICAgICAgICAgICAgQGFwcGx5IGJvcmRlci1yLWRhcmstc2xpZGUtYnV0dG9uLWljb24gZGFyazpib3JkZXItci1zbGlkZS1idXR0b24taWNvbjtcbiAgICAgICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDAuMTI1cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwLjEyNXJlbTtcbiAgICAgICAgICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgdG9wOiAtMC4yNXJlbTtcbiAgICAgICAgICAgIHJpZ2h0OiAwLjA2MjVyZW07XG4gICAgICAgICAgICB3aWR0aDogMC42MjVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDAuNjI1cmVtO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5idXR0b24tdGV4dCB7XG4gICAgICBAYXBwbHkgdGV4dC1kYXJrLXRleHQtY29sb3IgZGFyazp0ZXh0LXRleHQtY29sb3I7XG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40NXMsIGN1YmljLWJlemllcigwLjY1LCAwLCAuMDc2LCAxKSk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDA7XG4gICAgICBtYXJnaW46IDAgMCAwIDEuODVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMC44O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIC5jaXJjbGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5pY29uIHtcbiAgICAgICAgJi5hcnJvdyB7XG4gICAgICAgICAgQGFwcGx5IGJnLWRhcmstc2xpZGUtYnV0dG9uLWljb24gZGFyazpiZy1zbGlkZS1idXR0b24taWNvbjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcmVtLCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5idXR0b24tdGV4dCB7XG4gICAgICBAYXBwbHkgdGV4dC1kYXJrLXNsaWRlLWJ1dHRvbi1pY29uIGRhcms6dGV4dC1zbGlkZS1idXR0b24taWNvbjtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 4701:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 912);
/* harmony import */ var _shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/slide-button/slide-button.component */ 3227);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 2209);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 33);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8559);





class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_0__.SlideButtonComponent],
    imports: [primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_0__.SlideButtonComponent]
  });
})();

/***/ }),

/***/ 3503:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  cdnUrl: 'https://cdn.statically.io/gh/gilles-gardet/gilles-gardet.github.io/master'
};

/***/ }),

/***/ 40:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 8559);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 3503);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6856);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 6685);
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app-routing.module */ 5133);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3858);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.module */ 8376);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8139);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-markdown */ 7421);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ 4701);










if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule), (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule), (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule), (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule), (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule), (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(ngx_markdown__WEBPACK_IMPORTED_MODULE_9__.MarkdownModule.forRoot()), (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule)]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(40)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map