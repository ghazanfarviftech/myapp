import { Component } from '@angular/core';
import { NavController , MenuController } from 'ionic-angular';
import { DashboardPage } from "../dashboard/dashboard";
import { RankingPage } from "../ranking/ranking";
import { CoinsintroductionPage } from "../coinsintroduction/coinsintroduction";
import { CoinSendPage } from "../coin-send/coin-send";
import { CoinTimelinePage } from "../coin-timeline/coin-timeline";
import { DailyNewsReceptBoxPage } from "../daily-news-recept-box/daily-news-recept-box";
import { ContactNotesPage } from "../contact-notes-received/contact-notes";
import { ProfilePage } from "../mypageprofile/profile";


@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html'
})
export class UserProfilePage {

  constructor(public navCtrl: NavController,public menuCtrl:MenuController) {

  }

  coinSend(){
  this.navCtrl.push(CoinSendPage);

  }

timeline()
{
  this.navCtrl.push(CoinTimelinePage);

}
ranking(){
    this.navCtrl.push(RankingPage);
}
coinsintro()
{
  this.navCtrl.push(CoinsintroductionPage);

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

}
