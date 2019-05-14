import { Component } from '@angular/core';
import { MbscSelectOptions, MbscDatetimeOptions } from '@mobiscroll/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  now = new Date();

  langData = [{
    value: 'en',
    text: 'English'
  }, {
    value: 'de',
    text: 'Deutsch'
  }, {
    value: 'it',
    text: 'Italiano'
  }];

  languageSettings: MbscSelectOptions = {
    theme: 'ios',
    data: this.langData
  };

  birthdaySettings: MbscDatetimeOptions = {
    theme: 'ios',
    max: new Date(this.now.getFullYear() - 18, 11, 31)
  };

  birthday = new Date(1987, 2, 25);
  language = 'en';
  gender = 'female';
}
