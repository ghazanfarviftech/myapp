import { Component } from '@angular/core';
import { NavController,MenuController, LoadingController, ToastController } from 'ionic-angular';
import { DashboardPage } from "../dashboard/dashboard";
import { ForgetPasswordPage } from "../forget-password/forget-password";
import { RevoService } from "../../providers/revoservices";
import { AppPreferences } from '@ionic-native/app-preferences';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loading: any;
  data: any;
  mydata: any;
  loginData = { EmailAddress:'ryouellc@tuttocitta.it', Password:'rose123' };
  response : any;
  constructor(public navCtrl: NavController,public menuCtrl:MenuController,
    public authService: RevoService, public loadingCtrl: LoadingController,
     private toastCtrl: ToastController
    ,private appPreferences: AppPreferences) {
}

  login(){
    
    if(this.loginData.EmailAddress.trim().length == 0 || this.loginData.EmailAddress.trim() == ''|| this.loginData.Password.trim().length == 0 || this.loginData.Password.trim() == '')
{
  this.presentToast("Please Fill the Required Fields");
}else{
this.showLoader();

   this.authService.login(this.loginData).then((result) => {
     // this.loading.dismiss();
      this.data = result;
   var my= JSON.stringify(this.data);//this.data[0];//Object.values(this.data)
  //this.mydata = my.replace("}", "").split(":")[1].split("~");
  var dataoverall = JSON.parse(my);

this.response = my;
  console.log("json data : " +my);
     console.log("json data : " +dataoverall.success);

     this.loading.dismiss();

     if(dataoverall.success)
     {
      
      console.log("json dataallesponse : " +dataoverall.responseData.EmployeeID); 
     /*
      this.appPreferences.store('EmployeeID',dataoverall.responseData.EmployeeID);
      this.appPreferences.store('EmailAddress',dataoverall.responseData.EmailAddress);
      this.appPreferences.store('CompanyID',dataoverall.responseData.CompanyID);
      this.appPreferences.store('DepartmentID',dataoverall.responseData.DepartmentID);
      this.appPreferences.store('StoreID',dataoverall.responseData.StoreID);
      this.appPreferences.store('SessionID',dataoverall.responseData.SessionID);
      this.appPreferences.store('Role',dataoverall.responseData.Role);
      */
      this.presentToast("Login Successfully");
      this.navCtrl.setRoot(DashboardPage,{
        param1: dataoverall.responseData
    });
     }else{

      
      this.presentToast(dataoverall.message);
      //this.presentToast("Email or Password Incorrect");
     }
    }, (err) => {
       this.loading.dismiss();
       this.presentToast(err);
      //this.response = err;
      console.log("errrorr " + err);
    });
    

  }
    
   // this.navCtrl.push(DashboardPage);
  }
  forgetPassword(){
  	this.navCtrl.push(ForgetPasswordPage);
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
