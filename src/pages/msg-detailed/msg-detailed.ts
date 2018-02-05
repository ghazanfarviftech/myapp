import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageMainPage } from "../message-main/message-main";
import { DashboardPage } from "../dashboard/dashboard";
import { MsgWritePage } from "../msg-write/msg-write";
import { RevoService } from '../../providers/revoservices';
import { HomePage } from '../home/home';
/**
 * Generated class for the MsgDetailedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-msg-detailed',
  templateUrl: 'msg-detailed.html',
})
export class MsgDetailedPage {

  Logos:any;
  alldata : any;
  response : any;
  overallresponseData: any;
  Title:any;
  Message:any;
  DepartmentName:any;
  CompanyName:any;
  CompanySlogan:any;
  CompanyLogo:any;
  EmployeeID:any;
  EmployeeName:any;
  ProfilePicture:any;
  DateAdded:any;
  Attachment:Array<any>;
  ImageAttachment:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: RevoService) {
    this.authService.checkSession().then((result) => {
      if (result == null) {
        this.authService.presentToast("Not Authorized Kindly Login");
        this.navCtrl.setRoot(HomePage);
      } else {
        this.authService.checkCompanyId();
        this.authService.checkEmployeeId();
        this.alldata = navParams.get('MessageId');
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
    let date = {"MessageID":this.alldata};
    this.authService.showLoader("Loading Message");
    this.authService.messageDetail(date).then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {


        this.overallresponseData = dataoverall.responseData;
        this.Title = this.overallresponseData.Title;
        this.Message = this.overallresponseData.Message;
        this.DepartmentName = this.overallresponseData.CompanyID;
         this.CompanyName = this.overallresponseData.CompanyName;
         this.CompanySlogan = this.overallresponseData.CompanySlogan;
         this.CompanyLogo =this.overallresponseData.CompanyLogo;
         this.EmployeeID = this.overallresponseData.EmployeeID;
         this.EmployeeName = this.overallresponseData.EmployeeName;
         this.ProfilePicture = this.overallresponseData.ProfilePicture;
         this.DateAdded = this.overallresponseData.DateAdded;
         this.Attachment = this.overallresponseData.Attachment;
         this.ImageAttachment = this.overallresponseData.Attachment[0].Attachment;
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
        this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
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
 
  closeThis(){
  	this.navCtrl.push(MessageMainPage);
  }

   editMsg(){
    this.navCtrl.push(MsgWritePage);
  }
      dashboard(){
     this.navCtrl.push(DashboardPage);
  }

}
