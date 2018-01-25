import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageMainPage } from "../message-main/message-main";

/**
 * Generated class for the MsgWritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-msg-write',
  templateUrl: 'msg-write.html',
})
export class MsgWritePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MsgWritePage');
  }

  	register(){
  		this.navCtrl.push(MessageMainPage);
  	}	
    cancel(){
  		this.navCtrl.push(MessageMainPage);
  	}	
}
