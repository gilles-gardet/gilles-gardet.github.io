"use strict";
(self["webpackChunkcv"] = self["webpackChunkcv"] || []).push([["main"],{

/***/ 4121:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1385);
/* harmony import */ var _core_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/string.utils */ 175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3928);




const routes = [{
  path: _core_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__.EMPTY_STRING,
  pathMatch: 'full',
  loadComponent: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @features/resume/components/resume/resume.component */ 8550)).then(module => module.ResumeComponent)
}, {
  path: '**',
  loadComponent: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @features/resume/components/resume/resume.component */ 8550)).then(module => module.ResumeComponent)
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppRoutingModule)();
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

/***/ 381:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3928);
/* harmony import */ var _features_general_components_general_general_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @features/general/components/general/general.component */ 2783);
/* harmony import */ var _features_resume_components_resume_resume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @features/resume/components/resume/resume.component */ 8550);
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/scrolltop */ 3736);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4064);
/* harmony import */ var _core_utils_string_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/string.utils */ 175);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/config.service */ 5477);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/progressspinner */ 2412);
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/blockui */ 8238);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 4595);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4128);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 665);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 4774);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jsverse/transloco */ 1945);

















function AppComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-progressSpinner", 0);
  }
}
function AppComponent_Conditional_2_Template(rf, ctx) {
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
    this.translocoService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_jsverse_transloco__WEBPACK_IMPORTED_MODULE_5__.TranslocoService);
    this.changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef);
    this.configService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.DestroyRef);
    this.language = _core_utils_string_utils__WEBPACK_IMPORTED_MODULE_2__.EMPTY_STRING;
    this._initLanguagePreference();
    this.isLoading$ = this.configService.loading$;
  }
  /**
   * @inheritDoc
   */
  ngOnInit() {
    const language$ = this.translocoService.langChanges$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.configService.setLoading$(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.timer)(600)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.configService.setLoading$(false)), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_9__.takeUntilDestroyed)(this.destroyRef));
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
      const browserLang = navigator.language ?? 'en';
      sessionLanguage = /en|fr/.exec(browserLang) ? browserLang : 'en';
    } else {
      sessionLanguage = languageKey;
    }
    this._setLanguage(sessionLanguage);
  }
  /**
   * .Change the current language by the given one.
   *
   * @param language the new language to be set
   */
  _setLanguage(language) {
    this.translocoService.setActiveLang(language);
    this.language = language;
    if (localStorage.getItem(_core_services_config_service__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE_KEY) !== language) {
      localStorage.setItem(_core_services_config_service__WEBPACK_IMPORTED_MODULE_3__.LANGUAGE_KEY, this.language);
    }
  }
  static #_ = this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)();
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
    decls: 3,
    vars: 3,
    consts: [["strokeWidth", "6", "styleClass", "spinner"], ["id", "container"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AppComponent_Conditional_0_Template, 1, 0, "p-progressSpinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AppComponent_Conditional_2_Template, 6, 0, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.isLoading$) ? 0 : 2);
      }
    },
    dependencies: [primeng_blockui__WEBPACK_IMPORTED_MODULE_10__.BlockUIModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _features_general_components_general_general_component__WEBPACK_IMPORTED_MODULE_0__.GeneralComponent, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_12__.ProgressSpinnerModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_12__.ProgressSpinner, _features_resume_components_resume_resume_component__WEBPACK_IMPORTED_MODULE_1__.ResumeComponent, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_13__.ScrollTopModule, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_13__.ScrollTop],
    styles: [".p-card-title,\n.p-card-subtitle {\n  text-align: center;\n}\n\n.p-progressbar {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(210 14% 89% / var(--tw-bg-opacity)) !important;\n}\n\n.p-progressbar:is(.dark *) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(210 9% 31% / var(--tw-bg-opacity)) !important;\n}\n\n.p-progressbar {\n  height: 0.5rem;\n  border-radius: 5px;\n}\n.p-progressbar .p-progressbar-value {\n  --tw-bg-opacity: 1;\n  background-color: hsl(210 9% 31% / var(--tw-bg-opacity));\n}\n.p-progressbar .p-progressbar-value:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(210 14% 89% / var(--tw-bg-opacity));\n}\n\n.p-tag {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(210 9% 31% / var(--tw-bg-opacity)) !important;\n}\n\n.p-tag:is(.dark *) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(210 14% 89% / var(--tw-bg-opacity)) !important;\n}\n\n.p-tag {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\n\n.p-tag:is(.dark *) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\n\np-scrolltop > button.p-scrolltop {\n  z-index: 1004;\n}\n\np-panel .p-panel-header {\n  display: grid;\n  justify-content: center;\n  border-width: 1px;\n}\np-panel .p-panel-content {\n  border-bottom-width: 1px;\n  border-right-width: 1px;\n  border-left-width: 1px;\n}\np-panel .p-panel-header,\np-panel .p-panel-content {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(210 17% 98% / var(--tw-bg-opacity)) !important;\n}\np-panel .p-panel-header:is(.dark *),\np-panel .p-panel-content:is(.dark *) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(217 17% 20% / var(--tw-bg-opacity)) !important;\n}\np-panel .p-panel-header,\np-panel .p-panel-content {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\np-panel .p-panel-header:is(.dark *),\np-panel .p-panel-content:is(.dark *) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\np-panel .p-panel-header,\np-panel .p-panel-content {\n  --tw-border-opacity: 1 !important;\n  border-color: hsl(210 14% 89% / var(--tw-border-opacity)) !important;\n}\np-panel .p-panel-header:is(.dark *),\np-panel .p-panel-content:is(.dark *) {\n  --tw-border-opacity: 1 !important;\n  border-color: hsl(213 19% 30% / var(--tw-border-opacity)) !important;\n}\n\np-card > div.p-card {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity)) !important;\n}\n\np-card > div.p-card:is(.dark *) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(217 17% 20% / var(--tw-bg-opacity)) !important;\n}\n\np-card > div.p-card {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\n\np-card > div.p-card:is(.dark *) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\n\np-card > div.p-card {\n  position: sticky;\n  top: 2rem;\n}\np-card.alt-card > div.p-card {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity)) !important;\n}\np-card.alt-card > div.p-card:is(.dark *) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(214 18% 15% / var(--tw-bg-opacity)) !important;\n}\n\n.p-menu ul {\n  list-style-type: none;\n}\n.p-menu ul li {\n  margin-left: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.p-menu.p-menu-overlay {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity)) !important;\n}\n.p-menu.p-menu-overlay:is(.dark *) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(217 17% 20% / var(--tw-bg-opacity)) !important;\n}\n.p-menu .p-submenu-header {\n  display: flex;\n  justify-content: center;\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity)) !important;\n}\n.p-menu .p-submenu-header:is(.dark *) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(217 17% 20% / var(--tw-bg-opacity)) !important;\n}\n.p-menu .p-menuitem-link .p-menuitem-text,\n.p-menu .p-submenu-header {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\n.p-menu .p-menuitem-link .p-menuitem-text:is(.dark *),\n.p-menu .p-submenu-header:is(.dark *) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\n.p-menu .p-menuitem-icon {\n  transition: color 0s, background-color 0s;\n}\n.p-menu .p-menuitem-link:not(.p-disabled):hover {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(214 16% 93% / var(--tw-bg-opacity)) !important;\n}\n.p-menu .p-menuitem-link:not(.p-disabled):hover:is(.dark *) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(215 15% 23% / var(--tw-bg-opacity)) !important;\n}\n.p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text,\n.p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {\n  transition: color 0s, background-color 0s;\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\n.p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text:is(.dark *),\n.p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon:is(.dark *) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\n\nbutton.p-button {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\n\nbutton.p-button:is(.dark *) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(212 10% 70% / var(--tw-text-opacity)) !important;\n}\nbutton.p-button > span {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\nbutton.p-button.p-button.p-button-text, button.p-button.p-button.p-button-text:enabled:hover, button.p-button.p-button.p-button-text:enabled:active {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\nbutton.p-button.p-button.p-button-text:is(.dark *), button.p-button.p-button.p-button-text:enabled:hover:is(.dark *), button.p-button.p-button.p-button-text:enabled:active:is(.dark *) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(212 10% 70% / var(--tw-text-opacity)) !important;\n}\nbutton.p-button.p-button.p-button-text:enabled:hover, button.p-button.p-button.p-button-text:enabled:active {\n  background: rgba(75, 85, 94, 0.04);\n}\nbutton.p-button.p-button:focus, button.p-button.p-button.p-button-text:enabled:active {\n  box-shadow: 0 0 0 0.2rem #aab1b9;\n}\n\np-chip[label=\"gilles.gardet@gmail.com\"] {\n  --params: 0.8s ease;\n}\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip {\n  position: relative;\n  overflow: hidden;\n  transition: color var(--params), background-color var(--params);\n  z-index: 0;\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(207 9% 31% / var(--tw-bg-opacity)) !important;\n}\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:is(.dark *) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(216 14% 89% / var(--tw-bg-opacity)) !important;\n}\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:is(.dark *) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(216 14% 89% / var(--tw-bg-opacity)) !important;\n}\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:is(.dark *)::before {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(207 9% 31% / var(--tw-bg-opacity)) !important;\n}\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip::before {\n  transform: translateX(100%);\n  transition: transform var(--params), opacity var(--params);\n}\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:hover {\n  cursor: pointer;\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:hover:is(.dark *) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:hover {\n  background-color: transparent;\n}\np-chip[label=\"gilles.gardet@gmail.com\"] .p-chip:hover::before {\n  transform: translateX(0);\n  opacity: 1;\n}\n\n.p-timeline-event-content,\n.p-timeline-event-opposite {\n  line-height: 1;\n}\n\n.p-button.p-button-secondary.p-button-outlined {\n  color: var(--dark);\n}\n\n.mission {\n  box-shadow: none;\n}\n.mission__animation-left {\n  opacity: 0;\n  transform: translateX(-40px);\n  animation: fadeIn 3s forwards;\n  -webkit-animation: fadeIn 3s forwards;\n  -moz-animation: fadeIn 3s forwards;\n  -o-animation: fadeIn 3s forwards;\n  -ms-animation: fadeIn 3s forwards;\n}\n.mission__animation-right {\n  opacity: 0;\n  transform: translateX(40px);\n  animation: fadeIn 3s forwards;\n  -webkit-animation: fadeIn 3s forwards;\n  -moz-animation: fadeIn 3s forwards;\n  -o-animation: fadeIn 3s forwards;\n  -ms-animation: fadeIn 3s forwards;\n}\n.mission__button {\n  display: flex;\n  justify-content: center;\n}\n\n.p-timeline-event-content > p-card > .p-card > .p-card-body > .p-card-content {\n  text-align: left;\n}\n\n.p-timeline .p-timeline-event-connector {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(216 14% 89% / var(--tw-bg-opacity)) !important;\n}\n\n.p-timeline .p-timeline-event-connector:is(.dark *) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(213 19% 30% / var(--tw-bg-opacity)) !important;\n}\n\n.p-card-content {\n  display: grid;\n  gap: 1rem;\n}\n\n.p-dialog .p-dialog-header,\n.p-dialog .p-dialog-content {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity)) !important;\n}\n\n.p-dialog .p-dialog-header:is(.dark *),\n.p-dialog .p-dialog-content:is(.dark *) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(217 17% 20% / var(--tw-bg-opacity)) !important;\n}\n\n.p-dialog .p-dialog-header,\n.p-dialog .p-dialog-content {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\n\n.p-dialog .p-dialog-header:is(.dark *),\n.p-dialog .p-dialog-content:is(.dark *) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\n.p-dialog .p-dialog-header {\n  display: grid;\n}\n.p-dialog .p-dialog-header .p-dialog-header-icons {\n  grid-area: 1/3/1/4;\n  align-self: flex-start;\n}\n.p-dialog .p-dialog-header .p-dialog-header-icons > button:hover {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(217 17% 20% / var(--tw-bg-opacity)) !important;\n}\n.p-dialog .p-dialog-header .p-dialog-header-icons > button:hover:is(.dark *) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity)) !important;\n}\n.p-dialog .p-dialog-header .p-dialog-header-icons > button:hover {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\n.p-dialog .p-dialog-header .p-dialog-header-icons > button:hover:is(.dark *) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\n.p-dialog .p-dialog-content {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  display: flex;\n  justify-content: center;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n.p-dialog .p-dialog-content .p-progress-spinner-circle {\n  animation: progress-spinner-dash 1.5s ease-in-out infinite, progress-spinner-color 6s ease-in-out infinite;\n}\n@keyframes progress-spinner-color {\n  100%, 0%, 40%, 66%, 80%, 90% {\n    stroke: hsl(210, 9%, 31%) !important;\n  }\n  100%:is(.dark *), 0%:is(.dark *), 40%:is(.dark *), 66%:is(.dark *), 80%:is(.dark *), 90%:is(.dark *) {\n    stroke: hsl(240, 4%, 90%) !important;\n  }\n}\n@keyframes progress-spinner-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n.p-dialog .p-dialog-content-scroll {\n  overflow-y: auto;\n  animation: hideScroll 800ms backwards;\n}\n\n.p-scrolltop.p-link {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(0 0% 30% / var(--tw-bg-opacity)) !important;\n}\n\n.p-scrolltop.p-link:is(.dark *) {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(210 14% 89% / var(--tw-bg-opacity)) !important;\n}\n.p-scrolltop .p-scrolltop-icon {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}\n.p-scrolltop .p-scrolltop-icon:is(.dark *) {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}\n.p-scrolltop .p-scrolltop-icon {\n  height: 1rem;\n  width: 1rem;\n}\n\n.p-link:focus {\n  box-shadow: 0 0 0 0.2rem #aab1b9;\n}\n\n@keyframes hideScroll {\n  from, to {\n    overflow-y: hidden;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@media screen and (max-width: 960px) {\n  .customized-timeline .p-timeline-event:nth-child(even) {\n    flex-direction: row !important;\n  }\n  .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content {\n    text-align: left !important;\n  }\n  .customized-timeline .p-timeline-event-opposite {\n    display: none;\n  }\n  .customized-timeline .p-card {\n    margin-top: 1rem;\n  }\n}\n:not(pre) > pre {\n  --tw-bg-opacity: 1;\n  background-color: hsl(74 7% 15% / var(--tw-bg-opacity));\n}\n:not(pre) > pre:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(60 28% 96% / var(--tw-bg-opacity));\n}\n\npre {\n  --tw-text-opacity: 1;\n  color: hsl(60 28% 96% / var(--tw-text-opacity));\n}\n\npre:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: hsl(74 7% 15% / var(--tw-text-opacity));\n}\n\npre {\n  padding: 0.3rem;\n  margin: 0.5em 0;\n  border-radius: 0.3em;\n  background: none;\n  font-family: Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;\n  font-size: 1em;\n  text-align: left;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  hyphens: none;\n  text-shadow: none;\n}\n\ncode[class*=language-] {\n  font-size: 0.7rem;\n  max-width: calc(100vw - 4rem);\n  display: grid;\n  grid-auto-columns: auto;\n  text-shadow: none;\n  white-space: normal;\n}\n\ncode {\n  --tw-bg-opacity: 1;\n  background-color: hsl(74 7% 15% / var(--tw-bg-opacity));\n}\n\ncode:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(60 28% 96% / var(--tw-bg-opacity));\n}\n\ncode {\n  --tw-text-opacity: 1;\n  color: hsl(60 28% 96% / var(--tw-text-opacity));\n}\n\ncode:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: hsl(74 7% 15% / var(--tw-text-opacity));\n}\n\ncode {\n  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;\n  font-size: 0.7rem;\n  border-radius: 5px;\n  padding: 0.2rem;\n  text-shadow: none;\n}\n\n#container {\n  --tw-bg-opacity: 1;\n  background-color: hsl(0 0% 92% / var(--tw-bg-opacity));\n}\n\n#container:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(214 18% 15% / var(--tw-bg-opacity));\n}\n\n#container {\n  min-height: 100vh;\n  display: grid;\n  grid-template: 1fr/18rem minmax(18rem, 65rem);\n  justify-content: center;\n}\n#container .welcome {\n  height: 100vh;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  scroll-snap-align: end;\n}\n#container .welcome__content h1 {\n  font-size: clamp(1rem, 3vw + 1rem, 4rem);\n  position: relative;\n  font-family: \"Source Code Pro\", monospace;\n  width: max-content;\n}\n#container .welcome__content h1::before, #container .welcome__content h1::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n#container .welcome__content h1::before {\n  background: var(--typewriter-bg);\n  animation: typewriter var(--typewriterSpeed) steps(var(--typewriterCharacters)) 1s forwards;\n}\n#container .welcome__content h1::after {\n  width: 0.125em;\n  background: var(--black);\n  animation: typewriter var(--typewriterSpeed) steps(var(--typewriterCharacters)) 1s forwards, blink 750ms steps(var(--typewriterCharacters)) infinite;\n}\n#container .welcome__content__subtitle {\n  color: var(--black);\n  margin: 5rem 0;\n  font-size: 2rem;\n  font-weight: 400;\n  opacity: 0;\n  transform: translateY(3rem);\n  animation: fadeInUp 2s ease calc(var(--typewriterSpeed) + 2s) forwards;\n}\n#container .welcome__content__goto {\n  opacity: 0;\n  animation: bounce 1.5s infinite calc(var(--typewriterSpeed) + 3s), visibility 1.5s forwards calc(var(--typewriterSpeed) + 3s);\n}\n#container .welcome__content__goto:hover {\n  cursor: pointer;\n}\n@keyframes typewriter {\n  to {\n    left: 100%;\n  }\n}\n@keyframes blink {\n  to {\n    background: transparent;\n  }\n}\n@keyframes visibility {\n  to {\n    opacity: 0.8;\n  }\n}\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-30px);\n  }\n  60% {\n    transform: translateY(-15px);\n  }\n}\n@keyframes fadeInUp {\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n#container > aside {\n  padding: 2rem 0;\n  margin: 0 1rem;\n}\n#container > main {\n  scroll-snap-align: start;\n  display: flex;\n  padding: 2rem 1rem;\n}\n#container .scroll-wrapper {\n  width: 100%;\n  height: 0.2rem;\n  position: fixed;\n  inset: 0 0 auto;\n  z-index: 98;\n}\n#container .scroll-wrapper #scroll-tracker {\n  --tw-bg-opacity: 1;\n  background-color: hsl(180 0% 30% / var(--tw-bg-opacity));\n}\n#container .scroll-wrapper #scroll-tracker:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(210 14% 89% / var(--tw-bg-opacity));\n}\n#container .scroll-wrapper #scroll-tracker {\n  position: fixed;\n  inset: 0 0 auto;\n  height: 0.2rem;\n  width: 0;\n  z-index: 99;\n}\n\n.spinner {\n  animation: progress-spinner-dash 1.5s ease-in-out infinite, progress-spinner-color 6s ease-in-out infinite;\n}\n\n@keyframes progress-spinner-color {\n  100%, 0%, 40%, 66%, 80%, 90% {\n    stroke: hsl(210, 9%, 31%);\n  }\n  100%:is(.dark *), 0%:is(.dark *), 40%:is(.dark *), 66%:is(.dark *), 80%:is(.dark *), 90%:is(.dark *) {\n    stroke: hsl(240, 4%, 90%);\n  }\n}\n@keyframes progress-spinner-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n@media print, screen and (max-width: 960px) {\n  #container {\n    grid-template-columns: minmax(18rem, 65rem);\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvb3ZlcnJpZGUvcHJpbWVuZy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL292ZXJyaWRlL25neC1tYXJrZG93bi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtCQUFBO0FDQ0Y7O0FER0U7RUFBQSw2QkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSw2QkFBQTtFQUFBO0FBQUE7O0FBREY7RUFFRSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVJO0VBQUEsa0JBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSxrQkFBQTtFQUFBO0FBQUE7O0FBS0Y7RUFBQSw2QkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSw2QkFBQTtFQUFBO0FBQUE7O0FBQ0E7RUFBQSwrQkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSwrQkFBQTtFQUFBO0FBQUE7O0FBR0Y7RUFDRSxhQUFBO0FDQUY7O0FES0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FETUk7RUFBQSx3QkFBQTtFQUFBLHVCQUFBO0VBQUE7QUFBQTtBQUtBOztFQUFBLDZCQUFBO0VBQUE7QUFBQTtBQUFBOztFQUFBLDZCQUFBO0VBQUE7QUFBQTtBQUNBOztFQUFBLCtCQUFBO0VBQUE7QUFBQTtBQUFBOztFQUFBLCtCQUFBO0VBQUE7QUFBQTtBQUNBOztFQUFBLGlDQUFBO0VBQUE7QUFBQTtBQUFBOztFQUFBLGlDQUFBO0VBQUE7QUFBQTs7QUFNQTtFQUFBLDZCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBLDZCQUFBO0VBQUE7QUFBQTs7QUFDQTtFQUFBLCtCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBLCtCQUFBO0VBQUE7QUFBQTs7QUFGRjtFQUdFLGdCQUFBO0VBQ0EsU0FBQTtBQ05KO0FEVUk7RUFBQSw2QkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLDZCQUFBO0VBQUE7QUFBQTs7QUFNQTtFQUFBO0FBQUE7QUFFRTtFQUFBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBO0FBRkE7QUFPRjtFQUFBLDZCQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsNkJBQUE7RUFBQTtBQUFBO0FBR0Y7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUFBLGtFQUFBO0FDWEo7QURXSTtFQUFBLDZCQUFBO0VBQUE7QUFBQTtBQUtBOztFQUFBLCtCQUFBO0VBQUE7QUFBQTtBQUFBOztFQUFBLCtCQUFBO0VBQUE7QUFBQTtBQUdGO0VBQ0UseUNBQUE7QUNiSjtBRGlCSTtFQUFBLDZCQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsNkJBQUE7RUFBQTtBQUFBO0FBQ0E7O0VBRUUseUNBQUE7RUFDQSwrQkFBQTtFQUFBLDBEQUFBO0FDYk47QURhTTs7RUFBQSwrQkFBQTtFQUFBO0FBQUE7O0FBVUo7RUFBQSwrQkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSwrQkFBQTtFQUFBO0FBQUE7QUFIRTtFQUFBLGVBQUE7RUFBQTtBQUFBO0FBUUE7RUFBQSwrQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLCtCQUFBO0VBQUE7QUFBQTtBQUdGO0VBRUUsa0NBQUE7QUNwQko7QUR1QkU7RUFFRSxnQ0FBQTtBQ3RCSjs7QUQwQkE7RUFDRSxtQkFBQTtBQ3ZCRjtBRHlCRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUFBLG1FQUFBO0FDdEJKO0FEc0JJO0VBQUEsNkJBQUE7RUFBQTtBQUFBO0FBQ0E7RUFBQSwrQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLCtCQUFBO0VBQUE7QUFBQTtBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUFBLG9FQUFBO0FDckJOO0FEcUJNO0VBQUEsNkJBQUE7RUFBQTtBQUFBO0FBUkY7RUFTRSwyQkFBQTtFQUNBLDBEQUFBO0FDdkJOO0FEMEJJO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0VBQUEsMERBQUE7QUN2Qk47QUR1Qk07RUFBQSwrQkFBQTtFQUFBO0FBQUE7QUFGRjtFQUdFLDZCQUFBO0FDeEJOO0FEMEJNO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0FDeEJSOztBRDhCQTs7RUFFRSxjQUFBO0FDM0JGOztBRDhCQTtFQUNFLGtCQUFBO0FDM0JGOztBRDhCQTtFQUNFLGdCQUFBO0FDM0JGO0FENkJFO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtBQzNCSjtBRDhCRTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7QUM1Qko7QUQrQkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUM3Qko7O0FEaUNBO0VBQ0UsZ0JBQUE7QUM5QkY7O0FEa0NFO0VBQUEsNkJBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEsNkJBQUE7RUFBQTtBQUFBOztBQUdGO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUM5QkY7O0FEb0NJOztFQUFBLDZCQUFBO0VBQUE7QUFBQTs7QUFBQTs7RUFBQSw2QkFBQTtFQUFBO0FBQUE7O0FBQ0E7O0VBQUEsK0JBQUE7RUFBQTtBQUFBOztBQUFBOztFQUFBLCtCQUFBO0VBQUE7QUFBQTtBQUdGO0VBQ0UsYUFBQTtBQ2hDSjtBRGtDSTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUNoQ047QURtQ1E7RUFBQSw2QkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLDZCQUFBO0VBQUE7QUFBQTtBQUNBO0VBQUEsK0JBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSwrQkFBQTtFQUFBO0FBQUE7QUFLTjtFQUNFLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDbkNKO0FEcUNJO0VBQ0UsMEdBQUE7QUNuQ047QURzQ0k7RUFPSTtJQUFBO0VBQUE7RUFBQTtJQUFBO0VBQUE7QUN4Q1I7QUQ0Q0k7RUFDRTtJQUNFLHdCQUFBO0lBQ0Esb0JBQUE7RUMxQ047RUQ0Q0k7SUFDRSx5QkFBQTtJQUNBLHdCQUFBO0VDMUNOO0VENENJO0lBQ0UseUJBQUE7SUFDQSx5QkFBQTtFQzFDTjtBQUNGO0FEOENFO0VBQ0UsZ0JBQUE7RUFDQSxxQ0FBQTtBQzVDSjs7QURrREk7RUFBQSw2QkFBQTtFQUFBO0FBQUE7O0FBQUE7RUFBQSw2QkFBQTtFQUFBO0FBQUE7QUFJQTtFQUFBLCtCQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsK0JBQUE7RUFBQTtBQUFBO0FBQ0E7RUFBQSxZQUFBO0VBQUE7QUFBQTs7QUFJSjtFQUNFLGdDQUFBO0FDaERGOztBRG9EQTtFQUNFO0lBRUUsa0JBQUE7RUNsREY7QUFDRjtBRHFEQTtFQUNFO0lBQ0UsVUFBQTtFQ25ERjtFRHFEQTtJQUNFLFVBQUE7RUNuREY7RURxREE7SUFDRSx3QkFBQTtFQ25ERjtBQUNGO0FEc0dBO0VBRUk7SUFDRSw4QkFBQTtFQ3pESjtFRDJESTtJQUNFLDJCQUFBO0VDekROO0VENkRFO0lBQ0UsYUFBQTtFQzNESjtFRDhERTtJQUNFLGdCQUFBO0VDNURKO0FBQ0Y7QUN4VEU7RUFBQSxrQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFERjtFQUVFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNFQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUQyVEY7O0FDeFRBO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUQyVEY7O0FDdlRFO0VBQUEsa0JBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEsa0JBQUE7RUFBQTtBQUFBOztBQUNBO0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUZGO0VBR0UsK0ZBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FEMlRGOztBQS9WRTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFERjtFQUVFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0VBQ0EsdUJBQUE7QUFtV0Y7QUFqV0U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFtV0o7QUFoV007RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtBQWtXUjtBQWhXUTtFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUFpV1Y7QUE5VlE7RUFDRSxnQ0FBQTtFQUNBLDJGQUFBO0FBZ1dWO0FBN1ZRO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0pBQUE7QUErVlY7QUExVk07RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxzRUFBQTtBQTRWUjtBQXpWTTtFQUNFLFVBQUE7RUFDQSw2SEFBQTtBQTJWUjtBQXhWUTtFQUNFLGVBQUE7QUEwVlY7QUFyVkk7RUFDRTtJQUNFLFVBQUE7RUF1Vk47QUFDRjtBQXBWSTtFQUNFO0lBQ0UsdUJBQUE7RUFzVk47QUFDRjtBQW5WSTtFQUNFO0lBQ0UsWUFBQTtFQXFWTjtBQUNGO0FBbFZJO0VBQ0U7SUFLRSx3QkFBQTtFQWdWTjtFQTlVSTtJQUNFLDRCQUFBO0VBZ1ZOO0VBOVVJO0lBQ0UsNEJBQUE7RUFnVk47QUFDRjtBQTdVSTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBK1VOO0FBQ0Y7QUEzVUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQTZVSjtBQTFVRTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBNFVKO0FBelVFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUEyVUo7QUF4VU07RUFBQSxrQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLGtCQUFBO0VBQUE7QUFBQTtBQURGO0VBRUUsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUEyVU47O0FBdFVBO0VBQ0UsMEdBQUE7QUF5VUY7O0FBdFVBO0VBT0k7SUFBQTtFQUFBO0VBQUE7SUFBQTtFQUFBO0FBcVVKO0FBalVBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLG9CQUFBO0VBbVVGO0VBalVBO0lBQ0UseUJBQUE7SUFDQSx3QkFBQTtFQW1VRjtFQWpVQTtJQUNFLHlCQUFBO0lBQ0EseUJBQUE7RUFtVUY7QUFDRjtBQWhVQTtFQUNFO0lBQ0UsMkNBQUE7SUFDQSxlQUFBO0VBa1VGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucC1jYXJkLXRpdGxlLFxuLnAtY2FyZC1zdWJ0aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnAtcHJvZ3Jlc3NiYXIge1xuICBAYXBwbHkgYmctcHJvZ3Jlc3MtYmFyLWJnIGRhcms6YmctZGFyay1wcm9ncmVzcy1iYXItYmcgI3shaW1wb3J0YW50fTtcbiAgaGVpZ2h0OiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAucC1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gICAgQGFwcGx5IGJnLXByb2dyZXNzLWJhciBkYXJrOmJnLWRhcmstcHJvZ3Jlc3MtYmFyO1xuICB9XG59XG5cbi5wLXRhZyB7XG4gIEBhcHBseSBiZy1wcm9ncmVzcy1iYXIgZGFyazpiZy1kYXJrLXByb2dyZXNzLWJhciAjeyFpbXBvcnRhbnR9O1xuICBAYXBwbHkgdGV4dC1kYXJrLXRleHQtY29sb3IgZGFyazp0ZXh0LXRleHQtY29sb3IgI3shaW1wb3J0YW50fTtcbn1cblxucC1zY3JvbGx0b3AgPiBidXR0b24ucC1zY3JvbGx0b3Age1xuICB6LWluZGV4OiAxMDA0O1xufVxuXG5wLXBhbmVsIHtcblxuICAucC1wYW5lbC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgQGFwcGx5IGJvcmRlcjtcbiAgfVxuXG4gIC5wLXBhbmVsLWNvbnRlbnQge1xuICAgIEBhcHBseSBib3JkZXItYiBib3JkZXItciBib3JkZXItbDtcbiAgfVxuXG4gIC5wLXBhbmVsLWhlYWRlcixcbiAgLnAtcGFuZWwtY29udGVudCB7XG4gICAgQGFwcGx5IGJnLXBhbmVsLXRpdGxlLWJnIGRhcms6YmctZGFyay1wYW5lbC10aXRsZS1iZyAjeyFpbXBvcnRhbnR9O1xuICAgIEBhcHBseSB0ZXh0LXRleHQtY29sb3IgZGFyazp0ZXh0LWRhcmstdGV4dC1jb2xvciAjeyFpbXBvcnRhbnR9O1xuICAgIEBhcHBseSBib3JkZXItcGFuZWwtYm9yZGVyIGRhcms6Ym9yZGVyLWRhcmstcGFuZWwtYm9yZGVyICN7IWltcG9ydGFudH07XG4gIH1cbn1cblxucC1jYXJkIHtcbiAgPiBkaXYucC1jYXJkIHtcbiAgICBAYXBwbHkgYmctY2FyZC1iZyBkYXJrOmJnLWRhcmstY2FyZC1iZyAjeyFpbXBvcnRhbnR9O1xuICAgIEBhcHBseSB0ZXh0LXRleHQtY29sb3IgZGFyazp0ZXh0LWRhcmstdGV4dC1jb2xvciAjeyFpbXBvcnRhbnR9O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAycmVtO1xuICB9XG5cbiAgJi5hbHQtY2FyZCA+IGRpdi5wLWNhcmQge1xuICAgIEBhcHBseSBiZy1jYXJkLWJnIGRhcms6YmctZGFyay1ib2R5LWJnICN7IWltcG9ydGFudH07XG4gIH1cbn1cblxuLnAtbWVudSB7XG4gIHVsIHtcbiAgICBAYXBwbHkgbGlzdC1ub25lO1xuICAgIGxpIHtcbiAgICAgIEBhcHBseSBtbC0wO1xuICAgICAgQGFwcGx5IG10LTA7XG4gICAgICBAYXBwbHkgbWItMDtcbiAgICB9XG4gIH1cblxuICAmLnAtbWVudS1vdmVybGF5IHtcbiAgICBAYXBwbHkgYmctbWVudS1iZyBkYXJrOmJnLWRhcmstbWVudS1iZyAjeyFpbXBvcnRhbnR9O1xuICB9XG5cbiAgLnAtc3VibWVudS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgQGFwcGx5IGJnLW1lbnUtYmcgZGFyazpiZy1kYXJrLW1lbnUtYmcgI3shaW1wb3J0YW50fTtcbiAgfVxuXG4gIC5wLW1lbnVpdGVtLWxpbmsgLnAtbWVudWl0ZW0tdGV4dCxcbiAgLnAtc3VibWVudS1oZWFkZXIge1xuICAgIEBhcHBseSB0ZXh0LXRleHQtY29sb3IgZGFyazp0ZXh0LWRhcmstdGV4dC1jb2xvciAjeyFpbXBvcnRhbnR9O1xuICB9XG5cbiAgLnAtbWVudWl0ZW0taWNvbiB7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMHMsIGJhY2tncm91bmQtY29sb3IgMHM7XG4gIH1cblxuICAucC1tZW51aXRlbS1saW5rOm5vdCgucC1kaXNhYmxlZCk6aG92ZXIge1xuICAgIEBhcHBseSBiZy1tZW51LWl0ZW0taG92ZXIgZGFyazpiZy1kYXJrLW1lbnUtaXRlbS1ob3ZlciAjeyFpbXBvcnRhbnR9O1xuICAgIC5wLW1lbnVpdGVtLXRleHQsXG4gICAgLnAtbWVudWl0ZW0taWNvbiB7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwcywgYmFja2dyb3VuZC1jb2xvciAwcztcbiAgICAgIEBhcHBseSB0ZXh0LXRleHQtY29sb3IgZGFyazp0ZXh0LWRhcmstdGV4dC1jb2xvciAjeyFpbXBvcnRhbnR9O1xuICAgIH1cbiAgfVxufVxuXG5idXR0b24ucC1idXR0b24ge1xuICA+IHNwYW4ge1xuICAgIEBhcHBseSB0ZXh0LWJhc2U7XG4gIH1cblxuICBAYXBwbHkgdGV4dC1tZW51LWJ1dHRvbiBkYXJrOnRleHQtZGFyay1tZW51LWJ1dHRvbiAjeyFpbXBvcnRhbnR9O1xuXG4gICYucC1idXR0b24ucC1idXR0b24tdGV4dCxcbiAgJi5wLWJ1dHRvbi5wLWJ1dHRvbi10ZXh0OmVuYWJsZWQ6aG92ZXIsXG4gICYucC1idXR0b24ucC1idXR0b24tdGV4dDplbmFibGVkOmFjdGl2ZSB7XG4gICAgQGFwcGx5IHRleHQtbWVudS1idXR0b24gZGFyazp0ZXh0LWRhcmstbWVudS1idXR0b24gI3shaW1wb3J0YW50fTtcbiAgfVxuXG4gICYucC1idXR0b24ucC1idXR0b24tdGV4dDplbmFibGVkOmhvdmVyLFxuICAmLnAtYnV0dG9uLnAtYnV0dG9uLXRleHQ6ZW5hYmxlZDphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNzUsIDg1LCA5NCwgMC4wNCk7XG4gIH1cblxuICAmLnAtYnV0dG9uOmZvY3VzLFxuICAmLnAtYnV0dG9uLnAtYnV0dG9uLXRleHQ6ZW5hYmxlZDphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAjYWFiMWI5O1xuICB9XG59XG5cbnAtY2hpcFtsYWJlbD0nZ2lsbGVzLmdhcmRldEBnbWFpbC5jb20nXSB7XG4gIC0tcGFyYW1zOiAwLjhzIGVhc2U7XG5cbiAgLnAtY2hpcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tcGFyYW1zKSwgYmFja2dyb3VuZC1jb2xvciB2YXIoLS1wYXJhbXMpO1xuICAgIHotaW5kZXg6IDA7XG4gICAgQGFwcGx5IGJnLWNoaXAtYmcgZGFyazpiZy1kYXJrLWNoaXAtYmcgI3shaW1wb3J0YW50fTtcbiAgICBAYXBwbHkgdGV4dC1kYXJrLXRleHQtY29sb3IgZGFyazp0ZXh0LXRleHQtY29sb3IgI3shaW1wb3J0YW50fTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgQGFwcGx5IGJnLWRhcmstY2hpcC1iZyBkYXJrOmJnLWNoaXAtYmcgI3shaW1wb3J0YW50fTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS1wYXJhbXMpLCBvcGFjaXR5IHZhcigtLXBhcmFtcyk7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBAYXBwbHkgdGV4dC10ZXh0LWNvbG9yIGRhcms6dGV4dC1kYXJrLXRleHQtY29sb3IgI3shaW1wb3J0YW50fTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5wLXRpbWVsaW5lLWV2ZW50LWNvbnRlbnQsXG4ucC10aW1lbGluZS1ldmVudC1vcHBvc2l0ZSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4ucC1idXR0b24ucC1idXR0b24tc2Vjb25kYXJ5LnAtYnV0dG9uLW91dGxpbmVkIHtcbiAgY29sb3I6IHZhcigtLWRhcmspO1xufVxuXG4ubWlzc2lvbiB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgJl9fYW5pbWF0aW9uLWxlZnQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MHB4KTtcbiAgICBhbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgLW1zLWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICB9XG5cbiAgJl9fYW5pbWF0aW9uLXJpZ2h0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MHB4KTtcbiAgICBhbmltYXRpb246IGZhZGVJbiAzcyBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlSW4gM3MgZm9yd2FyZHM7XG4gICAgLW1zLWFuaW1hdGlvbjogZmFkZUluIDNzIGZvcndhcmRzO1xuICB9XG5cbiAgJl9fYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbi5wLXRpbWVsaW5lLWV2ZW50LWNvbnRlbnQgPiBwLWNhcmQgPiAucC1jYXJkID4gLnAtY2FyZC1ib2R5ID4gLnAtY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnAtdGltZWxpbmUgLnAtdGltZWxpbmUtZXZlbnQtY29ubmVjdG9yIHtcbiAgQGFwcGx5IGJnLXRpbWVsaW5lLWNvbm5lY3RvciBkYXJrOmJnLWRhcmstdGltZWxpbmUtY29ubmVjdG9yICN7IWltcG9ydGFudH07XG59XG5cbi5wLWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXJlbTtcbn1cblxuLnAtZGlhbG9nIHtcbiAgLnAtZGlhbG9nLWhlYWRlcixcbiAgLnAtZGlhbG9nLWNvbnRlbnQge1xuICAgIEBhcHBseSBiZy1jYXJkLWJnIGRhcms6YmctZGFyay1jYXJkLWJnICN7IWltcG9ydGFudH07XG4gICAgQGFwcGx5IHRleHQtdGV4dC1jb2xvciBkYXJrOnRleHQtZGFyay10ZXh0LWNvbG9yICN7IWltcG9ydGFudH07XG4gIH1cblxuICAucC1kaWFsb2ctaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgLnAtZGlhbG9nLWhlYWRlci1pY29ucyB7XG4gICAgICBncmlkLWFyZWE6IDEgLyAzIC8gMSAvIDQ7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuXG4gICAgICA+IGJ1dHRvbjpob3ZlciB7XG4gICAgICAgIEBhcHBseSBiZy1kYXJrLWNhcmQtYmcgZGFyazpiZy1jYXJkLWJnICN7IWltcG9ydGFudH07XG4gICAgICAgIEBhcHBseSB0ZXh0LWRhcmstdGV4dC1jb2xvciBkYXJrOnRleHQtdGV4dC1jb2xvciAjeyFpbXBvcnRhbnR9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wLWRpYWxvZy1jb250ZW50IHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG5cbiAgICAucC1wcm9ncmVzcy1zcGlubmVyLWNpcmNsZSB7XG4gICAgICBhbmltYXRpb246IHByb2dyZXNzLXNwaW5uZXItZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlLCBwcm9ncmVzcy1zcGlubmVyLWNvbG9yIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcHJvZ3Jlc3Mtc3Bpbm5lci1jb2xvciB7XG4gICAgICAxMDAlLFxuICAgICAgMCUsXG4gICAgICA0MCUsXG4gICAgICA2NiUsXG4gICAgICA4MCUsXG4gICAgICA5MCUge1xuICAgICAgICBAYXBwbHkgc3Ryb2tlLXRleHQtY29sb3IgZGFyazpzdHJva2UtZGFyay10ZXh0LWNvbG9yICN7IWltcG9ydGFudH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBwcm9ncmVzcy1zcGlubmVyLWRhc2gge1xuICAgICAgMCUge1xuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgICAgfVxuICAgICAgNTAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNXB4O1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTI0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnAtZGlhbG9nLWNvbnRlbnQtc2Nyb2xsIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGFuaW1hdGlvbjogaGlkZVNjcm9sbCA4MDBtcyBiYWNrd2FyZHM7XG4gIH1cbn1cblxuLnAtc2Nyb2xsdG9wIHtcbiAgJi5wLWxpbmsge1xuICAgIEBhcHBseSBiZy1zY3JvbGwtYmcgZGFyazpiZy1kYXJrLXNjcm9sbC1iZyAjeyFpbXBvcnRhbnR9O1xuICB9XG5cbiAgLnAtc2Nyb2xsdG9wLWljb24ge1xuICAgIEBhcHBseSB0ZXh0LWRhcmstdGV4dC1jb2xvciBkYXJrOnRleHQtdGV4dC1jb2xvciAjeyFpbXBvcnRhbnR9O1xuICAgIEBhcHBseSB3LTQgaC00O1xuICB9XG59XG5cbi5wLWxpbms6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gI2FhYjFiOTtcbn1cblxuXG5Aa2V5ZnJhbWVzIGhpZGVTY3JvbGwge1xuICBmcm9tLFxuICB0byB7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG5ALW8ta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG5ALW1zLWtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmN1c3RvbWl6ZWQtdGltZWxpbmUge1xuICAgIC5wLXRpbWVsaW5lLWV2ZW50Om50aC1jaGlsZChldmVuKSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG5cbiAgICAgIC5wLXRpbWVsaW5lLWV2ZW50LWNvbnRlbnQge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnAtdGltZWxpbmUtZXZlbnQtb3Bwb3NpdGUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAucC1jYXJkIHtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzcmMvc3R5bGVzL292ZXJyaWRlL3ByaW1lbmcnO1xuQHVzZSAnc3JjL3N0eWxlcy9vdmVycmlkZS9uZ3gtbWFya2Rvd24nO1xuXG4jY29udGFpbmVyIHtcbiAgQGFwcGx5IGJnLWJvZHktYmcgZGFyazpiZy1kYXJrLWJvZHktYmc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxOHJlbSBtaW5tYXgoMThyZW0sIDY1cmVtKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLndlbGNvbWUge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBlbmQ7XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzdncgKyAxcmVtLCA0cmVtKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LWZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsIG1vbm9zcGFjZTtcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuXG4gICAgICAgICY6OmJlZm9yZSxcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR5cGV3cml0ZXItYmcpO1xuICAgICAgICAgIGFuaW1hdGlvbjogdHlwZXdyaXRlciB2YXIoLS10eXBld3JpdGVyU3BlZWQpIHN0ZXBzKHZhcigtLXR5cGV3cml0ZXJDaGFyYWN0ZXJzKSkgMXMgZm9yd2FyZHM7XG4gICAgICAgIH1cblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgd2lkdGg6IDAuMTI1ZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xuICAgICAgICAgIGFuaW1hdGlvbjogdHlwZXdyaXRlciB2YXIoLS10eXBld3JpdGVyU3BlZWQpIHN0ZXBzKHZhcigtLXR5cGV3cml0ZXJDaGFyYWN0ZXJzKSkgMXMgZm9yd2FyZHMsXG4gICAgICAgICAgICBibGluayA3NTBtcyBzdGVwcyh2YXIoLS10eXBld3JpdGVyQ2hhcmFjdGVycykpIGluZmluaXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICZfX3N1YnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAgICAgbWFyZ2luOiA1cmVtIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNyZW0pO1xuICAgICAgICBhbmltYXRpb246IGZhZGVJblVwIDJzIGVhc2UgY2FsYyh2YXIoLS10eXBld3JpdGVyU3BlZWQpICsgMnMpIGZvcndhcmRzO1xuICAgICAgfVxuXG4gICAgICAmX19nb3RvIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYW5pbWF0aW9uOiBib3VuY2UgMS41cyBpbmZpbml0ZSBjYWxjKHZhcigtLXR5cGV3cml0ZXJTcGVlZCkgKyAzcyksXG4gICAgICAgICAgdmlzaWJpbGl0eSAxLjVzIGZvcndhcmRzIGNhbGModmFyKC0tdHlwZXdyaXRlclNwZWVkKSArIDNzKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHR5cGV3cml0ZXIge1xuICAgICAgdG8ge1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgYmxpbmsge1xuICAgICAgdG8ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHZpc2liaWxpdHkge1xuICAgICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBib3VuY2Uge1xuICAgICAgMCUsXG4gICAgICAyMCUsXG4gICAgICA1MCUsXG4gICAgICA4MCUsXG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuICAgICAgNDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgICAgIH1cbiAgICAgIDYwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBmYWRlSW5VcCB7XG4gICAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICA+IGFzaWRlIHtcbiAgICBwYWRkaW5nOiAycmVtIDA7XG4gICAgbWFyZ2luOiAwIDFyZW07XG4gIH1cblxuICA+IG1haW4ge1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgfVxuXG4gIC5zY3JvbGwtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwLjJyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGluc2V0OiAwIDAgYXV0bztcbiAgICB6LWluZGV4OiA5ODtcblxuICAgICNzY3JvbGwtdHJhY2tlciB7XG4gICAgICBAYXBwbHkgYmctcHJvZ3Jlc3MgZGFyazpiZy1kYXJrLXByb2dyZXNzO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgaW5zZXQ6IDAgMCBhdXRvO1xuICAgICAgaGVpZ2h0OiAwLjJyZW07XG4gICAgICB3aWR0aDogMDtcbiAgICAgIHotaW5kZXg6IDk5O1xuICAgIH1cbiAgfVxufVxuXG4uc3Bpbm5lciB7XG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3Mtc3Bpbm5lci1kYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUsIHByb2dyZXNzLXNwaW5uZXItY29sb3IgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3Mtc3Bpbm5lci1jb2xvciB7XG4gIDEwMCUsXG4gIDAlLFxuICA0MCUsXG4gIDY2JSxcbiAgODAlLFxuICA5MCUge1xuICAgIEBhcHBseSBzdHJva2UtdGV4dC1jb2xvciBkYXJrOnN0cm9rZS1kYXJrLXRleHQtY29sb3I7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcy1zcGlubmVyLWRhc2gge1xuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1cHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNHB4O1xuICB9XG59XG5cbkBtZWRpYSBwcmludCwgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAjY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxOHJlbSwgNjVyZW0pO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgfVxufVxuIiwiOm5vdChwcmUpID4gcHJlIHtcbiAgQGFwcGx5IGJnLXByZS1iZyBkYXJrOmJnLWRhcmstcHJlLWJnO1xufVxuXG5wcmUge1xuICBAYXBwbHkgdGV4dC1wcmUtdGV4dCBkYXJrOnRleHQtZGFyay1wcmUtdGV4dDtcbiAgcGFkZGluZzogMC4zcmVtO1xuICBtYXJnaW46IDAuNWVtIDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LWZhbWlseTogQ29uc29sYXMsIE1vbmFjbywgJ0FuZGFsZSBNb25vJywgJ1VidW50dSBNb25vJywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIC1tb3otdGFiLXNpemU6IDQ7XG4gIHRhYi1zaXplOiA0O1xuICAtd2Via2l0LWh5cGhlbnM6IG5vbmU7XG4gIGh5cGhlbnM6IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG5jb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10ge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNHJlbSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1jb2x1bW5zOiBhdXRvO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuY29kZSB7XG4gIEBhcHBseSBiZy1wcmUtYmcgZGFyazpiZy1kYXJrLXByZS1iZztcbiAgQGFwcGx5IHRleHQtcHJlLXRleHQgZGFyazp0ZXh0LWRhcmstcHJlLXRleHQ7XG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBTRiBNb25vLCBNZW5sbywgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIHRleHQtc2hhZG93OiBub25lO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 3496:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreModule: () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4064);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 5477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3928);



class CoreModule {
  constructor(parentModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import Core modules in the AppModule only.');
    }
  }
  static #_ = this.ɵfac = function CoreModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CoreModule, 12));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: CoreModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    providers: [_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
})();

