import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { RevoService } from "../../providers/revoservices";
import { HomePage } from '../home/home';
import { DashboardPage } from "../dashboard/dashboard";
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
  commentData = { Comment: '', GivenCoinID: '' };
  commentId: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: RevoService, public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
    this.authService.checkSession().then((result) => {
      if (result == null) {
        this.authService.presentToast("Not Authorized Kindly Login");
        this.navCtrl.setRoot(HomePage);
      } else {
        this.authService.checkCompanyId();
        this.authService.checkEmployeeId();
        this.comment = navParams.get('comment');
        this.commentData = { Comment: this.comment.Comment, GivenCoinID: this.comment.GivenCoinID};
        //this.commentId = this.comment;
        this.alldata = navParams.get('alldata');
        
        // this.navCtrl.setRoot(DashboardPage);
      }
    }, (err) => {
      this.authService.presentToast("Something went wrong");
      this.navCtrl.setRoot(HomePage);
    });
    
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
    if (comment.Comment.trim().length == 0 || comment.Comment.trim() == '')
    {
      this.authService.presentToast("Fill the comment or Text Limit Reached");
    }else{

      this.authService.showLoader("Updating Comment ...");
    this.authService.commentedit(this.alldata, comment).then((result) => {
    this.response = result;

    var my = JSON.stringify(this.response);
    console.log("response :" + my);
    var dataoverall = JSON.parse(my);
    if (dataoverall.success) {

      this.authService.presentToast("Updated Successfully");
      this.navCtrl.pop();
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
      this.authService.loading.dismiss();
    } else {
      this.authService.loading.dismiss();
      this.navCtrl.setRoot(DashboardPage);
      this.authService.presentToast("Something went wrong");
    }
      
  }, (err) => {
    this.authService.loading.dismiss();
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
}
}
