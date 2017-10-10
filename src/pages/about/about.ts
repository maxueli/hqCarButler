import { JoinPage } from './../join/join';
import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { StoreDetailPage } from '../store-detail/store-detail';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  brandinfoShow:boolean =  false;//品牌详情显示隐藏
  brandinfochecked:any;
  brands:Array<any>=[
    {title:'A',value:['AAAAAAAa1','AAAAAAAAAA2','AAAAAA3']},
    {title:'B',value:['bbbAAAAAAa1','BBBAAAA2','BAAA3']},
    {title:'C',value:['CCCCAAAAAa1','CCBAAAA2','CCCCAAA3']},

  ]
  items = [];//上拉加载数组
  pet = '';
  modalisShow:boolean = false;//控制模态框显示隐藏
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
    for (let i = 0; i < 30; i++) {
      this.items.push(this.items.length);
    }
  }
  getradiobarand(value){
    console.log(value._value);
    console.log(value);
    
    this.pet = '';
  }
  // 获取品牌详情
  getbrandInfo(item){
    console.log(item);
    this.brandinfochecked = item;
    this.brandinfoShow = true;

  }
  // 展开品牌
  getbrand(e){
    // console.log(e.target.innerText);
    let value = e.target.innerText.replace(/(^\s*)|(\s*$)/g,'');
    this.HandleClick(value);
    // this.openModal();
  }
  sortlist(e){
    let value = e.target.innerText.replace(/(^\s*)|(\s*$)/g,'');
    this.HandleClick(value);
  }
  HandleClick(value){
    if(value==this.pet){
      this.pet = '';
      console.log(this.pet);
      return
    }
    this.pet = value;
    console.log(this.pet);
  }
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
  jumpjoin() {
    this.navCtrl.push(JoinPage);
  }
  // 跳转详情
  jumpDetail(i) {
    // console.log(i);
    this.navCtrl.push(StoreDetailPage, {
      id: i
    });
  }
  // 上拉加载
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push(this.items.length);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
