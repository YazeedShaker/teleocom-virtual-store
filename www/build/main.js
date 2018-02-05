webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceSimPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_data_user_data__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VoiceSimPage = (function () {
    function VoiceSimPage(navCtrl, loading) {
        this.navCtrl = navCtrl;
        this.loading = loading;
    }
    VoiceSimPage.prototype.goToPreviousPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    VoiceSimPage.prototype.goToNextPage = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Scanning Your ID...',
            enableBackdropDismiss: false,
            duration: 3000
        });
        loader.present().then(function () {
            setTimeout(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__user_data_user_data__["a" /* UserDataPage */]);
            }, 3000);
        });
    };
    VoiceSimPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\telecom-theme\src\pages\voice-sim\voice-sim.html"*/`<ion-content class="page-background">\n\n    <div class="text-container">\n\n        <h3 class="page-title">TELECOM EGYPT SELF SREVICE CENTRE</h3>\n\n        <h1 class="step-number">STEP 1</h1>\n\n        <h3 class="page-subtitle">IDENTIFICATION</h3>\n\n        <div class="page-steps-text-container">\n\n            <p class="page-description-text">INSERT YOUR ID IN THE SCANNER</p>\n\n            <p class="page-description-text">AND PRESS OK TO START SCAN, </p>\n\n            <p class="page-description-text">WAIT FOR CONFIRMATION MESSAGE</p>\n\n        </div>\n\n    </div>\n\n    <div class="center">\n\n        <button ion-button class="my-btns back-btn" (click)="goToPreviousPage()">BACK</button>\n\n        <button ion-button class="my-btns" (click)="goToNextPage()">GO</button>\n\n    </div>\n\n    <div class="center">\n\n        <img width="200px" height="200px" src="assets/imgs/scan.gif" alt="">\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"E:\telecom-theme\src\pages\voice-sim\voice-sim.html"*/,
            styleUrls: ['/voice-sim.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], VoiceSimPage);
    return VoiceSimPage;
}());

