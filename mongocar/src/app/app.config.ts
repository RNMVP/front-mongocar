import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import {AppPreset} from '../theme/appPreset';


export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: AppPreset,
        options: {
          prefix: 'p',
          darkModeSelector: '.my-app-dark',
          cssLayer: {
            name: 'primeng',
            order: 'primeng'
          },
        }
      },
      ripple: true,
    })
  ]
};
