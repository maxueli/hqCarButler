webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarYearPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { CarBrandPage } from './../car-brand/car-brand';
// import { CarInfoPage } from './../car-info/car-info';
// import {StoreDetailPage} from '../store-detail/store-detail'


/**
 * Generated class for the CarYearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarYearPage = (function () {
    function CarYearPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.carList = [
            { 'title': '2017款', "content": ['2.0TFSI 双离合 40TFSI 时尚型'] },
            { 'title': '2016款', "content": ['2.0TFSI 双离合 40TFSI 时尚型'] },
            { 'title': '2015款', "content": ['2.0TFSI 双离合 40TFSI 时尚型'] },
            { 'title': '2014款', "content": ['2.0TFSI 双离合 40TFSI 时尚型'] },
            { 'title': '2013款', "content": ['2.0TFSI 双离合 40TFSI 时尚型'] },
        ];
        // console.log(this.contactsCallback);
        // this.car = localStorage.getItem('car');
    }
    CarYearPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad CarYearPage');
    };
    CarYearPage.prototype.back = function (title, item) {
        // console.log(this.navCtrl);
        // this.viewCtrl.dismiss();
        console.log(title, item);
        var car = localStorage.getItem('car');
        car = car + ' ' + title + ' ' + item;
        localStorage.setItem('car', car);
        this.navCtrl.popTo(this.navCtrl.getByIndex(2));
        // console.log(this.navCtrl.length());
        // this.navCtrl.push(CarInfoPage);
        // this.navCtrl.pop()
    };
    return CarYearPage;
}());
CarYearPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-car-year',template:/*ion-inline-start:"/Volumes/M/CODE/hqCarButler/src/pages/car-year/car-year.html"*/'<!--\n  Generated template for the CarYearPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>选择年款配置</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-item-group *ngFor="let items of carList" >\n    <ion-item-divider color="light">{{items.title}}</ion-item-divider>\n    <ion-item (click)=\'back(items.title,item)\' *ngFor="let item of items.content" >{{item}}</ion-item>\n  </ion-item-group>\n  \n</ion-content>'/*ion-inline-end:"/Volumes/M/CODE/hqCarButler/src/pages/car-year/car-year.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CarYearPage);

//# sourceMappingURL=car-year.js.map

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Volumes/M/CODE/hqCarButler/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Volumes/M/CODE/hqCarButler/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__join_join__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_detail_store_detail__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = (function () {
    function AboutPage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.brandinfoShow = false; //品牌详情显示隐藏
        this.brands = [
            { title: 'A', value: ['AAAAAAAa1', 'AAAAAAAAAA2', 'AAAAAA3'] },
            { title: 'B', value: ['bbbAAAAAAa1', 'BBBAAAA2', 'BAAA3'] },
            { title: 'C', value: ['CCCCAAAAAa1', 'CCBAAAA2', 'CCCCAAA3'] },
        ];
        this.items = []; //上拉加载数组
        this.pet = '';
        this.modalisShow = false; //控制模态框显示隐藏
        for (var i = 0; i < 30; i++) {
            this.items.push(this.items.length);
        }
    }
    AboutPage.prototype.getradiobarand = function (value) {
        console.log(value._value);
        console.log(value);
        this.pet = '';
    };
    // 获取品牌详情
    AboutPage.prototype.getbrandInfo = function (item) {
        console.log(item);
        this.brandinfochecked = item;
        this.brandinfoShow = true;
    };
    // 展开品牌
    AboutPage.prototype.getbrand = function (e) {
        // console.log(e.target.innerText);
        var value = e.target.innerText.replace(/(^\s*)|(\s*$)/g, '');
        this.HandleClick(value);
        // this.openModal();
    };
    AboutPage.prototype.sortlist = function (e) {
        var value = e.target.innerText.replace(/(^\s*)|(\s*$)/g, '');
        this.HandleClick(value);
    };
    AboutPage.prototype.HandleClick = function (value) {
        if (value == this.pet) {
            this.pet = '';
            console.log(this.pet);
            return;
        }
        this.pet = value;
        console.log(this.pet);
    };
    // 模态框
    // openModal() {
    //       // this.modalisShow = true;
    //       if(!this.modalisShow){
    //         let modal = this.modalCtrl.create(ModalPage,{isshow:this.modalisShow});
    //         modal.present();
    //         this.modalisShow=true;
    //       }
    //     }
    // 跳转门店
    AboutPage.prototype.jumpjoin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__join_join__["a" /* JoinPage */]);
    };
    // 跳转详情
    AboutPage.prototype.jumpDetail = function (i) {
        // console.log(i);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__store_detail_store_detail__["a" /* StoreDetailPage */], {
            id: i
        });
    };
    // 上拉加载
    AboutPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 30; i++) {
                _this.items.push(_this.items.length);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Volumes/M/CODE/hqCarButler/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      4S店\n    </ion-title>\n    <ion-buttons end (click)=\'jumpjoin()\'>\n      <button>\n          加盟\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-grid class="brandfixed">\n      <ion-row class="brandbtn">\n        <ion-col col-6 [class.actived]=\'pet=="品牌"\' (click)=\'getbrand($event)\'>品牌\n          <ion-icon name="{{pet==\'品牌\'?\'ios-arrow-up\':\'ios-arrow-down\'}}" isActive="false"></ion-icon>\n        </ion-col>\n        <ion-col col-6 [class.actived]=\'pet=="推荐排序"\' (click)=\'sortlist($event)\'>推荐排序\n          <ion-icon name="{{pet==\'推荐排序\'?\'ios-arrow-up\':\'ios-arrow-down\'}}" isActive="false"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-header>\n\n<ion-content>\n  <ion-list class="listcontent">\n    <ion-item *ngFor="let i of items" (click)=\'jumpDetail(i)\'>\n      <ion-thumbnail item-start>\n        <img src="https://ocpvh3dgz.qnssl.com/1245fccf-77cb-48bf-86a6-548efe0d68aa.png-withLogo750x400">\n      </ion-thumbnail>\n      <h3>成都万友东辰长安4S店({{i}})</h3>\n      <p class="imgicon">\n        <img src="https://ocpvd5a60.qnssl.com/51d1d5d2-5545-470c-8ef7-20945ae7c5d7.png" alt="">\n        <img src="https://ocpvd5a60.qnssl.com/84789590-660c-4dc5-b668-8c6d825b48a5.png" alt="">\n      </p>\n      <p class="icon-group">\n        <ion-icon name="ios-star" isActive="true"></ion-icon>\n        <ion-icon name="ios-star" isActive="true"></ion-icon>\n        <ion-icon name="ios-star" isActive="true"></ion-icon>\n        <ion-icon name="ios-star" isActive="true"></ion-icon>\n        <ion-icon name="ios-star" isActive="true"></ion-icon>\n        <span class="score-words">\n                        5\n                        <span class="score">分</span>\n        </span>\n      </p>\n      <p class=\'address-distance\'>\n        <!-- <span class="distance">1386.5km</span> -->\n        <span class="address">成都市成华区迎晖路157号</span>\n      </p>\n      <button ion-button clear item-end class="discount">\n                    <span class="disconut-num">5</span>\n                    折起\n                  </button>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载更多...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n<div [ngSwitch]="pet" class="brandcontent">\n  <ion-list *ngSwitchCase="\'品牌\'">\n    <div class="modelbox">\n      <div class="modal-dialog">\n        <div class="modal-content">\n          <ion-list radio-group>\n            <ion-item>\n              <ion-label>品牌不限</ion-label>\n              <ion-radio #radiobrand value="brand" (click)=\'getradiobarand(radiobrand)\'></ion-radio>\n            </ion-item>\n          </ion-list>\n          <ion-item-group *ngFor="let items of brands">\n            <ion-item-divider color="light">{{items.title}}</ion-item-divider>\n            <ion-item [class.checkedradio]=\'item===brandinfochecked\' *ngFor="let item of items.value" (click)=\'getbrandInfo(item)\'>{{item}}</ion-item>\n          </ion-item-group>\n          <div class="car-brand-info" *ngIf="brandinfoShow">\n            <ion-list radio-group>\n              <ion-item>\n                <ion-label>Go</ion-label>\n                <ion-radio checked="true" value="go"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Rust</ion-label>\n                <ion-radio value="rust"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Go</ion-label>\n                <ion-radio checked="true" value="go"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Rust</ion-label>\n                <ion-radio value="rust"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Go</ion-label>\n                <ion-radio checked="true" value="go"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Rust</ion-label>\n                <ion-radio value="rust"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Go</ion-label>\n                <ion-radio checked="true" value="go"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Rust</ion-label>\n                <ion-radio value="rust"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Go</ion-label>\n                <ion-radio checked="true" value="go"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Rust</ion-label>\n                <ion-radio value="rust"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Go</ion-label>\n                <ion-radio checked="true" value="go"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Rust</ion-label>\n                <ion-radio value="rust"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Go</ion-label>\n                <ion-radio checked="true" value="go"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Rust</ion-label>\n                <ion-radio value="rust"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Go</ion-label>\n                <ion-radio checked="true" value="go"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Rust</ion-label>\n                <ion-radio value="rust"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Go</ion-label>\n                <ion-radio checked="true" value="go"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Rust</ion-label>\n                <ion-radio value="rust"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Go</ion-label>\n                <ion-radio checked="true" value="go"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Rust</ion-label>\n                <ion-radio value="rust"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Go</ion-label>\n                <ion-radio checked="true" value="go"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Rust</ion-label>\n                <ion-radio value="rust"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Go</ion-label>\n                <ion-radio checked="true" value="go"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Rust</ion-label>\n                <ion-radio value="rust"></ion-radio>\n              </ion-item>\n\n\n            </ion-list>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-list>\n  <ion-list *ngSwitchCase="\'推荐排序\'">\n    <div class="modelbox">\n      <div class="modal-dialog">\n        <div class="modal-content">\n          <ion-list radio-group>\n\n            <ion-item>\n              <ion-label>Go</ion-label>\n              <ion-radio checked="true" value="go"></ion-radio>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>Rust</ion-label>\n              <ion-radio value="rust"></ion-radio>\n            </ion-item>\n\n\n          </ion-list>\n        </div>\n      </div>\n    </div>\n  </ion-list>\n</div>'/*ion-inline-end:"/Volumes/M/CODE/hqCarButler/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the JoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JoinPage = (function () {
    function JoinPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JoinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JoinPage');
    };
    return JoinPage;
}());
JoinPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-join',template:/*ion-inline-start:"/Volumes/M/CODE/hqCarButler/src/pages/join/join.html"*/'<!--\n  Generated template for the JoinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>4S店加盟</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- 面包屑 -->\n  <div class="top-cont">\n    <ul class="guide-wrap">\n      <li class="item flex active">\n        <div class="triangle2"></div>\n        <div class="guide-cont">申请加盟</div>\n      </li>\n      <li class="item flex ">\n        <div class="triangle1"></div>\n        <div class="triangle2"></div>\n        <div class="guide-cont">电话联系</div>\n      </li>\n      <li class="item flex ">\n        <div class="triangle1"></div>\n        <div class="triangle2"></div>\n        <div class="guide-cont">提交报价</div>\n      </li>\n      <li class="item flex ">\n        <div class="triangle1"></div>\n        <div class="guide-cont guide-cont-last">4S店上线</div>\n      </li>\n    </ul>\n  </div>\n  <div class="marginTop"></div>\n  <!-- 输入框 -->\n  <ion-list >\n    <ion-item>\n      <ion-label>城市</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>店名</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>品牌</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>地址</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>联系电话</ion-label>\n      <ion-input type="tell"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>联系人姓名</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div class="blockbtn">\n    <button ion-button  block>申请加盟</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Volumes/M/CODE/hqCarButler/src/pages/join/join.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], JoinPage);

//# sourceMappingURL=join.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_customer__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__car_info_car_info__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //注入轮播


/**
 * Generated class for the StoreDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StoreDetailPage = (function () {
    function StoreDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mySlideOptions = {
            autoplay: 2000,
            initialSlide: 0,
            pager: true,
            loop: true,
            speed: 300
        };
        this.color = 'light';
        this.btnGroup = ['全部', '好评', '晒单', '差评'];
        this.id = navParams.get('id');
    }
    StoreDetailPage.prototype.gocustomer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__customer_customer__["a" /* CustomerPage */]);
    };
    StoreDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setInterval(function () {
            _this.slider.slideNext(300, true);
        }, 2000);
        console.log(this.id);
    };
    StoreDetailPage.prototype.getComment = function (e) {
        this.selfEvent = e;
    };
    StoreDetailPage.prototype.gocarinfoPage = function (value) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__car_info_car_info__["a" /* CarInfoPage */], { title: value });
    };
    return StoreDetailPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('mySlider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
], StoreDetailPage.prototype, "slider", void 0);
StoreDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-store-detail',template:/*ion-inline-start:"/Volumes/M/CODE/hqCarButler/src/pages/store-detail/store-detail.html"*/'<!--\n  Generated template for the StoreDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>storeDetail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-slides pager loop #mySlider style="width:100%;height:200px">\n      <ion-slide>\n        <img src="https://ocpvh3dgz.qnssl.com/1245fccf-77cb-48bf-86a6-548efe0d68aa.png-withLogo750x400">\n      </ion-slide>\n      <ion-slide>\n        <img src="https://ocpvh3dgz.qnssl.com/1245fccf-77cb-48bf-86a6-548efe0d68aa.png-withLogo750x400">\n      </ion-slide>\n      <ion-slide>\n        <img src="https://ocpvh3dgz.qnssl.com/1245fccf-77cb-48bf-86a6-548efe0d68aa.png-withLogo750x400">\n      </ion-slide>\n      <ion-slide>\n        <img src="https://ocpvh3dgz.qnssl.com/1245fccf-77cb-48bf-86a6-548efe0d68aa.png-withLogo750x400">\n      </ion-slide>\n      <!-- <span>1</span> -->\n    </ion-slides>\n    <ion-card-content>\n      <ion-card-title>\n        成都万友东辰长安4S店\n        <ion-icon class="phone" name=\'ios-call\'></ion-icon>\n      </ion-card-title>\n      <p>\n        <span class="score">5</span>\n        <img class="imgicon" src="https://ocpvd5a60.qnssl.com/51d1d5d2-5545-470c-8ef7-20945ae7c5d7.png" alt="">\n      </p>\n      <p>\n        <span>1386.5km</span> 成都市成华区迎晖路157号\n        <ion-icon class="address" name=\'ios-paper-plane\'></ion-icon>\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="Hot">\n    <ion-item>\n      <!-- <ion-avatar item-start>\n            <img src="https://placehold.it/375X200">\n          </ion-avatar> -->\n      <h3>热门保养</h3>\n    </ion-item>\n    <ion-card-content>\n      <ion-row>\n        <ion-col>\n          <div class="car-logo">\n            <img src="https://ocpvd5a60.qnssl.com/c0eeffd0-48dd-4bc2-b7c8-498e5ea28742.jpg">\n          </div>\n          <div class="car-name">\n            长安汽车 CS75\n          </div>\n          <s><span class="font-xs">￥</span>463</s><span class="cut-line">/</span><span class="real-price"><span class="font-s">￥</span>292\n          <span class="fd-qi">起</span>\n          </span>\n        </ion-col>\n        <ion-col>\n          <div class="car-logo">\n            <img src="https://ocpvd5a60.qnssl.com/c0eeffd0-48dd-4bc2-b7c8-498e5ea28742.jpg">\n          </div>\n          <div class="car-name">\n            长安汽车 CS75\n          </div>\n          <s><span class="font-xs">￥</span>463</s><span class="cut-line">/</span><span class="real-price"><span class="font-s">￥</span>292\n          <span class="fd-qi">起</span>\n          </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div class="car-logo">\n            <img src="https://ocpvd5a60.qnssl.com/c0eeffd0-48dd-4bc2-b7c8-498e5ea28742.jpg">\n          </div>\n          <div class="car-name">\n            长安汽车 CS75\n          </div>\n          <s><span class="font-xs">￥</span>463</s><span class="cut-line">/</span><span class="real-price"><span class="font-s">￥</span>292\n          <span class="fd-qi">起</span>\n          </span>\n        </ion-col>\n        <ion-col>\n          <div class="car-logo">\n            <img src="https://ocpvd5a60.qnssl.com/c0eeffd0-48dd-4bc2-b7c8-498e5ea28742.jpg">\n          </div>\n          <div class="car-name">\n            长安汽车 CS75\n          </div>\n          <s><span class="font-xs">￥</span>463</s><span class="cut-line">/</span><span class="real-price"><span class="font-s">￥</span>292\n          <span class="fd-qi">起</span>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="car-comment">\n\n    <ion-item>\n\n      <h3>车主评价</h3>\n    </ion-item>\n    <ion-card-content>\n      <ion-row class="firstRow">\n        <ion-col class="commentflex" text-center>\n          <div class="comment-left">\n            <div class="overall-score">\n              5<span class="score-words">分</span>\n            </div>\n            <div class="whole-comment">\n              总体点评\n            </div>\n          </div>\n\n        </ion-col>\n        <ion-col class="borderleft">\n          <div class="comment-right">\n            <div class="attitude">\n              <div class="attitude-title">\n                服务态度\n              </div>\n              <div class="star-wrap">\n                <ion-icon name=\'ios-star\'></ion-icon>\n                <ion-icon name=\'ios-star\'></ion-icon>\n                <ion-icon name=\'ios-star\'></ion-icon>\n                <ion-icon name=\'ios-star\'></ion-icon>\n                <ion-icon name=\'ios-star\'></ion-icon>\n              </div>\n              <span class="score">5</span>\n            </div>\n            <div class="maintain">\n              <div class="maintain-title">\n                维修效率\n              </div>\n              <div class="star-wrap">\n                <ion-icon name=\'ios-star\'></ion-icon>\n                <ion-icon name=\'ios-star\'></ion-icon>\n                <ion-icon name=\'ios-star\'></ion-icon>\n                <ion-icon name=\'ios-star\'></ion-icon>\n                <ion-icon name=\'ios-star\'></ion-icon>\n              </div>\n              <span class="score">5</span>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class="btn-group">\n        <ion-col text-center *ngFor="let item of btnGroup">\n          <button ion-button color="light" [class.selected]="item === selfEvent" (click)=\'getComment(item)\' small>{{item}}(0)</button>\n        </ion-col>\n        <!-- <ion-col text-center (click)=\'getComment()\'>\n            <button ion-button color="{{color}}" small (click)=\'getComment($event)\'>好评(0)</button>\n        </ion-col>\n        <ion-col text-center (click)=\'getComment()\'>\n            <button ion-button color="{{color}}" small (click)=\'getComment($event)\'>晒单(0)</button>\n        </ion-col>\n        <ion-col text-center (click)=\'getComment()\'>\n            <button ion-button color="{{color}}" small (click)=\'getComment($event)\'>差评(0)</button>\n        </ion-col> -->\n      </ion-row>\n      <ion-row class="commentbg">\n        <ion-col>\n          <div class="comment-info">\n            <div class="no-comment">\n              没有相应评论\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n  \n</ion-content>\n<ion-footer>\n  <div class="nav-tabs">\n    <div class="tabs-item" (click)=\'gocustomer()\'>客服</div>\n    <div class="tabs-item">钣喷</div>\n    <div class="tabs-item" (click)=\'gocarinfoPage("清洗")\'>清洗</div>\n    <div class="tabs-item" (click)=\'gocarinfoPage("维修")\'>维修</div>\n    <div class="tabs-item tabs-maintain" (click)=\'gocarinfoPage("保养")\'>4S店保养</div>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/M/CODE/hqCarButler/src/pages/store-detail/store-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], StoreDetailPage);