//# sourceMappingURL=voice-sim.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voice_sim_voice_sim__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__certificate_certificate__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDataPage = (function () {
    function UserDataPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    UserDataPage.prototype.goToPreviousPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__voice_sim_voice_sim__["a" /* VoiceSimPage */]);
    };
    UserDataPage.prototype.goToNextPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__certificate_certificate__["a" /* CertificatePage */]);
    };
    UserDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\telecom-theme\src\pages\user-data\user-data.html"*/`<ion-content class="page-background">\n\n    <div class="text-container">\n\n        <h3 class="page-title">TELECOM EGYPT SELF SREVICE CENTRE</h3>\n\n        <h1 class="step-number">STEP 2</h1>\n\n        <h3 class="page-subtitle">IDENTIFICATION</h3>\n\n        <div class="page-steps-text-container">\n\n            <p class="page-description-text">THIS DATA IS AUTOMATICALLY DETECTED</p>\n\n            <p class="page-description-text">FROM YOUR NATIONAL ID, CONFIRM IS VALIDITY</p>\n\n        </div>\n\n    </div>\n\n    <div class="center">\n\n        <ion-grid class="my-grid user-data-grid">\n\n            <ion-row>\n\n                <ion-col class="my-cols">NAME: </ion-col>\n\n                <ion-col class="my-cols">SAYED</ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col class="my-cols">BIRTH: </ion-col>\n\n                <ion-col class="my-cols">17/10/1983</ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col class="my-cols">NATIONALITY: </ion-col>\n\n                <ion-col class="my-cols">EGYPTIAN</ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col class="my-cols">PLACE OF BIRTH: </ion-col>\n\n                <ion-col class="my-cols">GIZA</ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col class="my-cols">NATIONAL ID: </ion-col>\n\n                <ion-col class="my-cols">493208461233</ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col class="my-cols">SEX: </ion-col>\n\n                <ion-col class="my-cols">MALE</ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </div>\n\n    <div class="center">\n\n        <button ion-button class="my-btns back-btn" (click)="goToPreviousPage()">BACK</button>\n\n        <button ion-button class="my-btns" (click)="goToNextPage()">CONFIRM</button>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"E:\telecom-theme\src\pages\user-data\user-data.html"*/,
            styleUrls: ['/user-data.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], UserDataPage);
    return UserDataPage;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data_user_data__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__electronic_signature_electronic_signature__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CertificatePage = (function () {
    function CertificatePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CertificatePage.prototype.goToPreviousPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__user_data_user_data__["a" /* UserDataPage */]);
    };
    CertificatePage.prototype.goToNextPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__electronic_signature_electronic_signature__["a" /* ElectronicSignaturePage */]);
    };
    CertificatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\telecom-theme\src\pages\certificate\certificate.html"*/`<ion-content class="page-background">\n\n    <div class="text-container">\n\n        <h3 class="page-title">TELECOM EGYPT SELF SREVICE CENTRE</h3>\n\n        <h1 class="step-number">STEP 3</h1>\n\n        <h3 class="page-subtitle">TERMS AND CONDITIONS</h3>\n\n        <div class="page-steps-text-container">\n\n            <p class="page-description-text">CONTRACT</p>\n\n            <p class="page-description-text">ITEM 1: </p>\n\n        </div>\n\n    </div>\n\n    <div class="center">\n\n        <p class="certificate-dashes">------------------------------------------------------------------------</p>\n\n        <p class="certificate-dashes">------------------------------------------------------------------------</p>\n\n        <p class="certificate-dashes">------------------------------------------------------------------------</p>\n\n        <p class="certificate-dashes">------------------------------------------------------------------------</p>\n\n    </div>\n\n    <div class="center">\n\n        <button ion-button class="my-btns back-btn certificate-btn" (click)="goToPreviousPage()">BACK</button>\n\n        <button ion-button class="my-btns certificate-btn" (click)="goToNextPage()">ELECTRONIC SIGNATURE</button>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"E:\telecom-theme\src\pages\certificate\certificate.html"*/,
            styleUrls: ['/certificate.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CertificatePage);
    return CertificatePage;
}());

//# sourceMappingURL=certificate.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronicSignaturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__certificate_certificate__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__choose_plan_choose_plan__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ElectronicSignaturePage = (function () {
    function ElectronicSignaturePage(navCtrl, loading) {
        this.navCtrl = navCtrl;
        this.loading = loading;
    }
    ElectronicSignaturePage.prototype.goToPreviousPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__certificate_certificate__["a" /* CertificatePage */]);
    };
    ElectronicSignaturePage.prototype.goToNextPage = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Scanning Your FINGERPRINT...',
            enableBackdropDismiss: false,
            duration: 3000,
        });
        loader.present().then(function () {
            setTimeout(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__choose_plan_choose_plan__["a" /* ChoosePlanPage */]);
            }, 3000);
        });
    };
    ElectronicSignaturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\telecom-theme\src\pages\electronic-signature\electronic-signature.html"*/`<ion-content class="page-background">\n\n    <div class="text-container">\n\n        <h3 class="page-title">TELECOM EGYPT SELF SREVICE CENTRE</h3>\n\n        <h1 class="step-number">STEP 4</h1>\n\n        <h3 class="page-subtitle">FINGERPRINT SCAN</h3>\n\n        <div class="page-steps-text-container">\n\n            <p class="page-description-text">PLACE YOUR THUMB IN THE</p>\n\n            <p class="page-description-text">SCAN GREEN AREA, AND START SCAN</p>\n\n        </div>\n\n    </div>\n\n    <div class="center">\n\n        <button ion-button class="my-btns back-btn certificate-btn" (click)="goToPreviousPage()">BACK</button>\n\n        <button ion-button class="my-btns certificate-btn" (click)="goToNextPage()">START SCAN</button>\n\n    </div>\n\n    <div class="center">\n\n        <img src="assets/imgs/fingerprint.gif" width="220px;" height="200px;" alt="">\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"E:\telecom-theme\src\pages\electronic-signature\electronic-signature.html"*/,
            styleUrls: ['/electronic-signature.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ElectronicSignaturePage);
    return ElectronicSignaturePage;
}());

