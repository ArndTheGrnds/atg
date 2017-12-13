import {
  Component
} from '@angular/core';

import {
  NavController,
  NavParams,
  AlertController,
  MenuController
} from 'ionic-angular';

@Component({
  selector: 'signupform',
  templateUrl: 'SignUpForm.html'
})
export class SignUpForm {
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public menuCtrl: MenuController) {
    this.menuCtrl.swipeEnable(false);
  }
  launchLogin(social) {
    let alert = this.alertCtrl.create({
      subTitle: `Logged in!`,
      buttons: [{
        text: 'Dismiss',
        handler: data => {
          console.log('End');
        }
      }]
    });
    alert.present();
    // this.navCtrl.push();
  }
}
