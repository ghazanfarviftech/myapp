import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageMainPage } from "../message-main/message-main";

/**
 * Generated class for the MsgDetailedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-msg-detailed',
  templateUrl: 'msg-detailed.html',
})
export class MsgDetailedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MsgDetailedPage');
  }
  closeThis(){
  	this.navCtrl.push(MessageMainPage);
  }

}
