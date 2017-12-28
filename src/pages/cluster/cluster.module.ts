import { NgModule } from '@angular/core';
import { ClusterPage } from './cluster';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [ClusterPage],
  imports: [IonicPageModule.forChild(ClusterPage)],
  entryComponents: [ClusterPage]
})

export class HomePageModule {}