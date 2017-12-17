import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  need: string;
  donation: string;

  constructor(public navCtrl: NavController, public http: Http) {
  }

  passNeedDonation(){
    console.log(this.need);
    console.log(this.donation);

    let headersNeed = new Headers();
    headersNeed.append('X-Parse-Application-Id', 'WIENfuc5s29lyvkEAGGJxP6wreVjnBnWTmClnriU');
    headersNeed.append('X-Parse-REST-API-Key', 'Ef6O9cVBLjap7g1o96qRMEhz24gtCAxXMUFPNCAI');
    
    let bodyNeed = {
      "needs": this.need
    }

    this.http.post('https://parseapi.back4app.com/classes/Needs', JSON.stringify(bodyNeed), {headers: headersNeed})
        .map(res => res.json())
        .subscribe(data => {
          console.log("POST need to Back4App: Success");
        });
    
    let headersDonation = new Headers();
    headersDonation.append('X-Parse-Application-Id', 'WIENfuc5s29lyvkEAGGJxP6wreVjnBnWTmClnriU');
    headersDonation.append('X-Parse-REST-API-Key', 'Ef6O9cVBLjap7g1o96qRMEhz24gtCAxXMUFPNCAI');
    
    let bodyDonation = {
      "donation": this.donation
    }

    this.http.post('https://parseapi.back4app.com/classes/Donation', JSON.stringify(bodyDonation), {headers: headersDonation})
        .map(res => res.json())
        .subscribe(data => {
          console.log("POST donation to Back4App: Success");
        });
      
  }

}
