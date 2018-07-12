import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, NavParams,AlertController, } from 'ionic-angular';
import { User } from '../../providers';
import { MainPage } from '../';

import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import {ListMasterPage} from '../list-master/list-master';
import {SignupPage} from '../signup/signup';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  username;
  password;
  account: { username: string, password: string } = {
    username: '',
    password: ''
  };


  // Our translated text strings
  private loginErrorString: string;
  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,public http:Http
  ) {
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }
  msg: string ="";
  validate():boolean{
    if(this.account.username==""  || this.account.password==""){
      this.msg = "All Fields Required";
      return false;
    }
    else
    return true;
  }
  // Attempt to login in through our User service
  doLogin() {
    if(this.validate()){
    this.user.login(this.account).subscribe((resp) => {
      //this.navCtrl.push(MainPage);
    }, (err) => {
      //this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.msg,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }else{
    let toast = this.toastCtrl.create({
      message: this.msg,
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }
  }

// signup() {
//   this.navCtrl.push('SignupPage')
// }
login() {
 
  let data = {
      username: this.account.username,
      password: this.account.password
  };
  localStorage.setItem('id',data.username);
  //console.log(data);

  this.http.post('http://localhost:3000/users/authenticate', data).pipe(
      map(res => res.json())
  ).subscribe(response => {
      //console.log('POST Response:', response);
      //this.showToast('Login Response:', JSON.stringify(response));
      if(response.success==true)
      {
        this.showToast2('Login Success:');
        this.navCtrl.push(TabsPage)
      }
      else{
        this.showToast2('Login Failed:Please Enter Valid Credentials');
        this.navCtrl.push(LoginPage)
      }
  });
}

 sign(){
 this.navCtrl.push(SignupPage);
 }

private showToast(message: string,res:Object) {
let toast = this.toastCtrl.create({
message: message + res,
duration: 1000
});
toast.present();
}
private showToast2(message: string) {
let toast = this.toastCtrl.create({
message: message,
duration: 1000
});
toast.present();
}

}