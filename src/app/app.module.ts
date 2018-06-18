import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ENVIRONMENT, NgxToolsModule } from '@dcs/ngx-tools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { ComponentsModule } from './components/components.module';
import { metaReducers, reducers, State } from './reducers';
import { HomeEffects } from './reducers/home/home.effects';
import { environment } from '../environments/environment';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<State>>('Registered Reducers');

export function getReducers() {
  return reducers;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxToolsModule,
    ComponentsModule,
    StoreModule.forRoot(REDUCER_TOKEN, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    EffectsModule.forRoot([AppEffects, HomeEffects]),
  ],
  providers: [
    { provide: APP_ENVIRONMENT, useValue: environment },
    {
      provide: REDUCER_TOKEN,
      useFactory: getReducers,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