//# sourceMappingURL=electronic-signature.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoosePlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronic_signature_electronic_signature__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__credit_card_credit_card__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChoosePlanPage = (function () {
    function ChoosePlanPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    ChoosePlanPage.prototype.goToPreviousPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__electronic_signature_electronic_signature__["a" /* ElectronicSignaturePage */]);
    };
    ChoosePlanPage.prototype.goToNextPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__credit_card_credit_card__["a" /* CreditCardPage */]);
    };
    ChoosePlanPage.prototype.showDescription = function () {
        var alert = this.alertCtrl.create({
            title: 'Plan Description',
            message: '<br><br>Your plan include these items <br> <ul><li>item one</li><li>item two</li><li>item three</li></ul>',
            buttons: [
                {
                    text: 'OK',
                    role: 'Cancel',
                    handler: function () { alert.dismiss(); return false; }
                }
            ]
        });
        alert.present();
        console.log("hello, alert");
    };
    ChoosePlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\telecom-theme\src\pages\choose-plan\choose-plan.html"*/`<ion-content class="page-background">\n\n    <div class="text-container">\n\n        <h3 class="page-title">TELECOM EGYPT SELF SREVICE CENTRE</h3>\n\n        <h1 class="step-number">STEP 5</h1>\n\n        <h3 class="page-subtitle">CHOOSE THE RATE PLAN</h3>\n\n        <div class="page-steps-text-container">\n\n            <ion-list radio-group no-lines class="choose-plan-list">\n\n                <ion-grid class="my-grid choose-plan-grid">\n\n                    <ion-row>\n\n                        <ion-col class="my-cols">\n\n                            <ion-item class="choose-plan-item">\n\n                                <ion-label>CONTROL 40\n\n                                </ion-label>\n\n                                <ion-radio item-left value="1" checked></ion-radio>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col class="my-cols">\n\n                            <ion-item class="choose-plan-item">\n\n                                <span (click)="showDescription()" class="choose-plan-span">(DESCRIPTION)</span>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col class="my-cols">\n\n                            <ion-item class="choose-plan-item">\n\n                                <ion-label>CONTROL 80\n\n                                </ion-label>\n\n                                <ion-radio item-left value="2"></ion-radio>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col class="my-cols">\n\n                            <ion-item class="choose-plan-item">\n\n                                <span (click)="showDescription()" class="choose-plan-span">(DESCRIPTION)</span>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col class="my-cols">\n\n                            <ion-item class="choose-plan-item">\n\n                                <ion-label>POSTPAID RED\n\n                                </ion-label>\n\n                                <ion-radio item-left value="3"></ion-radio>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col class="my-cols">\n\n                            <ion-item class="choose-plan-item">\n\n                                <span (click)="showDescription()" class="choose-plan-span">(DESCRIPTION)</span>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-list>\n\n        </div>\n\n    </div>\n\n    <div class="center">\n\n        <button ion-button class="my-btns back-btn certificate-btn" (click)="goToPreviousPage()">BACK</button>\n\n        <button ion-button class="my-btns certificate-btn" (click)="goToNextPage()">NEXT</button>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"E:\telecom-theme\src\pages\choose-plan\choose-plan.html"*/,
            styleUrls: ['/choose-plan.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ChoosePlanPage);
    return ChoosePlanPage;
}());

