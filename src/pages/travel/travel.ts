import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-travel',
  templateUrl: 'travel.html'
})
export class TravelPage {
  driveTo: string;
  driveFrom: string;


  constructor(public navCtrl: NavController) {

  }

  passDrive(){
    console.log("Success");
  }
}
