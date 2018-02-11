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
import { ForgetPasswordPage } from "../pages/forget-password/forget-password";
import { MessageMainPage } from "../pages/message-main/message-main";
import { MsgDetailedPage } from "../pages/msg-detailed/msg-detailed";
import { MsgWritePage } from "../pages/msg-write/msg-write";
import { RankingPage } from "../pages/ranking/ranking";
import { SeenPeoplePage } from "../pages/seen-people/seen-people";
import { SeenPeopleMsgPage } from "../pages/seen-people-msg/seen-people-msg";
import { WriteDailyNewsPage } from "../pages/write-daily-news/write-daily-news";
import { WriteContactPage } from "../pages/write-contact/write-contact";
import { CoinsintroductionPage } from "../pages/coinsintroduction/coinsintroduction";
import { CoinSendPage } from "../pages/coin-send/coin-send";
import { CoinSelectPage } from "../pages/coin-select/coin-select";
import { ContactNotesPage } from "../pages/contact-notes-received/contact-notes";
import { ContactNotesSavedPage } from "../pages/contact-notes-saved/contact-notes-saved";
import { ContactNotesSentPage } from "../pages/contact-notes-sent/contact-notes-sent";
import { ContactMsgDetailsPage } from "../pages/contact-msg-details/contact-msg-details";
import { DailyNewsReceptBoxPage } from "../pages/daily-news-recept-box/daily-news-recept-box";
import { DailyNewsSaveBoxPage } from "../pages/daily-news-save-box/daily-news-save-box";
import { DailyNewsSentBoxPage } from "../pages/daily-news-sent-box/daily-news-sent-box";
import { DailyNewsMsgDetailsPage } from "../pages/daily-news-msg-details/daily-news-msg-details";
import { ProfileSettingsPage } from "../pages/profile-settings/profile-settings";
import { CoinReceivedPage } from "../pages/coin-received/coin-received";
import { UserProfilePage } from "../pages/user-profile/user-profile";

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LanguageService } from '../providers/language.service';
import { Globalization } from '@ionic-native/globalization';
import { ChartsModule } from 'ng2-charts';
import { AppPreferences } from '@ionic-native/app-preferences';
import { RevoService } from '../providers/revoservices';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { Base64 } from '@ionic-native/base64';

import { FileChooser } from '@ionic-native/file-chooser';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { FTP } from '@ionic-native/ftp';

import { ChartModule } from 'angular2-highcharts';

// Import angular2-fusioncharts
/* import { FusionChartsModule } from 'angular2-fusioncharts'; */

/* import { ChartModule } from 'angular2-highcharts'; */

/* import { base64 } from 'angular-base64-upload'; */


// Import FusionCharts library
/* import * as FusionCharts from 'fusioncharts'; */
// Load FusionCharts Charts module
/* import Charts from "fusioncharts/fusioncharts.charts"; */
// Load themes
/* import themes from "fusioncharts/themes/fusioncharts.theme.fint"; */

declare var require: any;
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
    CoinTimelinePage,
    ForgetPasswordPage,
    MessageMainPage,
    MsgDetailedPage,
    MsgWritePage,
    RankingPage,
    CoinsintroductionPage,
    DailyNewsReceptBoxPage,
    DailyNewsMsgDetailsPage,
    SeenPeoplePage,
    WriteDailyNewsPage,
    ProfileSettingsPage,
    CoinSendPage,
    CoinSelectPage,
    ContactNotesPage,
    ContactNotesSentPage,
    ContactNotesSavedPage,
    WriteContactPage,
    SeenPeopleMsgPage,
    ContactMsgDetailsPage,
    CoinReceivedPage,
    UserProfilePage,
    DailyNewsSaveBoxPage,
    DailyNewsSentBoxPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ChartModule.forRoot(require('highcharts'), require('../../node_modules/highcharts/highcharts-more.js')
      , require('highcharts/modules/exporting.js')),
    TranslateModule.forChild(),
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
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
    CoinTimelinePage,
    ForgetPasswordPage,
    MessageMainPage,
    MsgDetailedPage,
    MsgWritePage,
    RankingPage,
    CoinsintroductionPage,
    DailyNewsReceptBoxPage,
    DailyNewsMsgDetailsPage,
    SeenPeoplePage,
    WriteDailyNewsPage,
    ProfileSettingsPage,
    CoinSendPage,
    CoinSelectPage,
    ContactNotesPage,
    ContactNotesSentPage,
    ContactNotesSavedPage,
    WriteContactPage,
    SeenPeopleMsgPage,
    ContactMsgDetailsPage,
    CoinReceivedPage,
    UserProfilePage,
    DailyNewsSaveBoxPage,
    DailyNewsSentBoxPage
  ],
  providers: [
  LanguageService,
    StatusBar,
    SplashScreen,
    HttpClientModule,
    Globalization,
    RevoService,
    Camera,
    AppPreferences,
    FileChooser,
    FileTransfer,
    FileTransferObject,
    File,
    Base64,
    FTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