//# sourceMappingURL=choose-plan.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_plan_choose_plan__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_payment__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreditCardPage = (function () {
    function CreditCardPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CreditCardPage.prototype.goToPreviousPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__choose_plan_choose_plan__["a" /* ChoosePlanPage */]);
    };
    CreditCardPage.prototype.goToNextPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__payment_payment__["a" /* PaymentPage */]);
    };
    CreditCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\telecom-theme\src\pages\credit-card\credit-card.html"*/`<ion-content class="page-background">\n\n    <div class="text-container">\n\n        <h3 class="page-title">TELECOM EGYPT SELF SREVICE CENTRE</h3>\n\n        <h1 class="step-number">STEP 6</h1>\n\n        <h3 class="page-subtitle">PAYMENT</h3>\n\n        <div class="page-steps-text-container">\n\n            <p class="page-description-text">PLACE YOUR CREDIT CARD LIKE THIS: </p>\n\n        </div>\n\n    </div>\n\n    <div class="center">\n\n        <button ion-button class="my-btns back-btn certificate-btn" (click)="goToPreviousPage()">BACK</button>\n\n        <button ion-button class="my-btns certificate-btn" (click)="goToNextPage()">NEXT</button>\n\n    </div>\n\n    <div class="center">\n\n        <img src="assets/imgs/creditCard.gif" width="300px" height="220px" alt="">\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"E:\telecom-theme\src\pages\credit-card\credit-card.html"*/,
            styleUrls: ['/credit-card.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CreditCardPage);
    return CreditCardPage;
}());

//# sourceMappingURL=credit-card.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThanksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThanksPage = (function () {
    function ThanksPage(navCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        setTimeout(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, 3000);
    }
    ThanksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\telecom-theme\src\pages\thanks-page\thanks-page.html"*/`<ion-content padding class="page-background">\n\n    <div class="text-container">\n\n        <h3 class="page-title">TELECOM EGYPT SELF SREVICE CENTRE</h3>\n\n    </div>\n\n    <div id="home-image-container">\n\n        <img src="assets/imgs/1.png" alt="">\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"E:\telecom-theme\src\pages\thanks-page\thanks-page.html"*/,
            styleUrls: ['/thanks-page.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ThanksPage);
    return ThanksPage;
}());

//# sourceMappingURL=thanks-page.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayBillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_bill_show_bill__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PayBillPage = (function () {
    function PayBillPage(navCtrl, loading) {
        this.navCtrl = navCtrl;
        this.loading = loading;
    }
    PayBillPage.prototype.goToPreviousPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PayBillPage.prototype.goToNextPage = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Validating Phone Number...',
            enableBackdropDismiss: false,
            duration: 3000,
        });
        loader.present().then(function () {
            setTimeout(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__show_bill_show_bill__["a" /* ShowBillPage */]);
            }, 3000);
        });
    };
    PayBillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\telecom-theme\src\pages\pay-bill\pay-bill.html"*/`<ion-content class="page-background">\n\n    <div class="text-container">\n\n        <h3 class="page-title">TELECOM EGYPT SELF SREVICE CENTRE</h3>\n\n        <h1 class="step-number">STEP 1</h1>\n\n        <h3 class="page-subtitle">MOBILE NUMBER</h3>\n\n        <div class="page-steps-text-container">\n\n            <p class="page-description-text">PLEASE ENTER YOUR PHONE NUMBER BELOW</p>\n\n        </div>\n\n    </div>\n\n    <div class="center">\n\n        <ion-input id="pay-bill-input" type="number" placeholder="enter your mobile number here..."></ion-input>\n\n    </div>\n\n    <div class="center">\n\n        <button ion-button class="my-btns back-btn certificate-btn" (click)="goToPreviousPage()">BACK</button>\n\n        <button ion-button class="my-btns certificate-btn" (click)="goToNextPage()">SHOW MY BILL</button>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"E:\telecom-theme\src\pages\pay-bill\pay-bill.html"*/,
            styleUrls: ['/pay-bill.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], PayBillPage);
    return PayBillPage;
}());

