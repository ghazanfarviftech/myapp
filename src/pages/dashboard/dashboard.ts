import { Component } from '@angular/core';
import { NavController,MenuController,NavParams } from 'ionic-angular';
import { ProfilePage } from "../mypageprofile/profile";
import { ManagementPage } from "../management/management";
import { CoinTimelinePage } from "../coin-timeline/coin-timeline";
import { MessageMainPage } from "../message-main/message-main";
import { DailyNewsReceptBoxPage } from "../daily-news-recept-box/daily-news-recept-box";
import { ContactNotesPage } from "../contact-notes-received/contact-notes";


@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  alldata : any;
  constructor(public navCtrl: NavController,public params: NavParams,public menuCtrl:MenuController) {

    this.alldata = params.get('param1');
  }

  menu(){
    this.menuCtrl.open();
  }
  profile(){
    this.navCtrl.setRoot(ProfilePage,{'alldata':this.alldata});
  }
  management(){
    this.navCtrl.setRoot(ManagementPage);
  }
  coinTimeline(){
    this.navCtrl.setRoot(CoinTimelinePage);
  }
  message(){
    this.navCtrl.setRoot(MessageMainPage);
  }
  dailyNews(){
    this.navCtrl.setRoot(DailyNewsReceptBoxPage);
  }
  contacts(){
    this.navCtrl.setRoot(ContactNotesPage);
  }
}
