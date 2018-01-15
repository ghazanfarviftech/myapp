import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import { DashboardPage } from "../dashboard/dashboard";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public menuCtrl:MenuController) {

  }

  dashboard(){
    this.navCtrl.push(DashboardPage);
  }


}
