import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DailyNewsMsgDetailsPage } from "../daily-news-msg-details/daily-news-msg-details";

/**
 * Generated class for the SeenPeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-seen-people',
  templateUrl: 'seen-people.html',
})
export class SeenPeoplePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeenPeoplePage');
  }

    close(){
     this.navCtrl.push(DailyNewsMsgDetailsPage);
  }

}
