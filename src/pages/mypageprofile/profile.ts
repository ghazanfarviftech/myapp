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
  constructor(public navCtrl: NavController,public menuCtrl:MenuController 
    ,public authService: RevoService, public loadingCtrl: LoadingController,
     private toastCtrl: ToastController,private appPreferences: AppPreferences,public params: NavParams) {
      this.alldata = params.get('alldata');

    
  }

  ionViewWillEnter()
  {
  }
  ionViewDidLoad() {
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
      } else {

      }
    }, (err) => {
      // this.loading.dismiss();
      // this.presentToast(err);
      //this.response = err;
      console.log("errrorr " + err);
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
    this.navCtrl.push(CoinReceivedPage);
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
  this.navCtrl.push(CoinTimelinePage);
  }

  message(){
    this.navCtrl.push(MessageMainPage);
  }

}
