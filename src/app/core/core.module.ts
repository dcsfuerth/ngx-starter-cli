import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import { InjectionToken, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ApiRequestEffects, APP_ENVIRONMENT, RouterEffects } from '@dcs/ngx-tools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { metaReducers, reducers, State } from '../reducers';
import { HomeEffects } from '../reducers/home/home.effects';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<State>>('Registered Reducers');

export function getReducers() {
  return reducers;
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(REDUCER_TOKEN, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    EffectsModule.forFeature([ApiRequestEffects, RouterEffects, HomeEffects]),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  declarations: [],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
    { provide: APP_ENVIRONMENT, useValue: environment },
    {
      provide: REDUCER_TOKEN,
      useFactory: getReducers,
    },
  ],
})
export class CoreModule {
  constructor() {
    registerLocaleData(localeDe);
  }
}
