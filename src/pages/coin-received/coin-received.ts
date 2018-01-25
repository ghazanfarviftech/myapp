import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController  } from 'ionic-angular';
import { CommentEditPage } from "../comment-edit/comment-edit";
import { ManagementPage } from "../management/management";
import { CoinSentPage } from "../coin-sent/coin-sent";
import { ProfilePage } from "../mypageprofile/profile";

import { DailyNewsReceptBoxPage } from "../daily-news-recept-box/daily-news-recept-box";
import { ContactNotesPage } from "../contact-notes-received/contact-notes";
import { CoinTimelinePage } from "../coin-timeline/coin-timeline";
import { MessageMainPage } from "../message-main/message-main";

/**
 * Generated class for the CoinSentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-coin-received',
  templateUrl: 'coin-received.html',
})
export class CoinReceivedPage {

  personList : Array<Object>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoinSentPage');
    this.personList = [];
    this.personList.push("first");
    this.personList.push("second");
    this.personList.push("second");
    this.personList.push("second");
  }


commentedit()
{
	this.navCtrl.push(CommentEditPage);
}
  menu(){
    this.menuCtrl.open();
  }

  management(){
    this.navCtrl.push(ManagementPage);
  }
  coinsSent(){
    this.navCtrl.push(CoinSentPage);
  }
  coinReceived(){
    this.navCtrl.push(CoinReceivedPage);
  }
    profile(){
    this.navCtrl.push(ProfilePage);
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