/***/ }),

/***/ 5477:
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3928);


const THEME_KEY = 'theme';
const LANGUAGE_KEY = 'lang';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
/**
 * Define the color sheme to apply and store the result in a local variable through a IIFE (Immediately Invoked
 * Function Expression).
 */
const theme = (() => {
  const isOperatingSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isThemeStored = THEME_KEY in localStorage;
  if (!isThemeStored && isOperatingSystemDark) {
    return DARK_THEME;
  }
  return localStorage.getItem(THEME_KEY) ?? LIGHT_THEME;
})();
class ConfigService {
  constructor() {
    this._theme$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(theme);
    this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
  }
  /**
   * Set the theme
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
  /**
   * Set the loading flag
   *
   * @param loading the flag to be set
   */
  setLoading$(loading) {
    this._loading$.next(loading);
  }
  /**
   * Return the current loading flag
   */
  get loading$() {
    return this._loading$;
  }
  static #_ = this.ɵfac = function ConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ConfigService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ConfigService,
    factory: ConfigService.ɵfac
  });
}

/***/ }),

/***/ 5851:
/*!**************************************************!*\
  !*** ./src/app/core/services/mission.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MissionService: () => (/* binding */ MissionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3928);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4458);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3518);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 9575);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 6419);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4128);
/* harmony import */ var _core_utils_string_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/string.utils */ 175);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsverse/transloco */ 1945);








