import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromSite from '../site/store/site.reducer';

export interface AppState {
    site: fromSite.State;
    auth: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    site: fromSite.siteReducer,
    auth: fromAuth.authReducer,
};
