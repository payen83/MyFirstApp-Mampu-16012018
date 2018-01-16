import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  staff: any = {name: undefined, organization: undefined};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let myStaff = localStorage.getItem('STAFF');
    if (myStaff != null){
      this.staff = JSON.parse(myStaff);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  save(){
    localStorage.setItem('STAFF', JSON.stringify(this.staff))
  }

}