//# sourceMappingURL=store-detail.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomerPage = (function () {
    function CustomerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = [];
        for (var i = 0; i < 10; i++) {
            this.data.push({
                title: '预定问题 ' + i,
                details: [
                    { detailTitle: '我怎么在乐车邦做汽车保养？', content: ['1、打开乐车邦APP，进入“4S店保养”，添加您的爱车，并确定购买年份及当前行驶里程；', '2、乐车邦根据您爱车的车型及行驶里程，按照厂家保养手册规范推荐需要做的保养项目，您也可以根据自身需求增加/减少保养项目；', '3、选择您想预约的保养日期、4S店以及具体到店时间，确定保养价格；', '4、在线确定并成功支付后，按照您预约的日期和时间到4S店进行保养。'] },
                ],
                icon: 'ios-arrow-down-outline',
                showDetails: false
            });
        }
    }
    CustomerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerPage');
    };
    CustomerPage.prototype.toggleDetails = function (data) {
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'ios-arrow-down-outline';
        }
        else {
            data.showDetails = true;
            data.icon = 'ios-arrow-up-outline';
        }
    };
    return CustomerPage;
}());
CustomerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-customer',template:/*ion-inline-start:"/Volumes/M/CODE/hqCarButler/src/pages/customer/customer.html"*/'<!--\n  Generated template for the CustomerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>customer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <ion-row>\n      <ion-col text-center>\n        <div class=\'header-item\'>\n          <img  alt="">\n          电话客服\n        </div>\n      </ion-col>\n      <ion-col text-center>\n        <div class="header-item">\n          <img  alt="">\n          意见反馈\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-list class=\'list-title\'>\n      <ion-item>\n        <img  alt="">\n        常见问题\n      </ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-item class="customer-item"  *ngFor="let d of data" (click)="toggleDetails(d)">\n          <div class="list-title">\n            {{d.title}}\n            <ion-icon  item-right [name]="d.icon"></ion-icon>\n          </div>\n          <div *ngIf="d.showDetails">\n            <div *ngFor="let items of d.details" >\n                {{items.detailTitle}}\n                <div *ngFor="let item of items.content" >\n                  {{item}}\n                </div>\n            </div>\n          </div>\n        </ion-item>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/M/CODE/hqCarButler/src/pages/customer/customer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CustomerPage);

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarBrandPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__car_year_car_year__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CarBrandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarBrandPage = (function () {
    function CarBrandPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.car = '';
        this.carbrand = '';
        this.brand = [
            { 'title': "A", 'content': ['aaaaa', 'a1'] },
            { 'title': "B", 'content': ['奔驰', '宝马', '本田'] },
            { 'title': "C", 'content': ['长城', '长安'] },
            { 'title': "D", 'content': ['钉钉', '丁丁'] }
        ];
        this.model = [
            { 'title': '东风日产', 'content': ['天籁', '风度', '蓝鸟'] },
            { 'title': '郑州日产', 'content': ['帅客', '帕拉丁', '俊峰'] }
        ];
    }
    CarBrandPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarBrandPage');
    };
    /**
       * 打开监听
       */
    CarBrandPage.prototype.menuOpened = function () {
        // console.log('ionOpen');
    };
    /**
     * 关闭监听
     */
    CarBrandPage.prototype.menuClosed = function () {
        // console.log('ionClose');
    };
    // 获取品牌
    CarBrandPage.prototype.getbrand = function (item) {
        this.carbrand = item;
        console.log(this.car.length);
    };
    CarBrandPage.prototype.carHandle = function () {
        // arguments
    };
    CarBrandPage.prototype.jumpcaryear = function () {
        // this.navCtrl.popTo()
        localStorage.clear();
        this.car = this.carbrand + ' ' + arguments[0];
        console.log(this.car);
        localStorage.setItem('car', this.car);
        //  let modal = this.modalCtrl.create(CarYearPage);
        // modal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__car_year_car_year__["a" /* CarYearPage */]);
    };
    return CarBrandPage;
}());
CarBrandPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-car-brand',template:/*ion-inline-start:"/Volumes/M/CODE/hqCarButler/src/pages/car-brand/car-brand.html"*/'<!--\n  Generated template for the CarBrandPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>carBrand</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<div class="black-overlay-top"></div>\n<ion-menu  class="brand-slider" type="overlay" [content]="content" side=\'right\' (ionOpen)="menuOpened()" (ionClose)="menuClosed()">\n  <ion-content>\n    <ion-list radio-group  (ionChange)=\'jumpcaryear($event)\' class="radio-list">\n      <div class="radio-item" *ngFor="let items of model" >\n        <div class="redio-title" >\n          {{items.title}}\n        </div>\n        <ion-item *ngFor="let item of items.content" >\n          <ion-label>{{item}}</ion-label>\n          <ion-radio  value="{{item}}"></ion-radio>\n        </ion-item>\n      </div>\n     \n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n<ion-content>\n  <ion-index-list>\n    <ion-index-section *ngFor="let items of brand" [index]="items.title"  >\n      <ion-index-cell menuToggle block *ngFor="let item of items.content" (click)=\'getbrand(item)\'>\n        <img alt=""> {{item}}\n      </ion-index-cell>\n    </ion-index-section>\n  </ion-index-list>\n</ion-content>'/*ion-inline-end:"/Volumes/M/CODE/hqCarButler/src/pages/car-brand/car-brand.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* MenuController */]])
], CarBrandPage);

