import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

export interface Region {
  name: string;
  lots: Lot[];
}

export interface Lot {
  name: string;
  zone: string;
  capacity: number;
}


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  regions: Region[];

  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.regions = [
      {
      name: 'Hillside',
      lots: [
        {
        name: 'N3',
        zone: 'purple',
        capacity: 400
        },
        {
        name: 'C4',
        zone: 'blue',
        capacity: 300
        },
        {
        name: 'R1',
        zone: 'purple',
        capacity: 550
        },
        {
        name: 'R7',
        zone: 'purple',
        capacity: 80
        }
      ]
    },
    {
      name: 'East Campus',
      lots: []
    },
    {
        name: 'Bluestone',
        lots: []
      },
      {
        name: 'Lakeview',
        lots: []
      },
      {
        name: 'Convo',
        lots: [
          {
            name: 'Convo A',
            zone: 'purple',
            capacity: 400
          },
          {
            name: 'Convo B',
            zone: 'purple',
            capacity: 400
          },
          {
            name: 'Convo C',
            zone: 'purple',
            capacity: 400
          },
          {
            name: 'Convo D',
            zone: 'purple',
            capacity: 400
          },
          {
            name: 'Convo E',
            zone: 'purple',
            capacity: 400
          },
          {
            name: 'Convo F',
            zone: 'purple',
            capacity: 400
          },
          {
            name: 'Convo G',
            zone: 'purple',
            capacity: 400
          }
        ]
      },
    ];

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

   

    
    
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