class MissionService {
  constructor() {
    this.translocoService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_jsverse_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoService);
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
    const language = this.translocoService.getActiveLang();
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
    const onGoingLabel = this.translocoService.getActiveLang() === 'fr' ? 'en cours' : 'ongoing';
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
    if (this.translocoService.getActiveLang() === 'fr') {
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
  static #_ = this.ɵfac = function MissionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MissionService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: MissionService,
    factory: MissionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 175:
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

/***/ 2783:
/*!**************************************************************************!*\
  !*** ./src/app/features/general/components/general/general.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralComponent: () => (/* binding */ GeneralComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3928);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 5477);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 4595);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/avatar */ 5407);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 7856);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/card */ 3374);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/chip */ 3918);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputswitch */ 4572);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/ripple */ 2222);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tooltip */ 7973);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ 6428);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/menu */ 393);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ 6419);
/* harmony import */ var _core_services_mission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/mission.service */ 5851);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 4774);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jsverse/transloco */ 1945);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1022);

























const _c0 = ["menu"];
function GeneralComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "p-avatar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Gilles Gardet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p-chip", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GeneralComponent_ng_container_0_Template_p_chip_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.openEmailClient());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GeneralComponent_ng_container_0_Template_button_click_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const menu_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](menu_r3.toggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "p-menu", 9, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const translate_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](translate_r4("cv.contact.presentation"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pTooltip", translate_r4("cv.contact.menu.tooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("popup", true)("model", ctx_r1.menuItems)("autoZIndex", true);
  }
}
class GeneralComponent {
  constructor() {
    this.configService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService);
    this.translocoService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_jsverse_transloco__WEBPACK_IMPORTED_MODULE_5__.TranslocoService);
    this.missionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_services_mission_service__WEBPACK_IMPORTED_MODULE_3__.MissionService);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.DestroyRef);
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
    const contactTranslatedObject$ = this.translocoService.selectTranslateObject('cv.contact').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(contactTranslatedObject => this._setMenuItems(contactTranslatedObject)));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([contactTranslatedObject$, this.configService.theme$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(([contactTranslatedObject, theme]) => this.onThemeChange(contactTranslatedObject, theme)), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__.takeUntilDestroyed)(this.destroyRef)).subscribe();
  }
  /**
   * Initialize the contextual menu with the default items.
   *
   * @param contact the contact translated object
   */
  _setMenuItems(contact) {
    this.menuItems = [{
      label: 'Menu',
      items: [{
        label: this.isDarkTheme ? contact.menu.items.mode.dark : contact.menu.items.mode.light,
        icon: this.isDarkTheme ? 'pi pi-moon' : 'pi pi-sun',
        title: contact.menu.items.mode.title,
        command: () => this.isDarkTheme ? this.configService.setTheme$(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.LIGHT_THEME) : this.configService.setTheme$(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME)
      }, {
        label: contact.menu.items.language.label,
        icon: 'pi pi-globe',
        title: contact.menu.items.language.title,
        command: () => this.changeLanguage(this.translocoService.getActiveLang() === 'fr' ? 'en' : 'fr')
      }, {
        label: contact.menu.items.download.label,
        icon: 'pi pi-download',
        title: contact.menu.items.download.title,
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
    this.translocoService.setActiveLang(language);
    if (localStorage.getItem(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE_KEY) !== language) {
      localStorage.setItem(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE_KEY, language);
    }
    this.missionService.clearCache();
  }
  /**
   * Listen for the changes on the theme mode selection and apply the CSS theme according to it.
   *
   * @param theme the selected theme (light or dark)
   * @param contact the contact translated object
   */
  onThemeChange(contact, theme) {
    if (theme === _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME) {
      this._setDarkTheme(contact);
      return;
    }
    this._setLightTheme(contact);
  }
  /**
   * Set the light theme, chnage its corresponding menu item and store it as a local browser value.
   *
   * @param contact the contact translated object
   */
  _setLightTheme(contact) {
    this.isDarkTheme = false;
    document.documentElement.classList.remove(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME);
    localStorage.setItem(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.THEME_KEY, _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.LIGHT_THEME);
    const childMenuItem = this._extractModeMenuItem();
    childMenuItem.label = contact.menu.items.mode.dark;
    childMenuItem.icon = 'pi pi-moon';
  }
  /**
   * Extract the first child menu item (dark/light mode) from the menu items.
   *
   * @return the child menu item as a {@link MenuItem}
   */
  _extractModeMenuItem() {
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
   *
   * @param contact the contact translated object
   */
  _setDarkTheme(contact) {
    this.isDarkTheme = true;
    document.documentElement.classList.add(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME);
    localStorage.setItem(_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.THEME_KEY, _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME);
    const childMenuItem = this._extractModeMenuItem();
    childMenuItem.label = contact.menu.items.mode.light;
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
  static #_ = this.ɵfac = function GeneralComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || GeneralComponent)();
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
    decls: 1,
    vars: 0,
    consts: [["menu", ""], [4, "transloco"], [1, "container"], [1, "general"], ["size", "xlarge", "shape", "circle", "styleClass", "p-mt-5", "image", "assets/pictures/me.jpg"], [1, "general__name"], [1, "general__presentation"], ["label", "gilles.gardet@gmail.com", "icon", "pi pi-envelope", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-bars", 1, "p-button-rounded", "p-button-text", "general__button-left", 3, "click", "pTooltip"], ["appendTo", "body", 3, "popup", "model", "autoZIndex"]],
    template: function GeneralComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, GeneralComponent_ng_container_0_Template, 12, 5, "ng-container", 1);
      }
    },
    dependencies: [primeng_avatar__WEBPACK_IMPORTED_MODULE_9__.AvatarModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_9__.Avatar, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_card__WEBPACK_IMPORTED_MODULE_11__.CardModule, primeng_chip__WEBPACK_IMPORTED_MODULE_12__.ChipModule, primeng_chip__WEBPACK_IMPORTED_MODULE_12__.Chip, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_14__.InputSwitchModule, primeng_menu__WEBPACK_IMPORTED_MODULE_15__.MenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_15__.Menu, primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__.Tooltip, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.RippleModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.Ripple, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__.TooltipModule, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_5__.TranslocoDirective],
    styles: [".container[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1 !important;\n  color: hsl(210 9% 31% / var(--tw-text-opacity)) !important;\n}.container[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1 !important;\n  color: hsl(240 4% 90% / var(--tw-text-opacity)) !important;\n}.container[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity)) !important;\n}.container[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1 !important;\n  background-color: hsl(217 17% 20% / var(--tw-bg-opacity)) !important;\n}.container[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1 !important;\n  border-color: hsl(210 14% 89% / var(--tw-border-opacity)) !important;\n}.container[_ngcontent-%COMP%]:is(.dark   *)[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1 !important;\n  border-color: hsl(213 19% 30% / var(--tw-border-opacity)) !important;\n}.container[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  border: 1px solid;\n  padding: 2rem 1rem;\n  position: sticky;\n  top: 2rem;\n  max-width: 100%;\n}\n.container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .general__name[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: bold;\n  margin: 1rem 0;\n}\n.container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .general__presentation[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 1rem;\n}\n.container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .general__button-left[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  left: 0.5rem;\n}\n.container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .general__button-right[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZ2VuZXJhbC9jb21wb25lbnRzL2dlbmVyYWwvZ2VuZXJhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLCtCQUFBO0VBQUE7QUFBQSxDQUFBO0VBQUEsK0JBQUE7RUFBQTtBQUFBLENBQ0E7RUFBQSw2QkFBQTtFQUFBO0FBQUEsQ0FBQTtFQUFBLDZCQUFBO0VBQUE7QUFBQSxDQUNBO0VBQUEsaUNBQUE7RUFBQTtBQUFBLENBQUE7RUFBQSxpQ0FBQTtFQUFBO0FBQUEsQ0FIRjtFQUlFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBUjtBQUdNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQURSO0FBS1E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSFY7QUFNUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKViIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBAYXBwbHkgdGV4dC10ZXh0LWNvbG9yIGRhcms6dGV4dC1kYXJrLXRleHQtY29sb3IgI3shaW1wb3J0YW50fTtcbiAgQGFwcGx5IGJnLWNhcmQtYmcgZGFyazpiZy1kYXJrLWNhcmQtYmcgI3shaW1wb3J0YW50fTtcbiAgQGFwcGx5IGJvcmRlci1wYW5lbC1ib3JkZXIgZGFyazpib3JkZXItZGFyay1wYW5lbC1ib3JkZXIgI3shaW1wb3J0YW50fTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDJyZW07XG4gIG1heC13aWR0aDogMTAwJTtcblxuICAuZ2VuZXJhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuZ2VuZXJhbCB7XG4gICAgICAmX19uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgIH1cblxuICAgICAgJl9fcHJlc2VudGF0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cblxuICAgICAgJl9fYnV0dG9uIHtcbiAgICAgICAgJi1sZWZ0IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwLjVyZW07XG4gICAgICAgICAgbGVmdDogMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1yaWdodCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMC41cmVtO1xuICAgICAgICAgIGxlZnQ6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 2814:
/*!*************************************************************************!*\
  !*** ./src/app/features/resume/components/details/details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailsComponent: () => (/* binding */ DetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3928);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ 4349);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 4595);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ 920);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/progressspinner */ 2412);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4064);
