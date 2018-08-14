import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  now: Date = new Date();

  langData = [{ value: 'en', text: 'English' }, { value: 'de', text: 'Deutsch' }, { value: 'it', text: 'Italiano' }];

  languageSettings = {
    theme: 'ios',
    data: this.langData
  };

  birthdaySettings = {
    theme: 'ios',
    max: new Date(this.now.getFullYear() - 18, 11, 31)
  };

  birthday = new Date(1987, 2, 25);

  language = 'en';

  gender = 'female';

  ngOnInit() {
  }

}
