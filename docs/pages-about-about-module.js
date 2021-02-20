(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

/***/ "6hSs":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.flex {\n  display: flex;\n  justify-content: center;\n}\n\n.content {\n  max-width: 500px;\n}\n\n.content p.tech {\n  margin: 0;\n  padding: 0;\n  margin-top: 5px;\n}\n\n.content p.section {\n  margin-bottom: 60px;\n  text-align: justify;\n}\n\n.avatar {\n  border-radius: 45%;\n  display: block;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFKRiIsImZpbGUiOiJhYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuZmxleCB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG5cclxuXHJcbiAgcC50ZWNoe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcblxyXG4gIHAuc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNDUlO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "P6uQ":
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function() { return AboutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.page */ "fr+C");




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ "UoYK":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-routing.module */ "P6uQ");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "fr+C");







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })
], AboutPageModule);



/***/ }),

/***/ "fr+C":
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about.page.html */ "zRMW");
/* harmony import */ var _about_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.page.scss */ "6hSs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AboutPage = class AboutPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutPage.ctorParameters = () => [];
AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about',
        template: _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AboutPage);



/***/ }),

/***/ "zRMW":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Sobre</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <div class=\"flex\">\r\n    <div class=\"content\">\r\n      <h3 class=\"ion-text-center\">Informações sobre o App</h3>\r\n      <p class=\"section\"> </p>\r\n\r\n\r\n      <h3 class=\"mt ion-text-center\">Sobre o Autor</h3>\r\n      <img class=\"avatar\" src=\"https://i.imgur.com/IsbK35N.png\" alt=\"\">\r\n      <p class=\"ion-text-center\"><strong>Desenvolvedor Full Stack</strong></p>\r\n      <p class=\"ion-text-center\"><strong>Tecnologias:</strong></p>\r\n      <p class=\"ion-text-center tech\">HTML</p>\r\n      <p class=\"ion-text-center tech\">CSS</p>\r\n      <p class=\"ion-text-center tech\">Javascript</p>\r\n      <p class=\"ion-text-center tech\">PHP</p>\r\n      <p class=\"section ion-text-center tech\">Mysql</p>\r\n\r\n\r\n      <h3 class=\"mt ion-text-center\">Politicas de privacidade</h3>\r\n      <p>A sua privacidade é importante para nós. É política do Chess BG respeitar a sua privacidade em relação a\r\n        qualquer informação sua que possamos coletar no site <a href=#>Chess BG</a>, e outros sites que possuímos e\r\n        operamos.</p>\r\n      <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.\r\n        Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos\r\n        coletando e como será usado. </p>\r\n      <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando\r\n        armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como\r\n        acesso, divulgação, cópia, uso ou modificação não autorizados.</p>\r\n      <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido\r\n        por lei.</p>\r\n      <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos\r\n        controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas <a\r\n          href='https://politicaprivacidade.com' target='_BLANK'>políticas de privacidade</a>. </p>\r\n      <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos\r\n        fornecer alguns dos serviços desejados.</p>\r\n      <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e\r\n        informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações\r\n        pessoais, entre em contacto connosco.</p>\r\n      <h3>Compromisso do Usuário</h3>\r\n      <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Chess BG oferece no site e com\r\n        caráter enunciativo, mas não limitativo:</p>\r\n      <ul>\r\n        <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>\r\n        <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou sobre cassinos, casas de apostas\r\n          legais (ex.: Bet.pt), jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou\r\n          contra os direitos humanos;</li>\r\n        <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Chess BG, de seus fornecedores\r\n          ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou\r\n          software que sejam capazes de causar danos anteriormente mencionados.</li>\r\n      </ul>\r\n      <h3>Mais informações</h3>\r\n      <p>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se\r\n        precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você\r\n        usa em nosso site.</p>\r\n      <p>Esta política é efetiva a partir de <strong>February</strong>/<strong>2021</strong>.</p>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=pages-about-about-module.js.map