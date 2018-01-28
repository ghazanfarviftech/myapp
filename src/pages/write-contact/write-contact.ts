import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from "../dashboard/dashboard";

/**
 * Generated class for the WriteDailyNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-write-contact',
  templateUrl: 'write-contact.html',
})
export class WriteContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WriteDailyNewsPage');
  }
    dashboard(){
     this.navCtrl.push(DashboardPage);
  }
}
