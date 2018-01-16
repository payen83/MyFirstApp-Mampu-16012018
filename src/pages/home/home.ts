import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name: string;
  panjang: number;
  lebar: number;
  luas: number;
  staff: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    let myStaff = localStorage.getItem('STAFF');
    if (myStaff != null){
      this.staff = JSON.parse(myStaff);
      this.name = this.staff.name;

      console.log(this.staff);
    }
  }

  showAlert(){
    this.presentAlert('My First App', 'Welcome to MAMPU'+this.name)
  }

  presentAlert(_title, _subtitle){
    let alert = this.alertCtrl.create({
      title: _title,
      subTitle: _subtitle,
      buttons: ['OK']
    });
    alert.present();
  }

  kiraLuas(){
    if(this.panjang < 10 && this.lebar < 10){
      this.luas = this.panjang * this.lebar;
    } else {
      this.presentAlert('Error', 'Nombor tidak lebih dari 10');
    }
  }

  pageProfile(){
    this.navCtrl.push('ProfilePage');
  }

}
