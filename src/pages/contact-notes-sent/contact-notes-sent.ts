import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DailyNewsMsgDetailsPage } from "../daily-news-msg-details/daily-news-msg-details";
import { WriteDailyNewsPage } from "../write-daily-news/write-daily-news";
import { DashboardPage } from "../dashboard/dashboard";
import { ContactNotesSavedPage } from "../contact-notes-saved/contact-notes-saved";
import { ContactNotesPage } from "../contact-notes-received/contact-notes";

import { DailyNewsReceptBoxPage } from "../daily-news-recept-box/daily-news-recept-box";
import { CoinTimelinePage } from "../coin-timeline/coin-timeline";
import { ProfilePage } from "../mypageprofile/profile";
import { MessageMainPage } from "../message-main/message-main";
/**
 * Generated class for the DailyNewsReceptBoxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-contact-notes-sent',
  templateUrl: 'contact-notes-sent.html',
})
export class ContactNotesSentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    contactReceived(){
    this.navCtrl.push(ContactNotesPage);
  }
  contactSaved(){
   
  this.navCtrl.push(ContactNotesSavedPage);
  }
  contactSent(){
   
  this.navCtrl.push(ContactNotesSentPage);
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
