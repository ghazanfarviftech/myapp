import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, NavParams , MenuController  } from 'ionic-angular';
import { CommentEditPage } from "../comment-edit/comment-edit";
import { ManagementPage } from "../management/management";
import { CoinReceivedPage } from "../coin-received/coin-received";
import { ProfilePage } from "../mypageprofile/profile";

import { DailyNewsReceptBoxPage } from "../daily-news-recept-box/daily-news-recept-box";
import { ContactNotesPage } from "../contact-notes-received/contact-notes";
import { CoinTimelinePage } from "../coin-timeline/coin-timeline";
import { MessageMainPage } from "../message-main/message-main";
import { RevoService } from "../../providers/revoservices";

/**
 * Generated class for the CoinSentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-coin-sent',
  templateUrl: 'coin-sent.html',
})
export class CoinSentPage {

  personList : Array<Object>;
  alldata: any;
  response: any;
  overallresponseData : Array<Object>;
  ContactBook: any;
  DailyNews: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public authService: RevoService, public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
    this.alldata = navParams.get('alldata');
  }

  ionViewWillEnter() {
    this.authService.coinsent(this.alldata).then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {
        this.overallresponseData = dataoverall.responseData;
        this.ContactBook = dataoverall.responseData[0].ContactBook;
        this.DailyNews = dataoverall.responseData[0].DailyNews;
        //this.EmployeeNames = dataoverall.responseData[0].EmployeeName;
       // this.ProfileImage = dataoverall.responseData[0].ProfilePicture;
       // this.DepartmentName = dataoverall.responseData[0].DepartmentName;
       // this.Catchpharase = dataoverall.responseData[0].Catchpharase;

      } else {

      }
    }, (err) => {
      // this.loading.dismiss();
      // this.presentToast(err);
      //this.response = err;
      console.log("errrorr " + err);
    });

    console.log('ionViewDidLoad CoinSentPage');
    this.personList = [];
    this.personList.push("first");
    this.personList.push("second");
    this.personList.push("second");
    this.personList.push("second");
  }


  commentedit(commentToEdit, GivenCoinId)
{
    var commentData = {
      Comment: commentToEdit,
      GivenCoinID: GivenCoinId
    }
    this.navCtrl.push(CommentEditPage, { 'alldata': this.alldata, 'comment': commentData});
}
  menu(){
    this.menuCtrl.open();
  }

  management(){
    this.navCtrl.push(ManagementPage);
  }
  coinsSent(){
    this.navCtrl.push(CoinSentPage);
  }
  coinReceived(){
    this.navCtrl.push(CoinReceivedPage ,{ 'alldata': this.alldata });
  }
   profile(){
    this.navCtrl.push(ProfilePage);
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
