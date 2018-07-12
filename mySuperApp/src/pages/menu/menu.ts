import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';
import {  NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {ListMasterPage} from '../list-master/list-master';


interface PageItem {
  title: string
  component: any
}
type PageList = PageItem[]

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  username;
  prf;


constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  this.show1();
}

show1() {
  this.username = localStorage.getItem('id');
  this.http.post("http://localhost:3000/users/profile", {username: this.username }).subscribe(res => {
  
    var data = res;
    this.prf = data;
    console.log(data);
  })
}

ionViewDidLoad() {
  console.log('ionViewDidLoad ProfilePage');
}
back() {
  this.navCtrl.push(ListMasterPage);
}

}
