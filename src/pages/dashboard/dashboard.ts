import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import { ProfilePage } from "../mypageprofile/profile";

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(public navCtrl: NavController,public menuCtrl:MenuController) {

    
  }

  menu(){
    this.menuCtrl.open();
  }
  profile(){
    this.navCtrl.push(ProfilePage);
  }

}
