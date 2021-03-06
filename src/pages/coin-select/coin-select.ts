import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from "../dashboard/dashboard";
import { RevoService } from "../../providers/revoservices";
import { HomePage } from '../home/home';
import { Slides } from 'ionic-angular';
import { CoinTimelinePage } from "../coin-timeline/coin-timeline";
/**
 * Generated class for the CoinSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-coin-select',
  templateUrl: 'coin-select.html',
})
export class CoinSelectPage {
  @ViewChild(Slides) slides: Slides;

  comment = '';
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

  EmpImage: any;
  EmpName: any;
  EmpId: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: RevoService) {
    this.authService.checkSession().then((result) => {
      if (result == null) {
        this.authService.presentToast("Not Authorized Kindly Login");
        this.navCtrl.setRoot(HomePage);
      } else {
        this.authService.checkCompanyId();
        this.authService.checkEmployeeId();
        this.alldata = navParams.get('EmployeeData');
        this.EmpName = this.alldata.EmployeeName;
        this.EmpImage = this.alldata.EmployeeImage;
        this.EmpId = this.alldata.EmployeeID;
        // this.navCtrl.setRoot(DashboardPage);
      }
    }, (err) => {
      this.authService.presentToast("Something went wrong");
      this.navCtrl.setRoot(HomePage);
    });
  }

  ionViewDidLoad() {
    this.authService.showLoader("Loading Data");
    this.authService.profile().then((result) => {
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
       // this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
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
    console.log('ionViewDidLoad CoinSelectPage');
  }

      dashboard(){
     this.navCtrl.push(DashboardPage);
  }

  sendCoin(coin, comment)
  {

    if (comment.trim().length == 0 || comment.trim() == '') {
      this.authService.presentToast("Fill the comment or Text Limit Reached");
    }else{
    coin =  this.slides.getActiveIndex();
    let MainCoin: any;
    for (let i = 0; i < this.Coins.length;i++)
    {
      if(i == coin)
      {
        MainCoin = this.Coins[i];
      }

    }
   /*  let MainCoin = this.Coins.indexOf(coin); */
      let coinSendData = { "EmployeeID": this.EmpId, "CoinID": MainCoin.CoinID,"Comments":comment};
    this.authService.showLoader("Sending Coin");
    this.authService.employeeCoinSend(coinSendData).then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {
       
        this.authService.dismissLoading();
        this.authService.presentToast("coin send successfully");
        
        this.navCtrl.setRoot(CoinTimelinePage);
        //this.navCtrl.pop();
      } else {
        this.authService.dismissLoading();
        // this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
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
        
        this.authService.presentToast("Something went wrong");
        this.navCtrl.setRoot(DashboardPage);
        console.log("errrorr " + err.status);
      }
      // this.presentToast(err);
      //this.response = err;

    });
  }
}
  close()
  {
    this.navCtrl.pop();
  }
}
