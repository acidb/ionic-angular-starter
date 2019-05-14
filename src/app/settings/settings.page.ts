import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  sound = {
    ring: 100,
    media: 60,
    alarm: 80
  };

  notifications = {
    enable: true,
    message: true,
    birthdays: true,
    tags: true
  };

  pinSettings = {
    template: 'dddd',
    allowLeadingZero: true,
    placeholder: '-',
    mask: '*',
    validate: (event) => {
      return {
        invalid: event.values.length !== 4
      };
    }
  };
}
