import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule,IonicPageModule  } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from "../pages/dashboard/dashboard";
import { ProfilePage } from "../pages/mypageprofile/profile";
import { CoinSentPage } from "../pages/coin-sent/coin-sent";
import { CommentEditPage } from "../pages/comment-edit/comment-edit";
import { ManagementPage } from "../pages/management/management";
import { CoinTimelinePage } from "../pages/coin-timeline/coin-timeline";

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

import { LanguageService } from '../providers/language.service';

import { Globalization } from '@ionic-native/globalization';
import { RevoService } from '../providers/revoservices';
import { HttpModule } from '@angular/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    ProfilePage,
    CoinSentPage,
    CommentEditPage,
    ManagementPage,
    CoinTimelinePage
  ],
  imports: [
  IonicPageModule.forChild(HomePage),
    TranslateModule.forChild(),
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    HomePage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    ProfilePage,
    CoinSentPage,
    CommentEditPage,
    ManagementPage,
    CoinTimelinePage
  ],
  providers: [
  LanguageService,
    StatusBar,
    SplashScreen,
    HttpClientModule,
    Globalization,
    HttpModule,
    RevoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
