import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import {LoginPage} from '../login/login';
import { ErrorHandler, NgModule } from '@angular/core';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  username:String;
  phno: String;
  email:String;
  password:String;
  conpassword:String

  // sure to add it to the type
  account: { username: string, email: string, password: string, phno: string } = {
    username: '',
    email: '',
    password: '',
    phno: ''
  };
  temp:{ conpassword: string} = {
    conpassword: ''
  };
  msg: string ="";
  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public http:Http) {

   /* this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })*/
  }

  validate():boolean{
    if(this.account.username==""||this.account.email==""||this.account.password==""||this.account.phno=="")
    {
      this.msg = "All fields Required";
      return false;
    }
    else if(!this.validateEmail(this.account.email))
    {
      this.msg = "invalid e-mail";
      return false;
    }
    else if(this.account.password.length<8)
    {
      this.msg = "password should be 8 characters in length.";
      return false;
    }
    else if(this.account.password!=this.temp.conpassword){
      this.msg = "password does not matched";
      return false;
    }
    else if(this.account.phno.length<10||!this.validateFeedback(this.account.phno)){
      this.msg = "invalid phone number.";
    return false;
    }
    else 
    return true;
  }
  validateFeedback(number) {
    var phno = number;
    var validNumber = "0123456789.-";
    for (var i = 0; i < phno.length; i++); {
        if (validNumber.indexOf(phno.charAt(i)) == -1) {
            return false;
        }
    }
    return true;
}

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  doSignup() {
    if(this.validate()){
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(LoginPage);
    }, (err) => {

      this.navCtrl.push(LoginPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 1000,
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
  checkName() {
    let data = {
      username: this.account.username,
      email: this.account.email,
      phno: this.account.phno,
      password: this.account.password,
      conpassword: this.temp.conpassword
    };
    console.log(data);

    this.http.post('http://localhost:3000/users/register', data).pipe(
        map(res => res.json())
    ).subscribe(response => {
        //console.log('POST Response:', response);
       // this.showToast('POST Response:', response.msg);
    });
    //this.http.get('http://localhost:3000/users/getallusers').pipe(
      //  map(res => res.json())
    //).subscribe(response => {
      //  console.log('GET Response:', JSON.stringify(response));
        //this.showToast('GET Response:', JSON.stringify(response));
    //});

    // this.http.get('http://localhost:3000/todos_get/' + this.name).pipe(
    //     map(res => res.json())
    // ).subscribe(response => {
    //     //console.log('GET Response:', response);
    //     this.showToast('GET Response:', response.reslt);
    // });

}
private showToast(message: string,res:Object) {
let toast = this.toastCtrl.create({
  message: message + res,
  duration: 10000
});
toast.present();
}

}