//# sourceMappingURL=car-brand.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Volumes/M/CODE/hqCarButler/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/M/CODE/hqCarButler/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_location__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_detail_home_detail__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_car_add_car__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topic_detail_topic_detail__ = __webpack_require__(206);
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.items = [];
        this.brandHidden = true;
        this.brandFlag = 1;
        this.brandHiddenTxt = '更多品牌';
        this.contacts = '南京';
        this.contactsCallback = function (params) {
            return new Promise(function (res, rej) {
                if (typeof (params) != 'undefined') {
                    _this.contacts = params;
                    console.log(_this.contacts);
                    res('ok');
                }
                else {
                    rej(Error('error'));
                }
            });
        };
        for (var i = 0; i < 5; i++) {
            this.items.push(this.items.length);
        }
    }
    // 跳转定位
    HomePage.prototype.jumpToLocation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__location_location__["a" /* LocationPage */], { contactsCallback: this.contactsCallback });
    };
    // 添加爱车
    HomePage.prototype.jumpAddCar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_car_add_car__["a" /* AddCarPage */]);
    };
    // 跳转详情(车主评价)
    HomePage.prototype.jumpDetail = function (i) {
        console.log(i);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_detail_home_detail__["a" /* HomeDetailPage */]);
    };
    // 头条详情
    HomePage.prototype.jumpTopic = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__topic_detail_topic_detail__["a" /* TopicDetailPage */]);
    };
    HomePage.prototype.ngAfterViewInit = function () {
        this.slides.autoplay = 3000;
        this.slides.autoplayDisableOnInteraction = false;
    };
    // 显示更多品牌
    HomePage.prototype.showMoreBrands = function () {
        this.brandFlag = -this.brandFlag;
        if (this.brandFlag == 1) {
            this.brandHiddenTxt = '更多品牌';
            this.brandHidden = true;
        }
        else if (this.brandFlag == -1) {
            this.brandHiddenTxt = '收起品牌';
            this.brandHidden = false;
        }
    };
    // 下拉加载数据
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 5; i++) {
                _this.items.push(_this.items.length);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Volumes/M/CODE/hqCarButler/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      乐车邦\n    </ion-title>\n    <ion-buttons start class="icon-location">\n      <button (click)="jumpToLocation()">\n          {{contacts}}\n          </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!--轮播图-->\n  <ion-slides pager loop autoplay="2000" style="width: 100%;height: 150px;">\n    <ion-slide>\n      <img src="https://ocpvgmewj.qnssl.com/mkt_banner_ad/banner_ad_iphone_img/20170707/a5f1f590-ad1e-4574-accf-3b90b32929ae.png"\n        alt="">\n    </ion-slide>\n    <ion-slide>\n      <img src="https://ocpvgmewj.qnssl.com/mkt_banner_ad/banner_ad_iphone_img/20170706/451f3c48-64ed-4b5e-af46-58d469a7dba5.jpg"\n        alt="">\n    </ion-slide>\n    <ion-slide>\n      <img src="https://ocpvgmewj.qnssl.com/cf4696bb-17d3-4447-9927-2f3f8f2762f6.png" alt="">\n    </ion-slide>\n  </ion-slides>\n  <!--导航菜单-->\n  <ion-grid class="nav-cont">\n    <ion-row>\n      <ion-col width-20>\n        <div class="discount-tips">6.8折</div>\n        <p class="nav-pic">\n          <img src="https://ocpvgmewj.qnssl.com/5adbeef9-0b5b-4bb9-b99c-dc7ac05ec9b0.png" alt="">\n        </p>\n        <p class="nav-title">4S店保养</p>\n      </ion-col>\n      <ion-col width-20>\n        <p class="nav-pic">\n          <img src="https://ocpvgmewj.qnssl.com/43487882-0add-4dbe-a0c6-6db80a905653.png" alt="">\n        </p>\n        <p class="nav-title">钣金喷漆</p>\n      </ion-col>\n      <ion-col width-20>\n        <p class="nav-pic">\n          <img src="https://ocpvgmewj.qnssl.com/8c5a2d5e-e613-4483-b00f-e672a3378bdc.png" alt="">\n        </p>\n        <p class="nav-title">清洗养护</p>\n      </ion-col>\n      <ion-col width-20>\n        <p class="nav-pic">\n          <img src="https://ocpvgmewj.qnssl.com/99f8dd2d-6890-4ea9-b513-5737058dac98.png" alt="">\n        </p>\n        <p class="nav-title">原厂维修</p>\n      </ion-col>\n      <ion-col width-20>\n        <div class="discount-tips">折扣</div>\n        <p class="nav-pic">\n          <img src="https://ocpvgmewj.qnssl.com/d2e91ea8-8180-485a-a23f-96e7e6cbd589.png" alt="">\n        </p>\n        <p class="nav-title">加油</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col width-20>\n        <div class="discount-tips">优惠</div>\n        <p class="nav-pic">\n          <img src="https://ocpvgmewj.qnssl.com/mkt_banner_ad/banner_ad_iphone_img/20170716/71f1d13d-33a3-42f9-b264-06265d844cdf.png"\n            alt="">\n        </p>\n        <p class="nav-title">洗车</p>\n      </ion-col>\n      <ion-col width-20>\n        <p class="nav-pic">\n          <img src="https://ocpvgmewj.qnssl.com/3de6399f-b084-41b7-a93a-1c973df273c5.png" alt="">\n        </p>\n        <p class="nav-title">更换电瓶</p>\n      </ion-col>\n      <ion-col width-20>\n        <p class="nav-pic">\n          <img src="https://ocpvgmewj.qnssl.com/6025351c-f12c-41e6-929b-9408e828faa0.png" alt="">\n        </p>\n        <p class="nav-title">违章代缴</p>\n      </ion-col>\n      <ion-col width-20>\n        <p class="nav-pic">\n          <img src="https://dn-lcbresource.qbox.me/cac526e8-9f97-4617-a546-9420c127826b.png" alt="">\n        </p>\n        <p class="nav-title">智慧停车</p>\n      </ion-col>\n      <ion-col width-20>\n        <p class="nav-pic">\n          <img src="https://ocpvgmewj.qnssl.com/4d696673-27d7-414b-ae58-bceacbaf3dc9.png" alt="">\n        </p>\n        <p class="nav-title">积分商城</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!--头条-->\n  <div class="headlines">\n    <div class="headlines-title">\n      <p class="headlines-title-logo">\n        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506080309396&di=408c4df244408536f69b990a82386f24&imgtype=0&src=http%3A%2F%2Fupload.techweb.com.cn%2F2016%2F0204%2F1454591229628.png"\n          alt="">\n          <span style="height:30px;float: right;color: #ddd;">|</span>\n      </p>\n    </div>\n    <div class="headlines-cont">\n      <ion-slides loop autoplay="2000" direction="vertical">\n        <ion-slide class="headlines-cont-txt" (click)="jumpTopic()">\n          不收费的“高速公路”，秋天自驾美爆了！\n        </ion-slide>\n        <ion-slide class="headlines-cont-txt" (click)="jumpTopic()">\n          熄火后不能插车充，这7大误区你中招了吗\n        </ion-slide>\n        <ion-slide class="headlines-cont-txt" (click)="jumpTopic()">\n          中央后视镜，老司机最看重的安全法宝\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n  <!--活动-->\n  <div class="activities">\n    <div class="activity-item">\n      <div class="activity-pic" style="background-image: url(&quot;https://ocpvgmewj.qnssl.com/afa004e4-f799-4014-bfc0-454ef083e4d8.png&quot;);"></div>\n      <div class="show-dots">洗从天降 </div>\n      <div class="activity-tip show-dots" style="color: rgb(250, 90, 75);">12次免费洗车 </div>\n    </div>\n    <div class="activity-item">\n      <div class="activity-pic" style="background-image: url(&quot;https://ocpvgmewj.qnssl.com/mkt_banner_ad/banner_ad_iphone_img/20170702/c290593e-b157-4946-b705-273d5e8a4811.png&quot;);"></div>\n      <div class="show-dots">领588元 </div>\n      <div class="activity-tip show-dots" style="color: rgb(250, 90, 75);">新人养车礼包 </div>\n    </div>\n    <div class="activity-item">\n      <div class="activity-pic" style="background-image: url(&quot;https://ocpvgmewj.qnssl.com/d60a34b4-df8e-4ebc-a4fe-390a1febfe2d.png&quot;);"></div>\n      <div class="show-dots">评价有礼 </div>\n      <div class="activity-tip show-dots" style="color: rgb(250, 90, 75);">送养车现金 </div>\n    </div>\n    <div class="activity-item">\n      <div class="activity-pic" style="background-image: url(&quot;https://ocpvgmewj.qnssl.com/0b7394ce-ac71-4603-83a6-c1ff7009cb72.png&quot;);"></div>\n      <div class="show-dots">邀请有礼 </div>\n      <div class="activity-tip show-dots" style="color: rgb(250, 90, 75);">奖励20元 </div>\n    </div>\n  </div>\n  <!--热门保养-->\n  <ion-item class="hot">\n    <span class="hot-title">热门保养</span>\n    <span class="add-car" (click)="jumpAddCar()"><ion-icon name="add" class="icon-add"></ion-icon>添加爱车</span>\n  </ion-item>\n  <div class="brand-cont">\n    <div class="brand-cont-item">\n      <p class="brand-pic">\n        <img src="https://ocpvd5a60.qnssl.com/2e89006f-67a6-4e6d-ab65-a6f8540b0d79.png" alt="">\n      </p>\n      <p class="brand-price">￥427</p>\n    </div>\n    <div class="brand-cont-item">\n      <p class="brand-pic">\n        <img src="https://ocpvd5a60.qnssl.com/b7515315-5565-494b-82ef-362d1ae103e1.png" alt="">\n      </p>\n      <p class="brand-price">￥333</p>\n    </div>\n    <div class="brand-cont-item">\n      <p class="brand-pic">\n        <img src="https://ocpvd5a60.qnssl.com/c9607cae-7c28-44b7-91c3-b2132f4cc9ab.png" alt="">\n      </p>\n      <p class="brand-price">￥326</p>\n    </div>\n    <div class="brand-cont-item">\n      <p class="brand-pic">\n        <img src="https://ocpvd5a60.qnssl.com/ecf658b5-5406-47ea-82c7-fa3c661f4d32.png" alt="">\n      </p>\n      <p class="brand-price">￥753</p>\n    </div>\n    <div class="brand-cont-item">\n      <p class="brand-pic">\n        <img src="https://ocpvd5a60.qnssl.com/e7a5ea6b-cfcc-4db7-824d-5c2cacf120a0.png" alt="">\n      </p>\n      <p class="brand-price">￥123</p>\n    </div>\n    <div class="brand-cont-item">\n      <p class="brand-pic">\n        <img src="https://ocpvd5a60.qnssl.com/3f1fa15b-b3b5-48c8-8391-cd4051781e6d.png" alt="">\n      </p>\n      <p class="brand-price">￥45</p>\n    </div>\n    <div class="brand-cont-item">\n      <p class="brand-pic">\n        <img src="https://ocpvd5a60.qnssl.com/car/brand_logo/20170721/55273f43-8de9-4e21-9a8e-c73bcca2e784.png" alt="">\n      </p>\n      <p class="brand-price">￥77</p>\n    </div>\n    <div class="brand-cont-item">\n      <p class="brand-pic">\n        <img src="https://ocpvd5a60.qnssl.com/dac84f53-862e-416c-bc0e-29b0af3fe4eb.png" alt="">\n      </p>\n      <p class="brand-price">￥231</p>\n    </div>\n    <!-- 添加更多品牌 -->\n    <div class="brand-cont-item" [hidden]="brandHidden">\n      <p class="brand-pic">\n        <img src="https://ocpvd5a60.qnssl.com/b7515315-5565-494b-82ef-362d1ae103e1.png" alt="">\n      </p>\n      <p class="brand-price">￥333</p>\n    </div>\n    <div class="brand-cont-item" [hidden]="brandHidden">\n      <p class="brand-pic">\n        <img src="https://ocpvd5a60.qnssl.com/c9607cae-7c28-44b7-91c3-b2132f4cc9ab.png" alt="">\n      </p>\n      <p class="brand-price">￥326</p>\n    </div>\n    <div class="brand-cont-item" [hidden]="brandHidden">\n      <p class="brand-pic">\n        <img src="https://ocpvd5a60.qnssl.com/ecf658b5-5406-47ea-82c7-fa3c661f4d32.png" alt="">\n      </p>\n      <p class="brand-price">￥753</p>\n    </div>\n    <div class="brand-cont-item" [hidden]="brandHidden">\n      <p class="brand-pic">\n        <img src="https://ocpvd5a60.qnssl.com/e7a5ea6b-cfcc-4db7-824d-5c2cacf120a0.png" alt="">\n      </p>\n      <p class="brand-price">￥123</p>\n    </div>\n    <div class="brand-cont-item" [hidden]="brandHidden">\n      <p class="brand-pic">\n        <img src="https://ocpvd5a60.qnssl.com/3f1fa15b-b3b5-48c8-8391-cd4051781e6d.png" alt="">\n      </p>\n      <p class="brand-price">￥45</p>\n    </div>\n    <div class="brand-cont-item" [hidden]="brandHidden">\n      <p class="brand-pic">\n        <img src="https://ocpvd5a60.qnssl.com/car/brand_logo/20170721/55273f43-8de9-4e21-9a8e-c73bcca2e784.png" alt="">\n      </p>\n      <p class="brand-price">￥77</p>\n    </div>\n    <div class="brand-cont-item" [hidden]="brandHidden">\n      <p class="brand-pic">\n        <img src="https://ocpvd5a60.qnssl.com/dac84f53-862e-416c-bc0e-29b0af3fe4eb.png" alt="">\n      </p>\n      <p class="brand-price">￥231</p>\n    </div>\n  </div>\n  <ion-item class="more">\n    <span class="more-brands" (click)="showMoreBrands()">{{brandHiddenTxt}} <span class="icon-more">></span>\n    <!--<ion-icon name="arrow-dropright-circle" class="icon-right"></ion-icon>-->\n    </span>\n  </ion-item>\n  <!--车主评价-->\n  <ion-item class="advice">\n    <span class="advice-title">车主评价</span>\n  </ion-item>\n  <ion-list>\n    <ion-item class="advice-list" *ngFor="let i of items" (click)=\'jumpDetail(i)\'>\n      <ion-card class="advice-cont">\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="https://ocpvgmewj.qnssl.com/market/920fengbao/imgs/man29265845e3.png">\n          </ion-avatar>\n          <h2>151****3500 {{i}}</h2>\n          <p class="time">2017-9-23 17:52</p>\n        </ion-item>\n        <ion-card-content class="advice-card-cont">\n          <p class="car-type">车型:比亚迪 速锐&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;花费:￥566 <span>（省￥229）</span></p>\n          <p class="car-cont">去时人比较少，10分钟就轮到俺车了。大玻璃窗可以看到保养进程，保养师傅比较用心，接待的小兄弟很仔细，核对了保养项目，花费明细等所... <span>更多</span></p>\n          <p class="advice-pic">\n            <img src="https://ocpvh3dgz.qnssl.com/public/2017/9/24/3ffdad3784776d6e2da4b4763d36386f.jpg-thumbnail">\n            <img src="https://ocpvh3dgz.qnssl.com/public/2017/9/24/3ffdad3784776d6e2da4b4763d36386f.jpg-thumbnail">\n            <img src="https://ocpvh3dgz.qnssl.com/public/2017/9/24/3ffdad3784776d6e2da4b4763d36386f.jpg-thumbnail">\n            <img src="https://ocpvh3dgz.qnssl.com/public/2017/9/24/3ffdad3784776d6e2da4b4763d36386f.jpg-thumbnail">\n          </p>\n        </ion-card-content>\n        <p class="store">\n          <ion-icon name="pricetag" class="icon-pricetag"></ion-icon>天津银诺臣东风悦达起亚4S店</p>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n  <!-- 下拉加载 -->\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载更多...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Volumes/M/CODE/hqCarButler/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advice_gift_advice_gift__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeDetailPage = (function () {
    function HomeDetailPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.adHidden = false;
    }
    HomeDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeDetailPage');
    };
    HomeDetailPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: '请下载乐车帮app',
            duration: 3000,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    HomeDetailPage.prototype.adIsHidden = function () {
        this.adHidden = true;
    };
    HomeDetailPage.prototype.jumpToAdvice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__advice_gift_advice_gift__["a" /* AdivceGiftPage */]);
    };
    return HomeDetailPage;
}());
HomeDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home-detail',template:/*ion-inline-start:"/Volumes/M/CODE/hqCarButler/src/pages/home-detail/home-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>评价详情</ion-title>\n    </ion-navbar>\n    <ion-buttons end class="icon-open" (click)="presentToast()">\n        <ion-icon name="share" class="icon-open"></ion-icon>\n    </ion-buttons>\n</ion-header>\n\n<ion-content>\n    <ion-card class="advice-cont">\n        <ion-item class="advice-header">\n            <ion-avatar item-start>\n                <img src="https://ocpvgmewj.qnssl.com/market/920fengbao/imgs/man29265845e3.png">\n            </ion-avatar>\n            <h2>151****3500 {{i}}</h2>\n            <p class="time">2017-9-23 17:52</p>\n            <div class="advice-header-tips">省¥<span class="advice-header-tips-number">390 </span></div>\n        </ion-item>\n        <ion-grid class="advice-info-table">\n            <ion-row>\n                <ion-col width-30>服务评星</ion-col>\n                <ion-col width-70>5</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>车型</ion-col>\n                <ion-col>别克 君越</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>里程</ion-col>\n                <ion-col>30000 km</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>时间</ion-col>\n                <ion-col>2017-9-23</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>项目</ion-col>\n                <ion-col>\n                    机油(原厂银美孚5W-30 SN级全合成) <br /> 机油滤清器(原厂件) <br /> 刹车油(原厂件) <br />\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>金额</ion-col>\n                <ion-col><span class="price">￥830</span>\n                    <s>￥1220</s>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-card-content class="advice-card-cont">\n            <p class="car-cont">去时人比较少，10分钟就轮到俺车了。大玻璃窗可以看到保养进程，保养师傅比较用心，接待的小兄弟很仔细，核对了保养项目，花费明细等所，以后还会再来的。</p>\n            <p class="advice-pic">\n                <img src="https://ocpvh3dgz.qnssl.com/public/2017/9/24/3ffdad3784776d6e2da4b4763d36386f.jpg-thumbnail">\n                <img src="https://ocpvh3dgz.qnssl.com/public/2017/9/24/3ffdad3784776d6e2da4b4763d36386f.jpg-thumbnail">\n                <img src="https://ocpvh3dgz.qnssl.com/public/2017/9/24/3ffdad3784776d6e2da4b4763d36386f.jpg-thumbnail">\n                <img src="https://ocpvh3dgz.qnssl.com/public/2017/9/24/3ffdad3784776d6e2da4b4763d36386f.jpg-thumbnail">\n            </p>\n        </ion-card-content>\n        <p class="store">\n            <ion-icon name="pricetag" class="icon-pricetag"></ion-icon>天津银诺臣东风悦达起亚4S店\n        </p>\n        <button class="thumb"><ion-icon name="thumbs-up" class="icon-thumbs-up"></ion-icon>2</button>\n        <!--广告标签-->\n        <div class="ad" [hidden]="adHidden">\n            <span (click)="adIsHidden()">X</span>\n            <div (click)="jumpToAdvice()"></div>\n        </div>\n    </ion-card>\n    <div class="comment-wrap">\n        <div class="all-comment">全部评论</div>\n        <div class="no-comment">暂无评论，快来抢个沙发吧！</div>\n        <button class="btn-join">打开乐车邦APP参与互动</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Volumes/M/CODE/hqCarButler/src/pages/home-detail/home-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], HomeDetailPage);

