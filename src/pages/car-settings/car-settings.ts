import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarInfoPage } from '../car-info/car-info';

@Component({
    selector: 'page-car-settings',
    templateUrl: 'car-settings.html',
})
export class CarSettingsPage {
    brandtypechecked: any;
    //定义组件类型
    types: Array<any> = [
        { title: '2017款', value: ['舒适版', '豪华版', '风尚版', '旗舰版'] },
        { title: '2016款', value: ['手动豪华版', '手动豪华版', '标致', '本田', '宝马', '别克', '保时捷', '奔腾', '北京汽车', '宝骏', '奔驰Smart', '北汽幻速', '北汽威旺'] },
        { title: '2015款', value: ['手动旗舰版', '自动舒适版', '自动豪华版'] },
    ]
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CarSettingsPage');
    }

    jumpToWriteCarInfo(item) {
        console.log(item);
        this.brandtypechecked = item;
        this.navCtrl.push(CarInfoPage, { title: "保养" });
    }

}
