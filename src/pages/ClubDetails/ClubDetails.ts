import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'ClubDetails',
  templateUrl: 'ClubDetails.html'
})
export class ClubDetails {
  selectedClub: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have a club available as a nav param
    this.selectedClub = navParams.get('club');
  }
  selectClub($event) {
    const clubStadiumImage = document.querySelector('.club-stadium');
    const selectClubButton = $event.target;
    selectClubButton.disabled = true;
    clubStadiumImage.classList.add('activated');
  }
}
