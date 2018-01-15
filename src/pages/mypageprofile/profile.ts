import { Component } from '@angular/core';
import { NavController , MenuController } from 'ionic-angular';
import { DashboardPage } from "../dashboard/dashboard";
import { CoinSentPage } from "../coin-sent/coin-sent";
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController,public menuCtrl:MenuController) {

  }

menus(){
    this.menuCtrl.toggle();
  }
coinsSent(){
    this.navCtrl.push(CoinSentPage);
  }
}
