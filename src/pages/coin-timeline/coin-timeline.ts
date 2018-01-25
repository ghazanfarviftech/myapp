import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { RankingPage } from "../ranking/ranking";
import { CoinsintroductionPage } from "../coinsintroduction/coinsintroduction";
import { CoinSendPage } from "../coin-send/coin-send";
import { DashboardPage } from "../dashboard/dashboard";
import { UserProfilePage } from "../user-profile/user-profile";
import { DailyNewsReceptBoxPage } from "../daily-news-recept-box/daily-news-recept-box";
import { ContactNotesPage } from "../contact-notes-received/contact-notes";
import { ProfilePage } from "../mypageprofile/profile";
import { MessageMainPage } from "../message-main/message-main";

/**
 * Generated class for the CoinTimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-coin-timeline',
  templateUrl: 'coin-timeline.html',
})
export class CoinTimelinePage {

  coinList : Array<Object>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoinSentPage');
    this.coinList = [];
    this.coinList.push("first");
    this.coinList.push("second");
    this.coinList.push("second");
    this.coinList.push("second");
  }
  dashboard(){
    this.navCtrl.push(DashboardPage);
  }
timeline(){
this.navCtrl.push(CoinTimelinePage);
}
 ranking()

{
  this.navCtrl.push(RankingPage);

}
coinsintro()
{
  this.navCtrl.push(CoinsintroductionPage);

}
coinSend()
{
  this.navCtrl.push(CoinSendPage);

}
userProfile()
{
  this.navCtrl.push(UserProfilePage);

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
message(){
    this.navCtrl.push(MessageMainPage);
  }
  

}
