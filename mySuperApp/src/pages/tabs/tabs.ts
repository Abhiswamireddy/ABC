import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab1Root, Tab2Root, Tab3Root } from '../';
import { SettingsPage } from '../settings/settings';
import { SearchPage } from '../search/search';
import { ListMasterPage } from '../list-master/list-master';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = ListMasterPage;
  tab2Root: any = SearchPage;
  tab3Root: any = SettingsPage;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['Home', 'Search', 'Settings']).subscribe(values => {
      this.tab1Title = values['Home'];
      this.tab2Title = values['Search'];
      this.tab3Title = values['Settings'];
    });
  }
}
//tabsHideOnSubPages="true"