import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-topic-detail',
    templateUrl: 'topic-detail.html',
})
export class TopicDetailPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomeDetailPage');
    }
}
