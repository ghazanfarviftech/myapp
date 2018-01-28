import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MsgDetailedPage } from "../msg-detailed/msg-detailed";
import { MsgWritePage } from "../msg-write/msg-write";
import { DashboardPage } from "../dashboard/dashboard";

/**
 * Generated class for the MessageMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-message-main',
  templateUrl: 'message-main.html',
})
export class MessageMainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageMainPage');
  }
    msgDetail(){
    this.navCtrl.push(MsgDetailedPage);
  }
  editMsg(){
    this.navCtrl.push(MsgWritePage);
  }
      dashboard(){
     this.navCtrl.push(DashboardPage);
  }
}
