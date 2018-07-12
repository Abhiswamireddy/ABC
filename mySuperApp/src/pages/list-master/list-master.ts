import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController,ToastController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';
import { TranslateService } from '@ngx-translate/core';

import { User } from '../../providers';
import { MainPage } from '../';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { ErrorHandler, NgModule } from '@angular/core';
import {TabsPage} from '../tabs/tabs';
import {SearchPage} from '../search/search';



@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
  pickuptime:String;
  pickupdate: String;
  startlocation:String;
  droptime:String;
  dropdate:String;
 // endlocation:string;

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController,public http:Http,public toastCtrl: ToastController ) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
  search() {
    let data = {
      pickuptime: this.pickuptime,
      pickupdate: this.pickupdate,
      startlocation: this.startlocation,
      droptime: this.droptime,
      dropdate: this.dropdate,
      //endlocation:this.endlocation

    };
    console.log(data);

    this.http.post('http://localhost:3000/users/bikepick', data).pipe(
        map(res => res.json())
    ).subscribe(response => {
        //console.log('POST Response:', response);
      //  this.showToast('POST Response:', response.msg);
        if(response.success==true)
      {
       // this.showToast2('Login Success:');
        this.navCtrl.push(SearchPage)
      }
      else{
        //this.showToast2('Login Failed:Please Enter Valid Credentials');
        this.navCtrl.push(ListMasterPage)
      }
    });
    /*this.http.get('http://localhost:3000/users/getallusers').pipe(
        map(res => res.json())
    ).subscribe(response => {
        console.log('GET Response:', JSON.stringify(response));
        this.showToast('GET Response:', JSON.stringify(response));
    }); */

    // this.http.get('http://localhost:3000/todos_get/' + this.name).pipe(
    //     map(res => res.json())
    // ).subscribe(response => {
    //     //console.log('GET Response:', response);
    //     this.showToast('GET Response:', response.reslt);
    // });
   // this.navCtrl.push(SearchPage);

}
private showToast(message: string,res:Object) {
let toast = this.toastCtrl.create({
  message: message + res,
  duration: 10000
});
toast.present();
}

  }
