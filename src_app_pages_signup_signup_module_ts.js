"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_signup_signup_module_ts"],{

/***/ 392:
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup */ 7165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: '',
  component: _signup__WEBPACK_IMPORTED_MODULE_0__.SignupPage
}];
class SignupPageRoutingModule {}
SignupPageRoutingModule.ɵfac = function SignupPageRoutingModule_Factory(t) {
  return new (t || SignupPageRoutingModule)();
};
SignupPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SignupPageRoutingModule
});
SignupPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SignupPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7110:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpModule": () => (/* binding */ SignUpModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup */ 7165);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup-routing.module */ 392);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);






class SignUpModule {}
SignUpModule.ɵfac = function SignUpModule_Factory(t) {
  return new (t || SignUpModule)();
};
SignUpModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SignUpModule
});
SignUpModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _signup_routing_module__WEBPACK_IMPORTED_MODULE_1__.SignupPageRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SignUpModule, {
    declarations: [_signup__WEBPACK_IMPORTED_MODULE_0__.SignupPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _signup_routing_module__WEBPACK_IMPORTED_MODULE_1__.SignupPageRoutingModule]
  });
})();

/***/ }),

/***/ 7165:
/*!****************************************!*\
  !*** ./src/app/pages/signup/signup.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/user-data */ 6401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5992);







class SignupPage {
  constructor(router, userData) {
    this.router = router;
    this.userData = userData;
    this.signup = {
      username: '',
      password: ''
    };
    this.submitted = false;
  }
  onSignup(form) {
    this.submitted = true;
    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }
}
SignupPage.ɵfac = function SignupPage_Factory(t) {
  return new (t || SignupPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_user_data__WEBPACK_IMPORTED_MODULE_0__.UserData));
};
SignupPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SignupPage,
  selectors: [["page-signup"]],
  decls: 19,
  vars: 2,
  consts: [["slot", "start"], [1, "signup-logo"], ["src", "assets/img/appicon.svg", "alt", "Ionic Logo"], [1, "signup-form"], ["novalidate", ""], ["signupForm", "ngForm"], ["label", "Username", "labelPlacement", "stacked", "fill", "solid", "name", "username", "type", "text", "errorText", "Username is required", "required", "", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["label", "Password", "labelPlacement", "stacked", "fill", "solid", "name", "password", "type", "password", "errorText", "Password is required", "required", "", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "ion-padding"], ["type", "submit", "expand", "block", 3, "click"]],
  template: function SignupPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Signup");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content")(7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3)(10, "form", 4, 5)(12, "ion-input", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupPage_Template_ion_input_ngModelChange_12_listener($event) {
        return ctx.signup.username = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupPage_Template_ion_input_ngModelChange_14_listener($event) {
        return ctx.signup.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10)(17, "ion-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupPage_Template_ion_button_click_17_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onSignup(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Create");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.signup.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.signup.password);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor],
  styles: [".signup-logo[_ngcontent-%COMP%] {\n  min-height: 200px;\n  padding: 20px 0;\n  text-align: center;\n}\n\n.signup-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\n.signup-form[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\nion-input[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFFQSxlQUFBO0VBRUEsa0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtBQURGIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cC1sb2dvIHtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaWdudXAtbG9nbyBpbWcge1xyXG4gIG1heC13aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5zaWdudXAtZm9ybSB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_pages_signup_signup_module_ts.js.map