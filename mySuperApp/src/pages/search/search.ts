import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items, public toastCtrl: ToastController) { }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    console.log(val+' value')
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
  success() {
    this.showToast2('Bike added Successfully');
  }
  private showToast2(message: string) {
    let toast = this.toastCtrl.create({
    message: message,
    duration: 300
    });
    toast.present();
    }
}
