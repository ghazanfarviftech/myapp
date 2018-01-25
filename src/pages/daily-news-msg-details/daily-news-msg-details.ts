import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeenPeoplePage } from "../seen-people/seen-people";

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

}
