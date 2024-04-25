import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { httpErrorHandlerInterceptor } from './core/interceptors/http-error-handler.interceptor';
import { DialogService } from './shared/services/dialog.service';

export const appConfig: ApplicationConfig = {
  providers: [
    DialogService,
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    provideHttpClient(
      withFetch(),
      withInterceptors([httpErrorHandlerInterceptor])
    ),
  ],
};
// Compare this snippet from src/main.ts:
