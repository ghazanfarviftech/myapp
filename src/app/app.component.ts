import { Component,ViewChild } from '@angular/core';
import { Platform,NavController,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProfilePage } from "../pages/mypageprofile/profile";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { CoinSentPage } from "../pages/coin-sent/coin-sent";
import { ManagementPage } from "../pages/management/management";
import { CoinTimelinePage } from "../pages/coin-timeline/coin-timeline";
import { DailyNewsReceptBoxPage } from "../pages/daily-news-recept-box/daily-news-recept-box";
import { ContactNotesPage } from "../pages/contact-notes-received/contact-notes";

import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization';
import { RevoService } from "../providers/revoservices";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
@ViewChild('mycontent') nav: NavController
  rootPage:any = HomePage;
  sessionData: any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController,
     public translate: TranslateService, public globe: Globalization, public authService: RevoService) {


    /* this.authService.checkSession().then((result) => {
      this.rootPage = DashboardPage;
    }, (err) => {
      this.rootPage = HomePage;
    }); */
      /*
    this.sessionData = this.authService.checkSession();
    if (this.sessionData != null) {
      this.rootPage = DashboardPage;
    } else {
      //this.authService.presentToast("Not Authorized Kindly Login");
      this.rootPage = HomePage;
    }
    */

 translate.setDefaultLang('en');


if ((<any>window).cordova) {
          this.globe.getPreferredLanguage().then(result => {
            var language = this.getSuitableLanguage(result.value);
            translate.use(language);
           console.log("wow code working"+language);
            //sysOptions.systemLanguage = language;
          });
        } else {
          let browserLanguage = translate.getBrowserLang();
          var language = this.getSuitableLanguage(browserLanguage);
          translate.use(browserLanguage);
          console.log("browser"+language);
          //sysOptions.systemLanguage = language;
        }





   //  // the lang to use, if the lang isn't available, it will use the current loader to get them
   // translate.use('jp');


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

profile(){
   this.menuCtrl.close();
    this.nav.setRoot(ProfilePage);
  }

  coinTimeline(){
  this.menuCtrl.close();
    this.nav.setRoot(CoinTimelinePage);
  }

   management(){
   this.menuCtrl.close();
    this.nav.setRoot(ManagementPage);
  }

dailyNews(){
this.menuCtrl.close();
    this.nav.setRoot(DailyNewsReceptBoxPage);
  }
  contacts(){
  this.menuCtrl.close();
    this.nav.setRoot(ContactNotesPage);
  }

  logout() {
    this.authService.removeSession();
    this.menuCtrl.close();
    this.nav.setRoot(HomePage);
  }

  

  getSuitableLanguage(language) {
    language = language.substring(0, 2).toLowerCase();
    return language;//availableLanguages.some(x => x.code == language) ? language : defaultLanguage;
  }

}

