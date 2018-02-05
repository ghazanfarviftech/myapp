import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RevoService } from "../../providers/revoservices";
import { HomePage } from '../home/home';
import { DashboardPage } from "../dashboard/dashboard";
/**
 * Generated class for the WriteDailyNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-write-daily-news',
  templateUrl: 'write-daily-news.html',
})
export class WriteDailyNewsPage {

  response: any;
  overallresponseData: Array<Object>;
  overallData: any;
  ContactBook: any;
  DailyNews: any;
  CompanyID: any;
  CompanyName: any;
  Department: Array<any>;
  Employees: Array<any>;
  DepartmentStores: Array<any>;
  Logos: any;
  comment: any = '';
  selectedEmpArray: Array<any>;

  filterEmployee: Array<any> = [];
  SelectedStore: Array<any> = [];
  SelectedEmployee: Array<any> = [];
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: RevoService) {
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
        this.selectedEmpArray = [];
        /* if (this.authService.getlogo() != null) {
          //this.Logos = this.authService.Logo;
          setTimeout(() => {

            this.Logos = this.authService.Logo;

          }, 1000);
        } */
        //this.alldata = navParams.get('param1');
        // this.navCtrl.setRoot(DashboardPage);
      }
    }, (err) => {
      this.authService.presentToast("Something went wrong");
      this.navCtrl.setRoot(HomePage);
    });
  }

  ionViewWillEnter() {
    this.authService.showLoader("Loading ...");
    this.authService.coinsendsearch().then((result) => {
      this.response = result;

      var my = JSON.stringify(this.response);
      console.log("response :" + my);
      var dataoverall = JSON.parse(my);
      if (dataoverall.success) {
        this.overallresponseData = dataoverall.responseData;
        this.overallData = this.overallresponseData[0];
        this.CompanyID = this.overallData.CompanyID;
        this.CompanyName = this.overallData.CompanyName;
 

        /*
        this.ContactBook = this.overallData.ContactBook;
        this.DailyNews = this.overallData.DailyNews;
        this.Messages = this.overallData.Messages;*/

        this.Department = this.overallData.Department;
        this.DepartmentStores = [];
        for (let i = 0; i < this.Department.length; i++) {
          //.DepartmentStore
          this.DepartmentStores.push(this.Department[i].DepartmentStore);
        }
        this.Employees = this.overallData.Employees;

        this.authService.dismissLoading();
      } else {
        this.authService.dismissLoading();
        this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
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

      }else {
        this.navCtrl.setRoot(DashboardPage);
        this.authService.presentToast("Something went wrong");
        console.log("errrorr " + err.status);
      }

    });

    console.log('ionViewDidLoad CoinSentPage');

  }

  sendDailyNewsToSelected() {
    /*{
"Title":"Meeting at 10",
"Description":"Meeting to understand jeera software",
"EmployeeID":[13,15,16]
}
 */
    if (this.comment.trim().length == 0 || this.comment.trim() == '') {

      this.authService.presentToast("Fill the comment or Text Limit Reached");
    } else {


      let MessageData = {
        "Title": "Meeting at 10",
        "Description": this.comment,
        "EmployeeID": this.SelectedEmployee,
        "AttachFile": []
      };
      this.authService.showLoader("Loading ...");
      this.authService.dailyNewsMessageSendSelected(MessageData).then((result) => {
        this.response = result;

        var my = JSON.stringify(this.response);
        console.log("response :" + my);
        var dataoverall = JSON.parse(my);
        if (dataoverall.success) {

          this.authService.presentToast("Message Send Successfully");
         /*  this.overallresponseData = dataoverall.responseData;
          this.overallData = this.overallresponseData[0];
          this.CompanyID = this.overallData.CompanyID;
          this.CompanyName = this.overallData.CompanyName; */


          /*
          this.ContactBook = this.overallData.ContactBook;
          this.DailyNews = this.overallData.DailyNews;
          this.Messages = this.overallData.Messages;
           this.Department = this.overallData.Department;
          this.DepartmentStores = [];
          for (let i = 0; i < this.Department.length; i++) {
            //.DepartmentStore
            this.DepartmentStores.push(this.Department[i].DepartmentStore);
          }
          */

         
          //this.Employees = this.overallData.Employees;

          this.authService.dismissLoading();
        } else {
          this.authService.dismissLoading();
         // this.navCtrl.setRoot(DashboardPage);
          this.authService.presentToast(dataoverall.message);
          //this.authService.presentToast("Something went wrong");
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

        }else {
          this.navCtrl.setRoot(DashboardPage);
          this.authService.presentToast("Something went wrong");
          console.log("errrorr " + err.status);
        }

      });
    }
  }
  
  
  setStoreValues(dept) {
    this.SelectedStore = this.DepartmentStores.filter(store => store.DepartmentID == dept.DepartmentID);
    console.log("------filter store", this.DepartmentStores);
  }
  filterEmployees(sStore) {
    this.filterEmployee = this.Employees.filter(employee => employee.StoreID == sStore.StoreID);

    console.log("------filter store", this.Employees);
  }

  selectEmployee(selectedEmp) {
    let imgEl: HTMLElement = document.getElementById('icon-image-' + selectedEmp);
    if (this.SelectedEmployee.some(x => x === selectedEmp)) {
      this.SelectedEmployee.splice(this.SelectedEmployee.indexOf(selectedEmp), 1);
      (<HTMLImageElement>document.getElementById("icon-image-" + selectedEmp)).src = "assets/check.png";
    } else {
      this.SelectedEmployee.push(selectedEmp);
      (<HTMLImageElement>document.getElementById("icon-image-" + selectedEmp)).src = "assets/checkPink.png";
      // imgEl.src = "assets/checkPink.png";
    }


    console.log(this.SelectedEmployee)

  }

  getItems(ev: any) {


    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {


      this.filterEmployee = this.Employees.filter(employee => employee.EmployeeName.toLowerCase().indexOf(val.toLowerCase()) > -1);


    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WriteDailyNewsPage');
  }

  back() {
    this.navCtrl.pop();
  }
}
