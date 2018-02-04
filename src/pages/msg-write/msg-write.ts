import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageMainPage } from "../message-main/message-main";
import { DashboardPage } from "../dashboard/dashboard";
import { RevoService } from '../../providers/revoservices';
import { HomePage } from '../home/home';

import { Camera, CameraOptions } from '@ionic-native/camera';
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

  Logos:any;
  myDate: any;
  alldata: any;
  response: any;
  comment: any;
  fileData:any;
  currentBlob:any;
  profileImage:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: RevoService, public camera: Camera) {
   
    this.authService.getlogo();
    setTimeout(() => {

      this.Logos = this.authService.Logo;

    }, 1000);
    /* if (this.authService.getlogo() != null) {
      setTimeout(() => {

        this.Logos = this.authService.Logo;

      }, 1000);
    } */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MsgWritePage');
  }

  	register(){

      

      let date = { 
        "Reply": this.comment,
        "Title":"HWat",
        "UpDay": this.myDate,
        "AttachFile": [this.profileImage]
       };

      this.authService.showLoader("Loading Data");
      this.authService.messageReply(date).then((result) => {
        this.response = result;

        var my = JSON.stringify(this.response);
        console.log("response :" + my);
        var dataoverall = JSON.parse(my);
        if (dataoverall.success) {


          //this.overallresponseData = dataoverall.responseData;
          // this.EmployeeNames = dataoverall.responseData[0].EmployeeName;
          // this.ProfileImage = dataoverall.responseData[0].ProfilePicture;
       

          this.authService.dismissLoading();

        } else {
          this.authService.dismissLoading();
          //this.navCtrl.setRoot(DashboardPage);
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
          console.log("errrorr " + err.status);
        }
        // this.presentToast(err);
        //this.response = err;

      });

     // this.navCtrl.push(MessageMainPage);
      
  	}	
    cancel(){
  		this.navCtrl.push(MessageMainPage);
  	}
        dashboard(){
     this.navCtrl.push(DashboardPage);
  }	

  fileUpload(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      
      /* this.base64.encodeFile(file).then((base64File: string) => {
        console.log(base64File);
      }, (err) => {
        console.log(err);
      }); */
      
     /*  this.currentBlob = new Blob([file], { type: 'application/pdf' });
      this.pdfUrl = URL.createObjectURL(this.currentBlob) */
     /*  let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      let headers = new Headers();
     
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      let options = new RequestOptions({ headers: headers });
      this.http.post(`${this.apiEndPoint}`, formData, options)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(
        data => console.log('success'),
        error => console.log(error)
        ) */
    }
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

  updateonDate(date)
  {
    this.myDate = date;

  }
}
