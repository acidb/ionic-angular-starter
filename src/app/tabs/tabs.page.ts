import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild('bn')
  bottomNavigation: any;

  ionViewDidEnter() {
    this.bottomNavigation.instance.refresh();
  }
}
