import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {HubPage} from '../hub/hub';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  needLocation: string;
  donationLocation: string;

  constructor(public navCtrl: NavController, public http: Http) {
  }

  hub(){
    this.navCtrl.push(HubPage);
  }

  passNeedDonation() {
    // email:yzxyzx@yzx.com pw:yzxyzxyzx
    if (this.needLocation) {
      console.log(this.needLocation);
      let headersNeed = new Headers();
      headersNeed.append('X-Parse-Application-Id', '9MoQlu9dPY0i97GEHASjxxajCrbheGpRmlQmTAhx');
      headersNeed.append('X-Parse-REST-API-Key', 'k1P1zdiGDhArejF9ZauERt40SYciAupmtHk5A4bI');

      let bodyNeed = {
        "needs": "food",
        "location": this.needLocation
      }

      this.http.post('https://parseapi.back4app.com/classes/need', JSON.stringify(bodyNeed), { headers: headersNeed })
        .map(res => res.json())
        .subscribe(data => {
          console.log("POST need to Back4App: Success");
        });
    }
    else if (!this.donationLocation) {
      if (!this.needLocation) {
        alert("Type your location!");
      }
    }

    if (this.donationLocation) {
      console.log(this.donationLocation);

      let headersDonation = new Headers();
      headersDonation.append('X-Parse-Application-Id', '9MoQlu9dPY0i97GEHASjxxajCrbheGpRmlQmTAhx');
      headersDonation.append('X-Parse-REST-API-Key', 'k1P1zdiGDhArejF9ZauERt40SYciAupmtHk5A4bI');

      let bodyDonation = {
        "donations": "food",
        "location": this.donationLocation
      }

      this.http.post('https://parseapi.back4app.com/classes/donation', JSON.stringify(bodyDonation), { headers: headersDonation })
        .map(res => res.json())
        .subscribe(data => {
          console.log("POST donation to Back4App: Success");
        });
    }
    else if (!this.needLocation) {
      if (!this.donationLocation) {
        alert("Type your location!");
      }
    }

  }

}
