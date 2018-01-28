import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactMsgDetailsPage } from "../contact-msg-details/contact-msg-details";


/**
 * Generated class for the SeenPeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-seen-people-msg',
  templateUrl: 'seen-people-msg.html',
})
export class SeenPeopleMsgPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeenPeoplePage');
  }
      close(){
     this.navCtrl.push(ContactMsgDetailsPage);
  }
}
