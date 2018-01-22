import { Component } from '@angular/core';
import { NavController,MenuController,Platform } from 'ionic-angular';
import { DashboardPage } from "../dashboard/dashboard";
import {TranslateService} from '@ngx-translate/core';
import { LanguageService } from "../../providers/language.service";
import { RevoService } from "../../providers/revoservices";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any;
  mydata: any;
  loginData = { username:'', password:'' };
  response : any;
  constructor(platform: Platform,public navCtrl: NavController,public menuCtrl:MenuController,public translate: TranslateService,public languageService: LanguageService,public authService: RevoService) {

   let defaultLanguage = translate.getDefaultLang();

      this.setLanguage();

    // translate.setDefaultLang('de');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    //translate.use('de');


  }

  dashboard(){
console.log("wow");
   

/*
   this.authService.login(this.loginData).then((result) => {
     // this.loading.dismiss();
      this.data = result;
   var my= JSON.stringify(this.data);//this.data[0];//Object.values(this.data)
  //this.mydata = my.replace("}", "").split(":")[1].split("~");


this.response = my;
  console.log("json data agaya : " +my);
     // this.appPrefence.store("empid", this.mydata[0]);
    //this.appPrefence.store("hrchy", this.mydata[2]);
    //this.appPrefence.store("username", this.mydata[3]);
    
    //localStorage.setItem('token', this.data.access_token);
     // this.navCtrl.setRoot(PharmaHome);
    }, (err) => {
      //this.loading.dismiss();
      //this.presentToast(err);

this.response = err;
      console.log("errrorrr agayayaayayayaya " + err);
    });

    */
    
    this.navCtrl.push(DashboardPage);
  }

setLanguage(){
    let defaultLanguage = this.translate.getDefaultLang();
   
      //this.languageSelected = defaultLanguage;
      this.translate.use(defaultLanguage);
    
  }
}
