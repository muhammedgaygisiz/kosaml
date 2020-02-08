import { ActionReducerMap } from '@ngrx/store';
import fromAuth from '../auth/reducers';
import fromSite from '../site/reducers';

export interface AppState {
    site: fromSite.State;
    auth: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    site: fromSite.siteReducer,
    auth: fromAuth.authReducer,
};
