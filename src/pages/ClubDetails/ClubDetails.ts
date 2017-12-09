import {
  Component
} from '@angular/core';

import {
  NavController,
  NavParams,
  AlertController
} from 'ionic-angular';

@Component({
  selector: 'ClubDetails',
  templateUrl: 'ClubDetails.html'
})
export class ClubDetails {
  selectedClub: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    // If we navigated to this page, we will have a club available as a nav param
    this.selectedClub = navParams.get('club');
  }
  selectClub($event) {
    const clubStadiumImage = document.querySelector('.club-stadium');
    const selectedClub = document.querySelector('#club').textContent;
    const selectClubButton = $event.target;
    setTimeout(() => {
      let alert = this.alertCtrl.create({
        title: 'Congratulations!',
        subTitle: `You have selected ${selectedClub} as your team!`,
        buttons: [{
          text: 'Signup!',
          handler: data => {
            console.log('Go to sign up');
          }
        }]
      });
      alert.present();

    }, 800);

    selectClubButton.disabled = true;
    clubStadiumImage.classList.add('activated');
  }
}
