import { browser } from 'protractor';

export class UIStarterPage {
  navigateTo() {
    return browser.get('/');
  }
}
