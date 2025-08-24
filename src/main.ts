import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { appRoutes } from './app/app.routes';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withFetch())
  ]
});