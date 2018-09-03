import { MbscModule } from '@mobiscroll/angular';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ProfilePageModule } from '../profile/profile.module';
import { SettingsPageModule } from '../settings/settings.module';
import { HomePageModule } from '../home/home.module';

@NgModule({
  imports: [ 
    MbscModule, 
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    SettingsPageModule,
    ProfilePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
