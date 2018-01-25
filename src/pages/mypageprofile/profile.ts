import { Component } from '@angular/core';
import { NavController , MenuController, LoadingController, ToastController,NavParams } from 'ionic-angular';
import { DashboardPage } from "../dashboard/dashboard";
import { CoinSentPage } from "../coin-sent/coin-sent";
import { CoinReceivedPage } from "../coin-received/coin-received";
import { ManagementPage } from "../management/management";
import { ProfileSettingsPage } from "../profile-settings/profile-settings";

import { DailyNewsReceptBoxPage } from "../daily-news-recept-box/daily-news-recept-box";
import { ContactNotesPage } from "../contact-notes-received/contact-notes";
import { CoinTimelinePage } from "../coin-timeline/coin-timeline";
import { MessageMainPage } from "../message-main/message-main";
import { AppPreferences } from '@ionic-native/app-preferences';
import { RevoService } from "../../providers/revoservices";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  loginData:  any;
  alldata : any;
  constructor(public navCtrl: NavController,public menuCtrl:MenuController 
    ,public authService: RevoService, public loadingCtrl: LoadingController,
     private toastCtrl: ToastController,private appPreferences: AppPreferences,public params: NavParams) {
      this.alldata = params.get('alldata');
  }

  ionViewDidLoad() {

    this.authService.profile(this.alldata).then((result) => {

      console.log("response " + result);
    }, (err) => {
      // this.loading.dismiss();
      // this.presentToast(err);
      //this.response = err;
      console.log("errrorr " + err);
    });
    console.log('ionViewDidLoad ProfilePage');
  }

screenOpen(name:string){
   this.navCtrl.push(name);

}
profile(){
   //this.navCtrl.push(ProfilePage);

}
coinsSent(){
    this.navCtrl.push(CoinSentPage);
  }
coinsReceived(){
    this.navCtrl.push(CoinReceivedPage);
  }


  menu(){
    this.menuCtrl.open();
  }

  management(){
    this.navCtrl.push(ManagementPage);
  }
  profileSettings(){
     this.navCtrl.push(ProfileSettingsPage);
  }
  dashboard(){
     this.navCtrl.push(DashboardPage);
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
