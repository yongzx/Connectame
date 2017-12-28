import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = '1412, Market Street, San Francisco';
  fetch_start = "412, Sutter Street, San Francisco";
  fetch_end = '851, California Street, San Francisco';
  end = "500, California Street, San Francisco";
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 11,
      center: { lat: 37.77, lng: -122.44 }
    });

    this.directionsDisplay.setMap(this.map);
    this.calculateAndDisplayRoute(this.start, this.fetch_start, this.fetch_end, this.end);
  }

  calculateAndDisplayRoute(s, fs, fe, e) {
    this.directionsService.route({
      origin: s,
      destination: e,
      travelMode: 'DRIVING',
      waypoints: [{location: fs, stopover: true}, {location: fe, stopover: true}],
      optimizeWaypoints: true
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}
