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
        console.log("constructor Unauthorizer " + result);
        this.authService.presentToast("Not Authorized Kindly Login");
        this.navCtrl.setRoot(HomePage);
       
      }else{
        this.authService.checkCompanyId();
        this.authService.checkEmployeeId();
        this.alldata = params.get('param1');

        if(this.alldata != null)
        {

          this.overallData = this.alldata;
          this.CompanySlider1 = this.overallData.CompanySlider1;
          this.CompanySlider2 = this.overallData.CompanySlider2;
          this.CompanySlider3 = this.overallData.CompanySlider3;
          this.Logo = this.overallData.CompanyLogo;
          this.authService.setLogo(this.Logo);
          this.authService.setSlide1(this.CompanySlider1);
          this.authService.setSlide2(this.CompanySlider2);
          this.authService.setSlide3(this.CompanySlider3);

        }else{
          this.authService.getlogo();
          this.authService.getSlide1();
          this.authService.getSlide2();
          this.authService.getSlide3();
          setTimeout(() => {
            this.CompanySlider1 = this.authService.Slide1;
            this.CompanySlider2 = this.authService.Slide2;
            this.CompanySlider3 = this.authService.Slide3;
            this.Logo = this.authService.Logo;

          }, 1000);
         
        }
        
        console.log("constructor Emp Name " );
     // this.navCtrl.setRoot(DashboardPage);
        //this.loadingLogo();
      }
    }, (err) => {
      console.log("constructor Errr " + err);
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


     /*  this.authService.showLoader("Loading");

      this.authService.getDashboard().then((result) => {
        // this.dismissLoading();

       
        this.response = result;
      var my= JSON.stringify(this.response);
     var dataoverall = JSON.parse(my);
        console.log("ionViewWillEnter  response " + dataoverall);
        this.authService.dismissLoading();
   
        if(dataoverall.success)
        {
          console.log("ionViewWillEnter  success " + dataoverall);
          this.overallresponseData = dataoverall.responseData;
         this.overallData = this.overallresponseData[0];
         this.CompanySlider1 = this.overallData.CompanySlider1;
         this.CompanySlider2 = this.overallData.CompanySlider2;
         this.CompanySlider3 = this.overallData.CompanySlider3;
         this.Logo = this.overallData.CompanyLogo;
        this.authService.setLogo(this.Logo);
        }else{
   
          console.log("ionViewWillEnter  else " + dataoverall);
          this.authService.presentToast("Something went wrong");
       
        }
       }, (err) => {
   
         console.log("ionViewWillEnter  error " + err);
         this.authService.removeSession();
         this.authService.dismissLoading();
         this.authService.presentToast(err);
         //this.response = err;
         console.log("errrorr " + err);
       }); */
       
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
        
    //     this.authService.dismissLoading();
    //   } else {
    //     this.authService.dismissLoading();
    //     this.navCtrl.setRoot(DashboardPage);
    //     this.authService.presentToast("Something went wrong");
    //   }

    // }, (err) => {
    //   this.authService.dismissLoading();
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