//# sourceMappingURL=home-detail.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivceGiftPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdivceGiftPage = (function () {
    function AdivceGiftPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdivceGiftPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdivceGiftPage');
    };
    return AdivceGiftPage;
}());
AdivceGiftPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-advice-gift',template:/*ion-inline-start:"/Volumes/M/CODE/hqCarButler/src/pages/advice-gift/advice-gift.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>评价有礼</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="sa-banner"></div>\n    <ion-item class="gift">\n        <span class="gift-title">参与方式</span>\n    </ion-item>\n    <div class="sa-wrap">\n        <div></div>\n    </div>\n    <ion-item class="gift">\n        <span class="gift-title">奖励规则</span>\n    </ion-item>\n    <div class="sa-text-wrap">\n        <div></div>\n        <div>* 以上奖励可叠加，也就是说一篇订单评价最多可以获得：20元养车金+60积分哦！</div>\n    </div>\n    <ion-item class="advice-case">\n        <span>精选案例</span>\n    </ion-item>\n    <ion-item class="advice-list">\n        <ion-card class="advice-cont">\n            <ion-item>\n                <ion-avatar item-start>\n                    <img src="https://ocpvgmewj.qnssl.com/market/920fengbao/imgs/man29265845e3.png">\n                </ion-avatar>\n                <h2>151****3500 {{i}}</h2>\n                <p class="time">2017-9-23 17:52</p>\n            </ion-item>\n            <ion-card-content class="advice-card-cont">\n                <p class="car-type">车型:比亚迪 速锐&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;花费:￥566 <span>（省￥229）</span></p>\n                <p class="car-cont">去时人比较少，10分钟就轮到俺车了。大玻璃窗可以看到保养进程，保养师傅比较用心，接待的小兄弟很仔细，核对了保养项目，花费明细等所。</p>\n                <div class="advice-pic">\n                    <div>\n                        <img src="https://img06.lechebangstatic.com/webapp/order/60108c84e56.png">\n                        <p>4S店外观</p>\n                    </div>\n                    <div>\n                        <img src="https://img06.lechebangstatic.com/webapp/order/52a8702b18c.png">\n                        <p>展厅区</p>\n                    </div>\n                    <div>\n                        <img src="https://img06.lechebangstatic.com/webapp/order/4338d6b4d9a.png">\n                        <p>休息室</p>\n                    </div>\n                    <div>\n                        <img src="https://img06.lechebangstatic.com/webapp/order/34c71f0509c.png">\n                        <p>接待区</p>\n                    </div>\n                    <div>\n                        <img src="https://img06.lechebangstatic.com/webapp/order/2a5ef963456.png">\n                        <p>施工场所</p>\n                    </div>\n                    <div>\n                        <img src="https://img06.lechebangstatic.com/webapp/order/1f4cf15dd6c.png">\n                        <p>施工现场</p>\n                    </div>\n                </div>\n            </ion-card-content>\n        </ion-card>\n    </ion-item>\n    <div class="form-wrap">\n        <h3>活动规则</h3>\n        <ul class="font-xs">\n            <li>需要使用乐车邦APP2.7.1及以上版本才可参加此活动；</li>\n            <li>请发布真实有效的评价，对于虚假、恶意灌水、抄袭、恶意攻击以及违反国家相关法律法规的评价将无法获得奖励；</li>\n            <li>以上奖励目前仅支持4S店保养、清洗养护、原厂维修、钣金喷漆的订单，洗车、加油、上门更换电瓶订单暂不支持评价；</li>\n            <li>发布的3张以上带图评价获得的50积分奖励，将在乐车邦小编审核通过之后发放，若发布的照片不符合规则 ，将无法获得50积分；</li>\n            <li>若发布的带图评价被小编推荐为精选评价，奖励的20元养车金会自动存入您的乐车邦钱包余额，可以用于保养、清洗养护、原厂维修、钣金喷漆以及洗车订单抵扣使用；</li>\n            <li>活动最终解释权归乐车邦APP所有。</li>\n        </ul>\n    </div>\n</ion-content>\n<div class="page-bottom">\n    <div class="fix-content"><button class="btn-primary sa-btn">去评价赚奖金</button></div>\n</div>'/*ion-inline-end:"/Volumes/M/CODE/hqCarButler/src/pages/advice-gift/advice-gift.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], AdivceGiftPage);

//# sourceMappingURL=advice-gift.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car_settings_car_settings__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddCarPage = (function () {
    function AddCarPage(navCtrl, navParams, menuController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuController = menuController;
        this.brands = [
            { title: 'A', value: ['奥迪'] },
            { title: 'B', value: ['奔驰', '比亚迪', '标致', '本田', '宝马', '别克', '保时捷', '奔腾', '北京汽车', '宝骏', '奔驰Smart', '北汽幻速', '北汽威旺'] },
            { title: 'C', value: ['长城', '长安汽车', '传祺'] },
            { title: 'D', value: ['东莞'] },
            { title: 'F', value: ['抚顺', '福州', '佛山'] },
            { title: 'G', value: ['广州'] },
            { title: 'H', value: ['杭州', '合肥'] },
            { title: 'J', value: ['济南'] },
            { title: 'K', value: ['昆明'] },
            { title: 'N', value: ['宁波', '南京', '南宁'] },
            { title: 'Q', value: ['青岛'] },
            { title: 'S', value: ['上海', '深圳', '沈阳', '石家庄', '苏州'] },
            { title: 'T', value: ['太原', '天津', '唐山'] },
            { title: 'W', value: ['武汉', '无锡'] },
            { title: 'X', value: ['西安', '厦门'] },
            { title: 'Z', value: ['郑州'] }
        ];
        //初始化menu菜单选项
        this.pages = [
            { title: '国产', value: ['国产型号1', '国产型号2', '国产型号3', '国产型号4', '国产型号5'] },
            { title: '进口', value: ['进口型号A', '进口型号B', '进口型号C', '进口型号D', '进口型号E', '进口型号F', '进口型号G', '进口型号H'] },
        ];
    }
    /**
  * 打开监听
  */
    AddCarPage.prototype.menuOpened = function () {
        this.menuController.open();
        console.log('ionOpen');
    };
    /**
     * 关闭监听
     */
    AddCarPage.prototype.menuClosed = function () {
        console.log('ionClose');
        this.brandchecked = '';
    };
    /**
     * 处理每个点击事件
     */
    AddCarPage.prototype.openPage = function (item) {
        // this.menuController.close();
        this.brandchecked = item;
        //设置当前显示组件
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__car_settings_car_settings__["a" /* CarSettingsPage */]);
    };
    AddCarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddCarPage');
    };
    return AddCarPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], AddCarPage.prototype, "nav", void 0);
AddCarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-car',template:/*ion-inline-start:"/Volumes/M/CODE/hqCarButler/src/pages/add-car/add-car.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>选品牌</ion-title>\n    </ion-navbar>\n</ion-header>\n<div class="black-overlay-top"></div>\n<ion-menu  class="brand-slider" type="overlay" [content]="content" side=\'right\' (ionOpen)="menuOpened()" (ionClose)="menuClosed()">\n    <ion-content>\n        <ion-list>\n            <ion-item-group *ngFor="let items of pages">\n                <ion-item-divider class="menu-type-title" color="light">{{items.title}}</ion-item-divider>\n                <ion-item [class.checkedradio]=\'item===brandchecked\' class="menu-type-cont" *ngFor="let item of items.value" (click)=\'openPage(item)\'>{{item}}</ion-item>\n            </ion-item-group>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n<ion-content>\n    <ion-index-list>\n        <ion-index-section *ngFor="let items of brands" [index]="items.title">\n            <ion-index-cell *ngFor="let item of items.value" (click)=\'menuOpened()\' menuToggle block>\n                {{item}}\n            </ion-index-cell>\n        </ion-index-section>\n    </ion-index-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/M/CODE/hqCarButler/src/pages/add-car/add-car.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */]])
], AddCarPage);

