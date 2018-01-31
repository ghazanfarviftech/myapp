import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageMainPage } from "../message-main/message-main";
import { DashboardPage } from "../dashboard/dashboard";
import { MsgWritePage } from "../msg-write/msg-write";
import { RevoService } from '../../providers/revoservices';

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

  Logos:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: RevoService) {
    if (this.authService.getlogo() != null) {
      this.Logos = this.authService.Logo;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MsgDetailedPage');
  }
  closeThis(){
  	this.navCtrl.push(MessageMainPage);
  }

   editMsg(){
    this.navCtrl.push(MsgWritePage);
  }
      dashboard(){
     this.navCtrl.push(DashboardPage);
  }

}
