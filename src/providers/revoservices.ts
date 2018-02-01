import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AppPreferences } from '@ionic-native/app-preferences';
import { Storage } from '@ionic/storage';

import * as xml2js from 'xml2js';
 
 
@Injectable()
export class RevoService {

  /*
  EmployeeID": 5,
        "EmailAddress": "ryouellc@tuttocitta.it",
        "FirstName": "Rosemaria",
        "LastName": "Youell",
        "ProfilePicture": "http://chainayena.net/revo/public/uploads/employee/Employee-JQw1h-1516426931.png",
        "ContactNumber": "22-903-9543",
        "CompanyID": 2,
        "CompanyName": "Kalsoft",
        "CompanyLogo": "http://chainayena.net/revo/public/uploads/no_image.png",
        "DepartmentID": 6,
        "DepartmentName": "Information Technology",
        "StoreID": 22,
        "StoreName": "Team A",
        "SessionID": "mfND51517066373",*/
  loading: any;
  session: any = null;
  sessionData: any = null;
  EmployeeID: any = null;
  CompanyID: any = null;
  SesssionID: any = null;
  Logo: any = null;
  Slide1: any = null;
  Slide2: any = null;
  Slide3: any = null;
  
  constructor(public http: HttpClient, public appPreferences: AppPreferences, public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,public storage: Storage) {}

public login(credentials) {


    return new Promise((resolve, reject) => {
        let headers = new HttpHeaders();
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.set('Accept','application/json');
         headers.set('Content-Type', 'application/json');
        headers.set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13');
        /*
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',*/
			
      let postParams = {
      EmailAddress: 'ryouellc@tuttocitta.it',
      Password: 'rose123'
    }
    console.log("data to be send to service : "+ credentials);
    this.appPreferences.store('token','e662c46b5bef24a96c3128e25f43beaa05e3bd13');
this.http.post("http://chainayena.net/revo/api/revo-employee-login",  credentials, { headers: new HttpHeaders().set('Content-Type','application/json').set('token','e662c46b5bef24a96c3128e25f43beaa05e3bd13') })
          .subscribe(res => {
           console.log("data : "+ res);
            resolve(res);
          }, (err) => {
          console.log("error "+ err);
            reject(err);
          });
    });

     /*   this.http.post("http://chainayena.net/revo/api/revo-employee-login",  postParams, { headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT').set('Accept','application/json').set('Content-Type','application/json').set('token','e662c46b5bef24a96c3128e25f43beaa05e3bd13') })
          .subscribe(res => {
           console.log("data : "+ res);
            resolve(res);
          }, (err) => {
          console.log("error "+ err);
            reject(err);
          });
    });
	
*/
  }
  

