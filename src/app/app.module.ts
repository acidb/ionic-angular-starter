import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Router } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MbscModule, mobiscroll } from '@mobiscroll/angular';

mobiscroll.settings = {
  theme: 'ios'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    MbscModule.forRoot({ angularRouter: Router }),
    FormsModule,
    HttpClientJsonpModule,
    BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
