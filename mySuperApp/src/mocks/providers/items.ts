import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "KTM",
        "profilePic": "assets/imgs/ktm.jpg",
        "about": "KTM-350cc-orange."
      },
      {
        "name": "CBR",
        "profilePic": "assets/imgs/cbr.png",
        "about": "CBR-150R-Orange."
      },
      {
        "name": "DESERTSTORM",
        "profilePic": "assets/imgs/desertstorm_left-side_600x463_motorcycle.png",
        "about": "Royal Enfield-350cc."
      },
      {
        "name": "CLASSSIC 500",
        "profilePic": "assets/imgS/classic500_right-side_silver_600x463_motorcycle.png",
        "about": "Enfield-500cc-classic."
      },
      {
        "name": "GT",
        "profilePic": "assets/imgs/GT-left-red-600x463.png",
        "about": "Enfield-single seater."
      },
      {
        "name": "STONE BLACK",
        "profilePic": "assets/imgs/tb500_right-side_stoneblack_600x463_motorcycle.png",
        "about": "Enfield-Single-seater."
      },
      {
        "name": "THUNDER BIRD",
        "profilePic": "assets/imgs/thnuderbird.jpg",
        "about": "."
      },
      {
        "name": "Squadron Blue",
        "profilePic": "assets/imgs/squadronblue-right-600x463.png",
        "about": "Paul is a Puppy."
      },
      {
        "name": "PULSAR",
        "profilePic": "assets/imgs/pulsar-ns200-r_600x300.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "PULSAR",
        "profilePic": "assets/imgs/pulsar-150-2018-right-side-view_600x300.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "DUKE",
        "profilePic": "assets/imgs/390-duke-right_600x300.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "DOMINAR",
        "profilePic": "assets/imgs/bajaj-dominar-400_600x300.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "THUNDERBIRD",
        "profilePic": "assets/imgs/black-color.png",
        "about": "Paul is a Puppy."
      },
      {
        "name": "FZ ARMADA",
        "profilePic": "assets/imgs/fzs-fi-armada-blue.png",
        "about": "Paul is a Puppy."
      },
      {
        "name": "ACTIVA",
        "profilePic": "assets/imgs/activa.png",
        "about": "Paul is a Puppy."
      },
      {
        "name": "CBR",
        "profilePic": "assets/imgs/cbr.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "SHINE",
        "profilePic": "assets/imgs/cb-shine-white-500x500.png",
        "about": "Paul is a Puppy."
      },
      {
        "name": "GLAMOUR",
        "profilePic": "assets/imgs/hero_glamour_30_3.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "CBR 150",
        "profilePic": "assets/imgs/honda-cbr-150r.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "CBR 250",
        "profilePic": "assets/imgs/honda-cbr250r.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "CBR 650",
        "profilePic": "assets/imgs/honda-cbr-650f-millennium-red.png",
        "about": "Paul is a Puppy."
      },
      {
        "name": "UNICORN",
        "profilePic": "assets/imgs/honda-cb-unicorn-150-pearl-siena-red.png",
        "about": "Paul is a Puppy."
      },
      {
        "name": "UNICORN",
        "profilePic": "assets/imgs/honda-cb-unicorn-daz-2.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "UNICORN",
        "profilePic": "assets/imgs/Honda-CB-Unicorn-HD-Image (1).jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "HONDA LIVO",
        "profilePic": "assets/imgs/honda-livo-sunset-brown-metallic.png",
        "about": "Paul is a Puppy."
      },
      {
        "name": "HONDA X-BLADE",
        "profilePic": "assets/imgs/honda-x-blade.png",
        "about": "Paul is a Puppy."
      },
      {
        "name": "HORNET",
        "profilePic": "assets/imgs/hornet.png",
        "about": "Paul is a Puppy."
      },
      {
        "name": "SHINE",
        "profilePic": "assets/imgs/shine.png",
        "about": "Paul is a Puppy."
      },
      {
        "name": "JUPITER",
        "profilePic": "assets/imgs/tvs_jupiter.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "TVS MAX 4",
        "profilePic": "assets/imgs/tvs_max_4.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "APACHE",
        "profilePic": "assets/imgs/tvs-apache-rtr-180-white.png",
        "about": "Paul is a Puppy."
      },
      {
        "name": "TVS STAR CITY",
        "profilePic": "assets/imgs/tvs-star-city.png",
        "about": "Paul is a Puppy."
      },
      {
        "name": "TVS VICTOR",
        "profilePic": "assets/imgs/TVS-Victor.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "TVS XL",
        "profilePic": "assets/imgs/tvs-xl-100-red.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "KAWASAKI NINJA",
        "profilePic": "assets/imgs/1200px-Kawasaki_Ninja_ZX-6R_ZX600F_Front.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "YAMAHA",
        "profilePic": "assets/imgs/2010-Yamaha-YZF-R6-Motorcycle.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "KAWASAKI NINJA",
        "profilePic": "assets/imgs/2012-Kawasaki-Ninja-ZX-10R-ABS_motorcycle-desktop-wallpapers_3.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "KAWASAKI NINJA",
        "profilePic": "assets/imgs/2012-Kawasaki-Ninja-ZX-10R-ABS_motorcycle-desktop-wallpapers_3.jpg",
        "about": "Paul is a Puppy."
      },
      {
        "name": "KAWASAKI NINJA",
        "profilePic": "assets/imgs/2012-Kawasaki-Ninja-ZX-10R-ABS_motorcycle-desktop-wallpapers_3.jpg",
        "about": "Paul is a Puppy."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
