import { Component } from '@angular/core';

import { TransferPage } from '../transfer/transfer';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TransferPage;

  constructor() {

  }
}
