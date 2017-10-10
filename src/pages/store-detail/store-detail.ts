import { Component, ViewChild } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';//注入轮播
import {CustomerPage } from '../customer/customer';
import {CarInfoPage} from '../car-info/car-info'
/**
 * Generated class for the StoreDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-store-detail',
  templateUrl: 'store-detail.html',
})
export class StoreDetailPage {
  @ViewChild('mySlider') slider: Slides;
  mySlideOptions = {
    autoplay: 2000,
    initialSlide: 0,
    pager: true,
    loop: true,
    speed: 300
  };
  // rootPage=ModalPage;
  id: any;
  color:string = 'light';
  btnGroup:Array<any> = ['全部','好评','晒单','差评'];
  selfEvent:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.id = navParams.get('id');
  }
  

  gocustomer(){
    this.navCtrl.push(CustomerPage);
  }
ionViewDidLoad() {
  setInterval(() => {
    this.slider.slideNext(300, true);
  },2000);
  console.log(this.id);
}
getComment(e){
  this.selfEvent = e;
}
gocarinfoPage(value){
  this.navCtrl.push(CarInfoPage,{title:value});
}

}
