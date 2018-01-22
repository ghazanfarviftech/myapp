import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

import * as xml2js from 'xml2js';
 
 
let apiUrl = 'http://203.92.5.36/ICIAnimalHealth/WebService/app_login.asmx/';
let apiUrl2 = 'http://203.92.5.36/ICIAHMobileService/SchdulerDayView.asmx/';

 
@Injectable()
export class RevoService {
 // currentUser: User;
 constructor(public http: HttpClient) {}

public login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        headers.set('token', 'e662c46b5bef24a96c3128e25f43beaa05e3bd13');
			
      let postParams = {
      EmailAddress: 'ryouellc@tuttocitta.it',
      Password: 'rose123'
    }

        this.http.post("http://chainayena.net/revo/api/revo-employee-login",  postParams, { headers: new HttpHeaders().set('Content-Type','application/json').set('token','e662c46b5bef24a96c3128e25f43beaa05e3bd13') })
          .subscribe(res => {
           console.log("data agaya hit hogai service "+ res);
            resolve(res);
          }, (err) => {
          console.log("error arya hai yaaarrr "+ err);
            reject(err);
          });
    });
	

  }
  
  
}