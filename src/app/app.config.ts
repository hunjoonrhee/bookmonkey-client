import { ApplicationConfig } from '@angular/core';
import {provideHttpClient} from "@angular/common/http";
import {provideRouter, withComponentInputBinding, withDebugTracing} from "@angular/router";
import {routes} from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideRouter(routes, withComponentInputBinding(),
      // withDebugTracing()
  )]
};
