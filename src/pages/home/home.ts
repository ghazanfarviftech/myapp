import { Component } from '@angular/core';
import { NavController,MenuController,Platform } from 'ionic-angular';
import { DashboardPage } from "../dashboard/dashboard";
import {TranslateService} from '@ngx-translate/core';
import { LanguageService } from "../../providers/language.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(platform: Platform,public navCtrl: NavController,public menuCtrl:MenuController,public translate: TranslateService,public languageService: LanguageService) {

   let defaultLanguage = translate.getDefaultLang();

      this.setLanguage();

    // translate.setDefaultLang('de');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    //translate.use('de');


  }

  dashboard(){
    this.navCtrl.push(DashboardPage);
  }

setLanguage(){
    let defaultLanguage = this.translate.getDefaultLang();
   
      //this.languageSelected = defaultLanguage;
      this.translate.use(defaultLanguage);
    
  }
}
