import { NgModule } from '@angular/core';
import { HubPage} from './hub';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [HubPage],
  imports: [IonicPageModule.forChild(HubPage)],
  entryComponents: [HubPage]
})

export class HubPageModule { }