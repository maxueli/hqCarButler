import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
  data: Array<{title: string, details: Array<Object>, icon: string, showDetails: boolean}> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i = 0; i < 10; i++ ){
      this.data.push({
          title: '预定问题 '+i,
          details:[
            {detailTitle:'我怎么在乐车邦做汽车保养？',content:['1、打开乐车邦APP，进入“4S店保养”，添加您的爱车，并确定购买年份及当前行驶里程；','2、乐车邦根据您爱车的车型及行驶里程，按照厂家保养手册规范推荐需要做的保养项目，您也可以根据自身需求增加/减少保养项目；','3、选择您想预约的保养日期、4S店以及具体到店时间，确定保养价格；','4、在线确定并成功支付后，按照您预约的日期和时间到4S店进行保养。']},
          ],
          icon: 'ios-arrow-down-outline',
          showDetails: false
        });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }
  toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-arrow-down-outline';
    } else {
        data.showDetails = true;
        data.icon = 'ios-arrow-up-outline';
    }
  }
}
