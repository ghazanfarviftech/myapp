import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactMsgDetailsPage } from "../contact-msg-details/contact-msg-details";
import { WriteContactPage } from "../write-contact/write-contact";
import { DashboardPage } from "../dashboard/dashboard";
import { ContactNotesSavedPage } from "../contact-notes-saved/contact-notes-saved";
import { ContactNotesSentPage } from "../contact-notes-sent/contact-notes-sent";

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
  selector: 'page-contact-notes',
  templateUrl: 'contact-notes.html',
})
export class ContactNotesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyNewsReceptBoxPage');
  }
    dashboard(){
     this.navCtrl.push(DashboardPage);
  }
  detailed(){
  	 this.navCtrl.push(ContactMsgDetailsPage);
  }
  write(){
   
  this.navCtrl.push(WriteContactPage);
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
