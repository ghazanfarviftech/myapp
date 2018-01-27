import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { RevoService } from "../../providers/revoservices";
/**
 * Generated class for the CommentEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-comment-edit',
  templateUrl: 'comment-edit.html',
})
export class CommentEditPage {
  alldata: any;
  comment: any;
  response: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: RevoService, public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
    this.alldata = navParams.get('alldata');
    this.comment = navParams.get('comment');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentEditPage');
  }

  cancel()
  {
  this.navCtrl.pop();
  }


  update(comment)
  {
    this.authService.commentedit(this.alldata, comment).then((result) => {
    this.response = result;

    var my = JSON.stringify(this.response);
    console.log("response :" + my);
    var dataoverall = JSON.parse(my);
    if (dataoverall.success) {

    /*   this.EmployeeNames = dataoverall.responseData[0].EmployeeName;
      this.ProfileImage = dataoverall.responseData[0].ProfilePicture;
      this.DepartmentName = dataoverall.responseData[0].DepartmentName;
      this.Catchpharase = dataoverall.responseData[0].Catchpharase;
      this.Goal = dataoverall.responseData[0].Goal;
      this.CompanyName = dataoverall.responseData[0].CompanyName;
      this.StoreName = dataoverall.responseData[0].StoreName;
      this.ContactBook = dataoverall.responseData[0].ContactBook;
      this.DailyNews = dataoverall.responseData[0].DailyNews;
      this.Igot = dataoverall.responseData[0].Igot;
      this.Rigot = dataoverall.responseData[0].Rigot;
      this.Isent = dataoverall.responseData[0].Isent;
      this.Igotsc = dataoverall.responseData[0].Igotsc;
      this.Isentsc = dataoverall.responseData[0].Isentsc;
      this.Risent = dataoverall.responseData[0].Risent;
      this.Rigotsc = dataoverall.responseData[0].Rigotsc;
      this.RIsentsc = dataoverall.responseData[0].RIsentsc; */
    } else {

    }
  }, (err) => {
    // this.loading.dismiss();
    // this.presentToast(err);
    //this.response = err;
    console.log("errrorr " + err);
  });
  this.navCtrl.pop();
  }
}
