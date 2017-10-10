import { CarYearPage } from './../pages/car-year/car-year';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LocationPage } from '../pages/location/location';
import { AddCarPage } from '../pages/add-car/add-car';
import { CarSettingsPage } from '../pages/car-settings/car-settings';
import { HomeDetailPage } from '../pages/home-detail/home-detail';
import { TopicDetailPage } from '../pages/topic-detail/topic-detail';
import { AdivceGiftPage } from '../pages/advice-gift/advice-gift';
import { TabsPage } from '../pages/tabs/tabs';
import { JoinPage } from '../pages/join/join';
import {StoreDetailPage} from '../pages/store-detail/store-detail';
import{CustomerPage } from '../pages/customer/customer';
import {CarInfoPage} from '../pages/car-info/car-info';
import{ CarBrandPage} from '../pages/car-brand/car-brand';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {IndexListModule} from "ionic3-index-list";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LocationPage,
    AddCarPage,
    CarSettingsPage,
    HomeDetailPage,
    TopicDetailPage,
    AdivceGiftPage,
    TabsPage,
    JoinPage,
    StoreDetailPage,
    CustomerPage,
    CarInfoPage,
    CarBrandPage,
    CarYearPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:'true',
      backButtonText:''
    }),
    IndexListModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LocationPage,
    AddCarPage,
    CarSettingsPage,
    HomeDetailPage,
    TopicDetailPage,
    AdivceGiftPage,
    TabsPage,
    JoinPage,
    StoreDetailPage,
    CustomerPage,
    CarInfoPage,
    CarBrandPage,
    CarYearPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
