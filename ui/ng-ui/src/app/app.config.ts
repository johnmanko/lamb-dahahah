import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors, withJsonpSupport } from '@angular/common/http';
import { HttpCORSInterceptor } from './lib/util/http-cors.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always'
      })
    ),
    provideHttpClient(
      withFetch(),
      // Jsonp is required for called the cross-site URL of LocalStack Labmda function URL
      // LocalStack does not properly support CORS headers, especially for preflight requests (OPTIONS)
      // The Lambdas themselves need to return the proper CORS headers, but LocalStack does not support this using Terramform "cors" configuration
      withJsonpSupport(),
      withInterceptors([HttpCORSInterceptor])
    ),
    //withInterceptors([authHttpInterceptorFn])
    // provideAuth0({
    //   ...env.auth,
    //   httpInterceptor: {
    //     ...env.httpInterceptor,
    //   },
    // }),
  ]
};