/* harmony import */ var _core_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/string.utils */ 175);
/* harmony import */ var _core_services_mission_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/mission.service */ 5851);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 1764);













const _c0 = () => ({
  maxWidth: "960px"
});
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
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r1.innerLightMission);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r1.innerFullMission);
  }
}
function DetailsComponent_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DetailsComponent_Conditional_0_ng_template_2_Conditional_1_Template, 1, 0, "p-progressSpinner", 8)(2, DetailsComponent_Conditional_0_ng_template_2_Conditional_2_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mission__content-transition", !ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r1.isLoading ? 1 : 2);
  }
}
function DetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-dialog", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("visibleChange", function DetailsComponent_Conditional_0_Template_p_dialog_visibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.isDialogDisplayed, $event) || (ctx_r1.isDialogDisplayed = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onHide", function DetailsComponent_Conditional_0_Template_p_dialog_onHide_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onDialogHiding());
    })("onShow", function DetailsComponent_Conditional_0_Template_p_dialog_onShow_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onMissionLoading());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DetailsComponent_Conditional_0_ng_template_1_Template, 5, 2, "ng-template", 2)(2, DetailsComponent_Conditional_0_ng_template_2_Template, 3, 3, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("visible", ctx_r1.isDialogDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("header", ctx_r1.selectedMission.client)("modal", true)("closeOnEscape", true)("dismissableMask", true)("blockScroll", true);
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
  static #_ = this.ɵfac = function DetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DetailsComponent)();
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
    consts: [[3, "visible", "header", "modal", "style", "closeOnEscape", "dismissableMask", "blockScroll"], [3, "visibleChange", "onHide", "onShow", "visible", "header", "modal", "closeOnEscape", "dismissableMask", "blockScroll"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "mission__title"], [1, "prose", "prose-2xl", "font-bold", "text-slate-600", "dark:text-slate-100"], [1, "mission__title__timelapse"], [1, "mission__content"], ["strokeWidth", "6", "styleClass", "mission__content__spinner"], [1, "mission__content__text"], [3, "data"], [1, "flex", "flex-col", "gap-3", 3, "data"]],
    template: function DetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DetailsComponent_Conditional_0_Template, 3, 9, "p-dialog", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.selectedMission ? 0 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__.ProgressSpinnerModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__.ProgressSpinner, ngx_markdown__WEBPACK_IMPORTED_MODULE_3__.MarkdownModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_3__.MarkdownComponent],
    styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-row-gap: 2rem;\n}\n[_nghost-%COMP%]   .mission__title[_ngcontent-%COMP%] {\n  grid-area: 1/2/1/3;\n}\n[_nghost-%COMP%]   .mission__title__timelapse[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n[_nghost-%COMP%]   .mission__content[_ngcontent-%COMP%] {\n  max-height: 100px;\n  max-width: 100px;\n  transition: max-height 800ms ease-in-out, max-width 800ms ease-in-out;\n}\n[_nghost-%COMP%]   .mission__content__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeText 800ms forwards 800ms;\n}\n[_nghost-%COMP%]   .mission__content__text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: disc;\n}\n[_nghost-%COMP%]   .mission__content__text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n}\n[_nghost-%COMP%]   .mission__content-transition[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  max-width: calc(1280px - 3rem);\n}\n@keyframes _ngcontent-%COMP%_fadeText {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFFSTtFQUNFLGtCQUFBO0FBQU47QUFFTTtFQUNFLGtCQUFBO0FBQVI7QUFJSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxRUFBQTtBQUZOO0FBSU07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtBQUZSO0FBS1U7RUFBQTtBQUFBO0FBRUU7RUFBQTtBQUFBO0FBS047RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0FBSlI7QUFPTTtFQUNFO0lBQ0UsVUFBQTtFQUxSO0VBT007SUFDRSxVQUFBO0VBTFI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1yb3ctZ2FwOiAycmVtO1xuXG4gIC5taXNzaW9uIHtcbiAgICAmX190aXRsZSB7XG4gICAgICBncmlkLWFyZWE6IDEgLyAyIC8gMSAvIDM7XG5cbiAgICAgICZfX3RpbWVsYXBzZSB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgODAwbXMgZWFzZS1pbi1vdXQsIG1heC13aWR0aCA4MDBtcyBlYXNlLWluLW91dDtcblxuICAgICAgJl9fdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZVRleHQgODAwbXMgZm9yd2FyZHMgODAwbXM7XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIEBhcHBseSBsaXN0LWRpc2M7XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgQGFwcGx5IG1sLTg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYtdHJhbnNpdGlvbiB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTI4MHB4IC0gM3JlbSk7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgZmFkZVRleHQge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 1538:
/*!*************************************************************************!*\
  !*** ./src/app/features/resume/components/hobbies/hobbies.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HobbiesComponent: () => (/* binding */ HobbiesComponent)
