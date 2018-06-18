import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromHome from './home/home.reducer';
import { environment } from '../../environments/environment';
import {
  apiError,
  hmrStateSetter,
  IApiErrorState,
  logger,
  resetReducer,
  immutableDevMetaReducer,
} from '@dcs/ngx-tools';

export interface State {
  router: RouterReducerState;
  apiError: IApiErrorState;
  home: fromHome.State;
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: [], rehydrate: true })(reducer);
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  home: fromHome.reducer,
  apiError,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [immutableDevMetaReducer, logger, resetReducer, hmrStateSetter, localStorageSyncReducer]
  : [resetReducer, localStorageSyncReducer];
