import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactMsgDetailsPage } from "../contact-msg-details/contact-msg-details";
import { RevoService } from "../../providers/revoservices";
import { HomePage } from '../home/home';
import { DashboardPage } from "../dashboard/dashboard";
/**
 * Generated class for the SeenPeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-seen-people-msg',
  templateUrl: 'seen-people-msg.html',
})
export class SeenPeopleMsgPage {

  alldata: any;
  response: any;
  total_rows: any;
  Cuurentpage = 1;
  TotalNumber: any;
  PerPage: any = 10;
  MaxPage: any;
  overallresponseData: Array<Object>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: RevoService) {+
    this.authService.checkSession().then((result) => {
      if (result == null) {
        this.authService.presentToast("Not Authorized Kindly Login");
        this.navCtrl.setRoot(HomePage);
      } else {
        this.authService.checkCompanyId();
        this.authService.checkEmployeeId();
        this.alldata = navParams.get('MessageID');
        // this.navCtrl.setRoot(DashboardPage);
      }
    }, (err) => {
      this.authService.presentToast("Something went wrong");
      this.navCtrl.setRoot(HomePage);
    });
  }

  ionViewWillEnter() {
    
    let MessageID = { MessageID: this.alldata };

    this.authService.showLoader("Loading ...");
    this.authService.contactBookMessageSeenList(MessageID,this.Cuurentpage, this.PerPage).then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {
       this.overallresponseData = dataoverall.responseData;

      
        // this.MessageID = this.overallresponseData.MessageID;
        // this.MessageTitle = this.overallresponseData.MessageTitle;
        // this.MessageDescription = this.overallresponseData.MessageDescription;
        // this.SenderID = this.overallresponseData.SenderID;
        // this.SenderName = this.overallresponseData.SenderName;
        // this.SenderImage = this.overallresponseData.SenderImage;
        // this.HaveAttachment = this.overallresponseData.HaveAttachment;
        // this.Comments = this.overallresponseData.Comments;
        // this.IsSaved = this.overallresponseData.IsSaved;
        // this.IsSeen = this.overallresponseData.IsSeen;
        // this.TotalSeen = this.overallresponseData.TotalSeen;
        // this.DateAdded = this.overallresponseData.DateAdded;
        // this.MessageStatus = this.overallresponseData.MessageStatus;

        //this.ContactBook = dataoverall.responseData[0].ContactBook;
        //this.DailyNews = dataoverall.responseData[0].DailyNews;
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

        this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
      }
    });
    console.log('ionViewDidLoad SeenPeoplePage');
    
  }

  doInfinite(infiniteScroll) {
    this.Cuurentpage = this.Cuurentpage + 1;
    let MessageID = { MessageID: this.alldata };
    setTimeout(() => {
      this.authService.contactBookMessageSeenList(MessageID,this.Cuurentpage, this.PerPage)
        .then((result) => {
          this.response = result;

          var my = JSON.stringify(this.response);
          console.log("response :" + my);
          var dataoverall = JSON.parse(my);
          if (dataoverall.success) {
           this.overallresponseData = dataoverall.responseData;
    
          
            // this.MessageID = this.overallresponseData.MessageID;
            // this.MessageTitle = this.overallresponseData.MessageTitle;
            // this.MessageDescription = this.overallresponseData.MessageDescription;
            // this.SenderID = this.overallresponseData.SenderID;
            // this.SenderName = this.overallresponseData.SenderName;
            // this.SenderImage = this.overallresponseData.SenderImage;
            // this.HaveAttachment = this.overallresponseData.HaveAttachment;
            // this.Comments = this.overallresponseData.Comments;
            // this.IsSaved = this.overallresponseData.IsSaved;
            // this.IsSeen = this.overallresponseData.IsSeen;
            // this.TotalSeen = this.overallresponseData.TotalSeen;
            // this.DateAdded = this.overallresponseData.DateAdded;
            // this.MessageStatus = this.overallresponseData.MessageStatus;
    
            //this.ContactBook = dataoverall.responseData[0].ContactBook;
            //this.DailyNews = dataoverall.responseData[0].DailyNews;
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
        },
        (err) => {
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

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 2000);
  }

      close(){
     this.navCtrl.push(ContactMsgDetailsPage, {"MessageID":this.alldata});
  }
}