//# sourceMappingURL=add-car.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car_info_car_info__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarSettingsPage = (function () {
    function CarSettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //定义组件类型
        this.types = [
            { title: '2017款', value: ['舒适版', '豪华版', '风尚版', '旗舰版'] },
            { title: '2016款', value: ['手动豪华版', '手动豪华版', '标致', '本田', '宝马', '别克', '保时捷', '奔腾', '北京汽车', '宝骏', '奔驰Smart', '北汽幻速', '北汽威旺'] },
            { title: '2015款', value: ['手动旗舰版', '自动舒适版', '自动豪华版'] },
        ];
    }
    CarSettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarSettingsPage');
    };
    CarSettingsPage.prototype.jumpToWriteCarInfo = function (item) {
        console.log(item);
        this.brandtypechecked = item;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__car_info_car_info__["a" /* CarInfoPage */], { title: "保养" });
    };
    return CarSettingsPage;
}());
CarSettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-car-settings',template:/*ion-inline-start:"/Volumes/M/CODE/hqCarButler/src/pages/car-settings/car-settings.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>选择年款设置</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item-group *ngFor="let items of types">\n            <ion-item-divider class="type-title" color="light">{{items.title}}</ion-item-divider>\n            <ion-item [class.checkedradio]=\'item===brandtypechecked\' class="type-cont" *ngFor="let item of items.value" (click)=\'jumpToWriteCarInfo(item)\'>{{item}}</ion-item>\n        </ion-item-group>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Volumes/M/CODE/hqCarButler/src/pages/car-settings/car-settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CarSettingsPage);

