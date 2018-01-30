import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeenPeopleMsgPage } from "../seen-people-msg/seen-people-msg";
import { DashboardPage } from "../dashboard/dashboard";
import { RevoService } from "../../providers/revoservices";
import { HomePage } from '../home/home';

/**
 * Generated class for the DailyNewsMsgDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact-msg-details',
  templateUrl: 'contact-msg-details.html',
})
export class ContactMsgDetailsPage {
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
 /* "MessageID": 82,
        "MessageTitle": "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus se",
        "MessageDescription": "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
        "SenderID": 31,
        "SenderName": "Susannah Bazell",
        "SenderImage": "http://chainayena.net/revo/public/uploads/no_image.png",
        "HaveAttachment": true,
        "Attachments": [],
        "Comments": [],
        "IsSaved": false,
        "IsSeen": true,
        "TotalSeen": 1,
        "DateAdded": "2017/03/11 00:00",
        "MessageStatus": 1 */
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: RevoService) {

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

      for(let i = 0; i < 3; i++ ){
      this.data.push({
          name: 'Title '+i,
          msg: 'msg goes here',
          img: 'assets/ranking/Pic (6).png',
          showDetails: false
        });
    }
  }

  ionViewWillEnter() {
    
    let MessageID = { MessageID: this.alldata };

    this.authService.showLoader("Loading ...");
    this.authService.contactBookMessage(MessageID).then((result) => {
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

        //this.ContactBook = dataoverall.responseData[0].ContactBook;
        //this.DailyNews = dataoverall.responseData[0].DailyNews;
        //this.EmployeeNames = dataoverall.responseData[0].EmployeeName;
        // this.ProfileImage = dataoverall.responseData[0].ProfilePicture;
        // this.DepartmentName = dataoverall.responseData[0].DepartmentName;
        // this.Catchpharase = dataoverall.responseData[0].Catchpharase;
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
      }
    });

    console.log('ionViewDidLoad DailyNewsMsgDetailsPage');
  }

  sendComment(CommentMessage)
  {
    let CommentData = { "MessageID": this.MessageID, "Comment": CommentMessage };
    this.authService.showLoader("Send Comment ...");
    this.authService.contactBookCommentSend(CommentData).then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {
        //this.overallresponseData = dataoverall.message;

        this.authService.presentToast("Comment Send Successfully");
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
        this.authService.loading.dismiss();
      } else {
        this.authService.loading.dismiss();
        if (dataoverall.message == 'provide message ')
        {
          this.authService.presentToast("Error While Sending Comment");
        } else if (dataoverall.message == 'comment cannot be empty')
        {
          this.authService.presentToast("Error While Sending Comment");
        }else{
        
        this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
        }
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
      }
    });
  }


  seenPeople(){
  	 this.navCtrl.push(SeenPeopleMsgPage);
  
  }

  toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'assets/ranking/Pic (8).png';
    } else {
        data.showDetails = true;
        data.icon = 'assets/ranking/Pic (8).png';
    }
  }
    dashboard(){
     this.navCtrl.push(DashboardPage);
  }
}
