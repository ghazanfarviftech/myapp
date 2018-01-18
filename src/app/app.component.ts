import { Component, ViewChild } from '@angular/core';
import { Platform,NavController,MenuController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProfilePage } from "../pages/mypageprofile/profile";
import { CoinSentPage } from "../pages/coin-sent/coin-sent";
import { CoinTimelinePage } from "../pages/coin-timeline/coin-timeline";
import { ManagementPage } from "../pages/management/management";

import {TranslateService, LangChangeEvent} from '@ngx-translate/core';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
@ViewChild('mycontent') nav: NavController
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController,public translate: TranslateService) {

translate.setDefaultLang('de');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('de');
  
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
      {
       // this.textDir = event.lang == 'ar'? 'rtl' : 'ltr';
      });
    });


  }

   profile(){
   this.menuCtrl.close();
    this.nav.push(ProfilePage);
  }

  coinTimeline(){
  this.menuCtrl.close();
    this.nav.push(CoinTimelinePage);
  }

   management(){
   this.menuCtrl.close();
    this.nav.push(ManagementPage);
  }

  
}

