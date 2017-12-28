import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { NgZone } from '@angular/core';
import { MarkerCluster } from '@ionic-native/google-maps';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-hub',
  templateUrl: 'hub.html'
})
export class HubPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  locations: Array<Object>;

  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor() {
    this.locations = [
      { lat: -31.563910, lng: 147.154312 },
      { lat: -33.718234, lng: 150.363181 },
      { lat: -33.727111, lng: 150.371124 },
      { lat: -33.848588, lng: 151.209834 },
      { lat: -33.851702, lng: 151.216968 },
      { lat: -34.671264, lng: 150.863657 },
      { lat: -35.304724, lng: 148.662905 },
      { lat: -36.817685, lng: 175.699196 },
      { lat: -36.828611, lng: 175.790222 },
      { lat: -37.750000, lng: 145.116667 },
      { lat: -37.759859, lng: 145.128708 },
      { lat: -37.765015, lng: 145.133858 },
      { lat: -37.770104, lng: 145.143299 },
      { lat: -37.773700, lng: 145.145187 },
      { lat: -37.774785, lng: 145.137978 },
      { lat: -37.819616, lng: 144.968119 },
      { lat: -38.330766, lng: 144.695692 },
      { lat: -39.927193, lng: 175.053218 },
      { lat: -41.330162, lng: 174.865694 },
      { lat: -42.734358, lng: 147.439506 },
      { lat: -42.734358, lng: 147.501315 },
      { lat: -42.735258, lng: 147.438000 },
      { lat: -43.999792, lng: 170.463352 }
    ]
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
