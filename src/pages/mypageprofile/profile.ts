import { Component } from '@angular/core';
import { NavController , MenuController, LoadingController, ToastController,NavParams } from 'ionic-angular';
import { DashboardPage } from "../dashboard/dashboard";
import { CoinSentPage } from "../coin-sent/coin-sent";
import { CoinReceivedPage } from "../coin-received/coin-received";
import { ManagementPage } from "../management/management";
import { ProfileSettingsPage } from "../profile-settings/profile-settings";

import { DailyNewsReceptBoxPage } from "../daily-news-recept-box/daily-news-recept-box";
import { ContactNotesPage } from "../contact-notes-received/contact-notes";
import { CoinTimelinePage } from "../coin-timeline/coin-timeline";
import { MessageMainPage } from "../message-main/message-main";
import { AppPreferences } from '@ionic-native/app-preferences';
import { RevoService } from "../../providers/revoservices";
import { HomePage } from '../home/home';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  loginData:  any;
  alldata : any;
  response : any;
  EmployeeNames : string;
  ProfileImage: any = "assets/1.jpg";
  DepartmentName: string;
  Catchpharase: string;
  Goal: string;
  CompanyName: string;
  StoreName: string;
  ContactBook: string;
  DailyNews: string;
  Igot:  string;
  Rigot: string;
  Isent: string;
  RIsentsc: string;
  Igotsc: string;
  Isentsc: string;
  Risent: string;
  Rigotsc: string;
  Coins: Array<Object>;
  SpecialCoins: Array<Object>;
  constructor(public navCtrl: NavController,public menuCtrl:MenuController 
    ,public authService: RevoService, public loadingCtrl: LoadingController,
     private toastCtrl: ToastController,private appPreferences: AppPreferences,public params: NavParams) {
     
    this.authService.checkSession().then((result) => {
      if (result == null) {
        this.authService.presentToast("Not Authorized Kindly Login");
        this.navCtrl.setRoot(HomePage);
      } else {
        this.authService.checkCompanyId();
        this.authService.checkEmployeeId();
        this.alldata = params.get('param1');
        // this.navCtrl.setRoot(DashboardPage);
      }
    }, (err) => {
      this.authService.presentToast("Something went wrong");
      this.navCtrl.setRoot(HomePage);
    });
    
  }

  
  ionViewWillEnter() {
    this.authService.showLoader("Loading Profile");
    this.authService.profile(this.alldata).then((result) => {
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
        
        this.authService.loading.dismiss();
      } else {
        this.authService.loading.dismiss();
        this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
      }
     
    }, (err) => {
      this.authService.loading.dismiss();

      var my = JSON.stringify(err);
      if (err.error.message =="Unrecognized Session.")
      {
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
    console.log('ionViewDidLoad ProfilePage');
  }

screenOpen(name:string){
   this.navCtrl.push(name);

}
profile(){
   //this.navCtrl.push(ProfilePage);

}
coinsSent(){
  this.navCtrl.push(CoinSentPage, { 'alldata': this.alldata});
  }
coinsReceived(){
  this.navCtrl.push(CoinReceivedPage, { 'alldata': this.alldata });
  }


  menu(){
    this.menuCtrl.open();
  }

  management(){
    this.navCtrl.push(ManagementPage);
  }
  profileSettings(){
     this.navCtrl.push(ProfileSettingsPage);
  }
  dashboard(){
     this.navCtrl.push(DashboardPage);
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
    this.navCtrl.push(CoinTimelinePage, { 'alldata': this.alldata });
  }

  message(){
    this.navCtrl.push(MessageMainPage);
  }
   
}
