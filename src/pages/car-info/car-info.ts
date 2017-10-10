import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocationPage } from '../location/location';
import { CarBrandPage } from '../car-brand/car-brand'
/**
 * Generated class for the CarInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-car-info',
  templateUrl: 'car-info.html',
})
export class CarInfoPage {
  month;
  car:string = '';
  title: string = '';
  city:string = '北京';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get('title');
    console.log(this.navParams.get('title'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarInfoPage');
  }
  ionViewDidEnter(){
    if(localStorage.getItem('car')){
      this.car = localStorage.getItem('car');
    }else{
      return;
    }
    
  }
  // 城市列表
  gocityList() {
    this.navCtrl.push(LocationPage, { contactsCallback: this.contactsCallback, title: this.title });
    // this.navCtrl.push(CityListPage,{contactsCallback:this.contactsCallback,title:this.title})

  }
  // 跳转车辆品牌
  jumpcarbrand() {
    this.navCtrl.push(CarBrandPage);
  }
  contacts = '';
  contactsCallback = (params) => {
    return new Promise((res, rej) => {
      if (typeof (params) != 'undefined') {
        this.city = params;
        console.log(this.city);
        res('ok');
      } else {
        rej(Error('error'));
      }
    })
  }

}
