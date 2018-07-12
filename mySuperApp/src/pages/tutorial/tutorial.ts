import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {SignupPage} from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  constructor(public navCtrl: NavController) { }
  slider = [
     {
       image:"assets/imgs/s1.png"
     },
     {
       image:"assets/imgs/s2.png"
     },
     {
      image:"assets/imgs/s3.png"
    },
    {
      image:"assets/imgs/s4.png"
    },
    {
      image:"assets/imgs/s5.png"
    },
    {
      image:"assets/imgs/s51.png"
    },
    {
      image:"assets/imgs/s6.png"
    }
  ];

  login() {
    this.navCtrl.push(LoginPage);
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }
}
