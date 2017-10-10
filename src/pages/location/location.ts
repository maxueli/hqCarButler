import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  contactsCallback;
  hotCitys: Array<any> = [
    { value: '上海' },
    { value: '北京' },
    { value: '广州' },
    { value: '成都' },
    { value: '西安' },
    { value: '武汉' },
    { value: '深圳' },
    { value: '重庆' },
  ]
  citys: Array<any> = [
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
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contactsCallback = this.navParams.get('contactsCallback');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }
  //页面关闭调用
  ionViewDidLeave() {
    // 回传参数
    // this.contactsCallback('').then(res => {
    //   console.log(res);
    // }, err => {
    //   console.log(err);
    // })
  }

  chooseLocation(item) {
    console.log(item);
     this.contactsCallback(item).then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
    this.navCtrl.pop();
  }

}