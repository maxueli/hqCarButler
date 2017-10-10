import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { LocationPage } from '../location/location';
import { HomeDetailPage } from '../home-detail/home-detail';
import { AddCarPage } from '../add-car/add-car';
import { TopicDetailPage } from '../topic-detail/topic-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];
  public brandHidden: boolean = true;
  public brandFlag = 1;
  public brandHiddenTxt: string = '更多品牌';
  // public cityName = localStorage.getItem('locationName');

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 5; i++) {
      this.items.push(this.items.length);
    }
  }

  // 跳转定位
  jumpToLocation() {
    this.navCtrl.push(LocationPage, { contactsCallback: this.contactsCallback });
  }

  // 添加爱车
  jumpAddCar() {
    this.navCtrl.push(AddCarPage);
  }

  // 跳转详情(车主评价)
  jumpDetail(i) {
    console.log(i);
    this.navCtrl.push(HomeDetailPage);
  }

  // 头条详情
  jumpTopic() {
    this.navCtrl.push(TopicDetailPage);
  }

  ngAfterViewInit() {
    this.slides.autoplay = 3000;
    this.slides.autoplayDisableOnInteraction = false;
  }

  // 显示更多品牌
  public showMoreBrands() {
    this.brandFlag = -this.brandFlag;
    if (this.brandFlag == 1) {
      this.brandHiddenTxt = '更多品牌';
      this.brandHidden = true;
    } else if (this.brandFlag == -1) {
      this.brandHiddenTxt = '收起品牌';
      this.brandHidden = false;
    }

  }

  // 下拉加载数据
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.items.push(this.items.length);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  contacts = '南京';
  contactsCallback = (params) => {
    return new Promise((res, rej) => {
      if (typeof (params) != 'undefined') {
        this.contacts = params;
        console.log(this.contacts);
        res('ok');
      } else {
        rej(Error('error'));
      }
    })
  }


}
