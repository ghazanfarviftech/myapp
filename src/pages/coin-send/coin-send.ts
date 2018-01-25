import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoinSelectPage } from "../coin-select/coin-select";
import { CoinTimelinePage } from "../coin-timeline/coin-timeline";
import { CoinsintroductionPage } from "../coinsintroduction/coinsintroduction";
import { RankingPage } from "../ranking/ranking";
import { UserProfilePage } from "../user-profile/user-profile";
import { DailyNewsReceptBoxPage } from "../daily-news-recept-box/daily-news-recept-box";
import { ContactNotesPage } from "../contact-notes-received/contact-notes";
import { ProfilePage } from "../mypageprofile/profile";
import { MessageMainPage } from "../message-main/message-main";

/**
 * Generated class for the CoinSendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-coin-send',
  templateUrl: 'coin-send.html',
})
export class CoinSendPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoinSendPage');
  }
   coinSelect(){
  	this.navCtrl.push(CoinSelectPage);

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
