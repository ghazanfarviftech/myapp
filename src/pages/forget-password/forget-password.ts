import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, NavParams , MenuController  } from 'ionic-angular';

import { AppPreferences } from '@ionic-native/app-preferences';
import { RevoService } from "../../providers/revoservices";

/**
 * Generated class for the ForgetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPasswordPage {

  email : any;
  response :any;
    constructor(public navCtrl: NavController,public menuCtrl:MenuController 
    ,public authService: RevoService, public loadingCtrl: LoadingController,
     private toastCtrl: ToastController,private appPreferences: AppPreferences,public params: NavParams) {
     

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPasswordPage');
  }


   update()
  {


    this.authService.showLoader("Sending email to change the password ...");
   	this.authService.forgetPassword({ 'EmailAddress': this.email}).then((result) => {
      this.response = result;
      console.log(result)
      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {

        this.authService.presentToast("Email Sent Successfully");
        this.navCtrl.pop();
        this.authService.loading.dismiss();
      } else {
        
        this.authService.loading.dismiss();
       // this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast(dataoverall.message);
      }
      
  }, (err) => {
    this.authService.loading.dismiss();
    var my = JSON.stringify(err);
 		console.log(err)
      console.log("errrorr " + err.status);

      this.authService.presentToast("Something went wrong");
    
  });
  
  
}

}
