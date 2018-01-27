import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ToastController } from 'ionic-angular';
import { RankingPage } from "../ranking/ranking";
import { CoinsintroductionPage } from "../coinsintroduction/coinsintroduction";
import { CoinSendPage } from "../coin-send/coin-send";
import { DashboardPage } from "../dashboard/dashboard";
import { UserProfilePage } from "../user-profile/user-profile";
import { DailyNewsReceptBoxPage } from "../daily-news-recept-box/daily-news-recept-box";
import { ContactNotesPage } from "../contact-notes-received/contact-notes";
import { ProfilePage } from "../mypageprofile/profile";
import { MessageMainPage } from "../message-main/message-main";
import { RevoService } from "../../providers/revoservices";
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
  alldata: any;
  response: any;
  overallresponseData: Array<Object>;
  ContactBook: any;
  DailyNews: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public authService: RevoService, public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
    this.alldata = navParams.get('alldata');
  }

  ionViewDidLoad() {

    this.authService.coinemptimelime(this.alldata).then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {
        this.overallresponseData = dataoverall.responseData;

        this.ContactBook = dataoverall.responseData[0].ContactBook;
        this.DailyNews = dataoverall.responseData[0].DailyNews;
        //this.EmployeeNames = dataoverall.responseData[0].EmployeeName;
        // this.ProfileImage = dataoverall.responseData[0].ProfilePicture;
        // this.DepartmentName = dataoverall.responseData[0].DepartmentName;
        // this.Catchpharase = dataoverall.responseData[0].Catchpharase;

      } else {

      }
    }, (err) => {
      // this.loading.dismiss();
      // this.presentToast(err);
      //this.response = err;
      console.log("errrorr " + err);
    });

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
