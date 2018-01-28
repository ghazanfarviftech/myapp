import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from "../dashboard/dashboard";

/**
 * Generated class for the CoinSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-coin-select',
  templateUrl: 'coin-select.html',
})
export class CoinSelectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoinSelectPage');
  }

      dashboard(){
     this.navCtrl.push(DashboardPage);
  }

}
