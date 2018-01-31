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

  data: any;
  mydata: any;
  loginData = { EmailAddress:'ryouellc@tuttocitta.it', Password:'rose123' };
  response : any;
  sessionData: any;
  constructor(public navCtrl: NavController,public menuCtrl:MenuController,
    public authService: RevoService,private appPreferences: AppPreferences) {
    
    this.authService.checkSession().then((result) => { 
      if (result == null) {
        //this.navCtrl.setRoot(HomePage);
      } else {
        this.authService.checkCompanyId();
        this.authService.checkEmployeeId();
        this.navCtrl.setRoot(DashboardPage);
      }
    }, (err) => {
     // this.navCtrl.setRoot(HomePage);
     });
     /*
    if (this.sessionData != null) {
       this.navCtrl.setRoot(DashboardPage);
    } else {
      //this.authService.presentToast("Not Authorized Kindly Login Again");
      this.navCtrl.setRoot(HomePage);
    }
    */

}

  login(){
    
    if(this.loginData.EmailAddress.trim().length == 0 || this.loginData.EmailAddress.trim() == ''|| this.loginData.Password.trim().length == 0 || this.loginData.Password.trim() == '')
{
      this.authService.presentToast("Please Fill the Required Fields");
}else{
      this.authService.showLoader("Authenticating");

   this.authService.login(this.loginData).then((result) => {
     // this.loading.dismiss();
      this.data = result;
   var my= JSON.stringify(this.data);//this.data[0];//Object.values(this.data)
  //this.mydata = my.replace("}", "").split(":")[1].split("~");
  var dataoverall = JSON.parse(my);

this.response = my;
  console.log("json data : " +my);
     console.log("json data : " +dataoverall.success);

     this.authService.loading.dismiss();

     if(dataoverall.success)
     {
      
       this.authService.setSession(dataoverall.responseData);
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
       this.authService.presentToast("Login Successfully");
      this.navCtrl.setRoot(DashboardPage,{
        param1: dataoverall.responseData});
     }else{

       this.authService.removeSession();
       this.authService.presentToast("Email or Password Incorrect");
       //this.authService.presentToast(dataoverall.message);
      //this.presentToast("Email or Password Incorrect");
     }
    }, (err) => {

      this.authService.removeSession();
      this.authService.loading.dismiss();
      this.authService.presentToast(err.message);
      //this.response = err;
      console.log("errrorr " + err.message);
    });
    

  }
    
   // this.navCtrl.push(DashboardPage);
  }
  forgetPassword(){
  	this.navCtrl.push(ForgetPasswordPage);
  }

  
}
