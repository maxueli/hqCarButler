import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Nav } from 'ionic-angular';
import { CarSettingsPage } from '../car-settings/car-settings';

@Component({
    selector: 'page-add-car',
    templateUrl: 'add-car.html',
})
export class AddCarPage {
    @ViewChild(Nav) nav: Nav;
    rootPage;
    brandchecked:any;
    brands: Array<any> = [
        { title: 'A', value: ['奥迪'] },
        { title: 'B', value: ['奔驰', '比亚迪', '标致', '本田', '宝马', '别克', '保时捷', '奔腾', '北京汽车', '宝骏', '奔驰Smart', '北汽幻速', '北汽威旺'] },
        { title: 'C', value: ['长城', '长安汽车', '传祺'] },
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
        { title: 'Z', value: ['郑州'] }
    ]
    //定义组件类型
    pages: Array<{ title: string, value: [string] }>;
    constructor(public navCtrl: NavController, public navParams: NavParams, public menuController: MenuController) {
        //初始化menu菜单选项
        this.pages = [
            { title: '国产', value: ['国产型号1','国产型号2','国产型号3','国产型号4','国产型号5'] },
            { title: '进口', value: ['进口型号A', '进口型号B', '进口型号C', '进口型号D', '进口型号E', '进口型号F', '进口型号G', '进口型号H'] },
        ];
    }
    /**
  * 打开监听
  */
    menuOpened() {
        this.menuController.open();
        console.log('ionOpen');
    }
    /**
     * 关闭监听
     */
    menuClosed() {
        console.log('ionClose');
        this.brandchecked = '';
    }
    /**
     * 处理每个点击事件
     */
    openPage(item) {
        // this.menuController.close();
        this.brandchecked = item;
        //设置当前显示组件
        this.navCtrl.push(CarSettingsPage);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddCarPage');
    }

}
