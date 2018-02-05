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

  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: any = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' }
  ];
  public radarChartType: string = 'radar';

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
  Messages: string;
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
  Logos: any;
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
    this.authService.showLoader("Loading Profile");
    this.authService.profile().then((result) => {
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
        this.Messages = dataoverall.responseData[0].Messages;
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
     this.navCtrl.push(ProfileSettingsPage, { 'alldata': this.alldata, profile:{'name':this.EmployeeNames, 'department':this.DepartmentName, 'store':this.StoreName, 'company': this.CompanyName, 'goal': this.Goal, 'copyCatch': this.Catchpharase, 'profileImage':this.ProfileImage} });
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
   
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