//# sourceMappingURL=car-settings.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopicDetailPage = (function () {
    function TopicDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TopicDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeDetailPage');
    };
    return TopicDetailPage;
}());
TopicDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-topic-detail',template:/*ion-inline-start:"/Volumes/M/CODE/hqCarButler/src/pages/topic-detail/topic-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>详情</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="content">\n        <h2>车顶的鲨鱼鳍是做什么的?99%的人不知道</h2>\n        <div class="top-content">\n            <span><span>乐车帮</span>2017-09-24&nbsp;&nbsp;&nbsp;02：00</span>\n            <span><ion-icon name="eye"></ion-icon>45037</span>\n        </div>\n        <div class="main-content">\n            <p>如果你有留意过自己爱车的车顶，或许你会发现车顶会有一个类似鲨鱼鳍的东西。很多新手基本都不知道这是个什么万一。那么这个“鲨鱼鳍”到底对汽车有什么作用呢？接下来小编就跟大家说说。</p>\n            <p><strong>鲨鱼鳍的由来</strong></p>\n            <p><strong><img src="https://oa8yk5v8t.qnssl.com/news/article_source/20170924/23ba1750-f3d9-45e1-b01a-c4fc38a435a5.png-detailview"></strong></p>\n            <p>其实所谓的鲨鱼鳍就是汽车的天线，说到汽车天线小伙伴们肯定想到了很多种，原来的汽车天线就跟咱们家老式电视机的天线差不多是伸缩式的，后来还有了鞭形天线、柱状天线、螺旋天线、汽车玻璃天线等等。</p>\n            <p>后来宝马公司为了增强汽车的通讯信号，专门研制了鲨鱼鳍天线，用在了宝马一系列的车型当中，结果它不仅克服了原有传统天线的很多缺点，还因为外观大方、功能齐全、颜色多样且与汽车整体造型融为一体，让汽车看上去更时尚运动，所以深受消费青睐，所以市场上各种中高档汽车纷纷采用了鲨鱼鳍天线。</p>\n            <p><strong>鲨鱼鳍天线到底有什么作用?</strong></p>\n            <p>其实鲨鱼鳍天线除了可以增强汽车通讯信号外还有很多其他作用，因为它集成了FM、GPS、GSM等各种强大的汽车电子功能以及普通天线的所有功能，下面咱们就来说一说：</p>\n            <p><strong>增强信号</strong></p>\n            <p>如果你一直在城市中徘徊，那么这个功能可能没法体验，因为只有到了偏远的地方，当你想听个FM都会卡顿的时候，才能体会到它的强大，顺畅的FM会让你觉得更加悦耳动听。</p>\n            <p><strong>释放静电</strong></p>\n            <p><strong><img src="https://oa8yk5v8t.qnssl.com/news/article_source/20170924/b8360fcb-a422-45cf-ae5f-0b0cac925263.png-detailview" alt=""></strong></p>\n            <p>这矗立在车顶的“小尾巴”其实还是一个静电释放器。到了冬季或是非常干燥的秋季，车身上就会容易带上静电，而这些静电如果不释放掉，带给人的除了烦恼，还会在加油站带来非常可怕的后果。大家有时候会看到油罐车尾部会有一条链条拖在地上其实就是在释放静电，而鲨鱼鳍就具备这种作用。</p>\n            <p><strong>拦截传输电波</strong></p>\n            <p>汽车天线可以拦截发射台发射的高频电波，同时会将这些拦截下来的电波传输给车载电话、收音机、无线导航设备的接收机，然后对载波进行调整。不要小瞧这一根小小的天线，它其实在一边忙于拦截电波，而一边还要帮你将拦截的电波传给车内所需要这些电波的装置，想想还真是不可缺少。</p>\n            <p><strong>扰流</strong></p>\n            <p>大家都知道汽车在行驶中会遇到空气阻力，速度越快，而阻力也就越大。鲨鱼鳍可以有效减少并克服空气阻力带给汽车的影响，虽然很多汽车会安装专门的扰流器，但是鲨鱼鳍却也可以起到一定的扰流作用。</p>\n            <p><strong>传统天线可以改鲨鱼鳍吗?</strong></p>\n            <p><strong><img src="https://oa8yk5v8t.qnssl.com/news/article_source/20170924/7e6e1ecd-aea3-4b10-a153-fe096c32a998.png-detailview" alt=""></strong></p>\n            <p>理论上来说，传统天线是可以DIY改为鲨鱼鳍的。一些车子出厂之前本身就预留了鲨鱼鳍天线的线路，装起来非常简单，只不过鲨鱼鳍天线的价格有一些小贵。</p>\n            <p>也有一些汽车原本没有预留鲨鱼鳍改装的线路，那么改起来就比较麻烦了，首先要在车顶钻个洞，不知道小伙伴们能不能忍受？且如果你的爱车属于鞭状天线，那么这种属于全向接收信号，鲨鱼鳍是定向接收信号的，如果强改势必会对车载电台接收信号有所影响，那么你还会接受吗？</p>\n            <p>汽车原装的天线，一般都是经过了严格的电磁仿真设计，以及多轮测试对比的。所以说对于车辆本身来说，它是效果最佳的天线，我们并不建议更换原厂天线。</p>\n            <p class="web"><span>本文来源于网络</span></p>\n            <button class="thumb"><ion-icon name="thumbs-up" class="icon-thumbs-up"></ion-icon>15</button>\n        </div>\n    </div>\n    <div class="comment-wrap">\n        <div class="all-comment">全部评论</div>\n        <div class="no-comment">暂无评论，快来抢个沙发吧！</div>\n        <button class="btn-join">打开乐车邦APP参与互动</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Volumes/M/CODE/hqCarButler/src/pages/topic-detail/topic-detail.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
], TopicDetailPage);

