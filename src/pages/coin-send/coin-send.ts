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
import { RevoService } from "../../providers/revoservices";
import { HomePage } from '../home/home';
import { DashboardPage } from "../dashboard/dashboard";
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

  response: any;
  overallresponseData: Array<Object>;
  overallData: any;
  ContactBook: any;
  DailyNews: any;
  CompanyID: any;
  CompanyName: any;
  Department: Array<Object>;
  Employees: Array<Object>;
Logos:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: RevoService) {

    this.authService.checkSession().then((result) => {
      if (result == null) {
        this.authService.presentToast("Not Authorized Kindly Login");
        this.navCtrl.setRoot(HomePage);
      } else {
        this.authService.checkCompanyId();
        this.authService.checkEmployeeId();
        if (this.authService.getlogo() != null) {
          this.Logos = this.authService.Logo;
        }
        //this.alldata = navParams.get('param1');
        // this.navCtrl.setRoot(DashboardPage);
      }
    }, (err) => {
      this.authService.presentToast("Something went wrong");
      this.navCtrl.setRoot(HomePage);
    });

  }

  ionViewWillEnter() {
    this.authService.showLoader("Loading ...");
    this.authService.coinsendsearch().then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {
        this.overallresponseData = dataoverall.responseData;
        this.overallData = this.overallresponseData[0];
        this.CompanyID = this.overallData.CompanyID;
        this.CompanyName = this.overallData.CompanyName;
        
        this.Department = this.overallData.Department;
        this.Employees = this.overallData.Employees;
        
        this.authService.loading.dismiss();
      } else {
        this.authService.loading.dismiss();
        this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
      }

    }, (err) => {
      this.authService.loading.dismiss();
      var my = JSON.stringify(err);
      if (err.error.message == "Unrecognized Session.") {
        this.authService.removeSession();
        this.authService.presentToast("Please Login Again");
        this.navCtrl.setRoot(HomePage);
        console.log("errrorr " + err.status);
      } else {
        this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
        console.log("errrorr " + err.status);
      }

    });

    console.log('ionViewDidLoad CoinSentPage');

  }
   coinSelect(employeeData){
     this.navCtrl.push(CoinSelectPage, { EmployeeData: employeeData});

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

  getItems(ev: any) {
    // Reset items back to all of the items
   // this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    /*
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    */
  }
 dashboard(){
     this.navCtrl.push(DashboardPage);
  }
}
