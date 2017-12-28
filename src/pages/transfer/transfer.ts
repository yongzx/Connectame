import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
import { ClusterPage } from '../cluster/cluster';

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

  clusterPage(){
    this.navCtrl.push(ClusterPage);
  }

}
