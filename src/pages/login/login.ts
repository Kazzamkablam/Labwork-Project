import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushpage(param:string) {
   this.navCtrl.push(param);
}

push() {
  this.navCtrl.push(RegisterPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
