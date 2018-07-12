import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NgCalendarModule  } from 'ionic2-calendar';
import { Items } from '../mocks/providers/items';
import { Settings, User, Api } from '../providers';
import { MyApp } from './app.component';
import {TodoServiceProvider} from '../providers/todo-service/todo-service';
import {AppSettingsProvider} from '../providers/app-settings/app-settings';
import {HttpModule} from '@angular/http';
import {ListMasterPage} from '../pages/list-master/list-master';
import {TabsPage} from '../pages/tabs/tabs';
import {SearchPage} from '../pages/search/search';
import {SignupPage} from '../pages/signup/signup';
import {SettingsPage} from '../pages/settings/settings';
import {LoginPage} from '../pages/login/login';


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    ListMasterPage,
    TabsPage,
    SearchPage,
    SignupPage,
    TabsPage,
    SettingsPage,
    LoginPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NgCalendarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListMasterPage,
    TabsPage,
    SearchPage,
    SignupPage,
    SettingsPage,
    LoginPage
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    TodoServiceProvider,
    AppSettingsProvider,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
    
  ]
})
export class AppModule { }
