import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-advice-gift',
    templateUrl: 'advice-gift.html',
})
export class AdivceGiftPage {
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AdivceGiftPage');
    }

}
