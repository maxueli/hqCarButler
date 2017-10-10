import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AdivceGiftPage } from '../advice-gift/advice-gift';

@Component({
    selector: 'page-home-detail',
    templateUrl: 'home-detail.html',
})
export class HomeDetailPage {

    public adHidden: boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomeDetailPage');
    }

    public presentToast() {
        let toast = this.toastCtrl.create({
            message: '请下载乐车帮app',
            duration: 3000,
            position: 'middle'
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();

    }
    public adIsHidden() {
        this.adHidden = true;
    }

    jumpToAdvice() {
        this.navCtrl.push(AdivceGiftPage);
    }
}
