import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
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
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
