import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CoinTimelinePage } from "../coin-timeline/coin-timeline";
import { RankingPage } from "../ranking/ranking";
import { CoinSendPage } from "../coin-send/coin-send";
import { DailyNewsReceptBoxPage } from "../daily-news-recept-box/daily-news-recept-box";
import { ContactNotesPage } from "../contact-notes-received/contact-notes";
import { ProfilePage } from "../mypageprofile/profile";
import { MessageMainPage } from "../message-main/message-main";
import { RevoService } from "../../providers/revoservices";
import { HomePage } from '../home/home';
import { DashboardPage } from "../dashboard/dashboard";

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

  personList: Array<Object>;
  alldata: any;
  response: any;
  CoinofMonthName: string;
  CoinofMonthCoinImage: string;
  CoinofMonthDescription: string;
  ContactBook: any;
  DailyNews: any;
  coins: Array<Object>;
  SpecialCoins: Array<Object>;
  CoinDetailName : string;
  CoinDetailDescription: string;
  CoinDetailCoinImage: string;
  Logos:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public authService: RevoService) {
    this.authService.checkSession().then((result) => {
      if (result == null) {
        this.authService.presentToast("Not Authorized Kindly Login");
        this.navCtrl.setRoot(HomePage);
      } else {
        this.authService.checkCompanyId();
        this.authService.checkEmployeeId();
        this.authService.getlogo();
        setTimeout(() => {

          this.Logos = this.authService.Logo;

        }, 1000);
        /* if (this.authService.getlogo() != null) {
          setTimeout(() => {

            this.Logos = this.authService.Logo;

          }, 1000);
        } */
        this.alldata = navParams.get('param1');
        // this.navCtrl.setRoot(DashboardPage);
      }
    }, (err) => {
      this.authService.presentToast("Something went wrong");
      this.navCtrl.setRoot(HomePage);
    });
  
  }
  presentAlert(coinID) {

    if(coinID == '')
    {
      this.authService.presentToast("Please try again");
    }else{
    this.authService.showLoader("Loading ...");
    let coinData = {
      "CoinID": coinID
    };
    this.authService.coinsdetails(coinData).then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {
        this.CoinDetailName = dataoverall.responseData[0].Name;
        this.CoinDetailDescription = dataoverall.responseData[0].Description;
        this.CoinDetailCoinImage = dataoverall.responseData[0].CoinImage;
        
        
        this.authService.dismissLoading();

        let alert = this.alertCtrl.create({
          title: this.CoinDetailName,
          subTitle: '<img src="assets/Pic (1).png" width"50px" height="50px" /> <br/>',
          message: this.CoinDetailDescription,
          buttons: ['OK']
        });
        alert.present();
      } else {
        this.authService.dismissLoading();
        this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
      }

    }, (err) => {
      this.authService.dismissLoading();
      var my = JSON.stringify(err);
      if (err.error.message == "Unrecognized Session.") {
        this.authService.removeSession();
        this.authService.presentToast("Please Login Again");
        this.navCtrl.setRoot(HomePage);
        console.log("errrorr " + err.status);
      } else {
        this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
      }
    });


	  
  }
  
}

  ionViewWillEnter() {

    this.authService.showLoader("Loading ...");
    this.authService.coinintroduction().then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {
      
        this.coins = dataoverall.responseData.coins;
       this.SpecialCoins = dataoverall.responseData.defualt.IsSpecial;
        this.CoinofMonthName = dataoverall.responseData.defualt.CoinofMonth.Name;
        this.CoinofMonthCoinImage = dataoverall.responseData.defualt.CoinofMonth.CoinImage;
        this.CoinofMonthDescription = dataoverall.responseData.defualt.CoinofMonth.Description;
        this.ContactBook = dataoverall.responseData.defualt.ContactBook;
        this.DailyNews = dataoverall.responseData.defualt.DailyNews;
        //this.EmployeeNames = dataoverall.responseData[0].EmployeeName;
        // this.ProfileImage = dataoverall.responseData[0].ProfilePicture;
        // this.DepartmentName = dataoverall.responseData[0].DepartmentName;
        // this.Catchpharase = dataoverall.responseData[0].Catchpharase;
        this.authService.dismissLoading();
      } else {
        this.authService.dismissLoading();
        this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
      }
     
    }, (err) => {
      this.authService.dismissLoading();
      var my = JSON.stringify(err);
      if (err.error.message == "Unrecognized Session.") {
        this.authService.removeSession();
        this.authService.presentToast("Please Login Again");
        this.navCtrl.setRoot(HomePage);
        console.log("errrorr " + err.status);
      } else {
        this.authService.dismissLoading();
        this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
      }
    });

    console.log('ionViewDidLoad CoinSentPage');
   
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
  dashboard(){
    this.navCtrl.push(DashboardPage);
  }
}
