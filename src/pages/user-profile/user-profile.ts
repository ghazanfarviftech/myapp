import { Component } from '@angular/core';
import { NavController, MenuController, NavParams } from 'ionic-angular';
import { DashboardPage } from "../dashboard/dashboard";
import { RankingPage } from "../ranking/ranking";
import { CoinsintroductionPage } from "../coinsintroduction/coinsintroduction";
import { CoinSendPage } from "../coin-send/coin-send";
import { CoinTimelinePage } from "../coin-timeline/coin-timeline";
import { DailyNewsReceptBoxPage } from "../daily-news-recept-box/daily-news-recept-box";
import { ContactNotesPage } from "../contact-notes-received/contact-notes";
import { ProfilePage } from "../mypageprofile/profile";
import { RevoService } from "../../providers/revoservices";
import { HomePage } from '../home/home';

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html'
})
export class UserProfilePage {

  loginData: any;
  alldata: any;
  response: any;
  EmployeeNames: string;
  ProfileImage: any = "assets/1.jpg";
  DepartmentName: string;
  Catchpharase: string;
  Goal: string;
  CompanyName: string;
  StoreName: string;
  ContactBook: string;
  DailyNews: string;
  Messages: string;
  Igot: string;
  Rigot: string;
  Isent: string;
  RIsentsc: string;
  Igotsc: string;
  Isentsc: string;
  Risent: string;
  Rigotsc: string;
  Coins: Array<Object>;
  SpecialCoins: Array<Object>;
  Logos:any;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public authService: RevoService, public params: NavParams) {
    this.authService.checkSession().then((result) => {
      if (result == null) {
        this.authService.presentToast("Not Authorized Kindly Login");
        this.navCtrl.setRoot(HomePage);
      } else {
        this.authService.checkCompanyId();
        this.authService.checkEmployeeId();
        this.alldata = params.get('EmployeeID');
        this.authService.getlogo();
        setTimeout(() => {

          this.Logos = this.authService.Logo;

        }, 1000);
        /* if (this.authService.getlogo() != null) {
          setTimeout(() => {

            this.Logos = this.authService.Logo;

          }, 1000);
        } */
        // this.navCtrl.setRoot(DashboardPage);
      }
    }, (err) => {
      this.authService.presentToast("Something went wrong");
      this.navCtrl.setRoot(HomePage);
    });
  }


  ionViewWillEnter() {
    this.authService.showLoader("Loading Profile");
    this.authService.otherprofile(this.alldata).then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {
        this.EmployeeNames = dataoverall.responseData[0].EmployeeName;
        this.ProfileImage = dataoverall.responseData[0].ProfilePicture;
        this.DepartmentName = dataoverall.responseData[0].DepartmentName;
        this.Catchpharase = dataoverall.responseData[0].Catchpharase;
        this.Goal = dataoverall.responseData[0].Goal;
        this.CompanyName = dataoverall.responseData[0].CompanyName;
        this.StoreName = dataoverall.responseData[0].StoreName;
        this.ContactBook = dataoverall.responseData[0].ContactBook;
        this.DailyNews = dataoverall.responseData[0].DailyNews;
        this.Messages = dataoverall.responseData[0].Messages;
        this.Igot = dataoverall.responseData[0].Igot;
        this.Rigot = dataoverall.responseData[0].Rigot;
        this.Isent = dataoverall.responseData[0].Isent;
        this.Igotsc = dataoverall.responseData[0].Igotsc;
        this.Isentsc = dataoverall.responseData[0].Isentsc;
        this.Risent = dataoverall.responseData[0].Risent;
        this.Rigotsc = dataoverall.responseData[0].Rigotsc;
        this.RIsentsc = dataoverall.responseData[0].RIsentsc;
        this.Coins = dataoverall.responseData[0].Coins;
        this.SpecialCoins = dataoverall.responseData[0].SpecialCoins;

        this.authService.dismissLoading();
      } else {

        this.authService.dismissLoading();
        if (dataoverall.message == "no employee found.")
        {
          this.authService.presentToast(dataoverall.message);
        }else{
       
     
        this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
        }
      }

    }, (err) => {
      this.authService.dismissLoading();

      var my = JSON.stringify(err);
      if (err.message == "Unrecognized Session.") {
        this.authService.removeSession();
        this.authService.presentToast("Please Login Again");
        this.navCtrl.setRoot(HomePage);
        console.log("errrorr " + err.status);
      } else if (err.statusText == "Unauthorized") {
        this.authService.removeSession();
        this.authService.presentToast("Please Login Again");
        this.navCtrl.setRoot(HomePage);
        console.log("errrorr " + err.status);

      }else {
        this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
        console.log("errrorr " + err.status);
      }
      // this.presentToast(err);
      //this.response = err;

    });
    console.log('ionViewDidLoad ProfilePage');
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
