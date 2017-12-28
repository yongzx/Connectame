import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';

@IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class TransferPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushPage(){
    this.navCtrl.push(MapPage);
  }

  passDrive(){
    console.log("Success");
  }

}
