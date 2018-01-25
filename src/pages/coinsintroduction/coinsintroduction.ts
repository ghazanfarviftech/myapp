import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CoinTimelinePage } from "../coin-timeline/coin-timeline";
import { RankingPage } from "../ranking/ranking";
import { CoinSendPage } from "../coin-send/coin-send";
import { DailyNewsReceptBoxPage } from "../daily-news-recept-box/daily-news-recept-box";
import { ContactNotesPage } from "../contact-notes-received/contact-notes";
import { ProfilePage } from "../mypageprofile/profile";
import { MessageMainPage } from "../message-main/message-main";

/**
 * Generated class for the CoinsintroductionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-coinsintroduction',
  templateUrl: 'coinsintroduction.html',
})
export class CoinsintroductionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }
  presentAlert() {
	  let alert = this.alertCtrl.create({
	    title: 'Coin Details',
	    subTitle: '<img src="assets/Pic (1).png" width"50px" height="50px" /> <br/>Some text here Some text here Some text here',
	    buttons: ['OK']
	  });
	  alert.present();
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoinsintroductionPage');
  }

message(){
    this.navCtrl.push(MessageMainPage);
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
