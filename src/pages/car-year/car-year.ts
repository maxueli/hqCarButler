// import { CarBrandPage } from './../car-brand/car-brand';
// import { CarInfoPage } from './../car-info/car-info';
// import {StoreDetailPage} from '../store-detail/store-detail'
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the CarYearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-car-year',
  templateUrl: 'car-year.html',
})
export class CarYearPage {
  carList:Array<Object>=[
    {'title':'2017款',"content":['2.0TFSI 双离合 40TFSI 时尚型']},
    {'title':'2016款',"content":['2.0TFSI 双离合 40TFSI 时尚型']},
    {'title':'2015款',"content":['2.0TFSI 双离合 40TFSI 时尚型']},
    {'title':'2014款',"content":['2.0TFSI 双离合 40TFSI 时尚型']},
    {'title':'2013款',"content":['2.0TFSI 双离合 40TFSI 时尚型']},
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // console.log(this.contactsCallback);
    // this.car = localStorage.getItem('car');
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CarYearPage');
  }
  back(title,item) {
    // console.log(this.navCtrl);
    // this.viewCtrl.dismiss();
    console.log(title,item);
    let car = localStorage.getItem('car');
    car = car + ' '+title+' '+item;
    localStorage.setItem('car',car);  
    this.navCtrl.popTo(this.navCtrl.getByIndex(2));
    // console.log(this.navCtrl.length());
    // this.navCtrl.push(CarInfoPage);
    // this.navCtrl.pop()
  }

}
