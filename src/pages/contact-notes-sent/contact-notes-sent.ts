import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DailyNewsMsgDetailsPage } from "../daily-news-msg-details/daily-news-msg-details";
import { WriteDailyNewsPage } from "../write-daily-news/write-daily-news";
import { DashboardPage } from "../dashboard/dashboard";
import { ContactNotesSavedPage } from "../contact-notes-saved/contact-notes-saved";
import { ContactNotesPage } from "../contact-notes-received/contact-notes";

import { DailyNewsReceptBoxPage } from "../daily-news-recept-box/daily-news-recept-box";
import { CoinTimelinePage } from "../coin-timeline/coin-timeline";
import { ProfilePage } from "../mypageprofile/profile";
import { MessageMainPage } from "../message-main/message-main";
import { HomePage } from '../home/home';
import { RevoService } from "../../providers/revoservices";
/**
 * Generated class for the DailyNewsReceptBoxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-contact-notes-sent',
  templateUrl: 'contact-notes-sent.html',
})
export class ContactNotesSentPage {
 
  alldata: any;
  response: any;
  overallresponseData: Array<Object>;
  ContactBook: any;
  DailyNews: any;
  Messages: any;
  total_rows: any;
  Cuurentpage = 1;
  TotalNumber: any;
  PerPage: any = 10;
  MaxPage: any;
  Logos:any;
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

  ionViewWillEnter() {
    this.authService.showLoader("Loading ...");
    this.authService.contactBookSentMessage(this.Cuurentpage, this.PerPage).then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {
        this.overallresponseData = dataoverall.responseData;

        this.total_rows = dataoverall.total_rows;
        this.TotalNumber = this.total_rows.TotalNumber;
        this.PerPage = this.total_rows.PerPage;
        this.MaxPage = this.total_rows.MaxPage;

        this.ContactBook = dataoverall.responseData[0].ContactBook;
        this.DailyNews = dataoverall.responseData[0].DailyNews;
        this.Messages = dataoverall.responseData[0].Messages;
        //this.EmployeeNames = dataoverall.responseData[0].EmployeeName;
        // this.ProfileImage = dataoverall.responseData[0].ProfilePicture;
        // this.DepartmentName = dataoverall.responseData[0].DepartmentName;
        // this.Catchpharase = dataoverall.responseData[0].Catchpharase;
        this.authService.dismissLoading();
      } else {
        this.authService.dismissLoading();
        if (dataoverall.message == "Unrecognized Session.") {
          this.authService.removeSession();
          this.authService.presentToast("Please Login Again");
          this.navCtrl.setRoot(HomePage);


        } else if (dataoverall.message == "No sent contact message found.") {
          this.authService.presentToast("No data found");
        } else {
          //this.authService.dismissLoading();
          this.navCtrl.setRoot(DashboardPage);
          this.authService.presentToast("Something went wrong");
        }
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


    console.log('ionViewDidLoad DailyNewsReceptBoxPage');
  }


  doInfinite(infiniteScroll) {
    this.Cuurentpage = this.Cuurentpage + 1;
    setTimeout(() => {
      this.authService.contactBookSentMessage(this.Cuurentpage, this.PerPage)
        .then((result) => {
          this.response = result;

          var my = JSON.stringify(this.response);
          console.log("response :" + my);
          var dataoverall = JSON.parse(my);
          if (dataoverall.success) {
            // this.overallresponseData = dataoverall.responseData;

            this.total_rows = dataoverall.total_rows;
            this.TotalNumber = this.total_rows.TotalNumber;
            this.PerPage = this.total_rows.PerPage;
            this.MaxPage = this.total_rows.MaxPage;

            this.ContactBook = dataoverall.responseData[0].ContactBook;
            this.DailyNews = dataoverall.responseData[0].DailyNews;
            this.Messages = dataoverall.responseData[0].Messages;
            for (let i = 0; i < dataoverall.responseData.length; i++) {
              this.overallresponseData.push(dataoverall.responseData[i]);
            }


            this.authService.dismissLoading();
          } else {

            this.authService.dismissLoading();

            if (dataoverall.message == 'No data found.') {

              this.authService.presentToast("No data found.");
            } else if (dataoverall.message == "No sent contact message found.") {
              this.authService.presentToast("No data found");
            }  else {
             
              this.navCtrl.setRoot(DashboardPage);
              this.authService.presentToast("Something went wrong");
            }
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
            this.authService.dismissLoading();
            this.navCtrl.setRoot(DashboardPage);
            this.authService.presentToast("Something went wrong");
          }
        });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 2000);
  }

    dashboard(){
     this.navCtrl.push(DashboardPage);
  }
  detailed(){
  	 this.navCtrl.push(DailyNewsMsgDetailsPage);
  }
  write(){
   
  this.navCtrl.push(WriteDailyNewsPage);
  }
    contactReceived(){
    this.navCtrl.push(ContactNotesPage);
  }
  contactSaved(){
   
  this.navCtrl.push(ContactNotesSavedPage);
  }
  contactSent(){
   
  this.navCtrl.push(ContactNotesSentPage);
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

  timeline()
  {
  this.navCtrl.push(CoinTimelinePage);
  }

  message(){
    this.navCtrl.push(MessageMainPage);
  }

}
