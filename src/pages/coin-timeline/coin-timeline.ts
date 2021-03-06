import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ToastController } from 'ionic-angular';
import { RankingPage } from "../ranking/ranking";
import { CoinsintroductionPage } from "../coinsintroduction/coinsintroduction";
import { CoinSendPage } from "../coin-send/coin-send";
import { DashboardPage } from "../dashboard/dashboard";
import { UserProfilePage } from "../user-profile/user-profile";
import { DailyNewsReceptBoxPage } from "../daily-news-recept-box/daily-news-recept-box";
import { ContactNotesPage } from "../contact-notes-received/contact-notes";
import { ProfilePage } from "../mypageprofile/profile";
import { MessageMainPage } from "../message-main/message-main";
import { RevoService } from "../../providers/revoservices";
import { HomePage } from '../home/home';
/**
 * Generated class for the CoinTimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-coin-timeline',
  templateUrl: 'coin-timeline.html',
})
export class CoinTimelinePage {

  coinList : Array<Object>;
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
  Logos: any;
  theColor = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public authService: RevoService, public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
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
       /*  if (this.authService.getlogo() != null) {
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

    this.authService.showLoader("Loading ...");
    this.authService.coinemptimelime(this.Cuurentpage, this.PerPage).then((result) => {
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

        if (dataoverall.message == 'No data found.')
        {
          this.authService.dismissLoading();
          this.navCtrl.setRoot(DashboardPage);
          this.authService.presentToast(dataoverall.message);
        }else{
          this.authService.dismissLoading();
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

    console.log('ionViewDidLoad CoinSentPage');
    
  }


  doInfinite(infiniteScroll) {
    this.Cuurentpage = this.Cuurentpage + 1;
    setTimeout(() => {
      this.authService.coinemptimelime(this.Cuurentpage, this.PerPage)
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
          }else{
            this.authService.dismissLoading();
            if (dataoverall.message == 'No data found.')
            {
            
              this.authService.presentToast("No data found.");
            }else{
             
              this.navCtrl.setRoot(DashboardPage);
              this.authService.presentToast("Something went wrong");
            }
          }
        },
        (err) => {
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
            this.authService.dismissLoading();
            this.navCtrl.setRoot(DashboardPage);
            this.authService.presentToast("Something went wrong");
          }
        });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 2000);
  }

  coinLike(GivenCoinId,itemoflist)
  {
    let coinId = { GivenCoinID: GivenCoinId};
    
    this.authService.showLoader("Liking ...");
    this.authService.coinLike(coinId).then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {
      //  this.ionViewWillEnter();
        if (dataoverall.message =='like is placed.')
        {

          itemoflist.likes = true; 
          this.theColor = true;
          this.authService.presentToast("Liked Succesfully");
        }else{
          itemoflist.likes = false; 
          this.theColor = false;
          this.authService.presentToast("UnLike Succesfully");
        }
        /* this.overallresponseData = dataoverall.responseData;

        this.total_rows = dataoverall.total_rows;
        this.TotalNumber = this.total_rows.TotalNumber;
        this.PerPage = this.total_rows.PerPage;
        this.MaxPage = this.total_rows.MaxPage;

        this.ContactBook = dataoverall.responseData[0].ContactBook;
        this.DailyNews = dataoverall.responseData[0].DailyNews; */
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
  }

  dashboard(){
    this.navCtrl.push(DashboardPage);
  }
timeline(){
this.navCtrl.push(CoinTimelinePage);
}
 ranking()

{
  this.navCtrl.push(RankingPage);

}
coinsintro()
{
  this.navCtrl.push(CoinsintroductionPage);

}
coinSend()
{
  this.navCtrl.push(CoinSendPage);

}
userProfile(employeeId)
{
  this.navCtrl.push(UserProfilePage, { 'EmployeeID': employeeId });

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
  

}
