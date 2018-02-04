import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CoinTimelinePage } from "../coin-timeline/coin-timeline";
import { CoinsintroductionPage } from "../coinsintroduction/coinsintroduction";
import { CoinSendPage } from "../coin-send/coin-send";
import { UserProfilePage } from "../user-profile/user-profile";
import { DailyNewsReceptBoxPage } from "../daily-news-recept-box/daily-news-recept-box";
import { ContactNotesPage } from "../contact-notes-received/contact-notes";
import { ProfilePage } from "../mypageprofile/profile";
import { MessageMainPage } from "../message-main/message-main";
import { DashboardPage } from "../dashboard/dashboard";
import { RevoService } from '../../providers/revoservices';

/**
 * Generated class for the RankingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

	data: Array<{title: string, details: string, icon: string, showDetails: boolean}> = [];

Logos:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: RevoService) {
    this.authService.getlogo();
    setTimeout(() => {

      this.Logos = this.authService.Logo;

    }, 1000);
    /*  if (this.authService.getlogo() != null) {
      setTimeout(() => {

        this.Logos = this.authService.Logo;

      }, 1000);
    } */

  for(let i = 0; i < 10; i++ ){
      this.data.push({
          title: 'Title '+i,
          details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          icon: 'assets/ranking/Pic (8).png',
          showDetails: false
        });
    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
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
      dashboard(){
     this.navCtrl.push(DashboardPage);
  }
}