var _a, _b;
//# sourceMappingURL=topic-detail.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_car_year_car_year__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_location_location__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_car_add_car__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_car_settings_car_settings__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_detail_home_detail__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_topic_detail_topic_detail__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_advice_gift_advice_gift__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_join_join__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_store_detail_store_detail__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_customer_customer__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_car_info_car_info__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_car_brand_car_brand__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ionic3_index_list__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_car_add_car__["a" /* AddCarPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_car_settings_car_settings__["a" /* CarSettingsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_detail_home_detail__["a" /* HomeDetailPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_topic_detail_topic_detail__["a" /* TopicDetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_advice_gift_advice_gift__["a" /* AdivceGiftPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_join_join__["a" /* JoinPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_store_detail_store_detail__["a" /* StoreDetailPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_customer_customer__["a" /* CustomerPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_car_info_car_info__["a" /* CarInfoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_car_brand_car_brand__["a" /* CarBrandPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_car_year_car_year__["a" /* CarYearPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                tabsHideOnSubPages: 'true',
                backButtonText: ''
            }),
            __WEBPACK_IMPORTED_MODULE_22_ionic3_index_list__["a" /* IndexListModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_car_add_car__["a" /* AddCarPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_car_settings_car_settings__["a" /* CarSettingsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_detail_home_detail__["a" /* HomeDetailPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_topic_detail_topic_detail__["a" /* TopicDetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_advice_gift_advice_gift__["a" /* AdivceGiftPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_join_join__["a" /* JoinPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_store_detail_store_detail__["a" /* StoreDetailPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_customer_customer__["a" /* CustomerPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_car_info_car_info__["a" /* CarInfoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_car_brand_car_brand__["a" /* CarBrandPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_car_year_car_year__["a" /* CarYearPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Volumes/M/CODE/hqCarButler/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Volumes/M/CODE/hqCarButler/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_location__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__car_brand_car_brand__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CarInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarInfoPage = (function () {
    function CarInfoPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.car = '';
        this.title = '';
        this.city = '北京';
        this.contacts = '';
        this.contactsCallback = function (params) {
            return new Promise(function (res, rej) {
                if (typeof (params) != 'undefined') {
                    _this.city = params;
                    console.log(_this.city);
                    res('ok');
                }
                else {
                    rej(Error('error'));
                }
            });
        };
        this.title = this.navParams.get('title');
        console.log(this.navParams.get('title'));
    }
    CarInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarInfoPage');
    };
    CarInfoPage.prototype.ionViewDidEnter = function () {
        if (localStorage.getItem('car')) {
            this.car = localStorage.getItem('car');
        }
        else {
            return;
        }
    };
    // 城市列表
    CarInfoPage.prototype.gocityList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__location_location__["a" /* LocationPage */], { contactsCallback: this.contactsCallback, title: this.title });
        // this.navCtrl.push(CityListPage,{contactsCallback:this.contactsCallback,title:this.title})
    };
    // 跳转车辆品牌
    CarInfoPage.prototype.jumpcarbrand = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__car_brand_car_brand__["a" /* CarBrandPage */]);
    };
    return CarInfoPage;
}());
CarInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-car-info',template:/*ion-inline-start:"/Volumes/M/CODE/hqCarButler/src/pages/car-info/car-info.html"*/'<!--\n  Generated template for the CarInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>填写爱车信息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="desc">\n    请完善以下信息便于更精确的为您推荐{{title}}套餐\n  </div>\n  <ion-list class="carinfo-list">\n    <ion-item (click)=\'gocityList()\'>\n      <span class="item-left">城市</span>\n      <span class=\'city\'>{{city}}</span>\n      <ion-icon item-right name="ios-arrow-forward-outline"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\'jumpcarbrand()\'>\n      <span class="item-left">车辆</span>\n      <span *ngIf="car==\'\'" >请添加您的爱车</span>\n      <span *ngIf="car!=\'\'" >{{car}}</span>\n      <ion-icon item-right name="ios-arrow-forward-outline"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <!-- <span class="item-left">购车时间</span> -->\n      <!-- <span>请选择您的购车时间</span> -->\n      <ion-label class="item-left">购车时间</ion-label>\n      <ion-datetime cancelText=\'取消\' doneText=\'确定\' placeholder=\'请选择您的购车时间\' displayFormat="YYYY MM DD" [(ngModel)]="month"></ion-datetime>\n      <ion-icon item-right name="ios-arrow-forward-outline"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <span class="item-left">行驶里程</span>\n      <span>\n              <input type="text" placeholder="公里数">km\n              <ion-icon  name="ios-create-outline"></ion-icon>\n            </span>\n    </ion-item>\n  </ion-list>\n  <div class="pros-intro">\n    <div class="car-title">\n      <h4>\n        100万车主选择乐车邦\n      </h4>\n    </div>\n    <ul class="flex-wrap">\n      <li class="flex">\n        <div class="icon-item">\n          <ion-icon name=\'ios-alarm\'></ion-icon>\n        </div>\n        <div class="txt">\n          低至6.8折\n        </div>\n      </li>\n      <li class="flex">\n        <div class="icon-item">\n          <ion-icon name=\'ios-alarm\'></ion-icon>\n        </div>\n        <div class="txt">\n          原厂保障\n        </div>\n      </li>\n      <li class="flex">\n        <div class="icon-item">\n          <ion-icon name=\'ios-alarm\'></ion-icon>\n        </div>\n        <div class="txt">\n          保修无忧\n        </div>\n      </li>\n      <li class="flex">\n        <div class="icon-item">\n          <ion-icon name=\'ios-alarm\'></ion-icon>\n        </div>\n        <div class="txt">\n          随时可退\n        </div>\n      </li>\n    </ul>\n  </div>\n  \n</ion-content>\n<ion-footer>\n  <div class="nav-bar">\n    去看{{title}}方案{{contacts}}\n  </div>\n</ion-footer>'/*ion-inline-end:"/Volumes/M/CODE/hqCarButler/src/pages/car-info/car-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CarInfoPage);

//# sourceMappingURL=car-info.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationPage = (function () {
    function LocationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hotCitys = [
            { value: '上海' },
            { value: '北京' },
            { value: '广州' },
            { value: '成都' },
            { value: '西安' },
            { value: '武汉' },
            { value: '深圳' },
            { value: '重庆' },
        ];
        this.citys = [
            { title: 'B', value: ['北京', '保定'] },
            { title: 'C', value: ['成都', '常州', '长沙', '重庆'] },
            { title: 'D', value: ['东莞'] },
            { title: 'F', value: ['抚顺', '福州', '佛山'] },
            { title: 'G', value: ['广州'] },
            { title: 'H', value: ['杭州', '合肥'] },
            { title: 'J', value: ['济南'] },
            { title: 'K', value: ['昆明'] },
            { title: 'N', value: ['宁波', '南京', '南宁'] },
            { title: 'Q', value: ['青岛'] },
            { title: 'S', value: ['上海', '深圳', '沈阳', '石家庄', '苏州'] },
            { title: 'T', value: ['太原', '天津', '唐山'] },
            { title: 'W', value: ['武汉', '无锡'] },
            { title: 'X', value: ['西安', '厦门'] },
            { title: 'Z', value: ['郑州'] },
        ];
        this.contactsCallback = this.navParams.get('contactsCallback');
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    //页面关闭调用
    LocationPage.prototype.ionViewDidLeave = function () {
        // 回传参数
        // this.contactsCallback('').then(res => {
        //   console.log(res);
        // }, err => {
        //   console.log(err);
        // })
    };
    LocationPage.prototype.chooseLocation = function (item) {
        console.log(item);
        this.contactsCallback(item).then(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
        this.navCtrl.pop();
    };
    return LocationPage;
}());
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-location',template:/*ion-inline-start:"/Volumes/M/CODE/hqCarButler/src/pages/location/location.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>当前城市</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<div class="top-wrap">\n    <div class="top-cont">\n        <ion-icon name="pin" class="icon-pin"></ion-icon>定位失败，点击重试\n    </div>\n    <div class="hot-city">\n        <p>热门城市</p>\n        <div>\n            <p *ngFor="let item of hotCitys" (click)=\'chooseLocation(item.value)\'>{{item.value}}</p>\n        </div>\n    </div>\n</div>\n\n<!--<ion-list>\n        <ion-item-group class="cityItem" *ngFor="let items of citys">\n            <ion-item-divider color="light">{{items.title}}</ion-item-divider>\n            <ion-item *ngFor="let item of items.value" (click)=\'chooseLocation(item)\'>{{item}}</ion-item>\n        </ion-item-group>\n    </ion-list>-->\n<!--<ul class="char-nav vertical-center">\n        <li># </li>\n        <li>B </li>\n        <li>C </li>\n        <li>D </li>\n        <li>F </li>\n        <li>G </li>\n        <li>H </li>\n        <li>J </li>\n        <li>K </li>\n        <li>N </li>\n        <li>Q </li>\n        <li>S </li>\n        <li>T </li>\n        <li>W </li>\n        <li>X </li>\n        <li>Z </li>\n    </ul>-->\n<ion-content>\n    <ion-index-list>\n        <ion-index-section *ngFor="let items of citys" [index]="items.title">\n            <ion-index-cell *ngFor="let item of items.value" (click)=\'chooseLocation(item)\' menuToggle block>\n                {{item}}\n            </ion-index-cell>\n        </ion-index-section>\n    </ion-index-list>\n</ion-content>'/*ion-inline-end:"/Volumes/M/CODE/hqCarButler/src/pages/location/location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map