/* harmony export */ });
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/tag */ 2048);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/panel */ 9574);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 6428);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsverse/transloco */ 1945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3928);







function HobbiesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-panel", 1)(2, "div", 2)(3, "p-tag", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-tag", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p-tag", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p-tag", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p-tag", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", translate_r1("cv.hobbies.panelTitle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](translate_r1("cv.hobbies.content.dev"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](translate_r1("cv.hobbies.content.homelab"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](translate_r1("cv.hobbies.content.movie"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](translate_r1("cv.hobbies.content.basket"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](translate_r1("cv.hobbies.content.running"));
  }
}
class HobbiesComponent {
  static #_ = this.ɵfac = function HobbiesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HobbiesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HobbiesComponent,
    selectors: [["cv-hobbies"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 0,
    consts: [[4, "transloco"], ["id", "hobbies", 3, "header"], [1, "hobbies"], [3, "rounded"]],
    template: function HobbiesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HobbiesComponent_ng_container_0_Template, 13, 11, "ng-container", 0);
      }
    },
    dependencies: [primeng_panel__WEBPACK_IMPORTED_MODULE_2__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_2__.Panel, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, primeng_tag__WEBPACK_IMPORTED_MODULE_3__.TagModule, primeng_tag__WEBPACK_IMPORTED_MODULE_3__.Tag, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_4__.TranslocoDirective],
    styles: [".hobbies[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n@media print {\n  [_nghost-%COMP%] {\n    page-break-before: always;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvaG9iYmllcy9ob2JiaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5QkFBQTtFQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9iYmllcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgOmhvc3Qge1xuICAgIHBhZ2UtYnJlYWstYmVmb3JlOiBhbHdheXM7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 7122:
/*!***************************************************************************!*\
  !*** ./src/app/features/resume/components/missions/missions.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MissionsComponent: () => (/* binding */ MissionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3928);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/panel */ 9574);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/timeline */ 4949);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/card */ 3374);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 6428);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ 4349);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @jsverse/transloco */ 1945);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 1764);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4064);