//# sourceMappingURL=pay-bill.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowBillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pay_bill_pay_bill__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bill_payment_bill_payment__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowBillPage = (function () {
    function ShowBillPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ShowBillPage.prototype.goToPreviousPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pay_bill_pay_bill__["a" /* PayBillPage */]);
    };
    ShowBillPage.prototype.goToNextPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__bill_payment_bill_payment__["a" /* BillPaymentPage */]);
    };
    ShowBillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\telecom-theme\src\pages\show-bill\show-bill.html"*/`<ion-content class="page-background">\n\n    <div class="text-container">\n\n        <h3 class="page-title">TELECOM EGYPT SELF SREVICE CENTRE</h3>\n\n        <h1 class="step-number">STEP 2</h1>\n\n        <h3 class="page-subtitle">ELECTRONIC BILL</h3>\n\n        <div class="page-steps-text-container">\n\n            <p class="page-description-text">BELOW IS YOUR BILL,</p>\n\n            <p class="page-description-text">PLEASE VALIDATE BEFORE PAYMENT</p>\n\n        </div>\n\n    </div>\n\n    <div class="center">\n\n        <img src="assets/imgs/bill.jpg" height="200px" width="150px" alt="">\n\n    </div>\n\n    <div class="center">\n\n        <button ion-button class="my-btns back-btn certificate-btn" (click)="goToPreviousPage()">BACK</button>\n\n        <button ion-button class="my-btns certificate-btn" (click)="goToNextPage()">PAY BILL</button>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"E:\telecom-theme\src\pages\show-bill\show-bill.html"*/,
            styleUrls: ['/show-bill.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ShowBillPage);
    return ShowBillPage;
}());

//# sourceMappingURL=show-bill.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillPaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_bill_show_bill__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bill_confirmation_bill_confirmation__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BillPaymentPage = (function () {
    function BillPaymentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BillPaymentPage.prototype.goToPreviousPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__show_bill_show_bill__["a" /* ShowBillPage */]);
    };
    BillPaymentPage.prototype.goToNextPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__bill_confirmation_bill_confirmation__["a" /* BillConfirmationPage */]);
    };
    BillPaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\telecom-theme\src\pages\bill-payment\bill-payment.html"*/`<ion-content class="page-background">\n\n    <div class="text-container">\n\n        <h3 class="page-title">TELECOM EGYPT SELF SREVICE CENTRE</h3>\n\n        <h1 class="step-number">STEP 3</h1>\n\n        <h3 class="page-subtitle">PAYMENT</h3>\n\n        <div class="page-steps-text-container">\n\n            <p class="page-description-text">PLACE YOUR CREDIT CARD LIKE THIS: </p>\n\n        </div>\n\n    </div>\n\n    <div class="center">\n\n        <button ion-button class="my-btns back-btn certificate-btn" (click)="goToPreviousPage()">BACK</button>\n\n        <button ion-button class="my-btns certificate-btn" (click)="goToNextPage()">NEXT</button>\n\n    </div>\n\n    <div class="center">\n\n        <img src="assets/imgs/creditCard.gif" width="300px" height="220px" alt="">\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"E:\telecom-theme\src\pages\bill-payment\bill-payment.html"*/,
            styleUrls: ['/bill-payment.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], BillPaymentPage);
    return BillPaymentPage;
}());

//# sourceMappingURL=bill-payment.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpCenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelpCenterPage = (function () {
    function HelpCenterPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HelpCenterPage.prototype.goToPreviousPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    HelpCenterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\telecom-theme\src\pages\help-center\help-center.html"*/`<ion-content class="page-background">\n\n    <div class="text-container">\n\n        <h3 class="page-title">VODAFONE SELF SREVICE CENTRE</h3>\n\n        <h1 class="step-number">FINAL STEP</h1>\n\n        <h3 class="page-subtitle">CONFIRMATION</h3>\n\n        <div class="page-steps-text-container">\n\n            <p class="page-description-text">VODAFONE RED 150</p>\n\n            <p class="page-description-text">250 EGP</p>\n\n        </div>\n\n    </div>\n\n    <div class="center">\n\n        <iframe width="355" height="200" src="https://www.youtube.com/embed/dMqGr4A_0E0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media"></iframe>\n\n    </div>\n\n    <div class="center">\n\n        <button ion-button class="my-btns back-btn certificate-btn" (click)="goToPreviousPage()">BACK</button>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"E:\telecom-theme\src\pages\help-center\help-center.html"*/,
            styleUrls: ['/help-center.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HelpCenterPage);
    return HelpCenterPage;
}());

