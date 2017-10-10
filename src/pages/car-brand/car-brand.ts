import { CarYearPage } from './../car-year/car-year';
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
/**
 * Generated class for the CarBrandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-car-brand',
  templateUrl: 'car-brand.html',
})
export class CarBrandPage {
  car:string = '';
  carbrand:string = '';
  rootPage;
  brand: Array<Object> = [
    { 'title': "A", 'content': ['aaaaa', 'a1'] },
    { 'title': "B", 'content': ['奔驰', '宝马', '本田'] },
    { 'title': "C", 'content': ['长城', '长安'] },
    { 'title': "D", 'content': ['钉钉', '丁丁'] }
  ];
  model: Array<Object> = [
    { 'title': '东风日产', 'content': ['天籁', '风度', '蓝鸟'] },
    { 'title': '郑州日产', 'content': ['帅客', '帕拉丁', '俊峰'] }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarBrandPage');
  }
  /**
     * 打开监听
     */
  menuOpened() {
    // console.log('ionOpen');
  }
  /**
   * 关闭监听
   */
  menuClosed() {
    // console.log('ionClose');
  }
  // 获取品牌
  getbrand(item){
    
    this.carbrand = item;
    console.log(this.car.length);
  }
  carHandle(){
    // arguments
  }
  jumpcaryear() {
    // this.navCtrl.popTo()
    localStorage.clear();
    this.car =this.carbrand +' '+ arguments[0];
    console.log(this.car);
    localStorage.setItem('car',this.car);
    //  let modal = this.modalCtrl.create(CarYearPage);
    // modal.present();
    this.navCtrl.push(CarYearPage);
  }
}