/* harmony import */ var _shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/slide-button/slide-button.component */ 3890);














function MissionsComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", "#495057");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "pi pi-bookmark");
  }
}
function MissionsComponent_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "markdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 13)(9, "cv-slide-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MissionsComponent_ng_container_0_ng_template_4_Template_cv_slide_button_click_9_listener() {
      const mission_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.emitOpenMissionDialog(mission_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const mission_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mission_r2["client"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", "#6c757d");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mission_r2["timelapse"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", mission_r2.description, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function MissionsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-panel", 1)(2, "p-timeline", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MissionsComponent_ng_container_0_ng_template_3_Template, 2, 3, "ng-template", 3)(4, MissionsComponent_ng_container_0_ng_template_4_Template, 10, 5, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const translate_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("header", translate_r4("cv.missions.panelTitle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.missions);
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
  static #_ = this.ɵfac = function MissionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MissionsComponent)();
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
    decls: 1,
    vars: 0,
    consts: [[4, "transloco"], ["id", "experience", 3, "header"], ["align", "alternate", "styleClass", "customized-timeline", 3, "value"], ["pTemplate", "marker"], ["pTemplate", "content"], [1, "custom-marker"], [3, "ngClass"], [1, "flex", "flex-col", "mt-4", "p-4", "gap-4"], [1, "flex", "flex-col"], [1, "text-2xl", "font-bold", "mb-2", "text-center", "mission__title"], [1, "font-normal", "mb-2", "text-center"], [1, "flex", "flex-col", "pb-4", "gap-4", "text-start"], [3, "innerHTML"], [1, "mission__button"], [3, "click"]],
    template: function MissionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MissionsComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
      }
    },
    dependencies: [primeng_card__WEBPACK_IMPORTED_MODULE_3__.CardModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_5__.MarkdownComponent, primeng_panel__WEBPACK_IMPORTED_MODULE_6__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_6__.Panel, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_1__.SlideButtonComponent, primeng_timeline__WEBPACK_IMPORTED_MODULE_8__.TimelineModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_8__.Timeline, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_9__.TranslocoDirective],
    styles: [".custom-marker[_ngcontent-%COMP%] {\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  justify-content: center;\n  color: var(--white);\n  border-radius: 50%;\n  z-index: 1;\n}\n\n@media print {\n  [_nghost-%COMP%] {\n    page-break-before: always;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvbWlzc2lvbnMvbWlzc2lvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UseUJBQUE7RUFDRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1tYXJrZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICA6aG9zdCB7XG4gICAgcGFnZS1icmVhay1iZWZvcmU6IGFsd2F5cztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 8550:
/*!***********************************************************************!*\
  !*** ./src/app/features/resume/components/resume/resume.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumeComponent: () => (/* binding */ ResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3928);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 7007);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5152);