//# sourceMappingURL=help-center.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credit_card_credit_card__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__thanks_page_thanks_page__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentPage = (function () {
    function PaymentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PaymentPage.prototype.goToPreviousPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__credit_card_credit_card__["a" /* CreditCardPage */]);
    };
    PaymentPage.prototype.goToNextPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__thanks_page_thanks_page__["a" /* ThanksPage */]);
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\telecom-theme\src\pages\payment\payment.html"*/`<ion-content class="page-background">\n\n    <div class="text-container">\n\n        <h3 class="page-title">TELECOM EGYPT SELF SREVICE CENTRE</h3>\n\n        <h1 class="step-number">FINAL STEP</h1>\n\n        <h3 class="page-subtitle">CONFIRMATION</h3>\n\n        <div class="page-steps-text-container">\n\n            <p class="page-description-text">VODAFONE RED 150</p>\n\n            <p class="page-description-text">250 EGP</p>\n\n        </div>\n\n    </div>\n\n    <div class="center">\n\n        <button ion-button class="my-btns back-btn certificate-btn" (click)="goToPreviousPage()">BACK</button>\n\n        <button ion-button class="my-btns certificate-btn" (click)="goToNextPage()">CONFIRM AND RECEIVE SIM</button>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"E:\telecom-theme\src\pages\payment\payment.html"*/,
            styleUrls: ['/payment.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillConfirmationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill_payment_bill_payment__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__thanks_page_thanks_page__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BillConfirmationPage = (function () {
    function BillConfirmationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BillConfirmationPage.prototype.goToPreviousPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__bill_payment_bill_payment__["a" /* BillPaymentPage */]);
    };
    BillConfirmationPage.prototype.goToNextPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__thanks_page_thanks_page__["a" /* ThanksPage */]);
    };
    BillConfirmationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\telecom-theme\src\pages\bill-confirmation\bill-confirmation.html"*/`<ion-content class="page-background">\n\n    <div class="text-container">\n\n        <h3 class="page-title">TELECOM EGYPT SELF SREVICE CENTRE</h3>\n\n        <h1 class="step-number">FINAL STEP</h1>\n\n        <h3 class="page-subtitle">CONFIRMATION</h3>\n\n        <div class="page-steps-text-container">\n\n            <p class="page-description-text">VODAFONE RED 150</p>\n\n            <p class="page-description-text">250 EGP</p>\n\n        </div>\n\n    </div>\n\n    <div class="center">\n\n        <button ion-button class="my-btns back-btn certificate-btn" (click)="goToPreviousPage()">BACK</button>\n\n        <button ion-button class="my-btns certificate-btn" (click)="goToNextPage()">CONFIRM AND PAY</button>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"E:\telecom-theme\src\pages\bill-confirmation\bill-confirmation.html"*/,
            styleUrls: ['/bill-confirmation.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], BillConfirmationPage);
    return BillConfirmationPage;
}());

//# sourceMappingURL=bill-confirmation.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LanguagePage = (function () {
    function LanguagePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LanguagePage.prototype.goToNextPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LanguagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\telecom-theme\src\pages\language\language.html"*/`<ion-content class="page-background">\n\n    <div class="text-container">\n\n        <h3 class="page-title">TELECOM EGYPT SELF SREVICE CENTRE</h3>\n\n        <h1 class="step-number">FIRST STEP</h1>\n\n        <h3 class="page-subtitle">CHOOSE THE YOUR LANGUAGE</h3>\n\n        <h3 class="page-subtitle">من فضلك اختر اللغة</h3>\n\n    </div>\n\n    <div class="center">\n\n        <button ion-button class="my-btns back-btn certificate-btn" (click)="goToNextPage()">English</button>\n\n        <button ion-button class="my-btns certificate-btn" (click)="goToNextPage()">عربي</button>\n\n    </div>\n\n</ion-content>`/*ion-inline-end:"E:\telecom-theme\src\pages\language\language.html"*/,
            styleUrls: ['/language.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], LanguagePage);
    return LanguagePage;
}());

