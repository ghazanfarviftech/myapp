import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MsgDetailedPage } from "../msg-detailed/msg-detailed";
import { MsgWritePage } from "../msg-write/msg-write";
import { DashboardPage } from "../dashboard/dashboard";
import { RevoService } from "../../providers/revoservices";
import { HomePage } from '../home/home';
import moment from 'moment';
/**
 * Generated class for the MessageMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-message-main',
  templateUrl: 'message-main.html',
})
export class MessageMainPage {
  Logos: any;
  myDate: any;
  alldata : any;
  response : any;
  overallresponseData : Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: RevoService) {
    ///var currentDate = new Date();
    //let data = moment().format('YYYYMMDD');
    this.myDate = moment().format('YYYY-MM-DD');//currentDate.getFullYear()+"-"+currentDate.getMonth()+"-"+currentDate.getDate();
   // this.myDate
   
    this.authService.checkSession().then((result) => {
      if (result == null) {
        this.authService.presentToast("Not Authorized Kindly Login");
        this.navCtrl.setRoot(HomePage);
      } else {
        this.authService.checkCompanyId();
        this.authService.checkEmployeeId();
        this.alldata = navParams.get('param1');
        this.authService.getlogo();
        setTimeout(() => {

          this.Logos = this.authService.Logo;

        }, 1000);
       /*  if(this.authService.getlogo() != null)
        {
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
    //let date = {"Date":this.myDate};
    this.authService.showLoader("Loading Data");
    this.authService.messageDefault().then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {


        this.overallresponseData = dataoverall.responseData;
        // this.EmployeeNames = dataoverall.responseData[0].EmployeeName;
        // this.ProfileImage = dataoverall.responseData[0].ProfilePicture;
        // this.DepartmentName = dataoverall.responseData[0].DepartmentName;
        // this.Catchpharase = dataoverall.responseData[0].Catchpharase;
        // this.Goal = dataoverall.responseData[0].Goal;
        // this.CompanyName = dataoverall.responseData[0].CompanyName;
        // this.StoreName = dataoverall.responseData[0].StoreName;
        // this.ContactBook = dataoverall.responseData[0].ContactBook;
        // this.DailyNews = dataoverall.responseData[0].DailyNews;
        // this.Igot = dataoverall.responseData[0].Igot;
        // this.Rigot = dataoverall.responseData[0].Rigot;
        // this.Isent = dataoverall.responseData[0].Isent;
        // this.Igotsc = dataoverall.responseData[0].Igotsc;
        // this.Isentsc = dataoverall.responseData[0].Isentsc;
        // this.Risent = dataoverall.responseData[0].Risent;
        // this.Rigotsc = dataoverall.responseData[0].Rigotsc;
        // this.RIsentsc = dataoverall.responseData[0].RIsentsc;
        // this.Coins = dataoverall.responseData[0].Coins;
        // this.SpecialCoins = dataoverall.responseData[0].SpecialCoins;
        
        this.authService.dismissLoading();
        
      } else {
        this.authService.dismissLoading();
        //this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast(dataoverall.message);
      }
     
    }, (err) => {
      this.authService.dismissLoading();

      var my = JSON.stringify(err);
      if (err.message =="Unrecognized Session.")
      {
        this.authService.removeSession();
      this.authService.presentToast("Please Login Again");
        this.navCtrl.setRoot(HomePage);
        console.log("errrorr " + err.status);
      } else if (err.statusText == "Unauthorized") {
        this.authService.removeSession();
        this.authService.presentToast("Please Login Again");
        this.navCtrl.setRoot(HomePage);
        console.log("errrorr " + err.status);

      }else
      {
        this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
        console.log("errrorr " + err.status);
      }
      // this.presentToast(err);
      //this.response = err;
      
    });
    console.log('ionViewDidLoad MessageMainPage');
  }

  updateonDate()
  {
    let date = {"Date":this.myDate};

    this.authService.showLoader("Loading Data");
    this.authService.messageByDay(date).then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {


        this.overallresponseData = dataoverall.responseData;
        // this.EmployeeNames = dataoverall.responseData[0].EmployeeName;
        // this.ProfileImage = dataoverall.responseData[0].ProfilePicture;
        // this.DepartmentName = dataoverall.responseData[0].DepartmentName;
        // this.Catchpharase = dataoverall.responseData[0].Catchpharase;
        // this.Goal = dataoverall.responseData[0].Goal;
        // this.CompanyName = dataoverall.responseData[0].CompanyName;
        // this.StoreName = dataoverall.responseData[0].StoreName;
        // this.ContactBook = dataoverall.responseData[0].ContactBook;
        // this.DailyNews = dataoverall.responseData[0].DailyNews;
        // this.Igot = dataoverall.responseData[0].Igot;
        // this.Rigot = dataoverall.responseData[0].Rigot;
        // this.Isent = dataoverall.responseData[0].Isent;
        // this.Igotsc = dataoverall.responseData[0].Igotsc;
        // this.Isentsc = dataoverall.responseData[0].Isentsc;
        // this.Risent = dataoverall.responseData[0].Risent;
        // this.Rigotsc = dataoverall.responseData[0].Rigotsc;
        // this.RIsentsc = dataoverall.responseData[0].RIsentsc;
        // this.Coins = dataoverall.responseData[0].Coins;
        // this.SpecialCoins = dataoverall.responseData[0].SpecialCoins;
        
        this.authService.dismissLoading();
        
      } else {
        this.authService.dismissLoading();
        //this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast(dataoverall.message);
      }
     
    }, (err) => {
      this.authService.dismissLoading();

      var my = JSON.stringify(err);
      if (err.message =="Unrecognized Session.")
      {
        this.authService.removeSession();
      this.authService.presentToast("Please Login Again");
        this.navCtrl.setRoot(HomePage);
        console.log("errrorr " + err.status);
      } else if (err.statusText == "Unauthorized") {
        this.authService.removeSession();
        this.authService.presentToast("Please Login Again");
        this.navCtrl.setRoot(HomePage);
        console.log("errrorr " + err.status);

      }else
      {
        this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
        console.log("errrorr " + err.status);
      }
      // this.presentToast(err);
      //this.response = err;
      
    });
  }
    msgDetail(item){
    this.navCtrl.push(MsgDetailedPage,{"MessageId":item.MessageID});
  }
  editMsg(){
    this.navCtrl.push(MsgWritePage);
  }
      dashboard(){
     this.navCtrl.push(DashboardPage);
  }
}
