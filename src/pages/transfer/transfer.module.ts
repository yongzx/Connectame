import { NgModule } from '@angular/core';
import { TransferPage } from './transfer';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [TransferPage],
  imports: [IonicPageModule.forChild(TransferPage)],
  entryComponents: [TransferPage]
})

export class MapPageModule { }