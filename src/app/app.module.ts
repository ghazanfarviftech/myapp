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
    UserProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    TranslateModule.forChild(),
    BrowserModule,
    HttpClientModule,
    ChartsModule,
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
    UserProfilePage
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
