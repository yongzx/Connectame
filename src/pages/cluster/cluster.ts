import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
import { GoogleMaps, GoogleMap, LatLng, GoogleMapsEvent } from '@ionic-native/google-maps';
import { Platform } from 'ionic-angular/platform/platform';

@IonicPage()
@Component({
  selector: 'page-cluster',
  templateUrl: 'cluster.html',
})
export class ClusterPage {
  @ViewChild('map') 
  private mapElement: ElementRef;
  private map: GoogleMap;
  private location: LatLng;
  constructor(private platform: Platform, private googleMaps: GoogleMaps) {
    this.location = new LatLng(42.36, -71.05);
  }

  ionViewDidLoad(){
    this.platform.ready().then(() => {
      let element = this.mapElement.nativeElement;
      this.map = this.googleMaps.create(element);

      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        let options = {
          target: this.location,
          zoom: 15
        };


        this.map.moveCamera(options);
      });
    });
  }
}