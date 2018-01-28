import { Component } from '@angular/core';
import { NavController,MenuController,NavParams } from 'ionic-angular';
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
