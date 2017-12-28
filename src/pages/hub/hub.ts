import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { NgZone } from '@angular/core';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-hub',
  templateUrl: 'hub.html'
})
export class HubPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  
  start = 'chicago, il';
  end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController) {
    var markers = [];
  }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 11,
      center: { lat: 37.77, lng: -122.44 }
    });

    this.directionsDisplay.setMap(this.map);
    console.log(this.map);

    // Add Markers
    function addMarker(position, map) {
      return new google.maps.Marker({
        position,
        map
      });
    }

    // Existing Hubs
    const hub1 = new google.maps.LatLng(37.77, -122.44);
    const hub2 = new google.maps.LatLng(37.76, -122.43);
    const hub3 = new google.maps.LatLng(37.78, -122.45);
    const hub4 = new google.maps.LatLng(37.79, -122.44);
    const hub5 = new google.maps.LatLng(37.77, -122.45);
    addMarker(hub1, this.map);
    addMarker(hub2, this.map);
    addMarker(hub3, this.map);
    addMarker(hub4, this.map);
    addMarker(hub5, this.map);

    // Show Marker Clusters

    /*
    this.map.addListener('click', function (e) {
      placeMarker(e.latLng, this.map);
    });

    function placeMarker(location, map) {
      var marker = new google.maps.Marker({
        position: location,
        map: map
      });
      return marker;
    }
    */

  }
}
