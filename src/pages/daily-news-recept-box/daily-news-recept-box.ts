import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController, NavParams, MenuController } from 'ionic-angular';
import { DailyNewsMsgDetailsPage } from "../daily-news-msg-details/daily-news-msg-details";
import { WriteDailyNewsPage } from "../write-daily-news/write-daily-news";
import { DashboardPage } from "../dashboard/dashboard";

import { ProfilePage } from "../mypageprofile/profile";
import { ContactNotesPage } from "../contact-notes-received/contact-notes";
import { CoinTimelinePage } from "../coin-timeline/coin-timeline";
import { MessageMainPage } from "../message-main/message-main";

import { AppPreferences } from '@ionic-native/app-preferences';
import { RevoService } from "../../providers/revoservices";



/**
 * Generated class for the DailyNewsReceptBoxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-daily-news-recept-box',
  templateUrl: 'daily-news-recept-box.html',
})
export class DailyNewsReceptBoxPage {

  personList: Array<Object>;
  alldata: any;
  response: any;
  overallresponseData: Array<Object>;
  ContactBook: any;
  DailyNews: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public authService: RevoService, public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
    this.alldata = navParams.get('alldata');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyNewsReceptBoxPage');
  }
    dashboard(){
     this.navCtrl.push(DashboardPage);
  }
  detailed(){
  	 this.navCtrl.push(DailyNewsMsgDetailsPage);
  }
  write(){
   
  this.navCtrl.push(WriteDailyNewsPage);
  }


dailyNews(){
    this.navCtrl.push(DailyNewsReceptBoxPage);
  }

   contacts(){
    this.navCtrl.push(ContactNotesPage);
  }

 myProfile(){
    this.navCtrl.push(ProfilePage);
  }

  timeline()
  {
  this.navCtrl.push(CoinTimelinePage);
  }
message(){
    this.navCtrl.push(MessageMainPage);
  }

}
