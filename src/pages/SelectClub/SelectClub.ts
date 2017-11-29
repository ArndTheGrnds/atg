import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ClubDetails } from '../ClubDetails/ClubDetails';

@Component({
  selector: 'SelectClub',
  templateUrl: 'SelectClub.html'
})
export class SelectClub {
  clubList: { 
    league: { 
      id: string; 
      country: string; 
      teams: { 
        name: string; 
        ground: string; 
        capacity: number; 
        founded: number; 
        opened: number; 
        rival: string; 
        hashTag: string; 
        knownAs: 
        string; 
      }[]; 
    }; 
  }[];
    // https://stackoverflow.com/questions/38110614/us-ngfor-for-json-object-with-nested-arrays
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.clubList = [
      {
        league: {
          id: 'Premier League',
          country: 'England',
          teams: [
            {
              name: 'Man United',
              ground: 'Old Trafford',
              capacity: 75000,
              founded: 1878,
              opened: 1910,
              rival: 'Liverpool',
              hashTag: '#MUFC',
              knownAs: 'The Red Devils',
            },
          ]
        }
      }
    ]
  }
    
  itemTapped(event, club) {
    this.navCtrl.push(ClubDetails, {
      club: club
    });
  }
}
