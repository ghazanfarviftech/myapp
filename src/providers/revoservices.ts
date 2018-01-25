import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AppPreferences } from '@ionic-native/app-preferences';


import * as xml2js from 'xml2js';
 
 
let apiUrl = 'http://203.92.5.36/ICIAnimalHealth/WebService/app_login.asmx/';
let apiUrl2 = 'http://203.92.5.36/ICIAHMobileService/SchdulerDayView.asmx/';

 
@Injectable()
export class RevoService {
 // currentUser: User;
 constructor(public http: HttpClient,public appPreferences: AppPreferences) {}

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
      */

      let headers = new HttpHeaders();
        headers.set('sessionid', alldata.SessionID);
        headers.set('employeeid', alldata.EmployeeID);
        headers.set('companyid',alldata.CompanyID);
         headers.set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13');
         headers.set('Content-Type','application/json');
       // headers.set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13');
/*.set('sessionid',alldata.SessionID)
  .set('employeeid',alldata.EmployeeID)
  .set('companyid',alldata.CompanyID)
  .set('token','e662c46b5bef24a96c3128e25f43beaa05e3bd13') */

  console.log("data to be send to service : "+alldata);
this.http.get("http://chainayena.net/revo/api/revo-emp-mypage-profile",
 { headers: headers })
        .subscribe(res => {
         console.log("data : "+ res);
          resolve(res);
        }, (err) => {
        console.log("error "+ err);
          reject(err);
        });
  });
  }
  
}