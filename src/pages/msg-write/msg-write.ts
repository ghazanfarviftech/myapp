import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageMainPage } from "../message-main/message-main";
import { DashboardPage } from "../dashboard/dashboard";
import { RevoService } from '../../providers/revoservices';
import { HomePage } from '../home/home';
import { FileChooser } from '@ionic-native/file-chooser';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64 } from '@ionic-native/base64';
/* import { base64 } from 'angular-base64-upload'; */
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

import { File } from '@ionic-native/file';

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
  comment: any = '';
  fileData:any;
  currentBlob:any;
  profileImage:Array<any> = [];
  myFile :any;
  Fileess :any;
  fileTransferresponse : any;
  selectFile: string = 'Select File';
  fd :any;
  path : any;
  fileNames : any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public authService: RevoService, public camera: Camera, public fileChooser: FileChooser,
    private transfer: FileTransfer, public base64: Base64, public file: File) {
   

      this.authService.checkSession().then((result) => {
      if (result == null) {
        this.authService.presentToast("Not Authorized Kindly Login");
        this.navCtrl.setRoot(HomePage);
      } else {
        this.authService.checkCompanyId();
        this.authService.checkEmployeeId();
       
        this.authService.getlogo();
        setTimeout(() => {

          this.Logos = this.authService.Logo;

        }, 1000);
      
      }
    }, (err) => {
      this.authService.presentToast("Something went wrong");
      this.navCtrl.setRoot(HomePage);
    });

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MsgWritePage');
  }

  	register(){
      //messages_attachments-lnwd8-1518969736.pdf

     /*  this.fileTransferresponse = 'messages_attachments-IIH3i-1518984106.pdf';
      this.profileImage = [];
      this.profileImage.push(this.fileTransferresponse);
      let dataMsgReply = {
        "Reply": this.comment,
        "Title": this.fileTransferresponse,
        "UpDay": this.myDate,
        "AttachFile": this.profileImage
      };
      console.log("data to send Reply :" + dataMsgReply.Reply);
      console.log("data to send Title :" + dataMsgReply.Title);
      console.log("data to send UpDay :" + dataMsgReply.UpDay);
      console.log("data to send AttachFile :" + dataMsgReply.AttachFile);
      this.authService.showLoader("Loading Data");
      this.authService.messageReply(dataMsgReply).then((result) => {
        this.response = result;

        var my = JSON.stringify(this.response);
        console.log("response :" + my);
        var dataoverall = JSON.parse(my);
        if (dataoverall.success) {

          this.authService.presentToast(dataoverall.message);
          this.authService.dismissLoading();

        } else {
          this.authService.dismissLoading();
          this.authService.presentToast(dataoverall.message);
        }

      }, (err) => {
        this.authService.dismissLoading();

        var my = JSON.stringify(err);
        if (err.message == "Unrecognized Session.") {
          this.authService.removeSession();
          this.authService.presentToast("Please Login Again");
          this.navCtrl.setRoot(HomePage);
          console.log("errrorr " + err.status);
        } else if (err.statusText == "Unauthorized") {
          this.authService.removeSession();
          this.authService.presentToast("Please Login Again");
          this.navCtrl.setRoot(HomePage);
          console.log("errrorr " + err.status);

        } else {
          this.navCtrl.setRoot(DashboardPage);
          this.authService.presentToast("Something went wrong");
          console.log("errrorr " + err.status);
        }
      }); */

      const fileTransfer: FileTransferObject = this.transfer.create();


      /*file:///storage/emulated/0/Download
mypdf.pdf */
            // regarding detailed description of this you cn just refere ionic 2 transfer plugin in official website
            
     // this.fileNames = 'mypdf.pdf';
     // this.path = 'file:///storage/emulated/0/Download';
      this.authService.showLoader("Sending Message ...");
     if(this.fileNames == null)
     {

       this.profileImage = [];
       //this.profileImage.push(fileNameToSend);

       console.log("data to send arrayt :" + this.profileImage);

       let dataMsgReply = {
         "Reply": this.comment,
         "Title": 'test',
         "UpDay": this.myDate,
         "AttachFile": this.profileImage
       };
       console.log("data to send Reply :" + dataMsgReply.Reply);
       console.log("data to send Title :" + dataMsgReply.Title);
       console.log("data to send UpDay :" + dataMsgReply.UpDay);
       console.log("data to send AttachFile :" + dataMsgReply.AttachFile);
       ///this.authService.showLoader("Loading Data");
       this.authService.messageReply(dataMsgReply).then((result) => {
         this.response = result;

         var my = JSON.stringify(this.response);
         console.log("response :" + my);
         var dataoverall = JSON.parse(my);
         if (dataoverall.success) {

           this.authService.presentToast(dataoverall.message);
           this.authService.dismissLoading();
           this.navCtrl.setRoot(DashboardPage);
         } else {
           this.authService.dismissLoading();
           this.authService.presentToast(dataoverall.message);
         }

       }, (err) => {
         //this.authService.dismissLoading();
         //var my = JSON.stringify(err);
         //this.authService.presentToast(err.message);
         var my = JSON.stringify(err);
         if (err.message == "Unrecognized Session.") {
           this.authService.removeSession();
           this.authService.presentToast("Please Login Again");
           this.navCtrl.setRoot(HomePage);
           console.log("errrorr " + err.status);
         } else if (err.statusText == "Unauthorized") {
           this.authService.removeSession();
           this.authService.presentToast("Please Login Again");
           this.navCtrl.setRoot(HomePage);
           console.log("errrorr " + err.status);

         } else {
           this.navCtrl.setRoot(DashboardPage);
           this.authService.presentToast("Something went wrong");
           console.log("errrorr " + err.status);
         }
       });

     }else{

       
            let options1 = {
              fileKey: "Attachment",
              fileName: this.fileNames,
              headers: {
                "token": "e662c46b5bef24a96c3128e25f43beaa05e3bd13",
                Connection: "close"
              },
              httpMethod: "POST",
              chunkedMode: false,
              mimeType: "multipart/form-data",
              params: {
                'Attachment': this.fileNames,
                'AttachmentFor': '6'
              }
            }
      
            
            fileTransfer.upload(this.path + "/" + this.fileNames, 'http://chainayena.net/revo/api/revo-file-upload', options1)
              .then((result) => {


                this.response = result;

                var my = JSON.stringify(this.response);
                console.log("response :" + my);
                var dataoverall = JSON.parse(my);
                console.log("response data:" + dataoverall);

                console.log("bytesSent" + dataoverall.bytesSent);
                console.log("response" + dataoverall.response);
                console.log("responseCode" + dataoverall.responseCode);
                var dataresponse = JSON.parse(dataoverall.response);
                if (dataresponse.success)
                {


                  let overallresponseData = dataresponse.responseData;
                  console.log("data overall in success" + overallresponseData);
                  var fileNameToSend = overallresponseData.FileName;
                  this.profileImage = [];
                  this.profileImage.push(fileNameToSend);

                  console.log("data to send arrayt :" + this.profileImage);
                  
                  let dataMsgReply = {
                    "Reply": this.comment,
                    "Title": overallresponseData.FileName,
                    "UpDay": this.myDate,
                    "AttachFile": this.profileImage
                  };
                  console.log("data to send Reply :" + dataMsgReply.Reply);
                  console.log("data to send Title :" + dataMsgReply.Title);
                  console.log("data to send UpDay :" + dataMsgReply.UpDay);
                  console.log("data to send AttachFile :" + dataMsgReply.AttachFile);
                 // this.authService.showLoader("Loading Data");
                  this.authService.messageReply(dataMsgReply).then((result) => {
                    this.response = result;

                    var my = JSON.stringify(this.response);
                    console.log("response :" + my);
                    var dataoverall = JSON.parse(my);
                    if (dataoverall.success) {

                      this.authService.presentToast(dataoverall.message);
                      this.authService.dismissLoading();
                      this.navCtrl.setRoot(DashboardPage);
                    } else {
                      this.authService.dismissLoading();
                      this.authService.presentToast(dataoverall.message);
                    }

                  }, (err) => {
                    //this.authService.dismissLoading();
                    //var my = JSON.stringify(err);
                    //this.authService.presentToast(err.message);
                    var my = JSON.stringify(err);
                    if (err.message == "Unrecognized Session.") {
                      this.authService.removeSession();
                      this.authService.presentToast("Please Login Again");
                      this.navCtrl.setRoot(HomePage);
                      console.log("errrorr " + err.status);
                    } else if (err.statusText == "Unauthorized") {
                      this.authService.removeSession();
                      this.authService.presentToast("Please Login Again");
                      this.navCtrl.setRoot(HomePage);
                      console.log("errrorr " + err.status);

                    } else {
                      this.navCtrl.setRoot(DashboardPage);
                      this.authService.presentToast("Something went wrong");
                      console.log("errrorr " + err.status);
                    }
                  });
            
                }else{
                  this.authService.dismissLoading();
                  //var my = JSON.stringify(err);
                  this.authService.presentToast(dataresponse.message);
                  console.log("bytesSent" + dataoverall.bytesSent);
                  console.log("response" + dataoverall.response);
                  console.log("responseCode" + dataoverall.responseCode);
                  
                  console.log("error  in if else " );
                }
                
                
             
              }, (err) => {
                // error
                this.authService.dismissLoading();
                var my = JSON.stringify(err);
                this.authService.presentToast(err.message);
              });
            }
      
  	}	
    cancel(){
  		this.navCtrl.push(MessageMainPage);
  	}
        dashboard(){
     this.navCtrl.push(DashboardPage);
  }	

 
  fileUpload(event) {


    this.fileChooser.open()
      .then(uri => {
        this.file.resolveLocalFilesystemUrl(uri)
          .then(entry => {
            alert(JSON.stringify(entry));
            this.path = entry.nativeURL.substring(0, entry.nativeURL.lastIndexOf('/'));
            alert(this.path);
            alert(entry.name);
            this.fileNames = entry.name;
            alert(this.fileNames);
            this.selectFile = entry.name;
            

            var options = {
              fileKey: "file",
              fileName: "mypdf.pdf",
              chunkedMode: false,
              mimeType: "multipart/form-data",
              params: { 'fileName': "mypdf.pdf" }
            };

/* 
file:///storage/emulated/0/Download
mypdf.pdf
            fileTransfer.upload(this.path + "/" + entry.name, 'http://chainayena.net/revo/api/revo-file-upload', options1)
              .then((data) => {
                // success
                alert("success" + JSON.stringify(data));
              }, (err) => {
                // error
                alert("error" + JSON.stringify(err));
              }); */

           /*  this.file.readAsBinaryString(path, entry.name)
              .then(content => {
                console.log(content);
                alert(JSON.stringify(content));
              })
              .catch(err => {
                console.log(err);
                alert(JSON.stringify(err));
              }); */
          })

      })
      .catch(e => console.log(e));

    
    /* let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.Fileess   = fileList[0];


      this.file.resolveLocalFilesystemUrl(this.Fileess)
        .then(entry => {

          console.log(JSON.stringify(entry));
          //alert(JSON.stringify(entry));
          let path = entry.nativeURL.substring(0, entry.nativeURL.lastIndexOf('/'));
          //alert(path);
          //alert(entry.name);
          console.log(path);
          console.log(entry.name);
          this.file.readAsBinaryString(path, entry.name)
            .then(content => {
              console.log(content);
            //  alert(JSON.stringify(content));
            })
            .catch(err => {
              console.log(err);
            //  alert(JSON.stringify(err));
            });
        }) */

    /*   this.file.readAsDataURL(this.Fileess, 'pdf.pdf').then((base64File: string) => {

        console.log("file created " + base64File)

        this.profileImage.push(base64File);

      }).catch(e => {
        console.log("error in reading file " + e)

      }); */
   // }

  /*   let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      
      this.fd = new FormData();


      let options: FileUploadOptions = {
        fileKey: 'file',
        fileName: 'name.pdf'
    
  };

      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.upload(file.webkitRelativePath, 'http://beta.aniparti.com/files/', options)
        .then((data) => {
          // success
          console.log('Sucess');
        }, (err) => {
          // error
          console.log('Error');
        }) */
      // JUST APPEND EVERY OTHER DATA THAT YOU WANT IT TO COME WITH THE
      //CHOOSEN FILE, LIKE NAME,PH NO ETC
  /*     "Reply": "hello",
        "Title": "HWat is is ",
          "UpDay": "2018-02-12",
            "AttachFile": ["data:application/xlsx;base64,<--base64 string-->", "data:image/jpeg;base64,<--base64 string-->"] */


      /* this.fd.append("Reply", "hello");
      this.fd.append("Title", "HWat is is ");
      this.fd.append("UpDay", "2018-02-07");
      this.fd.append("AttachFile", [file]);


      //BELOW IS THE CODE FOR SENDING THAT FILE TO YOUR CUSTOM SERVER
      var xhr = new XMLHttpRequest();

      //self.progressDialog.presentLoading();
      xhr.open('POST', 'http://chainayena.net/revo/api/revo-message-reply', true);


      xhr.onload = function () {


        if (xhr.status == 200) {
          //self.progressDialog.dismissLoading();

          var resp = JSON.parse(xhr.response);
          console.log('Server got: ', resp);
          console.log('Server got: ', resp.message);

          if (resp.success == 1) {
            console.log("THIS IS SUCCESS")
          }
          else {

           // self.showalert.presentAlert("Error", resp.message)
           // self.progressDialog.dismissLoading();
            return
          }

        };
      }


      xhr.send(this.fd); */
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
    //}
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
     // this.profileImage = 'data:image/jpeg;base64,' + imageData;
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

  messageMain()
  {
    this.navCtrl.setRoot(MessageMainPage);
  }

 /*  openFile(): void {
    this.fileChooser.open()
      .then(uri => {
        this.file.resolveLocalFilesystemUrl(uri)
          .then(entry => {
            alert(JSON.stringify(entry));
            let path = entry.nativeURL.substring(0, entry.nativeURL.lastIndexOf('/'));
            alert(path);
            alert(entry.name);
            this.file.readAsDataURL(path, entry.name)
              .then(content => {
                console.log(content);
                alert(JSON.stringify(content));
              })
              .catch(err => {
                console.log(err);
                alert(JSON.stringify(err));
              });
          })

      })
      .catch(e => console.log(e));
  } */

}