  public profile(alldata)
  {
    let personList = [];
    return new Promise((resolve, reject) => {
    /*
      this.appPreferences.fetch("SessionID").then((res) => { 
        console.log(res); 
        personList.push(res);
      });
      this.appPreferences.fetch("CompanyID").then((res) => { console.log(res);
        personList.push(res);
      });

      this.appPreferences.fetch("token").then((res) => { console.log(res);
        personList.push(res);
      });
      let headers = new HttpHeaders();
        headers.set('sessionid', alldata.SessionID);
        headers.set('employeeid', alldata.EmployeeID);
        headers.set('companyid',alldata.CompanyID);
         headers.set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13');
         headers.set('Content-Type','application/json');

      */

      
      
  console.log("data to be send to service : "+alldata);
  
this.http.get("http://chainayena.net/revo/api/revo-emp-mypage-profile",
  { headers: new HttpHeaders().set('Content-Type', 'application/json')
    .set('sessionid', this.SesssionID.toString())
    .set('employeeid', this.EmployeeID.toString())
    .set('companyid', this.CompanyID.toString())
  .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13') })
        .subscribe(res => {
         console.log("data : "+ res);
          resolve(res);
        }, (err) => {
        console.log("error "+ err);
          reject(err);
        });
  });
  }

  public coinsent(alldata)
  {
    
    return new Promise((resolve, reject) => {
  
     console.log("data to be send to service : " + alldata);
      this.http.get("http://chainayena.net/revo/api/revo-emp-mypage-isent",
        { headers: new HttpHeaders().set('Content-Type', 'application/json')
          .set('sessionid', this.SesssionID.toString())
          .set('employeeid', this.EmployeeID.toString())
          .set('companyid', this.CompanyID.toString())
        .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13') })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }

  public coinreceived(alldata) {

    return new Promise((resolve, reject) => {

    console.log("data to be send to service : " + alldata);
      this.http.get("http://chainayena.net/revo/api/revo-emp-mypage-igot",
        { headers: new HttpHeaders().set('Content-Type', 'application/json')
          .set('sessionid', this.SesssionID.toString())
          .set('employeeid', this.EmployeeID.toString())
          .set('companyid', this.CompanyID.toString())
        .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13') })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }

  public coinemptimelime(Cuurentpage,PerPage) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : " + Cuurentpage);
      this.http.get("http://chainayena.net/revo/api/revo-emp-coin-timeline?PageID=" + Cuurentpage + "&PageSize=" +PerPage,
        { headers: new HttpHeaders().set('Content-Type', 'application/json')
          .set('sessionid', this.SesssionID.toString())
          .set('employeeid', this.EmployeeID.toString())
          .set('companyid', this.CompanyID.toString())
        .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13') })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }

  public commentedit(alldata,comment) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : " + alldata);
      this.http.post("http://chainayena.net/revo/api/revo-mypage-isent-comment-edit", comment,
        { headers: new HttpHeaders().set('Content-Type', 'application/json')
          .set('sessionid', this.SesssionID.toString())
          .set('employeeid', this.EmployeeID.toString())
          .set('companyid', this.CompanyID.toString())
        .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13') })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }
  
  public setProfile(alldata,profile) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : " + alldata);
      this.http.post("http://chainayena.net/revo/api/revo-emp-update-profile", profile,
        { headers: new HttpHeaders().set('Content-Type', 'application/json')
          .set('sessionid', this.SesssionID.toString())
          .set('employeeid', this.EmployeeID.toString())
          .set('companyid', this.CompanyID.toString())
        .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13') })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }
 
   public getDashboard() {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : " );
      console.log(this.SesssionID)
      console.log(this.EmployeeID)
      console.log(this.CompanyID)
      this.http.get("http://chainayena.net/revo/api/revo-emp-dashboard",
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data dash : success " + res);
          resolve(res);
        }, (err) => {
          console.log("data dash error " + err);
          reject(err);
        });
    });
  }

  public coinintroduction() {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : " );
      this.http.get("http://chainayena.net/revo/api/revo-emp-coin-intro?PageID=1&PageSize=8",
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }

  public coinsdetails(coinsdata) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : " + coinsdata);
      this.http.post("http://chainayena.net/revo/api/revo-emp-coin-description", coinsdata,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }


  public coinsendsearch() {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : " );
      this.http.get("http://chainayena.net/revo/api/revo-search-employee-default",
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }

  public dailyNewsMsgReceived(alldata) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : " + alldata);
      this.http.get("http://chainayena.net/revo/api/revo-news-received?PageID=1&PageSize=1",
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }

  public dailyNewsMsgDetails(alldata, msgId) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : " + alldata);
      this.http.post("http://chainayena.net/revo/api/revo-news-message", msgId,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }


  public contactBookReceivedMessage(Cuurentpage, PerPage) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : " );
      this.http.get("http://chainayena.net/revo/api/revo-contact-book-received?PageID=" + Cuurentpage + "&PageSize=" + PerPage,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }
  public contactBookSavedMessage(Cuurentpage, PerPage) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : ");
      this.http.get("http://chainayena.net/revo/api/revo-contact-book-saved?PageID=" + Cuurentpage + "&PageSize=" + PerPage,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }

  public contactBookSentMessage(Cuurentpage, PerPage) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : ");
      this.http.get("http://chainayena.net/revo/api/revo-contact-book-sent?PageID=" + Cuurentpage + "&PageSize=" + PerPage,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }

  public NewMessageReceived(Cuurentpage, PerPage) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : ");
      this.http.get("http://chainayena.net/revo/api/revo-news-received?PageID=" + Cuurentpage + "&PageSize=" + PerPage,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }

  public NewMessageSent(Cuurentpage, PerPage) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : ");
      this.http.get("http://chainayena.net/revo/api/revo-news-sent?PageID=" + Cuurentpage + "&PageSize=" + PerPage,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }

  public NewMessageSaved(Cuurentpage, PerPage) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : ");
      this.http.get("http://chainayena.net/revo/api/revo-news-saved?PageID=" + Cuurentpage + "&PageSize=" + PerPage,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }
  public otherprofile(alldata) {
    

    let postParams = {
      EmployeeID: alldata
    }

    return new Promise((resolve, reject) => {
     
      console.log("data to be send to service : " + alldata);

      this.http.post("http://chainayena.net/revo/api/revo-emp-coin-timeline-profile", postParams,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }


  public coinLike(coinId) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : " + coinId);
      this.http.post("http://chainayena.net/revo/api/revo-emp-coin-timeline-like", coinId,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }

  public contactBookMessage(messageId) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : ");
      this.http.post("http://chainayena.net/revo/api/revo-contact-book-message", messageId,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }

  public contactBookCommentSend(commentData) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : ");
      this.http.post("http://chainayena.net/revo/api/revo-contact-book-message-comment", commentData,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }

  public contactBookMessageSeenList(commentData,Cuurentpage, PerPage) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : ");
      this.http.post("http://chainayena.net/revo/api/revo-contact-book-message-seen?PageID=" + Cuurentpage + "&PageSize=" + PerPage, commentData,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }


  public contactBookCommentUpdate(commentData) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : ");
      this.http.post("http://chainayena.net/revo/api/revo-contact-book-message-edit-comment", commentData,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }

  public employeeCoinSend(commentData) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : ");
      this.http.post("http://chainayena.net/revo/api/revo-emp-coin-send", commentData,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }


  public messageDefault() {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : ");
      this.http.get("http://chainayena.net/revo/api/revo-message-default",
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }

  public messageByDay(Date) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : ");
      this.http.post("http://chainayena.net/revo/api/revo-message-day", Date,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }

  public messageDetail(messageId) {

    return new Promise((resolve, reject) => {

      console.log("data to be send to service : ");
      this.http.post("http://chainayena.net/revo/api/revo-message-detail", messageId,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('sessionid', this.SesssionID.toString())
            .set('employeeid', this.EmployeeID.toString())
            .set('companyid', this.CompanyID.toString())
            .set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13')
        })
        .subscribe(res => {
          console.log("data : " + res);
          resolve(res);
        }, (err) => {
          console.log("error " + err);
          reject(err);
        });
    });
  }


  setSession(session)
  {
    
    this.storage.set('EmployeeID', session.EmployeeID.toString());
    this.storage.set('EmailAddress', session.EmailAddress.toString());
    this.storage.set('FirstName', session.FirstName.toString());
    this.storage.set('LastName', session.LastName.toString());
    this.storage.set('ProfilePicture', session.ProfilePicture.toString());
    this.storage.set('ContactNumber', session.ContactNumber.toString());
    this.storage.set('CompanyID', session.CompanyID.toString());
    this.storage.set('CompanyName', session.CompanyName.toString());
    this.storage.set('DepartmentID', session.DepartmentID.toString());
    this.storage.set('StoreID', session.StoreID.toString());
    this.storage.set('SessionID', session.SessionID.toString());
    this.storage.set('Role', session.Role.toString());
    this.session = session;
    console.log("session set");
  }
  removeSession()
  {
    this.storage.clear();
    this.session = null;
  }
  checkSession()
  {
   

    return new Promise((resolve, reject) => {

    this.storage.get('SessionID').then((val) => {
      console.log('Your SessionID is', val);
      this.SesssionID = val;
      resolve(val);
      
      }), (err) => {
        this.SesssionID = null;
        reject(err);
     // this.sessionData = nullreject(err);
      }
   // return this.storage.get("SessionID");
    //return this.session;
  
    });
  }

  setLogo(session) {

    this.storage.set('Logo', session);
    
    console.log("logo set");
  }

  getlogo()
  {
    this.storage.get('Logo').then((val) => {
      console.log('Your Logo is', val);
      this.Logo = val;
     // resolve(val);

    }), (err) => {
      this.Logo = null;
     // reject(err);
      // this.sessionData = nullreject(err);
    }
    // return this.storage.get("SessionID");
    //return this.session;

  
    /* let mylogo = this.storage.get('Logo');
    return mylogo; */
  }

  setSlide1(session) {

    this.storage.set('Slider1', session);

    console.log("logo set");
  }

  getSlide1() {
    this.storage.get('Slider1').then((val) => {
      console.log('Your Logo is', val);
      this.Slide1 = val;
      // resolve(val);

    }), (err) => {
      this.Slide1 = null;
      // reject(err);
      // this.sessionData = nullreject(err);
    }
    // return this.storage.get("SessionID");
    //return this.session;


    /* let mylogo = this.storage.get('Logo');
    return mylogo; */
  }
  setSlide2(session) {

    this.storage.set('Slider2', session);

    console.log("logo set");
  }

  getSlide2() {
    this.storage.get('Slider2').then((val) => {
      console.log('Your Logo is', val);
      this.Slide2 = val;
      // resolve(val);

    }), (err) => {
      this.Slide2 = null;
      // reject(err);
      // this.sessionData = nullreject(err);
    }
    // return this.storage.get("SessionID");
    //return this.session;


    /* let mylogo = this.storage.get('Logo');
    return mylogo; */
  }

  setSlide3(session) {

    this.storage.set('Slider3', session);

    console.log("logo set");
  }

  getSlide3() {
    this.storage.get('Slider3').then((val) => {
      console.log('Your Logo is', val);
      this.Slide3 = val;
      // resolve(val);

    }), (err) => {
      this.Slide3 = null;
      // reject(err);
      // this.sessionData = nullreject(err);
    }
    // return this.storage.get("SessionID");
    //return this.session;


    /* let mylogo = this.storage.get('Logo');
    return mylogo; */
  }

  checkEmployeeId() {


    return new Promise((resolve, reject) => {

      this.storage.get('EmployeeID').then((val) => {
        console.log('Your EmployeeID is'+ val);
        this.EmployeeID = val;
        resolve(val);
        //
      }), (err) => {
        this.EmployeeID = null;
        console.log('Your EmployeeID err' + err);
        reject(err);
        // this.sessionData = nullreject(err);
      }
      // return this.storage.get("SessionID");
      //return this.session;

    });
  }

  checkCompanyId() {


    return new Promise((resolve, reject) => {

      this.storage.get('CompanyID').then((val) => {
        console.log('Your CompanyID is'+ val);
        this.CompanyID = val;
        resolve(val);
        //
      }), (err) => {
        this.CompanyID = null;
        console.log('Your CompanyID err' + err);
        reject(err);
        // this.sessionData = nullreject(err);
      }
      // return this.storage.get("SessionID");
      //return this.session;

    });
  }


  showLoader(textToShow) {
    this.loading = this.loadingCtrl.create({
      content: textToShow
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
