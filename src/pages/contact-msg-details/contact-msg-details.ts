import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeenPeopleMsgPage } from "../seen-people-msg/seen-people-msg";
import { DashboardPage } from "../dashboard/dashboard";

/**
 * Generated class for the DailyNewsMsgDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact-msg-details',
  templateUrl: 'contact-msg-details.html',
})
export class ContactMsgDetailsPage {
  data: Array<{name: string, msg: string, img: string, showDetails: boolean}> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      for(let i = 0; i < 3; i++ ){
      this.data.push({
          name: 'Title '+i,
          msg: 'msg goes here',
          img: 'assets/ranking/Pic (6).png',
          showDetails: false
        });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyNewsMsgDetailsPage');
  }
  seenPeople(){
  	 this.navCtrl.push(SeenPeopleMsgPage);
  
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
