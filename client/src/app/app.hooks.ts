import { Injectable } from '@angular/core';
import { AppHooks } from 'smartux-client';

@Injectable()
export class Hooks implements AppHooks {
  constructor() {
  }

  getServerInitParams() {
    return Promise.resolve({});
  }

  initializeUI(params) {
  }

  overrideStateHandler(oldScreen, newScreen, data) {
    return newScreen;
  }

}
