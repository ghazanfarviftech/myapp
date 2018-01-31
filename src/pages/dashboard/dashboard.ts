import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController, NavParams, MenuController } from 'ionic-angular';
import { ProfilePage } from "../mypageprofile/profile";
import { ManagementPage } from "../management/management";
import { CoinTimelinePage } from "../coin-timeline/coin-timeline";
import { MessageMainPage } from "../message-main/message-main";
import { DailyNewsReceptBoxPage } from "../daily-news-recept-box/daily-news-recept-box";
import { ContactNotesPage } from "../contact-notes-received/contact-notes";
import { RevoService } from "../../providers/revoservices";
import { HomePage } from "../home/home";

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  alldata : any;
  sessionData: any;
  response: any;
  overallresponseData: any;
  overallData: any;
  CompanySlider1: any;
  CompanySlider2: any;
  CompanySlider3: any;
  Logo: any;
 
  constructor(public navCtrl: NavController, public params: NavParams, public menuCtrl: MenuController,
    public authService: RevoService) {

    this.authService.checkSession().then((result) => {
      if (result == null)
      {
        this.authService.presentToast("Not Authorized Kindly Login");
        this.navCtrl.setRoot(HomePage);
      }else{
        this.authService.checkCompanyId();
        this.authService.checkEmployeeId();
        this.alldata = params.get('param1');
     // this.navCtrl.setRoot(DashboardPage);
      }
    }, (err) => {
      this.authService.presentToast("Something went wrong");
      this.navCtrl.setRoot(HomePage);
    });
      /*
    this.sessionData = this.authService.checkSession();
    if(this.sessionData != null)
    {
    this.alldata = params.get('param1');
    }else{
      this.authService.presentToast("Not Authorized Kindly Login");
      this.navCtrl.setRoot(HomePage);
    }
    */
  }

    ionViewWillEnter() {


    //   this.authService.showLoader("Loading");

    //   this.authService.getDashboard().then((result) => {
    //     // this.loading.dismiss();
    //     this.response = result;
    //   var my= JSON.stringify(this.response);
    //  var dataoverall = JSON.parse(my);
     
    //     this.authService.loading.dismiss();
   
    //     if(dataoverall.success)
    //     {
    //       this.overallresponseData = dataoverall.responseData;
    //      this.overallData = this.overallresponseData[0];
    //      this.CompanySlider1 = this.overallData.CompanySlider1;
    //      this.CompanySlider2 = this.overallData.CompanySlider2;
    //      this.CompanySlider3 = this.overallData.CompanySlider3;
    //      this.Logo = this.overallData.CompanyLogo;
        
    //     }else{
   
    //       this.authService.presentToast("Something went wrong");
       
    //     }
    //    }, (err) => {
   
    //      this.authService.removeSession();
    //      this.authService.loading.dismiss();
    //      this.authService.presentToast(err);
    //      //this.response = err;
    //      console.log("errrorr " + err);
    //    });
       
    //  this.authService.showLoader("Loading ...");
    //   this.authService.getDashboard().then((result) => {
    //   this.response = result;

    //   var my = JSON.stringify(this.response);
    //   console.log("response :" + my);
    //   var dataoverall = JSON.parse(my);
    //   if (dataoverall.success) {
    //     this.overallresponseData = dataoverall.responseData;
    //     this.overallData = this.overallresponseData[0];
    //     this.CompanySlider1 = this.overallData.CompanySlider1;
    //     this.CompanySlider2 = this.overallData.CompanySlider2;
    //     this.CompanySlider3 = this.overallData.CompanySlider3;
    //     this.Logo = this.overallData.CompanyLogo;
        
    //     this.authService.loading.dismiss();
    //   } else {
    //     this.authService.loading.dismiss();
    //     this.navCtrl.setRoot(DashboardPage);
    //     this.authService.presentToast("Something went wrong");
    //   }

    // }, (err) => {
    //   this.authService.loading.dismiss();
    //   var my = JSON.stringify(err);
    //   if (err.error.message == "Unrecognized Session.") {
    //     this.authService.removeSession();
    //     this.authService.presentToast("Please Login Again");
    //     this.navCtrl.setRoot(HomePage);
    //     console.log("errrorr " + err.status);
    //   } else {
    //     this.navCtrl.setRoot(DashboardPage);
    //     this.authService.presentToast("Something went wrong");
    //     console.log("errrorr " + err.status);
    //   }

    // });

    console.log('ionViewDidLoad CoinSentPage');
    
  }

  menu(){
    this.menuCtrl.open();
  }
  profile(){
    this.navCtrl.setRoot(ProfilePage,{'alldata':this.alldata});
  }
  management(){
    this.navCtrl.setRoot(ManagementPage);
  }
  coinTimeline(){
    this.navCtrl.setRoot(CoinTimelinePage, { 'alldata': this.alldata });
  }
  message(){
    this.navCtrl.setRoot(MessageMainPage);
  }
  dailyNews(){
    this.navCtrl.setRoot(DailyNewsReceptBoxPage);
  }
  contacts(){
    this.navCtrl.setRoot(ContactNotesPage);
  }
  dashboard(){
     this.navCtrl.push(DashboardPage);
  }
}