//# sourceMappingURL=language.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_voice_sim_voice_sim__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_data_user_data__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_certificate_certificate__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_electronic_signature_electronic_signature__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_choose_plan_choose_plan__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_credit_card_credit_card__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_thanks_page_thanks_page__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pay_bill_pay_bill__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_show_bill_show_bill__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_bill_payment_bill_payment__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_bill_confirmation_bill_confirmation__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_help_center_help_center__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_language_language__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_voice_sim_voice_sim__["a" /* VoiceSimPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_data_user_data__["a" /* UserDataPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_certificate_certificate__["a" /* CertificatePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_electronic_signature_electronic_signature__["a" /* ElectronicSignaturePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_choose_plan_choose_plan__["a" /* ChoosePlanPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_credit_card_credit_card__["a" /* CreditCardPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_thanks_page_thanks_page__["a" /* ThanksPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pay_bill_pay_bill__["a" /* PayBillPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_show_bill_show_bill__["a" /* ShowBillPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_bill_payment_bill_payment__["a" /* BillPaymentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_bill_confirmation_bill_confirmation__["a" /* BillConfirmationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_help_center_help_center__["a" /* HelpCenterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_language_language__["a" /* LanguagePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_voice_sim_voice_sim__["a" /* VoiceSimPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_data_user_data__["a" /* UserDataPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_certificate_certificate__["a" /* CertificatePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_electronic_signature_electronic_signature__["a" /* ElectronicSignaturePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_choose_plan_choose_plan__["a" /* ChoosePlanPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_credit_card_credit_card__["a" /* CreditCardPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_thanks_page_thanks_page__["a" /* ThanksPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pay_bill_pay_bill__["a" /* PayBillPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_show_bill_show_bill__["a" /* ShowBillPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_bill_payment_bill_payment__["a" /* BillPaymentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_bill_confirmation_bill_confirmation__["a" /* BillConfirmationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_help_center_help_center__["a" /* HelpCenterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_language_language__["a" /* LanguagePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_help_center_help_center__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_language_language__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_language_language__["a" /* LanguagePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.callHelp = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_help_center_help_center__["a" /* HelpCenterPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\telecom-theme\src\app\app.html"*/`<ion-fab bottom right>\n    <button (click)="callHelp()" class="fab-button" ion-fab>\n        <ion-icon name="call"></ion-icon>\n    </button>\n</ion-fab>\n<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"E:\telecom-theme\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voice_sim_voice_sim__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pay_bill_pay_bill__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToVoiceSim = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__voice_sim_voice_sim__["a" /* VoiceSimPage */]);
    };
    HomePage.prototype.goToBillPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pay_bill_pay_bill__["a" /* PayBillPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\telecom-theme\src\pages\home\home.html"*/`<ion-content padding class="page-background">\n  <div id="home-image-container">\n    <img src="assets/imgs/1.png" alt="">\n  </div>\n  <ion-grid class="my-grid" id="home-grid">\n    <ion-row>\n      <ion-col class="my-cols">\n        <button ion-button class="my-home-btns" (click)="goToVoiceSim()">NEW VOICE SIM</button>\n      </ion-col>\n      <ion-col class="my-cols">\n        <button ion-button class="my-home-btns" (click)="goToVoiceSim()">NEW DATA SIM</button>\n      </ion-col>\n      <ion-col class="my-cols">\n        <button ion-button class="my-home-btns" (click)="goToBillPage()">PAY BILL</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"E:\telecom-theme\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map