/* harmony import */ var _features_resume_components_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @features/resume/components/hobbies/hobbies.component */ 1538);
/* harmony import */ var _features_resume_components_missions_missions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @features/resume/components/missions/missions.component */ 7122);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 6428);
/* harmony import */ var _features_resume_components_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/resume/components/skills/skills.component */ 2340);
/* harmony import */ var _features_resume_components_summary_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/resume/components/summary/summary.component */ 734);
/* harmony import */ var _features_resume_components_details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/resume/components/details/details.component */ 2814);
/* harmony import */ var _core_services_mission_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/mission.service */ 5851);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/config.service */ 5477);












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
  static #_ = this.ɵfac = function ResumeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ResumeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: ResumeComponent,
    selectors: [["cv-resume"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 5,
    consts: [[1, "scroll-wrapper"], ["id", "scroll-tracker"], [3, "skills", "clones"], [3, "openDialog", "missions"], [3, "detailsChange", "selectedMission", "isDialogDisplayed"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("missions", ctx.missions);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectedMission", ctx.selectedMission)("isDialogDisplayed", ctx.displayDialog);
      }
    },
    dependencies: [_features_resume_components_details_details_component__WEBPACK_IMPORTED_MODULE_5__.DetailsComponent, _features_resume_components_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_0__.HobbiesComponent, _features_resume_components_missions_missions_component__WEBPACK_IMPORTED_MODULE_1__.MissionsComponent, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _features_resume_components_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__.SkillsComponent, _features_resume_components_summary_summary_component__WEBPACK_IMPORTED_MODULE_4__.SummaryComponent],
    styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-row-gap: 2rem;\n}\n[_nghost-%COMP%]   .mission__title[_ngcontent-%COMP%] {\n  grid-area: 1/2/1/3;\n}\n[_nghost-%COMP%]   .mission__title__timelapse[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n[_nghost-%COMP%]   .mission__content[_ngcontent-%COMP%] {\n  max-height: 100px;\n  max-width: 100px;\n  transition: max-height 800ms ease-in-out, max-width 800ms ease-in-out;\n}\n[_nghost-%COMP%]   .mission__content__spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_progress-spinner-dash 1.5s ease-in-out infinite, _ngcontent-%COMP%_progress-spinner-color 6s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_progress-spinner-color {\n  100%, 0%, 40%, 66%, 80%, 90% {\n    stroke: hsl(210, 9%, 31%);\n  }\n  100%:is(.dark *), 0%:is(.dark *), 40%:is(.dark *), 66%:is(.dark *), 80%:is(.dark *), 90%:is(.dark *) {\n    stroke: hsl(240, 4%, 90%);\n  }\n}\n@keyframes _ngcontent-%COMP%_progress-spinner-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n[_nghost-%COMP%]   .mission__content__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeText 800ms forwards 800ms;\n}\n[_nghost-%COMP%]   .mission__content-transition[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  max-width: calc(1280px - 3rem);\n}\n@keyframes _ngcontent-%COMP%_fadeText {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUk7RUFDRSxrQkFBQTtBQUFOO0FBRU07RUFDRSxrQkFBQTtBQUFSO0FBSUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUVBQUE7QUFGTjtBQUlNO0VBQ0UsMEdBQUE7QUFGUjtBQUtNO0VBT0k7SUFBQTtFQUFBO0VBQUE7SUFBQTtFQUFBO0FBUFY7QUFXTTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQVRSO0VBV007SUFDRSx5QkFBQTtJQUNBLHdCQUFBO0VBVFI7RUFXTTtJQUNFLHlCQUFBO0lBQ0EseUJBQUE7RUFUUjtBQUNGO0FBWU07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtBQVZSO0FBYU07RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0FBWFI7QUFjTTtFQUNFO0lBQ0UsVUFBQTtFQVpSO0VBY007SUFDRSxVQUFBO0VBWlI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1yb3ctZ2FwOiAycmVtO1xuXG4gIC5taXNzaW9uIHtcbiAgICAmX190aXRsZSB7XG4gICAgICBncmlkLWFyZWE6IDEgLyAyIC8gMSAvIDM7XG5cbiAgICAgICZfX3RpbWVsYXBzZSB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgODAwbXMgZWFzZS1pbi1vdXQsIG1heC13aWR0aCA4MDBtcyBlYXNlLWluLW91dDtcblxuICAgICAgJl9fc3Bpbm5lciB7XG4gICAgICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3Mtc3Bpbm5lci1kYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUsIHByb2dyZXNzLXNwaW5uZXItY29sb3IgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgcHJvZ3Jlc3Mtc3Bpbm5lci1jb2xvciB7XG4gICAgICAgIDEwMCUsXG4gICAgICAgIDAlLFxuICAgICAgICA0MCUsXG4gICAgICAgIDY2JSxcbiAgICAgICAgODAlLFxuICAgICAgICA5MCUge1xuICAgICAgICAgIEBhcHBseSBzdHJva2UtdGV4dC1jb2xvciBkYXJrOnN0cm9rZS1kYXJrLXRleHQtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBwcm9ncmVzcy1zcGlubmVyLWRhc2gge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xuICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1cHg7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICZfX3RleHQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBhbmltYXRpb246IGZhZGVUZXh0IDgwMG1zIGZvcndhcmRzIDgwMG1zO1xuICAgICAgfVxuXG4gICAgICAmLXRyYW5zaXRpb24ge1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEyODBweCAtIDNyZW0pO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGZhZGVUZXh0IHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 2340:
/*!***********************************************************************!*\
  !*** ./src/app/features/resume/components/skills/skills.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsComponent: () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3928);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/progressbar */ 4360);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/panel */ 9574);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 6428);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsverse/transloco */ 1945);








const _forTrack0 = ($index, $item) => $item.name;
function SkillsComponent_ng_container_0_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-progressBar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](skill_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", skill_r1.rate)("showValue", false);
  }
}
function SkillsComponent_ng_container_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](0, SkillsComponent_ng_container_0_Conditional_3_For_1_Template, 4, 3, "div", 3, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r1._skills);
  }
}
function SkillsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-panel", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SkillsComponent_ng_container_0_Conditional_3_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const translate_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", translate_r3("cv.skills.panelTitle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!!ctx_r1._skills && !!ctx_r1._clones ? 3 : -1);
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
  static #_ = this.ɵfac = function SkillsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SkillsComponent)();
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
    decls: 1,
    vars: 0,
    consts: [[4, "transloco"], ["id", "skills", 3, "header"], [1, "skills"], [1, "skills__languages"], [3, "value", "showValue"]],
    template: function SkillsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SkillsComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
      }
    },
    dependencies: [primeng_panel__WEBPACK_IMPORTED_MODULE_2__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_2__.Panel, primeng_progressbar__WEBPACK_IMPORTED_MODULE_3__.ProgressBarModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_3__.ProgressBar, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_4__.TranslocoDirective],
    styles: [".skills[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 2rem;\n  grid-row-gap: 1rem;\n  padding: 0 2rem;\n}\n.skills__languages[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.skills__languages[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: start;\n  margin-right: 1rem;\n}\n.skills__languages[_ngcontent-%COMP%]    > p-progressbar[_ngcontent-%COMP%] {\n  flex: 2;\n}\n\n@media screen and (max-width: 960px) {\n  .skills[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDRSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNOO0FBRUk7RUFDRSxPQUFBO0FBQU47O0FBS0E7RUFDRTtJQUNFLDBCQUFBO0VBRkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5za2lsbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMnJlbTtcbiAgZ3JpZC1yb3ctZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAwIDJyZW07XG5cbiAgJl9fbGFuZ3VhZ2VzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICA+IHNwYW4ge1xuICAgICAgZmxleDogMTtcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cblxuICAgID4gcC1wcm9ncmVzc2JhciB7XG4gICAgICBmbGV4OiAyO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuc2tpbGxzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 734:
/*!*************************************************************************!*\
  !*** ./src/app/features/resume/components/summary/summary.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryComponent: () => (/* binding */ SummaryComponent)
/* harmony export */ });
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/panel */ 9574);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 6428);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsverse/transloco */ 1945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3928);





