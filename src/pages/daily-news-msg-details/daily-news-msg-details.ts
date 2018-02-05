import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController, NavParams, MenuController } from 'ionic-angular';
import { SeenPeoplePage } from "../seen-people/seen-people";
import { DashboardPage } from "../dashboard/dashboard";
import { HomePage } from '../home/home';
import { AppPreferences } from '@ionic-native/app-preferences';
import { RevoService } from "../../providers/revoservices";
import { CoinSelectPage } from "../coin-select/coin-select";
import { DailyNewsReceptBoxPage } from "../daily-news-recept-box/daily-news-recept-box";
/**
 * Generated class for the DailyNewsMsgDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-daily-news-msg-details',
  templateUrl: 'daily-news-msg-details.html',
})
export class DailyNewsMsgDetailsPage {
  data: Array<{name: string, msg: string, img: string, showDetails: boolean}> = [];


  CommentMessage: any = '';
  alldata: any;
  response: any;
  overallresponseData: any;
  MessageID: any;
  MessageTitle: any;
  MessageDescription: any;
  SenderID: any;
  SenderName: any;
  SenderImage: any;
  HaveAttachment: any;
  Attachments: any;
  Comments: Array<any>;
  IsSaved: any;
  IsSeen: any;
  TotalSeen: any;
  DateAdded: any;
  MessageStatus: any;
  CommentUpdateText: any;
  Logos: any;
  TotalComment: any;
   
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public authService: RevoService, public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {

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
           setTimeout(() => {
 
             this.Logos = this.authService.Logo;
 
           }, 1000);
         } */
        this.alldata = navParams.get('MessageID');
        this.loadingData();
        // this.navCtrl.setRoot(DashboardPage);
      }
    }, (err) => {
      this.authService.presentToast("Something went wrong");
      this.navCtrl.setRoot(HomePage);
    });

    for (let i = 0; i < 3; i++) {
      this.data.push({
        name: 'Title ' + i,
        msg: 'msg goes here',
        img: 'assets/ranking/Pic (6).png',
        showDetails: false
      });
    }

  }



  loadingData() {

    let MessageID = { MessageID: this.alldata };

    this.authService.showLoader("Loading ...");
    this.authService.dailyNewsMessage(MessageID).then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {
        this.overallresponseData = dataoverall.responseData;


        this.MessageID = this.overallresponseData.MessageID;
        this.MessageTitle = this.overallresponseData.MessageTitle;
        this.MessageDescription = this.overallresponseData.MessageDescription;
        this.SenderID = this.overallresponseData.SenderID;
        this.SenderName = this.overallresponseData.SenderName;
        this.SenderImage = this.overallresponseData.SenderImage;
        this.HaveAttachment = this.overallresponseData.HaveAttachment;
        this.Comments = this.overallresponseData.Comments;
        this.IsSaved = this.overallresponseData.IsSaved;
        this.IsSeen = this.overallresponseData.IsSeen;
        this.TotalSeen = this.overallresponseData.TotalSeen;
        this.DateAdded = this.overallresponseData.DateAdded;
        this.MessageStatus = this.overallresponseData.MessageStatus;

        this.TotalComment = this.Comments.length;
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
      }
    });

    console.log('ionViewDidLoad DailyNewsMsgDetailsPage');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyNewsMsgDetailsPage');
  }

  seenPeople() {
    this.navCtrl.push(SeenPeoplePage, { "MessageID": this.MessageID });

  }
  /* seenPeople(){
  	 this.navCtrl.push(SeenPeoplePage);
  
  } */

  sendComment(CommentMessage) {
    if (this.CommentMessage.trim().length == 0 || this.CommentMessage.trim() == '') {
      this.authService.presentToast("Fill the comment or Text Limit Reached");
    } else {
    let CommentData = { "MessageID": this.MessageID, "Comment": CommentMessage };
    this.authService.showLoader("Send Comment ...");
    this.authService.dailyNewsCommentSend(CommentData).then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {
        //this.overallresponseData = dataoverall.message;

        this.authService.presentToast("Comment Send Successfully");
        this.authService.dismissLoading();
        this.loadingData();
        /*    this.MessageID = this.overallresponseData.MessageID;
           this.MessageTitle = this.overallresponseData.MessageTitle;
           this.MessageDescription = this.overallresponseData.MessageDescription;
           this.SenderID = this.overallresponseData.SenderID;
           this.SenderName = this.overallresponseData.SenderName;
           this.SenderImage = this.overallresponseData.SenderImage;
           this.HaveAttachment = this.overallresponseData.HaveAttachment;
           this.Comments = this.overallresponseData.Comments;
           this.IsSaved = this.overallresponseData.IsSaved;
           this.IsSeen = this.overallresponseData.IsSeen;
           this.TotalSeen = this.overallresponseData.TotalSeen;
           this.DateAdded = this.overallresponseData.DateAdded;
           this.MessageStatus = this.overallresponseData.MessageStatus; */

        //this.ContactBook = dataoverall.responseData[0].ContactBook;
        //this.DailyNews = dataoverall.responseData[0].DailyNews;
        //this.EmployeeNames = dataoverall.responseData[0].EmployeeName;
        // this.ProfileImage = dataoverall.responseData[0].ProfilePicture;
        // this.DepartmentName = dataoverall.responseData[0].DepartmentName;
        // this.Catchpharase = dataoverall.responseData[0].Catchpharase;
        
      } else {
        this.authService.dismissLoading();
        if (dataoverall.message == 'provide message ') {
          this.authService.presentToast("Error While Sending Comment");
        } else if (dataoverall.message == 'comment cannot be empty') {
          this.authService.presentToast("Error While Sending Comment");
        } else {

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
      }
    });
  }
  }

  updateComment(CommentUpdateMessage) {

    if (this.CommentUpdateText.trim().length == 0 || this.CommentUpdateText.trim() == '') {
      this.authService.presentToast("Fill the comment or Text Limit Reached");
    } else {
    let CommentData = { "MessageID": this.MessageID, "CommentID": CommentUpdateMessage.CommentID, "Comment": this.CommentUpdateText };
    this.authService.showLoader("Send Comment ...");
    this.authService.dailyNewsCommentUpdate(CommentData).then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {
        //this.overallresponseData = dataoverall.message;
        CommentUpdateMessage.Comment = this.CommentUpdateText;
        this.authService.presentToast("Comment Updated Successfully");
        /*    this.MessageID = this.overallresponseData.MessageID;
           this.MessageTitle = this.overallresponseData.MessageTitle;
           this.MessageDescription = this.overallresponseData.MessageDescription;
           this.SenderID = this.overallresponseData.SenderID;
           this.SenderName = this.overallresponseData.SenderName;
           this.SenderImage = this.overallresponseData.SenderImage;
           this.HaveAttachment = this.overallresponseData.HaveAttachment;
           this.Comments = this.overallresponseData.Comments;
           this.IsSaved = this.overallresponseData.IsSaved;
           this.IsSeen = this.overallresponseData.IsSeen;
           this.TotalSeen = this.overallresponseData.TotalSeen;
           this.DateAdded = this.overallresponseData.DateAdded;
           this.MessageStatus = this.overallresponseData.MessageStatus; */

        //this.ContactBook = dataoverall.responseData[0].ContactBook;
        //this.DailyNews = dataoverall.responseData[0].DailyNews;
        //this.EmployeeNames = dataoverall.responseData[0].EmployeeName;
        // this.ProfileImage = dataoverall.responseData[0].ProfilePicture;
        // this.DepartmentName = dataoverall.responseData[0].DepartmentName;
        // this.Catchpharase = dataoverall.responseData[0].Catchpharase;
        this.authService.dismissLoading();
      } else {
        this.authService.dismissLoading();
        if (dataoverall.message == 'provide message ') {
          this.authService.presentToast("Error While Sending Comment");
        } else if (dataoverall.message == 'comment cannot be empty') {
          this.authService.presentToast("Error While Sending Comment");
        } else {

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
      }
    });
  }
  }




  messageSave() {
    let MessageData = { "MessageID": this.MessageID };
    this.authService.showLoader("Saving Message ...");
    this.authService.dailyNewsMessageSaved(MessageData).then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {

        if (dataoverall.message == "message is remove from saved messages") {
          this.authService.presentToast("Message Removed From Saved List Successfully");
        } else {
        this.authService.presentToast("Message Saved Successfully");
        }
        this.authService.dismissLoading();
      } else {
        this.authService.dismissLoading();


        this.navCtrl.setRoot(DashboardPage);
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
      }
    });
  }
  messageDelete() {
    let MessageData = { "MessageID": this.MessageID };
    this.authService.showLoader("Deleting Message ...");
    this.authService.newDailyMessageDelete(MessageData).then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {

        this.authService.presentToast("Message Deleted Successfully");

        this.authService.dismissLoading();
      } else {
        this.authService.dismissLoading();


        this.navCtrl.setRoot(DashboardPage);
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
      }
    });
  }

  coinSelect() {

    //this.SenderID = this.overallresponseData.SenderID;
   // this.SenderName = this.overallresponseData.SenderName;
   // this.SenderImage = this.overallresponseData.SenderImage;
    let employeeData = {
      "EmployeeID": this.SenderID,
      "EmployeeName": this.SenderName,
      "EmployeeImage": this.SenderImage
    }
   this.navCtrl.push(CoinSelectPage, { EmployeeData: employeeData });

  }

  toggleDetails(data) {
    this.CommentUpdateText = '';
    if (data.showDetails) {
      data.showDetails = false;
      data.icon = 'assets/ranking/Pic (8).png';

    } else {
      data.showDetails = true;
      data.icon = 'assets/ranking/Pic (8).png';
    }
  }

  /* toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'assets/ranking/Pic (8).png';
    } else {
        data.showDetails = true;
        data.icon = 'assets/ranking/Pic (8).png';
    }
  } */
      dashboard(){
     this.navCtrl.push(DashboardPage);
  }

  messageBackToReceived()
  {
    this.navCtrl.setRoot(DailyNewsReceptBoxPage);
  }
}
