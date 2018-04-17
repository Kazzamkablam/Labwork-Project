import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

// 1700028 Juha Penttinen, Main code part for To do list
  
  constructor(public db: AngularFireDatabase, public fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    this.itemsRef = db.list(this.fire.auth.currentUser.uid);

    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  addItem(newName: string) {
    this.itemsRef.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { text: newText });
  }
  deleteItem(key: string) {    
    this.itemsRef.remove(key); 
  }
  deleteEverything() {
    this.itemsRef.remove();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
    console.log(this.fire.auth.currentUser.email);
  }

}