const _c0 = a0 => ({
  value: a0
});
function SummaryComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", translate_r1("cv.summary.panelTitle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", translate_r1("cv.summary.content", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r1.yearsOfExperience)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
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
  static #_ = this.ɵfac = function SummaryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SummaryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SummaryComponent,
    selectors: [["cv-summary"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 0,
    consts: [[4, "transloco"], ["id", "summary", 3, "header"], [1, "summary", 3, "innerHTML"]],
    template: function SummaryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SummaryComponent_ng_container_0_Template, 3, 4, "ng-container", 0);
      }
    },
    dependencies: [primeng_panel__WEBPACK_IMPORTED_MODULE_2__.PanelModule, primeng_panel__WEBPACK_IMPORTED_MODULE_2__.Panel, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoDirective],
    styles: [".summary[_ngcontent-%COMP%] {\n  text-align: start;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVzdW1lL2NvbXBvbmVudHMvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5zdW1tYXJ5IHtcbiAgdGV4dC1hbGlnbjogc3RhcnRcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 3890:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/slide-button/slide-button.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlideButtonComponent: () => (/* binding */ SlideButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3928);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsverse/transloco */ 1945);


function SlideButtonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1)(2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](translate_r1("cv.shared.slideButton"));
  }
}
class SlideButtonComponent {
  static #_ = this.ɵfac = function SlideButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SlideButtonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SlideButtonComponent,
    selectors: [["cv-slide-button"]],
    decls: 1,
    vars: 0,
    consts: [[4, "transloco"], [1, "learn-more"], ["aria-hidden", "true", 1, "circle"], [1, "icon", "arrow"], [1, "button-text"]],
    template: function SlideButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SlideButtonComponent_ng_container_0_Template, 6, 1, "ng-container", 0);
      }
    },
    dependencies: [_jsverse_transloco__WEBPACK_IMPORTED_MODULE_1__.TranslocoDirective],
    styles: ["button.learn-more {\n  --tw-bg-opacity: 1;\n  background-color: hsl(207 9% 31% / var(--tw-bg-opacity));\n}button.learn-more:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(218 12% 89% / var(--tw-bg-opacity));\n}button.learn-more {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  text-decoration: none;\n  padding: 2px;\n  font-size: 14px;\n  outline: none;\n  border: none;\n  border-radius: 1.625rem;\n}\nbutton.learn-more.learn-more {\n  width: 10rem;\n  height: auto;\n}\nbutton.learn-more.learn-more .circle {\n  --tw-bg-opacity: 1;\n  background-color: hsl(218 12% 89% / var(--tw-bg-opacity));\n}\nbutton.learn-more.learn-more .circle:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(207 9% 31% / var(--tw-bg-opacity));\n}\nbutton.learn-more.learn-more .circle {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: relative;\n  display: block;\n  margin: 0;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 1.625rem;\n}\nbutton.learn-more.learn-more .circle .icon {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\nbutton.learn-more.learn-more .circle .icon.arrow {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  left: 0.125rem;\n  width: 1.125rem;\n  height: 0.125rem;\n  background: none;\n}\nbutton.learn-more.learn-more .circle .icon.arrow::before {\n  --tw-border-opacity: 1;\n  border-top-color: hsl(207 9% 31% / var(--tw-border-opacity));\n}\nbutton.learn-more.learn-more .circle .icon.arrow:is(.dark *)::before {\n  --tw-border-opacity: 1;\n  border-top-color: hsl(0 0% 100% / var(--tw-border-opacity));\n}\nbutton.learn-more.learn-more .circle .icon.arrow::before {\n  --tw-border-opacity: 1;\n  border-right-color: hsl(207 9% 31% / var(--tw-border-opacity));\n}\nbutton.learn-more.learn-more .circle .icon.arrow:is(.dark *)::before {\n  --tw-border-opacity: 1;\n  border-right-color: hsl(0 0% 100% / var(--tw-border-opacity));\n}\nbutton.learn-more.learn-more .circle .icon.arrow::before {\n  border-top-width: 0.125rem;\n  border-right-width: 0.125rem;\n  border-top-style: solid;\n  border-right-style: solid;\n  position: absolute;\n  content: \"\";\n  top: -0.25rem;\n  right: 0.0625rem;\n  width: 0.625rem;\n  height: 0.625rem;\n  transform: rotate(45deg);\n}\nbutton.learn-more.learn-more .button-text {\n  --tw-text-opacity: 1;\n  color: hsl(240 4% 90% / var(--tw-text-opacity));\n}\nbutton.learn-more.learn-more .button-text:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: hsl(210 9% 31% / var(--tw-text-opacity));\n}\nbutton.learn-more.learn-more .button-text {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.75rem 0;\n  margin: 0 0 0 1.85rem;\n  line-height: 0.8;\n  text-align: center;\n}\nbutton.learn-more:hover .circle {\n  width: 100%;\n}\nbutton.learn-more:hover .circle .icon.arrow {\n  --tw-bg-opacity: 1;\n  background-color: hsl(207 9% 31% / var(--tw-bg-opacity));\n}\nbutton.learn-more:hover .circle .icon.arrow:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: hsl(0 0% 100% / var(--tw-bg-opacity));\n}\nbutton.learn-more:hover .circle .icon.arrow {\n  transform: translate(1rem, 0);\n}\nbutton.learn-more:hover .button-text {\n  --tw-text-opacity: 1;\n  color: hsl(207 9% 31% / var(--tw-text-opacity));\n}\nbutton.learn-more:hover .button-text:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: hsl(0 0% 100% / var(--tw-text-opacity));\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2xpZGUtYnV0dG9uL3NsaWRlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPRTtFQUFBLGtCQUFBO0VBQUE7QUFBQSxDQUFBO0VBQUEsa0JBQUE7RUFBQTtBQUFBLENBREY7RUFFRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQVpPO0FBT1Q7QUFPRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBTEo7QUFRTTtFQUFBLGtCQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsa0JBQUE7RUFBQTtBQUFBO0FBREY7RUFyQkYscURBQUE7RUF3Qkksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBMUJHO0FBcUJUO0FBT007RUEvQkoscURBQUE7RUFpQ00sa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFMUjtBQU9RO0VBdENOLHFEQUFBO0VBd0NRLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUxWO0FBUVk7RUFBQSxzQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLHNCQUFBO0VBQUE7QUFBQTtBQUNBO0VBQUEsc0JBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSxzQkFBQTtFQUFBO0FBQUE7QUFGRjtFQUdFLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFMWjtBQVlNO0VBQUEsb0JBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7QUFERjtFQWhFRixxREFBQTtFQW1FSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVROO0FBY0k7RUFDRSxXQUFBO0FBWk47QUFnQlU7RUFBQSxrQkFBQTtFQUFBO0FBQUE7QUFBQTtFQUFBLGtCQUFBO0VBQUE7QUFBQTtBQURGO0VBRUUsNkJBQUE7QUFiVjtBQW1CTTtFQUFBLG9CQUFBO0VBQUE7QUFBQTtBQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5OiBhbGwsICRkdXJhdGlvbjogMC40NXMsICRlYXNlOiBjdWJpYy1iZXppZXIoMC42NSwwLC4wNzYsMSkpIHtcbiAgdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbiAkZWFzZTtcbn1cblxuJHJhZGl1czogMS42MjVyZW07XG5cbmJ1dHRvbi5sZWFybi1tb3JlIHtcbiAgQGFwcGx5IGJnLWRhcmstc2xpZGUtYnV0dG9uLWJnIGRhcms6Ymctc2xpZGUtYnV0dG9uLWJnO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG5cbiAgJi5sZWFybi1tb3JlIHtcbiAgICB3aWR0aDogMTByZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgLmNpcmNsZSB7XG4gICAgICBAYXBwbHkgYmctZGFyay1zbGlkZS1jaXJjbGUtYnV0dG9uLWJnIGRhcms6Ymctc2xpZGUtY2lyY2xlLWJ1dHRvbi1iZztcbiAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjQ1cywgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIC4wNzYsIDEpKTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgd2lkdGg6IDJyZW07XG4gICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xuXG4gICAgICAuaWNvbiB7XG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjQ1cywgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIC4wNzYsIDEpKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgICAgICYuYXJyb3cge1xuICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjQ1cywgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIC4wNzYsIDEpKTtcbiAgICAgICAgICBsZWZ0OiAwLjEyNXJlbTtcbiAgICAgICAgICB3aWR0aDogMS4xMjVyZW07XG4gICAgICAgICAgaGVpZ2h0OiAwLjEyNXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuXG4gICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIEBhcHBseSBib3JkZXItdC1kYXJrLXNsaWRlLWJ1dHRvbi1pY29uIGRhcms6Ym9yZGVyLXQtc2xpZGUtYnV0dG9uLWljb247XG4gICAgICAgICAgICBAYXBwbHkgYm9yZGVyLXItZGFyay1zbGlkZS1idXR0b24taWNvbiBkYXJrOmJvcmRlci1yLXNsaWRlLWJ1dHRvbi1pY29uO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMC4xMjVyZW07XG4gICAgICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDAuMTI1cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICB0b3A6IC0wLjI1cmVtO1xuICAgICAgICAgICAgcmlnaHQ6IDAuMDYyNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAwLjYyNXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMC42MjVyZW07XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ1dHRvbi10ZXh0IHtcbiAgICAgIEBhcHBseSB0ZXh0LWRhcmstdGV4dC1jb2xvciBkYXJrOnRleHQtdGV4dC1jb2xvcjtcbiAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjQ1cywgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIC4wNzYsIDEpKTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMDtcbiAgICAgIG1hcmdpbjogMCAwIDAgMS44NXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAwLjg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgLmNpcmNsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLmljb24ge1xuICAgICAgICAmLmFycm93IHtcbiAgICAgICAgICBAYXBwbHkgYmctZGFyay1zbGlkZS1idXR0b24taWNvbiBkYXJrOmJnLXNsaWRlLWJ1dHRvbi1pY29uO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFyZW0sIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ1dHRvbi10ZXh0IHtcbiAgICAgIEBhcHBseSB0ZXh0LWRhcmstc2xpZGUtYnV0dG9uLWljb24gZGFyazp0ZXh0LXNsaWRlLWJ1dHRvbi1pY29uO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 6428:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4064);
/* harmony import */ var _shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/slide-button/slide-button.component */ 3890);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 7856);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsverse/transloco */ 1945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3928);





class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_0__.SlideButtonComponent],
    imports: [primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_4__.TranslocoDirective],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_components_slide_button_slide_button_component__WEBPACK_IMPORTED_MODULE_0__.SlideButtonComponent]
  });
})();

/***/ }),

/***/ 6419:
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

/***/ 3646:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3928);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 6419);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6971);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 381);
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app-routing.module */ 4121);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 1408);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.module */ 3496);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 9575);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-markdown */ 4349);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ 6428);
/* harmony import */ var _transloco_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transloco-loader */ 2532);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @jsverse/transloco */ 1945);












if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.importProvidersFrom)(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule), (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule), (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.importProvidersFrom)(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule), (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.importProvidersFrom)(_core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule), (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.importProvidersFrom)(ngx_markdown__WEBPACK_IMPORTED_MODULE_9__.MarkdownModule.forRoot()), (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.importProvidersFrom)(_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.withInterceptorsFromDi)()), (0,_jsverse_transloco__WEBPACK_IMPORTED_MODULE_11__.provideTransloco)({
    config: {
      availableLangs: ['fr', 'en'],
      defaultLang: 'fr',
      reRenderOnLangChange: true,
      prodMode: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.isDevMode)()
    },
    loader: _transloco_loader__WEBPACK_IMPORTED_MODULE_5__.TranslocoHttpLoader
  })]
}).catch(err => console.error(err));

/***/ }),

/***/ 2532:
/*!*********************************!*\
  !*** ./src/transloco-loader.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslocoHttpLoader: () => (/* binding */ TranslocoHttpLoader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3928);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 9575);




class TranslocoHttpLoader {
  constructor() {
    this.httpClient = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
  }
  /**
   * Load translation for selected language.
   *
   * @param language the chosen language
   */
  getTranslation(language) {
    return this.httpClient.get(`/i18n/${language}.json`);
  }
  static #_ = this.ɵfac = function TranslocoHttpLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TranslocoHttpLoader)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TranslocoHttpLoader,
    factory: TranslocoHttpLoader.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3646)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map