import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController, NavParams, MenuController } from 'ionic-angular';
import { SeenPeoplePage } from "../seen-people/seen-people";
import { DashboardPage } from "../dashboard/dashboard";

import { AppPreferences } from '@ionic-native/app-preferences';
import { RevoService } from "../../providers/revoservices";

/**
 * Generated class for the DailyNewsMsgDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-daily-news-msg-details',
  templateUrl: 'daily-news-msg-details.html',
})
export class DailyNewsMsgDetailsPage {
  data: Array<{name: string, msg: string, img: string, showDetails: boolean}> = [];


  personList: Array<Object>;
  alldata: any;
  response: any;
  overallresponseData: Array<Object>;
  ContactBook: any;
  DailyNews: any;
  Logos:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public authService: RevoService, public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
    if (this.authService.getlogo() != null) {
      this.Logos = this.authService.Logo;
    }
    this.alldata = navParams.get('alldata');
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyNewsMsgDetailsPage');
  }
  seenPeople(){
  	 this.navCtrl.push(SeenPeoplePage);
  
  }

  toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'assets/ranking/Pic (8).png';
    } else {
        data.showDetails = true;
        data.icon = 'assets/ranking/Pic (8).png';
    }
  }
      dashboard(){
     this.navCtrl.push(DashboardPage);
  }

}
