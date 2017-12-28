import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { GoogleMaps } from '@ionic-native/google-maps';

import { HubPage } from '../pages/hub/hub';
import { TransferPage } from '../pages/transfer/transfer';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MapPage } from '../pages/map/map';
import { ClusterPage } from '../pages/cluster/cluster';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GoogleMapsClusterProvider } from '../providers/google-maps-cluster/google-maps-cluster';

@NgModule({
  declarations: [
    MyApp,
    HubPage,
    TransferPage,
    HomePage,
    TabsPage,
    MapPage,
    ClusterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HubPage,
    TransferPage,
    HomePage,
    TabsPage,
    MapPage,
    ClusterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleMapsProvider,
    ConnectivityProvider,
    GoogleMapsClusterProvider
  ]
})
export class AppModule {}
