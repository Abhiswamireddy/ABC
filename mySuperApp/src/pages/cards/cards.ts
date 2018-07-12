import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {
    this.cardItems = [
      {
        user: {
          avatar: 'assets/imgs/harish.jpg',
          name: 'sriharsha'
        },
        
        image: 'assets/imgs/2013-Ninja-ZX-10R-ABS-white.jpg',
        content:'A moderately good app with proper vehicles and good price..The employees were helpful and friendly,had an amazing experenice with Riders Hut '

      },
      
      
      {
        user: {
          avatar: 'assets/imgs/jm.jpg',
          name: 'prathik'
        },
        
        image: 'assets/imgs/2016-Ducati-XDiavel-beauty-2244.jpg',
        content:'Thumbs Up to "RIDERS HUT". I had booked a bike, Mr Kanakraju was the concerned person there. Very professional and decent person. He informed me all the rules and regulations and gave complete details of the bike. Bike was also in very good condition.'

      },
      {
        user: {
          avatar: 'assets/imgs/ms.png',
          name: 'shanaya'
        },
        
        image: 'assets/imgs/suzuki-access-.jpg',
        content:'Riders hut  is an amazing app,and please add favorite option,very useful app. '
          },
      {
        user: {
          avatar: 'assets/imgs/sreelesh.jpg',
          name: 'Sreelesh'
        },
      
        image: 'assets/imgs/s2.png',
        content:'provides nice overview of all bikes and prices.it is really nice,all the best Riders hut'   
         },
      {
        user: {
          avatar: 'assets/imgs/anusha.jpg',
          name: 'Anu kanchi'
        },
        
        image: 'assets/imgs/Vespa_GTS_125_scooter.jpg',
        content:'i would like to take this ooprtunity to thank you guys for giving me a wonderful serviceso far.both your vehicles and your services deserves 5 star ratings.'
      },
      {
        user: {
          avatar: 'assets/imgs/img.jpg',
          name: 'Neelu'
        },
        
        image: 'assets/imgs/suzuki-access-.jpg',
        content: 'the bike was in excellent condition,had an amazing experience.I am a regular customer '    
       },
       {
        user: {
          avatar: 'assets/imgs/harish.jpg',
          name: 'Harish'
        },
        
        image: 'assets/imgs/SUZUKI.jpg',
        content:'this app is very useful to the users who have fond of bikes..a bike lover should choose this app at first..you can get benfit from this app...so i request everyone to use this app'    
       },
    ];

  }
}