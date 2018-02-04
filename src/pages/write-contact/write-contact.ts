import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from "../dashboard/dashboard";
import { RevoService } from "../../providers/revoservices";
import { HomePage } from '../home/home';
/**
 * Generated class for the WriteDailyNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-write-contact',
  templateUrl: 'write-contact.html',
})
export class WriteContactPage {

  response: any;
  overallresponseData: Array<Object>;
  overallData: any;
  ContactBook: any;
  DailyNews: any;
  CompanyID: any;
  CompanyName: any;
  Department: Array<Object>;
  Employees: Array<Object>;
  Logos: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: RevoService) {

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
       /*  if (this.authService.getlogo() != null) {
          this.Logos = this.authService.Logo;
          setTimeout(() => {

            this.Logos = this.authService.Logo;

          }, 1000);
        } */
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
        this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
        console.log("errrorr " + err.status);
      }

    });

    console.log('ionViewDidLoad CoinSentPage');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WriteDailyNewsPage');
  }
    dashboard(){
     this.navCtrl.push(DashboardPage);
  }
}
 