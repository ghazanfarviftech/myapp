import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import { ProfilePage } from "../mypageprofile/profile";
import { MessageMainPage } from "../message-main/message-main";
import { DashboardPage } from "../dashboard/dashboard";
import { RevoService } from "../../providers/revoservices";
/**
 * Generated class for the ManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-management',
  templateUrl: 'management.html',
})
export class ManagementPage {
  questionList : Array<Object>;
  Logos : any;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public authService: RevoService) {
    if (this.authService.getlogo() != null) {
      this.Logos = this.authService.Logo;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CoinSentPage');
    this.questionList = [];
    this.questionList.push("first");
    this.questionList.push("second");
    this.questionList.push("second");
    this.questionList.push("second");
  }
    menu(){
    this.menuCtrl.open();
  }
  profile(){
    this.navCtrl.push(ProfilePage);
  }

message(){
    this.navCtrl.push(MessageMainPage);
  }

        dashboard(){
     this.navCtrl.push(DashboardPage);
  }
}
