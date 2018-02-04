import { Component } from '@angular/core';
import { NavController , MenuController, LoadingController, ToastController,NavParams } from 'ionic-angular';
import { DashboardPage } from "../dashboard/dashboard";
import { HomePage } from '../home/home';
import { AppPreferences } from '@ionic-native/app-preferences';
import { RevoService } from "../../providers/revoservices";
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the ProfileSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-profile-settings',
  templateUrl: 'profile-settings.html',
})
export class ProfileSettingsPage {
 
  
  alldata: any;
  profile: any;
  name : any;
  department: any;
  company: any;
  store: any;
  goal: any;
  copyCatch: any;
  profileImage: any;
  response: any;
  currentPassword: any;
  newPassword: any;
  imageSrc:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: RevoService, public loadingCtrl: LoadingController,
    private toastCtrl: ToastController, public camera: Camera) {

    

    this.authService.checkSession().then((result) => {
      if (result == null) {
        this.authService.presentToast("Not Authorized Kindly Login");
        this.navCtrl.setRoot(HomePage);
      } else {
        this.authService.checkCompanyId();
        this.authService.checkEmployeeId();
        this.profile = navParams.get('profile');
        console.log("--profile")
        console.log(this.profile)
        this.name = this.profile.name
        this.department = this.profile.department
        this.company = this.profile.company
        this.store = this.profile.store
        this.goal = this.profile.goal
        this.copyCatch = this.profile.copyCatch
        this.profileImage = this.profile.profileImage
        this.alldata = navParams.get('alldata');
        
        // this.navCtrl.setRoot(DashboardPage);
      }
    }, (err) => {
      this.authService.presentToast("Something went wrong");
      this.navCtrl.setRoot(HomePage);
    });
    
  }

  


  ionViewWillEnter() {
   
    console.log('ionViewDidLoad setProfile');
  }


 update()
  {


        this.authService.showLoader("Updating Profile ...");
   this.authService.setProfile({ 'ProfilePicture': this.profileImage, 'CurrentPassword': this.currentPassword, 'NewPassword': this.newPassword, 'Catchpharase': this.copyCatch, 'Goal': this.goal}).then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {

        this.authService.presentToast("Profile Update Successfully");
        this.navCtrl.pop();
        this.authService.dismissLoading();
      } else {
        
        this.authService.dismissLoading();
       // this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast(dataoverall.message);
      }
      
  }, (err) => {
    this.authService.dismissLoading();
    var my = JSON.stringify(err);
    if (err.error.message == "Unrecognized Session.") {
      this.authService.removeSession();
      this.authService.presentToast("Please Login Again");
      this.navCtrl.setRoot(HomePage);
      console.log("errrorr " + err.status);
    } else {
      this.navCtrl.setRoot(DashboardPage);
      this.authService.presentToast("Something went wrong");
    }
  });
  
  
}

  private openGallery(): void {
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.PNG,
      correctOrientation: true
    }


    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      console.log(imageData);
      this.profileImage = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
      console.log(err);
     });
    /*
    this.camera.getPicture(cameraOptions)
      .then(file_uri => this.profileImage = 'data:image/jpeg;base64,' + file_uri,
      err => console.log(err));
      */
  }


    dashboard(){
     this.navCtrl.push(DashboardPage);
  }
}
