(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ranking-ranking-module"],{

/***/ "97Bw":
/*!*************************************************!*\
  !*** ./src/app/pages/ranking/ranking.module.ts ***!
  \*************************************************/
/*! exports provided: RankingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingPageModule", function() { return RankingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ranking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ranking-routing.module */ "IEeq");
/* harmony import */ var _ranking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ranking.page */ "tdSZ");







let RankingPageModule = class RankingPageModule {
};
RankingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ranking_routing_module__WEBPACK_IMPORTED_MODULE_5__["RankingPageRoutingModule"]
        ],
        declarations: [_ranking_page__WEBPACK_IMPORTED_MODULE_6__["RankingPage"]]
    })
], RankingPageModule);



/***/ }),

/***/ "IEeq":
/*!*********************************************************!*\
  !*** ./src/app/pages/ranking/ranking-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: RankingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingPageRoutingModule", function() { return RankingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ranking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ranking.page */ "tdSZ");




const routes = [
    {
        path: '',
        component: _ranking_page__WEBPACK_IMPORTED_MODULE_3__["RankingPage"]
    }
];
let RankingPageRoutingModule = class RankingPageRoutingModule {
};
RankingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RankingPageRoutingModule);



/***/ }),

/***/ "coAE":
/*!*************************************************!*\
  !*** ./src/app/pages/ranking/ranking.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-row ion-col {\n  text-align: center;\n  border: 1px solid black;\n}\nion-row ion-col ion-skeleton-text {\n  width: 100%;\n  height: 2rem;\n  margin: auto;\n}\nion-row .pointer {\n  cursor: pointer;\n}\nion-row .title {\n  font-weight: bold;\n  background-color: var(--ion-color-primary);\n  color: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyYW5raW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRE47QUFLRTtFQUNFLGVBQUE7QUFISjtBQU1FO0VBQ0UsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLDZCQUFBO0FBSkoiLCJmaWxlIjoicmFua2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcm93IHtcclxuXHJcbiAgaW9uLWNvbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuXHJcbiAgICBpb24tc2tlbGV0b24tdGV4dCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wb2ludGVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "tdSZ":
/*!***********************************************!*\
  !*** ./src/app/pages/ranking/ranking.page.ts ***!
  \***********************************************/
/*! exports provided: Player, RankingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingPage", function() { return RankingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ranking_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ranking.page.html */ "tqTT");
/* harmony import */ var _ranking_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ranking.page.scss */ "coAE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");





class Player {
}
let RankingPage = class RankingPage {
    constructor(afs) {
        this.afs = afs;
        this.orderByRankAsc = true;
        this.orderByNameAsc = true;
        this.orderByCountryAsc = true;
        this.orderByRatingAsc = true;
    }
    ngOnInit() {
        this.ranking = this.afs
            .collection('ranking', (ref) => ref.orderBy('rank', 'asc'))
            .valueChanges();
    }
    orderByRank() {
        this.ranking = null;
        setTimeout(() => {
            this.ranking = this.afs
                .collection('ranking', (ref) => ref.orderBy('rank', this.orderByRankAsc ? 'desc' : 'asc'))
                .valueChanges();
            this.orderByRankAsc = !this.orderByRankAsc;
        }, 300);
    }
    orderByName() {
        this.ranking = null;
        setTimeout(() => {
            this.ranking = this.afs
                .collection('ranking', (ref) => ref.orderBy('name', this.orderByNameAsc ? 'desc' : 'asc'))
                .valueChanges();
            this.orderByNameAsc = !this.orderByNameAsc;
        }, 300);
    }
    orderByCountry() {
        this.ranking = null;
        setTimeout(() => {
            this.ranking = this.afs
                .collection('ranking', (ref) => ref.orderBy('country', this.orderByCountryAsc ? 'desc' : 'asc'))
                .valueChanges();
            this.orderByCountryAsc = !this.orderByCountryAsc;
        }, 300);
    }
    orderByRating() {
        this.ranking = null;
        setTimeout(() => {
            this.ranking = this.afs
                .collection('ranking', (ref) => ref.orderBy('rating', this.orderByRatingAsc ? 'desc' : 'asc'))
                .valueChanges();
            this.orderByRatingAsc = !this.orderByRatingAsc;
        }, 300);
    }
};
RankingPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
RankingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ranking',
        template: _raw_loader_ranking_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ranking_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RankingPage);



/***/ }),

/***/ "tqTT":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ranking/ranking.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Ranking</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <h3 class=\"ion-text-center\"><strong>Ranking FIDE 2021 - TOP 10</strong></h3>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"title pointer\" size=\"2\" (click)=\"orderByRank()\">#</ion-col>\r\n      <ion-col class=\"title pointer\" (click)=\"orderByName()\">Nome</ion-col>\r\n      <ion-col class=\"title pointer\" size=\"2\" (click)=\"orderByCountry()\">País</ion-col>\r\n      <ion-col class=\"title pointer\" size=\"3\" (click)=\"orderByRating()\">Rating</ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngFor=\"let player of ranking | async\">\r\n      <ion-col size=\"2\">{{ player.rank }}</ion-col>\r\n      <ion-col *ngIf=\"player.article\" routerLink=\"{{ player.article }}\">{{ player.name }}</ion-col>\r\n      <ion-col *ngIf=\"!player.article\">{{ player.name }}</ion-col>\r\n      <ion-col size=\"2\">{{ player.country }}</ion-col>\r\n      <ion-col size=\"3\">\r\n        {{ player.rating }}\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <div *ngIf=\"!(ranking | async)\">\r\n      <ion-row *ngFor=\"let i of [1,2,3,4,5,6,7,8,9,10]\">\r\n        <ion-col class=\"ion-no-padding\" size=\"2\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-col>\r\n        <ion-col class=\"ion-no-padding\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-col>\r\n        <ion-col class=\"ion-no-padding\" size=\"2\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-col>\r\n        <ion-col class=\"ion-no-padding\" size=\"3\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=pages-ranking-ranking-module.js.map